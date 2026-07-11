import React from "react";
import { t } from "../lib/theme.js";
import { Reveal } from "./Reveal.jsx";
import { leadership } from "../data/content.js";

export function Leadership() {
  return (
    <section id="leadership" className="section-tight">
      <div className="container">
        <Reveal>
          <div style={{ marginBottom: 30, maxWidth: 720 }}>
            <div className="section-eyebrow" style={{ marginBottom: 12 }}>Leadership &amp; Community</div>
            <h2 className="font-display" style={{ fontSize: "clamp(26px, 3.2vw, 32px)", fontWeight: 700, color: t.ink, margin: "0 0 12px", lineHeight: 1.15 }}>Teaching it forward.</h2>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: t.inkMuted, margin: 0 }}>Sharing what I learn, and organizing the events that made college worth it.</p>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {leadership.map((l, i) => {
            const Icon = l.icon;
            return (
              <Reveal key={l.title} delay={i * 70}>
                <div className="glass hover-card" style={{ padding: 22, height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(31,199,192,0.1)", border: "1px solid rgba(31,199,192,0.24)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={16} color={t.aurora} strokeWidth={2.2} />
                    </div>
                    <h3 className="font-display" style={{ fontSize: 15.5, fontWeight: 700, color: t.ink, margin: 0 }}>{l.title}</h3>
                  </div>
                  <p style={{ fontSize: 13, color: t.inkMuted, lineHeight: 1.6, margin: "0 0 12px" }}>{l.desc}</p>
                  <span className="chip chip-aurora" style={{ fontSize: 10.5 }}>{l.stat}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
