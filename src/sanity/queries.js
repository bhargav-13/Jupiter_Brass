export const ALL_CATEGORIES_QUERY = `*[_type == "category"] | order(order asc){ _id, title, "slug": slug.current, order }`;

export const PRODUCT_FIELDS = `
  _id,
  name,
  "slug": slug.current,
  category,
  displayId,
  customClass,
  description,
  image,
  detailImage,
  features[]{ title, description, "icon": icon.asset->url }
`;

export const ALL_PRODUCTS_QUERY = `*[_type == "product"]{ ${PRODUCT_FIELDS} }`;

export const PRODUCT_BY_SLUG_QUERY = `*[_type == "product" && slug.current == $slug][0]{ ${PRODUCT_FIELDS} }`;

export const POST_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  image,
  date,
  author,
  readTime,
  body
`;

export const ALL_POSTS_QUERY = `*[_type == "post"] | order(date desc){ ${POST_FIELDS} }`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0]{ ${POST_FIELDS} }`;
