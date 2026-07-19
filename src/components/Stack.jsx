import React from "react";
import { t } from "../lib/theme.js";
import { Reveal } from "./Reveal.jsx";
import { stack } from "../data/content.js";

const MARQUEE_HIGHLIGHTS = ["Azure OpenAI", "RAG", "Agentic AI", ".NET", "Python", "React", "Azure AI Search", "Cosmos DB", "GPT-4 / 5", "Claude", "FastAPI", "LangChain"];

function StackMarquee() {
  const track = [...MARQUEE_HIGHLIGHTS, ...MARQUEE_HIGHLIGHTS];
  return (
    <div style={{ overflow: "hidden", marginBottom: 30, maskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)" }}>
      <div className="marquee-track">
        {track.map((item, i) => (
          <span key={i} className="marquee-content">
            <span className="chip chip-iris" style={{ fontSize: 12 }}>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Stack() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div style={{ marginBottom: 26, maxWidth: 720 }}>
            <div className="section-eyebrow" style={{ marginBottom: 12 }}>Tooling</div>
            <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.6vw, 36px)", fontWeight: 700, color: t.ink, margin: "0 0 12px", lineHeight: 1.15 }}>What I reach for.</h2>
          </div>
        </Reveal>
        <StackMarquee />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {stack.map((g, i) => (
            <Reveal key={g.group} delay={i * 70}>
              <div className="glass" style={{ padding: 20, height: "100%" }}>
                <div className="font-mono" style={{ fontSize: 10.5, color: t.aurora, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>{g.group}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>{g.items.map(it => (
                  <span key={it} className="chip skill-tag" style={{ fontSize: 11.5, position: "relative" }}>
                    {it}
                    <div className="skill-tooltip">
                      <strong>{it}</strong>
                      <p style={{ fontSize: '11px', margin: '4px 0 0 0' }}>Production experience</p>
                    </div>
                  </span>
                ))}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
