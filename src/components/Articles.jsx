import React from 'react';
import './Articles.css';

const Articles = () => {
  const articlesData = [
    {
      id: 1,
      image: '/images/Article.png',
      date: 'MAY 25, 2026',
      title: 'WHY PRECISION BRASS COMPONENTS ARE ESSENTIAL FOR INDUSTRIAL APPLICATIONS',
      author: 'JAY VASOYA • 7 MIN READ'
    },
    {
      id: 2,
      image: '/images/Article.png',
      date: 'MAY 25, 2026',
      title: 'WHY PRECISION BRASS COMPONENTS ARE ESSENTIAL FOR INDUSTRIAL APPLICATIONS',
      author: 'JAY VASOYA • 7 MIN READ'
    },
    {
      id: 3,
      image: '/images/Article.png',
      date: 'MAY 25, 2026',
      title: 'WHY PRECISION BRASS COMPONENTS ARE ESSENTIAL FOR INDUSTRIAL APPLICATIONS',
      author: 'JAY VASOYA • 7 MIN READ'
    }
  ];

  return (
    <section className="articles-section">
      <div className="container">
        <h2 className="articles-heading">EXPLORE OUR TOP ARTICLES</h2>
        
        <div className="articles-grid">
          {articlesData.map(article => (
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
  );
};

export default Articles;
