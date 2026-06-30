export const BASE_CATEGORIES = [
  { _id: 'precision', title: 'Precision Parts', slug: 'precision', order: 1 },
  { _id: 'electrical', title: 'Electrical Components', slug: 'electrical', order: 2 },
  { _id: 'foundry', title: 'Foundry Parts', slug: 'foundry', order: 3 },
];

export function mergeCategories(base, fromSanity) {
  const map = new Map(base.map((c) => [c.slug, { ...c }]));
  fromSanity.forEach((c) => map.set(c.slug, c));
  return [...map.values()].sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}
