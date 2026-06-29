import React from 'react';
import ProductCard from './ProductCard';
import { useProducts } from '../sanity/hooks';
import './Products.css';

const Products = () => {
  const { products } = useProducts();
  const homeProductCategories = products
    .filter((p) => p.category === 'category')
    .sort((a, b) => (a.displayId || '').localeCompare(b.displayId || '', undefined, { numeric: true }));

  return (
    <section id="products" className="section products">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">PRODUCT CATEGORIES</h2>
        </div>

        <div className="products-grid">
          {homeProductCategories.map((product) => (
            <ProductCard key={product.slug} product={product} showNumber />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
