import { useEffect, useRef, useState } from 'react';
import { EASE_PREMIUM, EASE_SMOOTH } from '../animations/constants';
import { gsap, prefersReducedMotion } from '../lib/gsap';
import './PageLoader.css';

const LOGO_SRC = '/images/jupiter_brass_logo.svg';
const TAGLINE = 'Precision Brass Components';
const MIN_VISIBLE_MS = 1300;
const MAX_WAIT_MS = 5000;

const PageLoader = () => {
  const [active, setActive] = useState(true);
  const rootRef = useRef(null);
  const panelRef = useRef(null);
  const glowRef = useRef(null);
  const logoRef = useRef(null);
  const taglineRef = useRef(null);
  const lineLeftRef = useRef(null);
  const lineRightRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const root = rootRef.current;
    const panel = panelRef.current;
    const glow = glowRef.current;
    const logo = logoRef.current;
    const tagline = taglineRef.current;
    const lineLeft = lineLeftRef.current;
    const lineRight = lineRightRef.current;
    const progress = progressRef.current;

    if (!root || !panel || !glow || !logo || !tagline || !lineLeft || !lineRight || !progress) {
      return undefined;
    }

    document.body.classList.add('is-loading');

    const reduced = prefersReducedMotion();
    const startTime = Date.now();
    let finished = false;
    let progressTween = null;
    let introTween = null;

    const dismiss = () => {
      if (cancelled) return;
      document.body.classList.remove('is-loading');
      setActive(false);
    };

    const finish = () => {
      if (cancelled || finished) return;
      finished = true;

      const elapsed = Date.now() - startTime;
      const delay = reduced ? 0 : Math.max(0, MIN_VISIBLE_MS - elapsed);

      window.setTimeout(() => {
        progressTween?.kill();

        if (reduced) {
          gsap.set(root, { autoAlpha: 0 });
          dismiss();
          return;
        }

        gsap
          .timeline({
            defaults: { ease: EASE_PREMIUM },
            onComplete: dismiss,
          })
          .to(progress, { scaleX: 1, duration: 0.4, ease: 'power2.out' })
          .to(
            [logo, tagline, lineLeft, lineRight, glow],
            {
              opacity: 0,
              duration: 0.35,
              ease: 'power2.in',
            },
            0.1
          )
          .to(
            panel,
            {
              yPercent: -100,
              duration: 1.15,
              ease: EASE_PREMIUM,
            },
            0.2
          )
          .to(root, { autoAlpha: 0, duration: 0.15 }, '-=0.1');
      }, delay);
    };

    if (reduced) {
      finish();
      return () => {
        document.body.classList.remove('is-loading');
      };
    }

    gsap.set(root, { autoAlpha: 1 });
    gsap.set(panel, { yPercent: 0 });
    gsap.set(glow, { scale: 0.5, opacity: 0 });
    gsap.set(logo, {
      opacity: 0,
      scale: 0.82,
      y: 40,
      filter: 'blur(14px)',
    });
    gsap.set(tagline, { opacity: 0, y: 20, letterSpacing: '0.5em' });
    gsap.set([lineLeft, lineRight], { scaleX: 0, opacity: 0 });
    gsap.set(progress, { scaleX: 0, transformOrigin: 'left center' });

    introTween = gsap
      .timeline({ defaults: { ease: EASE_PREMIUM } })
      .to(glow, { scale: 1, opacity: 1, duration: 1.2, ease: EASE_SMOOTH }, 0.05)
      .to(
        [lineLeft, lineRight],
        { scaleX: 1, opacity: 1, duration: 1, ease: EASE_SMOOTH },
        0.15
      )
      .to(
        logo,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.15,
          ease: EASE_SMOOTH,
        },
        0.25
      )
      .to(
        tagline,
        {
          opacity: 1,
          y: 0,
          letterSpacing: '0.18em',
          duration: 0.9,
          ease: EASE_SMOOTH,
        },
        '-=0.7'
      );

    progressTween = gsap.to(progress, {
      scaleX: 0.94,
      duration: 2.4,
      ease: 'power1.inOut',
    });

    gsap.to(glow, {
      scale: 1.08,
      opacity: 0.85,
      duration: 2.6,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });

    const img = new Image();
    img.src = LOGO_SRC;
    img.onload = finish;
    img.onerror = finish;

    window.addEventListener('load', finish, { once: true });
    if (document.readyState === 'complete') {
      finish();
    }

    const maxTimer = window.setTimeout(finish, MAX_WAIT_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(maxTimer);
      window.removeEventListener('load', finish);
      progressTween?.kill();
      introTween?.kill();
      gsap.killTweensOf(glow);
      document.body.classList.remove('is-loading');
    };
  }, []);

  if (!active) return null;

  return (
    <div ref={rootRef} className="page-loader" aria-hidden="true">
      <div ref={panelRef} className="page-loader__panel">
        <div ref={glowRef} className="page-loader__glow" aria-hidden="true" />

        <div className="page-loader__stage">
          <div className="page-loader__brand" aria-hidden="true">
            <span ref={lineLeftRef} className="page-loader__line page-loader__line--left" />
            <img
              ref={logoRef}
              src={LOGO_SRC}
              alt=""
              className="page-loader__logo"
              width={320}
              height={128}
            />
            <span ref={lineRightRef} className="page-loader__line page-loader__line--right" />
          </div>

          <p ref={taglineRef} className="page-loader__tagline">
            {TAGLINE}
          </p>
        </div>

        <div className="page-loader__bar-track" aria-hidden="true">
          <div ref={progressRef} className="page-loader__bar-fill" />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
