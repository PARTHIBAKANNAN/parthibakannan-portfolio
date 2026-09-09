import React from "react";
import { t, cssThemeBlock } from "./lib/theme.js";
import { Nav } from "./components/Nav.jsx";
import { Hero } from "./components/Hero.jsx";
import { FlagshipShowcase } from "./components/FlagshipShowcase.jsx";
import { TerminalPlayground } from "./components/TerminalPlayground.jsx";
import { Credentials } from "./components/Credentials.jsx";
import { Achievements } from "./components/Achievements.jsx";
import { Experience } from "./components/Experience.jsx";
import { SelectedWork } from "./components/SelectedWork.jsx";
import { Builds } from "./components/Builds.jsx";
import { Leadership } from "./components/Leadership.jsx";
import { AfterHours } from "./components/AfterHours.jsx";
import { AIChatbot } from "./components/AIChatbot.jsx";
import { Stack } from "./components/Stack.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";

const globalStyles = `
${cssThemeBlock}

@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

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

.font-display { font-family: 'Plus Jakarta Sans', sans-serif; letter-spacing: -0.025em; }
.font-body { font-family: 'Inter', sans-serif; }
.font-mono { font-family: 'JetBrains Mono', monospace; }

.mesh-bg {
  position: relative;
  background:
    radial-gradient(ellipse 65% 55% at 5% -5%, rgba(124,92,255,0.24), transparent 56%),
    radial-gradient(ellipse 60% 48% at 95% 5%, rgba(31,199,192,0.20), transparent 60%),
    radial-gradient(ellipse 60% 50% at 70% 110%, rgba(245,166,35,0.12), transparent 60%),
    ${t.bg};
}
.soft-bg {
  background:
    radial-gradient(ellipse 55% 60% at 90% 30%, rgba(31,199,192,0.08), transparent 62%),
    radial-gradient(ellipse 55% 60% at 8% 60%, rgba(124,92,255,0.08), transparent 62%),
    ${t.bg};
}

.glass {
  background: linear-gradient(180deg, var(--surface-from) 0%, var(--surface-to) 100%);
  border: 1px solid var(--surface-border);
  box-shadow:
    inset 0 1px 0 var(--surface-sheen),
    0 1px 2px rgba(20,24,42,0.04),
    0 22px 48px -28px rgba(60,42,140,0.26);
  border-radius: 16px;
  position: relative;
}
.glass-strong {
  background: linear-gradient(180deg, var(--surface-strong-from) 0%, var(--surface-strong-to) 100%);
  border: 1px solid var(--surface-border-strong);
  box-shadow:
    inset 0 1px 0 var(--surface-sheen),
    0 2px 4px rgba(20,24,42,0.04),
    0 36px 80px -34px rgba(60,42,140,0.32);
  border-radius: 22px;
  position: relative;
}
.glass::after, .glass-strong::after {
  content: "";
  position: absolute; inset: 0;
  border-radius: inherit;
  background: linear-gradient(180deg, var(--surface-sheen), transparent 32%);
  pointer-events: none;
}

.chip {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 5px 11px; border-radius: 999px;
  background: var(--chip-bg);
  border: 1px solid var(--chip-border);
  font-size: 11.5px; color: var(--chip-text);
  font-family: 'JetBrains Mono', monospace; font-weight: 600;
  white-space: nowrap; line-height: 1.4;
}
.chip-iris   { background: rgba(124,92,255,0.10); border-color: rgba(124,92,255,0.25); color: ${t.irisDeep}; }
.chip-aurora { background: rgba(31,199,192,0.10); border-color: rgba(31,199,192,0.28); color: #0A7F7A; }
.chip-amber  { background: rgba(245,166,35,0.13); border-color: rgba(245,166,35,0.34); color: #A9650A; }
:root[data-theme="dark"] .chip-iris   { color: #C7B8FF; }
:root[data-theme="dark"] .chip-aurora { color: #6FE9E2; }
:root[data-theme="dark"] .chip-amber  { color: #FFCB7A; }

.btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 11px 22px; border-radius: 12px;
  background: linear-gradient(180deg, #8366FF 0%, #6A43E0 100%);
  color: #fff; font-weight: 700; font-size: 14px; border: none; cursor: pointer;
  font-family: 'Inter', sans-serif;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.12), 0 14px 30px -10px rgba(106,67,224,0.5);
  transition: transform 0.18s ease, box-shadow 0.22s ease;
  text-decoration: none;
}
.btn-primary:hover { transform: translateY(-1px); box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), 0 18px 38px -10px rgba(106,67,224,0.65); }

.btn-ghost {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 11px 22px; border-radius: 12px;
  background: var(--ghost-bg); color: ${t.ink}; font-weight: 600; font-size: 14px;
  border: 1px solid var(--ghost-border); cursor: pointer;
  font-family: 'Inter', sans-serif; text-decoration: none;
  box-shadow: 0 6px 16px -10px rgba(20,24,42,0.2);
  transition: all 0.2s ease;
}
.btn-ghost:hover { transform: translateY(-1px); border-color: rgba(106,67,224,0.4); box-shadow: 0 10px 24px -10px rgba(106,67,224,0.35); }

.section-eyebrow {
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  letter-spacing: 0.2em; text-transform: uppercase; color: ${t.aurora}; font-weight: 700;
}

.hover-card { transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, box-shadow 0.3s ease; will-change: transform; }
.hover-card:hover {
  transform: translateY(-4px) scale(1.012);
  border-color: rgba(124,92,255,0.38);
  box-shadow: inset 0 1px 0 var(--surface-sheen), 0 30px 60px -30px rgba(106,67,224,0.5);
}

.section { padding: 64px 0; position: relative; }
.section-tight { padding: 44px 0; position: relative; }
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
  outline: 2px solid ${t.irisBright};
  outline-offset: 2px;
  border-radius: 4px;
}

.show-mobile { display: none; }

.scroll-x::-webkit-scrollbar { height: 6px; }
.scroll-x::-webkit-scrollbar-track { background: rgba(20,24,42,0.04); border-radius: 3px; }
.scroll-x::-webkit-scrollbar-thumb { background: var(--scrollbar-thumb); border-radius: 3px; }
html::-webkit-scrollbar, body::-webkit-scrollbar { display: none; }
html, body { -ms-overflow-style: none; scrollbar-width: none; }

.trace-line { stroke-dasharray: 4 7; animation: dashFlow 2s linear infinite; }
@keyframes dashFlow { to { stroke-dashoffset: -22; } }
@keyframes pulseSoft { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }
@keyframes floatY { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
@keyframes spin360 { to { transform: rotate(360deg); } }
@keyframes spinS { to { transform: rotate(360deg); } }
.gear { transform-box: fill-box; transform-origin: center; animation: spin360 7s linear infinite; }
@keyframes shineSweep { 0% { transform: translateX(-130%) skewX(-18deg); } 60%,100% { transform: translateX(260%) skewX(-18deg); } }
@keyframes popIn { 0% { opacity: 0; transform: translateY(12px) scale(0.96); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
@keyframes marqueeScroll { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }

.hero-title, .hero-subtitle, .hero-chip, .hero-image { opacity: 1; }

/* Marquee strip */
.marquee-track { display: flex; width: max-content; animation: marqueeScroll 28s linear infinite; }
.marquee-content {
  display: flex; align-items: center; gap: 10px;
  padding-right: 10px; white-space: nowrap;
}
.marquee-track:hover { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) { .marquee-track { animation: none; } }

@media (max-width: 980px) { .proj-grid { grid-template-columns: 1fr !important; gap: 26px !important; } }
@media (max-width: 880px) {
  .section { padding: 48px 0; }
  .section-tight { padding: 34px 0; }
  .container { padding: 0 20px; }
  .hide-mobile { display: none !important; }
  .show-mobile { display: flex; }
  .hero-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
}
@media (max-width: 420px) {
  .container { padding: 0 16px; }
  .section { padding: 36px 0; }
  .section-tight { padding: 26px 0; }
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
        <FlagshipShowcase />
        <TerminalPlayground />
        <Experience />
        <SelectedWork />
        <Builds />
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
