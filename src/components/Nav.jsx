import React, { useState, useEffect } from "react";
import { Mail, Menu, X, Zap } from "lucide-react";
import { t } from "../lib/theme.js";
import { ThemeToggle } from "./ThemeToggle.jsx";

const PORTRAIT = "/portrait.jpg";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, []);
  const openChat = () => { window.dispatchEvent(new CustomEvent("portfolio:open-chat")); setMenuOpen(false); };

  const links = [
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects", highlight: true },
    { href: "#skills", label: "Skills" },
    { onClick: openChat, label: "Ask AI" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? "11px 0" : "18px 0",
      background: menuOpen ? "var(--bg)" : scrolled ? "var(--nav-bg-scrolled)" : "transparent",
      backdropFilter: (scrolled && !menuOpen) ? "blur(18px)" : "none", WebkitBackdropFilter: (scrolled && !menuOpen) ? "blur(18px)" : "none",
      borderBottom: (scrolled || menuOpen) ? "1px solid var(--line)" : "1px solid transparent",
      transition: "background 0.15s ease, padding 0.25s ease, border-color 0.25s ease",
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 999, overflow: "hidden",
            border: "2px solid var(--surface-from)",
            boxShadow: `0 4px 14px -4px rgba(106,67,224,0.5), 0 0 0 1.5px rgba(124,92,255,0.4)`,
          }}>
            <img src={PORTRAIT} alt="Parthibakannan" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
          </div>
          <span className="font-display" style={{ fontSize: 15, fontWeight: 700, color: t.ink }}>Parthibakannan</span>
        </a>

        <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 3 }}>
          {links.map(l => {
            const isHighlight = l.highlight;
            const sharedStyle = {
              padding: "8px 13px", fontSize: 13.5,
              color: isHighlight ? t.auroraBright : t.inkMuted,
              fontWeight: isHighlight ? 700 : 500,
              borderRadius: 8, transition: "all 0.18s", background: isHighlight ? "rgba(31,199,192,0.08)" : "transparent",
              border: isHighlight ? `1px solid rgba(31,199,192,0.25)` : "1px solid transparent",
              fontFamily: "inherit", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 5
            };
            const onEnter = e => {
              e.currentTarget.style.color = isHighlight ? t.auroraBright : t.ink;
              e.currentTarget.style.background = isHighlight ? "rgba(31,199,192,0.15)" : "var(--chip-bg)";
            };
            const onLeave = e => {
              e.currentTarget.style.color = isHighlight ? t.auroraBright : t.inkMuted;
              e.currentTarget.style.background = isHighlight ? "rgba(31,199,192,0.08)" : "transparent";
            };

            return l.onClick
              ? <button key={l.label} type="button" onClick={l.onClick} style={sharedStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>{l.label}</button>
              : <a key={l.href} href={l.href} style={sharedStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>{isHighlight && <Zap size={13} color={t.auroraBright} />}{l.label}</a>;
          })}
          <div style={{ marginLeft: 6 }}>
            <ThemeToggle />
          </div>
        </div>

        <div className="hide-mobile">
          <a href="#contact" className="btn-primary" style={{ padding: "8px 16px", fontSize: 13 }}><Mail size={14} /> Get in touch</a>
        </div>

        <div className="show-mobile" style={{ alignItems: "center", gap: 8 }}>
          <ThemeToggle compact />
          <button type="button" onClick={() => setMenuOpen(o => !o)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{ width: 38, height: 38, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--chip-bg)", border: "1px solid var(--chip-border)", color: t.ink, cursor: "pointer" }}>
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="show-mobile" style={{
          flexDirection: "column", marginTop: 14, borderTop: "1px solid var(--line)",
        }}>
          <div className="container" style={{ display: "flex", flexDirection: "column", gap: 2, paddingTop: 14, paddingBottom: 6 }}>
            {links.map(l => {
              const sharedStyle = { padding: "12px 8px", fontSize: 15, color: l.highlight ? t.auroraBright : t.ink, fontWeight: 700, borderRadius: 8, background: "transparent", border: "none", fontFamily: "inherit", cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 8 };
              return l.onClick
                ? <button key={l.label} type="button" onClick={l.onClick} style={sharedStyle}>{l.label}</button>
                : <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={sharedStyle}>{l.highlight && <Zap size={14} color={t.auroraBright} />}{l.label}</a>;
            })}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary" style={{ marginTop: 10, justifyContent: "center" }}><Mail size={14} /> Get in touch</a>
          </div>
        </div>
      )}
    </nav>
  );
}
