import React from 'react';
import SEO from '../components/SEO';
import CapabilitiesHero from '../components/CapabilitiesHero';
import CapabilitiesEquipment from '../components/CapabilitiesEquipment';
import CapabilitiesDetails from '../components/CapabilitiesDetails';

const CapabilitiesPage = () => {
  return (
    <>
      <SEO
        title="Capabilities"
        description="Advanced manufacturing infrastructure for precision engineering — Jupiter Brass Industries combines 32+ years of experience with modern CNC technology and skilled workmanship."
        path="/capabilities"
      />
      <CapabilitiesHero />
      <CapabilitiesEquipment />
      <CapabilitiesDetails />
    </>
  );
};

export default CapabilitiesPage;
