import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="nav-shell header-container">
        <div className="logo">
          <img src="/images/jupiter_brass_logo.svg" alt="Jupiter Brass Logo" className="logo-img" />
        </div>
        <nav className="nav">
          <a href="#home" className="nav-link">HOME</a>
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#products" className="nav-link">PRODUCTS</a>
          <a href="#contact" className="nav-link">CONTACT</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
