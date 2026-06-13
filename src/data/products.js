/** Slug from display name (unique per product) */
export function productSlug(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function getProductPath(slug) {
  return `/products/${slug}`;
}
