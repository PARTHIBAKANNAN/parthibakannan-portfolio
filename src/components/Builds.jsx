import React from "react";
import { Github, ArrowUpRight, Sparkles, Layers, Video, Zap, Bot, ExternalLink, Cpu } from "lucide-react";
import { t } from "../lib/theme.js";
import { Reveal } from "./Reveal.jsx";
import { hackathonWork } from "../data/projects.js";

export function Builds() {
  return (
    <section id="builds" className="section-tight soft-bg" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="container">
        <Reveal>
          <div style={{ marginBottom: 34, maxWidth: 740 }}>
            <div className="section-eyebrow" style={{ marginBottom: 10 }}>Rapid Innovation &amp; Deployed AI Apps</div>
            <h2 className="font-display heading-huge" style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 800, color: t.ink, margin: "0 0 12px", lineHeight: 1.15 }}>
              48-Hour Prototypes to Live Deployed Architectures.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: t.inkMuted, margin: 0 }}>
              Full-stack AI-first applications shipped during competitive sprints and deployed live on Vercel + Render with complete authentication, persistence, and autonomous agentic workflows.
            </p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
          {hackathonWork.map((h, i) => {
            const Icon = h.icon;
            const accent = h.accent === "iris" ? t.irisBright : t.auroraBright;
            const accentDeep = h.accent === "iris" ? t.irisDeep : "#0B8A85";
            const isLive = h.status && h.status.includes("Live");

            return (
              <Reveal key={h.title} delay={i * 90} style={{ height: "100%" }}>
                <div className="glass hover-card" style={{
                  height: "100%", display: "flex", flexDirection: "column", overflow: "hidden",
                  borderRadius: 20, border: "1px solid var(--surface-border)"
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
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,12,20,0.1) 20%, rgba(10,12,20,0.85))" }} />
                      
                      {/* Live Badge */}
                      {isLive && (
                        <div style={{
                          position: "absolute", top: 14, right: 14,
                          background: "rgba(10,14,26,0.85)", border: `1px solid ${t.success}`,
                          borderRadius: 999, padding: "4px 10px", display: "flex", alignItems: "center", gap: 6,
                          fontSize: 10.5, fontFamily: "'JetBrains Mono', monospace", color: t.success, fontWeight: 700,
                          backdropFilter: "blur(8px)"
                        }}>
                          <span style={{ width: 6, height: 6, borderRadius: 3, background: t.success, animation: "pulseSoft 1.5s infinite" }} />
                          {h.status}
                        </div>
                      )}

                      {/* Icon */}
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
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10, marginBottom: 4 }}>
                      <h3 className="font-display" style={{ fontSize: 20, fontWeight: 800, color: t.ink, margin: 0 }}>{h.title}</h3>
                    </div>
                    {h.subtitle && (
                      <div className="font-mono" style={{ fontSize: 11, color: accent, fontWeight: 600, marginBottom: 12 }}>
                        {h.subtitle}
                      </div>
                    )}
                    
                    <p style={{ fontSize: 13.5, color: t.inkSoft, lineHeight: 1.6, margin: "0 0 16px" }}>{h.desc}</p>
                    
                    {/* Agentic Architecture Highlights */}
                    {h.agenticHighlights && (
                      <div style={{
                        marginBottom: 18, padding: "12px 14px", borderRadius: 12,
                        background: "rgba(124,92,255,0.04)", border: "1px solid rgba(124,92,255,0.12)"
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, color: t.auroraBright, fontFamily: "'JetBrains Mono', monospace", marginBottom: 8, textTransform: "uppercase" }}>
                          <Bot size={13} /> Agentic AI Architecture:
                        </div>
                        <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12, lineHeight: 1.55, color: t.inkSoft }}>
                          {h.agenticHighlights.map((hl, idx) => (
                            <li key={idx} style={{ marginBottom: 4 }}>{hl}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {h.videoUrl && (
                      <div style={{ marginBottom: 16, borderRadius: 12, overflow: "hidden", border: `1px solid rgba(124,92,255,0.25)`, background: "#000" }}>
                        <iframe
                          src={h.videoUrl}
                          width="100%"
                          height="180"
                          allow="autoplay"
                          loading="lazy"
                          style={{ display: "block", border: "none" }}
                          title={`${h.title} demo`}
                        />
                      </div>
                    )}

                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                      {h.tech.map(tech => <span key={tech} className="chip" style={{ fontSize: 11 }}>{tech}</span>)}
                    </div>

                    {/* Action Deck */}
                    <div style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid var(--line)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                      {h.liveUrl && (
                        <a
                          href={h.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary"
                          style={{
                            padding: "8px 16px", fontSize: 12.5, fontWeight: 700,
                            background: `linear-gradient(135deg, ${accent}, ${accentDeep})`
                          }}
                        >
                          Launch Live App <ExternalLink size={13} />
                        </a>
                      )}
                      {h.github && (
                        <a
                          href={h.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12.5, fontWeight: 700, color: t.irisBright }}
                        >
                          <Github size={14} /> Repository <ArrowUpRight size={13} />
                        </a>
                      )}
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
