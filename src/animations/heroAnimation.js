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

  if (description) {
    tl.from(description, {
      y: 44,
      opacity: 0,
      filter: revealBlur('blur(6px)'),
      duration: DURATION_REVEAL,
    });
  }

  if (title) {
    tl.from(
      title,
      {
        y: 64,
        opacity: 0,
        filter: revealBlur('blur(8px)'),
        duration: 1.2,
      },
      description ? '-=0.58' : 0
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
