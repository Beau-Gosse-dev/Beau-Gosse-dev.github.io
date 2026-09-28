// Kredik Shaw dice tower — an unofficial fan model of the Lord Ruler's palace
// in Luthadel, from Brandon Sanderson's Mistborn.
//
// Dice drop into the open roof of the hall at the back, tumble over two
// baffles, run down a ramp through a tunnel under the central spire, and roll
// out of the front gate into a separate courtyard tray.
//
// Sized for a Prusa MK3/MK3S: the tower prints upright in one piece, 205 mm
// tall (the MK3 limit is 210 mm). Windows are shallow pockets; the "windows"
// part is a plate of flat tiles, printed separately and glued in.
//
// Coordinates: millimetres, Z up, the gate faces -Y. The tray sits in front
// of the tower with its back wall touching the front of the tower's plinth.

/* [Render] */
// tower / windows / tray are printable parts; assembled is a preview
part = "assembled"; // [tower, windows, tray, assembled]

/* [Overall] */
// Tip of the central spire. The MK3 can print up to 210 mm.
total_height = 205;
plinth_h = 4;
// Depth of the window pockets, and thickness of the glued-in tiles
window_depth = 1.2;
// Gap around each tile so it drops into its pocket
tile_clearance = 0.15;

/* [Central tower] */
central_w = 40;
central_top = 150;

/* [Halo ring] */
// The great ring around the central tower: centre height and outer semi-axes
ring_zc = 104;
ring_a = 50;
ring_b = 27;
ring_band = 5;

/* [Dice path] */
// Inside of the dice shaft
shaft_w = 50;
shaft_d = 60;
hall_wall = 4;
// Front face of the dice hall, directly behind the central tower
hall_y0 = 40;
// Top of the hall walls, where the dice go in
hall_top = 144;
// Exit tunnel and gate
tunnel_w = 32;
tunnel_spring = 26;
// Baffles: slope from horizontal, reach from their wall, and thickness
baffle_slope = 35;
baffle_reach = 34;
baffle_t = 2.4;
// Height of each baffle where it meets its wall (A: back wall, B: front wall)
baffle_a_z = 134;
baffle_b_z = 96;
// Ramp slopes under the shaft and through the tunnel
floor_shaft_slope = 25;
floor_tunnel_slope = 12;

/* [Tray] */
tray_w = 176;
tray_d = 120;
tray_wall = 3.2;
tray_floor = 2.4;
tray_h = 16;

$fa = 6;
$fs = 0.4;

// ---------------------------------------------------------------- derived
gate_y = 0;                          // front face of the central tower
plinth_front = -12;                  // tray docks against this edge
cx = central_w / 2;
sy0 = hall_y0 + hall_wall;           // shaft interior, front
sy1 = sy0 + shaft_d;                 // shaft interior, back
hall_y1 = sy1 + hall_wall;
hall_x = shaft_w / 2 + hall_wall;
floor_mid = plinth_h + (sy0 - gate_y) * tan(floor_tunnel_slope);
floor_back = floor_mid + shaft_d * tan(floor_shaft_slope);
baffle_drop = baffle_reach * tan(baffle_slope);
baffle_tv = baffle_t / cos(baffle_slope);  // vertical thickness

// Inner edge of the lower half of the ring; the facade below follows it
ring_ia = ring_a - ring_band;
ring_ib = ring_b - ring_band;
function ring_low(x, a = ring_ia, b = ring_ib) = ring_zc - b * sqrt(max(0, 1 - (x / a) * (x / a)));

// Clearance checks for the largest dice
a_tip_bottom = baffle_a_z - baffle_drop - baffle_tv;
b_under_a_tip = baffle_b_z - (shaft_d - baffle_reach) * tan(baffle_slope);
b_tip_bottom = baffle_b_z - baffle_drop - baffle_tv;
floor_under_b_tip = floor_mid + baffle_reach * tan(floor_shaft_slope);
assert(a_tip_bottom - b_under_a_tip >= 28, "Baffle A is too close to baffle B");
assert(b_tip_bottom - floor_under_b_tip >= 28, "Baffle B is too close to the ramp");
assert(shaft_d - baffle_reach >= 25, "Gap at the baffle tips is too narrow for large dice");
assert(2 * baffle_reach > shaft_d, "Baffles must overlap so dice cannot fall straight through");
assert(total_height <= 210, "Too tall for a Prusa MK3");

