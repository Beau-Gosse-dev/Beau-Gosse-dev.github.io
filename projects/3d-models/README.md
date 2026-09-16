# 3D Models

[Browse the public gallery](https://beau-gosse-dev.github.io/projects/3d-models/).

The gallery brings together bracelet sizing cones, the Cedarburg HO house and garage, the Revision 3 expansion-band stretcher, watch-cleaning baskets, and a Mahjong line reader aid. Original model filenames are preserved. `source-files.json` records SHA-256 hashes for 74 imported files; edited instructions also retain their original source hashes and a change note. The standalone 19 mm insert file was removed from the public downloads; the 16–20 mm set includes the 19 mm pair.

The watch-cleaning baskets credit **gpraceman**, whose design remixes **muddtt's** Pearl watch-cleaning parts. Beau Gosse added more holes and an extra spacer plate. The project page and [ATTRIBUTION.md](models/watch-cleaning-baskets/ATTRIBUTION.md) link the original creators and describe the changes. Original photographs retain their creator credit.

## Updating the gallery

Edit `catalog.json`, including each model's verified Printables URL, then run:

```sh
python build_gallery.py
```

This builds the static gallery, model detail pages, and complete ZIP downloads. It uses Python's standard library. Original source ZIPs stay intact alongside the separately named public bundles. Set `preserveLicense` for a project with an existing third-party license; the builder must not overwrite it. Credits, source links, preview captions, and license details can be set per project in the catalog.

`tools/render_stl.py` generates previews directly from binary STL geometry using NumPy and Pillow. It does not modify the STL.

## Licensing

Beau Gosse's original models use **CC BY-NC-SA 4.0**. The original watch-cleaning basket files and images retain **CC BY-NC 4.0**, credited to gpraceman and muddtt; Beau's modifications use **CC BY-NC-SA 4.0**. See the [license overview](models/LICENSE.txt) and each project's notices. Website code retains the repository's MIT license.

The original first-version band-stretcher download remains at `/downloads/band-stretcher/band_stretcher.zip` so existing shared links keep working.
