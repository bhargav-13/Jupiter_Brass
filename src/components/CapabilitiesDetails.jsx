import React from 'react';
import './CapabilitiesDetails.css';

/* ---------- Inline icons (stroke = currentColor) ---------- */
const IconBuilding = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 21h18" /><path d="M6 21V5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v16" />
    <path d="M15 21V9a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v12" />
    <path d="M9 7h.01M9 11h.01M9 15h.01" />
  </svg>
);
const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const IconTrend = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 17l6-6 4 4 8-8" /><path d="M17 7h4v4" />
  </svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/* ---------- Layout helpers (standard site section header) ---------- */
const Block = ({ soft = false, children }) => (
  <section className={`section cap-block${soft ? ' cap-block--soft' : ''}`}>
    <div className="container">{children}</div>
  </section>
);

const Head = ({ title, desc }) => (
  <div className="section-heading">
    <h2 className="section-title">{title}</h2>
    {desc && <p className="cap-detail-desc">{desc}</p>}
  </div>
);

/* Feature cards — icon + title + desc (facility, value-added) */
const FeatureGrid = ({ items, cols }) => (
  <div className={`cap-feature-grid${cols === 4 ? ' cap-feature-grid--4' : ''}`}>
    {items.map((card) => (
      <div className="cap-feature-card" key={card.title}>
        {card.icon && <span className="cap-feature-icon">{card.icon}</span>}
        <h3 className="cap-feature-title">{card.title}</h3>
        <p className="cap-feature-desc">{card.desc}</p>
      </div>
    ))}
  </div>
);

/* Numbered editorial list — index + label (processes, engineering) */
const NumberedList = ({ items }) => (
  <div className="cap-steps">
    {items.map((item, i) => (
      <div className="cap-step" key={item}>
        <span className="cap-step-index">{String(i + 1).padStart(2, '0')}</span>
        <span className="cap-step-label">{item}</span>
      </div>
    ))}
  </div>
);

/* Spec table — label / value rows (component size, production capacity) */
const SpecTable = ({ specs }) => (
  <div className="cap-spectable">
    {specs.map((spec) => (
      <div className="cap-specrow" key={spec.label}>
        <span className="cap-specrow-label">{spec.label}</span>
        <span className="cap-specrow-value">{spec.value}</span>
      </div>
    ))}
  </div>
);

/* Chip cloud — compact pills (materials, threads, surface, workforce, export) */
const ChipCloud = ({ items, badge = false }) => (
  <div className={`cap-chips${badge ? ' cap-chips--badge' : ''}`}>
    {items.map((item) => (
      <span className="cap-chip" key={item}>{item}</span>
    ))}
  </div>
);

/* Checklist — red check marks (why choose us, active supply) */
const CheckList = ({ items }) => (
  <div className="cap-checks">
    {items.map((item) => (
      <div className="cap-check" key={item}>
        <span className="cap-check-mark"><IconCheck /></span>
        <span className="cap-check-label">{item}</span>
      </div>
    ))}
  </div>
);

/* ---------- Content ---------- */
const facilityCards = [
  { icon: <IconBuilding />, title: 'Modern Facility', desc: 'Expanding from 2,500 to 8,500 Sq. Ft. — designed for improved workflow efficiency, production flexibility, and quality control.' },
  { icon: <IconPin />, title: 'Jamnagar Hub', desc: "Located in one of the world's largest brass manufacturing hubs, giving us access to premium raw materials and skilled talent." },
  { icon: <IconTrend />, title: 'Future-Ready', desc: 'The upgraded facility is built for scalability — enabling future expansion to meet growing domestic and international demand.' },
];

const processes = [
  'CNC Turning', 'Precision Turning', 'Facing', 'Drilling', 'Boring', 'Thread Cutting',
  'Internal & External Threading', 'Tapping', 'Knurling', 'Slotting', 'Milling (Special-Purpose)',
  'Deburring', 'Grinding', 'Polishing', 'Lapping', 'Assembly', 'Laser Marking',
];

const componentSizeSpecs = [
  { label: 'Diameter Range', value: 'Ø5 mm – Ø165 mm' },
  { label: 'Maximum Length', value: 'Up to 200 mm' },
  { label: 'Machining Accuracy', value: 'Up to ±0.05 mm' },
];

const productionCapacitySpecs = [
  { label: 'Monthly Output', value: '~50,000 Components' },
  { label: 'Prototype Quantities', value: 'Available' },
  { label: 'Urgent Scheduling', value: 'Flexible' },
  { label: 'OEM Programs', value: 'Scalable' },
];

const materials = ['Brass', 'Copper', 'Stainless Steel', 'Mild Steel', 'Aluminum', 'Customer-Specified Alloys'];

const threads = ['BSP', 'BSPT', 'NPT', 'Metric', 'UNC', 'UNF', 'Customer-Specific Profiles'];

const mechanicalFinishes = ['Grinding', 'Polishing', 'Lapping'];
const coatings = [
  'Nickel Plating', 'Chrome Plating', 'Zinc Plating', 'Tin Plating', 'Copper Plating',
  'Gold Plating', 'Silver Plating', 'Yellow Passivation', 'Blackening',
];

