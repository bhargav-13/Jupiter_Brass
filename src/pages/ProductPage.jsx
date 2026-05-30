import React from 'react';
import ProductCard from '../components/ProductCard';
import {
  electricalProducts,
  foundryProducts,
  precisionProducts,
} from '../data/products';
import './ProductPage.css';
import '../components/Products.css';

const ProductPage = () => (
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

        <div className="section-heading">
          <h2 className="section-title">PRECISION PARTS</h2>
        </div>

        <div className="products-grid products-grid-3">
          {precisionProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>

    <section className="section product-quality-section">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">ELECTRICAL COMPONETNS</h2>
        </div>

        <div className="products-grid products-grid-3">
          {electricalProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>

    <section className="section product-quality-section">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">FOUNDRY PARTS</h2>
        </div>

        <div className="products-grid products-grid-3">
          {foundryProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default ProductPage;
