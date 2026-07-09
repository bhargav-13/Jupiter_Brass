import React from 'react';
import SEO from '../components/SEO';
import OEMHero from '../components/OEMHero';
import OEMBuildToPrint from '../components/OEMBuildToPrint';
import OEMCustomComponents from '../components/OEMCustomComponents';
import OEMPrototypeToProduction from '../components/OEMPrototypeToProduction';
import OEMEngineeringSupport from '../components/OEMEngineeringSupport';
import ParallaxSection from '../components/ParallaxSection';

const OEMPage = () => {
  return (
    <>
      <SEO
        title="OEM Manufacturing"
        description="Jupiter Brass Industries delivers complete OEM manufacturing solutions — precision-engineered brass and metal components built exactly to your drawings and specifications."
        path="/oem-manufacturing"
      />
      <OEMHero />
      <OEMBuildToPrint />
      <OEMCustomComponents />
      <OEMPrototypeToProduction />
      <OEMEngineeringSupport />
      <ParallaxSection />
    </>
  );
};

export default OEMPage;
