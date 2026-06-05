import { gsap } from '../lib/gsap';
import { revealBlur } from '../lib/motion';
import {
  DURATION_REVEAL,
  DURATION_REVEAL_FAST,
  EASE_ENTER,
  EASE_PREMIUM,
  EASE_SMOOTH,
  STAGGER_DEFAULT,
} from './constants';
import { headingSlideReveal } from './headingReveal';

export function setupHeroAnimation(scope) {
  const tl = gsap.timeline({
    defaults: { ease: EASE_PREMIUM, force3D: true },
  });

  const description = scope.querySelector('.hero-description');
  const title = scope.querySelector('.hero-title');
  const premium = scope.querySelectorAll('.premium-text');
  const tagline = scope.querySelector('.hero-tagline');
  const bgLogo = scope.querySelector('.hero-bg-logo');
  const product = scope.querySelector('.hero-product');

  // Description fades in first
  if (description) {
    tl.from(description, {
      y: 36,
      opacity: 0,
      filter: revealBlur('blur(6px)'),
      duration: DURATION_REVEAL,
    });
  }

  // Hero title: Duten-style word-by-word clip reveal
  if (title) {
    // Split title into word-mask spans
    const words = title.textContent.trim().split(/\s+/);
    title.innerHTML = words
      .map(
        (w) => `<span class="lg-word-mask"><span class="lg-word-inner">${w}</span></span>`
      )
      .join(' ');

    const inners = title.querySelectorAll('.lg-word-inner');
    gsap.set(inners, { yPercent: 110, force3D: true });

    tl.to(
      inners,
      {
        yPercent: 0,
        duration: 0.92,
        ease: EASE_ENTER,
        stagger: 0.055,
        force3D: true,
        onComplete: () => gsap.set(inners, { clearProps: 'transform' }),
      },
      description ? '-=0.52' : 0
    );
  }

  if (premium.length) {
    tl.from(
      premium,
      { y: 32, opacity: 0, duration: DURATION_REVEAL_FAST, stagger: STAGGER_DEFAULT },
      '-=0.68'
    );
  }

  if (tagline) {
    tl.from(tagline, { y: 26, opacity: 0, duration: DURATION_REVEAL_FAST }, '-=0.48');
  }

  if (bgLogo) {
    tl.from(
      bgLogo,
      { opacity: 0, scale: 0.88, duration: 1.35, ease: EASE_SMOOTH },
      '-=0.55'
    );
  }

  if (product) {
    tl.from(
      product,
      {
        y: 56,
        opacity: 0,
        scale: 0.9,
        duration: 1.4,
        ease: EASE_ENTER,
      },
      '-=1.05'
    );
  }
}
