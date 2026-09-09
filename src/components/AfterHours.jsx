import React from "react";
import { Github, ArrowUpRight, Trophy, Flame, Sparkles, Globe2, BookOpen } from "lucide-react";
import { t } from "../lib/theme.js";
import { Reveal } from "./Reveal.jsx";
import { StatusBadge } from "./SelectedWork.jsx";
import { personalRD } from "../data/projects.js";
import { duolingoStats, hackerRankStats, languages } from "../data/content.js";

// Clean SVG Country Flags that render reliably across Windows Chrome, macOS, and Linux
function FlagUK() {
  return (
    <svg width="20" height="15" viewBox="0 0 60 30" style={{ borderRadius: 3, flexShrink: 0, boxShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
      <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
      <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
      <g clipPath="url(#s)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
      </g>
    </svg>
  );
}

function FlagIndia() {
  return (
    <svg width="20" height="15" viewBox="0 0 225 150" style={{ borderRadius: 3, flexShrink: 0, boxShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
      <rect width="225" height="50" fill="#FF9933"/>
      <rect y="50" width="225" height="50" fill="#FFFFFF"/>
      <rect y="100" width="225" height="50" fill="#138808"/>
      <circle cx="112.5" cy="75" r="20" fill="none" stroke="#000080" strokeWidth="3.5"/>
      <circle cx="112.5" cy="75" r="4" fill="#000080"/>
    </svg>
  );
}

function FlagJapan() {
  return (
    <svg width="20" height="15" viewBox="0 0 900 600" style={{ borderRadius: 3, flexShrink: 0, boxShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
      <rect width="900" height="600" fill="#FFFFFF"/>
      <circle cx="450" cy="300" r="180" fill="#BC002D"/>
    </svg>
  );
}

function FlagGermany() {
  return (
    <svg width="20" height="15" viewBox="0 0 5 3" style={{ borderRadius: 3, flexShrink: 0, boxShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
      <rect width="5" height="1" y="0" fill="#000"/>
      <rect width="5" height="1" y="1" fill="#D00"/>
      <rect width="5" height="1" y="2" fill="#FFCE00"/>
    </svg>
  );
}

const languageDeck = [
  { Flag: FlagUK, lang: "English", badge: "Fluent · Primary Work" },
  { Flag: FlagIndia, lang: "Tamil", badge: "Native Proficiency" },
  { Flag: FlagIndia, lang: "Telugu", badge: "Native Proficiency" },
  { Flag: FlagJapan, lang: "Japanese", badge: "14,200+ XP" },
  { Flag: FlagIndia, lang: "Hindi", badge: "10,800+ XP" },
  { Flag: FlagGermany, lang: "German", badge: "3,300+ XP" },
];

export function AfterHours() {
  return (
    <section id="after-hours" className="section-tight" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="container">
        <Reveal>
          <div style={{ marginBottom: 26, display: "flex", alignItems: "center", gap: 14 }}>
            <div className="section-eyebrow">Continuous Discipline &amp; Multilingual Grit</div>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, var(--line), transparent)" }} />
          </div>
          <div style={{ maxWidth: 780, marginBottom: 28 }}>
            <h2 className="font-display heading-huge" style={{ fontSize: "clamp(24px, 3.2vw, 32px)", fontWeight: 800, color: t.ink, margin: "0 0 10px", lineHeight: 1.2 }}>
              Daily Consistency, Multilingual Grit &amp; MCP Agents.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: t.inkMuted, margin: 0 }}>
              The daily habits that reinforce engineering discipline — 368+ days of daily multilingual study, verified 5-star SQL problem-solving, and experimental Model Context Protocol (MCP) agents.
            </p>
          </div>
        </Reveal>

        {/* Highlighted Duolingo & HackerRank Stats Ribbon */}
        <Reveal delay={60}>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14,
            marginBottom: 24, padding: "20px 24px", borderRadius: 18,
            background: "linear-gradient(135deg, rgba(124,92,255,0.06), rgba(31,199,192,0.06))",
            border: "1px solid var(--surface-border)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(245,166,35,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Flame size={20} color={t.amberBright} />
              </div>
              <div>
                <div className="font-display" style={{ fontSize: 18, fontWeight: 800, color: t.amberBright }}>{duolingoStats.streak}</div>
                <div className="font-mono" style={{ fontSize: 10, color: "var(--ink-dim)", textTransform: "uppercase" }}>Continuous Language Streak</div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(124,92,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Sparkles size={20} color={t.irisBright} />
              </div>
              <div>
                <div className="font-display" style={{ fontSize: 18, fontWeight: 800, color: t.irisBright }}>{duolingoStats.totalXp}</div>
                <div className="font-mono" style={{ fontSize: 10, color: "var(--ink-dim)", textTransform: "uppercase" }}>Diamond League (16 Top 3)</div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(15,169,104,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Trophy size={20} color={t.success} />
              </div>
              <div>
                <div className="font-display" style={{ fontSize: 18, fontWeight: 800, color: t.success }}>5-Star Gold ★★★★★</div>
                <div className="font-mono" style={{ fontSize: 10, color: "var(--ink-dim)", textTransform: "uppercase" }}>HackerRank SQL Badge</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Multilingual Fluency Shelf */}
        <Reveal delay={100}>
          <div className="glass" style={{
            padding: "18px 22px", borderRadius: 18, marginBottom: 28,
            border: "1px solid rgba(124,92,255,0.18)"
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Globe2 size={16} color={t.auroraBright} />
                <span className="font-mono" style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, color: t.auroraBright }}>
                  Multilingual Fluency &amp; Daily Practice
                </span>
              </div>
              <span className="font-mono" style={{ fontSize: 10.5, color: t.amberBright, background: "rgba(245,166,35,0.12)", padding: "3px 10px", borderRadius: 999, fontWeight: 700 }}>
                6 Active Languages
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 10 }}>
              {languageDeck.map(l => {
                const FlagComponent = l.Flag;
                return (
                  <div
                    key={l.lang}
                    style={{
                      padding: "10px 14px", borderRadius: 12, background: "var(--chip-bg)",
                      border: "1px solid var(--chip-border)", display: "flex", alignItems: "center", gap: 10
                    }}
                  >
                    <FlagComponent />
                    <div style={{ minWidth: 0 }}>
                      <div className="font-display" style={{ fontSize: 13, fontWeight: 700, color: t.ink, lineHeight: 1.2 }}>{l.lang}</div>
                      <div className="font-mono" style={{ fontSize: 10, color: t.irisBright, fontWeight: 600, marginTop: 2 }}>{l.badge}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
          {personalRD.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 80} style={{ height: "100%" }}>
                <div className="glass hover-card" style={{ height: "100%", display: "flex", flexDirection: "column", overflow: "hidden", borderRadius: 18 }}>
                  {p.image && (
                    <div style={{ height: 130, flexShrink: 0, position: "relative", overflow: "hidden" }}>
                      <img src={p.image} alt="" aria-hidden="true" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,12,20,0.1) 20%, rgba(10,12,20,0.85))" }} />
                      {p.status && (
                        <div style={{
                          position: "absolute", top: 12, right: 12,
                          background: "rgba(10,14,26,0.85)", border: `1px solid ${t.irisBright}`,
                          borderRadius: 999, padding: "3px 10px", fontSize: 10.5,
                          fontFamily: "'JetBrains Mono', monospace", color: t.irisBright, fontWeight: 700
                        }}>
                          {p.status}
                        </div>
                      )}
                    </div>
                  )}
                  <div style={{ padding: 22, display: "flex", gap: 14, alignItems: "flex-start", flex: 1 }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, flexShrink: 0, background: "rgba(31,199,192,0.1)", border: "1px solid rgba(31,199,192,0.24)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={18} color={t.auroraBright} strokeWidth={2.2} />
                    </div>
                    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                      <h3 className="font-display" style={{ fontSize: 17, fontWeight: 700, color: t.ink, margin: "0 0 8px" }}>{p.title}</h3>
                      <p style={{ fontSize: 13.5, color: t.inkSoft, lineHeight: 1.55, margin: "0 0 14px" }}>{p.desc}</p>
                      
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: "auto" }}>
                        {p.tech.map(tech => (
                          <span key={tech} className="chip" style={{ fontSize: 10.5, padding: "3px 8px" }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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
