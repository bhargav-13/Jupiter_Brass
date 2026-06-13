import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import Articles from '../components/Articles';
import { useArticle } from '../sanity/hooks';
import { urlFor } from '../sanity/client';
import {
  formatArticleAuthor,
  formatArticleMeta,
} from '../data/articles';
import '../components/Articles.css';
import './BlogInnerPage.css';

const portableTextComponents = {
  types: {
    image: ({ value }) => (
      <figure className="blog-inner-image">
        <img src={urlFor(value).width(800).url()} alt={value.alt || ''} />
      </figure>
    ),
  },
  block: {
    h2: ({ children }) => <h2 className="blog-inner-subtitle">{children}</h2>,
    h3: ({ children }) => <h3 className="blog-inner-subtitle">{children}</h3>,
  },
  list: {
    bullet: ({ children }) => <ul className="blog-inner-list">{children}</ul>,
    number: ({ children }) => <ol className="blog-inner-list">{children}</ol>,
  },
};

const BlogInnerPage = () => {
  const { slug } = useParams();
  const { article, loading } = useArticle(slug);

  if (loading) return null;

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="blog-inner-page">
      <section className="section blog-inner-section">
        <div className="container">
          <header className="blog-inner-header">
            <p className="blog-inner-read-meta">{formatArticleMeta(article)}</p>

            <h1 className="blog-inner-title">{article.title}</h1>

            <div className="blog-inner-author-row">
              <span className="blog-inner-author-logo">
                <img src="/images/jupiter.svg" alt="Jupiter Brass" />
              </span>
              <span className="blog-inner-author-name">{formatArticleAuthor(article)}</span>
            </div>

            <div className="blog-inner-featured article-image-wrapper">
              <img
                src={article.image}
                alt={article.title}
                className="blog-inner-featured-image article-image"
              />
            </div>
          </header>

          <div className="blog-inner-body">
            {article.body ? (
              <PortableText value={article.body} components={portableTextComponents} />
            ) : (
              <p>Content coming soon.</p>
            )}
          </div>
        </div>
      </section>

      <Articles excludeSlug={article.slug} />
    </div>
  );
};

export default BlogInnerPage;
