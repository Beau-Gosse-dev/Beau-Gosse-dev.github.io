import type { Metadata } from 'next';
import { getPerson } from '@/data/people';
import { publishedPersonIds } from '@/lib/person-profiles';
import { siteHref } from '@/lib/site';
import './[id]/person-profile.css';

export const metadata: Metadata = { title: 'People of the Civil War · Field Companion' };

export default function PeoplePage() {
  return <main>
    <header className="site-header compact">
      <a className="brand" href={siteHref('/')}><span className="brand-mark">CW</span><span><strong>Field Companion</strong><small>The Civil War & Reconstruction</small></span></a>
    </header>
    <div className="profile-content">
      <header className="profile-heading"><p>Biographies & portraits</p><h1>People of the Civil War</h1></header>
      <ul className="people-directory">{publishedPersonIds.map((id) => {
        const person = getPerson(id);
        return <li key={id}><a href={siteHref(`/people/${id}`)}>
          {person.image && <img src={siteHref(person.image)} alt="" loading="lazy" />}
          <div><h2>{person.name}</h2><p>{person.lifespan}</p></div>
        </a></li>;
      })}</ul>
    </div>
  </main>;
}
