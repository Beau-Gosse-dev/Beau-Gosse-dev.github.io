"""Photo-interpreted HO building kit. All generated geometry is in millimetres.
Run with Python 3.12; dependencies: manifold3d, numpy, trimesh, matplotlib.
Edit dimensions.json to revise assumed real-world sizes, then rerun.
"""
from pathlib import Path
import sys, json, random, math, zipfile
ROOT = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT / '_deps'))
import numpy as np
import manifold3d as md
import trimesh
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d.art3d import Poly3DCollection

P = json.loads((ROOT / 'dimensions.json').read_text())
F = 304.8 / P['scale']
T = P['wall_mm']
RT = P['roof_vertical_thickness_mm']
OUT = ROOT / 'STL'; OUT.mkdir(exist_ok=True)

def box(x,y,z,dx,dy,dz):
    return md.Manifold.cube((dx,dy,dz)).translate((x,y,z))

def hull(points):
    return md.Manifold.hull_points(np.array(points, dtype=float))

def union(parts):
    return md.Manifold.batch_boolean(parts, md.OpType.Add)

def subtract(shape, cuts):
    return md.Manifold.batch_boolean([shape]+cuts, md.OpType.Subtract)

def prism_yz(x0,x1,points):
    return hull([(x,y,z) for x in (x0,x1) for y,z in points])

def prism_xz(y0,y1,points):
    return hull([(x,y,z) for y in (y0,y1) for x,z in points])

class Building:
    def __init__(self,w,d,e,r):
        self.w,self.d,self.e,self.r = w,d,e,r
        self.parts=[]; self.cuts=[]; self.voids=[]; self.trim=[]
    def add(self,shape): self.parts.append(shape)
    def face(self,side,u,z,width,height,depth=0.8,inside=0.12,plane=None):
        # Local u follows X on front/back, Y on left/right. Exterior projection is depth.
        p = plane if plane is not None else {'front':0,'back':self.d,'left':0,'right':self.w}[side]
        if side=='front': return box(u,p-depth,z,width,depth+inside,height)
        if side=='back': return box(u,p-inside,z,width,depth+inside,height)
        if side=='left': return box(p-depth,u,z,depth+inside,width,height)
        return box(p-inside,u,z,depth+inside,width,height)
    def window(self,side,u,z,w,h,plane=None,door=False):
        start=len(self.parts)
        # Recessed closed glazing retains at least 1.2 mm backing in 1.8 mm walls.
        self.cuts.append(self.face(side,u,z,w,h,0.5,0.55,plane))
        b=0.9
        for a,c,ww,hh in [(u-b,z-b,w+2*b,b),(u-b,z+h,w+2*b,b),(u-b,z,b,h),(u+w,z,b,h)]:
            self.add(self.face(side,a,c,ww,hh,0.7,0.15,plane))
        if not door:
            self.add(self.face(side,u,z+h*0.48,w,0.7,0.28,0.75,plane))
            if w>12: self.add(self.face(side,u+w/2-0.4,z,0.8,h,0.28,0.75,plane))
            self.add(self.face(side,u-1,z-1.1,w+2,1.0,1.15,0.15,plane))
        else:
            for zz in (z+3,z+h*0.54):
                self.add(self.face(side,u+1,zz,w-2,0.8,0.15,0.75,plane))
            self.add(self.face(side,u+w-1.5,z+h*.46,0.9,1.3,0.9,0.7,plane))
        self.trim.extend(self.parts[start:])
    def awning(self,side,u,z,w,plane=None):
        p=plane if plane is not None else {'front':0,'back':self.d,'left':0,'right':self.w}[side]
        # 1.2 mm canopy, sloping down 3.2 mm over a 5 mm projection.
        pts=[]
        for a in (u-1.5,u+w+1.5):
            for v,zz in [(-0.15,z),(5,z-3.2),(5,z-4.4),(-0.15,z-1.2)]:
                pts.append((a,p-v,zz) if side=='front' else (a,p+v,zz) if side=='back' else (p-v,a,zz) if side=='left' else (p+v,a,zz))
        self.add(hull(pts))
    def finish(self):
        # Cut window pockets before restoring trim and mullions.
        primary=self.parts[0]
        details=self.parts[1:]
        shape=union([subtract(primary,self.cuts)]+details)
        return subtract(shape,self.voids)

