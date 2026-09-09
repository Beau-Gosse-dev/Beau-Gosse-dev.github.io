import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock3, Headphones } from 'lucide-react';
import { AudioTimestamp } from '@/components/audio-timestamp';
import { BattleFlow } from '@/components/battle-flow';
import { getBattleFlow } from '@/data/battle-flows';
import { getPerson } from '@/data/people';
import { getCommandTree, flattenCommandNodes } from '@/data/command-trees';
import { EpisodePeople } from '@/components/episode-people';
import { episodes, formatDate, formatDuration, getEnrichment, getEpisode } from '@/lib/episodes';
import { siteHref } from '@/lib/site';

// Temporarily hide event summaries while retaining the guide data and rendering.
const SHOW_EVENT_SUMMARIES = false;

export function generateStaticParams() {
  return episodes.filter((episode) => Boolean(getEnrichment(episode.slug))).map((episode) => ({ slug: episode.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const episode = getEpisode(slug);
  if (!episode) return { title: 'Episode not found' };
  const title = `${episode.title} · Field Companion`;
  return {
    title,
    description: episode.description,
    openGraph: { title, description: episode.description, images: [] },
    twitter: { card: 'summary', title, description: episode.description, images: [] },
  };
}

export default async function EpisodePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const episode = getEpisode(slug);
  if (!episode) notFound();
  const guide = getEnrichment(slug);
  // Retain the custom schematic data, but show only the other reference maps.
  const visibleMaps = guide?.maps.filter((map) => map.image !== '/images/fort-donelson-breakout-map.svg') ?? [];
  const battleFlow = getBattleFlow(slug);
  const commandTree = getCommandTree(slug);
  const sources = guide
    ? Array.from(new Map([
        ...(commandTree?.armies.flatMap((army) => flattenCommandNodes(army.roots)).flatMap((node) => {
          const person = getPerson(node.personId);
          return person.imageSource ? [{ label: `Portrait: ${person.name}`, url: person.imageSource }] : [];
        }) ?? []),
        ...(commandTree?.sources ?? []),
        ...guide.people.flatMap((reference) => {
          const person = reference.personId
            ? getPerson(reference.personId)
            : { name: reference.name, imageSource: reference.source };
          return person.imageSource
            ? [{ label: `Portrait: ${person.name}`, url: person.imageSource }]
            : [];
        }),
        ...guide.sources,
      ].map((source) => [source.url, source])).values())
    : [];

  return <main className="episode-page">
    <header className="site-header compact">
      <a className="brand" href={siteHref('/')}><span className="brand-mark">CW</span><span><strong>Field Companion</strong><small>The Civil War & Reconstruction</small></span></a>
      <a className="back-link" href={siteHref('/#archive')}><ArrowLeft size={16} /> All episodes</a>
    </header>

    {guide ? <article className="battle-reference">
      <header className="reference-header">
        <div>
          <p>Episode {episode.number} · {guide.date} · {guide.place}</p>
          <h1>{episode.title.replace(/^#?\d+\s*[-–]?\s*/i, '')}</h1>
          <span className="result-label">{guide.result}</span>
        </div>
        <audio id="episode-audio" controls preload="none" src={episode.audioUrl}>Your browser does not support audio playback.</audio>
      </header>

      <section className="battle-facts" aria-label="Battle facts">
        {guide.facts.map((fact) => <div key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong>{fact.note && <small>{fact.note}</small>}</div>)}
      </section>

      <nav className="reference-nav" aria-label="Episode guide sections">
        {battleFlow && <a href="#battle-flow">Battle Flow</a>}{visibleMaps.length > 0 && <a href="#maps">Maps</a>}{SHOW_EVENT_SUMMARIES && <a href="#events">What happened</a>}<a href="#people">People and command</a>{guide.losses.length > 0 && <a href="#losses">Leader losses</a>}<a href="#images">Images</a>
      </nav>

      {battleFlow && <section className="reference-section battle-flow-section" id="battle-flow">
        <BattleFlow flow={battleFlow} />
      </section>}

      {visibleMaps.length > 0 && <section className="reference-section maps-section" id="maps">
        <h2>Maps</h2>
        <div className="maps-grid">
          {visibleMaps.map((map) => <figure className="reference-map" key={map.title}>
            <div className={`map-frame ${map.image ? 'static-map-frame' : 'interactive-map-frame'}`}>
              {map.embed
                ? <iframe src={map.embed} title={map.title} loading="lazy" />
                : <a className="map-image-link" href={siteHref(map.image!)} target="_blank" rel="noreferrer" aria-label={`Open ${map.title} at full size`}><img src={siteHref(map.image!)} alt={map.alt!} width={1600} height={1200} loading="lazy" /></a>}
            </div>
            <figcaption><strong>{map.title}</strong><span>{map.caption}</span><span className="map-actions">{map.image && <a href={siteHref(map.image)} target="_blank" rel="noreferrer">Open full-size map <ArrowUpRight size={13} /></a>}<a href={map.source} target="_blank" rel="noreferrer">Map source <ArrowUpRight size={13} /></a></span>{map.embed && <small>Interactive map: drag to pan and use the +/− controls to zoom.</small>}</figcaption>
          </figure>)}
        </div>
      </section>}

      {SHOW_EVENT_SUMMARIES && <section className="reference-section" id="events">
        <h2>What happened</h2>
        <div className="timeline factual-timeline">
          {guide.moments.map((moment) => <div className="moment" key={moment.title}>{moment.audioTime === undefined ? <span>{moment.time}</span> : <AudioTimestamp seconds={moment.audioTime} label={moment.time} />}<div><h3>{moment.title}</h3><p>{moment.detail}</p></div></div>)}
        </div>
      </section>}

      <section className="reference-section" id="people">
        <h2>People and command</h2>
        <EpisodePeople guide={guide} tree={commandTree} />
      </section>

      {guide.losses.length > 0 && <section className="reference-section" id="losses">
        <h2>Important leaders killed or wounded</h2>
        <div className="loss-list">
          {guide.losses.map((loss) => <article key={loss.name}>
            <span className={`side ${loss.side === 'United States' ? 'union' : 'confederate'}`}>{loss.side}</span>
            <h3>{loss.name}</h3>
            <p><strong>{loss.role}.</strong> {loss.outcome}</p>
          </article>)}
        </div>
      </section>}

      <section className="reference-section" id="images">
        <h2>Historical images</h2>
        <div className="history-gallery">
          {guide.gallery.map((item) => <figure key={item.image}><img src={siteHref(item.image)} alt={item.alt} width={1280} height={820} loading="lazy" /><figcaption>{item.caption}</figcaption></figure>)}
        </div>
      </section>

      <details className="reference-sources">
        <summary>Sources and image credits</summary>
        <ul>{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label} <ArrowUpRight size={12} /></a></li>)}</ul>
      </details>
      <aside className="automation-note"><strong>Best-effort automated guide</strong><p>This guide was drafted from machine transcription and automated research, then checked before publication. Errors may remain. A public correction and suggestion workflow is planned.</p></aside>
    </article> : <section className="unenriched plain-episode">
      <p>Episode {episode.number ?? 'special'}</p>
      <h1>{episode.title.replace(/^#?\d+\s*[-–]?\s*/i, '')}</h1>
      <div className="episode-meta large"><span><CalendarDays size={16} /> {formatDate(episode.publishedAt)}</span><span><Clock3 size={16} /> {formatDuration(episode.durationSeconds)}</span></div>
      <audio controls preload="none" src={episode.audioUrl}>Your browser does not support audio playback.</audio>
      <p className="unenriched-lead">This episode does not have a completed reference guide yet.</p>
      <a className="primary-button" href={episode.audioUrl}><Headphones size={16} /> Open episode audio</a>
    </section>}
  </main>;
}
