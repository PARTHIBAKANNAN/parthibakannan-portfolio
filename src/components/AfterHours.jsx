import React from "react";
import { Github, ArrowUpRight, Trophy, Gamepad2, Flame, Sparkles, Globe2, BookOpen } from "lucide-react";
import { t } from "../lib/theme.js";
import { Reveal } from "./Reveal.jsx";
import { StatusBadge } from "./SelectedWork.jsx";
import { personalRD } from "../data/projects.js";
import { duolingoStats, hackerRankStats, gamingInterests, languages } from "../data/content.js";

export function AfterHours() {
  return (
    <section id="after-hours" className="section-tight" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="container">
        <Reveal>
          <div style={{ marginBottom: 26, display: "flex", alignItems: "center", gap: 14 }}>
            <div className="section-eyebrow">Cognitive Arena &amp; Personal R&amp;D</div>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, var(--line), transparent)" }} />
          </div>
          <div style={{ maxWidth: 740, marginBottom: 28 }}>
            <h2 className="font-display heading-huge" style={{ fontSize: "clamp(24px, 3.2vw, 32px)", fontWeight: 800, color: t.ink, margin: "0 0 10px", lineHeight: 1.2 }}>
              Consistency, Tactical Foresight &amp; Languages.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: t.inkMuted, margin: 0 }}>
              What fuels the engineering mindset beyond production code — daily multilingual discipline, strategic chess tactics, and gaming arena reflex conditioning.
            </p>
          </div>
        </Reveal>

        {/* Highlighted Duolingo & HackerRank Stats Ribbon */}
        <Reveal delay={60}>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14,
            marginBottom: 28, padding: "20px 24px", borderRadius: 18,
            background: "linear-gradient(135deg, rgba(124,92,255,0.06), rgba(31,199,192,0.06))",
            border: "1px solid var(--surface-border)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(245,166,35,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Flame size={20} color={t.amberBright} />
              </div>
              <div>
                <div className="font-display" style={{ fontSize: 18, fontWeight: 800, color: t.amberBright }}>350-Day Streak 🔥</div>
                <div className="font-mono" style={{ fontSize: 10, color: "var(--ink-dim)", textTransform: "uppercase" }}>Duolingo Discipline</div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(31,199,192,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Trophy size={20} color={t.auroraBright} />
              </div>
              <div>
                <div className="font-display" style={{ fontSize: 18, fontWeight: 800, color: t.auroraBright }}>710 Elo · 24k XP</div>
                <div className="font-mono" style={{ fontSize: 10, color: "var(--ink-dim)", textTransform: "uppercase" }}>Duolingo Chess</div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(124,92,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Sparkles size={20} color={t.irisBright} />
              </div>
              <div>
                <div className="font-display" style={{ fontSize: 18, fontWeight: 800, color: t.irisBright }}>53,132 Total XP</div>
                <div className="font-mono" style={{ fontSize: 10, color: "var(--ink-dim)", textTransform: "uppercase" }}>Diamond League 💎</div>
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
