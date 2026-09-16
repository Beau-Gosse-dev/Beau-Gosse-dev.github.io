"""Render an actual binary STL with a CPU depth buffer. Requires numpy and Pillow."""
from pathlib import Path
import argparse
import math
import struct
import numpy as np
from PIL import Image, ImageDraw, ImageFont

def render(source, target, title, azimuth_degrees=200, elevation_degrees=17,
           caption='Rendered from the downloadable STL'):
    raw = Path(source).read_bytes()
    count = struct.unpack_from('<I', raw, 80)[0]
    if len(raw) != 84 + 50 * count:
        raise ValueError('Expected a binary STL')
    dtype = np.dtype([('normal', '<f4', (3,)), ('vertices', '<f4', (3, 3)), ('attribute', '<u2')])
    triangles = np.frombuffer(raw, dtype=dtype, offset=84, count=count)['vertices'].astype(float)
    normals = np.cross(triangles[:, 1] - triangles[:, 0], triangles[:, 2] - triangles[:, 0])
    normals /= np.maximum(np.linalg.norm(normals, axis=1)[:, None], 1e-12)
    azimuth, elevation = math.radians(azimuth_degrees), math.radians(elevation_degrees)
    view = np.array([math.cos(elevation)*math.cos(azimuth), math.cos(elevation)*math.sin(azimuth), math.sin(elevation)])
    right = np.array([-math.sin(azimuth), math.cos(azimuth), 0.])
    up = np.cross(view, right)
    projected = triangles @ np.stack([right, up, view], axis=1)
    low, high = projected.min(axis=(0, 1)), projected.max(axis=(0, 1))
    width, height = 1200, 1000
    scale = min(1000/(high[0]-low[0]), 760/(high[1]-low[1]))
    screen = projected.copy()
    screen[:, :, 0] = (projected[:, :, 0]-(low[0]+high[0])/2)*scale+width/2
    screen[:, :, 1] = height/2+15-(projected[:, :, 1]-(low[1]+high[1])/2)*scale
    pixels = np.full((height, width, 3), [235, 241, 242], dtype=np.uint8)
    depth = np.full((height, width), -np.inf)
    light = np.array([-.35, -.65, .8]); light /= np.linalg.norm(light)
    color = np.array([74, 166, 164])
    for tri, normal in zip(screen, normals):
        if normal @ view <= 1e-8:
            continue
        x0, y0 = np.floor(tri[:, :2].min(0)).astype(int)
        x1, y1 = np.ceil(tri[:, :2].max(0)).astype(int)
        x0, y0, x1, y1 = max(0,x0), max(0,y0), min(width-1,x1), min(height-1,y1)
        if x1 < x0 or y1 < y0:
            continue
        a,b,c = tri
        denominator = (b[1]-c[1])*(a[0]-c[0])+(c[0]-b[0])*(a[1]-c[1])
        if abs(denominator) < 1e-9:
            continue
        yy,xx = np.mgrid[y0:y1+1,x0:x1+1]; xx=xx+.5; yy=yy+.5
        aa=((b[1]-c[1])*(xx-c[0])+(c[0]-b[0])*(yy-c[1]))/denominator
        bb=((c[1]-a[1])*(xx-c[0])+(a[0]-c[0])*(yy-c[1]))/denominator
        cc=1-aa-bb
        zz=aa*a[2]+bb*b[2]+cc*c[2]
        buf=depth[y0:y1+1,x0:x1+1]
        mask=(aa>=-1e-7)&(bb>=-1e-7)&(cc>=-1e-7)&(zz>buf)
        buf[mask]=zz[mask]
        shade=.42+.58*max(0,float(normal@light))
        pixels[y0:y1+1,x0:x1+1][mask]=np.clip(color*shade,0,255).astype(np.uint8)
    image = Image.fromarray(pixels)
    draw=ImageDraw.Draw(image)
    font_path=Path('C:/Windows/Fonts/segoeuib.ttf')
    font=ImageFont.truetype(str(font_path), 34) if font_path.exists() else ImageFont.load_default()
    small=ImageFont.truetype('C:/Windows/Fonts/segoeui.ttf',22) if font_path.exists() else font
    draw.text((width/2,38),title,font=font,anchor='mt',fill='#253b40')
    draw.text((width/2,height-42),caption,font=small,anchor='mt',fill='#53666c')
    image.save(target)
    print(f'Rendered {Path(source).name} ({count:,} triangles)',flush=True)

if __name__ == '__main__':
    parser=argparse.ArgumentParser()
    parser.add_argument('source'); parser.add_argument('target'); parser.add_argument('title')
    parser.add_argument('--azimuth', type=float, default=200)
    parser.add_argument('--elevation', type=float, default=17)
    parser.add_argument('--caption', default='Rendered from the downloadable STL')
    args=parser.parse_args()
    render(args.source,args.target,args.title,args.azimuth,args.elevation,args.caption)
