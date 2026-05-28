import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Quality from '../components/Quality';
import Process from '../components/Process';
import Industry from '../components/Industry';
import USP from '../components/USP';
import Marquee from '../components/Marquee';
import ParallaxSection from '../components/ParallaxSection';
import Articles from '../components/Articles';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Quality />
      <Process />
      <Industry />
      <USP />
      <Marquee />
      <ParallaxSection />
      <Articles />
    </>
  );
};

export default Home;