// Every window: [face, plane, centre, width, bottom, top, shape].
// Shapes: "round" (round head), "rect" (flat top), "rose" (circle; width is
// the diameter and bottom is the centre height).
oct_apothem = 13 * cos(22.5);
windows = concat(
    [["front", 0, 0, 14, 54, 73, "rect"],
     ["front", 0, 0, 14, 82, 144, "round"]],
    [for (f = [["front", 20 - oct_apothem, 0], ["back", 20 + oct_apothem, 0],
               ["right", oct_apothem, 20], ["left", -oct_apothem, 20]])
        [f[0], f[1], f[2], 3, central_top + 11, central_top + 28, "round"]],
    [for (s = [-1, 1]) each [
        ["front", 4, s * 30, 13, 30, 79, "round"],
        [s < 0 ? "left" : "right", s * 51.5, 22, 6, 30, 92, "round"],
        ["front", -3.5 - 5 * cos(22.5), s * 30, 2.4, 20, 32, "round"],
        [s < 0 ? "left" : "right", s * hall_x, sy0 + 18, 7, 40, 125, "round"],
        [s < 0 ? "left" : "right", s * hall_x, sy0 + 44, 7, 40, 125, "round"],
        ["back", hall_y1, s * 10, 7, 30, 85, "round"]]],
    [["back", hall_y1, 0, 30, 112, 0, "rose"]]
);

// ---------------------------------------------------------------- helpers
// Extrude a 2D shape drawn in (u, v = z) onto a building face. d goes into
// the wall, e sticks out of it. c is the face's horizontal centre.
module on_face(face, plane, c, d, e) {
    if (face == "front") translate([c, plane + d, 0]) rotate([90, 0, 0]) linear_extrude(d + e) children();
    if (face == "back")  translate([c, plane + e, 0]) rotate([90, 0, 0]) linear_extrude(d + e) children();
    if (face == "right") translate([plane - d, c, 0]) rotate([90, 0, 90]) linear_extrude(d + e) children();
    if (face == "left")  translate([plane - e, c, 0]) rotate([90, 0, 90]) linear_extrude(d + e) children();
}

// Extrude a (y, z) profile across X from x0 to x1
module across_x(x0, x1) {
    translate([x0, 0, 0]) rotate([90, 0, 90]) linear_extrude(x1 - x0) children();
}

// Extrude an (x, z) profile along Y from y0 to y1
module along_y(y0, y1) {
    translate([0, y1, 0]) rotate([90, 0, 0]) linear_extrude(y1 - y0) children();
}

// Round-headed lancet from z0 to its top z1
module round_lancet(w, z0, z1) {
    translate([-w / 2, z0]) square([w, z1 - w / 2 - z0]);
    translate([0, z1 - w / 2]) circle(d = w);
}

// Pointed arch with springline zs; rf sets how sharp the point is
module pointed_arch(w, z0, zs, rf = 0.8) {
    r = w * rf;
    translate([-w / 2, z0]) square([w, zs - z0]);
    intersection() {
        translate([w / 2 - r, zs]) circle(r);
        translate([r - w / 2, zs]) circle(r);
        translate([-w / 2, zs]) square([w, r]);
    }
}

// Outline of one window, grown by g (negative shrinks it)
module window_2d(w, z0, z1, shape, g = 0) {
    if (shape == "rose") translate([0, z0]) circle(d = w + 2 * g);
    else if (shape == "rect") translate([-w / 2 - g, z0 - g]) square([w + 2 * g, z1 - z0 + 2 * g]);
    else round_lancet(w + 2 * g, z0 - g, z1 + g);
}

// Raised moulding around a window
module window_frame(w, z0, z1, shape, f = 1.2) {
    difference() {
        window_2d(w, z0, z1, shape, f);
        window_2d(w, z0, z1, shape);
    }
}

// Octagonal needle spire: short shaft, chamfered collars, long tapering point
module collar(d, z) {
    b = d * 0.14;
    translate([0, 0, z - b]) cylinder(d1 = d, d2 = d * 1.24, h = b, $fn = 8);
    translate([0, 0, z]) cylinder(d1 = d * 1.24, d2 = d * 0.9, h = b * 0.8, $fn = 8);
}

module spire(d, h) {
    shaft_h = h * 0.22;
    z2 = shaft_h + (h - shaft_h) * 0.3;
    rotate(22.5) {
        cylinder(d = d, h = shaft_h + 0.01, $fn = 8);
        collar(d, shaft_h);
        translate([0, 0, shaft_h]) cylinder(d1 = d * 0.92, d2 = 0, h = h - shaft_h, $fn = 8);
        collar(d * 0.92 * 0.7, z2);
    }
}

