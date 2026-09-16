EXPANSION-BAND CLEANING FIXTURE — REVISION 3 PROTOTYPE
All model dimensions and STL import units are millimeters.

REVISION 3 CHANGES
  Stepped sockets support 23 mm of the insert's solid rear spine (previously 3 mm).
  Rear socket height is 26 mm; socket floor is 3 mm above the bed.
  Front socket height stays 6 mm to leave the largest band opening unobstructed.
  Fully seated 20 mm insert opening is z=6.6..27 mm (20.4 mm clear width).
  Front clearance is 0.6 mm. Tall rear walls end 1.5 mm behind the slot start.
  Side walls increase from 3 to 4 mm; socket end walls are 2.5 mm.
  All insert geometries are unchanged; reprint the drum only.
  CAD intersections confirmed no solid overlap with the largest insert or band opening.

RETAINED REVISION 2 CHANGES
  Both insert sockets move radially outward by 4 mm in the XY plane.
  Retaining tips now reach R + 6 mm (formerly R + 2 mm).
  Existing inserts are unchanged and reusable; reprint only the drum.
  24 curved diagonal braces form 12 open triangular bays.
  Brace diameter increases from 3 mm to 4.2 mm (horizontal cross-section).
  Rim radial thickness increases from 2.8 to 3.6 mm; height from 3 to 3.5 mm.
  Diagonal supports cross link gaps at changing positions across band width.
  Actual strength and cleaning performance need confirmation with a print.

FILES
  drum.stl: print one, flat bottom down (already oriented).
  slot_inserts_19mm.stl: optional replacement pair for the measured 19 mm body.
  slot_inserts_16-20mm.stl: ten separate solids, two of each size.
    Already arranged flat, with the recessed labels facing upward.
    A slicer can split the file into objects to print only the pair needed.
  expansion_band_stretcher.scad: editable OpenSCAD source; opens as assembly.
  preview.png: geometric illustration of the assembly and a 19 mm insert.
  mesh_check.json: exported STL edge-manifold and component checks.

DIMENSIONS
Drum support diameter: 88.20 mm.
Reference arc on the drum support cylinder: 254 mm (10 inches).
Outward-moved inserts slightly increase the effective band path; verify stretch.
Loading gap: 30 degrees. The band wraps around the long, 330-degree arc.
Overall base bounding box, including mounting sockets: 96.77 x 88.20 x 34 mm.
Allow additional basket clearance for the band, expanded end fittings and handling.
Actual band length under tension depends on band thickness and end geometry.
This is a fixed-size drum; changing inserts changes slot width, not stretch length.

RETAINING SLOTS — NO HOOKS
Two opposing axial walls surround a radially outward-opening slot in each insert.
Slide the narrow band body into this open slot; the wider expanded end fitting
stays on the loading-gap side of the insert. Band tension pulls the fitting
against the two walls. Both end fittings sit in the gap and the band follows the
long route around the drum. The open slot provides access from outside the drum;
it is not a closed through-hole.

Insert label       Actual clear slot width
16                 16.4 mm
17                 17.4 mm
18                 18.4 mm
19                 19.4 mm
20                 20.4 mm

Choose a slot wider than the body passing through it, but narrower than the
expanded end fitting. Lug width alone is not enough to select the insert.
The widened end needs to overlap BOTH retaining walls. These are not guaranteed
to retain every expansion-band end style. The body is confirmed to be 19 mm; expanded end dimensions were not supplied.

ASSEMBLY / USE
1. Print and check one insert size first. Deburr all contact edges until smooth.
2. Slide two matching inserts downward into the two sockets at the drum gap.
   The slot mouths point radially outward and the solid spines face inward.
3. With no tension, check that the band body enters the slot freely and the
   expanded end fitting cannot pull through. Confirm overlap on both walls.
4. Seat one end with its wider fitting on the gap side. Gently wrap the band
   around the outside ribs along the long arc, then seat the other end.
5. If this requires excessive stretch, stop and reduce band_path in the source.
   Do not force a particular band to reach the nominal 10-inch path.
6. Remove by relieving tension, then lifting the body outward through a slot.

PRINTING STARTING POINT
0.2 mm layers; 4 perimeters; solid inserts. Print both files as supplied.
Inserts print flat and the drum stands upright. Diagonal braces rise steeply
from the lower rim. The upper rim bridges approximately 20 mm between peaks;
inspect the slicer bridge paths and add support if your printer requires it.
Check print quality at the brace/rim junctions and socket fit before loading.
Insert thickness is 4 mm; socket width is 4.5 mm (0.25 mm clearance per side).
Printer tolerance and shrinkage may require adjusting socket_clearance.
Use a filament compatible with your bath temperature and cleaning solution;
thermal/chemical durability and load capacity have not been physically tested.

EDITING / EXPORTING IN OPENSCAD
part="base" exports the drum.
part="inserts" exports all five pairs laid flat.
part="insert" exports one flat insert using slot_width (default: 19 mm).
part="pair" exports two matching flat inserts.
part="socket" exports one standalone socket for inspection or a fit trial.
part="assembly" displays the drum and a pair of installed inserts.
Change band_path to resize the drum while retaining the 30-degree gap.
Change slot_clearance to alter the added width beyond the size label.
insert_radial_offset controls XY socket offset relative to revision 1.
brace_diameter and triangle_count control the diagonal framework.
socket_rear_height controls spine engagement; socket_front_height controls the
low portion under the band opening. Clearance assertions prevent the front from
obstructing the 20 mm insert and keep the rear behind the slot start.
The assembly seats inserts on the 3 mm floor; insert geometry is unchanged.
Render (F6), then export STL. Use the separate print files, not the assembled view.

VALIDATION AND LIMITS
The exported drum is one connected closed edge-manifold mesh. The insert file
contains ten connected closed edge-manifold meshes; the 19 mm pair contains two. The assembly preview was
inspected. This is a dimensioned prototype, not a physically tested fixture.
Basket dimensions, expanded band-end measurements, stretching force, and bath
conditions were not provided. Check these before printing the full set or use.
