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