def stone_texture(b):
    rng=random.Random(27)
    # Stylised coursed stone; deliberate minimum printable relief, no image texture.
    for side,length in [('front',b.w),('back',b.w),('left',b.d),('right',b.d)]:
        z=2.0
        while z < b.e-1.5:
            h=rng.uniform(1.5,2.1); u=0.4
            while u < length-0.8:
                w=min(rng.uniform(3.0,6.4),length-u-0.3)
                if w>0.5: b.add(b.face(side,u,z,w,h,0.25,0.1))
                u+=w+0.48
            z+=h+0.48

def build_house():
    w=P['house_width_ft']*F; d=P['house_depth_ft']*F
    e=P['house_eave_ft']*F; r=P['house_roof_rise_ft']*F
    b=Building(w,d,e,r)
    solids=[box(0,0,0,w,d,e),prism_yz(0,w,[(0,e),(d,e),(d/2,e+r)])]
    # Roof fascia / overhang is part of roof, not a floating skin.
    solids.append(prism_yz(-1.4,w+1.4,[(-1.4,e),(d/2,e+r-1.5),(d/2,e+r+1.5),(-1.4,e+1.5)]))
    solids.append(prism_yz(-1.4,w+1.4,[(d/2,e+r-1.5),(d+1.4,e),(d+1.4,e+1.5),(d/2,e+r+1.5)]))
    # Broad shed dormer on rear slope, as seen in three overhead views.
    dx=8.5; top=e+r-4.5
    shed=prism_yz(dx,w-dx,[(d/2,e+4),(d+0.6,e+4),(d+0.6,top-7),(d/2,top)])
    solids.append(shed)
    solids.append(prism_yz(dx-1,w-dx+1,[(d/2,top-0.2),(d+2,top-7.2),(d+2,top-5.8),(d/2,top+1.2)]))
    # Front entry projection with centered cross gable.
    ew=8*F; ex=(w-ew)/2; ep=4.5
    solids.append(box(ex,-ep,0,ew,ep+2,e))
    solids.append(prism_xz(-ep-1,14,[(ex-1,e),(ex+ew+1,e),(ex+ew/2,e+16)]))
    # Two front gabled dormers. Their backs intersect the main roof.
    dw=6*F; df=12; dz=e+10; dh=18
    for cx in (w*.235,w*.765):
        solids.append(box(cx-dw/2,df,dz,dw,d/2-df,dh))
        solids.append(prism_xz(df-1,d/2+1,[(cx-dw/2-1,dz+dh),(cx+dw/2+1,dz+dh),(cx,dz+dh+10)]))
    # Chimney anchored well into the roof near the ridge.
    solids.append(box(w*.65,d/2-3,e+r-6,5.3,5.3,13))
    solids.append(box(w*.65-.7,d/2-3.7,e+r+5.7,6.7,6.7,1.8))
    b.add(union(solids))
    stone_texture(b)
    # Coursed stone also follows both visible gable triangles.
    for side in ('left','right'):
        for z in np.arange(e+1,e+r-3,2.5):
            lo=(z-e)/r*d/2+0.6; hi=d-lo
            for u in np.arange(lo,hi,5):
                ww=min(4.5,hi-u)
                if ww>.5: b.add(b.face(side,float(u),float(z),float(ww),1.9,.25,.1))
    # Front windows and entry.
    for u in (w*.16,w*.70):
        b.window('front',u,10,17,15); b.awning('front',u,27,17)
        for sx in (u-3,u+18): b.add(b.face('front',sx,9,2,17,.9,.1))
    b.window('front',w/2-5.6,2.3,11.2,25,plane=-ep,door=True)
    # Entry steps stay attached to wall and ground.
    for i in range(3): b.add(box(w/2-8,-ep-6+i*2,0,16,6-i*2+.2,(i+1)*.85))
    for cx in (w*.235,w*.765):
        b.window('front',cx-4.6,dz+2,9.2,13,plane=df)
        # Horizontal clapboard on the dormer cheeks/front, clipped to the dormer rectangle.
        for zz in np.arange(dz+1,dz+dh,2.6):
            b.add(b.face('front',cx-dw/2,float(zz),dw,.55,.3,.1,df))
    # Left gable: three downstairs windows, one upstairs, characteristic awnings.
    for u in (d*.18,d*.36,d*.73):
        b.window('left',u,8.5,10,15.5); b.awning('left',u,26,10)
    b.window('left',d/2-5.2,e+13,10.4,17); b.awning('left',d/2-5.2,e+32,10.4)
    # Opposite gable: small window and paired bay-like window with a peaked hood.
    b.window('right',d*.18,9,9,16)
    b.window('right',d*.60,9,20,17)
    b.add(prism_yz(w-.15,w+4,[(d*.60-2,29),(d*.60+22,29),(d*.60+10,37)]))
    b.window('right',d/2-5,e+13,10,17)
    # Rear dormer windows and balcony door.
    for u in (w*.24,w*.72): b.window('back',u,e+11,10,17,plane=d+.6)
    b.window('back',w*.47,e+2,10,25,plane=d+.6,door=True)
    for zz in np.arange(e+5,top-8,2.8): b.add(b.face('back',dx,float(zz),w-2*dx,.55,.3,.1,d+.6))
    b.window('back',12,9,10,16); b.window('back',w-23,9,10,16)
    # Window cuts must also remove the stone/clapboard that crosses a window.
    decorated=union(b.parts)
    decorated=union([subtract(decorated,b.cuts)]+b.trim)
    # Main hollow and inner roof. Continuous open bottom, no sealed resin traps.
    b.voids=[box(T,T,-1,w-2*T,d-2*T,e+1),
             prism_yz(T,w-T,[(T,e-.2),(d-T,e-.2),(d/2,e+r-RT)])]
    b.voids.append(prism_yz(dx+T,w-dx-T,[(d/2,e+2),(d+.6-T,e+2),(d+.6-T,top-7-RT),(d/2,top-RT)]))
    # Entry void only below its small gable.
    b.voids.append(box(ex+T,-ep+T,-1,ew-2*T,ep+3,e-1))
    shape=subtract(decorated,b.voids)
    roof,body=shape.split_by_plane((0,0,1),e)
    # Rear enclosed porch and balcony are attached to wall part, not split through rails.
    px=w*.34; pw=w*.35; pd=11; ph=e-2.0
    porch=Building(w,d,e,r)
    porch.add(subtract(box(px,d-.4,0,pw,pd+.4,ph),[box(px+T,d-1,-1,pw-2*T,pd+1-T,ph-T)]))
    # Rear entry directly under balcony, left of the paired porch windows.
    porch.window('back',px+3,1.0,10.5,25,plane=d+pd,door=True)
    porch.window('back',px+20,8,12,15,plane=d+pd)
    porch.window('left',d+2,5,6.5,22,plane=px,door=True)
    # Apply recesses to the porch primary only, keeping mullions above them.
    porchshape=porch.finish()
    balcony=[porchshape,box(px-1,d-.2,ph-1.4,pw+2,pd+1.3,1.4)]
    railz=ph+9.7
    balcony += [box(px-1,d+pd,railz,pw+2,1.0,1.2),box(px-1,d+1.5,railz,1,pd-1.5,1.2),box(px+pw,d+1.5,railz,1,pd-1.5,1.2)]
    for x in np.linspace(px-.5,px+pw+.5,14): balcony.append(box(float(x)-.5,d+pd,ph-.2,1,1,10.6))
    for y in np.linspace(d+2,d+pd,4):
        for x in (px-1,px+pw): balcony.append(box(x,float(y),ph-.2,1,1,10.6))
    body=union([body]+balcony)
    return body.simplify(.005),roof.simplify(.005),e

