import React from "react";
import { Github, ArrowUpRight, Sparkles, Layers, Video } from "lucide-react";
import { t } from "../lib/theme.js";
import { Reveal } from "./Reveal.jsx";
import { hackathonWork } from "../data/projects.js";

export function Builds() {
  return (
    <section id="builds" className="section-tight soft-bg" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="container">
        <Reveal>
          <div style={{ marginBottom: 34, maxWidth: 740 }}>
            <div className="section-eyebrow" style={{ marginBottom: 10 }}>Rapid Innovation &amp; Hackathons</div>
            <h2 className="font-display heading-huge" style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 800, color: t.ink, margin: "0 0 12px", lineHeight: 1.15 }}>
              48-Hour Prototypes to Production Architectures.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: t.inkMuted, margin: 0 }}>
              Full-stack AI-first applications shipped during competitive sprints with complete authentication, persistence, and automated workflows.
            </p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
          {hackathonWork.map((h, i) => {
            const Icon = h.icon;
            const accent = h.accent === "iris" ? t.irisBright : t.auroraBright;
            const accentDeep = h.accent === "iris" ? t.irisDeep : "#0B8A85";
            return (
              <Reveal key={h.title} delay={i * 90} style={{ height: "100%" }}>
                <div className="glass hover-card" style={{
                  height: "100%", display: "flex", flexDirection: "column", overflow: "hidden",
                  borderRadius: 18, border: "1px solid var(--surface-border)"
                }}>
                  {h.image && (
                    <div style={{ position: "relative", height: 160, flexShrink: 0, overflow: "hidden" }}>
                      <img
                        src={h.image}
                        alt=""
                        aria-hidden="true"
                        style={{
                          width: "100%", height: "100%", objectFit: "cover", display: "block",
                          transition: "transform 0.4s ease"
                        }}
                      />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,12,20,0.1) 20%, rgba(10,12,20,0.8))" }} />
                      <div style={{
                        position: "absolute", left: 20, bottom: -20, width: 44, height: 44, borderRadius: 12,
                        background: `linear-gradient(135deg, ${accent}, ${accentDeep})`, display: "flex", alignItems: "center", justifyContent: "center",
                        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.3), 0 14px 28px -10px ${accent}88`
                      }}>
                        <Icon size={20} color="#fff" strokeWidth={2.2} />
                      </div>
                    </div>
                  )}
                  <div style={{ padding: 24, paddingTop: h.image ? 32 : 24, display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3 className="font-display" style={{ fontSize: 19, fontWeight: 700, color: t.ink, margin: "0 0 8px" }}>{h.title}</h3>
                    <p style={{ fontSize: 13.5, color: t.inkSoft, lineHeight: 1.6, margin: "0 0 16px" }}>{h.desc}</p>
                    
                    {h.videoUrl && (
                      <div style={{ marginBottom: 16, borderRadius: 12, overflow: "hidden", border: `1px solid rgba(124,92,255,0.25)`, background: "#000" }}>
                        <iframe
                          src={h.videoUrl}
                          width="100%"
                          height="190"
                          allow="autoplay"
                          loading="lazy"
                          style={{ display: "block", border: "none" }}
                          title={`${h.title} demo`}
                        />
                      </div>
                    )}

                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: h.github ? 18 : 0 }}>
                      {h.tech.map(tech => <span key={tech} className="chip" style={{ fontSize: 11 }}>{tech}</span>)}
                    </div>

                    {h.github && (
                      <div style={{ marginTop: "auto", paddingTop: 14, borderTop: "1px solid var(--line)" }}>
                        <a href={h.github} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 700, color: t.irisBright }}>
                          <Github size={14} /> View Repository on GitHub <ArrowUpRight size={13} />
                        </a>
                      </div>
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
