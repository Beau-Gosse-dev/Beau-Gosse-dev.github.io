import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

const FEED_URL = 'https://feeds.megaphone.fm/ARML9312759060';
const OUTPUT = new URL('../data/episodes.json', import.meta.url);
const decode = (value = '') => value.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&nbsp;|&#160;/g, ' ').replace(/\s+/g, ' ').trim();
const field = (xml, tag) => { const match = xml.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, 'i')); return match ? decode(match[1]) : ''; };
const attr = (xml, tag, name) => { const match = xml.match(new RegExp(`<${tag}[^>]*\\s${name}="([^"]+)"`, 'i')); return match ? decode(match[1]) : ''; };
const slugify = (title, guid) => title.toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 78) || `episode-${guid.slice(0, 8)}`;

const response = await fetch(FEED_URL);
if (!response.ok) throw new Error(`Feed request failed: ${response.status}`);
const xml = await response.text();
const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)].map((match) => match[1]);
const used = new Set();
const episodes = items.map((item) => {
  const title = field(item, 'title');
  const guid = field(item, 'guid');
  let slug = slugify(title, guid);
  if (used.has(slug)) slug = `${slug}-${guid.slice(0, 8)}`;
  used.add(slug);
  const description = field(item, 'description').replace(/Learn more about your ad choices\. Visit megaphone\.fm\/adchoices/i, '').trim();
  const number = title.match(/^#?(\d+)/)?.[1] ?? null;
  return { slug, number: number ? Number(number) : null, title, description, publishedAt: field(item, 'pubDate'), durationSeconds: Number(field(item, 'itunes:duration')) || null, guid, audioUrl: attr(item, 'enclosure', 'url'), episodeUrl: field(item, 'link'), artworkUrl: attr(item, 'itunes:image', 'href') };
});
await mkdir(dirname(OUTPUT.pathname.slice(1)), { recursive: true });
await writeFile(OUTPUT, `${JSON.stringify(episodes, null, 2)}\n`);
console.log(`Imported ${episodes.length} episodes from ${FEED_URL}`);
