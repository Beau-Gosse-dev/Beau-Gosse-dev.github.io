import type { HistoricalSide, PersonId } from './people';

export type CommandNode = {
  personId: PersonId;
  command: string;
  description: string;
  children?: CommandNode[];
};

export type EpisodeCommandTree = {
  title: string;
  scope: string;
  note?: string;
  armies: { side: HistoricalSide; roots: CommandNode[] }[];
  sources: { label: string; url: string }[];
};

// Relationships describe this episode's dated field organization, not a person's career.
const commandTrees: Record<string, EpisodeCommandTree> = {
  '95-postscript-forrest-s-breakout': {
    title: 'Fort Donelson · February 15, 1862',
    scope: 'Selected field commanders during the breakout battle. Connected branches show command responsibility; this is not a complete roster of officers or units.',
    note: 'Before dawn on February 16, Floyd relinquished command, Pillow declined it, and Buckner took charge of the garrison; Forrest then obtained permission to lead his cavalry out.',
    armies: [
      { side: 'United States', roots: [{
        personId: 'ulysses-s-grant', command: 'Overall land command',
        description: 'Commanded the U.S. force at Fort Donelson and ordered the afternoon counterattacks.',
        children: [
          { personId: 'john-a-mcclernand', command: 'First Division · right', description: 'His division bore the main Confederate breakout attack along the roads south of the fort.' },
          { personId: 'charles-f-smith', command: 'Second Division · left', description: 'Led the assault that captured part of the Confederate outer defenses late in the day.' },
          { personId: 'lew-wallace', command: 'Third Division · center', description: 'Reinforced the U.S. right and led the counterattack that recovered lost ground.' },
        ],
      }] },
      { side: 'Confederacy', roots: [{
        personId: 'john-b-floyd', command: 'Fort Donelson garrison',
        description: 'Held senior command of the garrison during the February 15 breakout battle.',
        children: [
          { personId: 'gideon-j-pillow', command: 'Breakout attack · left wing', description: 'Directed the main attack and ordered the troops back inside the defenses.', children: [
            { personId: 'bushrod-r-johnson', command: 'Left-wing infantry', description: 'Assisted Pillow in directing the infantry attack against McClernand’s division.' },
            { personId: 'nathan-bedford-forrest', command: 'Cavalry · attack support', description: 'Commanded the cavalry supporting Pillow’s attack and later led the mounted escape.' },
          ] },
          { personId: 'simon-b-buckner', command: 'Right-wing division', description: 'Supported the breakout and returned to confront Smith’s advance against his earthworks.' },
        ],
      }] },
    ],
    sources: [
      { label: 'Command tree: NPS, The Campaign for Fort Donelson — breakout battle', url: 'https://npshistory.com/publications/civil_war_series/13/sec10.htm' },
      { label: 'Command handover: National Park Service, Dover Hotel', url: 'https://www.nps.gov/fodo/learn/photosmultimedia/tourstop10.htm' },
    ],
  },
};

export function getCommandTree(slug: string) {
  return commandTrees[slug];
}

export function flattenCommandNodes(nodes: CommandNode[]): CommandNode[] {
  return nodes.flatMap((node) => [node, ...flattenCommandNodes(node.children ?? [])]);
}
