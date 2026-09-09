// Repository-scoped issue access using the existing Git credential helper.
// Credentials stay in memory and are never written to logs or files.
import { spawnSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const repo = 'Beau-Gosse-dev/Beau-Gosse-dev.github.io';
const root = fileURLToPath(new URL('../../../', import.meta.url));
const [command, number, ...options] = process.argv.slice(2);
if (!['status', 'list', 'comments', 'comment', 'close'].includes(command) ||
    (['comments', 'comment', 'close'].includes(command) && !/^[1-9]\d*$/.test(number ?? ''))) {
  console.error('Usage: node scripts/github-issues.mjs status|list|comments NUMBER|comment NUMBER --body-file PATH|close NUMBER');
  process.exit(1);
}

try {
  const credential = spawnSync('git', ['credential', 'fill'], {
    cwd: root,
    input: `protocol=https\nhost=github.com\npath=${repo}.git\n\n`,
    encoding: 'utf8', timeout: 15000, windowsHide: true,
    env: { ...process.env, GIT_TERMINAL_PROMPT: '0', GCM_INTERACTIVE: 'Never' },
  });
  if (credential.status !== 0) throw new Error('The existing Git login is unavailable. Sign in to GitHub for this repository before retrying.');
  const token = credential.stdout.split(/\r?\n/).find((line) => line.startsWith('password='))?.slice(9);
  if (!token) throw new Error('The Git credential helper returned no credential.');

  async function api(path, method = 'GET', body) {
    const response = await fetch(`https://api.github.com${path}`, {
      method, redirect: 'error', signal: AbortSignal.timeout(20000),
      headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28', 'Content-Type': 'application/json' },
      ...(body ? { body: JSON.stringify(body) } : {}),
    });
    if (!response.ok) throw new Error(`GitHub ${method} failed with status ${response.status}.`);
    return response.json();
  }
  const identity = await api('/user');
  if (identity.login.toLowerCase() !== 'beau-gosse-dev') throw new Error('The Git login does not match the repository owner; no issue changes were made.');
  const repoPath = `/repos/${repo}`;
  async function pages(path) {
    const rows = [];
    for (let page = 1; ; page++) {
      const batch = await api(`${repoPath}${path}${path.includes('?') ? '&' : '?'}per_page=100&page=${page}`);
      rows.push(...batch);
      if (batch.length < 100) return rows;
    }
  }
  let result;
  if (command === 'status') {
    const metadata = await api(repoPath);
    result = { account: identity.login, repository: repo, issuesEnabled: metadata.has_issues, canManageIssues: Boolean(metadata.permissions?.push || metadata.permissions?.triage || metadata.permissions?.admin) };
  } else if (command === 'list') {
    result = (await pages('/issues?state=open&sort=created&direction=asc')).filter((issue) => !issue.pull_request).map(({ number, title, body, html_url, updated_at, user }) => ({ number, title, body, url: html_url, updated_at, author: user.login }));
  } else {
    const issue = await api(`${repoPath}/issues/${number}`);
    if (issue.pull_request) throw new Error('This tool handles issues, not pull requests.');
    if (command === 'comments') {
      result = (await pages(`/issues/${number}/comments`)).map(({ id, body, html_url, updated_at, user }) => ({ id, body, url: html_url, updated_at, author: user.login }));
    } else {
      if (!`${issue.title}\n${issue.body ?? ''}`.match(/\[Field Companion\]|civil-war-field-companion/i)) throw new Error('This issue is not identified as a Field Companion suggestion.');
      if (command === 'comment') {
        if (options.length !== 2 || options[0] !== '--body-file') throw new Error('Use --body-file PATH for the exact comment text.');
        const body = await readFile(options[1], 'utf8');
        if (!body.startsWith('Automated Field Companion review:') || body.length > 60000) throw new Error('Comments must identify the automated review and fit GitHub limits.');
        const posted = await api(`${repoPath}/issues/${number}/comments`, 'POST', { body });
        result = { id: posted.id, url: posted.html_url };
      } else {
        const closed = await api(`${repoPath}/issues/${number}`, 'PATCH', { state: 'closed', state_reason: 'completed' });
        result = { number: closed.number, state: closed.state, url: closed.html_url };
      }
    }
  }
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
