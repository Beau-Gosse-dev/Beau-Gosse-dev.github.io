import { expect, test } from '@playwright/test';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import ts from 'typescript';
import type { Enrichment, EpisodeGlance as GlanceData } from '../data/enrichments/types';

test('episode 95 distinguishes the escaping column from sourced battle totals', async ({ page }) => {
  await page.goto('episodes/95-postscript-forrest-s-breakout');
  const glance = page.getByRole('region', { name: 'Episode at a glance' });
  await expect(glance).toContainText('About 500 mounted men');
  await expect(glance).toContainText('Entire Battle of Fort Donelson');
  await expect(glance.getByRole('row', { name: 'Soldiers involved 24,531 16,171' })).toBeVisible();
  await expect(glance.getByRole('row', { name: 'Missing and captured 208 12,392' })).toBeVisible();
  await expect(glance.getByRole('link', { name: /American Battlefield Trust/ })).toHaveAttribute('href', 'https://www.battlefields.org/learn/civil-war/battles/fort-donelson');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});

function renderGlance(atAGlance: GlanceData) {
  // Compile server JSX with React's runtime; Playwright's JSX transform targets component testing.
  const source = readFileSync(new URL('../components/episode-glance.tsx', import.meta.url), 'utf8');
  const compiled = ts.transpileModule(source, { compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS } });
  const exports: { EpisodeGlance?: React.ComponentType<{ guide: Enrichment }> } = {};
  new Function('require', 'exports', compiled.outputText)(createRequire(import.meta.url), exports);
  const EpisodeGlance = exports.EpisodeGlance!;
  return renderToStaticMarkup(createElement(EpisodeGlance, { guide: { atAGlance } as Enrichment }));
}

test('topic episodes omit military fields', async ({ page }) => {
  await page.setContent(renderGlance({ kind: 'topic', when: '1861–1865', where: 'United States', focus: 'Civil War songs', context: 'Music and wartime life', sources: [] }));
  await expect(page.getByText('Civil War songs')).toBeVisible();
  await expect(page.getByRole('table')).toHaveCount(0);
});

test('unknown counts, zero, and separate casualty categories remain distinct', async ({ page }) => {
  await page.setContent(renderGlance({ kind: 'battle', when: 'Test period', where: 'Test location', outcome: 'Test outcome', battle: {
    scope: 'Test scope', estimated: false, sources: [{ label: 'Test source', url: 'https://example.com' }],
    sides: [
      { side: 'United States', soldiers: null, killed: 0, wounded: null, losses: { grouping: 'separate', missing: 2, captured: 3 } },
      { side: 'Confederacy', soldiers: 100, killed: null, wounded: 0, losses: { grouping: 'combined', missingAndCaptured: 5 } },
    ],
  } }));
  await expect(page.getByRole('row', { name: 'Killed 0 Unknown', exact: true })).toBeVisible();
  await expect(page.getByRole('row', { name: 'Missing 2 Included above', exact: true })).toBeVisible();
  await expect(page.getByRole('row', { name: 'Captured 3 Included above', exact: true })).toBeVisible();
});
