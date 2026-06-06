import { gsap } from '../lib/gsap';
import { revealBlur } from '../lib/motion';
import { DURATION_REVEAL, DURATION_REVEAL_FAST, EASE_PREMIUM, EASE_SMOOTH, STAGGER_LOOSE } from './constants';
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

  if (title) {
    gsap.fromTo(
      title,
      { opacity: 0, y: 52, filter: revealBlur('blur(8px)'), force3D: true },
      {
        opacity: 1,
        y: 0,
        filter: revealBlur('blur(0px)'),
        duration: DURATION_REVEAL,
        ease: EASE_PREMIUM,
        delay: 0.1,
        force3D: true,
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
          { opacity: 0, y: 40, filter: revealBlur('blur(4px)'), force3D: true },
          {
            opacity: 1,
            y: 0,
            filter: revealBlur('blur(0px)'),
            duration: DURATION_REVEAL_FAST,
            stagger: STAGGER_LOOSE,
            ease: EASE_PREMIUM,
            force3D: true,
            onComplete: () => gsap.set(textBlocks, { clearProps: 'transform,opacity,filter' }),
          }
        );
      },
    });
  }
}
