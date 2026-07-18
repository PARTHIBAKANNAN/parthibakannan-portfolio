import React, { useState, useEffect, useRef } from "react";
import { Network } from "lucide-react";
import { t } from "../lib/theme.js";
import { REDUCE } from "../lib/motion.js";
import { cardHoverAnimation } from "../lib/animations.js";
import { Reveal } from "./Reveal.jsx";
import { ILLOS } from "./Illustrations.jsx";
import { productionWork } from "../data/projects.js";

export function StatusBadge({ status }) {
  const inDev = status === "In development";
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 11px", borderRadius: 999,
      fontSize: 11, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace",
      background: inDev ? "rgba(245,166,35,0.14)" : "rgba(15,169,104,0.13)",
      border: `1px solid ${inDev ? "rgba(245,166,35,0.35)" : "rgba(15,169,104,0.3)"}`,
      color: inDev ? "#A9650A" : "#0A7A4D",
    }}>
      <span style={{ width: 6, height: 6, borderRadius: 3, background: inDev ? t.amberBright : t.success, animation: REDUCE ? "none" : "pulseSoft 2s infinite" }} />
      {status}
    </span>
  );
}

function ProjectTrace({ stages }) {
  const NODE_W = 148, NODE_H = 108, GAP = 48, PAD = 22;
  const totalW = PAD * 2 + stages.length * NODE_W + (stages.length - 1) * GAP;
  const H = 184, cY = H / 2;
  return (
    <div className="scroll-x" style={{ overflowX: "auto", overflowY: "hidden", padding: "16px 0" }}>
      <div style={{ position: "relative", width: `${totalW}px`, height: `${H}px`, minWidth: `${totalW}px` }}>
        <svg width={totalW} height={H} style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <defs>
            <linearGradient id="tg" x1="0" x2="1" y1="0" y2="0"><stop offset="0%" stopColor={t.iris} stopOpacity="0.55" /><stop offset="100%" stopColor={t.aurora} stopOpacity="0.55" /></linearGradient>
            <pattern id="dg" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="rgba(20,24,42,0.05)" /></pattern>
          </defs>
          <rect width={totalW} height={H} fill="url(#dg)" />
          {stages.slice(0, -1).map((_, i) => {
            const x1 = PAD + (i + 1) * NODE_W + i * GAP;
            const x2 = PAD + (i + 1) * NODE_W + (i + 1) * GAP;
            return (
              <g key={i}>
                <path d={`M ${x1} ${cY} L ${x2} ${cY}`} stroke="url(#tg)" strokeWidth="2" fill="none" className="trace-line" />
                {!REDUCE && <circle r="3.5" fill={t.aurora} style={{ filter: `drop-shadow(0 0 4px ${t.aurora})` }}><animateMotion dur="2.4s" repeatCount="indefinite" path={`M ${x1} ${cY} L ${x2} ${cY}`} begin={`${i * 0.3}s`} /></circle>}
              </g>
            );
          })}
        </svg>
        {stages.map((s, i) => {
          const Icon = s.icon;
          const x = PAD + i * (NODE_W + GAP), y = cY - NODE_H / 2;
          return (
            <div key={i} className="glass hover-card" style={{ position: "absolute", left: `${x}px`, top: `${y}px`, width: `${NODE_W}px`, minHeight: `${NODE_H}px`, padding: 14, display: "flex", flexDirection: "column", gap: 6, borderRadius: 14, zIndex: 2 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg, rgba(124,92,255,0.16), rgba(31,199,192,0.12))", border: "1px solid rgba(124,92,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={14} color={t.iris} strokeWidth={2.2} />
                </div>
                <span className="font-mono" style={{ fontSize: 9.5, color: t.inkDim }}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="font-display" style={{ fontSize: 13.5, fontWeight: 700, color: t.ink, marginTop: 4, lineHeight: 1.2 }}>{s.label}</div>
              <div style={{ fontSize: 10.5, color: t.inkMuted, lineHeight: 1.35 }}>{s.sub}</div>
              <div className="font-mono" style={{ fontSize: 9.5, color: t.aurora, marginTop: "auto" }}>{s.tech}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function SelectedWork() {
  const [active, setActive] = useState(productionWork[0].id);
  const cardRef = useRef(null);
  const project = productionWork.find(p => p.id === active);
  const Illo = ILLOS[project.id];

  useEffect(() => {
    if (cardRef.current) {
      cardHoverAnimation(cardRef.current);
    }
  }, [active]);

  return (
    <section id="work" className="section soft-bg">
      <div className="container">
        <Reveal>
          <div style={{ marginBottom: 40, maxWidth: 720 }}>
            <div className="section-eyebrow" style={{ marginBottom: 12 }}>Selected work · Cognizant</div>
            <h2 className="font-display" style={{ fontSize: "clamp(32px, 4.2vw, 44px)", fontWeight: 700, color: t.ink, margin: "0 0 16px", lineHeight: 1.1 }}>Production Gen AI systems.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: t.inkMuted, margin: 0 }}>Built for a healthcare platform serving CVS Health — from an autonomous SDLC agent to contract retrieval at scale, with LLM features integrated into a production .NET MVC system. Each one is shown with the trace it actually runs as: the stages, the technology, and the flow of a request through the stack.</p>
          </div>
        </Reveal>

        <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
          {productionWork.map(p => {
            const isActive = p.id === active;
            return (
              <button key={p.id} onClick={() => setActive(p.id)} style={{
                padding: "10px 18px", borderRadius: 11, cursor: "pointer", fontSize: 13.5, fontWeight: 600, transition: "all 0.18s",
                border: isActive ? `1px solid ${t.iris}` : "1px solid var(--ghost-border)",
                background: isActive ? "linear-gradient(180deg, #8366FF, #6A43E0)" : "var(--ghost-bg)",
                color: isActive ? "#fff" : t.inkMuted,
                boxShadow: isActive ? "inset 0 1px 0 rgba(255,255,255,0.3), 0 12px 26px -12px rgba(106,67,224,0.5)" : "0 4px 12px -8px rgba(20,24,42,0.2)",
              }}>{p.title}</button>
            );
          })}
        </div>

        <div ref={cardRef} className="glass-strong hover-lift" style={{ overflow: "hidden" }}>
          {/* Cover illustration band */}
          <div style={{ position: "relative", background: "linear-gradient(120deg, rgba(124,92,255,0.10), rgba(31,199,192,0.08))", borderBottom: "1px solid var(--surface-border)", overflow: "hidden" }}>
            <Illo />
            <div style={{ position: "absolute", top: 16, right: 18 }}><StatusBadge status={project.status} /></div>
            <div style={{ position: "absolute", left: 28, bottom: 16 }}>
              <div className="section-eyebrow" style={{ color: t.iris, marginBottom: 4 }}>{project.eyebrow}</div>
              <div className="font-display" style={{ fontSize: 24, fontWeight: 700, color: "#14182A" }}>{project.title}</div>
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: 34 }}>
            <p style={{ fontSize: 15.5, color: t.inkSoft, lineHeight: 1.55, marginBottom: 26, fontStyle: "italic", maxWidth: 760 }}>{project.tagline}</p>
            <div className="proj-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28, alignItems: "start", marginBottom: 30 }}>
              {[["Problem", project.problem], ["Approach", project.approach], ["Outcome", project.outcome]].map(([k, v]) => (
                <div key={k}>
                  <div className="font-mono" style={{ fontSize: 10.5, color: t.aurora, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>{k}</div>
                  <p style={{ fontSize: 14, color: t.inkSoft, lineHeight: 1.6, margin: 0 }}>{v}</p>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 26 }}>
              {project.tech.map(tech => <span key={tech} className="chip">{tech}</span>)}
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, paddingBottom: 12, borderBottom: "1px solid var(--line)" }}>
                <Network size={14} color={t.aurora} />
                <span className="font-mono" style={{ fontSize: 11, color: t.inkMuted, letterSpacing: "0.14em", textTransform: "uppercase" }}>Architecture · live trace</span>
              </div>
              <ProjectTrace stages={project.stages} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
