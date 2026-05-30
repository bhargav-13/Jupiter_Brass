function article(id, overrides = {}) {
  const slug = overrides.slug ?? `article-${id}`;
  return {
    id,
    slug,
    image: '/images/Article.png',
    date: 'MAY 25, 2026',
    title:
      'WHY PRECISION BRASS COMPONENTS ARE ESSENTIAL FOR INDUSTRIAL APPLICATIONS',
    author: 'JAY VASOYA',
    readTime: '7 MIN READ',
    ...overrides,
  };
}

export const articles = [
  article(1),
  article(2, {
    title:
      "TOP COUNTRIES IMPORTING BRASS COMPONENTS: INDIA'S ROLE IN THE GLOBAL SUPPLY CHAIN",
    readTime: '6 MIN READ',
  }),
  article(3, {
    title: 'HOW CNC MACHINING IMPROVES BRASS PART ACCURACY AND CONSISTENCY',
    readTime: '5 MIN READ',
  }),
  article(4, {
    title: 'CHOOSING THE RIGHT BRASS ALLOY FOR INDUSTRIAL AND PLUMBING APPLICATIONS',
    readTime: '8 MIN READ',
  }),
  article(5, {
    title: 'QUALITY CONTROL PRACTICES IN PRECISION BRASS MANUFACTURING',
    readTime: '6 MIN READ',
  }),
  article(6, {
    title: 'CUSTOM BRASS COMPONENTS: FROM DRAWING TO FINAL INSPECTION',
    readTime: '7 MIN READ',
  }),
];

export const featuredArticles = articles.slice(0, 3);

/** Up to `limit` articles for “related” blocks (always fills the row when possible). */
export function getRelatedArticles(excludeSlug, limit = 3) {
  const pool = excludeSlug
    ? articles.filter((a) => a.slug !== excludeSlug)
    : articles;
  return pool.slice(0, limit);
}

const articleBySlug = new Map(articles.map((a) => [a.slug, a]));

export function getArticleBySlug(slug) {
  return articleBySlug.get(slug) ?? null;
}

export function getArticlePath(slug) {
  return `/blog/${slug}`;
}

export function formatArticleMeta(article) {
  return `${article.date} - ${article.readTime}`;
}

export function formatArticleAuthor(article) {
  return `BY ${article.author.toUpperCase()}`;
}
