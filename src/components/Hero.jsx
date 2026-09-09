import React, { useEffect } from "react";
import { ArrowRight, Bot, Download, MapPin, Award, Trophy, Sparkles, Zap, ExternalLink, Activity, Radio, ShieldCheck } from "lucide-react";
import { t } from "../lib/theme.js";
import { REDUCE } from "../lib/motion.js";
import { animateHeroEntrance } from "../lib/animations.js";

const PORTRAIT = "/portrait.jpg";
const RESUME_PDF = "/resume.pdf";

export function Hero() {
  useEffect(() => {
    const ctx = animateHeroEntrance();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section id="top" className="mesh-bg" style={{ paddingTop: 104, paddingBottom: 54, position: "relative", overflow: "hidden" }}>
      <div className="container">
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.18fr 0.82fr", gap: 46, alignItems: "center" }}>
          
          {/* Left Column: Command Center & Launchpad */}
          <div>
            {/* Identity Badge Row */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 18, alignItems: "center" }}>
              <span className="chip chip-iris hero-chip">
                <span style={{ width: 6, height: 6, borderRadius: 3, background: t.success, boxShadow: `0 0 8px ${t.success}` }} /> Available
              </span>
              <span className="chip hero-chip"><MapPin size={11} /> Chennai, India</span>
              <span className="chip chip-aurora hero-chip">Gen AI Developer · Cognizant</span>
              <span className="chip chip-amber hero-chip"><Trophy size={11} /> Best GenC Star 2025</span>
              <span className="chip" style={{ background: "rgba(124,92,255,0.12)", borderColor: "rgba(124,92,255,0.35)", color: t.irisBright, fontWeight: 700 }}>
                <Sparkles size={11} /> Claude &amp; Azure Certified
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display hero-title" style={{ fontSize: "clamp(32px, 4.8vw, 54px)", fontWeight: 800, lineHeight: 1.1, margin: "0 0 18px", color: t.ink, letterSpacing: "-0.03em" }}>
              Architecting Enterprise Gen AI &amp;<br />
              <span style={{
                background: `linear-gradient(120deg, ${t.irisBright} 0%, ${t.auroraBright} 60%, ${t.amberBright} 100%)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
              }}>
                Distributed Autonomous Systems.
              </span>
            </h1>

            {/* Bio */}
            <p className="hero-subtitle" style={{ fontSize: 16, lineHeight: 1.65, color: t.inkSoft, maxWidth: 600, margin: "0 0 28px", fontWeight: 500 }}>
              Microsoft &amp; Anthropic certified AI Engineer at Cognizant building enterprise RAG pipelines indexing <strong>10,00,000+ contracts for CVS Health</strong>, autonomous developer agents, and high-concurrency real-time systems (FastAPI, WebSockets, .NET 8, and Google Gemini).
            </p>

            {/* Launchpad CTA Deck */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32, alignItems: "center" }}>
              <a
                href={RESUME_PDF}
                download="Parthibakannan_Resume.pdf"
                className="btn-primary"
                style={{
                  background: `linear-gradient(135deg, ${t.irisBright}, ${t.aurora})`,
                  color: "#fff", fontWeight: 700, padding: "12px 22px", fontSize: 14,
                  boxShadow: "0 14px 30px -10px rgba(106,67,224,0.55)"
                }}
              >
                <Download size={16} /> Download Resume
              </a>
              <a href="#work" className="btn-ghost" style={{ padding: "12px 20px", fontSize: 13.5, fontWeight: 700 }}>
                Enterprise AI <ArrowRight size={14} />
              </a>
              <a
                href="#systems"
                className="btn-ghost"
                style={{ borderColor: "rgba(31,199,192,0.35)", color: t.auroraBright, fontWeight: 700, padding: "12px 18px", fontSize: 13.5 }}
              >
                <Activity size={15} /> Real-Time Systems ↗
              </a>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("portfolio:open-chat"))}
                className="btn-ghost"
                style={{ padding: "12px 18px", fontSize: 13.5 }}
              >
                <Bot size={15} /> Ask AI Copilot
              </button>
            </div>

            {/* Compact Metric Ribbon */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 14,
              padding: "16px 20px", borderRadius: 14, background: "rgba(124,92,255,0.04)", border: "1px solid rgba(124,92,255,0.14)"
            }}>
              {[
                { n: "212+ Stocks", l: "PulseHunter Live Charts", accent: t.auroraBright },
                { n: "44 Strategies", l: "NUKEBOX Multi-Index Engine", accent: t.irisBright },
                { n: "10,00,000+", l: "Contracts Indexed", accent: t.amberBright },
                { n: "4 Certs", l: "Microsoft · Anthropic", accent: t.success },
              ].map(s => (
                <div key={s.l}>
                  <div className="font-display" style={{ fontSize: 18, fontWeight: 800, color: s.accent }}>{s.n}</div>
                  <div className="font-mono" style={{ fontSize: 9.5, letterSpacing: "0.06em", color: "var(--ink-dim)", textTransform: "uppercase", marginTop: 3 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Clean Unobstructed Portrait Frame */}
          <div className="hero-image hide-mobile" style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: 330 }}>
              
              {/* Glowing Ambient Aura */}
              <div style={{
                position: "absolute", inset: -26, borderRadius: 36,
                background: `radial-gradient(circle at 30% 20%, rgba(124,92,255,0.4), transparent 60%), radial-gradient(circle at 80% 90%, rgba(31,199,192,0.35), transparent 60%)`,
                filter: "blur(30px)", zIndex: 0
              }} />

              {/* Clean Portrait Glass Card */}
              <div className="glass-strong" style={{ position: "relative", padding: 10, borderRadius: 24, zIndex: 1 }}>
                <div style={{ position: "relative", borderRadius: 18, overflow: "hidden", aspectRatio: "500 / 600" }}>
                  <img src={PORTRAIT} alt="Parthibakannan S" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
                  <div style={{ position: "absolute", inset: 0, background: `linear-gradient(160deg, rgba(124,92,255,0.08), transparent 40%, rgba(31,199,192,0.06))`, pointerEvents: "none" }} />
                </div>
              </div>

              {/* Floating Holographic IIT Madras Badge */}
              <div style={{
                position: "absolute", top: -16, right: -24, zIndex: 3,
                background: "#fff", border: "1.5px solid rgba(245,166,35,0.5)", borderRadius: 12, padding: "9px 14px",
                boxShadow: "0 18px 40px -14px rgba(245,166,35,0.55)",
                animation: REDUCE ? "none" : "floatY 7s ease-in-out infinite reverse",
                display: "flex", alignItems: "center", gap: 8,
              }}>
                <Award size={16} color={t.amber} />
                <div>
                  <div className="font-display" style={{ fontSize: 12, fontWeight: 800, color: "#14182A", lineHeight: 1 }}>IIT Madras</div>
                  <div className="font-mono" style={{ fontSize: 9, color: t.amber, marginTop: 2, fontWeight: 700 }}>DIPLOMA · PROG</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
