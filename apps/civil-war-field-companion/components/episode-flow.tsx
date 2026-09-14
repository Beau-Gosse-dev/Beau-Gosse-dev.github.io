'use client';

import { useState } from 'react';
import type { Enrichment } from '@/data/enrichments/types';
import { siteHref } from '@/lib/site';

// These are saved guide steps, in their original order. No troop positions are inferred.
export function EpisodeFlow({ guide }: { guide: Enrichment }) {
  const [index, setIndex] = useState(0);
  const step = guide.moments[index];
  const map = guide.maps.find((item) => item.embed) ?? guide.maps.find((item) => item.image && !item.image.endsWith('.svg'));
  if (!step) return null;
  return <div className="episode-step-flow">
    <header><p className="kicker">Step by step</p><h2>Episode flow</h2><p>Follow the discussion in order. Reference maps show the setting; they do not plot positions for each step.</p></header>
    <div className="episode-step-layout" style={!map ? { gridTemplateColumns: '1fr' } : undefined}>
      {map && <figure className="reference-map">
        <div className="map-frame">{map.embed ? <iframe src={map.embed} title={`${map.title} — episode flow`} loading="lazy" /> : <a href={siteHref(map.image!)} target="_blank" rel="noreferrer"><img src={siteHref(map.image!)} alt={map.alt ?? map.title} loading="lazy" /></a>}</div>
        <figcaption><strong>{map.title}</strong>{/^https?:\/\//.test(map.source) ? <a href={map.source} target="_blank" rel="noreferrer">Map credit ↗</a> : <span>{map.source}</span>}</figcaption>
      </figure>}
      <div className="episode-step-detail">
        <p className="kicker">Step {index + 1} of {guide.moments.length}</p>
        <div aria-live="polite" aria-atomic="true"><h3>{step.title}</h3><p>{step.detail}</p></div>
        <div className="episode-step-controls"><button type="button" className="secondary-button" disabled={index === 0} onClick={() => setIndex(index - 1)}>← Previous</button><button type="button" className="primary-button" disabled={index === guide.moments.length - 1} onClick={() => setIndex(index + 1)}>Next →</button></div>
        <label>Go to a step<select value={index} onChange={(event) => setIndex(Number(event.target.value))}>{guide.moments.map((moment, i) => <option value={i} key={`${i}-${moment.title}`}>{i + 1}. {moment.title}</option>)}</select></label>
      </div>
    </div>
  </div>;
}
