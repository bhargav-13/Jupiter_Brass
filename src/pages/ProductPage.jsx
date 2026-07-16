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

  const visibleCategories = useMemo(() => {
    const defined = new Map(
      mergeCategories(BASE_CATEGORIES, categories).map((c) => [c.slug, c])
    );

    // Every category a product actually belongs to, minus the homepage-showcase
    // marker ("category"). Values that don't match a Category document — e.g. a
    // product tagged "Brass Cable Glands" — become a tab using the raw value.
    const usedSlugs = new Set(
      products.map((p) => p.category).filter((slug) => slug && slug !== 'category')
    );

    return [...usedSlugs]
      .map((slug) => defined.get(slug) ?? { _id: slug, slug, title: slug, order: 99 })
      .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
  }, [categories, products]);

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
