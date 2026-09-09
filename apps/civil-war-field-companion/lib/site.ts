export const SITE_BASE_PATH = '/projects/civil-war-field-companion';
export const SITE_ORIGIN = 'https://beau-gosse-dev.github.io';
export const SITE_URL = `${SITE_ORIGIN}${SITE_BASE_PATH}`;

export function siteHref(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_BASE_PATH}${normalized}`;
}
