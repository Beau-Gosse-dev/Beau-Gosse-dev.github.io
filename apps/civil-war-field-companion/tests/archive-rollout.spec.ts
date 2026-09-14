import { expect, test } from '@playwright/test';
import { existsSync, readFileSync } from 'node:fs';
const episodes: { slug: string; number: number | null }[] = JSON.parse(readFileSync(new URL('../data/episodes.json', import.meta.url), 'utf8'));

test('every published guide has the common sections and preserved privacy choices', () => {
  const published = episodes.filter(e => existsSync(`dist/client/episodes/${e.slug}.html`));
  expect(published.length).toBe(184);
  for (const episode of published) {
    const html = readFileSync(`dist/client/episodes/${episode.slug}.html`, 'utf8');
    expect(html, episode.slug).toContain('Episode at a glance');
    expect(html, episode.slug).toContain('id="battle-flow"');
    expect(html, episode.slug).toContain('No account needed.');
    expect(/<audio\b|id="events"|src="[^\"]*\.svg"/.test(html), episode.slug).toBe(false);
  }
});
test('the archive exposes every completed guide and searches later entries', async ({ page }) => {
  await page.goto('./');
  await page.getByRole('button', { name: 'Browse more episodes' }).click();
  await expect(page.locator('.episode-card')).toHaveCount(184);
  await page.getByRole('textbox', { name: 'Search episode guides' }).fill('538');
  await expect(page.locator('.episode-card')).toHaveCount(1);
});
for (const number of [538, 201, 100]) test(`episode ${number} supports step navigation and contextual feedback`, async ({ page }, testInfo) => {
  const episode = episodes.find(e => e.number === number)!;
  await page.goto(`episodes/${episode.slug}`);
  const flow = page.locator('.episode-step-flow');
  const heading = flow.locator('h3');
  const first = await heading.textContent();
  await flow.getByRole('button', { name: 'Next' }).click();
  await expect(heading).not.toHaveText(first!);
  await flow.getByRole('button', { name: 'Previous' }).click();
  await expect(heading).toHaveText(first!);
  await expect(page.locator('.feedback-context strong')).toContainText(`Episode ${number}`);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  if (number === 538) await flow.screenshot({ path: testInfo.outputPath('episode-flow.png') });
  if (number === 100 || number === 201) await expect(page.locator('.glance-forces')).toHaveCount(0);
  const image = page.locator('#images .portrait-open').first();
  if (await image.count()) {
    await image.click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.keyboard.press('Escape');
  }
});
