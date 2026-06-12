import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Articles from '../components/Articles';
import SEO from '../components/SEO';
import { SITE_URL, toSentenceCase } from '../lib/seo';
import StructuredData from '../components/StructuredData';
import {
  formatArticleAuthor,
  formatArticleMeta,
  getArticleBySlug,
} from '../data/articles';
import '../components/Articles.css';
import './BlogInnerPage.css';

const BlogInnerPage = () => {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: toSentenceCase(article.title),
    image: `${SITE_URL}${article.image}`,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Jupiter Meta Mech',
    },
    datePublished: article.date,
  };

  return (
    <div className="blog-inner-page">
      <SEO
        title={toSentenceCase(article.title)}
        description={toSentenceCase(article.title)}
        path={`/blog/${article.slug}`}
        image={`${SITE_URL}${article.image}`}
        type="article"
      />
      <StructuredData id="article" data={articleSchema} />
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
            <p>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR
              INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS
              NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT.
              DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU
              FUGIAT NULLA PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN
              CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUM.
            </p>

            <h2 className="blog-inner-subtitle">
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR
            </h2>

            <p>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR
              INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS
              NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT.
              DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU
              FUGIAT NULLA PARIATUR.
            </p>

            <ul className="blog-inner-list">
              <li>
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR
                INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.
              </li>
              <li>
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR
                INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.
              </li>
              <li>
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR
                INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.
              </li>
              <li>
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR
                INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.
              </li>
            </ul>

            <p>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR
              INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS
              NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT.
              DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU
              FUGIAT NULLA PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN
              CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUM.
            </p>

            <h2 className="blog-inner-subtitle">
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR
            </h2>

            <p>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR
              INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS
              NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT.
              DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU
              FUGIAT NULLA PARIATUR.
            </p>

            <ul className="blog-inner-list">
              <li>
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR
                INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.
              </li>
              <li>
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR
                INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.
              </li>
              <li>
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR
                INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.
              </li>
              <li>
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR
                INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.
              </li>
            </ul>

            <p>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR
              INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS
              NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT.
              DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU
              FUGIAT NULLA PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN
              CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUM.
            </p>
          </div>
        </div>
      </section>

      <Articles excludeSlug={article.slug} />
    </div>
  );
};

export default BlogInnerPage;
