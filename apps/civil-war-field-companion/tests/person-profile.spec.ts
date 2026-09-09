import { expect, test } from '@playwright/test';
import { people } from '../data/people';

test('all episode people have a profile, portrait, and episode context', async ({ page }) => {
  await page.goto('episodes/95-postscript-forrest-s-breakout#people');
  await expect(page.locator('#people a.person-card')).toHaveCount(10);
  await page.locator('a[data-person-id="ulysses-s-grant"]').click();
  await expect(page.getByRole('heading', { name: 'Ulysses S. Grant', exact: true, level: 1 })).toBeVisible();
  await page.getByRole('link', { name: 'John A. McClernand', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'John A. McClernand', exact: true, level: 1 })).toBeVisible();
  for (const [id, person] of Object.entries(people)) {
    await page.goto(`people/${id}`);
    await expect(page.getByRole('heading', { name: person.name, exact: true, level: 1 })).toBeVisible();
    await expect(page.getByText(person.lifespan, { exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: `Enlarge portrait of ${person.name}` })).toBeVisible();
    await expect.poll(() => page.locator('.portrait-open img').evaluate((image: HTMLImageElement) => image.naturalWidth)).toBeGreaterThan(0);
    await expect(page.getByRole('link', { name: 'View episode 95 guide' })).toHaveAttribute('href', /episodes\/95-postscript-forrest-s-breakout#people$/);
  }
});

test('portrait viewer zooms, pans, resets, and restores keyboard focus', async ({ page }, testInfo) => {
  await page.goto('people/ulysses-s-grant');
  const trigger = page.getByRole('button', { name: 'Enlarge portrait of Ulysses S. Grant' });
  await expect.poll(() => trigger.locator('img').evaluate((image: HTMLImageElement) => image.naturalWidth)).toBeGreaterThan(0);
  await trigger.click();
  const viewer = page.getByRole('dialog', { name: 'Ulysses S. Grant' });
  await expect(viewer).toBeVisible();
  const portrait = viewer.locator('img');
  const fitted = await portrait.boundingBox();
  await viewer.getByRole('button', { name: 'Zoom in', exact: true }).click();
  await viewer.getByRole('button', { name: 'Zoom in', exact: true }).click();
  await expect(viewer.locator('output')).toHaveText('200%');
  const enlarged = await portrait.boundingBox();
  expect(enlarged!.width).toBeGreaterThan(fitted!.width * 1.9);
  const viewport = viewer.locator('.portrait-viewport');
  const box = (await viewport.boundingBox())!;
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width / 2 - 70, box.y + box.height / 2 - 100, { steps: 5 });
  await page.mouse.up();
  expect(await viewport.evaluate((element) => element.scrollTop)).toBeGreaterThan(0);
  await viewer.getByRole('button', { name: 'Fit image' }).click();
  await expect(viewer.locator('output')).toHaveText('100%');
  await expect(viewer.getByRole('link', { name: 'Open full-size image' })).toHaveAttribute('href', /images\/ulysses-s-grant.jpg$/);
  await viewer.screenshot({ path: testInfo.outputPath('portrait-viewer.png') });
  await page.keyboard.press('Escape');
  await expect(viewer).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await viewer.getByRole('button', { name: 'Close portrait viewer' }).click();
  await expect(viewer).not.toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({ path: testInfo.outputPath('person-profile.png'), fullPage: true });
});
