import React from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
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
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <Router>
      <CustomCursor />
      <ScrollProgress />
      <SmoothScroll />
      <ScrollToTop />
      <GsapAnimations />
      <Header />
      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:slug" element={<ProductInnerPage />} />
          <Route path="/product-inner" element={<Navigate to="/products/agricultural-parts" replace />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogInnerPage />} />
          <Route path="/blog-inner" element={<Navigate to="/blog/article-1" replace />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
