import React from "react";
import { t } from "../lib/theme.js";
import { Reveal } from "./Reveal.jsx";
import { collegeWork } from "../data/projects.js";

export function Foundations() {
  return (
    <section id="foundations" className="section soft-bg">
      <div className="container">
        <Reveal>
          <div style={{ marginBottom: 40, maxWidth: 720 }}>
            <div className="section-eyebrow" style={{ marginBottom: 12 }}>Foundations</div>
            <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.6vw, 36px)", fontWeight: 700, color: t.ink, margin: "0 0 14px", lineHeight: 1.15 }}>Where I learned to ship.</h2>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: t.inkMuted, margin: 0 }}>College work — full-stack apps, ML classifiers, and conversational bots. The projects that taught me what production really means.</p>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {collegeWork.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 70}>
                <div className="glass hover-card" style={{ padding: 22, height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(124,92,255,0.1)", border: "1px solid rgba(124,92,255,0.22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={16} color={t.iris} strokeWidth={2.2} />
                    </div>
                    <h3 className="font-display" style={{ fontSize: 15.5, fontWeight: 700, color: t.ink, margin: 0 }}>{c.title}</h3>
                  </div>
                  <p style={{ fontSize: 13, color: t.inkMuted, lineHeight: 1.6, margin: "0 0 12px" }}>{c.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>{c.tech.map(tech => <span key={tech} className="chip" style={{ fontSize: 10, padding: "3px 8px" }}>{tech}</span>)}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
