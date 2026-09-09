import React, { useState } from "react";
import { Cpu, BrainCircuit, ShieldCheck, Zap, Server, Layers, Code2, Terminal, CheckCircle2, Sparkles, BarChart2 } from "lucide-react";
import { t } from "../lib/theme.js";
import { Reveal } from "./Reveal.jsx";
import { stack, engineeringTenets } from "../data/content.js";

const MARQUEE_HIGHLIGHTS = [
  "Azure OpenAI (GPT-4o)", "Hybrid RAG (BM25 + Vector)", "Google Gemini 3.6 Flash",
  ".NET 8 / C#", "Python (FastAPI)", "FYERS v3 WebSockets", "Black-Scholes & Greeks",
  "React & Canvas Charts", "Azure AI Search", "Cosmos DB", "Agentic Tool Calling",
  "NUnit & PyTest", "Supabase Auth"
];

function StackMarquee() {
  const track = [...MARQUEE_HIGHLIGHTS, ...MARQUEE_HIGHLIGHTS];
  return (
    <div style={{ overflow: "hidden", marginBottom: 34, maskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)" }}>
      <div className="marquee-track">
        {track.map((item, i) => (
          <span key={i} className="marquee-content">
            <span className="chip chip-iris" style={{ fontSize: 12, padding: "5px 12px" }}>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const CATEGORY_META = {
  "Quant & Real-Time Trading": { icon: Zap, color: t.auroraBright, level: "Production Tier", desc: "Sub-millisecond market feed ingestion, in-memory options math, and high-frequency WebSocket broadcasters." },
  "AI / LLM & RAG": { icon: BrainCircuit, color: t.irisBright, level: "Enterprise Tier", desc: "Hybrid BM25+vector RAG over 10L+ contracts, schema-enforced tool execution, and multi-model agentic pipelines." },
  "Desktop AI, Audio & Systems": { icon: Terminal, color: t.amberBright, level: "Core Architecture", desc: "Native Windows APIs, real-time Voice Activity Detection (VAD), audio biometrics, and low-latency GUI dispatch." },
  "Cloud & Distributed Platforms": { icon: Server, color: t.success, level: "Production Cloud", desc: "High-availability enterprise microservices on Azure, transactional serverless databases, and message queues." },
  "Backend": { icon: Code2, color: t.irisBright, level: "Full-Stack Backbone", desc: "Thread-safe asynchronous APIs, RESTX documentation, connection pooling, and JWT authentication flows." },
  "Frontend": { icon: Layers, color: t.auroraBright, level: "High-FPS Experience", desc: "Ultra-fluid HTML5 canvas rendering, responsive layouts, real-time telemetry state synchronization." },
  "DevOps, Testing & QA": { icon: ShieldCheck, color: t.amberBright, level: "Zero-Downtime CI/CD", desc: "Automated regression suites, enterprise Snyk security scans, and continuous deployment pipelines." },
};

export function Stack() {
  const [activeGroup, setActiveGroup] = useState(null);

  return (
    <section id="skills" className="section soft-bg" style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="container">
        
        {/* Section Header */}
        <Reveal>
          <div style={{ marginBottom: 36, maxWidth: 860 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 12px", borderRadius: 999, background: "rgba(124,92,255,0.12)", border: "1px solid rgba(124,92,255,0.3)", marginBottom: 14 }}>
              <Sparkles size={13} color={t.irisBright} />
              <span className="font-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: t.irisBright }}>
                Tool Proficiency &amp; Technical Stack
              </span>
            </div>
            <h2 className="font-display heading-huge" style={{ fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 800, color: t.ink, margin: "0 0 16px", lineHeight: 1.15 }}>
              Skills &amp; Engineering Disciplines.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: t.inkMuted, margin: 0 }}>
              Deep hands-on proficiency across production AI architectures, quantitative low-latency systems, distributed enterprise clouds, and mission-critical backend microservices.
            </p>
          </div>
        </Reveal>

        {/* Live Marquee Strip */}
        <StackMarquee />

        {/* High-Impact Engineering Architectural Tenets */}
        <Reveal delay={60}>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16,
            marginBottom: 36
          }}>
            {engineeringTenets.map((tenet, idx) => {
              const Icon = tenet.icon;
              return (
                <div
                  key={tenet.title}
                  className="glass hover-card"
                  style={{
                    padding: "20px 22px", borderRadius: 16,
                    border: "1px solid var(--surface-border)",
                    display: "flex", flexDirection: "column", gap: 8
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{
                      width: 34, height: 34, borderRadius: 10,
                      background: "rgba(124,92,255,0.12)", border: "1px solid rgba(124,92,255,0.25)",
                      display: "flex", alignItems: "center", justifyContent: "center"
                    }}>
                      <Icon size={16} color={t.irisBright} />
                    </div>
                    <h4 className="font-display" style={{ fontSize: 14, fontWeight: 700, color: t.ink, margin: 0 }}>
                      {tenet.title}
                    </h4>
                  </div>
                  <p style={{ fontSize: 12.5, lineHeight: 1.55, color: t.inkSoft, margin: 0 }}>
                    {tenet.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Deep Skill Categories Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
          {stack.map((g, i) => {
            const meta = CATEGORY_META[g.group] || { icon: Cpu, color: t.irisBright, level: "Proficient", desc: "" };
            const Icon = meta.icon;
            const isHovered = activeGroup === g.group;

            return (
              <Reveal key={g.group} delay={i * 60} style={{ height: "100%" }}>
                <div
                  className="glass hover-card"
                  onMouseEnter={() => setActiveGroup(g.group)}
                  onMouseLeave={() => setActiveGroup(null)}
                  style={{
                    padding: "24px 26px", height: "100%", borderRadius: 18,
                    display: "flex", flexDirection: "column",
                    border: isHovered ? `1.5px solid ${meta.color}` : "1px solid var(--surface-border)",
                    transition: "all 0.22s ease",
                    boxShadow: isHovered ? `0 14px 34px -14px rgba(124,92,255,0.25)` : undefined
                  }}
                >
                  {/* Category Header */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 12 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{
                        width: 36, height: 36, borderRadius: 10,
                        background: `linear-gradient(135deg, rgba(124,92,255,0.15), rgba(31,199,192,0.15))`,
                        border: "1px solid var(--chip-border)",
                        display: "flex", alignItems: "center", justifyContent: "center"
                      }}>
                        <Icon size={18} color={meta.color} />
                      </div>
                      <h3 className="font-display" style={{ fontSize: 16, fontWeight: 700, color: t.ink, margin: 0 }}>
                        {g.group}
                      </h3>
                    </div>
                    <span className="font-mono" style={{ fontSize: 10, color: meta.color, background: "rgba(255,255,255,0.04)", padding: "3px 9px", borderRadius: 999, border: "1px solid var(--chip-border)", whiteSpace: "nowrap" }}>
                      {meta.level}
                    </span>
                  </div>

                  {/* Summary Description */}
                  <p style={{ fontSize: 13, color: t.inkSoft, lineHeight: 1.5, margin: "0 0 16px", minHeight: 38 }}>
                    {meta.desc}
                  </p>

                  {/* Tech Chips with Interactive Touch */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: "auto" }}>
                    {g.items.map(it => (
                      <span
                        key={it}
                        className="chip"
                        style={{
                          fontSize: 12, padding: "4px 10px",
                          background: "var(--chip-bg)",
                          borderColor: "var(--chip-border)",
                          color: "var(--ink)",
                          fontWeight: 500
                        }}
                      >
                        {it}
                      </span>
                    ))}
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