def build_garage():
    w=P['garage_width_ft']*F; d=P['garage_depth_ft']*F
    e=P['garage_eave_ft']*F; r=P['garage_roof_rise_ft']*F
    b=Building(w,d,e,r)
    outer=union([box(0,0,0,w,d,e),prism_xz(0,d,[(0,e),(w,e),(w/2,e+r)]),prism_xz(-1.3,d+1.3,[(-1.3,e),(w/2,e+r-1.5),(w/2,e+r+1.3),(-1.3,e+1.3)]),prism_xz(-1.3,d+1.3,[(w/2,e+r-1.5),(w+1.3,e),(w+1.3,e+1.3),(w/2,e+r+1.3)])])
    b.add(outer)
    # Two closed 8ft x 7ft doors, inferred scale reference. Open door in photo is modelled closed.
    dw=8*F; dh=7*F; gap=(w-2*dw)/3
    for u in (gap,2*gap+dw):
        b.window('front',u,.9,dw,dh,door=True)
        for row in range(4):
            for col in range(4):
                b.cuts.append(b.face('front',u+1+col*(dw-1)/4,1.8+row*(dh-1)/4,(dw-1)/4-1,(dh-1)/4-1,.4,.65))
    b.window('right',d*.22,2.0,10,23,door=True)
    for u in (d*.47,d*.76): b.window('right',u,11,8,12)
    # Siding lines cut around walls and taper up the front/back gables.
    for z in np.arange(2,e,1.6):
        for side,ln in [('front',w),('back',w),('left',d),('right',d)]:
            b.cuts.append(b.face(side,.05,float(z),ln-.1,.32,.4,.22))
    for z in np.arange(e+1,e+r-1,1.6):
        lo=(z-e)/r*w/2
        for side in ('front','back'): b.cuts.append(b.face(side,float(lo),float(z),w-2*lo,.32,.4,.22))
    for side in ('front','back'):
        for u in (.1,w-1.2): b.add(b.face(side,u,0,1.1,e,.7,.1))
    b.voids=[box(T,T,-1,w-2*T,d-2*T,e+1),prism_xz(T,d-T,[(T,e-.1),(w-T,e-.1),(w/2,e+r-RT)])]
    shape=b.finish()
    roof,body=shape.split_by_plane((0,0,1),e)
    return body.simplify(.005),roof.simplify(.005),e

