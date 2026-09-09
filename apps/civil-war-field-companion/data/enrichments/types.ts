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

export type Enrichment = {
  date: string;
  place: string;
  result: string;
  facts: { label: string; value: string; note?: string }[];
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
