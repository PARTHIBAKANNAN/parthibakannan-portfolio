// ─────────────────────────────────────────────────────────────────────────
// DESIGN TOKENS — light, glossy, premium (with a dark counterpart)
//
// `t` keeps the exact same keys the site always used (t.ink, t.inkMuted, …).
// The surface/text keys resolve to CSS custom properties so the whole site
// repaints on a data-theme flip with zero React re-renders. Brand accents
// (iris/aurora/amber/success) stay constant across themes — they were
// already tuned to read on both white glass and near-black surfaces.
// ─────────────────────────────────────────────────────────────────────────
export const t = {
  bg: "var(--bg)",
  bgAlt: "var(--bg-alt)",
  ink: "var(--ink)",
  inkSoft: "var(--ink-soft)",
  inkMuted: "var(--ink-muted)",
  inkDim: "var(--ink-dim)",
  line: "var(--line)",

  iris: "#6A43E0",
  irisBright: "#7C5CFF",
  irisDeep: "#5733C9",
  aurora: "#0C9A94",
  auroraBright: "#1FC7C0",
  amber: "#C9790A",
  amberBright: "#F5A623",
  success: "#0FA968",

  // Fixed-dark surface (the AI chat widget is deliberately dark in both themes)
  dark: "#0B0E1A",
  darkText: "#EAEEF7",
  darkSoft: "#B8C0D4",
  darkMuted: "#8A93AC",
};

// Injected once, at the top of the global stylesheet. Actual palette swap
// happens here — every component above just consumes var() references.
export const cssThemeBlock = `
:root[data-theme="light"] {
  --bg: #F1F3FB;
  --bg-alt: #EAEDF8;
  --ink: #14182A;
  --ink-soft: #3C4561;
  --ink-muted: #646E88;
  --ink-dim: #9AA2B8;
  --line: rgba(20,24,42,0.08);

  --nav-bg-scrolled: rgba(241,243,251,0.78);
  --surface-from: #ffffff;
  --surface-to: #f6f7fd;
  --surface-strong-from: #ffffff;
  --surface-strong-to: #f4f5fc;
  --surface-border: rgba(20,24,42,0.06);
  --surface-border-strong: rgba(20,24,42,0.07);
  --surface-sheen: rgba(255,255,255,0.5);

  --chip-bg: rgba(20,24,42,0.04);
  --chip-border: rgba(20,24,42,0.07);
  --chip-text: #4B5570;

  --ghost-bg: #ffffff;
  --ghost-border: rgba(20,24,42,0.1);

  --scrollbar-thumb: rgba(106,67,224,0.28);
  --scrollbar-thumb-hover: rgba(106,67,224,0.45);

  /* Glass effect tokens (light mode) */
  --glass-bg: rgba(255,255,255,0.7);
  --glass-border: rgba(20,24,42,0.08);
  --glass-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
  --glass-blur: 10px;

  /* Animation tokens */
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 350ms;
  --ease-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);

  color-scheme: light;
}

:root[data-theme="dark"] {
  --bg: #0B0E1A;
  --bg-alt: #10142A;
  --ink: #EAEEF7;
  --ink-soft: #B8C0D4;
  --ink-muted: #8A93AC;
  --ink-dim: #5F6882;
  --line: rgba(255,255,255,0.09);

  --nav-bg-scrolled: rgba(11,14,26,0.75);
  --surface-from: #171C31;
  --surface-to: #11152A;
  --surface-strong-from: #191E36;
  --surface-strong-to: #12162A;
  --surface-border: rgba(255,255,255,0.07);
  --surface-border-strong: rgba(255,255,255,0.09);
  --surface-sheen: rgba(255,255,255,0.06);

  --chip-bg: rgba(255,255,255,0.06);
  --chip-border: rgba(255,255,255,0.11);
  --chip-text: #B9C2D8;

  --ghost-bg: rgba(255,255,255,0.05);
  --ghost-border: rgba(255,255,255,0.14);

  --scrollbar-thumb: rgba(124,92,255,0.35);
  --scrollbar-thumb-hover: rgba(124,92,255,0.55);

  /* Glass effect tokens (dark mode) */
  --glass-bg: rgba(20,20,20,0.4);
  --glass-border: rgba(255,255,255,0.08);
  --glass-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
  --glass-blur: 12px;

  /* Animation tokens */
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 350ms;
  --ease-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);

  color-scheme: dark;
}
`;
