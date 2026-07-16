import { gsap } from '../lib/gsap';
import {
  DURATION_REVEAL,
  DURATION_REVEAL_FAST,
  REVEAL_Y_SUBTLE,
  SCRUB_PARALLAX,
  SCRUB_SMOOTH,
  STAGGER_DEFAULT,
  STAGGER_LOOSE,
  STAGGER_TIGHT,
} from './constants';
import { setupAboutStatsCountUp } from './countUpAnimation';
import { headingSlideReveal, lineDrawReveal } from './headingReveal';
import { forgeFocusReveal, precisionStamp, steelCurtainReveal } from './premiumReveal';
import { revealChildren, revealElement, revealElements, scrubReveal } from './scrollReveal';
import { setupQualitySectionAnimation } from './qualityAnimation';

function setupImageParallax(scope) {
  const SCRUB = 1.2;

  // About image — forward parallax (y moves same direction as scroll, slower)
  const aboutImg = scope.querySelector('.about-image');
  const aboutBox = scope.querySelector('.about-image-container');
  if (aboutImg && aboutBox) {
    gsap.fromTo(aboutImg, { y: '-7%' }, {
      y: '7%', ease: 'none',
      scrollTrigger: { trigger: aboutBox, start: 'top bottom', end: 'bottom top', scrub: SCRUB },
    });
  }

  // Process image — backward parallax (moves against scroll direction)
  const processImg = scope.querySelector('.process-image');
  const processBox = scope.querySelector('.process-image-container');
  if (processImg && processBox) {
    gsap.fromTo(processImg, { y: '7%' }, {
      y: '-7%', ease: 'none',
      scrollTrigger: { trigger: processBox, start: 'top bottom', end: 'bottom top', scrub: SCRUB },
    });
  }

  // Commitment profile — backward parallax
  const commitImg = scope.querySelector('.commitment-profile-img');
  const commitBox = scope.querySelector('.commitment-image-box');
  if (commitImg && commitBox) {
    gsap.fromTo(commitImg, { y: '7%' }, {
      y: '-7%', ease: 'none',
      scrollTrigger: { trigger: commitBox, start: 'top bottom', end: 'bottom top', scrub: SCRUB },
    });
  }

  // Certification image — subtle forward (contain image, pixel-safe)
  const certImg = scope.querySelector('.certification-image');
  const certBox = scope.querySelector('.certification-image-box');
  if (certImg && certBox) {
    gsap.fromTo(certImg, { y: -20 }, {
      y: 20, ease: 'none',
      scrollTrigger: { trigger: certBox, start: 'top bottom', end: 'bottom top', scrub: SCRUB },
    });
  }

  // Why-choose-us banner — subtle forward (contain image, pixel-safe)
  const whyImg = scope.querySelector('.why-choose-us-img');
  const whyBanner = scope.querySelector('.why-choose-us-banner');
  if (whyImg && whyBanner) {
    gsap.fromTo(whyImg, { y: -15 }, {
      y: 15, ease: 'none',
      scrollTrigger: { trigger: whyBanner, start: 'top bottom', end: 'bottom top', scrub: SCRUB },
    });
  }

  // Machinery cards — alternating forward/backward per card
  scope.querySelectorAll('.machinery-card').forEach((card, i) => {
    const img = card.querySelector('.machinery-card-img');
    if (!img) return;
    const dir = i % 2 === 0 ? 1 : -1;
    gsap.fromTo(img, { y: dir * -12 }, {
      y: dir * 12, ease: 'none',
      scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: 1.4 },
    });
  });

  // Hero product — slow downward drift (depth parallax as hero scrolls away)
  const heroProduct = scope.querySelector('.hero-product');
  const heroSection = scope.querySelector('.hero');
  if (heroProduct && heroSection) {
    gsap.fromTo(heroProduct, { y: 0 }, {
      y: 55, ease: 'none',
      scrollTrigger: { trigger: heroSection, start: 'top top', end: 'bottom top', scrub: 1.5 },
    });
  }
}