// Lance: a long square shaft with thin square collars and a slender pyramid tip,
// like the needle towers that bristle across the paintings
module square_collar(d, z) {
    b = d * 0.22;
    translate([0, 0, z - b]) rotate(45) cylinder(d1 = d * sqrt(2), d2 = d * 1.45 * sqrt(2), h = b, $fn = 4);
    translate([0, 0, z]) rotate(45) cylinder(d1 = d * 1.45 * sqrt(2), d2 = d * sqrt(2), h = b, $fn = 4);
}

module lance(d, h, collars = [0.3, 0.55]) {
    tip = h * 0.32;
    translate([-d / 2, -d / 2, 0]) cube([d, d, h - tip + 0.01]);
    translate([0, 0, h - tip]) rotate(45) cylinder(d1 = d * sqrt(2), d2 = 0, h = tip, $fn = 4);
    for (f = collars) square_collar(d, f * h);
    square_collar(d, h - tip);
}

// Both halves of a symmetrical feature
module mirrored() {
    children();
    mirror([1, 0, 0]) children();
}

// ---------------------------------------------------------------- tower
// Base: full width under the front, narrower under the hall at the back
module plinth() {
    for (r = [[84, plinth_front, 46], [60, 46, hall_y1 + 6]]) hull() {
        translate([-r[0], r[1], 0]) cube([2 * r[0], r[2] - r[1], plinth_h - 1.2]);
        translate([-r[0] + 1.2, r[1] + 1.2, 0]) cube([2 * r[0] - 2.4, r[2] - r[1] - 2.4, plinth_h]);
    }
}

module central_tower() {
    // Main shaft
    translate([-cx, 0, 0]) cube([central_w, hall_y0 + 0.1, central_top]);
    // Clean chamfered steps up to two octagonal tiers and the needle
    translate([0, 20, 0]) rotate(22.5) {
        hull() {
            translate([0, 0, central_top - 0.1]) rotate(-22.5) cube([central_w, central_w, 0.2], center = true);
            translate([0, 0, central_top + 7]) cylinder(d = 26, h = 0.1, $fn = 8);
        }
        translate([0, 0, central_top + 7]) cylinder(d = 26, h = 24, $fn = 8);
        hull() {
            translate([0, 0, central_top + 31]) cylinder(d = 26, h = 0.1, $fn = 8);
            translate([0, 0, central_top + 34]) cylinder(d = 12, h = 0.1, $fn = 8);
        }
        translate([0, 0, central_top + 34]) cylinder(d = 12, h = 9, $fn = 8);
        for (a = [0 : 90 : 270]) rotate(a + 22.5) translate([11.4, 0, central_top + 30]) spire(2.4, 13);
    }
    translate([0, 20, central_top + 43]) {
        spire(7, total_height - central_top - 43);
        translate([0, 0, total_height - central_top - 50]) sphere(d = 3, $fn = 16);
    }
    // Vertical ribs up the front and sides
    mirrored() {
        for (x = [11.5, 16]) translate([x - 0.5, -0.8, 50]) cube([1, 1, central_top - 52]);
        for (y = [12, 20, 28]) translate([cx - 0.2, y - 0.5, 88]) cube([1, 1, central_top - 90]);
    }
    // Lances on the front corners, and a pair hugging each side
    mirrored() {
        translate([cx + 0.5, 0.5, 0]) lance(4, 176, [0.2, 0.42, 0.62]);
        translate([cx + 3, 8, 85]) lance(6, 102);
        translate([cx + 2.5, 30, 88]) lance(5, 84);
    }
}

// The great ring, drawn in (x, z). Its top half stops at the central tower.
module ring_2d() {
    difference() {
        translate([0, ring_zc]) scale([ring_a, ring_b]) circle(1, $fn = 120);
        translate([0, ring_zc]) scale([ring_ia, ring_ib]) circle(1, $fn = 120);
        translate([-cx + 0.5, ring_zc]) square([central_w - 1, ring_b + 1]);
    }
}

