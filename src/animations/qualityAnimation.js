import { gsap } from '../lib/gsap';
import { EASE_PREMIUM } from './constants';
import { onScrollReveal } from './scrollReveal';

export function setupQualitySectionAnimation(scope) {
  const grid = scope.querySelector('#quality .quality-grid');
  if (!grid) return;

  const highlight = grid.querySelector('.quality-highlight');
  const points = grid.querySelectorAll('.q-point');
  const circle = scope.querySelector('#quality .quality-circle');
  const targets = [highlight, ...points, circle].filter(Boolean);

  onScrollReveal({
    trigger: grid,
    start: 'top 82%',
    play: () => {
      const tl = gsap.timeline({
        defaults: { ease: EASE_PREMIUM },
        onComplete: () => gsap.set(targets, { clearProps: 'transform,opacity' }),
      });

      if (highlight) {
        tl.fromTo(
          highlight,
          { x: -40, opacity: 0, filter: 'blur(4px)' },
          { x: 0, opacity: 1, filter: 'blur(0px)', duration: 0.95 }
        );
      }
      if (points.length) {
        tl.fromTo(
          points,
          { y: 36, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.08 },
          highlight ? '-=0.6' : 0
        );
      }
      if (circle) {
        tl.fromTo(
          circle,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.55, ease: 'back.out(1.6)' },
          '-=0.4'
        );
      }
    },
  });
}
