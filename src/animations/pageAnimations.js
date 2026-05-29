import { gsap, ScrollTrigger } from '../lib/gsap';
import { EASE_PREMIUM, EASE_SMOOTH } from './constants';
import { setupAboutHeroAnimations } from './aboutHeroAnimation';
import { setupHeroAnimation } from './heroAnimation';
import { setupScrollAnimations } from './scrollAnimations';

export function setupHeaderAnimation(scope) {
  const header = scope.querySelector('.header');
  if (!header) return;

  gsap.from(header, {
    y: -20,
    opacity: 0,
    duration: 0.85,
    ease: EASE_PREMIUM,
  });
}

export function setupHeaderScroll(scope) {
  const header = scope.querySelector('.header');
  if (!header) return;

  ScrollTrigger.create({
    start: 48,
    end: 'max',
    onUpdate: (self) => {
      header.classList.toggle('header--scrolled', self.scroll() > 48);
    },
  });
}

export function setupPageAnimations(scope, pathname) {
  setupHeaderAnimation(scope);
  setupHeaderScroll(scope);
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
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.7, ease: EASE_SMOOTH, clearProps: 'transform' }
  );
}
