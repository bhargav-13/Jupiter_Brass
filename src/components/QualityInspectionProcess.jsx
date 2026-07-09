import React from 'react';
import './QualityInspectionProcess.css';

const stages = [
  {
    number: '01',
    stage: 'Stage 01',
    title: 'Incoming Inspection',
    items: [
      'Raw material verification',
      'Material certification review',
      'Visual inspection',
      'Dimensional verification',
    ],
    note: 'No material enters production without passing incoming inspection.',
  },
  {
    number: '02',
    stage: 'Stage 02',
    title: 'In-Process Inspection',
    items: [
      'First piece approval',
      'Process monitoring',
      'Dimensional inspection',
      'Thread verification',
      'Surface finish inspection',
    ],
    note: 'Continuous monitoring throughout every machining stage.',
  },
  {
    number: '03',
    stage: 'Stage 03',
    title: 'Final Inspection',
    items: ['Dimensions', 'Threads', 'Surface finish', 'Visual appearance'],
    note: 'Only approved lots proceed to packing and shipment.',
  },
];

const QualityInspectionProcess = () => {
  return (
    <section id="quality-inspection-process" className="section quality-inspection-process">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Quality Inspection Process</h2>
        </div>

        <div className="inspection-process-grid">
          {stages.map((s) => (
            <div className="inspection-process-card" key={s.number}>
              <div className="inspection-process-card-header">
                <span className="inspection-process-stage">{s.stage}</span>
                <span className="inspection-process-number">{s.number}</span>
              </div>
              <h3 className="inspection-process-title">{s.title}</h3>
              <div className="inspection-process-divider" />
              <ul className="inspection-process-list">
                {s.items.map((item, i) => (
                  <li key={i}>
                    <span className="inspection-process-checkbox">
                      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M3.5 8.5L6.5 11.5L12.5 4.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="inspection-process-divider" />
              <p className="inspection-process-note">{s.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityInspectionProcess;
