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
import { revealChildren, revealElement, revealElements, scrubReveal } from './scrollReveal';
import { setupQualitySectionAnimation } from './qualityAnimation';

export function setupScrollAnimations(scope) {
  /* ── Headings & lead copy ── */
  revealElements(
    scope.querySelectorAll(
      '.section-heading, .articles-heading, .product-inner-section-title, .commitment-title, .certification-title, .choose-finish-title, .blog-inner-title'
    ),
    { y: 44, duration: DURATION_REVEAL_FAST }
  );

  revealElements(
    scope.querySelectorAll(
      '.industry-subtitle, .usp-subtitle, .about-text, .quality-subtitle, .commitment-desc, .machinery-desc, .certification-description, .contact-intro-text, .blog-inner-read-meta'
    ),
    { y: REVEAL_Y_SUBTLE, duration: DURATION_REVEAL_FAST }
  );

  revealElements(scope.querySelectorAll('.product-detail-grid, .contact-form, .blog-inner-header'), {
    y: 40,
    duration: DURATION_REVEAL_FAST,
  });

  revealElements(
    scope.querySelectorAll('.about-image-container, .process-image-container, .product-detail-image-col'),
    { y: 48, duration: DURATION_REVEAL, scale: 0.97 }
  );

  revealElements(scope.querySelectorAll('.blog-inner-body p, .blog-inner-subtitle'), {
    y: 28,
    duration: DURATION_REVEAL_FAST,
    start: 'top 90%',
  });

  /* ── Grids & cards ── */
  setupQualitySectionAnimation(scope);

  const industryGrid = scope.querySelector('#industry .industry-grid');
  if (industryGrid) {
    revealChildren(industryGrid, '.industry-card', { stagger: STAGGER_TIGHT, start: 'top 82%' });
  }

  const uspSection = scope.querySelector('.usp');
  if (uspSection) {
    const uspGrid = uspSection.querySelector('.usp-grid');
    const statsContent = uspSection.querySelector('.usp-stats-content');

    if (uspGrid) {
      revealChildren(uspGrid, '.usp-card', { stagger: STAGGER_DEFAULT, start: 'top 82%' });
    }
    if (statsContent) {
      revealChildren(statsContent, '.usp-stat', { stagger: STAGGER_LOOSE, start: 'top 85%' });
    }
  }

  scope.querySelectorAll('.products-grid').forEach((grid) => {
    revealChildren(grid, '.product-card', { stagger: STAGGER_LOOSE });
  });

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

  const whyGrid = scope.querySelector('.why-choose-us-grid');
  if (whyGrid) {
    revealChildren(whyGrid, '.why-choose-us-item', { stagger: STAGGER_TIGHT, y: 40 });
  }

  const commitmentItems = scope.querySelector('.commitment-items');
  if (commitmentItems) {
    revealChildren(commitmentItems, '.commitment-item', { stagger: STAGGER_DEFAULT, y: 32 });
  }

  const certificationWrapper = scope.querySelector('.certification-wrapper');
  if (certificationWrapper) {
    const content = certificationWrapper.querySelector('.certification-content');
    const imageBox = certificationWrapper.querySelector('.certification-image-box');
    if (content) revealElement(content, { y: 44, start: 'top 84%' });
    if (imageBox) revealElement(imageBox, { y: 48, scale: 0.96, start: 'top 84%' });
  }

  /* ── Large visuals (scrub = premium scroll link) ── */
  scrubReveal(scope.querySelector('.why-choose-us-banner'), {
    trigger: scope.querySelector('.why-choose-us'),
    y: 56,
    scrub: SCRUB_SMOOTH,
  });

  scrubReveal(scope.querySelector('.commitment-image-box'), {
    trigger: scope.querySelector('.commitment-wrapper'),
    y: 64,
    scrub: SCRUB_SMOOTH,
  });

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

  /* ── Parallax band ── */
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
}
