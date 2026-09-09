import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { PersonId } from '@/data/people';
import { personBiographies } from '@/data/person-biographies';
import galleries from '@/data/person-gallery.json';
import { findPublishedPerson, publishedPersonIds } from '@/lib/person-profiles';
import { PortraitViewer } from '@/components/portrait-viewer';
import { FeedbackSection } from '@/components/feedback-section';
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
  const biography = personBiographies[id as PersonId];
  const extraImages = (galleries as Record<string, { image: string; caption: string; source: string; credit: string }[]>)[id] ?? [];
  return <main className="person-profile">
    <header className="site-header compact">
      <a className="brand" href={siteHref('/')}><span className="brand-mark">CW</span><span><strong>Field Companion</strong><small>The Civil War & Reconstruction</small></span></a>
      <a className="back-link" href={siteHref('/people')}>← All people</a>
    </header>
    <article className="profile-content">
      <header className="profile-heading"><p>People of the Civil War · {person.side}</p><h1>{person.name}</h1><p className="profile-lifespan">{person.lifespan}</p></header>
      <div className="profile-grid">
        <div>{person.image && <PortraitViewer image={person.image} alt={person.imageAlt ?? `Portrait of ${person.name}`} name={person.name} source={person.imageSource} />}</div>
        <div className="profile-details">
          <section aria-labelledby="background-title"><h2 id="background-title">Background</h2><p>{person.summary}</p></section>
          {biography.sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}
          <section className="profile-sources"><h2>Biography sources</h2><ul>{biography.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label}</a></li>)}</ul></section>
        </div>
      </div>
      {extraImages.length > 0 && <section className="profile-gallery" aria-labelledby="profile-gallery-title">
        <h2 id="profile-gallery-title">More images</h2>
        <div className="profile-gallery-grid">{extraImages.map((item) => <PortraitViewer key={item.image} image={item.image} alt={item.caption} caption={item.caption} credit={item.credit} name={person.name} source={item.source} />)}</div>
      </section>}
      <FeedbackSection context={{ title: person.name, path: `/people/${id}` }} />
    </article>
  </main>;
}