// Lower facade: the flanking windows, with its top following the ring
module lower_facade() {
    xs = [for (x = [ring_ia : -2 : -ring_ia]) x];
    along_y(4, hall_y0 + 0.1) polygon(concat(
        [[-51.5, 0], [51.5, 0], [51.5, ring_zc]],
        [for (x = xs) [x, ring_low(x)]],
        [[-51.5, ring_zc]]));
    along_y(-1.5, 6) ring_2d();
    mirrored() {
        // Tall lances at the ends of the ring, and one in front of each side
        translate([54, 4, 0]) lance(6, 185, [0.2, 0.4, 0.62]);
        translate([45, 2.5, 0]) lance(4, 128);
        // Blade-like fins at the outer edges
        along_y(8, 13) polygon(concat([[56, 0]],
            [for (t = [0 : 0.05 : 1.001]) [60 + 18 * pow(1 - t, 2), 136 * t]], [[56, 122]]));
        // Turret with a needle roof in front of each flanking window
        translate([30, -3.5, 0]) rotate(22.5) {
            cylinder(d = 10, h = 38, $fn = 8);
            translate([0, 0, 38]) cylinder(d1 = 10, d2 = 11.6, h = 1.2, $fn = 8);
            translate([0, 0, 39.2]) cylinder(d1 = 11.6, d2 = 0, h = 36, $fn = 8);
        }
    }
}

module hall() {
    translate([-hall_x, hall_y0, 0]) cube([2 * hall_x, hall_y1 - hall_y0, hall_top]);
    // Clean moulded rim
    hull() {
        translate([-hall_x, hall_y0, hall_top - 4]) cube([2 * hall_x, hall_y1 - hall_y0, 0.1]);
        translate([-hall_x - 1, hall_y0, hall_top - 2.5]) cube([2 * hall_x + 2, hall_y1 - hall_y0 + 1, 1.5]);
    }
    mirrored() {
        // Corner lances
        translate([hall_x, hall_y0 + 1, 0]) lance(5, 172, [0.3, 0.55, 0.75]);
        translate([hall_x, hall_y1, 0]) lance(7, 186, [0.3, 0.55, 0.75]);
        // Blade fins along the sides
        for (y = [sy0 + 31, sy0 + 57]) along_y(y - 2, y + 2)
            polygon(concat([[hall_x - 1, 0]],
                [for (t = [0 : 0.05 : 1.001]) [hall_x + 2 + 18 * pow(1 - t, 2), 126 * t]], [[hall_x - 1, 114]]));
        // Vertical ribs on the sides and back, clear of the windows
        for (y = [sy0 + 4, sy0 + 9, sy0 + 24, sy0 + 38, sy0 + 50]) translate([hall_x - 0.2, y - 0.5, plinth_h]) cube([1, 1, hall_top - plinth_h - 4]);
        for (x = [18.5, 22.5]) translate([x - 0.5, hall_y1 - 0.2, plinth_h]) cube([1, 1, hall_top - plinth_h - 4]);
        // Ribs on the back of the lower facade
        for (x = [34, 40, 46]) translate([x - 0.5, hall_y0 - 0.2, plinth_h]) cube([1, 1, ring_zc - 6]);
    }
}

module dice_path_cuts() {
    // Shaft
    translate([-shaft_w / 2, sy0, -1]) cube([shaft_w, shaft_d, hall_top + 10]);
    // Exit tunnel under the central tower
    translate([0, sy0 + 1, 0]) rotate([90, 0, 0]) linear_extrude(sy0 + 1 - gate_y + 2)
        pointed_arch(tunnel_w, -1, tunnel_spring);
    // Stepped archivolt around the gate
    on_face("front", gate_y, 0, 1.2, 2) pointed_arch(tunnel_w + 5, plinth_h, tunnel_spring);
    on_face("front", gate_y, 0, 2.4, 2) pointed_arch(tunnel_w + 2.5, plinth_h, tunnel_spring);
}

module dice_path_parts() {
    // Ramp: level in front of the gate, shallow through the tunnel, steeper under the shaft
    across_x(-shaft_w / 2 - 0.5, shaft_w / 2 + 0.5) polygon([
        [plinth_front, 0], [plinth_front, plinth_h], [gate_y, plinth_h],
        [sy0, floor_mid], [sy1 + 0.5, floor_back], [sy1 + 0.5, 0]]);
    // Baffle A hangs from the back wall, baffle B from the front wall
    across_x(-shaft_w / 2 - 0.5, shaft_w / 2 + 0.5) {
        polygon([[sy1 + 1, baffle_a_z], [sy1 - baffle_reach, baffle_a_z - baffle_drop],
                 [sy1 - baffle_reach, baffle_a_z - baffle_drop - baffle_tv], [sy1 + 1, baffle_a_z - baffle_tv]]);
        polygon([[sy0 - 1, baffle_b_z], [sy0 + baffle_reach, baffle_b_z - baffle_drop],
                 [sy0 + baffle_reach, baffle_b_z - baffle_drop - baffle_tv], [sy0 - 1, baffle_b_z - baffle_tv]]);
    }
    // Guides that funnel dice from the shaft into the narrower tunnel
    mirrored() linear_extrude(40)
        polygon([[shaft_w / 2 + 0.5, sy0 - 0.5], [tunnel_w / 2, sy0 - 0.5], [shaft_w / 2 + 0.5, sy0 + 16]]);
}

