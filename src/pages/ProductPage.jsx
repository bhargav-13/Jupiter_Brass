import React from 'react';
import './ProductPage.css';
import '../components/Products.css';

const ProductPage = () => {
  const products = [
    { name: 'AGRICULTURAL PARTS', image: '/images/Precision Parts.png' },
    { name: 'MARINE FITTING', image: '/images/Electrical Components.png' },
    { name: 'FOOD COMPONENTS', image: '/images/brass nut.png' },
    { name: 'FIRE & SAFETY COMPONENTS', image: '/images/Precision Parts.png' },
    { name: 'MEASUREMENT INSTRUMENTS', image: '/images/Electrical Components.png' },
    { name: 'BRASS NUT', image: '/images/brass nut.png' }
  ];

  const electricalProducts = [
    { name: 'CABLE GLANDS', image: '/images/Precision Parts.png' },
    { name: 'EARTHING EQUIPMENTS', image: '/images/Electrical Components.png' },
    { name: 'ELECTRICAL PINS', image: '/images/brass nut.png' },
    { name: 'ELECTRIC LUGS', image: '/images/Precision Parts.png' },
    { name: 'TRANSFORM PARTS', image: '/images/Electrical Components.png' },
    { name: 'ELECTRIC FUSE', image: '/images/brass nut.png' }
  ];

  const foundryProducts = [
    { name: 'FORGING PARTS', image: '/images/Precision Parts.png' },
    { name: 'EARTHING EQUIPMENTS', image: '/images/Electrical Components.png' },
    { name: 'ELECTRICAL PINS', image: '/images/brass nut.png' },
    { name: 'ELECTRIC LUGS', image: '/images/Precision Parts.png' },
    { name: 'TRANSFORM PARTS', image: '/images/Electrical Components.png' },
    { name: 'ELECTRIC FUSE', image: '/images/brass nut.png' }
  ];

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

          <div className="section-heading">
            <h2 className="section-title">PRECISION PARTS</h2>
          </div>

          <div className="products-grid products-grid-3">
            {products.map((product, index) => (
              <div className="product-card" key={index}>
                <div className="product-image-wrapper">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                </div>
                <div className="product-name">{product.name}</div>
              </div>
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
            {electricalProducts.map((product, index) => (
              <div className="product-card" key={index}>
                <div className="product-image-wrapper">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                </div>
                <div className="product-name">{product.name}</div>
              </div>
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
            {foundryProducts.map((product, index) => (
              <div className="product-card" key={index}>
                <div className="product-image-wrapper">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                </div>
                <div className="product-name">{product.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
