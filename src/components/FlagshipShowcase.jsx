import React, { useState } from "react";
import { ArrowUpRight, Github, ExternalLink, Activity, Network, Zap, Sparkles, Radio, ShieldCheck, Gauge, Layers } from "lucide-react";
import { t } from "../lib/theme.js";
import { REDUCE } from "../lib/motion.js";
import { Reveal } from "./Reveal.jsx";
import { flagshipQuantWork } from "../data/projects.js";
import { StrategySimulator } from "./StrategySimulator.jsx";

function QuantTrace({ stages }) {
  const NODE_W = 152, NODE_H = 108, GAP = 46, PAD = 20;
  const totalW = PAD * 2 + stages.length * NODE_W + (stages.length - 1) * GAP;
  const H = 180, cY = H / 2;

  return (
    <div className="scroll-x" style={{ overflowX: "auto", overflowY: "hidden", padding: "12px 0" }}>
      <div style={{ position: "relative", width: `${totalW}px`, height: `${H}px`, minWidth: `${totalW}px` }}>
        <svg width={totalW} height={H} style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <defs>
            <linearGradient id="quantGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={t.irisBright} stopOpacity="0.8" />
              <stop offset="50%" stopColor={t.auroraBright} stopOpacity="0.8" />
              <stop offset="100%" stopColor={t.amberBright} stopOpacity="0.8" />
            </linearGradient>
            <pattern id="quantGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="rgba(124,92,255,0.08)" />
            </pattern>
          </defs>
          <rect width={totalW} height={H} fill="url(#quantGrid)" />
          {stages.slice(0, -1).map((_, i) => {
            const x1 = PAD + (i + 1) * NODE_W + i * GAP;
            const x2 = PAD + (i + 1) * NODE_W + (i + 1) * GAP;
            return (
              <g key={i}>
                <path d={`M ${x1} ${cY} L ${x2} ${cY}`} stroke="url(#quantGrad)" strokeWidth="2.2" fill="none" className="trace-line" />
                {!REDUCE && (
                  <circle r="4" fill={t.auroraBright} style={{ filter: `drop-shadow(0 0 6px ${t.auroraBright})` }}>
                    <animateMotion dur="2.2s" repeatCount="indefinite" path={`M ${x1} ${cY} L ${x2} ${cY}`} begin={`${i * 0.25}s`} />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>
        {stages.map((s, i) => {
          const Icon = s.icon;
          const x = PAD + i * (NODE_W + GAP), y = cY - NODE_H / 2;
          return (
            <div key={i} className="glass hover-card" style={{
              position: "absolute", left: `${x}px`, top: `${y}px`, width: `${NODE_W}px`, minHeight: `${NODE_H}px`,
              padding: 14, display: "flex", flexDirection: "column", gap: 5, borderRadius: 14, zIndex: 2,
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{
                  width: 28, height: 28, borderRadius: 8,
                  background: `linear-gradient(135deg, rgba(124,92,255,0.18), rgba(31,199,192,0.18))`,
                  border: `1px solid rgba(124,92,255,0.3)`, display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  <Icon size={14} color={t.irisBright} strokeWidth={2.2} />
                </div>
                <span className="font-mono" style={{ fontSize: 9.5, color: "var(--ink-dim)" }}>0{i + 1}</span>
              </div>
              <div className="font-display" style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)", marginTop: 3 }}>{s.label}</div>
              <div style={{ fontSize: 10, color: "var(--ink-muted)", lineHeight: 1.3 }}>{s.sub}</div>
              <div className="font-mono" style={{ fontSize: 9.5, color: t.auroraBright, marginTop: "auto", fontWeight: 600 }}>{s.tech}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function FlagshipShowcase() {
  const [activeId, setActiveId] = useState(flagshipQuantWork[0].id);
  const project = flagshipQuantWork.find(p => p.id === activeId) || flagshipQuantWork[0];

  return (
    <section id="trading" className="section soft-bg" style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="container">
        <Reveal>
          <div style={{ marginBottom: 36, maxWidth: 820 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 12px", borderRadius: 999, background: "rgba(31,199,192,0.12)", border: "1px solid rgba(31,199,192,0.3)", marginBottom: 14 }}>
              <span style={{ width: 7, height: 7, borderRadius: 999, background: t.success, boxShadow: `0 0 8px ${t.success}` }} />
              <span className="font-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: t.auroraBright }}>Flagship Quant &amp; AI Terminals</span>
            </div>
            <h2 className="font-display heading-huge" style={{ fontSize: "clamp(30px, 4.2vw, 44px)", margin: "0 0 16px", color: t.ink }}>
              High-frequency momentum &amp; autonomous derivatives.
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.65, color: t.inkMuted, margin: 0 }}>
              Live production trading systems engineered with low-latency Python FastAPI backends, FYERS v3 millisecond WebSocket binary ticks, in-memory delta calculations, and embedded <strong>Google Gemini 3.6 Flash AI Copilot</strong> intelligence.
            </p>
          </div>
        </Reveal>

        {/* Project Selector Tabs */}
        <div style={{ display: "flex", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
          {flagshipQuantWork.map(p => {
            const isActive = p.id === activeId;
            return (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                style={{
                  padding: "11px 22px", borderRadius: 999, cursor: "pointer", fontSize: 14, fontWeight: 700,
                  transition: "all 0.22s cubic-bezier(0.16, 1, 0.3, 1)",
                  border: isActive ? `1.5px solid ${t.irisBright}` : "1px solid var(--chip-border)",
                  background: isActive ? "linear-gradient(135deg, rgba(124,92,255,0.22), rgba(31,199,192,0.18))" : "var(--chip-bg)",
                  color: isActive ? t.ink : "var(--ink-muted)",
                  boxShadow: isActive ? `0 0 24px -6px rgba(124,92,255,0.4)` : "none",
                  display: "flex", alignItems: "center", gap: 10
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: 999, background: isActive ? t.success : "var(--ink-dim)", boxShadow: isActive ? `0 0 8px ${t.success}` : "none" }} />
                {p.title.split("·")[0]}
                <span className="font-mono" style={{ fontSize: 11, opacity: 0.85, textTransform: "uppercase", color: isActive ? t.auroraBright : "inherit" }}>
                  {p.id === "pulsehunter" ? "Momentum + Gemini AI" : "6-Strategy Derivatives"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Featured Project Showcase Container */}
        <div className="glass-strong" style={{ overflow: "hidden" }}>
          <div key={project.id} style={{ animation: REDUCE ? "none" : "popIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both" }}>

            {/* Visual Hero Mockup Banner with Window Titlebar */}
            <div style={{ position: "relative", width: "100%", maxHeight: 420, overflow: "hidden", background: "#05070D" }}>
              
              {/* Terminal Titlebar Chrome */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, zIndex: 4,
                padding: "8px 16px", background: "rgba(10,14,26,0.85)", backdropFilter: "blur(8px)",
                borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 10, height: 10, borderRadius: 5, background: "#FF5F56" }} />
                  <span style={{ width: 10, height: 10, borderRadius: 5, background: "#FFBD2E" }} />
                  <span style={{ width: 10, height: 10, borderRadius: 5, background: "#27C93F" }} />
                  <span className="font-mono" style={{ fontSize: 11, color: "var(--ink-dim)", marginLeft: 8 }}>
                    {project.id === "pulsehunter" ? "https://trading-dashboard-1.duckdns.org" : "https://trading-dashboard-1.duckdns.org/options-simulator"}
                  </span>
                </div>
                <div className="font-mono" style={{ fontSize: 10, color: t.auroraBright, display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ width: 5, height: 5, borderRadius: 3, background: t.success }} /> FYERS v3 Live Stream
                </div>
              </div>

              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%",
                  display: "block", filter: "brightness(0.96) contrast(1.05)", paddingTop: 32,
                  maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0.1) 96%, rgba(0,0,0,0) 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0.1) 96%, rgba(0,0,0,0) 100%)",
                }}
              />
              
              {/* Status Floating Pill */}
              <div style={{ position: "absolute", top: 48, right: 22, zIndex: 3, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 16px", borderRadius: 999,
                    background: "rgba(15,169,104,0.18)", border: "1.2px solid rgba(15,169,104,0.45)",
                    color: "#0FA968", fontSize: 12.5, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace",
                    boxShadow: "0 0 16px rgba(15,169,104,0.3)", backdropFilter: "blur(12px)", transition: "all 0.18s"
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(15,169,104,0.28)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(15,169,104,0.18)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <span style={{ width: 7, height: 7, borderRadius: 4, background: "#0FA968", animation: REDUCE ? "none" : "pulseSoft 1.5s infinite" }} />
                  {project.status} (duckdns.org) <ArrowUpRight size={14} />
                </a>
              </div>

              {/* Title Overlay in Banner */}
              <div style={{ position: "absolute", left: 32, bottom: 24, zIndex: 3, maxWidth: 680 }}>
                <div className="section-eyebrow" style={{ color: t.auroraBright, marginBottom: 6, fontWeight: 700 }}>{project.eyebrow}</div>
                <h3 className="font-display" style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, color: "#FFFFFF", margin: 0, textShadow: "0 2px 14px rgba(0,0,0,0.8)" }}>
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Content Details */}
            <div style={{ padding: "34px 32px" }}>
              <p style={{ fontSize: 16, color: t.inkSoft, lineHeight: 1.6, marginBottom: 28, fontWeight: 500, maxWidth: 860 }}>
                {project.tagline}
              </p>

              {/* Live Metric Highlights */}
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14, marginBottom: 32,
                padding: 18, borderRadius: 14, background: "rgba(124,92,255,0.05)", border: "1px solid rgba(124,92,255,0.15)"
              }}>
                {project.metrics.map(m => (
                  <div key={m.label} style={{ padding: "4px 8px" }}>
                    <div className="font-mono" style={{ fontSize: 11, color: "var(--ink-dim)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{m.label}</div>
                    <div className="font-display" style={{ fontSize: 18, fontWeight: 700, color: t.irisBright }}>{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Problem · Approach · Outcome Grid */}
              <div className="proj-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 26, marginBottom: 30 }}>
                <div>
                  <div className="font-mono" style={{ fontSize: 11, color: t.irisBright, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8, fontWeight: 700 }}>
                    Core Challenge
                  </div>
                  <p style={{ fontSize: 14, color: t.inkSoft, lineHeight: 1.65, margin: 0 }}>{project.problem}</p>
                </div>
                <div>
                  <div className="font-mono" style={{ fontSize: 11, color: t.auroraBright, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8, fontWeight: 700 }}>
                    Engineering Approach
                  </div>
                  <p style={{ fontSize: 14, color: t.inkSoft, lineHeight: 1.65, margin: 0 }}>{project.approach}</p>
                </div>
                <div>
                  <div className="font-mono" style={{ fontSize: 11, color: t.success, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8, fontWeight: 700 }}>
                    Impact &amp; Performance
                  </div>
                  <p style={{ fontSize: 14, color: t.inkSoft, lineHeight: 1.65, margin: 0 }}>{project.outcome}</p>
                </div>
              </div>

              {/* Tech Chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 28 }}>
                {project.tech.map(tech => (
                  <span key={tech} className="chip" style={{
                    background: "rgba(124,92,255,0.06)", borderColor: "rgba(124,92,255,0.2)", color: "var(--ink)"
                  }}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Live Architecture Dataflow Trace */}
              <div style={{ marginBottom: 32 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, paddingBottom: 10, borderBottom: "1px solid var(--line)" }}>
                  <Network size={15} color={t.auroraBright} />
                  <span className="font-mono" style={{ fontSize: 11.5, color: "var(--ink-soft)", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700 }}>
                    Real-Time Signal Pipeline · Live Architecture
                  </span>
                </div>
                <QuantTrace stages={project.stages} />
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, paddingTop: 16, borderTop: "1px solid var(--line)", alignItems: "center" }}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    background: `linear-gradient(135deg, ${t.irisBright}, ${t.irisDeep})`,
                    color: "#fff", fontWeight: 700, padding: "12px 24px", fontSize: 14
                  }}
                >
                  <ExternalLink size={15} /> Launch Live Terminal ({project.id === "pulsehunter" ? "trading-dashboard-1.duckdns.org" : "options-simulator"})
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <Github size={15} /> View Source on GitHub <ArrowUpRight size={14} />
                </a>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent("portfolio:open-chat"))}
                  className="btn-ghost"
                  style={{ marginLeft: "auto" }}
                >
                  <Sparkles size={15} color={t.irisBright} /> Ask Assistant About {project.id === "pulsehunter" ? "Gemini Copilot" : "Greeks Engine"}
                </button>
              </div>

            </div>
          </div>

          {/* Interactive Strategy Simulator Embedded Section */}
          <StrategySimulator />

        </div>
      </div>
    </section>
  );
}
