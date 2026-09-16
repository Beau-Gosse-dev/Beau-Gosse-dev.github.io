"""Build static gallery pages and licensed ZIPs from catalog.json; Python standard library only."""
from pathlib import Path
from html import escape
from urllib.parse import quote
import json
import zipfile

ROOT = Path(__file__).resolve().parent
REPO = 'https://github.com/Beau-Gosse-dev/Beau-Gosse-dev.github.io'
RAW = 'https://raw.githubusercontent.com/Beau-Gosse-dev/Beau-Gosse-dev.github.io/main/projects/3d-models/'
LIVE = 'https://beau-gosse-dev.github.io/projects/3d-models/'
LICENSE = '''Copyright (c) 2026 Beau Gosse

The 3D models, editable model source, model documentation, and previews in this
folder are licensed under Creative Commons Attribution-NonCommercial-ShareAlike
4.0 International (CC BY-NC-SA 4.0).

License: https://creativecommons.org/licenses/by-nc-sa/4.0/
Legal code: https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode

Please credit Beau Gosse and link to the model's page at:
https://beau-gosse-dev.github.io/projects/3d-models/

This model-specific license applies instead of the website repository's MIT
license. Website code outside the model folders retains its existing license.
'''

def size(n):
    return f'{n / 1048576:.1f} MB' if n >= 1048576 else f'{n / 1024:.0f} KB'

def header(title, description, prefix='', image=None, canonical=''):
    og = image or 'models/band-stretcher-stronger/preview.png'
    return f'''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>{escape(title)} · Beau's 3D Models</title><meta name="description" content="{escape(description, quote=True)}">
<link rel="canonical" href="{LIVE}{canonical}"><meta property="og:title" content="{escape(title, quote=True)}"><meta property="og:description" content="{escape(description, quote=True)}"><meta property="og:image" content="{LIVE}{og}"><meta property="og:type" content="website">
<link rel="stylesheet" href="{prefix}styles.css"><script src="{prefix}gallery.js" defer></script></head>
<body><a class="skip" href="#main">Skip to content</a><div class="shell"><header class="topbar"><a class="brand" href="{prefix}../../">Beau Gosse <span>/ Projects</span></a><nav aria-label="Main navigation"><a href="{prefix}./" aria-current="page">3D Models</a><a href="{REPO}/tree/main/projects/3d-models">GitHub ↗</a></nav></header>'''

def footer(prefix=''):
    return f'''<footer><span>Designed & shared by Beau Gosse.</span><span><a href="{prefix}./">3D Models</a> · <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a></span></footer></div></body></html>'''

def file_li(slug, name):
    p = ROOT/'models'/slug/name
    return f'<li><a href="{RAW}models/{slug}/{quote(name)}" download>{escape(name)} <span aria-hidden="true">↓</span></a><small>{escape(p.suffix[1:].upper())} · {size(p.stat().st_size)}</small></li>'

def main():
    catalog = json.loads((ROOT/'catalog.json').read_text(encoding='utf-8'))
    (ROOT/'models/LICENSE.txt').write_text(LICENSE, encoding='utf-8')
    for model in catalog:
        folder = ROOT/'models'/model['slug']
        (folder/'LICENSE.txt').write_text(LICENSE, encoding='utf-8')
        # Original source archives stay intact. These are separately named public bundles.
        with zipfile.ZipFile(folder/model['bundle'],'w',zipfile.ZIP_DEFLATED,compresslevel=9) as archive:
            for file in sorted(folder.rglob('*')):
                if file.is_file() and file.suffix != '.zip':
                    archive.write(file,file.relative_to(folder).as_posix())
        model['bundleSize'] = size((folder/model['bundle']).stat().st_size)
        build_detail(model)
    page = header('3D Models', 'Explore printable watch tools and scale models by Beau Gosse, with model previews, printing notes, and free downloads.')
    page += '<main id="main"><section class="hero"><p class="eyebrow">From my workbench to yours</p><h1>3D models.<br>Made to be made.</h1><p class="lead">Watch tools, small-scale buildings, and practical experiments. Browse the models, take a closer look, and download the files for your next print.</p><div class="pill-row"><span class="pill">3 projects</span><span class="pill">Free downloads</span><span class="pill">STL + editable files</span></div></section><div class="collection-heading"><h2>The model collection</h2><p>Previews rendered from model geometry</p></div><section class="cards" aria-label="3D model projects">'
    for model in catalog:
        slug = model['slug']; thumb = model['images'][0]
        page += f'''<article class="card"><a class="card-image" href="{slug}/" aria-label="View {escape(model['title'],quote=True)}"><img src="models/{slug}/{thumb['file']}" alt="{escape(model['title'],quote=True)} model render" width="1200" height="800" loading="lazy"></a><div class="card-body"><div class="card-topline"><span>{escape(model['category'])}</span><span>{escape(model['edition'])}</span></div><h3><a href="{slug}/">{escape(model['title'])}</a></h3><p>{escape(model['summary'])}</p><div class="card-bottom"><span class="formats">{escape(model['formats'])}</span><a class="button secondary" href="{slug}/">Explore & download <span class="arrow" aria-hidden="true">→</span></a></div></div></article>'''
    page += '</section><aside class="license-note"><strong>Print, share, and remix for noncommercial use.</strong> These models use <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>: credit the creator and share adaptations under the same license. Check each project’s printing notes and validation status before printing.</aside></main>' + footer()
    (ROOT/'index.html').write_text(page,encoding='utf-8')
    print('Built gallery, 3 detail pages, and 3 licensed ZIP downloads.')

