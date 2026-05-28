import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="nav-shell header-container">
        <div className="logo">
          <Link to="/">
            <img src="/images/jupiter_brass_logo.svg" alt="Jupiter Brass Logo" className="logo-img" />
          </Link>
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/about" className="nav-link">ABOUT</Link>
          <a href="/#products" className="nav-link">PRODUCTS</a>
          <a href="/#contact" className="nav-link">CONTACT</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
