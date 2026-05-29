import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';

import ProductInnerPage from './pages/ProductInnerPage';
import BlogPage from './pages/BlogPage';
import BlogInnerPage from './pages/BlogInnerPage';
import ContactPage from './pages/ContactPage';
import GsapAnimations from './components/GsapAnimations';
import ScrollToTop from './components/ScrollToTop';
import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <Router>
      <SmoothScroll />
      <ScrollToTop />
      <GsapAnimations />
      <Header />
      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/product-inner" element={<ProductInnerPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog-inner" element={<BlogInnerPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