export function setupScrollAnimations(scope) {

  /* ─────────────────────────────────────────────────────────────────────────
     ① HEADING SLIDE REVEALS (Duten-inspired word-by-word clip reveal)
     ───────────────────────────────────────────────────────────────────────── */
  headingSlideReveal(
    scope.querySelectorAll(
      '.section-title, .product-inner-section-title, .commitment-title, .certification-title, .choose-finish-title, .blog-inner-title, .about-hero-title, .industry-title, .cap-equipment-title'
    ),
    { stagger: 0.06, duration: 0.88, start: 'top 90%' }
  );

  // Section heading wrappers — subtle fade+rise around the title
  revealElements(
    scope.querySelectorAll('.section-heading, .articles-heading'),
    { y: 30, duration: DURATION_REVEAL_FAST }
  );

  /* ─────────────────────────────────────────────────────────────────────────
     ② TEXT REVEALS — body copy, subtitles, meta
     ───────────────────────────────────────────────────────────────────────── */
  revealElements(
    scope.querySelectorAll(
      '.industry-subtitle, .usp-subtitle, .about-text, .quality-subtitle, .commitment-desc, .machinery-desc, .certification-description, .contact-intro-text, .blog-inner-read-meta, .cap-hero-title, .cap-hero-desc, .cap-equipment-desc, .cap-detail-desc, .cap-subhead'
    ),
    { y: REVEAL_Y_SUBTLE, duration: DURATION_REVEAL_FAST }
  );

  revealElements(
    scope.querySelectorAll('.product-detail-grid, .contact-form, .blog-inner-header'),
    { y: 40, duration: DURATION_REVEAL_FAST }
  );

  // Process image & product detail image — only non-conflicting containers
  revealElements(
    scope.querySelectorAll('.process-image-container, .product-detail-image-col'),
    { y: 48, duration: DURATION_REVEAL, scale: 0.97 }
  );

  revealElements(scope.querySelectorAll('.blog-inner-body p, .blog-inner-subtitle'), {
    y: 28,
    duration: DURATION_REVEAL_FAST,
    start: 'top 90%',
  });

  /* ─────────────────────────────────────────────────────────────────────────
     ③ GRIDS & CARDS
     ───────────────────────────────────────────────────────────────────────── */
  setupQualitySectionAnimation(scope);

  const industryGrid = scope.querySelector('#industry .industry-grid');
  if (industryGrid) {
    revealChildren(industryGrid, '.industry-card', { stagger: STAGGER_TIGHT, start: 'top 82%' });
  }

  // USP cards — only the card text/content, icons handled by precisionStamp below
  const uspSection = scope.querySelector('.usp');
  if (uspSection) {
    const uspGrid = uspSection.querySelector('.usp-grid');
    if (uspGrid) {
      // Reveal the title+desc text inside each card (NOT the icon, stamped separately)
      revealChildren(uspGrid, '.usp-title, .usp-desc', { stagger: STAGGER_DEFAULT, start: 'top 82%', y: 24 });
    }
  }

  setupAboutStatsCountUp(scope);

  scope.querySelectorAll('.process-steps').forEach((grid) => {
    revealChildren(grid, '.process-card', { stagger: STAGGER_LOOSE });
  });

  scope.querySelectorAll('.articles-grid').forEach((grid) => {
    revealChildren(grid, '.article-card', { stagger: STAGGER_LOOSE });
  });

  scope.querySelectorAll('.features-grid').forEach((grid) => {
    revealChildren(grid, '.feature-card', { stagger: STAGGER_DEFAULT });
  });

  scope.querySelectorAll('.contact-info-box').forEach((grid) => {
    revealChildren(grid, '.contact-info-col', { stagger: STAGGER_LOOSE });
  });

  const capabilitiesGrid = scope.querySelector('.capabilities-grid');
  if (capabilitiesGrid) {
    revealChildren(capabilitiesGrid, '.capability-card', { stagger: STAGGER_TIGHT });
  }

  const machineryGrid = scope.querySelector('.machinery-grid');
  if (machineryGrid) {
    revealChildren(machineryGrid, '.machinery-card', { stagger: STAGGER_DEFAULT, start: 'top 84%' });
  }

  /* ─────────────────────────────────────────────────────────────────────────
     QUALITY & OEM PAGE SECTIONS
     ───────────────────────────────────────────────────────────────────────── */
  const precisionGrid = scope.querySelector('.precision-standards-grid');
  if (precisionGrid) {
    revealChildren(precisionGrid, '.precision-stat-card', { stagger: STAGGER_TIGHT });
  }
  precisionStamp(scope.querySelectorAll('.precision-stat-icon'), { start: 'top 86%', stagger: 0.09 });

  const inspectionGrid = scope.querySelector('.inspection-process-grid');
  if (inspectionGrid) {
    revealChildren(inspectionGrid, '.inspection-process-card', { stagger: STAGGER_DEFAULT });
  }

  const qualityMachineryGrid = scope.querySelector('.quality-machinery-grid');
  if (qualityMachineryGrid) {
    revealChildren(qualityMachineryGrid, '.quality-machinery-card', { stagger: STAGGER_TIGHT });
  }
  steelCurtainReveal(scope.querySelectorAll('.quality-machinery-image-box'), { start: 'top 90%', duration: 0.8 });

  const oemHeroStats = scope.querySelector('.oem-hero-stats');
  if (oemHeroStats) {
    revealChildren(oemHeroStats, '.oem-hero-stat-card', { stagger: STAGGER_TIGHT });
  }

  const capHeroStats = scope.querySelector('.cap-hero-stats');
  if (capHeroStats) {
    revealChildren(capHeroStats, '.cap-hero-stat-card', { stagger: STAGGER_TIGHT });
  }

  const capEquipmentGrid = scope.querySelector('.cap-equipment-grid');
  if (capEquipmentGrid) {
    revealChildren(capEquipmentGrid, '.cap-equipment-card', { stagger: STAGGER_DEFAULT, start: 'top 84%' });
  }

  scope.querySelectorAll('.cap-feature-grid').forEach((grid) => {
    revealChildren(grid, '.cap-feature-card', { stagger: STAGGER_DEFAULT, start: 'top 86%' });
  });

  scope.querySelectorAll('.cap-steps').forEach((grid) => {
    revealChildren(grid, '.cap-step', { stagger: STAGGER_TIGHT, start: 'top 88%' });
  });

  scope.querySelectorAll('.cap-spectable').forEach((grid) => {
    revealChildren(grid, '.cap-specrow', { stagger: STAGGER_TIGHT, start: 'top 88%' });
  });

  scope.querySelectorAll('.cap-chips').forEach((grid) => {
    revealChildren(grid, '.cap-chip', { stagger: STAGGER_TIGHT, start: 'top 90%' });
  });

  scope.querySelectorAll('.cap-checks').forEach((grid) => {
    revealChildren(grid, '.cap-check', { stagger: STAGGER_TIGHT, start: 'top 88%' });
  });

  const oemBuildGrid = scope.querySelector('.oem-build-to-print-grid');
  if (oemBuildGrid) {
    revealChildren(oemBuildGrid, '.oem-build-to-print-card', { stagger: STAGGER_TIGHT });
  }
  precisionStamp(scope.querySelectorAll('.oem-build-to-print-icon'), { start: 'top 88%', stagger: 0.08 });

  const oemComponentsGrid = scope.querySelector('.oem-custom-components-grid');
  if (oemComponentsGrid) {
    revealChildren(oemComponentsGrid, '.oem-custom-components-card', { stagger: STAGGER_TIGHT });
  }
  steelCurtainReveal(scope.querySelectorAll('.oem-custom-components-image-box'), { start: 'top 90%', duration: 0.8 });

  const oemPrototypeGrid = scope.querySelector('.oem-prototype-grid');
  if (oemPrototypeGrid) {
    revealChildren(oemPrototypeGrid, '.oem-prototype-card', { stagger: STAGGER_DEFAULT });
  }

  const oemEngineeringGrid = scope.querySelector('.oem-engineering-support-grid');
  if (oemEngineeringGrid) {
    revealChildren(oemEngineeringGrid, '.oem-engineering-support-card', { stagger: STAGGER_TIGHT });
  }
  precisionStamp(scope.querySelectorAll('.oem-engineering-support-icon'), { start: 'top 86%', stagger: 0.07 });

  // Why-choose-us items: only title+desc text, icon-box handled by precisionStamp
  const whyGrid = scope.querySelector('.why-choose-us-grid');
  if (whyGrid) {
    revealChildren(whyGrid, '.why-choose-us-item-title, .why-choose-us-item-desc', {
      stagger: STAGGER_TIGHT,
      y: 28,
    });
  }

  const commitmentItems = scope.querySelector('.commitment-items');
  if (commitmentItems) {
    revealChildren(commitmentItems, '.commitment-item', { stagger: STAGGER_DEFAULT, y: 32 });
  }

  // Certification content text only (image-box handled by steelCurtainReveal)
  const certificationWrapper = scope.querySelector('.certification-wrapper');
  if (certificationWrapper) {
    const content = certificationWrapper.querySelector('.certification-content');
    if (content) revealElement(content, { y: 44, start: 'top 84%' });
  }

  setupImageParallax(scope);

  /* ─────────────────────────────────────────────────────────────────────────
     ④ SCRUB REVEALS — scroll-linked parallax (only non-curtain elements)
     ───────────────────────────────────────────────────────────────────────── */
  scrubReveal(scope.querySelector('.choose-finish-showcase'), {
    trigger: scope.querySelector('.choose-finish'),
    y: 72,
    scale: 0.94,
    scrub: SCRUB_SMOOTH,
  });

  scrubReveal(scope.querySelector('.contact-map-wrap'), {
    trigger: scope.querySelector('.contact-map-section'),
    y: 40,
    scrub: SCRUB_SMOOTH,
  });

  const marquee = scope.querySelector('.marquee-section');
  if (marquee) {
    revealElement(marquee, { y: 20, duration: DURATION_REVEAL_FAST, start: 'top 95%' });
  }

  /* ─────────────────────────────────────────────────────────────────────────
     ⑤ PARALLAX BAND
     ───────────────────────────────────────────────────────────────────────── */
  const parallaxSection = scope.querySelector('.parallax-section');
  if (parallaxSection) {
    gsap.to(parallaxSection, {
      backgroundPositionY: '26%',
      ease: 'none',
      scrollTrigger: {
        trigger: parallaxSection,
        start: 'top bottom',
        end: 'bottom top',
        scrub: SCRUB_PARALLAX,
      },
    });

    const parallaxContent = parallaxSection.querySelector('.parallax-content');
    if (parallaxContent) {
      gsap.fromTo(
        parallaxContent,
        { y: 56, scale: 0.97, opacity: 0.6, force3D: true },
        {
          y: -28,
          scale: 1,
          opacity: 1,
          ease: 'none',
          force3D: true,
          scrollTrigger: {
            trigger: parallaxSection,
            start: 'top bottom',
            end: 'bottom top',
            scrub: SCRUB_PARALLAX,
          },
        }
      );
    }
  }

  /* ─────────────────────────────────────────────────────────────────────────
     ⑥ LINE-DRAW REVEALS
     ───────────────────────────────────────────────────────────────────────── */
  lineDrawReveal(
    scope.querySelectorAll('.section-divider, .about-hero-divider, hr.reveal-line')
  );

  /* ═════════════════════════════════════════════════════════════════════════
     PREMIUM JUPITER ANIMATIONS (Duten-inspired, redesigned for Jupiter)
     ═════════════════════════════════════════════════════════════════════════ */

  /* ─────────────────────────────────────────────────────────────────────────
     ⑦ STEEL CURTAIN WIPE
     Red-branded gradient curtain slides off as clip-path opens — "metal plate
     lifting to reveal the product beneath". Applied to cards & hero images.
     ───────────────────────────────────────────────────────────────────────── */

  // Product cards — staggered individually
  scope.querySelectorAll('.products-grid').forEach((grid) => {
    grid.querySelectorAll('.product-card').forEach((card, i) => {
      steelCurtainReveal(card, {
        start: 'top 88%',
        duration: 0.82,
        delay: i * 0.09,
      });
    });
  });

  // Large visual banners & containers
  steelCurtainReveal(
    scope.querySelectorAll(
      '.why-choose-us-banner, .certification-image-box, .commitment-image-box, .about-image-container'
    ),
    { start: 'top 87%', duration: 1.05 }
  );

  /* ─────────────────────────────────────────────────────────────────────────
     ⑧ FORGE FOCUS REVEAL
     Scrubbed: images start blurry + desaturated + warm red-tinted (raw metal)
     and cool into crisp full-color as they enter the viewport.
     ───────────────────────────────────────────────────────────────────────── */
  forgeFocusReveal(
    scope.querySelectorAll('.machinery-img'),
    { start: 'top 95%', end: 'top 38%', scrub: 1.6 }
  );

  /* ─────────────────────────────────────────────────────────────────────────
     ⑨ PRECISION STAMP
     Icons scale+rotate in from 0 with elastic spring + red glow flash at
     "landing" — mechanical stamping feel, perfect for precision brand identity.
     ───────────────────────────────────────────────────────────────────────── */

  // USP icons
  scope.querySelectorAll('.usp-grid').forEach((grid) => {
    const icons = [...grid.querySelectorAll('.usp-icon')];
    if (icons.length) {
      precisionStamp(icons, { start: 'top 84%', stagger: 0.09, duration: 0.88 });
    }
  });

  // Stat values in the USP bar
  scope.querySelectorAll('.usp-stats-content').forEach((bar) => {
    const vals = [...bar.querySelectorAll('.usp-stat-value')];
    if (vals.length) {
      precisionStamp(vals, { start: 'top 86%', stagger: 0.12, duration: 0.92 });
    }
  });

  // Why-choose-us icon boxes — staggered across the grid
  const allIconBoxes = [...scope.querySelectorAll('.why-choose-us-icon-box')];
  if (allIconBoxes.length) {
    precisionStamp(allIconBoxes, { start: 'top 86%', stagger: 0.07, duration: 0.78 });
  }
}
