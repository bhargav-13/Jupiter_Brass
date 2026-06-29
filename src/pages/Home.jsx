import React from 'react';
import SEO from '../components/SEO';
import { SITE_NAME, SITE_URL } from '../lib/seo';
import StructuredData from '../components/StructuredData';
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

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  alternateName: 'Jupiter Brass Industries',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description:
    'Manufacturer of precision-engineered brass components for electrical, plumbing, automotive, engineering, telecommunications, hardware, and renewable energy industries.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'RAW Type 84/1, G.I.D.C., Shanker Tekri, Udyognagar',
    addressLocality: 'Jamnagar',
    addressRegion: 'Gujarat',
    postalCode: '361004',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-94292-69395',
    contactType: 'sales',
    email: 'info@jupiterbrass.com',
  },
};

const Home = () => {
  return (
    <>
      <SEO
        title="Precision Engineered Brass Components Manufacturer"
        description="Jupiter Meta Mech manufactures high-precision brass components for electrical, plumbing, automotive, engineering, telecommunications, hardware, and renewable energy industries from Jamnagar, India."
        path="/"
      />
      <StructuredData id="organization" data={organizationSchema} />
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
