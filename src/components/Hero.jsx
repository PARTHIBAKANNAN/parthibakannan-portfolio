import React, { useEffect } from "react";
import { ArrowRight, Bot, Download, MapPin, Trophy } from "lucide-react";
import { t } from "../lib/theme.js";
import { REDUCE } from "../lib/motion.js";
import { animateHeroEntrance } from "../lib/animations.js";
import { Reveal } from "./Reveal.jsx";

const PORTRAIT = "/portrait-cutout.png";
const RESUME_PDF = "/resume.pdf";

function DotGrid() {
  const dots = [];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 5; c++) dots.push([c, r]);
  return (
    <svg width="90" height="72" viewBox="0 0 90 72" aria-hidden="true">
      {dots.map(([c, r]) => (
        <circle key={`${c}-${r}`} cx={c * 20 + 6} cy={r * 20 + 6} r="1.6" fill="var(--ink-dim)" />
      ))}
    </svg>
  );
}

function CircuitLine() {
  return (
    <svg width="120" height="70" viewBox="0 0 120 70" aria-hidden="true" style={{ overflow: "visible" }}>
      <path d="M4 6 H90 L112 28 V60" fill="none" stroke="var(--ink-dim)" strokeWidth="1.2" />
      <circle cx="4" cy="6" r="2.5" fill="none" stroke="var(--ink-dim)" strokeWidth="1.2" />
      <circle cx="112" cy="60" r="2.5" fill="none" stroke="var(--ink-dim)" strokeWidth="1.2" />
      <path d="M4 40 h10 M9 35 v10" stroke="var(--ink-dim)" strokeWidth="1.2" />
    </svg>
  );
}

