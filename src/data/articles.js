export function getArticlePath(slug) {
  return `/blog/${slug}`;
}

export function formatArticleMeta(article) {
  return `${article.date} - ${article.readTime}`;
}

export function formatArticleAuthor(article) {
  return `BY ${article.author.toUpperCase()}`;
}
