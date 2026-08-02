import React from "react";
import { Award, ShieldCheck, Sparkles, GraduationCap, ArrowUpRight } from "lucide-react";
import { t } from "../lib/theme.js";
import { Reveal } from "./Reveal.jsx";
import { certifications, education } from "../data/content.js";

function CredCard({ icon: Icon, label, sub, subColor, iconBg, accentBorder, href }) {
  const Tag = href ? "a" : "div";
  const linkProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Tag {...linkProps} className="hover-card glass" style={{
      padding: "18px 20px", display: "flex", alignItems: "center", gap: 14, height: "100%", boxSizing: "border-box",
      position: "relative", overflow: "hidden", minHeight: 78,
      borderColor: accentBorder || undefined,
    }}>
      <div style={{ width: 40, height: 40, borderRadius: 11, background: iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Icon size={19} color="#fff" strokeWidth={2.2} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="font-display" style={{ fontSize: 14.5, fontWeight: 700, color: t.ink, lineHeight: 1.25 }}>{label}</div>
        <div className="font-mono" style={{ fontSize: 11, color: subColor, marginTop: 3, letterSpacing: "0.06em" }}>{sub}</div>
      </div>
      {href && <ArrowUpRight size={15} color={t.inkDim} style={{ flexShrink: 0 }} />}
    </Tag>
  );
}

export function Credentials() {
  const items = [
    ...certifications.map(c => {
      const isClaude = c.issuer === "Anthropic";
      return {
        key: c.code, icon: isClaude ? Sparkles : ShieldCheck, label: c.label,
        sub: `${c.issuer.toUpperCase()} · ${c.code}`, subColor: t.iris,
        iconBg: `linear-gradient(135deg, ${t.irisBright}, ${t.irisDeep})`,
        href: c.url,
      };
    }),
    ...education.map(e => {
      const isAmber = e.accent === "amber";
      return {
        key: e.title, icon: isAmber ? Award : GraduationCap, label: e.title, sub: e.org,
        subColor: isAmber ? t.amber : t.iris,
        iconBg: isAmber ? `linear-gradient(135deg, ${t.amberBright}, #A9650A)` : `linear-gradient(135deg, ${t.irisBright}, ${t.irisDeep})`,
        accentBorder: isAmber ? "rgba(201,121,10,0.35)" : undefined,
      };
    }),
  ];
  return (
    <section className="section-tight" style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="container">
        <Reveal><div className="section-eyebrow" style={{ marginBottom: 20, textAlign: "center" }}>Certifications &amp; Education</div></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 14 }}>
          {items.map(({ key, ...it }, i) => <Reveal key={key} delay={i * 60} style={{ height: "100%" }}><CredCard {...it} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}
