import { gsap } from '../lib/gsap';
import { setupAboutStatsCountUp } from './countUpAnimation';
import { revealElements, revealChildren } from './scrollReveal';
import { setupQualitySectionAnimation } from './qualityAnimation';

export function setupScrollAnimations(scope) {
  revealElements(scope.querySelectorAll('.section-heading, .articles-heading, .product-inner-section-title'), {
    y: 40,
    duration: 0.8,
  });

  revealElements(scope.querySelectorAll('.industry-subtitle, .usp-subtitle, .about-text, .quality-subtitle'), {
    y: 32,
    duration: 0.75,
  });

  revealElements(scope.querySelectorAll('.product-detail-grid, .contact-form'), {
    y: 36,
    duration: 0.8,
  });

  revealElements(scope.querySelectorAll('.about-image-container, .process-image-container'), {
    y: 44,
    duration: 0.9,
  });

  setupQualitySectionAnimation(scope);

  const industryGrid = scope.querySelector('#industry .industry-grid');
  if (industryGrid) {
    revealChildren(industryGrid, '.industry-card', { stagger: 0.07, start: 'top 82%' });
  }

  const uspSection = scope.querySelector('.usp');
  if (uspSection) {
    const uspGrid = uspSection.querySelector('.usp-grid');
    const statsContent = uspSection.querySelector('.usp-stats-content');

    if (uspGrid) {
      revealChildren(uspGrid, '.usp-card', { stagger: 0.1, start: 'top 82%' });
    }
    if (statsContent) {
      revealChildren(statsContent, '.usp-stat', { stagger: 0.12, start: 'top 85%' });
    }
  }

  scope.querySelectorAll('.products-grid').forEach((grid) => {
    revealChildren(grid, '.product-card', { stagger: 0.12 });
  });

  setupAboutStatsCountUp(scope);

  scope.querySelectorAll('.process-steps').forEach((grid) => {
    revealChildren(grid, '.process-card', { stagger: 0.14 });
  });

  scope.querySelectorAll('.articles-grid').forEach((grid) => {
    revealChildren(grid, '.article-card', { stagger: 0.15 });
  });

  scope.querySelectorAll('.features-grid').forEach((grid) => {
    revealChildren(grid, '.feature-card', { stagger: 0.1 });
  });

  scope.querySelectorAll('.contact-info-box').forEach((grid) => {
    revealChildren(grid, '.contact-info-col', { stagger: 0.14 });
  });

  const parallaxSection = scope.querySelector('.parallax-section');
  if (parallaxSection) {
    gsap.to(parallaxSection, {
      backgroundPositionY: '28%',
      ease: 'none',
      scrollTrigger: {
        trigger: parallaxSection,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2,
      },
    });

    const parallaxContent = parallaxSection.querySelector('.parallax-content');
    if (parallaxContent) {
      gsap.fromTo(
        parallaxContent,
        { y: 40, scale: 0.98 },
        {
          y: -20,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: parallaxSection,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        }
      );
    }
  }
}
