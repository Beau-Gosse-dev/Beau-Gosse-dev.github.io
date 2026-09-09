import episodesData from '@/data/episodes.json';
import { enrichments } from '@/data/enrichments';
export type Episode = (typeof episodesData)[number];
export const episodes = episodesData as Episode[];
export const getEpisode = (slug: string) => episodes.find((episode) => episode.slug === slug);
export const getEnrichment = (slug: string) => enrichments[slug];
export function formatDuration(seconds: number | null) { if (!seconds) return 'Duration unavailable'; const hours = Math.floor(seconds / 3600); const minutes = Math.floor((seconds % 3600) / 60); return hours ? `${hours} hr ${minutes} min` : `${minutes} min`; }
export function formatDate(value: string) { return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(value)); }