def mesh(m):
    q=m.to_mesh()
    return trimesh.Trimesh(vertices=np.array(q.vert_properties)[:,:3],faces=np.array(q.tri_verts),process=True)

def save(name,m,normalize=True):
    m=m.simplify(.005)
    obj=mesh(m)
    if normalize: obj.apply_translation(-obj.bounds[0])
    path=OUT/(name+'.stl'); obj.export(path)
    check=trimesh.load_mesh(path)
    components=len(m.decompose())
    report={'file':path.name,'dimensions_mm':np.round(check.extents,2).tolist(),'triangles':len(check.faces),'watertight':bool(check.is_watertight),'winding_consistent':bool(check.is_winding_consistent),'positive_volume':bool(check.volume>0),'connected_components':components,'fits_MK3_5':bool(np.all(check.extents<np.array([250,210,210]))),'volume_cm3':round(check.volume/1000,2)}
    assert report['watertight'] and report['winding_consistent'] and report['positive_volume'] and report['fits_MK3_5'] and components==1,report
    print(json.dumps(report),flush=True)
    return report

def preview(objects,name,elev,azim):
    # Orthographic CPU z-buffer: reliable occlusion for long CAD triangles.
    from PIL import Image, ImageDraw, ImageFont
    ew,aw=math.radians(elev),math.radians(azim)
    view=np.array([math.cos(ew)*math.cos(aw),math.cos(ew)*math.sin(aw),math.sin(ew)])
    right=np.array([-math.sin(aw),math.cos(aw),0.]); up=np.cross(view,right)
    basis=np.stack([right,up,view],axis=1)
    data=[]; coords=[]
    for shape,offset,color in objects:
        obj=mesh(shape); obj.apply_translation(offset)
        projected=obj.vertices@basis
        coords.extend(projected); data.append((obj,projected,np.array(matplotlib.colors.to_rgb(color))))
    coords=np.array(coords); lo=coords.min(0); hi=coords.max(0)
    ww,hh=1600,1050; scale=min(1440/(hi[0]-lo[0]),760/(hi[1]-lo[1]))
    pixels=np.full((hh,ww,3),[238,234,227],dtype=np.uint8); depth=np.full((hh,ww),-np.inf)
    light=np.array([-.35,-.45,.82]); light/=np.linalg.norm(light)
    for obj,projected,color in data:
        screen=projected.copy()
        screen[:,0]=(projected[:,0]-(lo[0]+hi[0])/2)*scale+ww/2
        screen[:,1]=hh/2+25-(projected[:,1]-(lo[1]+hi[1])/2)*scale
        for face,normal in zip(obj.faces,obj.face_normals):
            if normal@view<=1e-8: continue
            tri=screen[face]; x0=max(0,int(np.floor(tri[:,0].min()))); x1=min(ww-1,int(np.ceil(tri[:,0].max())))
            y0=max(0,int(np.floor(tri[:,1].min()))); y1=min(hh-1,int(np.ceil(tri[:,1].max())))
            if x1<x0 or y1<y0: continue
            a,b,c=tri; den=(b[1]-c[1])*(a[0]-c[0])+(c[0]-b[0])*(a[1]-c[1])
            if abs(den)<1e-9: continue
            yy,xx=np.mgrid[y0:y1+1,x0:x1+1]; xx=xx+.5; yy=yy+.5
            aa=((b[1]-c[1])*(xx-c[0])+(c[0]-b[0])*(yy-c[1]))/den
            bb=((c[1]-a[1])*(xx-c[0])+(a[0]-c[0])*(yy-c[1]))/den; cc=1-aa-bb
            zz=aa*a[2]+bb*b[2]+cc*c[2]
            buf=depth[y0:y1+1,x0:x1+1]
            mask=(aa>=-1e-7)&(bb>=-1e-7)&(cc>=-1e-7)&(zz>buf)
            buf[mask]=zz[mask]
            shade=.5+.5*max(0,float(normal@light))
            pixels[y0:y1+1,x0:x1+1][mask]=np.clip(color*shade*255,0,255).astype(np.uint8)
    im=Image.fromarray(pixels); draw=ImageDraw.Draw(im)
    font=ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf',32)
    small=ImageFont.truetype('C:/Windows/Fonts/segoeui.ttf',20)
    draw.text((ww/2,50),'CEDARBURG HOUSE + GARAGE  /  HO 1:87',font=font,fill='#414640',anchor='mt')
    draw.text((ww/2,hh-55),'Actual model geometry | Photo-estimated dimensions | Display positions only',font=small,fill='#555b55',anchor='mt')
    im.save(ROOT/name)

