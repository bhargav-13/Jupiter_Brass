import { gsap, ScrollTrigger } from '../lib/gsap';
import { revealBlur } from '../lib/motion';
import {
  DURATION_PAGE_ENTER,
  DURATION_REVEAL_FAST,
  EASE_PREMIUM,
  EASE_SMOOTH,
} from './constants';
import { setupAboutHeroAnimations } from './aboutHeroAnimation';
import { setupHeroAnimation } from './heroAnimation';
import { setupScrollAnimations } from './scrollAnimations';

export function setupHeaderAnimation(scope) {
  const header = scope.querySelector('.header');
  if (!header) return;

  gsap.from(header, {
    yPercent: -14,
    opacity: 0,
    duration: 0.95,
    ease: EASE_PREMIUM,
    force3D: true,
    clearProps: 'transform,opacity,filter',
  });
}

export function setupPageAnimations(scope, pathname) {
  setupHeaderAnimation(scope);
  setupScrollAnimations(scope);

  if (pathname === '/') {
    const hero = scope.querySelector('.hero');
    if (hero) setupHeroAnimation(hero);
  }

  if (pathname === '/about') {
    setupAboutHeroAnimations(scope);
  }

  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });
}

export function playPageEnterAnimation() {
  const page = document.querySelector('.page-shell');
  if (!page) return;

  gsap.fromTo(
    page,
    {
      opacity: 0,
      y: 32,
      scale: 0.992,
      filter: revealBlur('blur(6px)'),
      force3D: true,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: revealBlur('blur(0px)'),
      duration: DURATION_PAGE_ENTER,
      ease: EASE_SMOOTH,
      force3D: true,
      clearProps: 'transform,opacity,filter',
    }
  );
}
