import React from 'react';
import SEO from '../components/SEO';
import QualityHero from '../components/QualityHero';
import QualityPolicy from '../components/QualityPolicy';
import QualityCertification from '../components/QualityCertification';
import PrecisionStandards from '../components/PrecisionStandards';
import QualityInspectionProcess from '../components/QualityInspectionProcess';
import QualityMachinery from '../components/QualityMachinery';

const QualityPage = () => {
  return (
    <>
      <SEO
        title="Quality"
        description="Discover Jupiter Meta Mech's commitment to quality — precision-engineered brass components manufactured under strict quality control since 1994."
        path="/quality"
      />
      <QualityHero />
      <QualityPolicy />
      <QualityCertification />
      <PrecisionStandards />
      <QualityInspectionProcess />
      <QualityMachinery />
    </>
  );
};

export default QualityPage;
