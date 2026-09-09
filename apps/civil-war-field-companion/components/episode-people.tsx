import type { Enrichment, Person } from '@/data/enrichments/types';
import { flattenCommandNodes, type CommandNode, type EpisodeCommandTree } from '@/data/command-trees';
import { getPerson } from '@/data/people';
import { siteHref } from '@/lib/site';
import './episode-people.css';

function PersonCard({ reference, command }: { reference: Person; command?: string }) {
  const person = reference.personId ? getPerson(reference.personId) : reference;
  const alt = reference.personId ? getPerson(reference.personId).imageAlt : `Portrait of ${person.name}`;
  const Card = reference.personId ? 'a' : 'article';
  return <Card className="person-card people-person" data-person-id={reference.personId} href={reference.personId ? siteHref(`/people/${reference.personId}`) : undefined}>
    {person.image
      ? <img src={siteHref(person.image)} alt={alt ?? `Portrait of ${person.name}`} width={80} height={100} loading="lazy" />
      : <div className="portrait-placeholder" aria-label={`No portrait available for ${person.name}`}><span>{person.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}</span></div>}
    <div className="people-person-copy">
      <span className={`side ${person.side === 'United States' ? 'union' : 'confederate'}`}>{command ?? person.side}</span>
      <h4>{person.name}</h4>
      <p>{reference.role}</p>
      {reference.personId && <span className="person-details-link">View profile & portrait →</span>}
    </div>
  </Card>;
}

function CommandBranch({ node }: { node: CommandNode }) {
  return <li className="command-tree-branch" data-commander={node.personId}>
    <PersonCard reference={{ personId: node.personId, role: node.description }} command={node.command} />
    {Boolean(node.children?.length) && <ul aria-label={`Officers under ${getPerson(node.personId).name}`}>
      {node.children!.map((child) => <CommandBranch key={child.personId} node={child} />)}
    </ul>}
  </li>;
}

export function EpisodePeople({ guide, tree }: { guide: Enrichment; tree?: EpisodeCommandTree }) {
  const nodes = tree?.armies.flatMap((army) => flattenCommandNodes(army.roots)) ?? [];
  const ids = new Set(nodes.map((node) => node.personId));
  const names = new Set(nodes.map((node) => getPerson(node.personId).name));
  const otherPeople = guide.people.filter((person) => person.personId ? !ids.has(person.personId) : !names.has(person.name));

  return <>
    {tree ? <div className="episode-command-tree">
      <header className="command-tree-heading"><span className="command-tree-eyebrow">Chain of command</span><h3>{tree.title}</h3><p>{tree.scope}</p></header>
      <div className="command-tree-armies">
        {tree.armies.map((army) => <section className={`command-tree-army ${army.side === 'United States' ? 'union' : 'confederate'}`} key={army.side} aria-label={`${army.side} chain of command`}>
          <h3>{army.side}</h3>
          <ul className="command-tree-roots" aria-label={`${army.side} commanders`}>
            {army.roots.map((node) => <CommandBranch key={node.personId} node={node} />)}
          </ul>
        </section>)}
      </div>
      {tree.note && <aside className="command-tree-note"><strong>Command changed overnight</strong><p>{tree.note}</p></aside>}
    </div> : <div className="command-grid reference-command">
      {guide.command.map((column) => <section className={`command-column ${column.color}`} key={column.side}>
        <h3>{column.side}</h3>
        {column.branches.map((branch) => <div className="command-entry" key={`${branch.command}-${branch.commander}`}><strong>{branch.command}</strong><span>{branch.commander}</span>{branch.subordinates && <small>{branch.subordinates}</small>}</div>)}
      </section>)}
    </div>}
    {otherPeople.length > 0 && <section className="other-people" aria-label="Other people">
      <h3 className="subsection-title">Other people</h3>
      {tree && <p className="other-people-intro">People discussed in the episode outside the formation command tree above.</p>}
      <ul className="other-people-list">{otherPeople.map((reference) => <li key={reference.personId ?? reference.name}><PersonCard reference={reference} /></li>)}</ul>
    </section>}
  </>;
}
