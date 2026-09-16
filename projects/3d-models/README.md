# 3D Models

[Browse the public gallery](https://beau-gosse-dev.github.io/projects/3d-models/).

The gallery brings together bracelet sizing cones, the Cedarburg HO house and garage, and the Revision 3 expansion-band stretcher. Original model filenames are preserved. `source-files.json` records SHA-256 hashes for the 38 original imported files.

## Updating the gallery

Edit `catalog.json`, including each model's verified Printables URL, then run:

```sh
python build_gallery.py
```

This builds the static gallery, three model detail pages, and complete ZIP downloads. It uses Python's standard library. The original Cedarburg print-kit ZIP stays intact; the public bundle is separately named `cedarburg-ho-models.zip` and includes the model license.

`tools/render_stl.py` generates previews directly from binary STL geometry using NumPy and Pillow. It does not modify the STL.

## Licensing

Model files, editable model source, model documentation, and previews under `models/` use **CC BY-NC-SA 4.0**, as selected by Beau Gosse. See [the model license](models/LICENSE.txt). Website code retains the repository's MIT license.

The original first-version band-stretcher download remains at `/downloads/band-stretcher/band_stretcher.zip` so existing shared links keep working.
