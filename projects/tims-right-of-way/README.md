# Tim’s Right of Way

A silly, single-player family cycling game with alternating dialogue and arcade rounds. Play as Ashley, either daughter, or the youngest son, dodge oncoming cars, and find the one argument that persuades Tim to ride with traffic. The children use family-role labels so you can add their real names later.

## Play

Open `index.html` in a browser, with `styles.css` and `game.js` alongside it. The separately packaged `tims-right-of-way.html` is a single-file version you can open without any accompanying files. No install, build, server, account, or internet connection is needed.

1. **Talk to Tim.** Pick an argument from three categories, or press **1–4**. Each rejected argument causes a visible road incident: a swerving sedan, a braking snack van, or a honking SUV.
2. **Protect the family.** Start the traffic round. The road changes to an overhead playfield. Cars approach from the top; you lead the entire family through three paths inside Tim’s wrong-side lane. Survive the 14–18 second stretch, then return to dialogue.
3. **Find the winning argument.** Tim only moves to the actual right-hand lane after the one successful dialogue choice. Dodging within his lane does not change his mind.

| Control | Keyboard | Effect |
| --- | --- | --- |
| Swerve left/right | Arrow keys or A/D | Move the whole family into an adjacent path. |
| Ring bell | B | The nearest approaching driver swerves away from your target path. Four-second cooldown. |
| Flash bike light | L | All incoming cars slow for 2.5 seconds. Six-second cooldown. |
| Pause/resume | P or the header button | Freeze the ride, traffic, timer, and cooldowns. |

On phones, use the buttons directly below the road. You can also swipe the playfield left or right. The bell is most useful after a car appears; ringing with no car in range still uses its cooldown.

Each traffic round starts with three points of family composure. A close call costs one. Lose all three and the family pulls over for an emergency snack stop; retry that same stretch without losing your dialogue progress. Traffic gradually gets faster. There are no graphic injuries.

Sound starts off. Switching tabs automatically pauses active gameplay. Reduced-motion mode removes decorative bobbing, spinning effects, and confetti while retaining the car movement needed to play. The winning choice ends the trip with an animated lane change.

## Add it to GitHub Pages

1. Copy this entire folder into your site repository, for example as `projects/tims-right-of-way/`.
2. Add a project link to `/projects/tims-right-of-way/` on your portfolio.
3. Commit and push to whichever branch/folder your existing GitHub Pages site publishes.

For the `beau-gosse-dev.github.io` user site, that gives the game the URL `https://beau-gosse-dev.github.io/projects/tims-right-of-way/`. If your site publishes from a `docs/` folder, place the game under `docs/projects/tims-right-of-way/`. If the site uses a build tool, put this folder in the tool’s public/static assets folder instead. For a Jekyll site, these files are plain static assets and do not need front matter.

## Customize

- `game.js`: character names, dialogue, round flow, collision checks, traffic difficulty, abilities, and both Canvas views.
- `styles.css`: colors and layout.
- `index.html`: title, opening copy, and footer.

All graphics are drawn locally with Canvas or inline SVG. There are no external fonts, libraries, analytics, backend services, or network requests.

<details>
<summary>Winning argument (spoiler)</summary>

Under **Dad psychology**, tell Tim: “I heard the right side is the advanced lane. The left is for beginners.” This is the sole winning argument and works for all four characters. The win changes the family’s lane; Tim takes the credit.

</details>
