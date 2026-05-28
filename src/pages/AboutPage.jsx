import React from 'react';
import AboutHero from '../components/AboutHero';
import AboutCapabilities from '../components/AboutCapabilities';
import WhyChooseUs from '../components/WhyChooseUs';
import Machinery from '../components/Machinery';
import ChooseFinish from '../components/ChooseFinish';
import Certification from '../components/Certification';
import ParallaxSection from '../components/ParallaxSection';
import Commitment from '../components/Commitment';

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <AboutCapabilities />
      <WhyChooseUs />
      <Machinery />
      <ChooseFinish />
      <Certification />
      <ParallaxSection />
      <Commitment />
    </>
  );
};

export default AboutPage;