export function Hero() {
  useEffect(() => {
    const ctx = animateHeroEntrance();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <>
      {/* ── Masthead hero: giant name, cutout portrait, minimal chrome.
          Everything below is position:absolute inside a fixed 100vh frame on
          desktop (see .hero-mast etc. in Portfolio.jsx) so the whole
          composition fits in one screen like the reference, instead of
          stacking taller and forcing a scroll before the fold. ── */}
      <section id="top" className="mesh-bg hero-mast">
        {/* Giant ghost name — decorative texture layer, sits behind the portrait.
            Sized by min(vh, vw) together so the whole word always fits the viewport
            width (sizing by height alone let a tall/narrow window blow the word
            past the right edge). scaleY stretches downward from a top-anchored
            origin — not the center — so the block fills from just below the meta
            bar rather than floating centered with dead space above it. Letter
            spacing is aggressively negative for the tightly-kerned, congested
            look of the reference instead of a normal grotesque's natural spacing. */}
        <div aria-hidden="true" className="hero-ghost-name" style={{
          fontFamily: "'Archivo Black', 'Archivo', sans-serif", color: "var(--ink)", opacity: 0.94,
        }}>PARTHIBAN</div>

        {/* Edge labels — vertical mono tickers with a small pin marker, like a print masthead.
            Visible on mobile too now, not just desktop — sized down via .hero-edge-label. */}
        {/* textShadow gives these a halo so they stay legible whether they land on a
            white letter stroke or a black gap — plain color contrast can't handle
            both, since the ghost name behind them isn't a fixed, predictable backdrop. */}
        <div aria-hidden="true" className="hero-edge-label" style={{ left: 22, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <span style={{ width: 7, height: 7, borderRadius: 999, border: "1.4px solid var(--ink-muted)" }} />
          <span style={{ width: 1, height: 46, background: "var(--line)" }} />
          <span className="font-mono" style={{ writingMode: "vertical-rl", fontWeight: 700, letterSpacing: "0.22em", color: "var(--ink-muted)", textTransform: "uppercase", textShadow: "0 0 5px rgba(0,0,0,0.95), 0 0 9px rgba(0,0,0,0.8)" }}>Gen AI Engineer</span>
        </div>
        <div aria-hidden="true" className="hero-edge-label" style={{
          right: 22, writingMode: "vertical-rl", transform: "translateY(-50%)",
          fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, letterSpacing: "0.22em",
          color: "var(--ink-muted)", textTransform: "uppercase", textShadow: "0 0 5px rgba(0,0,0,0.95), 0 0 9px rgba(0,0,0,0.8)",
        }}>Chennai, India</div>

        {/* Meta bar — name · connecting line · role, bookended by small hollow squares.
            Visible on mobile too now — sized down via .hero-meta-text. */}
        <div className="container hero-meta-bar">
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span aria-hidden="true" style={{ width: 8, height: 8, border: "1.4px solid var(--ink)", flexShrink: 0 }} />
            <span className="font-mono hero-meta-text" style={{ fontWeight: 700, letterSpacing: "0.2em", color: "var(--ink-soft)", textTransform: "uppercase", whiteSpace: "nowrap" }}>Parthibakannan S</span>
            <span style={{ flex: 1, height: 1, background: "var(--line)" }} />
            <span className="font-mono hero-meta-text" style={{ fontWeight: 700, letterSpacing: "0.2em", color: "var(--ink-soft)", textTransform: "uppercase", whiteSpace: "nowrap" }}>Software Engineer</span>
            <span aria-hidden="true" style={{ width: 8, height: 8, border: "1.4px solid var(--ink)", flexShrink: 0 }} />
          </div>
        </div>

        {/* Portrait — pinned flush to the very bottom of the fixed 100vh frame, so it
            reads as filling from the middle of the screen down to the bottom edge
            rather than floating as a smaller box. Rendered taller than its visible
            box and clipped by overflow:hidden (on .hero-portrait-wrap) for a clean
            straight-line cut instead of trailing off along the cutout's silhouette
            edge. Width is capped well short of the chips/CTA columns so it never
            visually collides with them despite sharing the same bottom band. */}
        <div className="hero-portrait-wrap">
          <div className="hero-image hero-portrait-mask" style={{ height: "100%", width: "100%", overflow: "hidden" }}>
            {/* left/transform centers this independently of .hero-image's own GSAP
                scale animation — .hero-portrait-wrap can now be a fixed, safely
                narrow width (mobile) while this image renders at its natural,
                undistorted width and gets centered + clipped by the wrapper. */}
            <img src={PORTRAIT} alt="Parthibakannan S" style={{ height: "128%", width: "auto", display: "block", position: "relative", left: "50%", transform: "translateX(-50%)", filter: "grayscale(100%) contrast(1.1) brightness(1.03)" }} />
          </div>
        </div>

        {/* Bottom-left: identity chips + terminal line */}
        <div className="hero-bottom-left" style={{ maxWidth: 360 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
            <span className="chip chip-iris hero-chip hero-solid"><span style={{ width: 6, height: 6, borderRadius: 3, background: t.success, boxShadow: `0 0 8px ${t.success}` }} /> Available</span>
            <span className="chip hero-chip hero-solid"><MapPin size={11} /> Chennai, India</span>
            <span className="chip chip-aurora hero-chip hero-solid">Gen AI Engineer · Cognizant</span>
            <span className="chip chip-amber hero-chip hero-solid"><Trophy size={11} /> Best GenC Star 2025</span>
          </div>
          <div className="font-mono hero-solid" style={{ display: "inline-block", fontSize: 12, color: "var(--ink-dim)", letterSpacing: "0.04em", padding: "3px 8px", borderRadius: 6 }}>
            <span style={{ color: "var(--ink-muted)" }}>&gt;_</span> code. context. production-ready.
          </div>
        </div>

        {/* Bottom-right: CTAs + decorative dot grid + circuit line */}
        <div className="hero-bottom-right hide-mobile" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <DotGrid />
            <div style={{ display: "flex", gap: 10 }}>
              <a href="#work" className="btn-ghost hero-solid">View work <ArrowRight size={14} /></a>
              <button type="button" onClick={() => window.dispatchEvent(new CustomEvent("portfolio:open-chat"))} className="btn-primary"><Bot size={14} /> Let's talk</button>
            </div>
          </div>
          <CircuitLine />
        </div>
        <div className="hero-mobile-cta show-mobile" style={{ gap: 10 }}>
          <a href="#work" className="btn-ghost" style={{ flex: 1, justifyContent: "center" }}>View work <ArrowRight size={14} /></a>
          <button type="button" onClick={() => window.dispatchEvent(new CustomEvent("portfolio:open-chat"))} className="btn-primary" style={{ flex: 1, justifyContent: "center" }}><Bot size={14} /> Let's talk</button>
        </div>
      </section>

      {/* ── About — the "2+ years shipping…" content, relocated below the masthead ── */}
      <section className="section-tight" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="container">
          <Reveal>
            <div className="section-eyebrow" style={{ marginBottom: 16 }}>About</div>
            <h1 className="font-display heading-huge hero-title" style={{ fontSize: "clamp(30px, 4.4vw, 52px)", margin: "0 0 22px", maxWidth: 820 }}>
              2+ years shipping Generative AI to production.
            </h1>
            <p className="hero-subtitle" style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink-soft)", maxWidth: 620, margin: "0 0 34px" }}>
              Microsoft-certified Azure AI Engineer building RAG pipelines, autonomous agents, and full-stack systems — live in an enterprise healthcare platform serving CVS Health.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 40 }}>
              <a href="#work" className="btn-primary">See the work <ArrowRight size={15} /></a>
              <a href={RESUME_PDF} download="Parthibakannan_S_Resume.pdf" className="btn-ghost"><Download size={15} /> Download résumé</a>
              <button type="button" onClick={() => window.dispatchEvent(new CustomEvent("portfolio:open-chat"))} className="btn-ghost"><Bot size={15} /> Ask the assistant</button>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 30, paddingTop: 26, borderTop: "1px solid var(--line)" }}>
              {[
                { n: "10,00,000+", l: "contracts indexed" },
                { n: "3 shipped", l: "production gen-ai systems" },
                { n: "4 certs", l: "microsoft · anthropic" },
              ].map(s => (
                <div key={s.l}>
                  <div className="font-display" style={{ fontSize: 22, fontWeight: 700, color: t.ink }}>{s.n}</div>
                  <div className="font-mono" style={{ fontSize: 10.5, letterSpacing: "0.08em", color: t.inkMuted, textTransform: "uppercase", marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
