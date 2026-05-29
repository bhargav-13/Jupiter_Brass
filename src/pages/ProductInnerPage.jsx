import React, { useState } from 'react';
import '../components/Products.css';
import './ProductInnerPage.css';

const colorOptions = [
  { id: 'brass',        label: 'Brass',         swatchClass: 'color-brass' },
  { id: 'copper',       label: 'Copper',        swatchClass: 'color-copper' },
  { id: 'silver',       label: 'Silver',        swatchClass: 'color-silver' },
  { id: 'dark',         label: 'Dark',          swatchClass: 'color-dark' },
  { id: 'light-silver', label: 'Light Silver',  swatchClass: 'color-light-silver' },
];

const features = [
  {
    title: 'Corrosion & Weather Resistance',
    description: 'Designed to withstand harsh environmental conditions with superior corrosion protection and long-lasting durability.',
    icon: '/images/Corrosion & Weather Resistance.svg',
  },
  {
    title: 'High Strength & Durability',
    description: 'Manufactured using premium-quality brass material to ensure maximum strength and reliable industrial performance.',
    icon: '/images/High Strength & Durability.svg',
  },
  {
    title: 'Precision Machined Components',
    description: 'Engineered with advanced CNC machining technology for accurate dimensions and consistent product quality.',
    icon: '/images/Precision Machined Components.svg',
  },
  {
    title: 'Leak-Proof Performance',
    description: 'Built for secure fitting and dependable sealing performance in plumbing, industrial, and engineering applications.',
    icon: '/images/Leak-Proof Performance.svg',
  },
  {
    title: 'Smooth Surface Finishing',
    description: 'Premium surface finishing provides an excellent appearance, smooth texture, and enhanced product performance.',
    icon: '/images/Smooth Surface Finishing.svg',
  },
  {
    title: 'Long Service Life',
    description: 'High-quality manufacturing and durable materials ensure reliable operation and extended product lifespan.',
    icon: '/images/Long Service Life.svg',
  },
];

const threadColumns = [
  [
    'METRIC ISO THREAD [M]',
    'UNIFIED COARSE THREAD [UNC]',
    'BRITISH STANDARD',
    'BRITISH STANDARD FINE THREAD [BSF]',
    'AMERICAN NATIONAL STRAIGHT PIPE THREAD (NPSM)',
    'AMERICAN NATIONAL PIPE THREAD (NPT)',
    'BRITISH STANDARD',
  ],
  [
    'METRIC ISO FINE THREAD [MF]',
    'UNIFIED FINE THREAD [UNF]',
    'WHITWORTH THREAD [BSW]',
    'STEEL CONDUIT THREAD (DIN 40430 – PG)',
    'BRITISH ASSOCIATION (BA) THREAD',
    'CUSTOM THREAD SPECIFICATIONS (AS PER DRAWING)',
    'WHITWORTH THREAD [BSW]',
  ],
];

const moreProducts = [
  { id: '01', name: 'PRECISION PARTS', image: '/images/Precision Parts.png' },
  { id: '02', name: 'ELECTRICAL COMPONENTS', image: '/images/Electrical Components.png' },
  { id: '03', name: 'FASTNER COMPONENTS', image: '/images/brass nut.png' },
  { id: '04', name: 'FORGING COMPONENTS', image: '/images/Forging Components.png', customClass: 'scale-img-lg' },
];

const ProductInnerPage = () => {
  const [activeColor, setActiveColor] = useState('brass');

  return (
    <div className="product-inner-page">
      <section className="section product-inner-section">
        <div className="container product-inner-content">
          <div className="product-detail-grid">
            <div className="product-detail-image-col">
              <img
                src="/images/agricultural parts.png"
                alt="Agricultural Parts"
                className={`product-detail-image product-finish-${activeColor}`}
              />
            </div>

            <div className="product-detail-info-col">
              <h1 className="product-detail-title">AGRICULTURAL PARTS</h1>

              <div className="product-colors" role="radiogroup" aria-label="Select a product color">
                {colorOptions.map((color) => (
                  <button
                    key={color.id}
                    className={`color-swatch ${color.swatchClass} ${activeColor === color.id ? 'active' : ''}`}
                    onClick={() => setActiveColor(color.id)}
                    aria-label={color.label}
                    aria-checked={activeColor === color.id}
                    role="radio"
                    title={color.label}
                  />
                ))}
              </div>

              <p className="product-detail-description">
                WE MANUFACTURE HIGH-QUALITY BRASS AGRICULTURE COMPONENTS
                DESIGNED TO DELIVER RELIABLE PERFORMANCE, DURABILITY, AND
                PRECISION IN DEMANDING FARMING AND IRRIGATION
                ENVIRONMENTS. OUR COMPONENTS ARE ENGINEERED USING
                PREMIUM-GRADE BRASS MATERIAL AND ADVANCED MACHINING
                TECHNOLOGY TO ENSURE LONG SERVICE LIFE, CORROSION
                RESISTANCE, AND EFFICIENT OPERATION.
              </p>
            </div>
          </div>

          <div className="product-inner-block">
            <h2 className="product-inner-section-title">FEATURES</h2>

            <div className="features-grid">
              {features.map((feature, index) => (
                <div className="feature-card" key={index}>
                  <h3 className="feature-card-title">{feature.title}</h3>
                  <p className="feature-card-desc">{feature.description}</p>

                  <div className="feature-card-bottom">
                    <div className="feature-card-logo-wrap">
                      <div className="feature-card-logo-circle">
                        <img
                          src="/images/bg_hero.png"
                          alt="Jupiter Logo"
                          className="feature-card-logo-img"
                        />
                      </div>
                    </div>

                    <div className="feature-card-icon-wrap">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="feature-card-icon"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="product-inner-block">
            <h2 className="product-inner-section-title">THREAD WE SERVE</h2>

            <div className="threads-grid">
              {threadColumns.map((column, colIndex) => (
                <ul className="threads-list" key={colIndex}>
                  {column.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section products">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-title">MORE PRODUCTS YOU LIKE</h2>
          </div>

          <div className="products-grid">
            {moreProducts.map((product) => (
              <div className="product-card" key={product.id}>
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
    </div>
  );
};

export default ProductInnerPage;
