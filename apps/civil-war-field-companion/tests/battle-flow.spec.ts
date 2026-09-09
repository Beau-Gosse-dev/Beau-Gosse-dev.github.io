import { expect, test } from '@playwright/test';

const episodePath = 'episodes/95-postscript-forrest-s-breakout';

test('Battle Flow works alongside the separate reference maps', async ({ page }, testInfo) => {
  await page.goto(episodePath);
  const map = page.locator('.battle-flow-map');
  await expect(map).toBeVisible();
  await expect(map.locator('canvas')).toBeVisible();
  await expect(map.locator('.battle-flow-map-unit').first()).toBeVisible();
  await expect(page.getByRole('button', { name: 'Historic overlay' })).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'Source map', exact: true })).toHaveCount(0);
  await expect(map.locator('.battle-flow-landmark-marker')).toHaveCount(0);
  await expect(page.locator('.battle-flow-frame-count')).toHaveText('Frame 1 of 8');
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await expect(page.locator('.battle-flow-frame-count')).toHaveText('Frame 2 of 8');
  await page.getByRole('button', { name: 'Previous', exact: true }).click();
  await expect(page.locator('.battle-flow-frame-count')).toHaveText('Frame 1 of 8');
  const maps = page.locator('#maps');
  await expect(maps.locator('figure')).toHaveCount(3);
  await expect(maps.locator('iframe')).toHaveAttribute('src', /openstreetmap.org\/export\/embed/);
  await expect(maps.locator('img[src$="fort-donelson-park-map.jpg"]')).toHaveCount(1);
  await expect(maps.locator('img[src$="fort-donelson-plan.jpg"]')).toHaveCount(1);
  await expect(maps.locator('img[src$="fort-donelson-breakout-map.svg"]')).toHaveCount(0);
  await expect(page.getByRole('link', { name: 'Maps', exact: true })).toHaveAttribute('href', '#maps');
  await page.locator('.battle-flow-stage').screenshot({ path: testInfo.outputPath('battle-flow-stage.png') });
});
