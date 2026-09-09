import type { EpisodeGlance } from './types';

export const episode95Glance: EpisodeGlance = {
  kind: 'battle',
  when: 'February 15–16, 1862',
  where: 'Fort Donelson and Lick Creek, near Dover, Tennessee',
  outcome: 'United States victory; the garrison surrendered while Forrest’s column escaped.',
  episodeContext: {
    label: 'Forrest’s escaping column',
    value: 'About 500 mounted men',
    note: 'The episode’s count for Forrest’s column, not the full Confederate force. The episode also covers his earlier life and the journey to Nashville.',
    source: { label: 'Episode 95', url: 'https://civilwarpodcast.libsyn.com/95-postscript-forrests-breakout' },
  },
  battle: {
    scope: 'Entire Battle of Fort Donelson · February 13–16, 1862',
    estimated: true,
    note: 'These figures cover the entire battle, not just the breakout or Forrest’s escape. Estimates vary by source. Missing and captured are reported together in this source.',
    sources: [{ label: 'American Battlefield Trust: Fort Donelson', url: 'https://www.battlefields.org/learn/civil-war/battles/fort-donelson' }],
    sides: [
      { side: 'United States', soldiers: 24531, killed: 507, wounded: 1976, losses: { grouping: 'combined', missingAndCaptured: 208 } },
      { side: 'Confederacy', soldiers: 16171, killed: 327, wounded: 1127, losses: { grouping: 'combined', missingAndCaptured: 12392 } },
    ],
  },
};
