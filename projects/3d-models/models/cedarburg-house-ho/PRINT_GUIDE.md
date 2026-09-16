# Cedarburg house and detached garage — HO 1:87

This is a photo-interpreted model made from the 13 supplied street and satellite screenshots. It is scaled at 1:87 from estimated dimensions, not surveyed dimensions. The satellite images have no scale bar or georeferencing, so they establish proportions rather than an absolute measurement. An assumed 8-foot single garage door provides a rough size reference. One real measurement would allow a more accurate size adjustment.

## Start here

Open `01_walls_plate.3mf` or `02_roofs_plate.3mf` in PrusaSlicer. Each contains two separate objects arranged within a 250 × 210 mm bed. These are geometry-only files: select your **Original Prusa MK3.5 printer profile, actual nozzle diameter, and your filament profile**. You may print one object at a time by removing the other from the plate.

The same four parts are available separately in `STL`. Import in **millimetres, at 100% scale**. They are already sized for HO and have their printing surfaces at Z=0; do not scale them down by 87 again.

| Part | Overall size, mm | Orientation |
| --- | --- | --- |
| 01 house walls | 128.12 × 120.75 × 43.93 | Open bottom on bed; balcony rails upward |
| 02 house roof | 128.12 × 105.60 × 49.54 | Flat eave cut on bed; chimney upward |
| 03 garage walls | 78.23 × 85.68 × 28.03 | Open bottom on bed |
| 04 garage roof | 79.68 × 86.68 × 32.83 | Flat eave cut on bed; ridge upward |

Assembled house: approximately **128 × 121 × 85 mm**, including projections and chimney. Assembled garage: approximately **80 × 87 × 61 mm**. The roofs overlap the vertical range of some wall details, so assembled heights are not the sum of each part's bounding-box height.

## Suggested print settings

| Setting | Standard 0.4 mm nozzle | Optional 0.25 mm nozzle |
| --- | --- | --- |
| Layer height | 0.10 mm for detail; 0.15 mm for a faster first print | 0.08–0.10 mm |
| First layer | Printer profile default | Matching 0.25 mm profile default |
| Perimeters | 3 | 3–4 |
| Infill | 10% | 10% |
| Material | PLA with its matching filament preset | PLA with its matching filament preset |
| Extrusion widths and speeds | Matching printer/nozzle preset | Matching printer/nozzle preset |
| Brim | Optional 3–5 mm if needed for adhesion | Optional 3–5 mm if needed for adhesion |

The 0.25 mm nozzle should give cleaner fine details but will increase print time. It is optional: the structural walls, railings, and frames were sized to remain usable with 0.4 mm. Some shallow surface texture will be softer with the larger nozzle. A 0.25 mm configuration has not been slice-tested in this package.

Enable automatic supports **everywhere**, not only on the build plate, so roof undersides and awnings can be supported. Use **snug supports for the house roof**. Organic supports completed the validation slices for both wall parts and the garage roof. The house roof produced organic-support branch errors; its snug-support slice completed without those errors. Keep the profile's removable support interface gap; inspect the preview before printing, especially under the shed dormer, balcony, and awnings. Print the garage walls first if you want a smaller check of finish and detail.

## Assembly and painting

1. Remove supports carefully, supporting awnings and balcony rails with your fingers as you trim nearby material.
2. Dry-fit each roof over its matching building. The roof parts include the upper gable walls and dormers. These are flat glue joints without snap-fit keys; align the main wall edges and roof overhangs. Lightly sand the mating cut surfaces if necessary.
3. Paint stone walls and upper stone gables a warm cream/gray; roof shingles and dormer siding brown; awnings muted green; window glazing a dark gray. Preview colors identify major parts, so the brown upper stone gables in the render should be painted to match the lower masonry.
4. Glue after checking alignment. Keep the house and garage separate for placement on the layout. Their spacing in the previews is only for display, not a scaled property plan.

Windows and doors have closed, recessed surfaces for painting; they are not open glazing apertures. Both garage doors are modeled closed, including the door shown open in one photo. Small details are intentionally thickened: nominal walls are 1.8 mm, window frames approximately 0.9 mm, and balcony posts approximately 1 mm. Roofs have thicker shell areas and solid dormer details. Interiors, gutters, roof shingle texture, vegetation, wires, and the surrounding property are not reproduced. Stone coursing and partly obscured details are simplified interpretations.

## Accuracy and editable source

The assumed main house footprint is **34 × 28 feet**, with a **10-foot eave height** and **12-foot roof rise**. The garage is assumed **22 × 24 feet**, with an **8-foot eave height** and **9-foot roof rise**. These measurements are approximate; no numeric measurement was recoverable directly from the screenshots. Photo views also show different dates, so minor facade details may differ between views.

Edit `dimensions.json` and run `build_model.py` to regenerate the kit. The scale conversion is `real feet × 304.8 / 87 = model millimetres`. Source requires Python and the packages in `requirements.txt`. The local `_deps` folder contains the packages used for this build; the portable ZIP excludes them. On another machine install with `python -m pip install -r requirements.txt`. Preview rendering uses Windows Segoe UI fonts; change the two font paths if rebuilding on another operating system.

`assembly_coordinates.json` preserves each part's original minimum coordinates before print normalization. For precise digital assembly, translate each normalized part by its listed original minimum. The two `*_assembled_reference.stl` files show the combined shapes and are optional references, not additional kit parts. Their roofs overlap the walls by 0.02 mm to make robust union meshes.

## Validation

All four print STLs and both assembled reference STLs were reloaded and checked for watertightness, consistent winding, positive volume, and a single connected surface component. Every part fits the MK3.5 build envelope. PrusaSlicer 2.9.4 generated toolpaths for all four separate parts using the installed MK3.5 0.4 mm printer profile, 0.10 mm FAST DETAIL, 3 perimeters, 10% infill, and an available AmazonBasics PLA preset as a validation material. This does not imply that preset matches your filament. No physical test print has been made.

Use the model files and slice with your own filament settings. Validation G-code is excluded from the portable kit. See `mesh_validation.json` and `slicing_validation.json` for the recorded checks.

Hardware references: [Prusa MK3.5 nozzle information](https://help.prusa3d.com/article/changing-or-replacing-the-nozzle-mk2-5-s-mk3-s-mk3-5-s_2069?product=mk3s-2) and [Prusa MK3.5 upgrade information](https://www.prusa3d.com/product/original-prusa-i3-mk3-s-to-mk3-5-upgrade-kit/). The build envelope was also verified against the installed printer profile.
