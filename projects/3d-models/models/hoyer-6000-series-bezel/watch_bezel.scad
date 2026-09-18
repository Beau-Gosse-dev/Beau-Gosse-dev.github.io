// Two-piece watch bezel replacement.
// All dimensions are millimeters.

$fn = 240;

inner_diameter = 32.9;
radial_clearance = 0.0;
rim_width = 1.3;
side_gap = 9.3;
end_width = 4.75;
end_extension = 3.0;
body_thickness = 1.0;
end_drop = 2.0;
terminal_shoulder_span = 35.5;

// 0 = upper half, 1 = lower half, 2 = installed assembly.
render_mode = 0;

inner_radius = inner_diameter / 2 + radial_clearance;
outer_radius = inner_radius + rim_width;
gap_half = side_gap / 2;
circular_end_x = sqrt(outer_radius * outer_radius - gap_half * gap_half);
tip_x = circular_end_x + end_extension;
terminal_start_x = terminal_shoulder_span / 2;
terminal_length = tip_x - terminal_start_x;
connector_top_y = gap_half + end_width;
connector_circle_x = sqrt(
    outer_radius * outer_radius - connector_top_y * connector_top_y
);

terminal_segments = 32;
epsilon = 0.02;
connector_overlap = 0.10;

function terminal_top(value) =
    -end_drop
    + (body_thickness + end_drop) * sqrt(1 - value * value);
function terminal_profile_points() = concat(
    [
        [terminal_start_x, -end_drop],
        [tip_x, -end_drop]
    ],
    [
        for (index = [terminal_segments - 1 : -1 : 0])
            let(
                path_fraction = index / terminal_segments,
                x_position = terminal_start_x + terminal_length * path_fraction
            )
            [x_position, terminal_top(path_fraction)]
    ]
);

module upper_ring_2d() {
    intersection() {
        difference() {
            circle(r = outer_radius);
            circle(r = inner_radius);
        }

        translate([-outer_radius - epsilon, gap_half])
            square([
                2 * (outer_radius + epsilon),
                outer_radius - gap_half + epsilon
            ]);
    }
}

module terminal(side) {
    if (side > 0) {
        translate([0, connector_top_y, 0])
            rotate([90, 0, 0])
                linear_extrude(height = end_width, convexity = 10)
                    polygon(points = terminal_profile_points());
    } else {
        mirror([1, 0, 0])
            translate([0, connector_top_y, 0])
                rotate([90, 0, 0])
                    linear_extrude(height = end_width, convexity = 10)
                        polygon(points = terminal_profile_points());
    }
}

module end_connector_2d(side) {
    connector_points = [
        [circular_end_x - connector_overlap, gap_half],
        [terminal_start_x + connector_overlap, gap_half],
        [terminal_start_x + connector_overlap, connector_top_y],
        [connector_circle_x - connector_overlap, connector_top_y]
    ];

    if (side > 0) {
        polygon(points = connector_points);
    } else {
        mirror([1, 0, 0])
            polygon(points = connector_points);
    }
}

module upper_half() {
    difference() {
        union() {
            linear_extrude(height = body_thickness)
                upper_ring_2d();
            linear_extrude(height = body_thickness) {
                end_connector_2d(-1);
                end_connector_2d(1);
            }
            terminal(-1);
            terminal(1);
        }

        translate([0, 0, -end_drop - 1])
            cylinder(
                r = inner_radius,
                h = end_drop + body_thickness + 2
            );
    }
}

module lower_half() {
    mirror([0, 1, 0])
        upper_half();
}

module assembly() {
    upper_half();
    lower_half();
}

if (render_mode == 0) {
    upper_half();
} else if (render_mode == 1) {
    lower_half();
} else if (render_mode == 2) {
    assembly();
}
