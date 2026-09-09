import React from "react";
import { Building2, Briefcase, CheckCircle2, Award, Calendar, MapPin } from "lucide-react";
import { t } from "../lib/theme.js";
import { Reveal } from "./Reveal.jsx";
import { aboutSummary, experience } from "../data/content.js";

export function Experience() {
  return (
    <section id="experience" className="section-tight" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="container">
        
        {/* Section Header */}
        <Reveal>
          <div style={{ marginBottom: 38, maxWidth: 880 }}>
            <div className="section-eyebrow" style={{ marginBottom: 10 }}>Career Track &amp; Enterprise Impact</div>
            <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.8vw, 40px)", fontWeight: 800, color: t.ink, margin: "0 0 14px", lineHeight: 1.15 }}>
              Enterprise Production Track Record.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: t.inkSoft, margin: 0 }}>
              {aboutSummary}
            </p>
          </div>
        </Reveal>

        {/* Dedicated Full-Width Professional Career Timeline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 960 }}>
          {experience.map((e, i) => {
            const Icon = e.icon;
            return (
              <Reveal key={e.company} delay={i * 90}>
                <div
                  className="glass hover-card"
                  style={{
                    padding: "30px 32px",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 20,
                    border: e.current ? "1.5px solid rgba(31,199,192,0.3)" : "1px solid var(--surface-border)",
                    boxShadow: e.current ? "0 18px 40px -20px rgba(31,199,192,0.18)" : undefined
                  }}
                >
                  <div
                    style={{
                      position: "absolute", left: 0, top: 0, bottom: 0, width: 4.5,
                      background: e.current ? `linear-gradient(180deg, ${t.irisBright}, ${t.auroraBright})` : "var(--chip-border)"
                    }}
                  />
                  
                  {/* Top Header Row */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 20, flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                        background: e.current ? `linear-gradient(135deg, ${t.irisBright}, ${t.irisDeep})` : "var(--chip-bg)",
                        border: e.current ? "none" : "1px solid var(--chip-border)", display: "flex", alignItems: "center", justifyContent: "center",
                        boxShadow: e.current ? "inset 0 1px 0 rgba(255,255,255,0.3), 0 12px 24px -10px rgba(106,67,224,0.5)" : "none"
                      }}>
                        <Icon size={22} color={e.current ? "#fff" : t.inkMuted} strokeWidth={2.1} />
                      </div>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                          <h3 className="font-display" style={{ fontSize: 20, fontWeight: 800, color: t.ink, margin: 0 }}>{e.company}</h3>
                          {e.current && (
                            <span className="chip chip-aurora" style={{ fontSize: 11, padding: "3px 10px" }}>
                              <span style={{ width: 6, height: 6, borderRadius: 3, background: t.auroraBright, boxShadow: `0 0 6px ${t.auroraBright}` }} /> Active Role
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: 14.5, color: t.irisBright, fontWeight: 600, marginTop: 3 }}>{e.role}</div>
                      </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 3 }}>
                      <div className="font-mono" style={{ fontSize: 12.5, color: t.inkMuted, display: "flex", alignItems: "center", gap: 6 }}>
                        <Calendar size={13} color={t.auroraBright} /> {e.period}
                      </div>
                      <div className="font-mono" style={{ fontSize: 11, color: t.inkDim, display: "flex", alignItems: "center", gap: 5 }}>
                        <MapPin size={11} /> {e.location}
                      </div>
                    </div>
                  </div>

                  {/* Bullet Points with Strong Typography */}
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                    {e.points.map((p, j) => (
                      <li key={j} style={{ display: "flex", gap: 12, fontSize: 14.5, color: t.inkSoft, lineHeight: 1.65 }}>
                        <span style={{ color: t.auroraBright, marginTop: 3, flexShrink: 0, fontSize: 13, fontWeight: 700 }}>▸</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

