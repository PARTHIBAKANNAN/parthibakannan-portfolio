import React from "react";
import { Globe, Sparkles, Trophy } from "lucide-react";
import { t } from "../lib/theme.js";
import { Reveal } from "./Reveal.jsx";
import { aboutSummary, experience } from "../data/content.js";

const languageDeck = [
  { flag: "🇬🇧", lang: "English", level: "Professional & Fluent", badge: "Primary Work Lang" },
  { flag: "🇮🇳", lang: "Tamil", level: "Native Proficiency", badge: "Native" },
  { flag: "🇮🇳", lang: "Telugu", level: "Native Proficiency", badge: "Native" },
  { flag: "🇯🇵", lang: "Japanese", level: "Duolingo Learner", badge: "14,199 XP" },
  { flag: "🇮🇳", lang: "Hindi", level: "Professional Working", badge: "10,812 XP" },
  { flag: "🇩🇪", lang: "German", level: "Elementary", badge: "3,298 XP" },
];

export function Experience() {
  return (
    <section id="experience" className="section-tight" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="container">
        <Reveal>
          <div style={{ marginBottom: 32, maxWidth: 780 }}>
            <div className="section-eyebrow" style={{ marginBottom: 10 }}>About · Experience</div>
            <h2 className="font-display" style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 800, color: t.ink, margin: "0 0 14px", lineHeight: 1.15 }}>
              Generative AI Developer, 2+ years in enterprise production.
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.65, color: t.inkSoft, margin: 0 }}>{aboutSummary}</p>
          </div>
        </Reveal>

        {/* Experience Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 28 }}>
          {experience.map((e, i) => {
            const Icon = e.icon;
            return (
              <Reveal key={e.company} delay={i * 90}>
                <div className="glass hover-card" style={{ padding: "24px 28px", position: "relative", overflow: "hidden", borderRadius: 18 }}>
                  <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: e.current ? `linear-gradient(180deg, ${t.irisBright}, ${t.auroraBright})` : "var(--chip-border)" }} />
                  
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16, flexWrap: "wrap" }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                      background: e.current ? `linear-gradient(135deg, ${t.irisBright}, ${t.irisDeep})` : "var(--chip-bg)",
                      border: e.current ? "none" : "1px solid var(--chip-border)", display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: e.current ? "inset 0 1px 0 rgba(255,255,255,0.3), 0 12px 24px -10px rgba(106,67,224,0.5)" : "none"
                    }}>
                      <Icon size={20} color={e.current ? "#fff" : t.inkMuted} strokeWidth={2.1} />
                    </div>
                    <div style={{ flex: 1, minWidth: 220 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                        <h3 className="font-display" style={{ fontSize: 18, fontWeight: 700, color: t.ink, margin: 0 }}>{e.company}</h3>
                        {e.current && (
                          <span className="chip chip-aurora" style={{ fontSize: 10.5, padding: "3px 9px" }}>
                            <span style={{ width: 5, height: 5, borderRadius: 3, background: t.auroraBright }} /> Current
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: 13.5, color: t.irisBright, fontWeight: 600, marginTop: 3 }}>{e.role}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div className="font-mono" style={{ fontSize: 11.5, color: t.inkMuted }}>{e.period}</div>
                      <div className="font-mono" style={{ fontSize: 10.5, color: t.inkDim, marginTop: 2 }}>{e.location}</div>
                    </div>
                  </div>

                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {e.points.map((p, j) => (
                      <li key={j} style={{ display: "flex", gap: 10, fontSize: 13.5, color: t.inkSoft, lineHeight: 1.55 }}>
                        <span style={{ color: t.auroraBright, marginTop: 1, flexShrink: 0, fontSize: 12 }}>▸</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Elevated Multilingual Proficiency Section */}
        <Reveal delay={100}>
          <div className="glass-strong" style={{
            padding: "20px 24px", borderRadius: 18, border: "1px solid rgba(124,92,255,0.18)",
            background: "linear-gradient(135deg, rgba(124,92,255,0.04), rgba(31,199,192,0.04))"
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14, flexWrap: "wrap", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Globe size={16} color={t.auroraBright} />
                <span className="font-mono" style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, color: t.auroraBright }}>
                  Multilingual Fluency &amp; Cognitive Expansion
                </span>
              </div>
              <span className="font-mono" style={{ fontSize: 10.5, color: t.amberBright, background: "rgba(245,166,35,0.12)", padding: "3px 10px", borderRadius: 999 }}>
                6 Languages
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 10 }}>
              {languageDeck.map(l => (
                <div
                  key={l.lang}
                  style={{
                    padding: "10px 14px", borderRadius: 12, background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 10
                  }}
                >
                  <span style={{ fontSize: 20 }}>{l.flag}</span>
                  <div>
                    <div className="font-display" style={{ fontSize: 13, fontWeight: 700, color: t.ink }}>{l.lang}</div>
                    <div className="font-mono" style={{ fontSize: 10, color: t.irisBright, fontWeight: 600 }}>{l.badge}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