module window_frames() {
    on_face("front", 0, 0, 0.2, 1) window_frame(14, 54, 144, "round");
    mirrored() {
        on_face("front", 4, 30, 0.2, 1) window_frame(13, 30, 79, "round");
        for (y = [sy0 + 18, sy0 + 44]) on_face("right", hall_x, y, 0.2, 1) window_frame(7, 40, 125, "round");
    }
    on_face("back", hall_y1, 0, 0.2, 1) window_frame(30, 112, 0, "rose", 2);
}

// Window pockets (e > 0 pokes the cutter out through the surface), or the
// tiles sitting in them for the preview
module window_volumes(e = 0, g = 0) {
    for (w = windows) on_face(w[0], w[1], w[2], window_depth, e)
        difference() {
            window_2d(w[3], w[4], w[5], w[6], g);
            if (w[0] == "front" && w[1] <= 4) translate([-w[2], 0]) offset(delta = 0.6 - g) ring_2d();
        }
}

module tower_solid() {
    plinth();
    difference() {
        union() {
            central_tower();
            lower_facade();
            hall();
            window_frames();
        }
        dice_path_cuts();
    }
    dice_path_parts();
}

module tower() {
    difference() {
        tower_solid();
        window_volumes(0.05);
    }
}

// Flat tiles for every window, laid out on one plate
module window_tiles() {
    for (i = [0 : len(windows) - 1]) {
        w = windows[i];
        if (w[6] == "rose") translate([200, 20, 0]) linear_extrude(window_depth)
            window_2d(w[3], 0, 0, "rose", -tile_clearance);
        else translate([(i % 10) * 19, floor(i / 10) * 105 - w[4], 0]) linear_extrude(window_depth)
            difference() {
                window_2d(w[3], w[4], w[5], w[6], -tile_clearance);
                if (w[0] == "front" && w[1] <= 4) translate([-w[2], 0]) offset(delta = 0.6 + tile_clearance) ring_2d();
            }
    }
}

// ---------------------------------------------------------------- tray
// Courtyard tray, modelled in place in front of the tower
module tray_body() {
    x0 = -tray_w / 2;
    y0 = plinth_front - tray_d;
    y1 = plinth_front;
    difference() {
        translate([x0, y0, 0]) cube([tray_w, tray_d, tray_h]);
        translate([x0 + tray_wall, y0 + tray_wall, tray_floor]) cube([tray_w - 2 * tray_wall, tray_d - 2 * tray_wall, tray_h]);
        // Gate in the back wall, lined up with the tower's exit
        translate([-tunnel_w / 2 - 4, y1 - tray_wall - 1, tray_floor]) cube([tunnel_w + 8, tray_wall + 2, tray_h + 1]);
        // Blind arcades on the outside of the walls
        for (x = [x0 + 12 : 11 : -x0 - 12]) on_face("front", y0, x, 0.8, 1) pointed_arch(6, 3, 9, 1);
        for (y = [y0 + 12 : 11 : y1 - 10]) {
            on_face("left", x0, y, 0.8, 1) pointed_arch(6, 3, 9, 1);
            on_face("right", -x0, y, 0.8, 1) pointed_arch(6, 3, 9, 1);
        }
    }
    // Lances at the corners and flanking the gate
    for (x = [x0 + 2.5, -x0 - 2.5], y = [y0 + 2.5, y1 - 2.5]) translate([x, y, 0]) lance(5, 44);
    mirrored() translate([tunnel_w / 2 + 6.5, y1 - 2.5, 0]) lance(5, 56);
}

// ---------------------------------------------------------------- output
if (part == "tower") tower();
if (part == "windows") window_tiles();
if (part == "glass") window_volumes(0, -tile_clearance);
if (part == "tray_in_place") tray_body();
if (part == "tray") translate([0, tray_d / 2 - plinth_front, 0]) tray_body();
if (part == "assembled") {
    color("#2b2d33") tower();
    color("#ff7a1a") window_volumes(0, -tile_clearance);
    color("#3a3d44") tray_body();
}
