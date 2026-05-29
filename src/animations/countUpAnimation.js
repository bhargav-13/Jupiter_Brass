import { gsap } from '../lib/gsap';
import { EASE_PREMIUM, EASE_SMOOTH } from './constants';
import { onScrollReveal } from './scrollReveal';

export function setupAboutStatsCountUp(scope) {
  const statsGrid = scope.querySelector('.about-stats');
  if (!statsGrid) return;

  const items = statsGrid.querySelectorAll('.stat-item');
  const numbers = statsGrid.querySelectorAll('.stat-number[data-count]');
  if (!numbers.length) return;

  onScrollReveal({
    trigger: statsGrid,
    start: 'top 82%',
    play: () => {
      if (items.length) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            stagger: 0.14,
            ease: EASE_PREMIUM,
            onComplete: () => gsap.set(items, { clearProps: 'transform,opacity' }),
          }
        );
      }

      numbers.forEach((el, index) => {
        const target = Number(el.dataset.count);
        const suffix = el.dataset.suffix ?? '+';
        if (Number.isNaN(target)) return;

        const counter = { val: 0 };
        gsap.to(counter, {
          val: target,
          duration: 2.4,
          delay: 0.2 + index * 0.14,
          ease: EASE_SMOOTH,
          snap: { val: 1 },
          onUpdate: () => {
            el.textContent = `${Math.round(counter.val)}${suffix}`;
          },
        });
      });
    },
  });
}