const valueAdded = [
  { title: 'Brass Forging', desc: 'Forged brass components for high-strength applications.' },
  { title: 'Brass Casting', desc: 'Precision casting for complex geometries and shapes.' },
  { title: 'Assembly', desc: 'Sub-assembly and full assembly services under one roof.' },
  { title: 'Laser Marking', desc: 'Permanent identification and traceability marking.' },
  { title: 'Prototype Development', desc: 'Rapid prototype manufacturing for design validation.' },
  { title: 'Custom Engineering', desc: 'Build-to-print and reverse engineering from samples.' },
  { title: 'Customer Packaging', desc: 'Customer-specific packaging solutions for every shipment.' },
  { title: 'Reverse Engineering', desc: 'Manufacture from physical samples with precision accuracy.' },
];

const engineeringSupport = [
  'Prototype Development', 'Design Review', 'Manufacturing Feasibility', 'Material Selection',
  'Process Optimization', 'Cost Reduction Suggestions', 'Production Planning',
];

const workforce = ['Management', 'Administration', 'Sales & Marketing', 'Purchase', 'Quality Engineering', 'Production', 'Packing & Dispatch'];

const exportPackaging = [
  'Sea-Worthy Packaging', 'Air-Worthy Packaging', 'Corrugated Box Packaging',
  'Plastic Protective Packaging', 'Pallet Packaging', 'Customer-Specific Solutions',
];
const tradeTerms = ['FOB', 'CIF', 'EXW', 'DDP'];
const activeSupply = ['Active supply to USA', 'Active supply to Europe', 'Active supply to Middle East'];

const whyChoose = [
  'Over 30 Years of Manufacturing Experience', 'Modern CNC Machining Infrastructure',
  '8 CNC Machines & 20 Special Purpose Machines', 'Precision Machining up to ±0.05 mm',
  'Flexible Production Capacity', 'Prototype to Mass Production', 'Multiple Material Capabilities',
  'Wide Thread Standards Support', 'Complete Secondary Operations', 'Integrated Value-Added Services',
  'Export-Oriented Manufacturing', 'ISO 9001:2015 Certified Quality System',
];

const CapabilitiesDetails = () => {
  return (
    <>
      <Block>
        <Head
          title="Manufacturing Facility"
          desc="Strategically located in Jamnagar, Gujarat — one of the world's largest hubs for brass component manufacturing. We are expanding into a modern 8,500 Sq. Ft. facility, significantly increasing our production capacity for domestic and international markets."
        />
        <FeatureGrid items={facilityCards} />
      </Block>

      <Block soft>
        <Head
          title="Manufacturing Capabilities"
          desc="From simple turned parts to complex CNC components. Every manufacturing process is planned to achieve high accuracy, repeatability, and consistent product quality."
        />
        <NumberedList items={processes} />
      </Block>

      <Block>
        <Head
          title="Component Size Capability"
          desc="Our facility produces components in a wide range of sizes to meet diverse industrial applications — from miniature precision parts to larger engineering components."
        />
        <SpecTable specs={componentSizeSpecs} />
      </Block>

      <Block soft>
        <Head
          title="Production Capacity"
          desc="Our flexible production system handles both low-volume and high-volume manufacturing requirements — from prototypes to recurring OEM programs."
        />
        <SpecTable specs={productionCapacitySpecs} />
      </Block>

      <Block>
        <Head
          title="Materials We Machine"
          desc="Material selection is based on customer drawings, technical specifications, and application requirements."
        />
        <ChipCloud items={materials} />
      </Block>

      <Block soft>
        <Head
          title="Thread Manufacturing"
          desc="International thread standards, plus custom thread forms manufactured according to engineering drawings and customer-specific requirements."
        />
        <ChipCloud items={threads} badge />
      </Block>

      <Block>
        <Head
          title="Surface Finishing"
          desc="Complete finishing capabilities that improve corrosion resistance, appearance, wear resistance, and application-specific performance."
        />
        <h3 className="cap-subhead">Mechanical Finishes</h3>
        <ChipCloud items={mechanicalFinishes} />
        <h3 className="cap-subhead">Surface Treatments &amp; Coatings</h3>
        <ChipCloud items={coatings} />
      </Block>

      <Block soft>
        <Head
          title="Value-Added Services"
          desc="Complete manufacturing under one roof. By integrating multiple processes, we help customers reduce lead times and streamline their supply chain."
        />
        <FeatureGrid items={valueAdded} cols={4} />
      </Block>

      <Block>
        <Head
          title="Engineering Support"
          desc="A collaborative engineering partnership — our team works with customers at every stage to balance performance, quality, and manufacturing cost."
        />
        <NumberedList items={engineeringSupport} />
      </Block>

      <Block soft>
        <Head
          title="Skilled Workforce"
          desc="30+ skilled production personnel — a dedicated team committed to manufacturing excellence, supported by quality engineers and experienced management."
        />
        <ChipCloud items={workforce} />
      </Block>

      <Block>
        <Head
          title="Export-Ready Manufacturing"
          desc="Built for global supply. We serve customers across the USA, Europe, and the Middle East with smooth logistics, dependable documentation, and timely deliveries."
        />
        <h3 className="cap-subhead">Export Packaging Options</h3>
        <ChipCloud items={exportPackaging} />
        <h3 className="cap-subhead">Supported Trade Terms</h3>
        <ChipCloud items={tradeTerms} badge />
        <h3 className="cap-subhead">Active Global Supply</h3>
        <CheckList items={activeSupply} />
      </Block>

      <Block soft>
        <Head
          title="Why Choose Us"
          desc="Partnering with a manufacturer focused on precision, flexibility, and long-term reliability."
        />
        <CheckList items={whyChoose} />
      </Block>
    </>
  );
};

export default CapabilitiesDetails;
