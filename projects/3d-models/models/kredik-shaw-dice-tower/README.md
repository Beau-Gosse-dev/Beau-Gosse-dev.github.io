# Kredik Shaw dice tower (work in progress)

An unofficial fan model of the Lord Ruler's palace in Luthadel, from Brandon Sanderson's *Mistborn*, built as a dice tower for a Prusa MK3/MK3S. Dice drop into the open roof of the hall at the back, bounce off two baffles, and roll out the front gate into the tray.

Still being refined; not yet test-printed or listed in the gallery.

| File | What it is | Size (mm) |
| --- | --- | --- |
| `kredik_shaw_tower.stl` | Main body, prints upright | 180 × 126 × 187 |
| `kredik_shaw_spire.stl` | Top of the central tower; glue onto the square peg | 24 × 24 × 113 |
| `kredik_shaw_tray.stl` | Courtyard tray; butts against the front of the base | 178 × 122 × 56 |
| `kredik_shaw_window_tiles.stl` | Flat window tiles, 1.2 mm thick, to glue into the window pockets | 157 × 185 × 1.2 |
| `kredik_shaw_dice_tower.scad` | Editable OpenSCAD source | |

Assembled, the tower stands 270 mm tall. In the OpenSCAD source, set `part = "assembled"` to preview everything together. Set `split_spire = false` and `spire_top = 205` to print the tower in one piece instead.

`build_model.py` regenerates the STLs (needs `openscad`, `numpy` and `manifold3d`).