def build_detail(m):
    slug=m['slug']; folder=ROOT/'models'/slug; image=m['images'][0]
    image_url=f'../models/{slug}/{image["file"]}'
    page=header(m['title'],m['summary'],'../',f'models/{slug}/{image["file"]}',f'{slug}/')
    page += f'<main id="main"><div class="breadcrumb"><a href="../">← All 3D models</a></div><div class="detail-header"><section class="detail-heading"><p class="eyebrow">{escape(m["category"])} / {escape(m["edition"])}</p><h1>{escape(m["title"])}</h1><p class="lead">{escape(m["summary"])}</p><div class="actions"><a class="button" href="{RAW}models/{slug}/{m["bundle"]}" download>Download all files <span aria-hidden="true">↓</span></a>'
    if m['printables']:
        page+=f'<a class="button secondary" href="{escape(m["printables"],quote=True)}">View on Printables ↗</a>'
    page+=f'</div><p class="download-meta">ZIP · {m["bundleSize"]} · Includes license & instructions</p><dl class="facts">'
    for label,value in m['facts']:
        page+=f'<div><dt>{escape(label)}</dt><dd>{escape(value)}</dd></div>'
    page+=f'</dl></section><section class="visual" data-gallery aria-label="Model previews"><a class="preview-link" data-full href="{image_url}" aria-label="Enlarge model preview"><img data-preview src="{image_url}" alt="{escape(m["title"]+": "+image["label"],quote=True)}" width="1200" height="900"></a><p class="caption" data-caption aria-live="polite">{escape(image["label"])} · Model render. Select the image to enlarge.</p><div class="thumbnails">'
    if len(m['images'])>1:
        for index,item in enumerate(m['images']):
            alt=m['title']+': '+item['label']
            page+=f'<a class="thumbnail" data-image data-label="{escape(item["label"],quote=True)}" data-alt="{escape(alt,quote=True)}" aria-current="{str(index==0).lower()}" href="../models/{slug}/{item["file"]}"><img src="../models/{slug}/{item["file"]}" alt="" width="90" height="60"><span>{escape(item["label"])}</span></a>'
    page+='</div></section></div><div class="detail-body"><div class="prose">'
    for section in m['sections']:
        page+=f'<section><h2>{escape(section["title"])}</h2><p>{escape(section["text"])}</p></section>'
    page+=f'<aside class="notice"><strong>Before you print</strong><br>{escape(m["status"])}</aside><p class="credits">Design: Beau Gosse · {"AI-assisted creation" if m["aiAssisted"] else "Created without AI"}.<br><a href="../models/{slug}/LICENSE.txt">CC BY-NC-SA 4.0</a> · Noncommercial use, attribution, and share-alike.</p>'
    if m.get('legacy'):
        page+='<p class="legacy">Looking for the first version? <a href="../../../downloads/band-stretcher/band_stretcher.zip">Download the original band stretcher ZIP</a>. Revision 3 above is the current design.</p>'
    page+=f'</div><aside class="downloads"><h2>Choose individual files</h2><p>Download only what you need, or grab the complete ZIP above.</p><ul class="file-list">'
    page+=''.join(file_li(slug,name) for name in m['featuredFiles'])+'</ul>'
    extras=[p.relative_to(folder).as_posix() for p in sorted(folder.rglob('*')) if p.is_file() and p.relative_to(folder).as_posix() not in m['featuredFiles'] and p.name != m['bundle'] and p.suffix != '.png']
    page+=f'<details><summary>More source files & documentation ({len(extras)})</summary><ul class="file-list">'+''.join(file_li(slug,name) for name in extras)+'</ul></details>'
    page+=f'<a class="source-link" href="{REPO}/tree/main/projects/3d-models/models/{slug}">Browse every file on GitHub ↗</a></aside></div></main>'+footer('../')
    dest=ROOT/slug;dest.mkdir(exist_ok=True);(dest/'index.html').write_text(page,encoding='utf-8')

if __name__=='__main__':
    main()
