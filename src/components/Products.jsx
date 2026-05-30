import React from 'react';
import ProductCard from './ProductCard';
import { homeProductCategories } from '../data/products';
import './Products.css';

const Products = () => (
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

export default Products;
