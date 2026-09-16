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
COLLECTION_LICENSE = '''MODEL LICENSES

Licenses are specified per project. The website repository's MIT license does
not cover model files, model documentation, or model images.

Beau Gosse's original projects use CC BY-NC-SA 4.0:
https://creativecommons.org/licenses/by-nc-sa/4.0/

watch-cleaning-baskets includes gpraceman's Watch Cleaning Baskets, a remix of
muddtt's Pearl watch-cleaning designs. Those original files and images retain
CC BY-NC 4.0: https://creativecommons.org/licenses/by-nc/4.0/
Beau Gosse's modifications use CC BY-NC-SA 4.0. See that folder's
ATTRIBUTION.md, original LICENSE.txt, and MODIFICATIONS_LICENSE.txt.

Always retain the creator credits and license notices with redistributed files.
'''

def license_info(model):
    return model.get('license', {'name': 'CC BY-NC-SA 4.0', 'file': 'LICENSE.txt',
                                'summary': 'Noncommercial use, attribution, and share-alike.'})

def preview_caption(model, item):
    return f'{item["label"]} · {item.get("credit", model.get("previewCredit", "Model render"))}. Select the image to enlarge.'

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
    return f'''<footer><span>Collection shared by Beau Gosse. Creators credited per project.</span><span><a href="{prefix}./">3D Models</a> · <a href="{prefix}models/LICENSE.txt">Model licenses</a></span></footer></div></body></html>'''

def file_li(slug, name):
    p = ROOT/'models'/slug/name
    return f'<li><a href="{RAW}models/{slug}/{quote(name)}" download>{escape(name)} <span aria-hidden="true">↓</span></a><small>{escape(p.suffix[1:].upper())} · {size(p.stat().st_size)}</small></li>'