def export_3mf(parts,filename):
    # Portable unconfigured build plate. Each part has its bottom at Z=0.
    import xml.etree.ElementTree as ET
    ns='http://schemas.microsoft.com/3dmanufacturing/core/2015/02'
    ET.register_namespace('',ns)
    root=ET.Element('{'+ns+'}model',unit='millimeter',attrib={'xml:lang':'en-US'})
    resources=ET.SubElement(root,'resources'); build=ET.SubElement(root,'build')
    for i,(name,m,xy) in enumerate(parts,1):
        source={'House walls':'01_house_walls','House roof':'02_house_roof','Garage walls':'03_garage_walls','Garage roof':'04_garage_roof'}[name]
        obj=trimesh.load_mesh(OUT/(source+'.stl')); obj.apply_translation(-obj.bounds[0]); obj.apply_translation([*xy,0])
        el=ET.SubElement(resources,'object',id=str(i),type='model',name=name)
        me=ET.SubElement(el,'mesh'); ve=ET.SubElement(me,'vertices'); tr=ET.SubElement(me,'triangles')
        for v in obj.vertices: ET.SubElement(ve,'vertex',x=f'{v[0]:.9f}',y=f'{v[1]:.9f}',z=f'{v[2]:.9f}')
        for f in obj.faces: ET.SubElement(tr,'triangle',v1=str(f[0]),v2=str(f[1]),v3=str(f[2]))
        ET.SubElement(build,'item',objectid=str(i))
    with zipfile.ZipFile(ROOT/filename,'w',zipfile.ZIP_DEFLATED) as z:
        z.writestr('[Content_Types].xml','<?xml version="1.0"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/></Types>')
        z.writestr('_rels/.rels','<?xml version="1.0"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>')
        z.writestr('3D/3dmodel.model',ET.tostring(root,encoding='utf-8',xml_declaration=True))

if __name__=='__main__':
    print('Building house...',flush=True); hb,hr,he=build_house()
    print('Building garage...',flush=True); gb,gr,ge=build_garage()
    report=[]
    for name,m in [('01_house_walls',hb),('02_house_roof',hr),('03_garage_walls',gb),('04_garage_roof',gr),('house_assembled_reference',union([hb,hr.translate((0,0,-.02))])),('garage_assembled_reference',union([gb,gr.translate((0,0,-.02))]))]:
        report.append(save(name,m))
    (ROOT/'mesh_validation.json').write_text(json.dumps(report,indent=2))
    print('Rendering actual mesh previews...',flush=True)
    objects=[(hb,(0,0,0),'#c8b994'),(hr,(0,0,0),'#895f49'),(gb,(155,15,0),'#d1cec1'),(gr,(155,15,0),'#895f49')]
    preview(objects,'preview_front.png',25,-60)
    preview(objects,'preview_rear.png',25,125)
    preview([(hb,(0,0,0),'#c8b994'),(hr,(0,0,24),'#895f49'),(gb,(155,15,0),'#d1cec1'),(gr,(155,15,22),'#895f49')],'preview_exploded.png',24,125)
    export_3mf([('House walls',hb,(10,10)),('Garage walls',gb,(150,20))],'01_walls_plate.3mf')
    export_3mf([('House roof',hr,(10,10)),('Garage roof',gr,(150,20))],'02_roofs_plate.3mf')
    alignment={}
    for name,m in [('house_walls',hb),('house_roof',hr),('garage_walls',gb),('garage_roof',gr)]:
        alignment[name]={'original_minimum_xyz_mm':list(m.bounding_box()[:3])}
    (ROOT/'assembly_coordinates.json').write_text(json.dumps(alignment,indent=2))
    print('Complete.',flush=True)
