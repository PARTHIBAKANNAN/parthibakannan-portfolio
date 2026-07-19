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
    const heroContent = document.querySelector('#top .hero-grid');
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

export const createScrollReveal = (selector, options = {}) => {
  if (prefersReducedMotion()) return null;

  const defaults = {
    opacity: 0,
    y: 12,
    duration: 0.35,
    ease: 'power1.out',
    stagger: 0.05,
    scrollTrigger: {
      trigger: selector,
      start: 'top 90%',
      toggleActions: 'play none none reverse',
    },
  };

  const mergedOptions = { ...defaults, ...options };
  return gsap.from(selector, mergedOptions);
};

export const staggerReveal = (selector, options = {}) => {
  if (prefersReducedMotion()) return null;

  const defaults = {
    opacity: 0,
    y: 8,
    duration: 0.3,
    ease: 'power1.out',
    stagger: 0.03,
    scrollTrigger: {
      trigger: selector,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
  };

  const mergedOptions = { ...defaults, ...options };
  return gsap.from(selector, mergedOptions);
};

export const cardHoverAnimation = (el) => {
  if (!el) return;

  el.addEventListener('mouseenter', () => {
    gsap.to(el, {
      y: -8,
      duration: 0.25,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  });

  el.addEventListener('mouseleave', () => {
    gsap.to(el, {
      y: 0,
      duration: 0.25,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  });
};

export const createParallax = (selector, speed = 0.5) => {
  if (prefersReducedMotion()) return null;

  return gsap.to(selector, {
    y: window.innerHeight * speed,
    scrollTrigger: {
      trigger: 'body',
      scrub: 1,
      onUpdate: (self) => {
        gsap.to(selector, {
          y: self.getVelocity() * 0.1,
          duration: 0.5,
          overwrite: 'auto',
        });
      },
    },
  });
};

export const killAllAnimations = () => {
  gsap.globalTimeline.clear();
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};
