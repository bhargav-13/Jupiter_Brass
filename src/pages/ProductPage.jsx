import React from 'react';
import ProductCard from '../components/ProductCard';
import { useCategories, useProducts } from '../sanity/hooks';
import './ProductPage.css';
import '../components/Products.css';

// Base categories always shown; Sanity-managed ones are merged on top (by slug) and sorted by order.
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

  const displayCategories = mergeCategories(BASE_CATEGORIES, categories);

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

      {!categoriesLoading && displayCategories.map((cat) => {
        const catProducts = products.filter((p) => p.category === cat.slug);
        if (catProducts.length === 0) return null;
        return (
          <section key={cat._id} className="section product-quality-section">
            <div className="container">
              <div className="section-heading">
                <h2 className="section-title">{cat.title.toUpperCase()}</h2>
              </div>
              <div className="products-grid products-grid-3">
                {catProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ProductPage;
