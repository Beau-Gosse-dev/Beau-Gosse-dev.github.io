import { expect, test } from '@playwright/test';

const episodePath = 'episodes/95-postscript-forrest-s-breakout';

test('Battle Flow controls stay compact and work', async ({ page }, testInfo) => {
  await page.goto(episodePath);

  const map = page.locator('.battle-flow-map');
  const historicOverlay = page.getByRole('button', { name: 'Historic overlay' });
  const sourceMap = page.getByRole('button', { name: 'Source map' });

  await expect(map).toBeVisible();
  await expect(historicOverlay).toBeVisible();
  await historicOverlay.scrollIntoViewIfNeeded();

  const mapBox = await map.boundingBox();
  const buttonBox = await historicOverlay.boundingBox();
  const iconBox = await historicOverlay.locator('svg').boundingBox();
  expect(mapBox).not.toBeNull();
  expect(buttonBox).not.toBeNull();
  expect(iconBox).not.toBeNull();
  expect(buttonBox!.width).toBeLessThan(180);
  expect(buttonBox!.height).toBeLessThanOrEqual(52);
  expect(iconBox!.width).toBeLessThanOrEqual(20);
  expect(iconBox!.height).toBeLessThanOrEqual(20);
  expect(mapBox!.height).toBeGreaterThanOrEqual(500);
  expect(buttonBox!.x).toBeGreaterThanOrEqual(mapBox!.x);
  expect(buttonBox!.x + buttonBox!.width).toBeLessThanOrEqual(mapBox!.x + mapBox!.width);

  await expect(historicOverlay).toHaveAttribute('aria-pressed', 'true');
  await historicOverlay.click();
  await expect(historicOverlay).toHaveAttribute('aria-pressed', 'false');
  await historicOverlay.click();
  await expect(historicOverlay).toHaveAttribute('aria-pressed', 'true');

  await expect(page.locator('.battle-flow-frame-count')).toHaveText('Frame 1 of 8');
  await page.getByRole('button', { name: 'Next' }).click();
  await expect(page.locator('.battle-flow-frame-count')).toHaveText('Frame 2 of 8');

  await sourceMap.click();
  await expect(page.getByRole('complementary', { name: 'NPS battlefield reference map' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'NPS battlefield reference map' })).toBeVisible();
  await page.getByRole('button', { name: 'Close source map' }).click();
  await expect(page.getByRole('complementary', { name: 'NPS battlefield reference map' })).toBeHidden();

  await page.locator('.battle-flow-stage').screenshot({ path: testInfo.outputPath('battle-flow-stage.png') });
});
