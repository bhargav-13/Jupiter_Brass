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

export function setupScrollAnimations(scope) {

  /* ─────────────────────────────────────────────────────────────────────────
     ① HEADING SLIDE REVEALS (Duten-inspired word-by-word clip reveal)
     ───────────────────────────────────────────────────────────────────────── */
  headingSlideReveal(
    scope.querySelectorAll(
      '.section-title, .product-inner-section-title, .commitment-title, .certification-title, .choose-finish-title, .blog-inner-title, .about-hero-title, .industry-title'
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
      '.industry-subtitle, .usp-subtitle, .about-text, .quality-subtitle, .commitment-desc, .machinery-desc, .certification-description, .contact-intro-text, .blog-inner-read-meta'
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
