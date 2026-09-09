import type { BattleSideFigures, Enrichment, GlanceSource } from '@/data/enrichments/types';

const count = (value: number | null) => value === null ? 'Unknown' : value.toLocaleString('en-US');

function Sources({ sources }: { sources: GlanceSource[] }) {
  return <p className="glance-sources">{sources.map((source, index) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{index > 0 ? ' · ' : 'Source: '}{source.label}</a>)}</p>;
}

export function EpisodeGlance({ guide }: { guide: Enrichment }) {
  const glance = guide.atAGlance;
  const battle = glance?.kind === 'battle' ? glance.battle : undefined;
  const rows: { label: string; value: (side: BattleSideFigures) => string }[] = [
    { label: 'Soldiers involved', value: (side) => count(side.soldiers) },
    { label: 'Killed', value: (side) => count(side.killed) },
    { label: 'Wounded', value: (side) => count(side.wounded) },
  ];
  if (battle?.sides.some((side) => side.losses.grouping === 'combined')) {
    rows.push({ label: 'Missing and captured', value: (side) => side.losses.grouping === 'combined' ? count(side.losses.missingAndCaptured) : 'Listed separately below' });
  }
  if (battle?.sides.some((side) => side.losses.grouping === 'separate')) {
    rows.push(
      { label: 'Missing', value: (side) => side.losses.grouping === 'separate' ? count(side.losses.missing) : 'Included above' },
      { label: 'Captured', value: (side) => side.losses.grouping === 'separate' ? count(side.losses.captured) : 'Included above' },
    );
  }

  return <section className="episode-glance" aria-labelledby="episode-glance-title">
    <h2 id="episode-glance-title">Episode at a glance</h2>
    <div className="battle-facts">
      {glance ? <>
        <div><span>{glance.kind === 'battle' ? 'Featured action' : 'Period covered'}</span><strong>{glance.when}</strong></div>
        <div><span>Location</span><strong>{glance.where}</strong></div>
        {glance.kind === 'battle' ? <>
          <div><span>Outcome</span><strong>{glance.outcome}</strong></div>
          {glance.episodeContext && <div><span>{glance.episodeContext.label}</span><strong>{glance.episodeContext.value}</strong><small>{glance.episodeContext.note}</small><Sources sources={[glance.episodeContext.source]} /></div>}
        </> : <>
          <div><span>Featured subject</span><strong>{glance.focus}</strong></div>
          {glance.people && <div><span>Key people</span><strong>{glance.people}</strong></div>}
          <div><span>Historical context</span><strong>{glance.context}</strong></div>
        </>}
      </> : guide.facts.map((fact) => <div key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong>{fact.note && <small>{fact.note}</small>}</div>)}
    </div>
    {glance?.kind === 'topic' && glance.sources.length > 0 && <Sources sources={glance.sources} />}
    {battle && <div className="glance-forces">
      <h3>Forces and losses</h3>
      <p className="glance-scope">{battle.scope}</p>
      <table>
        <caption>{battle.estimated ? 'Estimated soldiers and casualties by side' : 'Reported soldiers and casualties by side'}</caption>
        <thead><tr><th scope="col">Measure</th>{battle.sides.map((side) => <th scope="col" key={side.side}>{side.side}</th>)}</tr></thead>
        <tbody>{rows.map((row) => <tr key={row.label}><th scope="row">{row.label}</th>{battle.sides.map((side) => <td key={side.side}>{row.value(side)}</td>)}</tr>)}</tbody>
      </table>
      {battle.note && <p className="glance-note">{battle.note}</p>}
      <Sources sources={battle.sources} />
    </div>}
  </section>;
}
