import React, { useEffect, useRef } from "react";
import { Award, ShieldCheck, Sparkles, GraduationCap, ArrowUpRight } from "lucide-react";
import { t } from "../lib/theme.js";
import { REDUCE } from "../lib/motion.js";
import { Reveal } from "./Reveal.jsx";
import { certifications, education } from "../data/content.js";

function CredCard({ icon: Icon, label, sub, subColor, iconBg, cardBg, cardBorder, cardShadow, shine, href }) {
  const Tag = href ? "a" : "div";
  const linkProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Tag {...linkProps} className={`hover-card ${cardBg ? "" : "glass"}`} style={{
      padding: "18px 20px", display: "flex", alignItems: "center", gap: 14, height: "100%", boxSizing: "border-box",
      borderRadius: 16, position: "relative", overflow: "hidden", minHeight: 78,
      background: cardBg, border: cardBorder ? `1px solid ${cardBorder}` : undefined, boxShadow: cardShadow,
    }}>
      {shine && <div className="shine" style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: 60, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)", animation: REDUCE ? "none" : "shineSweep 4.5s ease-in-out infinite", pointerEvents: "none" }} />}
      <div style={{ width: 40, height: 40, borderRadius: 11, background: iconBg, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)", flexShrink: 0 }}>
        <Icon size={19} color="#fff" strokeWidth={2.2} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Cream (amber) card is fixed cream in both themes — text stays literal dark, not the theme-var ink */}
        <div className="font-display" style={{ fontSize: 14.5, fontWeight: 700, color: cardBg ? "#14182A" : t.ink, lineHeight: 1.25 }}>{label}</div>
        <div className="font-mono" style={{ fontSize: 11, color: subColor, marginTop: 3, letterSpacing: "0.06em" }}>{sub}</div>
      </div>
      {href && <ArrowUpRight size={15} color={t.inkDim} style={{ flexShrink: 0 }} />}
    </Tag>
  );
}

export function Credentials() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const revealCards = containerRef.current.querySelectorAll('.reveal');
      revealCards.forEach((card) => {
        createScrollReveal(card, {
          opacity: 0,
          y: 12,
          duration: 0.35,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }
  }, []);

  const items = [
    ...certifications.map(c => {
      const isClaude = c.issuer === "Anthropic";
      return {
        key: c.code, icon: isClaude ? Sparkles : ShieldCheck, label: c.label,
        sub: `${c.issuer.toUpperCase()} · ${c.code}`, subColor: isClaude ? t.aurora : t.iris,
        iconBg: isClaude ? `linear-gradient(135deg, ${t.auroraBright}, #0B8A85)` : `linear-gradient(135deg, ${t.irisBright}, ${t.irisDeep})`,
        href: c.url,
      };
    }),
    ...education.map(e => {
      const isAmber = e.accent === "amber";
      return {
        key: e.title, icon: isAmber ? Award : GraduationCap, label: e.title, sub: e.org,
        subColor: isAmber ? t.amber : t.aurora,
        iconBg: isAmber ? `linear-gradient(135deg, ${t.amberBright}, #E0820A)` : `linear-gradient(135deg, ${t.auroraBright}, #0B8A85)`,
        cardBg: isAmber ? "linear-gradient(180deg, #FFFDF8, #FFF6E8)" : undefined,
        cardBorder: isAmber ? "rgba(245,166,35,0.4)" : undefined,
        cardShadow: isAmber ? "inset 0 1px 0 #fff, 0 22px 48px -28px rgba(245,166,35,0.5)" : undefined,
        shine: isAmber,
      };
    }),
  ];
  return (
    <section className="section-tight" style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="container">
        <Reveal><div className="section-eyebrow" style={{ marginBottom: 20, textAlign: "center" }}>Certifications &amp; Education</div></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 14 }}>
          {items.map((it, i) => <Reveal key={it.key} delay={i * 60} style={{ height: "100%" }}><CredCard {...it} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}
