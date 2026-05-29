import React from 'react';
import '../components/Articles.css';
import './ProductPage.css';
import './BlogPage.css';

const articlesData = [
  {
    id: 1,
    image: '/images/Article.png',
    date: 'MAY 25, 2026',
    title: 'WHY PRECISION BRASS COMPONENTS ARE ESSENTIAL FOR INDUSTRIAL APPLICATIONS',
    author: 'JAY VASOYA • 7 MIN READ',
  },
  {
    id: 2,
    image: '/images/Article.png',
    date: 'MAY 25, 2026',
    title: 'WHY PRECISION BRASS COMPONENTS ARE ESSENTIAL FOR INDUSTRIAL APPLICATIONS',
    author: 'JAY VASOYA • 7 MIN READ',
  },
  {
    id: 3,
    image: '/images/Article.png',
    date: 'MAY 25, 2026',
    title: 'WHY PRECISION BRASS COMPONENTS ARE ESSENTIAL FOR INDUSTRIAL APPLICATIONS',
    author: 'JAY VASOYA • 7 MIN READ',
  },
  {
    id: 4,
    image: '/images/Article.png',
    date: 'MAY 25, 2026',
    title: 'WHY PRECISION BRASS COMPONENTS ARE ESSENTIAL FOR INDUSTRIAL APPLICATIONS',
    author: 'JAY VASOYA • 7 MIN READ',
  },
  {
    id: 5,
    image: '/images/Article.png',
    date: 'MAY 25, 2026',
    title: 'WHY PRECISION BRASS COMPONENTS ARE ESSENTIAL FOR INDUSTRIAL APPLICATIONS',
    author: 'JAY VASOYA • 7 MIN READ',
  },
  {
    id: 6,
    image: '/images/Article.png',
    date: 'MAY 25, 2026',
    title: 'WHY PRECISION BRASS COMPONENTS ARE ESSENTIAL FOR INDUSTRIAL APPLICATIONS',
    author: 'JAY VASOYA • 7 MIN READ',
  },
];

const BlogPage = () => {
  return (
    <div className="blog-page">
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
            {articlesData.map((article) => (
              <div key={article.id} className="article-card">
                <div className="article-image-wrapper">
                  <img src={article.image} alt="Article" className="article-image" />
                </div>
                <div className="article-content">
                  <div className="article-date">{article.date}</div>
                  <h3 className="article-title">{article.title}</h3>
                  <div className="article-author">{article.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
