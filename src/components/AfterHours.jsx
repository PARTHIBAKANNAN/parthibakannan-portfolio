import React from "react";
import { Github, ArrowUpRight } from "lucide-react";
import { t } from "../lib/theme.js";
import { Reveal } from "./Reveal.jsx";
import { StatusBadge } from "./SelectedWork.jsx";
import { personalRD } from "../data/projects.js";

export function AfterHours() {
  return (
    <section className="section-tight">
      <div className="container">
        <Reveal>
          <div style={{ marginBottom: 26, display: "flex", alignItems: "center", gap: 14 }}>
            <div className="section-eyebrow">After hours</div>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, var(--line), transparent)" }} />
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: t.inkMuted, maxWidth: 720, margin: "0 0 26px" }}>Personal R&amp;D — what I build for myself to keep pushing on the craft.</p>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
          {personalRD.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 80} style={{ height: "100%" }}>
                <div className="glass hover-card" style={{ height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                  {p.image && (
                    <div style={{ height: 110, flexShrink: 0 }}>
                      <img src={p.image} alt="" aria-hidden="true" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    </div>
                  )}
                  <div style={{ padding: 22, display: "flex", gap: 14, alignItems: "flex-start", flex: 1 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0, background: "rgba(31,199,192,0.1)", border: "1px solid rgba(31,199,192,0.24)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={16} color={t.aurora} strokeWidth={2.2} />
                    </div>
                    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                        <h3 className="font-display" style={{ fontSize: 15, fontWeight: 700, color: t.ink, margin: 0 }}>{p.title}</h3>
                        {p.status && <StatusBadge status={p.status} />}
                      </div>
                      <p style={{ fontSize: 13, color: t.inkMuted, lineHeight: 1.55, margin: "0 0 10px" }}>{p.desc}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: p.github ? 10 : 0 }}>{p.tech.map(tech => <span key={tech} className="chip" style={{ fontSize: 10, padding: "3px 8px" }}>{tech}</span>)}</div>
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 600, color: t.aurora }}>
                          <Github size={12} /> View on GitHub <ArrowUpRight size={11} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
