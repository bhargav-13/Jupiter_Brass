import React, { useState } from 'react';
import './ChooseFinish.css';

const finishes = [
  { id: 'brass',  label: 'Brass',        swatchClass: 'finish-swatch--brass' },
  { id: 'chrome', label: 'Chrome',       swatchClass: 'finish-swatch--chrome' },
  { id: 'satin',  label: 'Satin Silver', swatchClass: 'finish-swatch--satin' },
  { id: 'dark',   label: 'Dark Antique', swatchClass: 'finish-swatch--dark' },
];

const ChooseFinish = () => {
  const [activeFinish, setActiveFinish] = useState('brass');

  return (
    <section id="choose-finish" className="section choose-finish">
      <div className="container">
        {/* Header row */}
        <div className="choose-finish-header">
          <h2 className="choose-finish-title">Choose Your Finish</h2>

          <div className="finish-swatches" role="radiogroup" aria-label="Select a metal finish">
            {finishes.map((f) => (
              <button
                key={f.id}
                className={`finish-swatch ${f.swatchClass} ${activeFinish === f.id ? 'active' : ''}`}
                onClick={() => setActiveFinish(f.id)}
                aria-label={f.label}
                aria-checked={activeFinish === f.id}
                role="radio"
                title={f.label}
              />
            ))}
          </div>
        </div>

        {/* Showcase */}
        <div className="choose-finish-showcase">
          <span className="choose-finish-bg-text" aria-hidden="true">BRASS</span>

          <img
            src="/images/brass.png"
            alt="Precision brass components"
            className={`choose-finish-image finish-${activeFinish}`}
          />
        </div>
      </div>
    </section>
  );
};

export default ChooseFinish;