def write_bundle(folder, name):
    """Keep an existing ZIP when only filesystem timestamps have changed."""
    files = [p for p in sorted(folder.rglob('*')) if p.is_file() and p.suffix.lower() != '.zip']
    target = folder/name
    if target.is_file():
        try:
            with zipfile.ZipFile(target) as archive:
                if archive.namelist() == [p.relative_to(folder).as_posix() for p in files] and all(
                    archive.read(p.relative_to(folder).as_posix()) == p.read_bytes() for p in files
                ):
                    return
        except zipfile.BadZipFile:
            pass
    with zipfile.ZipFile(target, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
        for file in files:
            archive.write(file, file.relative_to(folder).as_posix())

def main():
    catalog = json.loads((ROOT/'catalog.json').read_text(encoding='utf-8'))
    (ROOT/'models/LICENSE.txt').write_text(COLLECTION_LICENSE, encoding='utf-8')
    for model in catalog:
        folder = ROOT/'models'/model['slug']
        if not model.get('preserveLicense'):
            (folder/'LICENSE.txt').write_text(LICENSE, encoding='utf-8')
        elif not (folder/'LICENSE.txt').is_file():
            raise FileNotFoundError(f'Original license missing for {model["slug"]}')
        # Original source archives stay intact. These are separately named public bundles.
        write_bundle(folder, model['bundle'])
        model['bundleSize'] = size((folder/model['bundle']).stat().st_size)
        build_detail(model)
    page = header('3D Models', 'Explore watch tools, scale models, and game aids, with previews, creator credits, printing notes, and free downloads.')
    page += '<main id="main"><section class="hero"><p class="eyebrow">From my workbench to yours</p><h1>3D models.<br>Made to be made.</h1><p class="lead">Watch tools, small-scale buildings, and practical experiments. Browse the models, take a closer look, and download the files for your next print.</p><div class="pill-row"><span class="pill">3 projects</span><span class="pill">Free downloads</span><span class="pill">STL + editable files</span></div></section><div class="collection-heading"><h2>The model collection</h2><p>Previews rendered from model geometry</p></div><section class="cards" aria-label="3D model projects">'
    page = page.replace('3 projects', f'{len(catalog)} projects').replace('Previews rendered from model geometry', 'Model previews & creator photographs').replace('Watch tools, small-scale buildings, and practical experiments.', 'Watch tools, small-scale buildings, game aids, and practical experiments.')
    for model in catalog:
        slug = model['slug']; thumb = model['images'][0]
        byline = f'<p class="card-credit">{escape(model["byline"])}</p>' if model.get('byline') else ''
        page += f'''<article class="card"><a class="card-image" href="{slug}/" aria-label="View {escape(model['title'],quote=True)}"><img src="models/{slug}/{thumb['file']}" alt="{escape(model['title']+': '+thumb['label'],quote=True)}" width="1200" height="800" loading="lazy"></a><div class="card-body"><div class="card-topline"><span>{escape(model['category'])}</span><span>{escape(model['edition'])}</span></div><h3><a href="{slug}/">{escape(model['title'])}</a></h3>{byline}<p>{escape(model['summary'])}</p><div class="card-bottom"><span class="formats">{escape(model['formats'])}</span><a class="button secondary" href="{slug}/">Explore & download <span class="arrow" aria-hidden="true">→</span></a></div></div></article>'''
    page += '</section><aside class="license-note"><strong>Credit the creators and check each model’s license.</strong> Beau’s original projects use CC BY-NC-SA 4.0. The watch-cleaning basket originals retain gpraceman’s CC BY-NC 4.0 license, with credit to muddtt; Beau’s modifications use CC BY-NC-SA 4.0. <a href="models/LICENSE.txt">Read the license overview</a>.</aside></main>' + footer()
    (ROOT/'index.html').write_text(page,encoding='utf-8')
    print(f'Built gallery, {len(catalog)} detail pages, and {len(catalog)} licensed ZIP downloads.')

def build_detail(m):
    slug=m['slug']; folder=ROOT/'models'/slug; image=m['images'][0]
    image_url=f'../models/{slug}/{image["file"]}'
    page=header(m['title'],m['summary'],'../',f'models/{slug}/{image["file"]}',f'{slug}/')
    page += f'<main id="main"><div class="breadcrumb"><a href="../">← All 3D models</a></div><div class="detail-header"><section class="detail-heading"><p class="eyebrow">{escape(m["category"])} / {escape(m["edition"])}</p><h1>{escape(m["title"])}</h1><p class="lead">{escape(m["summary"])}</p><div class="actions"><a class="button" href="{RAW}models/{slug}/{m["bundle"]}" download>Download all files <span aria-hidden="true">↓</span></a>'
    if m['printables']:
        page+=f'<a class="button secondary" href="{escape(m["printables"],quote=True)}">View on Printables ↗</a>'
    page+=f'</div><p class="download-meta">ZIP · {m["bundleSize"]} · Includes license & instructions</p>'
    if m.get('byline'):
        page+=f'<p class="model-byline">{escape(m["byline"])}</p>'
    page+='<dl class="facts">'
    for label,value in m['facts']:
        page+=f'<div><dt>{escape(label)}</dt><dd>{escape(value)}</dd></div>'
    page+=f'</dl></section><section class="visual" data-gallery aria-label="Model previews"><a class="preview-link" data-full href="{image_url}" aria-label="Enlarge model preview"><img data-preview src="{image_url}" alt="{escape(m["title"]+": "+image["label"],quote=True)}" width="1200" height="900"></a><p class="caption" data-caption aria-live="polite">{escape(preview_caption(m,image))}</p><div class="thumbnails">'
    if len(m['images'])>1:
        for index,item in enumerate(m['images']):
            alt=m['title']+': '+item['label']
            page+=f'<a class="thumbnail" data-image data-caption-text="{escape(preview_caption(m,item),quote=True)}" data-alt="{escape(alt,quote=True)}" aria-current="{str(index==0).lower()}" href="../models/{slug}/{item["file"]}"><img src="../models/{slug}/{item["file"]}" alt="" width="90" height="60"><span>{escape(item["label"])}</span></a>'
    page+='</div></section></div><div class="detail-body"><div class="prose">'
    for section in m['sections']:
        page+=f'<section><h2>{escape(section["title"])}</h2><p>{escape(section["text"])}</p></section>'
    if m.get('sources'):
        page+='<section class="attribution"><h2>Creators & original sources</h2><ul>'
        for source in m['sources']:
            page+=f'<li><a href="{escape(source["url"],quote=True)}">{escape(source["label"])}</a></li>'
        page+='</ul></section>'
    ai = m.get('aiAssisted')
    ai_text = '' if ai is None else (' · AI-assisted creation' if ai else ' · Created without AI')
    license = license_info(m)
    page+=f'<aside class="notice"><strong>Before you print</strong><br>{escape(m["status"])}</aside><p class="credits">{escape(m.get("byline", "Design: Beau Gosse").rstrip("."))}{ai_text}.<br><a href="../models/{slug}/{license["file"]}">{escape(license["name"])}</a> · {escape(license["summary"])}</p>'
    if m.get('legacy'):
        page+='<p class="legacy">Looking for the first version? <a href="../../../downloads/band-stretcher/band_stretcher.zip">Download the original band stretcher ZIP</a>. Revision 3 above is the current design.</p>'
    page+=f'</div><aside class="downloads"><h2>Choose individual files</h2><p>Download only what you need, or grab the complete ZIP above.</p><ul class="file-list">'
    page+=''.join(file_li(slug,name) for name in m['featuredFiles'])+'</ul>'
    extras=[p.relative_to(folder).as_posix() for p in sorted(folder.rglob('*')) if p.is_file() and p.relative_to(folder).as_posix() not in m['featuredFiles'] and p.name != m['bundle'] and p.suffix.lower() not in {'.png','.jpg','.jpeg','.webp'}]
    page+=f'<details><summary>More source files & documentation ({len(extras)})</summary><ul class="file-list">'+''.join(file_li(slug,name) for name in extras)+'</ul></details>'
    page+=f'<a class="source-link" href="{REPO}/tree/main/projects/3d-models/models/{slug}">Browse every file on GitHub ↗</a></aside></div></main>'+footer('../')
    dest=ROOT/slug;dest.mkdir(exist_ok=True);(dest/'index.html').write_text(page,encoding='utf-8')

if __name__=='__main__':
    main()
