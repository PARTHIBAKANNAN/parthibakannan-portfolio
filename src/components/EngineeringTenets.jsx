import React from "react";
import { ShieldCheck, Zap, BrainCircuit, Server } from "lucide-react";
import { t } from "../lib/theme.js";
import { Reveal } from "./Reveal.jsx";
import { engineeringTenets } from "../data/content.js";

export function EngineeringTenets() {
  return (
    <section className="section-tight" style={{ borderTop: "1px solid var(--line)", background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(124,92,255,0.06), transparent 70%)" }}>
      <div className="container">
        <Reveal>
          <div style={{ marginBottom: 32, maxWidth: 740 }}>
            <div className="section-eyebrow" style={{ marginBottom: 12 }}>Architecture Philosophy</div>
            <h2 className="font-display heading-huge" style={{ fontSize: "clamp(26px, 3.4vw, 36px)", margin: "0 0 12px", color: t.ink }}>
              How I build production systems.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: t.inkMuted, margin: 0 }}>
              Core engineering tenets applied across enterprise RAG pipelines, autonomous agents, and high-frequency trading terminals.
            </p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
          {engineeringTenets.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 70} style={{ height: "100%" }}>
                <div className="glass hover-card" style={{
                  height: "100%", padding: 24, display: "flex", flexDirection: "column",
                  borderRadius: 16, border: "1px solid var(--surface-border)"
                }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 12, marginBottom: 16,
                    background: `linear-gradient(135deg, rgba(124,92,255,0.16), rgba(31,199,192,0.16))`,
                    border: `1px solid rgba(124,92,255,0.3)`, display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <Icon size={20} color={t.irisBright} strokeWidth={2.2} />
                  </div>
                  <h3 className="font-display" style={{ fontSize: 17, fontWeight: 700, color: t.ink, margin: "0 0 10px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 13.5, color: t.inkSoft, lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
