import { gsap } from '../lib/gsap';
import { revealBlur } from '../lib/motion';
import { DURATION_REVEAL_FAST, EASE_PREMIUM, STAGGER_TIGHT } from './constants';
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
        defaults: { ease: EASE_PREMIUM, force3D: true },
        onComplete: () => gsap.set(targets, { clearProps: 'transform,opacity,filter' }),
      });

      if (highlight) {
        tl.fromTo(
          highlight,
          { x: -48, opacity: 0, filter: revealBlur('blur(6px)') },
          {
            x: 0,
            opacity: 1,
            filter: revealBlur('blur(0px)'),
            duration: DURATION_REVEAL_FAST,
          }
        );
      }

      if (points.length) {
        tl.fromTo(
          points,
          { y: 40, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: DURATION_REVEAL_FAST,
            stagger: STAGGER_TIGHT,
          },
          highlight ? '-=0.55' : 0
        );
      }

      if (circle) {
        tl.fromTo(
          circle,
          { scale: 0.6, opacity: 0, rotation: -12 },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 0.72,
            ease: 'back.out(1.5)',
          },
          '-=0.42'
        );
      }
    },
  });
}
