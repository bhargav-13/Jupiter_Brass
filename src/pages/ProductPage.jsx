import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { useCategories, useProducts } from '../sanity/hooks';
import './ProductPage.css';
import '../components/Products.css';

const BASE_CATEGORIES = [
  { _id: 'precision', title: 'Precision Parts', slug: 'precision', order: 1 },
  { _id: 'electrical', title: 'Electrical Components', slug: 'electrical', order: 2 },
  { _id: 'foundry', title: 'Foundry Parts', slug: 'foundry', order: 3 },
];

function mergeCategories(base, fromSanity) {
  const map = new Map(base.map((c) => [c.slug, { ...c }]));
  fromSanity.forEach((c) => map.set(c.slug, c));
  return [...map.values()].sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

const ProductPage = () => {
  const { products } = useProducts();
  const { categories, loading: categoriesLoading } = useCategories();

  const displayCategories = useMemo(
    () => mergeCategories(BASE_CATEGORIES, categories),
    [categories]
  );

  const visibleCategories = useMemo(
    () => displayCategories.filter((cat) => products.some((p) => p.category === cat.slug)),
    [displayCategories, products]
  );

  const [activeSlug, setActiveSlug] = useState(null);

  const effectiveSlug = activeSlug ?? visibleCategories[0]?.slug ?? null;

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
        <section className="section product-catalog-section">
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
