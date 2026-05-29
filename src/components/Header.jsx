import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const NAV_LINKS = [
  { to: '/', label: 'HOME' },
  { to: '/about', label: 'ABOUT' },
  { to: '/products', label: 'PRODUCTS' },
  { to: '/contact', label: 'CONTACT' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen);
    return () => document.body.classList.remove('nav-open');
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="nav-shell header-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src="/images/jupiter_brass_logo.svg" alt="Jupiter Brass Logo" className="logo-img" />
          </Link>
        </div>

        <button
          type="button"
          className={`nav-toggle${menuOpen ? ' nav-toggle--active' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>

        <div
          className={`nav-overlay${menuOpen ? ' is-visible' : ''}`}
          onClick={closeMenu}
          aria-hidden="true"
        />

        <nav id="site-navigation" className={`nav${menuOpen ? ' nav--open' : ''}`}>
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link${pathname === to ? ' nav-link--active' : ''}`}
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
