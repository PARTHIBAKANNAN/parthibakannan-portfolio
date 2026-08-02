import React from "react";
import { Github, ArrowUpRight } from "lucide-react";
import { t } from "../lib/theme.js";
import { Reveal } from "./Reveal.jsx";
import { hackathonWork } from "../data/projects.js";

export function Builds() {
  return (
    <section id="builds" className="section">
      <div className="container">
        <Reveal>
          <div style={{ marginBottom: 40, maxWidth: 720 }}>
            <div className="section-eyebrow" style={{ marginBottom: 12 }}>Built fast</div>
            <h2 className="font-display heading-huge" style={{ fontSize: "clamp(28px, 3.6vw, 36px)", margin: "0 0 14px" }}>Hackathon &amp; vibe-coding work.</h2>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: t.inkMuted, margin: 0 }}>Internal sprints where the brief was "ship something useful in 48 hours." LLM-glued products with full auth, persistence, and a story.</p>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {hackathonWork.map((h, i) => {
            const Icon = h.icon;
            const accent = t.irisBright;
            const accentDeep = t.irisDeep;
            return (
              <Reveal key={h.title} delay={i * 90} style={{ height: "100%" }}>
                <div className="glass hover-card" style={{ height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                  {h.image && (
                    <div style={{ position: "relative", height: 150, flexShrink: 0 }}>
                      <img src={h.image} alt="" aria-hidden="true" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,12,20,0.05) 40%, rgba(10,12,20,0.65))" }} />
                      <div style={{ position: "absolute", left: 18, bottom: -20, width: 46, height: 46, borderRadius: 13, background: `linear-gradient(135deg, ${accent}, ${accentDeep})`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3), 0 14px 28px -10px rgba(0,0,0,0.5)" }}>
                        <Icon size={21} color="#fff" strokeWidth={2.2} />
                      </div>
                    </div>
                  )}
                  <div style={{ padding: 26, paddingTop: h.image ? 34 : 26, display: "flex", flexDirection: "column", flex: 1 }}>
                    {!h.image && (
                      <div style={{ width: 46, height: 46, borderRadius: 13, background: `linear-gradient(135deg, ${accent}, ${accentDeep})`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3), 0 14px 28px -10px rgba(0,0,0,0.5)" }}>
                        <Icon size={21} color="#fff" strokeWidth={2.2} />
                      </div>
                    )}
                    <h3 className="font-display" style={{ fontSize: 20, fontWeight: 700, color: t.ink, margin: "0 0 10px" }}>{h.title}</h3>
                    <p style={{ fontSize: 14, color: t.inkSoft, lineHeight: 1.6, margin: "0 0 16px" }}>{h.desc}</p>
                    {h.videoUrl && (
                      <div style={{ marginBottom: 16, borderRadius: 10, overflow: "hidden", border: "1px solid var(--line)" }}>
                        <iframe
                          src={h.videoUrl}
                          width="100%"
                          height="200"
                          allow="autoplay"
                          loading="lazy"
                          style={{ display: "block", border: "none" }}
                          title={`${h.title} demo`}
                        />
                      </div>
                    )}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: h.github ? 16 : 0 }}>{h.tech.map(tech => <span key={tech} className="chip">{tech}</span>)}</div>
                    {h.github && (
                      <a href={h.github} target="_blank" rel="noopener noreferrer" style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12.5, fontWeight: 600, color: t.iris }}>
                        <Github size={13} /> View on GitHub <ArrowUpRight size={12} />
                      </a>
                    )}
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
