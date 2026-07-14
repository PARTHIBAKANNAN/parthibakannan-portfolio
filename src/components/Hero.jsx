import React from "react";
import { ArrowRight, Bot, Download, MapPin, Award, Trophy } from "lucide-react";
import { t } from "../lib/theme.js";
import { REDUCE } from "../lib/motion.js";

const PORTRAIT = "/portrait.jpg";
const RESUME_PDF = "/resume.pdf";

export function Hero() {
  return (
    <section id="top" className="mesh-bg" style={{ paddingTop: 158, paddingBottom: 96, position: "relative", overflow: "hidden" }}>
      <div className="container">
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 56, alignItems: "center" }}>
          {/* Left */}
          <div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
              <span className="chip chip-iris"><span style={{ width: 6, height: 6, borderRadius: 3, background: t.success, boxShadow: `0 0 8px ${t.success}` }} /> Available</span>
              <span className="chip"><MapPin size={11} /> Chennai, India</span>
              <span className="chip chip-aurora">Gen AI Engineer · Cognizant</span>
              <span className="chip chip-amber"><Trophy size={11} /> Best GenC Star 2025</span>
            </div>

            <h1 className="font-display" style={{ fontSize: "clamp(34px, 5.6vw, 62px)", fontWeight: 700, lineHeight: 1.06, margin: "0 0 22px", color: t.ink }}>
              2+ years shipping<br /><span style={{ background: `linear-gradient(120deg, ${t.iris}, ${t.auroraBright})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Generative AI to production.</span>
            </h1>

            <p style={{ fontSize: 17, lineHeight: 1.6, color: t.inkSoft, maxWidth: 540, margin: "0 0 34px" }}>
              Microsoft-certified Azure AI Engineer building RAG pipelines, autonomous agents, and full-stack systems — live in an enterprise healthcare platform serving CVS Health.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 40 }}>
              <a href="#work" className="btn-primary">See the work <ArrowRight size={15} /></a>
              <a href={RESUME_PDF} download="Parthibakannan_S_Resume_2026.pdf" className="btn-ghost"><Download size={15} /> Download résumé</a>
              <button type="button" onClick={() => window.dispatchEvent(new CustomEvent("portfolio:open-chat"))} className="btn-ghost"><Bot size={15} /> Ask the assistant</button>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 30, paddingTop: 26, borderTop: "1px solid var(--line)" }}>
              {[
                { n: "10,00,000+", l: "contracts indexed" },
                { n: "3 shipped", l: "production gen-ai systems" },
                { n: "4 certs", l: "microsoft · anthropic" },
              ].map(s => (
                <div key={s.l}>
                  <div className="font-display" style={{ fontSize: 22, fontWeight: 700, color: t.ink }}>{s.n}</div>
                  <div className="font-mono" style={{ fontSize: 10.5, letterSpacing: "0.08em", color: t.inkMuted, textTransform: "uppercase", marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: portrait + floating trace card */}
          <div className="hide-mobile" style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: 320 }}>
              {/* glow */}
              <div style={{ position: "absolute", inset: -30, borderRadius: 32, background: `radial-gradient(circle at 30% 20%, rgba(124,92,255,0.35), transparent 60%), radial-gradient(circle at 80% 90%, rgba(31,199,192,0.3), transparent 60%)`, filter: "blur(28px)", zIndex: 0 }} />
              {/* portrait frame */}
              <div className="glass-strong" style={{ position: "relative", padding: 10, borderRadius: 26, zIndex: 1 }}>
                <div style={{ position: "relative", borderRadius: 18, overflow: "hidden", aspectRatio: "500 / 600" }}>
                  <img src={PORTRAIT} alt="Parthibakannan S" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
                  <div style={{ position: "absolute", inset: 0, background: `linear-gradient(160deg, rgba(124,92,255,0.10), transparent 40%, rgba(31,199,192,0.08))`, pointerEvents: "none" }} />
                </div>
              </div>
              {/* floating mini trace card (dark, glossy) */}
              <div style={{
                position: "absolute", bottom: -26, left: -38, zIndex: 2, width: 188,
                background: `linear-gradient(180deg, #161B2E, #0E1220)`,
                border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "13px 15px",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 50px -18px rgba(20,24,42,0.45)",
                animation: REDUCE ? "none" : "floatY 6s ease-in-out infinite",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 9 }}>
                  <span style={{ width: 7, height: 7, borderRadius: 4, background: t.auroraBright, boxShadow: `0 0 8px ${t.auroraBright}`, animation: REDUCE ? "none" : "pulseSoft 2s infinite" }} />
                  <span className="font-mono" style={{ fontSize: 9.5, letterSpacing: "0.16em", color: t.darkMuted, textTransform: "uppercase" }}>what i ship</span>
                </div>
                {[["retrieval", "rag at scale"], ["agents", "autonomous"], ["stack", ".NET · azure ai"]].map(([a, b], i) => (
                  <div key={a} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: i < 2 ? 7 : 0 }}>
                    <span className="font-display" style={{ fontSize: 11.5, fontWeight: 600, color: t.darkText }}>{a}</span>
                    <span className="font-mono" style={{ fontSize: 9.5, color: t.auroraBright }}>{b}</span>
                  </div>
                ))}
              </div>
              {/* floating cert chip */}
              <div style={{
                position: "absolute", top: -18, right: -30, zIndex: 2,
                background: "#fff", border: "1px solid rgba(245,166,35,0.4)", borderRadius: 12, padding: "9px 13px",
                boxShadow: "0 18px 40px -18px rgba(245,166,35,0.5)",
                animation: REDUCE ? "none" : "floatY 7s ease-in-out infinite reverse",
                display: "flex", alignItems: "center", gap: 8,
              }}>
                <Award size={15} color={t.amber} />
                <div>
                  <div className="font-display" style={{ fontSize: 11.5, fontWeight: 700, color: "#14182A", lineHeight: 1 }}>IIT Madras</div>
                  <div className="font-mono" style={{ fontSize: 8.5, color: t.amber, marginTop: 2 }}>DIPLOMA · PROG</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
