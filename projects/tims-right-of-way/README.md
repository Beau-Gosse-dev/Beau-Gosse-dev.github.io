# Tim’s Right of Way

A silly single-player family bike ride on one screen. Play as Ashley, either daughter, or the youngest son. Dodge oncoming cars while choosing arguments to persuade Tim to ride on the right side of the road.

## Play

Open `index.html` with `styles.css` and `game.js` alongside it. No install, build, account, or backend is needed.

Pick a family member to begin. The road keeps moving while you talk to Tim. Three arguments appear at a time; **More ideas** cycles through all twelve choices for your character. Rejected arguments make a driver swerve and trigger a funny reply. Tim talks for three seconds before you can make another argument, but steering and abilities remain available.

| Control | Keyboard | Effect |
| --- | --- | --- |
| Swerve left/right | Arrows or A/D | Steer the entire family through three paths inside Tim’s oncoming lane. |
| Ring bell | B | A driver moves out of your path. Four-second cooldown. |
| Flash light | L | Slow traffic for 2.5 seconds. Six-second cooldown. |
| Choose an argument | 1–3 | Pick one of the visible dialogue choices. |
| Pause/resume | P or Pause | Freeze traffic, dialogue waits, and cooldowns. |

On phones, use the four buttons below the road. You can also swipe left or right. Three close calls cause an emergency snack stop. Retry restores composure and preserves arguments already tried. Traffic is continuous, with no separate rounds or results screens.

There is exactly one winning argument. It makes the whole family cross into the actual right lane and ends the ride. Dodging within the left lane does not count as changing Tim’s mind.

Sound starts off. Hiding the browser tab automatically pauses the ride. Reduced-motion preferences remove the close-call wobble while preserving essential car movement. Graphics use local Canvas and inline SVG; there are no external fonts, libraries, analytics, or network requests.

## GitHub Pages

This folder lives at `projects/tims-right-of-way/` in `Beau-Gosse-dev.github.io`, published from `main`.

[Play the game](https://beau-gosse-dev.github.io/projects/tims-right-of-way/)

## Customize

- `game.js`: family members, dialogue, traffic, collision checks, and abilities.
- `styles.css`: the responsive single-screen layout and colors.
- `index.html`: the title, controls, and start/end overlays.

<details>
<summary>Winning argument (spoiler)</summary>

In the second set of ideas, tell Tim: “I heard the right side is the advanced lane. The left is for beginners.” This is the only winning argument and works for every character. Tim immediately takes the credit.

</details>
