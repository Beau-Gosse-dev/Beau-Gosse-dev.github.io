import { expect, test } from '@playwright/test';

const site = 'https://beau-gosse-dev.github.io/projects/civil-war-field-companion';

for (const javascript of [true, false]) {
  test(`suggestions preserve page context with JavaScript ${javascript ? 'enabled' : 'disabled'}`, async ({ browser, baseURL }, testInfo) => {
    const context = await browser.newContext({ baseURL, javaScriptEnabled: javascript, viewport: testInfo.project.use.viewport });
    const page = await context.newPage();
    try {
      for (const [path, expected] of [
        ['episodes/95-postscript-forrest-s-breakout', /Episode 95: .*Forrest/i],
        ['people/ulysses-s-grant', /^Ulysses S\. Grant$/],
        ['people', /^People of the Civil War$/],
        ['', /^General site feedback$/],
      ] as const) {
        await page.goto(path || './');
        const panel = page.locator('#feedback');
        await panel.scrollIntoViewIfNeeded();
        await expect(panel).toBeVisible();
        await expect(panel).toContainText('GitHub sign-in required; suggestions are public.');
        const link = panel.getByRole('link', { name: 'Suggest a change' });
        const url = new URL((await link.getAttribute('href'))!);
        expect(url.origin).toBe('https://github.com');
        expect(url.pathname).toBe('/Beau-Gosse-dev/Beau-Gosse-dev.github.io/issues/new');
        expect(url.searchParams.get('template')).toBe('field-companion.yml');
        expect(url.searchParams.get('page-context')).toMatch(expected);
        expect(url.searchParams.get('page-url')).toBe(`${site}/${path}`);
        expect(url.searchParams.has('labels')).toBe(false); // Visitors need no label permissions.
        await expect(link).toHaveAttribute('rel', 'noreferrer');
        if (path.startsWith('people')) await expect(page.locator('body')).not.toContainText(/episode/i);
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
        if (javascript && path.startsWith('episodes')) await panel.screenshot({ path: testInfo.outputPath('feedback-panel.png') });
      }
    } finally { await context.close(); }
  });
}
