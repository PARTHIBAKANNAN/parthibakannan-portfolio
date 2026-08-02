import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Github, ArrowUpRight } from "lucide-react";
import { t } from "../lib/theme.js";
import { Reveal } from "./Reveal.jsx";
import { prefersReducedMotion } from "../lib/animations.js";
import { collegeWork } from "../data/projects.js";

gsap.registerPlugin(ScrollTrigger);

// Free to use under the Unsplash License — https://unsplash.com/photos/BV9vbI8ZkZM
const BG_PHOTO = "https://images.unsplash.com/photo-1771876002358-e870981466d8?auto=format&fit=crop&w=1600&q=60";

export function Foundations() {
  const bgRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion() || !bgRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        y: 60,
        ease: "none",
        scrollTrigger: {
          trigger: "#foundations",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="foundations" className="section soft-bg" style={{ position: "relative", overflow: "hidden" }}>
      <img
        ref={bgRef}
        src={BG_PHOTO}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute", top: -40, left: 0, width: "100%", height: "calc(100% + 80px)",
          objectFit: "cover", opacity: 0.1, mixBlendMode: "screen", pointerEvents: "none", zIndex: 0,
        }}
      />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <Reveal>
          <div style={{ marginBottom: 40, maxWidth: 720 }}>
            <div className="section-eyebrow" style={{ marginBottom: 12 }}>Foundations</div>
            <h2 className="font-display heading-huge" style={{ fontSize: "clamp(28px, 3.6vw, 36px)", margin: "0 0 14px" }}>Where I learned to ship.</h2>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: t.inkMuted, margin: 0 }}>College work — full-stack apps, ML classifiers, and conversational bots. The projects that taught me what production really means.</p>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {collegeWork.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 70} style={{ height: "100%" }}>
                <div className="glass hover-card" style={{ height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                  {c.image && (
                    <div style={{ height: 100, flexShrink: 0 }}>
                      <img src={c.image} alt="" aria-hidden="true" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    </div>
                  )}
                  <div style={{ padding: 22, display: "flex", flexDirection: "column", flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: "var(--chip-bg)", border: "1px solid var(--chip-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon size={16} color={t.iris} strokeWidth={2.2} />
                      </div>
                      <h3 className="font-display" style={{ fontSize: 15.5, fontWeight: 700, color: t.ink, margin: 0 }}>{c.title}</h3>
                    </div>
                    <p style={{ fontSize: 13, color: t.inkMuted, lineHeight: 1.6, margin: "0 0 12px" }}>{c.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: c.github ? 12 : 0 }}>{c.tech.map(tech => <span key={tech} className="chip" style={{ fontSize: 10, padding: "3px 8px" }}>{tech}</span>)}</div>
                    {c.github && (
                      <a href={c.github} target="_blank" rel="noopener noreferrer" style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 600, color: t.iris }}>
                        <Github size={12} /> View on GitHub <ArrowUpRight size={11} />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
