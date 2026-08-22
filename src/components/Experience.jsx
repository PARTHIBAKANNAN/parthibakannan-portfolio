import React from "react";
import { Globe } from "lucide-react";
import { t } from "../lib/theme.js";
import { Reveal } from "./Reveal.jsx";
import { aboutSummary, experience, languages } from "../data/content.js";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <div style={{ marginBottom: 38, maxWidth: 780 }}>
            <div className="section-eyebrow" style={{ marginBottom: 12 }}>About · Experience</div>
            <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.6vw, 38px)", fontWeight: 700, color: t.ink, margin: "0 0 18px", lineHeight: 1.12 }}>Generative AI Developer, 2+ years in production.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: t.inkSoft, margin: 0 }}>{aboutSummary}</p>
          </div>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {experience.map((e, i) => {
            const Icon = e.icon;
            return (
              <Reveal key={e.company} delay={i * 100}>
                <div className="glass" style={{ padding: 28, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: e.current ? `linear-gradient(180deg, ${t.irisBright}, ${t.auroraBright})` : "var(--chip-border)" }} />
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 18, flexWrap: "wrap" }}>
                    <div style={{ width: 46, height: 46, borderRadius: 12, flexShrink: 0, background: e.current ? `linear-gradient(135deg, ${t.irisBright}, ${t.irisDeep})` : "var(--chip-bg)", border: e.current ? "none" : "1px solid var(--chip-border)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: e.current ? "inset 0 1px 0 rgba(255,255,255,0.3), 0 12px 26px -12px rgba(106,67,224,0.4)" : "none" }}>
                      <Icon size={20} color={e.current ? "#fff" : t.inkMuted} strokeWidth={2.1} />
                    </div>
                    <div style={{ flex: 1, minWidth: 220 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                        <h3 className="font-display" style={{ fontSize: 18.5, fontWeight: 700, color: t.ink, margin: 0 }}>{e.company}</h3>
                        {e.current && <span className="chip chip-aurora" style={{ fontSize: 10 }}><span style={{ width: 5, height: 5, borderRadius: 3, background: t.aurora }} /> Current</span>}
                      </div>
                      <div style={{ fontSize: 14, color: t.iris, fontWeight: 600, marginTop: 4 }}>{e.role}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div className="font-mono" style={{ fontSize: 11.5, color: t.inkMuted }}>{e.period}</div>
                      <div className="font-mono" style={{ fontSize: 10.5, color: t.inkDim, marginTop: 4 }}>{e.location}</div>
                    </div>
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                    {e.points.map((p, j) => (
                      <li key={j} style={{ display: "flex", gap: 11, fontSize: 13.5, color: t.inkSoft, lineHeight: 1.55 }}>
                        <span style={{ color: t.aurora, marginTop: 1, flexShrink: 0, fontSize: 12 }}>▸</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div style={{ marginTop: 26, display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7, color: t.inkMuted }}>
              <Globe size={15} color={t.aurora} />
              <span className="font-mono" style={{ fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase" }}>Languages</span>
            </span>
            {languages.map(l => <span key={l} className="chip">{l}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
