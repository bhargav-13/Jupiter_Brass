import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useCategories, useProducts } from '../sanity/hooks';
import { BASE_CATEGORIES, mergeCategories } from '../data/categories';
import './ProductPage.css';
import '../components/Products.css';

const ProductPage = () => {
  const { products } = useProducts();
  const { categories, loading: categoriesLoading } = useCategories();
  const location = useLocation();

  const displayCategories = useMemo(
    () => mergeCategories(BASE_CATEGORIES, categories),
    [categories]
  );

  const visibleCategories = useMemo(
    () => displayCategories.filter((cat) => products.some((p) => p.category === cat.slug)),
    [displayCategories, products]
  );

  const [activeSlug, setActiveSlug] = useState(null);

  const hashSlug = location.hash.replace('#', '');
  const hashCategory = visibleCategories.find((cat) => cat.slug === hashSlug);

  const effectiveSlug = activeSlug ?? hashCategory?.slug ?? visibleCategories[0]?.slug ?? null;

  const activeProducts = useMemo(
    () => products.filter((p) => p.category === effectiveSlug),
    [products, effectiveSlug]
  );

  return (
    <div className="product-page">
      <section className="section product-quality-section">
        <div className="container">
          <div className="section-heading quality-header">
            <h1 className="section-title">QUALITY THAT LASTS</h1>
            <p className="quality-subtitle">
              PRECISION-CRAFTED BRASS COMPONENTS
              ENGINEERED WITH STRICT QUALITY
              STANDARDS AND MODERN TECHNOLOGY.
            </p>
          </div>
        </div>
      </section>

      {!categoriesLoading && visibleCategories.length > 0 && (
        <section className="section product-catalog-section" id={effectiveSlug}>
          <div className="container">
            <div className="category-tabs">
              {visibleCategories.map((cat) => (
                <button
                  key={cat._id}
                  className={`category-tab${effectiveSlug === cat.slug ? ' category-tab--active' : ''}`}
                  onClick={() => setActiveSlug(cat.slug)}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            <div className="products-grid products-grid-3">
              {activeProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductPage;
