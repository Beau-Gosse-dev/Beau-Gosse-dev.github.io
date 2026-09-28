"""Export the printable STLs from kredik_shaw_dice_tower.scad.

OpenSCAD flattens each part to a .csg tree, and tools/csg_eval.py evaluates it
with Manifold (much faster than OpenSCAD 2021's CGAL renderer).
Requires: openscad on PATH, numpy, manifold3d.
Newer OpenSCAD releases can also export each part directly from the GUI.
"""
from pathlib import Path
import subprocess
import sys
import tempfile

ROOT = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT / 'tools'))
import csg_eval  # noqa: E402

PARTS = {
    'tower': 'kredik_shaw_tower.stl',
    'spire': 'kredik_shaw_spire.stl',
    'tray': 'kredik_shaw_tray.stl',
    'windows': 'kredik_shaw_window_tiles.stl',
}


def export(part, filename):
    with tempfile.TemporaryDirectory() as tmp:
        csg = Path(tmp) / f'{part}.csg'
        subprocess.run(['openscad', '-o', str(csg), '-D', f'part="{part}"',
                        str(ROOT / 'kredik_shaw_dice_tower.scad')], check=True, capture_output=True)
        m = csg_eval.csg_to_manifold(str(csg))
    verts, tris = csg_eval.to_arrays(m)
    csg_eval.write_stl(ROOT / filename, verts, tris, header=f'Kredik Shaw dice tower: {part}'.encode())
    lo, hi = m.bounding_box()[:3], m.bounding_box()[3:]
    size = [round(b - a, 1) for a, b in zip(lo, hi)]
    print(f'{filename}: {len(tris):,} triangles, {size[0]} x {size[1]} x {size[2]} mm')


if __name__ == '__main__':
    for part, filename in PARTS.items():
        export(part, filename)
