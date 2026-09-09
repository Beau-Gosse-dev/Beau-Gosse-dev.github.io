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
        await expect(panel).toContainText('No account needed.');
        await expect(panel.locator('.feedback-context strong')).toHaveText(expected);
        const link = panel.getByRole('link', { name: 'Use the GitHub form instead' });
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

test('submits anonymously with page context and shows the resulting issue', async ({ page }) => {
  let submission: Record<string, string> = {};
  await page.route('https://civil-war-feedback.the-bog.chatgpt.site/api/feedback', async (route) => {
    submission = route.request().postDataJSON();
    await route.fulfill({ status: 201, contentType: 'application/json', body: JSON.stringify({ issueUrl: 'https://github.com/Beau-Gosse-dev/Beau-Gosse-dev.github.io/issues/123' }) });
  });
  await page.goto('episodes/95-postscript-forrest-s-breakout#feedback');
  await page.getByLabel('Kind of suggestion').selectOption('Historical correction');
  await page.getByLabel('Short summary').fill('Clarify a battle description');
  await page.getByLabel('Your suggestion', { exact: true }).fill('Please explain which troops this number includes.');
  await page.getByRole('button', { name: 'Send suggestion', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('Your suggestion has been submitted.');
  expect(submission.path).toBe('/episodes/95-postscript-forrest-s-breakout');
  expect(submission.id).toMatch(/^[0-9a-f-]{36}$/);
  expect(submission.details).toBe('Please explain which troops this number includes.');
  expect(submission).not.toHaveProperty('token');
  await expect(page.getByRole('link', { name: 'View your suggestion' })).toHaveAttribute('href', /\/issues\/123$/);
});

test('errors preserve the draft and retries keep the same submission ID', async ({ page }) => {
  const ids: string[] = [];
  await page.route('https://civil-war-feedback.the-bog.chatgpt.site/api/feedback', async (route) => {
    ids.push(route.request().postDataJSON().id);
    await route.fulfill({ status: ids.length === 1 ? 503 : 201, contentType: 'application/json', body: JSON.stringify(ids.length === 1 ? { error: 'Please retry shortly.' } : { issueUrl: 'https://github.com/Beau-Gosse-dev/Beau-Gosse-dev.github.io/issues/124' }) });
  });
  await page.goto('people/ulysses-s-grant#feedback');
  await page.getByLabel('Kind of suggestion').selectOption('Image or map suggestion');
  await page.getByLabel('Short summary').fill('Add another portrait');
  await page.getByLabel('Your suggestion', { exact: true }).fill('There is another useful portrait in this collection.');
  await page.getByRole('button', { name: 'Send suggestion', exact: true }).click();
  await expect(page.getByRole('alert')).toHaveText('Please retry shortly.');
  await expect(page.getByLabel('Your suggestion', { exact: true })).toHaveValue('There is another useful portrait in this collection.');
  await page.getByRole('button', { name: 'Send suggestion', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('Your suggestion has been submitted.');
  expect(ids).toHaveLength(2); expect(ids[0]).toBe(ids[1]);
  await expect(page.locator('body')).not.toContainText(/episode/i);
});
