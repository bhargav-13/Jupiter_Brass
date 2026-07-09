import React from 'react';
import './OEMBuildToPrint.css';

const icons = {
  file: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 2h8l4 4v16H6V2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 2v4h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  cube: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2l8 4.5v11L12 22l-8-4.5v-11L12 2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M4 6.5L12 11l8-4.5M12 11v11" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  pdf: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 2h8l4 4v16H6V2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 2v4h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 17v-4h1.2a1 1 0 010 2H9m4 2v-4h1.5m-1.5 2h1.2m2.3 2v-4h1.3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  image: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M21 16l-5.5-5.5a1.5 1.5 0 00-2.12 0L3 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  chip: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="10" y="10" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
};

const formats = [
  { label: '2D Technical Drawings', icon: 'file' },
  { label: '3D CAD Models', icon: 'cube' },
  { label: 'STEP Files', icon: 'file' },
  { label: 'PDF Drawings', icon: 'pdf' },
  { label: 'JPEG Files', icon: 'image' },
  { label: 'Physical Samples', icon: 'chip' },
];

const OEMBuildToPrint = () => {
  return (
    <section className="section oem-build-to-print">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Complete Build-To-Print Manufacturing</h2>
        </div>

        <div className="oem-build-to-print-grid">
          {formats.map((format, i) => (
            <div className="oem-build-to-print-card" key={i}>
              <span className="oem-build-to-print-icon">{icons[format.icon]}</span>
              <span className="oem-build-to-print-label">{format.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OEMBuildToPrint;
