"""Evaluate an OpenSCAD .csg file with Manifold instead of CGAL.

OpenSCAD 2021 flattens a .scad model into a .csg tree quickly, but its CGAL
renderer takes a very long time on a model this detailed. This evaluator
rebuilds the same tree with manifold3d, reproducing OpenSCAD's fragment
counts so the mesh matches what newer OpenSCAD versions produce.
Supported: cube, cylinder, sphere, polyhedron, square, circle, polygon,
linear_extrude, rotate_extrude, multmatrix, union/group/render/color,
difference, intersection, hull, offset.
"""
import math
import re
import numpy as np
import manifold3d as md

GRID_FINE = 0.00000095367431640625

# ---------------------------------------------------------------- parsing
TOKEN = re.compile(r'\s*(?:(\$?[A-Za-z_][A-Za-z0-9_]*)|(-?\d+(?:\.\d*)?(?:[eE][-+]?\d+)?)|("(?:[^"\\]|\\.)*")|(.))', re.S)


def tokenize(text):
    tokens = []
    for name, number, string, sym in TOKEN.findall(text):
        if name:
            tokens.append(('name', name))
        elif number:
            tokens.append(('num', float(number)))
        elif string:
            tokens.append(('str', string[1:-1]))
        elif sym.strip():
            tokens.append(('sym', sym))
    return tokens


class Parser:
    def __init__(self, text):
        self.t = tokenize(text)
        self.i = 0

    def peek(self):
        return self.t[self.i] if self.i < len(self.t) else (None, None)

    def take(self, kind=None, value=None):
        tok = self.peek()
        if (kind and tok[0] != kind) or (value is not None and tok[1] != value):
            raise SyntaxError(f'expected {kind} {value!r}, got {tok} at token {self.i}')
        self.i += 1
        return tok

    def value(self):
        kind, v = self.peek()
        if kind == 'num':
            self.i += 1
            return v
        if kind == 'str':
            self.i += 1
            return v
        if kind == 'name':
            self.i += 1
            return {'true': True, 'false': False, 'undef': None}.get(v, v)
        if kind == 'sym' and v == '-':
            self.i += 1
            return -self.value()
        if kind == 'sym' and v == '[':
            self.i += 1
            items = []
            while self.peek() != ('sym', ']'):
                items.append(self.value())
                if self.peek() == ('sym', ','):
                    self.i += 1
            self.i += 1
            return items
        raise SyntaxError(f'bad value {self.peek()}')

    def node(self):
        _, name = self.take('name')
        self.take('sym', '(')
        args, pos = {}, []
        while self.peek() != ('sym', ')'):
            if self.peek()[0] == 'name' and self.t[self.i + 1] == ('sym', '='):
                key = self.take('name')[1]
                self.take('sym', '=')
                args[key] = self.value()
            else:
                pos.append(self.value())
            if self.peek() == ('sym', ','):
                self.i += 1
        self.take('sym', ')')
        children = []
        if self.peek() == ('sym', '{'):
            self.i += 1
            while self.peek() != ('sym', '}'):
                children.append(self.node())
            self.i += 1
        elif self.peek() == ('sym', ';'):
            self.i += 1
        return (name, args, pos, children)

    def nodes(self):
        out = []
        while self.peek()[0] is not None:
            out.append(self.node())
        return out


# ---------------------------------------------------------------- geometry
def fragments(r, a):
    fn, fs, fa = a.get('$fn', 0) or 0, a.get('$fs', 2), a.get('$fa', 12)
    if r < GRID_FINE:
        return 3
    if fn > 0:
        return int(fn if fn >= 3 else 3)
    return int(math.ceil(max(min(360.0 / fa, r * 2 * math.pi / fs), 5)))


def circle_pts(r, n):
    return [(r * math.cos(2 * math.pi * i / n), r * math.sin(2 * math.pi * i / n)) for i in range(n)]


EMPTY3 = md.Manifold()
EMPTY2 = md.CrossSection()


def is2d(x):
    return isinstance(x, md.CrossSection)


def union(items):
    items = [x for x in items if x is not None]
    if not items:
        return None
    if is2d(items[0]):
        return md.CrossSection.batch_boolean(items, md.OpType.Add) if len(items) > 1 else items[0]
    return md.Manifold.batch_boolean(items, md.OpType.Add) if len(items) > 1 else items[0]


def cylinder(a):
    h = a['h']
    r1, r2 = a['r1'], a['r2']
    n = fragments(max(r1, r2), a)
    z0 = -h / 2 if a.get('center') else 0
    if r1 <= 0 and r2 <= 0:
        return None
    if r1 <= 0:  # inverted cone: build upright and flip
        m = md.Manifold.extrude(md.CrossSection([circle_pts(r2, n)]), h, scale_top=(0, 0))
        m = m.mirror((0, 0, 1)).translate((0, 0, h))
    else:
        m = md.Manifold.extrude(md.CrossSection([circle_pts(r1, n)]), h, scale_top=(r2 / r1, r2 / r1))
    return m.translate((0, 0, z0))


