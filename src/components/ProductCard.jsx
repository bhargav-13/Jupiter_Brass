import { Link } from 'react-router-dom';
import { getProductPath } from '../data/products';

const ProductCard = ({ product, showNumber = false }) => {
  const { slug, name, image, customClass } = product;

  return (
    <Link to={getProductPath(slug)} className="product-card">
      {showNumber && product.displayId && (
        <div className="product-number">{product.displayId}</div>
      )}
      <div className="product-image-wrapper">
        <img
          src={image}
          alt={name}
          className={`product-image ${customClass || ''}`}
        />
      </div>
      <div className="product-name">{name}</div>
    </Link>
  );
};

export default ProductCard;
