import { SITE_URL } from './site';

export const FEEDBACK_REPOSITORY = 'Beau-Gosse-dev/Beau-Gosse-dev.github.io';
export type FeedbackContext = { title: string; path: string };

export function feedbackUrl(context: FeedbackContext) {
  const query = new URLSearchParams({
    template: 'field-companion.yml',
    title: `[Field Companion] ${context.title} — suggestion`,
    'page-context': context.title,
    'page-url': `${SITE_URL}${context.path}`,
  });
  return `https://github.com/${FEEDBACK_REPOSITORY}/issues/new?${query}`;
}

export const feedbackIssuesUrl = `https://github.com/${FEEDBACK_REPOSITORY}/issues?q=${encodeURIComponent('is:issue "[Field Companion]" in:title')}`;
