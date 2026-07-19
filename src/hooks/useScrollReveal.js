import { useEffect } from 'react';
import { createScrollReveal, prefersReducedMotion } from '../lib/animations';

/**
 * Hook to trigger scroll reveal animations on elements
 * Usage: attach ref to container, children with .reveal class will animate in
 */
export const useScrollReveal = (ref, options = {}) => {
  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;

    const revealElements = ref.current.querySelectorAll('.reveal');

    revealElements.forEach((el) => {
      createScrollReveal(el, {
        opacity: 0,
        y: 12,
        duration: 0.35,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
        ...options,
      });
    });

    return () => {
      // Cleanup handled by GSAP
    };
  }, [ref, options]);
};

/**
 * Hook for staggered list reveals
 */
export const useStaggerReveal = (ref, itemSelector = '.reveal-item', options = {}) => {
  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;

    const items = ref.current.querySelectorAll(itemSelector);

    items.forEach((item, index) => {
      createScrollReveal(item, {
        opacity: 0,
        y: 12,
        duration: 0.3,
        ease: 'power1.out',
        delay: index * 0.03,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        ...options,
      });
    });

    return () => {
      // Cleanup handled by GSAP
    };
  }, [ref, itemSelector, options]);
};
