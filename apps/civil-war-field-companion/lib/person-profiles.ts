import { people, type PersonId } from '@/data/people';
import { getCommandTree, type CommandNode } from '@/data/command-trees';
import { episodes, getEnrichment } from '@/lib/episodes';

function findCommand(nodes: CommandNode[], id: PersonId, parent?: CommandNode): { node: CommandNode; parent?: CommandNode } | undefined {
  for (const node of nodes) {
    if (node.personId === id) return { node, parent };
    const found = findCommand(node.children ?? [], id, node);
    if (found) return found;
  }
}

export function getPersonAppearances(id: PersonId) {
  return episodes.flatMap((episode) => {
    const guide = getEnrichment(episode.slug);
    if (!guide) return [];
    const tree = getCommandTree(episode.slug);
    const command = findCommand(tree?.armies.flatMap((army) => army.roots) ?? [], id);
    const reference = guide.people.find((person) => person.personId === id);
    if (!reference && !command) return [];
    return [{ episode, role: reference?.role ?? command!.node.description, command, tree,
      sources: tree?.sources ?? guide.sources }];
  });
}

// Only expose people from published guides; hidden episodes stay hidden.
export const publishedPersonIds = (Object.keys(people) as PersonId[]).filter((id) => getPersonAppearances(id).length > 0);

export function findPublishedPerson(id: string) {
  return publishedPersonIds.includes(id as PersonId) ? people[id as PersonId] : undefined;
}
