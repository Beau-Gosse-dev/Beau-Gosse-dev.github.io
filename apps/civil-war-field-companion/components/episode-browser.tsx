'use client';
import { useMemo, useState } from 'react';
import { ArrowRight, BookOpen, Clock3, Search } from 'lucide-react';
import type { Episode } from '@/lib/episodes';
import { formatDate, formatDuration } from '@/lib/episodes';
import { siteHref } from '@/lib/site';

export function EpisodeBrowser({ episodes }: { episodes: Episode[] }) {
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState(false);
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    const results = term
      ? episodes.filter((episode) =>
          `${episode.title} ${episode.description}`
            .toLowerCase()
            .includes(term),
        )
      : episodes;
    return showAll || term ? results.slice(0, 80) : results.slice(0, 9);
  }, [episodes, query, showAll]);
  return (
    <section className="archive" id="archive">
      <div className="archive-heading">
        <div>
          <p className="kicker">Episode order</p>
          <h1>Episode guides</h1>
        </div>
        <label className="search-field">
          <Search aria-hidden="true" size={19} />
          <span className="sr-only">Search episode guides</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search episode guides…"
          />
        </label>
      </div>
      <div className="episode-grid">
        {filtered.map((episode) => (
          <a
            className="episode-card"
            href={siteHref(`/episodes/${episode.slug}`)}
            key={episode.guid}
          >
            <div className="episode-card-topline">
              <span>
                {episode.number
                  ? `Episode ${episode.number}`
                  : 'Special episode'}
              </span>
            </div>
            <h3>{episode.title.replace(/^#?\d+\s*[-–]?\s*/i, '')}</h3>
            <p>{episode.description}</p>
            <div className="episode-meta">
              <span>
                <Clock3 size={14} /> {formatDuration(episode.durationSeconds)}
              </span>
              <span>
                <BookOpen size={14} /> {formatDate(episode.publishedAt)}
              </span>
            </div>
            <span className="episode-card-cta">
              Open field guide <ArrowRight size={16} />
            </span>
          </a>
        ))}
      </div>
      {!query && !showAll && episodes.length > filtered.length && (
        <button className="outline-button" onClick={() => setShowAll(true)}>
          Browse more episodes
        </button>
      )}
      {query && filtered.length === 0 && (
        <p className="empty-state">
          No episodes matched “{query}.” Try a person, place, or campaign.
        </p>
      )}
    </section>
  );
}
