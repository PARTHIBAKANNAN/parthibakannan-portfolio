import React, { useEffect, useRef } from 'react';
import { createScrollReveal, prefersReducedMotion } from '../lib/animations';

/**
 * Wrapper component that applies scroll reveal animations to its children
 * Each child with class "reveal" will fade/slide in when scrolled into view
 */
export function ScrollRevealSection({ children, className = '' }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || prefersReducedMotion()) return;

    // Animate all elements with the reveal class
    const revealElements = sectionRef.current.querySelectorAll('.reveal');
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
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className={className}>
      {children}
    </section>
  );
}
