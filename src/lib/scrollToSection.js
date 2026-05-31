import { getLenis } from './lenisScroll';

export const CONTACT_FORM_ID = 'contact-form';
export const CONTACT_FORM_PATH = `/contact#${CONTACT_FORM_ID}`;

function getHeaderOffset() {
  const raw = getComputedStyle(document.documentElement).getPropertyValue('--header-height');
  const height = parseFloat(raw) || 80;
  return height + 16;
}

/** Scroll to a page section (works with Lenis + native scroll). */
export function scrollToSection(element, options = {}) {
  if (!element) return;

  const { immediate = false } = options;
  const offset = options.offset ?? -getHeaderOffset();
  const lenis = getLenis();

  if (lenis) {
    lenis.scrollTo(element, {
      offset,
      immediate,
      lock: immediate,
      duration: immediate ? 0 : 1.15,
    });
    return;
  }

  const top = element.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({
    top,
    behavior: immediate ? 'auto' : 'smooth',
  });
}

export function scrollToSectionById(id, options = {}, tries = 0) {
  const el = document.getElementById(id);
  if (el) {
    scrollToSection(el, options);
    return;
  }
  if (tries < 24) {
    requestAnimationFrame(() => scrollToSectionById(id, options, tries + 1));
  }
}
