import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Hero entrance animations
export const animateHeroEntrance = (timelineRef) => {
  if (prefersReducedMotion()) return;

  // Wait for DOM to be fully rendered before starting animations
  const tl = gsap.timeline();

  // Hero name/role entrance
  const titleEl = document.querySelector('.hero-title');
  if (titleEl) {
    tl.from(titleEl, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out',
    }, 0);
  }

  // Hero subtitle
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

  // Hero stats/chips
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

  // Hero image float entrance
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

  if (timelineRef) timelineRef.current = tl;
  return tl;
};

// Scroll reveal animation for sections
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

// Stagger list items on entrance
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

// Card hover lift effect (using Framer Motion compatible approach)
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

// Parallax effect for floating elements
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

// Cleanup animations
export const killAllAnimations = () => {
  gsap.globalTimeline.clear();
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};
