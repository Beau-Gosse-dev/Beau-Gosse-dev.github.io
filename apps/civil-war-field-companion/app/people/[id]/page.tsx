import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPerson, type PersonId } from '@/data/people';
import { findPublishedPerson, getPersonAppearances, publishedPersonIds } from '@/lib/person-profiles';
import { PortraitViewer } from '@/components/portrait-viewer';
import { siteHref } from '@/lib/site';
import './person-profile.css';

export const dynamicParams = false;
export function generateStaticParams() { return publishedPersonIds.map((id) => ({ id })); }
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const person = findPublishedPerson((await params).id);
  return person ? { title: `${person.name} · Field Companion`, description: person.summary } : { title: 'Person not found' };
}

export default async function PersonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const person = findPublishedPerson(id);
  if (!person) notFound();
  const appearances = getPersonAppearances(id as PersonId);
  const sources = Array.from(new Map(appearances.flatMap((appearance) => appearance.sources).map((source) => [source.url, source])).values());
  return <main className="person-profile">
    <header className="site-header compact">
      <a className="brand" href={siteHref('/')}><span className="brand-mark">CW</span><span><strong>Field Companion</strong><small>The Civil War & Reconstruction</small></span></a>
      <a className="back-link" href={siteHref(`/episodes/${appearances[0].episode.slug}#people`)}>← Back to episode {appearances[0].episode.number}</a>
    </header>
    <article className="profile-content">
      <header className="profile-heading"><p>People of the Civil War · {person.side}</p><h1>{person.name}</h1><p className="profile-lifespan">{person.lifespan}</p></header>
      <div className="profile-grid">
        <div>{person.image && <PortraitViewer image={person.image} alt={person.imageAlt ?? `Portrait of ${person.name}`} name={person.name} source={person.imageSource} />}</div>
        <div className="profile-details">
          <section aria-labelledby="background-title"><h2 id="background-title">Background</h2><p>{person.summary}</p></section>
          {appearances.map(({ episode, role, command, tree }) => <section key={episode.slug} className="profile-episode">
            <p className="profile-kicker">In episode {episode.number}</p><h2>{episode.title.replace(/^#?\d+\s*[-–]?\s*/i, '')}</h2>
            <p>{role}</p>
            {command && <>
              <h3>{command.node.command}</h3>
              {command.node.description !== role && <p>{command.node.description}</p>}
              <p className="profile-scope">{tree?.title}. Relationships below apply to this episode’s command structure.</p>
              {command.parent && <p>Reported to: <a href={siteHref(`/people/${command.parent.personId}`)}>{getPerson(command.parent.personId).name}</a></p>}
              {Boolean(command.node.children?.length) && <><h3>Commanded</h3><ul>{command.node.children!.map((child) => <li key={child.personId}><a href={siteHref(`/people/${child.personId}`)}>{getPerson(child.personId).name}</a><span> — {child.command}</span></li>)}</ul></>}
              {person.side === 'Confederacy' && tree?.note && <p className="profile-scope">{tree.note}</p>}
            </>}
            <a className="profile-episode-link" href={siteHref(`/episodes/${episode.slug}#people`)}>View episode {episode.number} guide →</a>
          </section>)}
          <section className="profile-sources"><h2>Episode sources</h2><ul>{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label}</a></li>)}</ul></section>
        </div>
      </div>
    </article>
  </main>;
}
