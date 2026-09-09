import { expect, test } from '@playwright/test';
import { people } from '../data/people';

const episodePath = 'episodes/95-postscript-forrest-s-breakout#people';

test('cataloged people render their shared identity and portrait metadata', async ({ page }) => {
  expect(people['ulysses-s-grant'].imageSource).toBe(
    'https://www.loc.gov/item/2018666428/',
  );

  await page.goto(episodePath);

  const grantCard = page.locator('.person-card').filter({
    has: page.getByRole('heading', { name: 'Ulysses S. Grant', exact: true }),
  });

  await expect(grantCard).toBeVisible();
  await expect(page.getByRole('region', { name: 'United States chain of command' })).toContainText('Ulysses S. Grant');
  await expect(grantCard.locator('img')).toHaveAttribute(
    'alt',
    'Portrait of Major General Ulysses S. Grant in United States Army uniform',
  );
  await expect(grantCard.locator('img')).toHaveAttribute(
    'src',
    /\/images\/ulysses-s-grant\.jpg$/,
  );

  const expectedPortraits = [
    ['Nathan Bedford Forrest', 'nathan-bedford-forrest.jpg'],
    ['Gideon J. Pillow', 'gideon-j-pillow.jpg'],
    ['John B. Floyd', 'john-b-floyd.jpg'],
    ['Simon B. Buckner', 'simon-b-buckner.jpg'],
    ['John A. McClernand', 'john-a-mcclernand.jpg'],
    ['Charles F. Smith', 'charles-f-smith.jpg'],
    ['Jeffrey E. Forrest', 'jeffrey-e-forrest.jpg'],
    ['Lew Wallace', 'lew-wallace.jpg'],
    ['Bushrod R. Johnson', 'bushrod-r-johnson.jpg'],
  ] as const;

  for (const [name, image] of expectedPortraits) {
    const card = page.locator('.person-card').filter({
      has: page.getByRole('heading', { name, exact: true }),
    });
    await expect(card.locator('img')).toHaveAttribute('src', new RegExp(`/images/${image}$`));
  }

  const grantBranch = page.locator('[data-commander="ulysses-s-grant"]');
  await expect(grantBranch.locator(':scope > ul > li')).toHaveCount(3);
  await expect(grantBranch).toContainText('Lew Wallace');
  const pillowBranch = page.locator('[data-commander="gideon-j-pillow"]');
  await expect(pillowBranch.locator(':scope > ul > li')).toHaveCount(2);
  await expect(pillowBranch).toContainText('Nathan Bedford Forrest');
  const others = page.getByRole('region', { name: 'Other people', exact: true });
  await expect(others.locator('.person-card')).toHaveCount(1);
  await expect(others).toContainText('Jeffrey E. Forrest');
  await expect(others).not.toContainText('Ulysses S. Grant');
  await expect(page.locator('#people .person-card')).toHaveCount(10);
  const overflows = await page.locator('#people').evaluate((section) =>
    Array.from(section.querySelectorAll('.person-card')).some((card) =>
      card.getBoundingClientRect().right > document.documentElement.clientWidth || card.scrollWidth > card.clientWidth + 1));
  expect(overflows).toBe(false);

  await page.getByText('Sources and image credits', { exact: true }).click();
  await expect(page.getByRole('link', { name: /Portrait: John A\. McClernand/ })).toHaveAttribute(
    'href',
    'https://www.loc.gov/item/2018666452/',
  );
  await expect(page.getByRole('link', { name: /Portrait: Jeffrey E\. Forrest/ })).toHaveAttribute(
    'href',
    /commons\.wikimedia\.org\/wiki\/File:Jeffrey_E\._Forrest/,
  );
});
