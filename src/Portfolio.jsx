import React from "react";
import { t, cssThemeBlock } from "./lib/theme.js";
import { Nav } from "./components/Nav.jsx";
import { Hero } from "./components/Hero.jsx";
import { Credentials } from "./components/Credentials.jsx";
import { Achievements } from "./components/Achievements.jsx";
import { Experience } from "./components/Experience.jsx";
import { SelectedWork } from "./components/SelectedWork.jsx";
import { Builds } from "./components/Builds.jsx";
import { Foundations } from "./components/Foundations.jsx";
import { Leadership } from "./components/Leadership.jsx";
import { AfterHours } from "./components/AfterHours.jsx";
import { AIChatbot } from "./components/AIChatbot.jsx";
import { Stack } from "./components/Stack.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";

const globalStyles = `
${cssThemeBlock}

@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Archivo+Black&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: ${t.bg};
  color: ${t.ink};
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  transition: background 0.25s ease, color 0.25s ease;
}

.font-display { font-family: 'Archivo', sans-serif; letter-spacing: -0.02em; font-weight: 700; }
.font-body { font-family: 'Inter', sans-serif; }
.font-mono { font-family: 'JetBrains Mono', monospace; }

/* Bold editorial headline treatment — tight leading, metallic gradient fill */
.heading-huge {
  font-family: 'Archivo', sans-serif;
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 0.98;
  background: linear-gradient(180deg, var(--ink) 0%, var(--ink-soft) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: var(--ink);
}

.mesh-bg {
  position: relative;
  background:
    radial-gradient(ellipse 70% 55% at 50% -10%, var(--card-bg-strong), transparent 60%),
    ${t.bg};
}
.soft-bg {
  background: radial-gradient(ellipse 65% 60% at 50% 40%, var(--card-bg), transparent 68%);
}

.glass, .glass-strong {
  background: var(--card-bg);
  border: 1px solid var(--line);
  box-shadow: 0 1px 2px rgba(0,0,0,0.03);
  border-radius: 14px;
  position: relative;
}
.glass-strong { background: var(--card-bg-strong); border-radius: 16px; }

.chip {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 6px 13px; border-radius: 999px;
  background: transparent;
  border: 1px solid var(--chip-border);
  font-size: 11px; color: var(--ink-muted);
  font-family: 'JetBrains Mono', monospace; font-weight: 500;
  white-space: nowrap; line-height: 1.4;
}
.chip-iris, .chip-aurora { background: transparent; border-color: var(--chip-border); color: var(--ink-muted); }
.chip-amber { background: rgba(201,121,10,0.1); border-color: rgba(201,121,10,0.35); color: #A9650A; }
:root[data-theme="dark"] .chip-amber { color: #E3A130; background: rgba(227,161,48,0.1); border-color: rgba(227,161,48,0.35); }

.btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 24px; border-radius: 999px;
  background: var(--ink);
  color: var(--ink-invert); font-weight: 600; font-size: 14px; border: none; cursor: pointer;
  font-family: 'Inter', sans-serif;
  transition: transform 0.18s ease, opacity 0.22s ease;
  text-decoration: none;
}
.btn-primary:hover { transform: translateY(-1px); opacity: 0.85; }

.btn-ghost {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 24px; border-radius: 999px;
  background: var(--ghost-bg); color: ${t.ink}; font-weight: 500; font-size: 14px;
  border: 1px solid var(--ghost-border); cursor: pointer;
  font-family: 'Inter', sans-serif; text-decoration: none;
  transition: all 0.2s ease;
}
.btn-ghost:hover { transform: translateY(-1px); border-color: var(--ink-dim); background: var(--chip-bg); }

.section-eyebrow {
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink-dim); font-weight: 500;
}

.hover-card { transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, box-shadow 0.3s ease; will-change: transform; }
.hover-card:hover {
  transform: translateY(-4px);
  border-color: var(--ink-dim);
  box-shadow: 0 30px 60px -30px rgba(0,0,0,0.25);
}

.section { padding: 108px 0; position: relative; }
.section-tight { padding: 70px 0; position: relative; }
.container { max-width: 1180px; margin: 0 auto; padding: 0 32px; }

a { color: inherit; text-decoration: none; }

.skip-link {
  position: absolute; left: 12px; top: -60px; z-index: 1000;
  background: ${t.ink}; color: ${t.bg}; padding: 10px 16px; border-radius: 8px;
  font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600;
  transition: top 0.2s ease;
}
.skip-link:focus { top: 12px; }

:focus-visible {
  outline: 2px solid ${t.ink};
  outline-offset: 2px;
  border-radius: 4px;
}

.show-mobile { display: none; }

.scroll-x::-webkit-scrollbar { height: 6px; }
.scroll-x::-webkit-scrollbar-track { background: var(--chip-bg); border-radius: 3px; }
.scroll-x::-webkit-scrollbar-thumb { background: var(--scrollbar-thumb); border-radius: 3px; }
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: ${t.bgAlt}; }
::-webkit-scrollbar-thumb { background: var(--scrollbar-thumb); border-radius: 6px; }
::-webkit-scrollbar-thumb:hover { background: var(--scrollbar-thumb-hover); }

.trace-line { stroke-dasharray: 4 7; animation: dashFlow 2s linear infinite; }
@keyframes dashFlow { to { stroke-dashoffset: -22; } }
@keyframes pulseSoft { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }
@keyframes floatY { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
@keyframes spin360 { to { transform: rotate(360deg); } }
@keyframes spinS { to { transform: rotate(360deg); } }
.gear { transform-box: fill-box; transform-origin: center; animation: spin360 7s linear infinite; }
@keyframes shineSweep { 0% { transform: translateX(-130%) skewX(-18deg); } 60%,100% { transform: translateX(260%) skewX(-18deg); } }
@keyframes popIn { 0% { opacity: 0; transform: translateY(12px) scale(0.96); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
@keyframes marqueeScroll { to { transform: translateX(-50%); } }

.hero-title, .hero-subtitle, .hero-chip, .hero-image { opacity: 1; }

/* Masthead hero — a true fixed-viewport frame on desktop (everything inside is
   position:absolute so nothing can push it taller and force a scroll before the
   fold), collapsing to plain stacked flow on mobile where a single 100vh frame
   can't fit the giant name + photo + chips without cramming. */
.hero-mast { position: relative; height: 100vh; overflow: hidden; }

.hero-meta-bar { position: absolute; top: 96px; left: 0; right: 0; z-index: 3; }
.hero-meta-text { font-size: 13px; }

.hero-ghost-name {
  position: absolute; top: 82px; left: 0; right: 0; text-align: center;
  transform: scaleY(3.3); transform-origin: top;
  font-weight: 900; letter-spacing: -0.055em;
  font-size: clamp(150px, min(56vh, 15vw), 560px);
  line-height: 1; white-space: nowrap; pointer-events: none; z-index: 0; user-select: none;
}

.hero-edge-label { position: absolute; top: 30%; z-index: 3; font-size: 10.5px; }

/* Desktop's photo is smaller relative to the letters behind it, so a fade
   starting too early washes out most of the visible image, making the bold
   ghost letters/buttons look harsh by contrast. Mobile's bigger photo needs
   the earlier, longer fade to blend into the black background as requested. */
.hero-portrait-mask {
  mask-image: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 72%, rgba(255,255,255,0) 100%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 72%, rgba(255,255,255,0) 100%);
}

.hero-portrait-wrap {
  position: absolute; left: 0; right: 0; bottom: 0; margin: 0 auto;
  width: fit-content; height: min(58vh, 540px); overflow: hidden; z-index: 2; pointer-events: none;
}

.hero-bottom-left { position: absolute; left: 32px; bottom: 34px; z-index: 3; }
.hero-bottom-right { position: absolute; right: 32px; bottom: 34px; z-index: 3; }

/* The ghost name now runs tall enough to pass directly behind the bottom chips/
   CTA — fine, since it's decorative, EXCEPT that .chip and .btn-ghost are
   deliberately transparent-background hairline pills everywhere else on the
   page. Sitting on the letters, that transparency lets the letterforms show
   straight through and clobber legibility. Give hero instances a real opaque
   backing so they stay readable regardless of what's behind them. */
.hero-solid { background: var(--bg) !important; }

@media (max-width: 1100px) {
  /* Mobile now mirrors the reference's actual composition: the photo is big,
     bottom-anchored, and the chips/tagline/CTA overlay directly on its lower
     portion (solid .hero-solid backgrounds keep them legible) — not a
     separate stacked block underneath with a gap of dead space. */
  .hero-mast { height: auto; min-height: 100vh; padding-top: 120px; overflow: hidden; }
  /* A fixed, safely-narrow width decouples size from the height-driven photo —
     the <img> renders at its natural undistorted width (from height alone,
     confirmed adding max-width here would distort it) and gets centered +
     clipped by this fixed-width box instead of dictating the box's width. */
  .hero-portrait-wrap { height: min(60vh, 520px); width: min(80vw, 320px); }
  .hero-bottom-left { position: absolute; left: 20px; right: 20px; bottom: 104px; max-width: none !important; }
  .hero-bottom-right { display: none; }
  .hero-mobile-cta { position: absolute; left: 20px; right: 20px; bottom: 24px; z-index: 4; }
  /* Ghost name / meta bar / edge labels are no longer desktop-only — shown at a
     scale that fits the stacked mobile layout instead of the fixed 100vh frame. */
  /* .hero-mast's padding-top only shifts in-flow children — .hero-meta-bar
     stays position:absolute even on mobile, so it needs its own explicit
     clearance from the fixed nav rather than inheriting the section's padding. */
  .hero-meta-bar { top: 88px; }
  .hero-meta-text { font-size: 9px; letter-spacing: 0.14em !important; }
  /* Fonts have real ink (cap height) covering only roughly half of a
     line-height:1 box — the rest is invisible reserved ascent/descent space.
     A moderate scaleY was leaving that invisible margin big enough to look
     like a dead gap between the letters and the photo below. Anchoring
     higher and stretching much further down closes that gap with real
     visible ink, not just a bigger empty box. */
  /* scaleX squeezes the letters horizontally, independent of the width-fit
     font-size formula — it can't reintroduce the overflow bug, and it opens
     up clear black margin at the edges for the vertical labels to sit in. */
  /* Reaching all the way to shoulder level meant crossing directly through the
     face/eyes, which reads as messy rather than intentional (unlike the
     reference, where the head sits in the letters' negative space rather
     than under a letter stroke). Pulling the reach back to roughly the
     hairline keeps the overlap to a subtle accent instead of a collision. */
  .hero-ghost-name { top: 130px; transform: scaleX(0.78) scaleY(9); font-size: clamp(60px, min(28vh, 15vw), 220px); }
  .hero-edge-label { top: 22%; font-size: 8.5px; }
  .hero-portrait-mask {
    mask-image: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 48%, rgba(255,255,255,0) 100%);
    -webkit-mask-image: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 48%, rgba(255,255,255,0) 100%);
  }
}
@media (max-width: 420px) {
  .hero-bottom-left, .hero-mobile-cta { padding: 0 16px; }
  .hero-meta-text { font-size: 8px; }
}

/* Marquee strip (see Stack section) */
.marquee-track { display: flex; width: max-content; animation: marqueeScroll 34s linear infinite; }
.marquee-content {
  display: flex; align-items: center; gap: 10px;
  padding-right: 10px; white-space: nowrap;
}
@media (prefers-reduced-motion: reduce) { .marquee-track { animation: none; } }

@media (max-width: 980px) { .proj-grid { grid-template-columns: 1fr !important; gap: 26px !important; } }
@media (max-width: 1100px) {
  .hide-mobile { display: none !important; }
  .show-mobile { display: flex; }
}
@media (max-width: 880px) {
  .section { padding: 68px 0; }
  .section-tight { padding: 46px 0; }
  .container { padding: 0 20px; }
}
@media (max-width: 420px) {
  .container { padding: 0 16px; }
  .section { padding: 52px 0; }
  .section-tight { padding: 36px 0; }
}
@media (prefers-reduced-motion: reduce) {
  .trace-line, .gear, .shine { animation: none !important; }
}
`;

export default function Portfolio() {
  return (
    <div className="font-body" style={{ background: t.bg, color: t.ink, minHeight: "100vh" }}>
      <style>{globalStyles}</style>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Nav />
      <main id="main-content">
        <Hero />
        <Credentials />
        <Achievements />
        <Experience />
        <SelectedWork />
        <Builds />
        <Foundations />
        <Leadership />
        <AfterHours />
        <Stack />
        <Contact />
      </main>
      <AIChatbot />
      <Footer />
    </div>
  );
}
