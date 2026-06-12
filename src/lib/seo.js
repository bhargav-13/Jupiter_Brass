export const SITE_NAME = 'Jupiter Meta Mech';
export const SITE_URL = 'https://www.jupitermetamech.com';
export const DEFAULT_IMAGE = `${SITE_URL}/hero.png`;

/** Converts an ALL-CAPS string into Title Case, e.g. for use in <title> / meta tags. */
export function toTitleCase(text) {
  return text
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

/** Converts an ALL-CAPS string into a readable sentence for meta descriptions. */
export function toSentenceCase(text) {
  const lower = text.toLowerCase().trim();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}
