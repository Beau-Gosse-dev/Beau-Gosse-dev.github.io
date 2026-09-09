# Episode enrichment modules

Add each new guide as a separate TypeScript module in this directory. Name the
file after the episode slug, export one `Enrichment`, and register it in
`index.ts`. Existing guides remain in `data/enrichments.ts`; they do not need to
be moved for new guides to use the modular layout.

```ts
import type { Enrichment } from '../types';

export const enrichment = {
  // Episode guide fields.
} satisfies Enrichment;
```

Before adding a person inline, check `data/people.ts`. Reuse a catalog entry by
ID and keep only the role that is specific to this episode:

```ts
people: [
  {
    personId: 'ulysses-s-grant',
    role: 'Directed the counterattacks that recovered the United States line',
  },
],
```

Add a new catalog record only once. The record owns the canonical name, side,
lifespan, short biography, portrait, alt text, and portrait source. Episode
modules must not duplicate those fields for cataloged people.

The main coordinating agent—not an episode sub-agent—then imports the module in
`index.ts` and adds its episode slug to `episodeEnrichments`. Keeping that shared
registry under one owner prevents concurrent agents from editing the same file:

```ts
import { enrichment as episode124 } from './124-example-slug';

export const episodeEnrichments = {
  '124-example-slug': episode124,
} satisfies Record<string, Enrichment>;
```
