// Expansion-band cleaning fixture, revision 3. Units: mm.
// Export part="base", "inserts", "insert", "pair", "socket", or "assembly".
part = "assembly";
slot_width = 19;              // main band body width
slot_clearance = 0.4;         // added to nominal slot width
socket_clearance = 0.5;       // total clearance around 4 mm insert
band_path = 254;             // reference support arc, not exact stretched band length
opening_angle = 30;
height = 34;
insert_radial_offset = 4;     // R2: moves both sockets/inserts outward in XY
brace_diameter = 4.2;         // R1 vertical rods were 3 mm diameter
triangle_count = 12;          // 24 curved diagonal braces, 12 open triangles
rim_radial_thickness = 3.6;   // R1: 2.8 mm
rim_height = 3.5;             // R1: 3 mm
// R3 stepped sockets: deep at the solid spine, low under the band opening.
socket_floor = 3;
socket_front_height = 6;
socket_rear_height = 26;
socket_wall = 4;              // side walls: R2 3 mm, R3 4 mm
socket_end_wall = 2.5;
socket_spine_support = 6.5;   // band opening starts at insert x=8
$fn = 160;
R = band_path / ((360-opening_angle)*PI/180);
gate_length=14;
gate_thickness=4;
gate_bottom=3.2;
band_center=17;
gate_root=R-12+insert_radial_offset;

assert(brace_diameter>0 && brace_diameter<10);
assert(height>27 && triangle_count>=6);

module arc_ring(z,h) {
 translate([0,0,z]) rotate([0,0,opening_angle/2])
 rotate_extrude(angle=360-opening_angle)
 translate([R-rim_radial_thickness,0]) square([rim_radial_thickness,h]);
}
module gate_frame(a) {rotate([0,0,a]) translate([gate_root,-2,socket_floor]) children();}
// Solid curved diagonal: horizontal round sections follow the cylinder surface.
// a is bottom angle, b is top angle. Outer support radius stays R throughout.
module diagonal(a,b) {
 n=20; steps=10; rr=brace_diameter/2; cr=R-rr;
 zlo=2; zhi=height-2;
 pts=[for(j=[0:steps]) for(i=[0:n-1])
  let(t=j/steps, angle=a+(b-a)*t)
  [cr*cos(angle)+rr*cos(360*i/n),cr*sin(angle)+rr*sin(360*i/n),zlo+(zhi-zlo)*t]];
 sides=[for(j=[0:steps-1]) for(i=[0:n-1]) each
  [[j*n+i,j*n+(i+1)%n,(j+1)*n+(i+1)%n],
   [j*n+i,(j+1)*n+(i+1)%n,(j+1)*n+i]]];
 polyhedron(points=pts, faces=concat(
  [[for(i=[n-1:-1:0]) i]],sides,[[for(i=[0:n-1]) steps*n+i]]),convexity=6);
}
// In local coordinates, the insert spans x=0..14, y=-2..2.
// The upper rear housing stops 1.5 mm before the band opening at x=8.
module socket_stock() {
 x0=-socket_clearance/2-socket_end_wall;
 side=gate_thickness/2+socket_clearance/2+socket_wall;
 union() {
  translate([x0,-side,0]) cube([gate_length+socket_clearance+2*socket_end_wall,2*side,socket_front_height]);
  translate([x0,-side,0]) cube([socket_spine_support-x0,2*side,socket_rear_height]);
 }
}
module socket_void() {
 translate([-socket_clearance/2,-gate_thickness/2-socket_clearance/2,socket_floor])
  cube([gate_length+socket_clearance,gate_thickness+socket_clearance,height]);
}
module socket() {difference() {socket_stock(); socket_void();}}
module base() {
 difference() {
  union() {
   arc_ring(0,rim_height); arc_ring(height-rim_height,rim_height);
   edge_angle=opening_angle/2+4;
   pitch=(360-2*edge_angle)/triangle_count;
   for(i=[0:triangle_count-1]) {
    diagonal(edge_angle+i*pitch,edge_angle+(i+0.5)*pitch);
    diagonal(edge_angle+(i+1)*pitch,edge_angle+(i+0.5)*pitch);
   }
   for(a=[opening_angle/2,360-opening_angle/2])
    rotate([0,0,a]) translate([gate_root,0,0]) socket_stock();
  }
  for(a=[opening_angle/2,360-opening_angle/2])
   rotate([0,0,a]) translate([gate_root,0,0]) socket_void();
 }
}
// Insert geometry unchanged from R1: existing inserts can be reused.
// Slot opens radially outward; two axial walls retain the wider end fitting.
module gate(w=19) {
 difference() {
  cube([gate_length,gate_thickness,height-gate_bottom]);
  translate([8,-1,band_center-gate_bottom-(w+slot_clearance)/2])
   cube([gate_length,gate_thickness+2,w+slot_clearance]);
  translate([4,gate_thickness+0.1,14]) rotate([90,0,0])
   linear_extrude(height=0.7) text(str(w),size=3,halign="center",valign="center",font="Liberation Sans:style=Bold");
 }
}
module flat_gate(w) {translate([0,height-gate_bottom,0]) rotate([90,0,0]) gate(w);}
// Largest existing insert when fully seated: opening z=6.6..27 mm.
assert(socket_front_height <= socket_floor+band_center-gate_bottom-(20+slot_clearance)/2-0.5,
       "Front socket wall would obstruct the largest band opening");
assert(socket_spine_support <= 8-1.0, "Rear socket must stop behind the band opening");
if(part=="base") base();
if(part=="socket") translate([3,6.25,0]) socket();
// Diagnostic exports intentionally produce an empty object on success.
if(part=="check_insert") intersection() {socket();translate([0,-2,socket_floor]) gate(20);}
if(part=="check_band") intersection() {
 socket();
 translate([8,-12,socket_floor+band_center-gate_bottom-(20+slot_clearance)/2])
  cube([gate_length+5,24,20+slot_clearance]);
}
if(part=="insert") flat_gate(slot_width);
if(part=="pair") for(j=[0:1]) translate([0,j*36,0]) flat_gate(slot_width);
if(part=="inserts") for(i=[0:4]) for(j=[0:1]) translate([i*19,j*36,0]) flat_gate(16+i);
if(part=="assembly") {
 color("LightSlateGray") base();
 for(a=[opening_angle/2,360-opening_angle/2]) color("DarkOrange") gate_frame(a) gate(slot_width);
}
