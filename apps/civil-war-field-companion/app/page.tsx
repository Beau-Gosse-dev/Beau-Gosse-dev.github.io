import { EpisodeBrowser } from '@/components/episode-browser';
import { enrichments } from '@/data/enrichments';
import { episodes } from '@/lib/episodes';
import { siteHref } from '@/lib/site';

export default function Home() {
  const parsedEpisodes = episodes
    .filter((episode) => Boolean(enrichments[episode.slug]))
    .map((episode, feedIndex) => ({ episode, feedIndex }))
    .sort((a, b) => {
      const numberDifference =
        (a.episode.number ?? Number.MAX_SAFE_INTEGER) -
        (b.episode.number ?? Number.MAX_SAFE_INTEGER);

      return numberDifference || a.feedIndex - b.feedIndex;
    })
    .map(({ episode }) => episode);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href={siteHref('/')}>
          <span className="brand-mark">CW</span>
          <span>
            <strong>Field Companion</strong>
            <small>for The Civil War & Reconstruction</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#archive">Episodes</a>
          <a
            href="https://civilwarpodcast.org/"
            target="_blank"
            rel="noreferrer"
          >
            Podcast ↗
          </a>
        </nav>
      </header>
      <EpisodeBrowser episodes={parsedEpisodes} />
      <footer>
        <p>
          An independent, best-effort listening companion built with automated
          transcription and research. Errors may remain. Podcast titles and
          audio belong to their respective owners.
        </p>
        <a href="https://civilwarpodcast.org/" target="_blank" rel="noreferrer">
          Visit the official podcast site ↗
        </a>
      </footer>
    </main>
  );
}
