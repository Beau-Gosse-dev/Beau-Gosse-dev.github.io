# Civil War Field Companion

A static listening companion for [The Civil War & Reconstruction podcast](https://civilwarpodcast.org/). The public site is hosted as a sub-project of Beau-Gosse-dev.github.io:

https://beau-gosse-dev.github.io/projects/civil-war-field-companion/

## Build and publish

The editable application lives in `apps/civil-war-field-companion` in the personal website repository. Generated public pages live in `projects/civil-war-field-companion`; change the application source, not those generated files.

Open the personal website repository as a Codex project. Run development and build commands from this application directory. Install dependencies on a fresh checkout with `pnpm install --frozen-lockfile`.

The application is statically exported by Vinext. To build it, replace the published files in the personal GitHub Pages repository, commit them, and push `main`, run:

```powershell
pnpm run publish:github
```

The publishing script validates both repository paths before replacing the generated project directory. GitHub Pages is the only production host used by the workflow.

Commit source edits before publishing. The script locates the parent repository relative to this directory and builds only this app, then commits and pushes the generated pages.

## Local research files

`data/transcripts/` contains machine transcripts used for research. It is intentionally ignored by Git and must never be force-added or copied into the public export. Existing transcripts remain on the local machine after migration; a fresh clone does not include them. Building the published guides does not require the transcripts.

Audio and other working files under `work/`, unfinished assets under `data/work-in-progress-assets/`, dependencies, and build caches are also local-only. The original companion Git history was not imported into this public repository.

## Episode at a glance

For newly revised guides, populate `atAGlance` using the `EpisodeGlance` type in `data/enrichments/types.ts`. Episode 95 is the current published example; legacy `facts` remain available for unrevised, hidden guides.

- Battle episodes: provide the featured action dates, location, and outcome. Use `episodeContext` for a sourced, clearly scoped subset such as an escaping column.
- Add the optional `battle` table only when military figures apply and sources are available. State the event and date range covered by the figures, especially when this is broader than the episode. Cite the sources beside the table and label estimates.
- Store unknown numbers as `null`, never zero. Zero means a source explicitly reports none. Preserve combined missing/captured categories when a source does not separate them; do not invent a split or total.
- Topic episodes (music, politics, biography, etc.): use `kind: 'topic'` with period, location, featured subject, optional key people, historical context, and sources. These do not render a military table.
- This section is saved editorial content, not generated or selected at page load. Check sources and scope when updating it.

## Person profiles

People in published guides have standalone pages at /people/<person-id>, with general biographies, source links, and additional archival photographs where available. Profiles contain no episode references or episode links; /people provides a directory. Person cards link to profiles, and every image opens in a keyboard-accessible viewer with zoom, touch pinch, drag-to-pan, and a full-size image link. Biography content lives in data/person-biographies.ts and supplemental image credits in data/person-gallery.json.

Run the build before Playwright tests. The test server serves the static export under the same project URL prefix as GitHub Pages so image loads and navigation are checked against the deployed layout.

## Suggestions

The "Suggest a change" form accepts suggestions without a GitHub account. It automatically supplies the page context to the separate feedback service, which creates the issue. Suggestions and replies are public. The form preserves input on errors and reuses a submission ID on retries to prevent duplicate issues. The repository's GitHub issue form remains an alternative, including for visitors without JavaScript.

`components/feedback-form.tsx` implements the form and `lib/feedback.ts` holds the public endpoint. Backend source is in `C:\Users\beaub\Documents\civil-war-feedback-service`, hosted independently through Sites; GitHub Pages still hosts this frontend. Runtime credentials are protected backend secrets and are never part of the frontend build. Update the backend's page allowlist whenever publishing new pages. No visitor email, password, or GitHub account is collected.

A recurring Codex review checks suggestions every six hours, responds to actionable feedback, and publishes verified small fixes. The computer must be on and the app running. See `docs/suggestion-review.md` for scope, source checking, duplicate-response handling, and publishing requirements.
