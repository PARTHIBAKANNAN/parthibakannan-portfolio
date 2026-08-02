// ─────────────────────────────────────────────────────────────────────────
// DESIGN TOKENS — bold editorial, near-monochrome (with a dark counterpart)
//
// `t` keeps the exact same keys the site always used (t.ink, t.inkMuted, …).
// The surface/text keys resolve to CSS custom properties so the whole site
// repaints on a data-theme flip with zero React re-renders. The iris/aurora
// "accent" keys resolve to a fixed graphite gradient (not theme-flipping) —
// components render hardcoded white icon glyphs on top of those badges, so
// the badge itself must always stay dark for the icon to keep contrast.
// ─────────────────────────────────────────────────────────────────────────
export const t = {
  bg: "var(--bg)",
  bgAlt: "var(--bg-alt)",
  ink: "var(--ink)",
  inkSoft: "var(--ink-soft)",
  inkMuted: "var(--ink-muted)",
  inkDim: "var(--ink-dim)",
  line: "var(--line)",

  // Monochrome "accent" system — editorial, near-grayscale. What used to be a
  // saturated purple/teal brand pair is now graphite. `iris`/`aurora` are
  // used directly as text/icon color across the site, so they stay
  // theme-aware (var(--ink-soft), flips light/dark like body text).
  // `irisBright`/`irisDeep`/`auroraBright` are only ever used as gradient
  // stops behind a hardcoded white icon glyph, so they stay fixed graphite
  // in both themes — the badge itself must always read dark for that icon
  // to keep contrast.
  iris: "var(--ink-soft)",
  irisBright: "var(--accent-bright)",
  irisDeep: "var(--accent-dim)",
  aurora: "var(--ink-soft)",
  auroraBright: "var(--accent-bright)",

  // The one signature warm color left in the system — used sparingly for
  // awards, "in development" status, and a single highlight per view.
  amber: "#C9790A",
  amberBright: "#E3A130",
  success: "#4A9C7A",

  // Fixed-dark surface (the AI chat widget is deliberately dark in both themes)
  dark: "#0B0E1A",
  darkText: "#EAEEF7",
  darkSoft: "#B8C0D4",
  darkMuted: "#8A93AC",
};

// Injected once, at the top of the global stylesheet. Actual palette swap
// happens here — every component above just consumes var() references.
export const cssThemeBlock = `
:root {
  /* Fixed graphite badge gradient — same in both themes so hardcoded white
     icon glyphs drawn on top always keep contrast. */
  --accent-bright: #47474D;
  --accent-dim: #1B1B1E;
}

:root[data-theme="light"] {
  --bg: #F4F3EF;
  --bg-alt: #EBEAE4;
  --ink: #0E0E10;
  --ink-soft: #3A3A3E;
  --ink-muted: #6B6B70;
  --ink-dim: #9C9CA0;
  --line: rgba(14,14,16,0.11);
  --ink-invert: #F4F3EF;

  --nav-bg-scrolled: rgba(244,243,239,0.82);
  --surface-from: #FBFAF7;
  --surface-to: #F0EFEA;
  --surface-strong-from: #FBFAF7;
  --surface-strong-to: #EEEDE7;
  --surface-border: rgba(14,14,16,0.1);
  --surface-border-strong: rgba(14,14,16,0.12);
  --surface-sheen: rgba(255,255,255,0.6);

  --card-bg: rgba(14,14,16,0.025);
  --card-bg-strong: rgba(14,14,16,0.03);

  --chip-bg: rgba(14,14,16,0.04);
  --chip-border: rgba(14,14,16,0.14);
  --chip-text: #4A4A4E;

  --ghost-bg: transparent;
  --ghost-border: rgba(14,14,16,0.18);

  --scrollbar-thumb: rgba(14,14,16,0.2);
  --scrollbar-thumb-hover: rgba(14,14,16,0.32);

  color-scheme: light;
}

:root[data-theme="dark"] {
  --bg: #0A0A0B;
  --bg-alt: #121213;
  --ink: #F4F3EE;
  --ink-soft: #C7C6C1;
  --ink-muted: #8E8E92;
  --ink-dim: #5B5B5F;
  --line: rgba(255,255,255,0.1);
  --ink-invert: #0A0A0B;

  --nav-bg-scrolled: rgba(10,10,11,0.8);
  --surface-from: #171718;
  --surface-to: #0F0F10;
  --surface-strong-from: #1A1A1B;
  --surface-strong-to: #101011;
  --surface-border: rgba(255,255,255,0.08);
  --surface-border-strong: rgba(255,255,255,0.1);
  --surface-sheen: rgba(255,255,255,0.05);

  --card-bg: rgba(255,255,255,0.025);
  --card-bg-strong: rgba(255,255,255,0.035);

  --chip-bg: rgba(255,255,255,0.05);
  --chip-border: rgba(255,255,255,0.12);
  --chip-text: #B9B8B3;

  --ghost-bg: transparent;
  --ghost-border: rgba(255,255,255,0.16);

  --scrollbar-thumb: rgba(255,255,255,0.18);
  --scrollbar-thumb-hover: rgba(255,255,255,0.3);

  color-scheme: dark;
}
`;
