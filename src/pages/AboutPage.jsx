import React from 'react';
import SEO from '../components/SEO';
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
      <SEO
        title="About Us"
        description="Learn about Jupiter Brass Industries' manufacturing capabilities, machinery, finishes, certifications, and commitment to delivering durable, precision-machined brass components."
        path="/about"
      />
      <Commitment />
      <AboutCapabilities />
      <WhyChooseUs />
      {/* <Machinery /> */}
      <AboutHero />
      <ChooseFinish />
      <Certification />
      <ParallaxSection />
    </>
  );
};

export default AboutPage;
