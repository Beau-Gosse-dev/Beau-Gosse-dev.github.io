import type { HistoricalSide, PersonId } from '../people';

type EpisodePersonRole = {
  role: string;
};

export type Person = EpisodePersonRole & ({
  personId: PersonId;
  name?: never;
  side?: never;
  image?: never;
  source?: never;
} | {
  personId?: never;
  name: string;
  side: HistoricalSide;
  image?: string;
  source?: string;
});

export type GlanceSource = { label: string; url: string };
export type BattleSideFigures = {
  side: 'United States' | 'Confederacy';
  // Null means unknown; zero must be explicitly supported by the source.
  soldiers: number | null;
  killed: number | null;
  wounded: number | null;
  losses: { grouping: 'combined'; missingAndCaptured: number | null }
    | { grouping: 'separate'; missing: number | null; captured: number | null };
};
export type EpisodeGlance = {
  when: string;
  where: string;
} & ({
  kind: 'battle';
  outcome: string;
  episodeContext?: { label: string; value: string; note: string; source: GlanceSource };
  battle?: {
    scope: string;
    estimated: boolean;
    note?: string;
    sources: [GlanceSource, ...GlanceSource[]];
    sides: [BattleSideFigures, BattleSideFigures];
  };
} | {
  kind: 'topic';
  focus: string;
  people?: string;
  context: string;
  sources: GlanceSource[];
});

export type Enrichment = {
  date: string;
  place: string;
  result: string;
  facts: { label: string; value: string; note?: string }[];
  atAGlance?: EpisodeGlance;
  maps: {
    title: string;
    caption: string;
    source: string;
    image?: string;
    alt?: string;
    embed?: string;
  }[];
  moments: { time: string; title: string; detail: string; audioTime?: number }[];
  command: {
    side: string;
    color: string;
    branches: { commander: string; command: string; subordinates?: string }[];
  }[];
  people: Person[];
  losses: {
    name: string;
    side: HistoricalSide;
    role: string;
    outcome: string;
  }[];
  gallery: { image: string; alt: string; caption: string; source: string }[];
  sources: { label: string; url: string }[];
};
