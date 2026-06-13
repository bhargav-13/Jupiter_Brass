import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useProduct, useProducts } from '../sanity/hooks';
import '../components/Products.css';
import './ProductInnerPage.css';

const colorOptions = [
  { id: 'brass', label: 'Brass', swatchClass: 'color-brass' },
  { id: 'copper', label: 'Copper', swatchClass: 'color-copper' },
  { id: 'silver', label: 'Silver', swatchClass: 'color-silver' },
  { id: 'dark', label: 'Dark', swatchClass: 'color-dark' },
  { id: 'light-silver', label: 'Light Silver', swatchClass: 'color-light-silver' },
];

const defaultFeatures = [
  {
    title: 'Corrosion & Weather Resistance',
    description:
      'Designed to withstand harsh environmental conditions with superior corrosion protection and long-lasting durability.',
    icon: '/images/Corrosion & Weather Resistance.svg',
  },
  {
    title: 'High Strength & Durability',
    description:
      'Manufactured using premium-quality brass material to ensure maximum strength and reliable industrial performance.',
    icon: '/images/High Strength & Durability.svg',
  },
  {
    title: 'Precision Machined Components',
    description:
      'Engineered with advanced CNC machining technology for accurate dimensions and consistent product quality.',
    icon: '/images/Precision Machined Components.svg',
  },
  {
    title: 'Leak-Proof Performance',
    description:
      'Built for secure fitting and dependable sealing performance in plumbing, industrial, and engineering applications.',
    icon: '/images/Leak-Proof Performance.svg',
  },
  {
    title: 'Smooth Surface Finishing',
    description:
      'Premium surface finishing provides an excellent appearance, smooth texture, and enhanced product performance.',
    icon: '/images/Smooth Surface Finishing.svg',
  },
  {
    title: 'Long Service Life',
    description:
      'High-quality manufacturing and durable materials ensure reliable operation and extended product lifespan.',
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

const ProductInnerPage = () => {
  const { slug } = useParams();
  const { product, loading } = useProduct(slug);
  const { products } = useProducts();
  const [activeColor, setActiveColor] = useState('brass');

  useEffect(() => {
    setActiveColor('brass');
  }, [slug]);

  if (loading) return null;

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const relatedProducts = products
    .filter((p) => p.category === 'category' && p.slug !== product.slug);

  return (
    <div className="product-inner-page">
      <section className="section product-inner-section">
        <div className="container product-inner-content">
          <div className="product-detail-grid">
            <div className="product-detail-image-col">
              <img
                src={product.detailImage}
                alt={product.name}
                className={`product-detail-image product-finish-${activeColor}`}
              />
            </div>

            <div className="product-detail-info-col">
              <h1 className="product-detail-title">{product.name}</h1>

              <div className="product-colors" role="radiogroup" aria-label="Select a product color">
                {colorOptions.map((color) => (
                  <button
                    key={color.id}
                    type="button"
                    className={`color-swatch ${color.swatchClass} ${activeColor === color.id ? 'active' : ''}`}
                    onClick={() => setActiveColor(color.id)}
                    aria-label={color.label}
                    aria-checked={activeColor === color.id}
                    role="radio"
                    title={color.label}
                  />
                ))}
              </div>

              <p className="product-detail-description">{product.description}</p>
            </div>
          </div>

          <div className="product-inner-block">
            <h2 className="product-inner-section-title">FEATURES</h2>

            <div className="features-grid">
              {(product.features?.length ? product.features : defaultFeatures).map((feature, index) => (
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
                      <img src={feature.icon} alt={feature.title} className="feature-card-icon" />
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
            {relatedProducts.map((item) => (
              <ProductCard key={item.slug} product={item} showNumber />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductInnerPage;
