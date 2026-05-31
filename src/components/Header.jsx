import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useHeaderMotion } from '../hooks/useHeaderMotion';
import { useHeaderScroll } from '../hooks/useHeaderScroll';
import './Header.css';

const NAV_LINKS = [
  { to: '/', label: 'HOME' },
  { to: '/about', label: 'ABOUT' },
  { to: '/products', label: 'PRODUCTS' },
  { to: '/blog', label: 'BLOG' },
  { to: '/contact', label: 'CONTACT' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const { pathname } = useLocation();

  const onScrolledChange = useCallback((scrolled) => {
    setHeaderScrolled(scrolled);
  }, []);

  const onHiddenChange = useCallback((hidden) => {
    setNavHidden(hidden);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setNavHidden(false);
    setHeaderScrolled(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen);
    return () => document.body.classList.remove('nav-open');
  }, [menuOpen]);

  useHeaderScroll({ menuOpen, onScrolledChange, onHiddenChange });
  const headerRef = useHeaderMotion(navHidden, menuOpen);

  const closeMenu = () => setMenuOpen(false);

  const isNavActive = (to) =>
    to === '/' ? pathname === '/' : pathname === to || pathname.startsWith(`${to}/`);

  const headerClassName = [
    'header',
    headerScrolled ? 'header--scrolled' : '',
    navHidden && !menuOpen ? 'header--hidden' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header ref={headerRef} className={headerClassName}>
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
              className={`nav-link${isNavActive(to) ? ' nav-link--active' : ''}`}
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
