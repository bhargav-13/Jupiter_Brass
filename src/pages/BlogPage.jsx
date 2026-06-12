import React from 'react';
import SEO from '../components/SEO';
import ArticleCard from '../components/ArticleCard';
import { articles } from '../data/articles';
import '../components/Articles.css';
import './ProductPage.css';
import './BlogPage.css';

const BlogPage = () => (
  <div className="blog-page">
    <SEO
      title="Blog"
      description="Read the latest articles from Jupiter Meta Mech on brass manufacturing, CNC machining, alloy selection, quality control, and industrial applications."
      path="/blog"
    />
    <section className="section blog-section">
      <div className="container">
        <div className="section-heading quality-header">
          <h1 className="section-title">KNOWLEDGE BUILT WITH PRECISION</h1>
          <p className="quality-subtitle">
            LATEST UPDATES ON BRASS MANUFACTURING
            INDUSTRIAL APPLICATIONS & ENGINEERING
            QUALITY THAT DRIVES PERFORMANCE
          </p>
        </div>

        <div className="articles-grid blog-articles-grid">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default BlogPage;
