import { gsap } from '../lib/gsap';
import { EASE_PREMIUM, EASE_SMOOTH } from './constants';
import { onScrollReveal } from './scrollReveal';

export function setupAboutHeroAnimations(scope) {
  const aboutHero = scope.querySelector('.about-hero');
  if (!aboutHero) return;

  const banner = aboutHero.querySelector('.about-hero-banner');
  const yearBlock = aboutHero.querySelector('.about-hero-year');
  const since = aboutHero.querySelector('.about-hero-since');
  const yearValue = aboutHero.querySelector('.about-hero-year-value');
  const title = aboutHero.querySelector('.about-hero-title');
  const textBlocks = aboutHero.querySelectorAll('.about-hero-text');
  const portrait = aboutHero.querySelector('.about-hero-image');

  if (title) {
    gsap.fromTo(
      title,
      { opacity: 0, y: 48, filter: 'blur(6px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.1,
        ease: EASE_PREMIUM,
        delay: 0.12,
        onComplete: () => gsap.set(title, { clearProps: 'filter' }),
      }
    );
  }

  if (banner && yearBlock) {
    onScrollReveal({
      trigger: banner,
      start: 'top 78%',
      play: () => {
        const targets = [since, yearValue].filter(Boolean);

        if (targets.length === 2) {
          gsap.fromTo(
            since,
            { opacity: 0, y: 72 },
            { opacity: 1, y: 0, duration: 1.8, ease: EASE_SMOOTH }
          );
          gsap.fromTo(
            yearValue,
            { opacity: 0, y: 160, scale: 0.86 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 2.6,
              ease: EASE_SMOOTH,
              delay: 0.25,
              onComplete: () => gsap.set(targets, { clearProps: 'transform,opacity' }),
            }
          );
        } else {
          gsap.fromTo(
            yearBlock,
            { opacity: 0, y: 120, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 2.4,
              ease: EASE_SMOOTH,
              onComplete: () => gsap.set(yearBlock, { clearProps: 'transform,opacity' }),
            }
          );
        }

        if (portrait) {
          gsap.fromTo(
            portrait,
            { opacity: 0, y: 30, scale: 0.97 },
            { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: EASE_PREMIUM, delay: 0.35 }
          );
        }
      },
    });
  }

  if (textBlocks.length) {
    onScrollReveal({
      trigger: aboutHero.querySelector('.about-hero-content'),
      start: 'top 85%',
      play: () => {
        gsap.fromTo(
          textBlocks,
          { opacity: 0, y: 36, filter: 'blur(4px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.95,
            stagger: 0.18,
            ease: EASE_PREMIUM,
            onComplete: () => gsap.set(textBlocks, { clearProps: 'transform,opacity,filter' }),
          }
        );
      },
    });
  }
}
