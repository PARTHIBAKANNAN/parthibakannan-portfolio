import React from "react";
import { Award, ShieldCheck, Sparkles, GraduationCap, ArrowUpRight } from "lucide-react";
import { t } from "../lib/theme.js";
import { REDUCE } from "../lib/motion.js";
import { certifications, education } from "../data/content.js";

function CertCard({ cert }) {
  const isClaude = cert.issuer === "Anthropic";
  const gradient = isClaude ? `linear-gradient(135deg, ${t.auroraBright}, #0B8A85)` : `linear-gradient(135deg, ${t.irisBright}, ${t.irisDeep})`;
  const labelColor = isClaude ? t.aurora : t.iris;
  const Icon = isClaude ? Sparkles : ShieldCheck;
  return (
    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="glass hover-card" style={{ padding: "18px 22px", display: "flex", alignItems: "center", gap: 14 }}>
      <div style={{ width: 40, height: 40, borderRadius: 11, background: gradient, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)", flexShrink: 0 }}>
        <Icon size={19} color="#fff" strokeWidth={2.2} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="font-display" style={{ fontSize: 14, fontWeight: 700, color: t.ink }}>{cert.label}</div>
        <div className="font-mono" style={{ fontSize: 11, color: labelColor, marginTop: 2, letterSpacing: "0.06em" }}>{cert.issuer.toUpperCase()} · {cert.code}</div>
      </div>
      <ArrowUpRight size={15} color={t.inkDim} style={{ flexShrink: 0 }} />
    </a>
  );
}

export function Credentials() {
  return (
    <section className="section-tight" style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="container">
        <div className="section-eyebrow" style={{ marginBottom: 20, textAlign: "center" }}>Certifications &amp; Education</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", alignItems: "stretch" }}>
          {certifications.map(c => <CertCard key={c.code} cert={c} />)}

          {education.map(e => {
            if (e.accent === "amber") {
              return (
                <div key={e.title} className="hover-card" style={{
                  padding: "18px 22px", display: "flex", alignItems: "center", gap: 14, borderRadius: 16,
                  position: "relative", overflow: "hidden",
                  background: "linear-gradient(180deg, #FFFDF8, #FFF6E8)",
                  border: "1px solid rgba(245,166,35,0.4)",
                  boxShadow: "inset 0 1px 0 #fff, 0 22px 48px -28px rgba(245,166,35,0.5)",
                }}>
                  <div className="shine" style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: 60, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)", animation: REDUCE ? "none" : "shineSweep 4.5s ease-in-out infinite", pointerEvents: "none" }} />
                  <div style={{ width: 40, height: 40, borderRadius: 11, background: `linear-gradient(135deg, ${t.amberBright}, #E0820A)`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4)", flexShrink: 0 }}>
                    <Award size={19} color="#fff" strokeWidth={2.2} />
                  </div>
                  <div>
                    {/* Fixed cream card in both themes — text stays literal dark, not the theme-var ink */}
                    <div className="font-display" style={{ fontSize: 15, fontWeight: 700, color: "#14182A" }}>{e.title}</div>
                    <div className="font-mono" style={{ fontSize: 11, color: t.amber, marginTop: 2, letterSpacing: "0.06em", fontWeight: 500 }}>{e.org}</div>
                  </div>
                </div>
              );
            }
            return (
              <div key={e.title} className="glass hover-card" style={{ padding: "18px 22px", display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: 11, background: `linear-gradient(135deg, ${t.auroraBright}, #0B8A85)`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)", flexShrink: 0 }}>
                  <GraduationCap size={19} color="#fff" strokeWidth={2.2} />
                </div>
                <div>
                  <div className="font-display" style={{ fontSize: 14, fontWeight: 700, color: t.ink }}>{e.title}</div>
                  <div className="font-mono" style={{ fontSize: 11, color: t.aurora, marginTop: 2, letterSpacing: "0.06em" }}>{e.org}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
