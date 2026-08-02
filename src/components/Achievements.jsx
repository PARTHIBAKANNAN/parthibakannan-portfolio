import React from "react";
import { Trophy } from "lucide-react";
import { t } from "../lib/theme.js";
import { REDUCE } from "../lib/motion.js";
import { Reveal } from "./Reveal.jsx";
import { awards } from "../data/content.js";

export function Achievements() {
  return (
    <section id="achievements" className="section-tight soft-bg">
      <div className="container">
        <Reveal>
          <div style={{ marginBottom: 26, maxWidth: 720 }}>
            <div className="section-eyebrow" style={{ marginBottom: 12 }}>Achievements &amp; Awards</div>
            <h2 className="font-display heading-huge" style={{ fontSize: "clamp(24px, 3vw, 30px)", margin: 0 }}>Recognized for the work, not just the title.</h2>
          </div>
        </Reveal>
        {awards.map(a => (
          <Reveal key={a.title}>
            <div className="glass-strong" style={{ padding: 30, display: "flex", gap: 22, alignItems: "flex-start", flexWrap: "wrap", position: "relative", overflow: "hidden" }}>
              <div className="shine" style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: 90, background: "linear-gradient(90deg, transparent, rgba(245,166,35,0.14), transparent)", animation: REDUCE ? "none" : "shineSweep 5.5s ease-in-out infinite", pointerEvents: "none" }} />
              <div style={{
                width: 60, height: 60, borderRadius: 16, flexShrink: 0,
                background: `linear-gradient(135deg, ${t.amberBright}, #E0820A)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: `inset 0 1px 0 rgba(255,255,255,0.35), 0 18px 36px -12px rgba(245,166,35,0.55)`,
              }}>
                <Trophy size={28} color="#fff" strokeWidth={2.1} />
              </div>
              <div style={{ flex: 1, minWidth: 240, position: "relative" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
                  <h3 className="font-display" style={{ fontSize: 20, fontWeight: 700, color: t.ink, margin: 0 }}>{a.title}</h3>
                  <span className="chip chip-amber">{a.category}</span>
                </div>
                <div style={{ fontSize: 14, color: t.iris, fontWeight: 600, marginBottom: 10 }}>{a.org} · {a.year}</div>
                <p style={{ fontSize: 14.5, color: t.inkSoft, lineHeight: 1.6, margin: "0 0 10px", maxWidth: 640 }}>{a.blurb}</p>
                <div className="font-mono" style={{ fontSize: 11.5, color: t.inkMuted }}>Presented by {a.presenter}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
