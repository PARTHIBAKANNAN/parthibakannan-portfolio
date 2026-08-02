import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const animateHeroEntrance = (scope) => {
  if (prefersReducedMotion()) return null;

  return gsap.context(() => {
    const tl = gsap.timeline();

    const titleEl = document.querySelector('.hero-title');
    if (titleEl) {
      tl.from(titleEl, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
      }, 0);
    }

    const subtitleEl = document.querySelector('.hero-subtitle');
    if (subtitleEl) {
      tl.from(
        subtitleEl,
        {
          opacity: 0,
          y: 16,
          duration: 0.5,
          ease: 'power2.out',
        },
        0.15
      );
    }

    const chipEls = document.querySelectorAll('.hero-chip');
    if (chipEls.length > 0) {
      tl.from(
        chipEls,
        {
          opacity: 0,
          scale: 0.9,
          duration: 0.4,
          ease: 'back.out',
          stagger: 0.08,
        },
        0.25
      );
    }

    const imageEl = document.querySelector('.hero-image');
    if (imageEl) {
      tl.from(
        imageEl,
        {
          opacity: 0,
          scale: 0.95,
          duration: 0.7,
          ease: 'power2.out',
        },
        0
      );
    }

    // Cinematic zoom-out + fade as the hero scrolls past — scoped to the
    // same context so Hero.jsx's single ctx.revert() tears this down too.
    const heroContent = document.querySelector('#top');
    if (heroContent) {
      gsap.to(heroContent, {
        scale: 0.94,
        opacity: 0.35,
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: '#top',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      });
    }
  }, scope);
};

