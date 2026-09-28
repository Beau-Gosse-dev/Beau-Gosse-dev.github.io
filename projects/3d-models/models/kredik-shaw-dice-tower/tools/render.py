"""Colour preview renderer for several binary STLs (numpy z-buffer, orthographic)."""
import math, struct, sys
from pathlib import Path
import numpy as np
from PIL import Image, ImageDraw, ImageFont


def load_stl(path):
    raw = Path(path).read_bytes()
    n = struct.unpack_from('<I', raw, 80)[0]
    dt = np.dtype([('n', '<f4', (3,)), ('v', '<f4', (3, 3)), ('a', '<u2')])
    return np.frombuffer(raw, dtype=dt, offset=84, count=n)['v'].astype(float)


def render(parts, target, azimuth=-90, elevation=15, size=(1200, 900), title=None, caption=None,
           background=(236, 238, 241), margin=0.9, glow=()):
    az, el = math.radians(azimuth), math.radians(elevation)
    view = np.array([math.cos(el) * math.cos(az), math.cos(el) * math.sin(az), math.sin(el)])  # towards viewer
    right = np.array([-math.sin(az), math.cos(az), 0.])
    up = np.cross(view, right)
    basis = np.stack([right, up, view], axis=1)
    tris, cols, glows = [], [], []
    for i, (path, color) in enumerate(parts):
        t = load_stl(path)
        tris.append(t)
        cols.append(np.tile(np.array(color, float), (len(t), 1)))
        glows.append(np.full(len(t), i in glow))
    tris = np.concatenate(tris); cols = np.concatenate(cols); glows = np.concatenate(glows)
    normals = np.cross(tris[:, 1] - tris[:, 0], tris[:, 2] - tris[:, 0])
    normals /= np.maximum(np.linalg.norm(normals, axis=1)[:, None], 1e-12)
    proj = tris @ basis
    lo, hi = proj.min(axis=(0, 1)), proj.max(axis=(0, 1))
    W, H = size
    top_pad = 70 if title else 20
    bot_pad = 50 if caption else 20
    scale = min(W * margin / (hi[0] - lo[0]), (H - top_pad - bot_pad) * 0.96 / (hi[1] - lo[1]))
    sc = proj.copy()
    sc[:, :, 0] = (proj[:, :, 0] - (lo[0] + hi[0]) / 2) * scale + W / 2
    sc[:, :, 1] = top_pad + (H - top_pad - bot_pad) / 2 - (proj[:, :, 1] - (lo[1] + hi[1]) / 2) * scale
    img = np.zeros((H, W, 3)); img[:] = background
    depth = np.full((H, W), -np.inf)
    nbuf = np.zeros((H, W, 3))
    key = np.array([-0.45, -0.75, 0.55]); key /= np.linalg.norm(key)
    fill = np.array([0.7, -0.2, 0.3]); fill /= np.linalg.norm(fill)
    for tri, nrm, col, g in zip(sc, normals, cols, glows):
        if nrm @ view <= 1e-9:
            continue
        x0, y0 = np.floor(tri[:, :2].min(0)).astype(int)
        x1, y1 = np.ceil(tri[:, :2].max(0)).astype(int)
        x0, y0, x1, y1 = max(0, x0), max(0, y0), min(W - 1, x1), min(H - 1, y1)
        if x1 < x0 or y1 < y0:
            continue
        a, b, c = tri
        den = (b[1] - c[1]) * (a[0] - c[0]) + (c[0] - b[0]) * (a[1] - c[1])
        if abs(den) < 1e-12:
            continue
        yy, xx = np.mgrid[y0:y1 + 1, x0:x1 + 1] + 0.5
        l1 = ((b[1] - c[1]) * (xx - c[0]) + (c[0] - b[0]) * (yy - c[1])) / den
        l2 = ((c[1] - a[1]) * (xx - c[0]) + (a[0] - c[0]) * (yy - c[1])) / den
        l3 = 1 - l1 - l2
        z = l1 * a[2] + l2 * b[2] + l3 * c[2]
        buf = depth[y0:y1 + 1, x0:x1 + 1]
        m = (l1 >= -1e-6) & (l2 >= -1e-6) & (l3 >= -1e-6) & (z > buf)
        buf[m] = z[m]
        if g:
            shade = 0.85 + 0.25 * max(0, float(nrm @ key))
        else:
            shade = 0.30 + 0.62 * max(0, float(nrm @ key)) + 0.22 * max(0, float(nrm @ fill)) + 0.12 * max(0, nrm[2])
        img[y0:y1 + 1, x0:x1 + 1][m] = np.clip(col * shade, 0, 255)
        nbuf[y0:y1 + 1, x0:x1 + 1][m] = nrm
    # Edge lines from depth/normal discontinuities
    fg = np.isfinite(depth)
    d = np.where(fg, depth, depth[fg].min() - 50 if fg.any() else 0)
    edge = np.zeros((H, W), bool)
    for axis in (0, 1):
        dd = np.abs(np.diff(d, axis=axis)) > 1.2 * 1
        nn = np.linalg.norm(np.diff(nbuf, axis=axis), axis=2) > 0.5
        e = dd | nn
        if axis == 0:
            edge[1:] |= e;
        else:
            edge[:, 1:] |= e
    img[edge] = img[edge] * 0.55
    im = Image.fromarray(img.astype(np.uint8))
    dr = ImageDraw.Draw(im)
    try:
        font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 30)
        small = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 20)
    except OSError:
        font = small = ImageFont.load_default()
    if title:
        dr.text((W / 2, 22), title, font=font, anchor='mt', fill='#23262d')
    if caption:
        dr.text((W / 2, H - 34), caption, font=small, anchor='mt', fill='#555b66')
    im.save(target)


if __name__ == '__main__':
    pass
