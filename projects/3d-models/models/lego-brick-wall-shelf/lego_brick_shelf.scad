// LEGO brick wall shelf — a real 1xN brick scaled up, mounted with its studs facing out.
// The brick's flat side becomes the shelf top; the underside is left open to save
// plastic and to reach the screws. Hangs on two screws via keyhole slots in the back.
// Two parts: the body, and studs that glue into shallow recesses on the front.
//
// Modelled in mounted orientation (Z up = up on the wall, -Y = out into the room),
// then flipped so the shelf top prints face-down on the bed with the open side up.

/* [Render] */
// body / studs = printable parts; assembled = preview only
part = "body"; // [body, studs, assembled]
// Number of studs (1x2 or 1x4 brick)
studs = 2; // [2, 4]
// Flip so the shelf top prints face-down (turn off to view it as mounted)
print_orientation = true;

/* [Size] */
// Overall width (X). 245 leaves room for the default skirt on a 250 mm bed.
width = 245;
// Thickness of the top, front and ends
wall = 2;
// Back wall is thicker since it carries the screw load
back_wall = 3;

// Real LEGO dimensions (mm). A brick is N*8 - 0.2 long, 7.8 wide, 9.6 tall.
lego_len    = studs * 8 - 0.2;
lego_width  = 7.8;
lego_height = 9.6;
lego_stud_d = 4.8;
lego_stud_h = 1.7;
lego_logo_relief = 0.1;

s = width / lego_len;           // scale factor
height = lego_width * s;        // brick width, standing vertical on the wall
depth  = lego_height * s;       // brick height, pointing out from the wall
stud_d = lego_stud_d * s;
stud_h = lego_stud_h * s;
stud_chamfer = 0.1 * s;
logo_relief = lego_logo_relief * s;
logo_width  = stud_d * 0.62;

/* [Keyholes] */
key_head_d   = 10;   // screw head passes through this
key_slot_w   = 5;    // screw shank rides in this
key_slot_len = 12;   // travel from head hole centre up to slot end
key_z        = height * 0.4;

/* [Two-part joint] */
seat_depth = 1;      // shallow recess in the front wall that locates each stud
seat_clearance = 0.4;

$fn = 160;

stud_xs = [for (i = [0 : studs - 1]) (3.9 + 8 * i) * s];
stud_z  = height / 2;
key_xs  = [stud_xs[0], stud_xs[studs - 1]];

module logo() {
    linear_extrude(height = logo_relief)
        resize([logo_width, 0], auto = true)
            text("LEGO", font = "Liberation Sans:style=Bold Italic",
                 halign = "center", valign = "center");
}

// Stud with its axis on +Z, base at z=0, logo on top. base_extra adds the locating plug below.
module stud(base_extra = 0) {
    translate([0, 0, -base_extra]) cylinder(d = stud_d, h = stud_h - stud_chamfer + base_extra);
    translate([0, 0, stud_h - stud_chamfer])
        cylinder(d1 = stud_d, d2 = stud_d - 2 * stud_chamfer, h = stud_chamfer);
    translate([0, 0, stud_h - 0.01]) logo();
}

// Keyhole through the back wall, slot running up from the head hole
module keyhole() {
    rotate([90, 0, 0]) linear_extrude(height = back_wall + 0.02, center = true) {
        circle(d = key_head_d);
        hull() { circle(d = key_slot_w); translate([0, key_slot_len]) circle(d = key_slot_w); }
    }
}

module body() {
    difference() {
        cube([width, depth, height]);
        // Hollow with the underside open
        translate([wall, wall, -0.01]) cube([width - 2 * wall, depth - wall - back_wall, height - wall + 0.01]);
        for (x = key_xs)
            translate([x, depth - back_wall / 2, key_z]) keyhole();
        for (x = stud_xs)
            translate([x, -0.01, stud_z]) rotate([-90, 0, 0])
                cylinder(d = stud_d + seat_clearance, h = seat_depth + 0.01);
    }
}

// Flip 180 about Y so the shelf top sits on the bed; front stays at the front
module print_orient() {
    if (!print_orientation) children();
    else translate([width, 0, height]) rotate([0, 180, 0]) children();
}

if (part == "body") {
    print_orient() body();
} else if (part == "studs") {
    // Printed flat on their back faces, logo up
    gap = 6;
    for (i = [0 : studs - 1])
        translate([(i % 2) * (stud_d + gap), floor(i / 2) * (stud_d + gap), seat_depth])
            stud(base_extra = seat_depth);
} else if (part == "assembled") {
    print_orient() {
        body();
        for (x = stud_xs) translate([x, 0, stud_z]) rotate([90, 0, 0]) stud(base_extra = seat_depth);
    }
}