def sphere(a):
    r = a['r']
    n = fragments(r, a)
    rings = (n + 1) // 2
    pts = []
    for i in range(rings):
        phi = math.pi * (i + 0.5) / rings
        rr, z = r * math.sin(phi), r * math.cos(phi)
        pts += [(x, y, z) for x, y in circle_pts(rr, n)]
    return md.Manifold.hull_points(np.array(pts))


def cube(a):
    s = a['size']
    s = [s] * 3 if not isinstance(s, list) else s
    return md.Manifold.cube(tuple(s), bool(a.get('center')))


def polyhedron(a):
    pts = np.array(a['points'], dtype=np.float32)
    tris = []
    for f in a['faces']:
        f = list(reversed(f))  # OpenSCAD faces are clockwise seen from outside
        for k in range(1, len(f) - 1):
            tris.append((f[0], f[k], f[k + 1]))
    mesh = md.Mesh(vert_properties=pts, tri_verts=np.array(tris, dtype=np.uint32))
    return md.Manifold(mesh)


def polygon(a):
    pts = a['points']
    paths = a.get('paths')
    if paths is None:
        contours = [pts]
    else:
        contours = [[pts[i] for i in p] for p in paths]
    return md.CrossSection([[tuple(p) for p in c] for c in contours], md.FillRule.EvenOdd)


def square(a):
    s = a['size']
    s = [s, s] if not isinstance(s, list) else s
    return md.CrossSection.square(tuple(s), bool(a.get('center')))


def evaluate(node):
    name, a, pos, kids = node
    if name == 'cube':
        return cube(a)
    if name == 'cylinder':
        return cylinder(a)
    if name == 'sphere':
        return sphere(a)
    if name == 'polyhedron':
        return polyhedron(a)
    if name == 'square':
        return square(a)
    if name == 'circle':
        return md.CrossSection([circle_pts(a['r'], fragments(a['r'], a))])
    if name == 'polygon':
        return polygon(a)
    child = [evaluate(k) for k in kids]
    child = [c for c in child if c is not None and not c.is_empty()]
    if name in ('group', 'union', 'render', 'color', 'children'):
        return union(child)
    if not child:
        return None
    if name == 'difference':
        first, rest = child[0], child[1:]
        if not rest:
            return first
        if is2d(first):
            return md.CrossSection.batch_boolean([first] + rest, md.OpType.Subtract)
        return md.Manifold.batch_boolean([first] + rest, md.OpType.Subtract)
    if name == 'intersection':
        if is2d(child[0]):
            return md.CrossSection.batch_boolean(child, md.OpType.Intersect)
        return md.Manifold.batch_boolean(child, md.OpType.Intersect)
    if name == 'hull':
        if is2d(child[0]):
            return md.CrossSection.batch_hull(child)
        return md.Manifold.batch_hull(child)
    if name == 'multmatrix':
        m = np.array(a['m'] if 'm' in a else pos[0], dtype=float)
        u = union(child)
        if is2d(u):
            return u.transform(m[:2, [0, 1, 3]])
        return u.transform(m[:3, :])
    if name == 'linear_extrude':
        if a.get('twist'):
            raise NotImplementedError('twist')
        u = union(child)
        h = a['height']
        sc = a.get('scale', [1, 1])
        sc = [sc, sc] if not isinstance(sc, list) else sc
        m = md.Manifold.extrude(u, h, scale_top=tuple(sc))
        return m.translate((0, 0, -h / 2)) if a.get('center') else m
    if name == 'rotate_extrude':
        u = union(child)
        (x0, y0, x1, y1) = u.bounds()
        n = fragments(max(abs(x0), abs(x1)), a)
        angle = a.get('angle', 360)
        n = max(3, int(math.ceil(n * abs(angle) / 360)))
        return md.Manifold.revolve(u, n, angle)
    if name == 'offset':
        u = union(child)
        if a.get('r') is not None and a.get('r') != 0:
            r = a['r']
            return u.offset(r, md.JoinType.Round, 2.0, fragments(abs(r), a))
        return u.offset(a.get('delta', 0), md.JoinType.Miter if a.get('chamfer') is not True else md.JoinType.Square, 2.0)
    raise NotImplementedError(name)


def csg_to_manifold(path):
    tree = Parser(open(path).read()).nodes()
    result = union([evaluate(n) for n in tree])
    return result if result is not None else EMPTY3


def to_arrays(m):
    mesh = m.to_mesh()
    return np.asarray(mesh.vert_properties)[:, :3].astype(np.float64), np.asarray(mesh.tri_verts).astype(np.int64)


def write_stl(path, verts, tris, header=b'OpenSCAD model'):
    v = verts[tris]
    n = np.cross(v[:, 1] - v[:, 0], v[:, 2] - v[:, 0])
    n /= np.maximum(np.linalg.norm(n, axis=1)[:, None], 1e-12)
    rec = np.zeros(len(tris), dtype=[('n', '<f4', 3), ('v', '<f4', (3, 3)), ('a', '<u2')])
    rec['n'], rec['v'] = n, v
    with open(path, 'wb') as f:
        f.write(header.ljust(80, b' ')[:80])
        f.write(np.uint32(len(tris)).tobytes())
        f.write(rec.tobytes())
