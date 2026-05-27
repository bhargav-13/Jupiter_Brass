import React from 'react';
import './Products.css';

const Products = () => {
  const products = [
    { id: '01', name: 'PRECISION PARTS', image: '/images/Precision Parts.png' },
    { id: '02', name: 'ELECTRICAL COMPONENTS', image: '/images/Electrical Components.png' },
    { id: '03', name: 'BRASS NUT', image: '/images/brass nut.png' },
    { id: '04', name: 'FORGING COMPONENTS', image: '/images/Forging Components.png', customClass: 'scale-img-lg' }
  ];

  return (
    <section id="products" className="section products">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">PRODUCT CATEGORIES</h2>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-number">{product.id}</div>
              <div className="product-image-wrapper">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className={`product-image ${product.customClass || ''}`} 
                />
              </div>
              <div className="product-name">{product.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
