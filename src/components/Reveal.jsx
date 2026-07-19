import React, { useState, useEffect, useRef } from "react";
import { REDUCE } from "../lib/motion.js";

// Subtle fade-up on scroll
export function Reveal({ children, delay = 0, style }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(REDUCE);
  useEffect(() => {
    if (REDUCE) return;
    const el = ref.current; if (!el) return;
    const ob = new IntersectionObserver(([e]) => { setVis(e.isIntersecting); }, { threshold: 0.12 });
    ob.observe(el); return () => ob.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      ...style,
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0) scale(1)" : "translateY(22px) scale(0.98)",
      filter: vis ? "blur(0px)" : "blur(4px)",
      transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter 0.7s ease ${delay}ms`,
      willChange: "opacity, transform, filter",
    }}>{children}</div>
  );
}
