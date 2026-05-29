import { gsap } from '../lib/gsap';
import { EASE_ENTER, EASE_PREMIUM, EASE_SMOOTH } from './constants';

export function setupHeroAnimation(scope) {
  const tl = gsap.timeline({ defaults: { ease: EASE_PREMIUM } });
  const description = scope.querySelector('.hero-description');
  const title = scope.querySelector('.hero-title');
  const premium = scope.querySelectorAll('.premium-text');
  const tagline = scope.querySelector('.hero-tagline');
  const bgLogo = scope.querySelector('.hero-bg-logo');
  const product = scope.querySelector('.hero-product');

  if (description) {
    tl.from(description, { y: 40, opacity: 0, filter: 'blur(4px)', duration: 0.95 });
  }
  if (title) {
    tl.from(
      title,
      { y: 56, opacity: 0, filter: 'blur(6px)', duration: 1.15 },
      description ? '-=0.55' : 0
    );
  }
  if (premium.length) {
    tl.from(
      premium,
      { y: 28, opacity: 0, duration: 0.7, stagger: 0.12 },
      '-=0.65'
    );
  }
  if (tagline) {
    tl.from(tagline, { y: 22, opacity: 0, duration: 0.75 }, '-=0.45');
  }
  if (bgLogo) {
    tl.from(bgLogo, { opacity: 0, scale: 0.9, duration: 1.25, ease: EASE_SMOOTH }, '-=0.5');
  }
  if (product) {
    tl.from(
      product,
      { y: 48, opacity: 0, scale: 0.92, duration: 1.35, ease: EASE_ENTER },
      '-=1'
    );
  }
}
