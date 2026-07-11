import React from "react";
import { Sun, Moon } from "lucide-react";
import { t } from "../lib/theme.js";
import { useThemeToggle } from "../lib/useThemeToggle.js";

export function ThemeToggle({ compact = false }) {
  const [theme, toggle] = useThemeToggle();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        width: compact ? 38 : 36, height: compact ? 38 : 36, borderRadius: 10,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "var(--chip-bg)", border: "1px solid var(--chip-border)",
        color: t.inkMuted, cursor: "pointer", flexShrink: 0,
        transition: "transform 0.2s ease, color 0.2s ease, background 0.2s ease",
      }}
      onMouseEnter={e => { e.currentTarget.style.color = t.ink; e.currentTarget.style.transform = "rotate(-8deg)"; }}
      onMouseLeave={e => { e.currentTarget.style.color = t.inkMuted; e.currentTarget.style.transform = "rotate(0deg)"; }}
    >
      {isDark ? <Sun size={16} strokeWidth={2.1} /> : <Moon size={16} strokeWidth={2.1} />}
    </button>
  );
}
