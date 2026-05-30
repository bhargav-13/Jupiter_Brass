import React from 'react';
import ArticleCard from './ArticleCard';
import { featuredArticles, getRelatedArticles } from '../data/articles';
import './Articles.css';

const Articles = ({ excludeSlug, limit = 3 }) => {
  const items = excludeSlug
    ? getRelatedArticles(excludeSlug, limit)
    : featuredArticles.slice(0, limit);

  if (!items.length) return null;

  const gridClass = `articles-grid articles-grid--cols-${Math.min(items.length, 3)}`;

  return (
    <section className="articles-section">
      <div className="container">
        <h2 className="articles-heading">EXPLORE OUR TOP ARTICLES</h2>

        <div className={gridClass}>
          {items.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
