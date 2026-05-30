/** Slug from display name (unique per product) */
export function productSlug(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const defaultDescription = (name) =>
  `WE MANUFACTURE HIGH-QUALITY BRASS ${name} DESIGNED TO DELIVER RELIABLE PERFORMANCE, DURABILITY, AND PRECISION IN DEMANDING INDUSTRIAL AND COMMERCIAL ENVIRONMENTS. OUR COMPONENTS ARE ENGINEERED USING PREMIUM-GRADE BRASS MATERIAL AND ADVANCED MACHINING TECHNOLOGY TO ENSURE LONG SERVICE LIFE, CORROSION RESISTANCE, AND EFFICIENT OPERATION.`;

function product(name, image, options = {}) {
  const slug = options.slug ?? productSlug(name);
  return {
    slug,
    name,
    image,
    detailImage: options.detailImage ?? image,
    category: options.category,
    customClass: options.customClass,
    description: options.description ?? defaultDescription(name),
  };
}

/** Home “product categories” grid */
export const homeProductCategories = [
  { ...product('PRECISION PARTS', '/images/Precision Parts.png', { category: 'category' }), displayId: '01' },
  {
    ...product('ELECTRICAL COMPONENTS', '/images/Electrical Components.png', { category: 'category' }),
    displayId: '02',
  },
  { ...product('BRASS NUT', '/images/brass nut.png', { category: 'category' }), displayId: '03' },
  {
    ...product('FORGING COMPONENTS', '/images/Forging Components.png', {
      category: 'category',
      customClass: 'scale-img-lg',
    }),
    displayId: '04',
  },
];

export const precisionProducts = [
  product('AGRICULTURAL PARTS', '/images/Precision Parts.png', {
    category: 'precision',
    detailImage: '/images/agricultural parts.png',
  }),
  product('MARINE FITTING', '/images/Electrical Components.png', { category: 'precision' }),
  product('FOOD COMPONENTS', '/images/brass nut.png', { category: 'precision' }),
  product('FIRE & SAFETY COMPONENTS', '/images/Precision Parts.png', { category: 'precision' }),
  product('MEASUREMENT INSTRUMENTS', '/images/Electrical Components.png', { category: 'precision' }),
  product('BRASS NUT', '/images/brass nut.png', { category: 'precision', slug: 'brass-nut-precision' }),
];

export const electricalProducts = [
  product('CABLE GLANDS', '/images/Precision Parts.png', { category: 'electrical' }),
  product('EARTHING EQUIPMENTS', '/images/Electrical Components.png', { category: 'electrical' }),
  product('ELECTRICAL PINS', '/images/brass nut.png', { category: 'electrical' }),
  product('ELECTRIC LUGS', '/images/Precision Parts.png', { category: 'electrical' }),
  product('TRANSFORM PARTS', '/images/Electrical Components.png', { category: 'electrical' }),
  product('ELECTRIC FUSE', '/images/brass nut.png', { category: 'electrical' }),
];

export const foundryProducts = [
  product('FORGING PARTS', '/images/Precision Parts.png', { category: 'foundry' }),
  product('EARTHING EQUIPMENTS', '/images/Electrical Components.png', {
    category: 'foundry',
    slug: 'foundry-earthing-equipments',
  }),
  product('ELECTRICAL PINS', '/images/brass nut.png', { category: 'foundry', slug: 'foundry-electrical-pins' }),
  product('ELECTRIC LUGS', '/images/Precision Parts.png', { category: 'foundry', slug: 'foundry-electric-lugs' }),
  product('TRANSFORM PARTS', '/images/Electrical Components.png', {
    category: 'foundry',
    slug: 'foundry-transform-parts',
  }),
  product('ELECTRIC FUSE', '/images/brass nut.png', { category: 'foundry', slug: 'foundry-electric-fuse' }),
];

export const allProducts = [
  ...homeProductCategories,
  ...precisionProducts,
  ...electricalProducts,
  ...foundryProducts,
];

const productBySlug = new Map(allProducts.map((p) => [p.slug, p]));

export function getProductBySlug(slug) {
  return productBySlug.get(slug) ?? null;
}

export function getProductPath(slug) {
  return `/products/${slug}`;
}
