# Episode transcription workflow

The transcription step runs locally and does not require a paid API.

Run these commands from `apps/civil-war-field-companion`. The `data/transcripts/` directory is local-only and ignored by Git; do not commit, force-add, or publish its contents. A fresh clone can build the guides without transcripts but needs local transcription to resume research.

1. Refresh the podcast feed with `pnpm import:feed`.
2. Create a Python virtual environment and install `requirements-transcription.txt`.
3. Run `python scripts/transcribe-episode.py --next-guides 3` to process the next three queued guides by episode number. You can also pass one episode number directly or use `--latest 3` to ignore guide status and select by missing transcripts.
4. Review the generated JSON in `data/transcripts/` before using it to draft an episode guide. Successful transcription advances a queued guide to `transcribed` in `data/guide-status.json`.
5. Advance each guide through `drafted`, `fact_checked`, and `published` as the content moves through review and deployment.

The transcript is a machine-generated research aid. Names, quotations, troop movements, casualties, dates, and map labels must be checked against historical sources before publication.
