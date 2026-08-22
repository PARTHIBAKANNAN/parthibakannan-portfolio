import React from "react";
import { t } from "../lib/theme.js";
import { Zap, BrainCircuit, ShieldCheck, Database, Radio, Layers, Server, Activity } from "lucide-react";

export function MarketTicker() {
  const items = [
    { icon: Radio, label: "PULSEHUNTER", val: "210+ Stocks & Canvas Charts", tag: "250ms STREAM" },
    { icon: ShieldCheck, label: "NUKEBOX", val: "21 Deployed Strategies", tag: "365-DAY (1-YR) BACKTESTED" },
    { icon: BrainCircuit, label: "GEMINI 3.6 FLASH", val: "Market Regime Copilot", tag: "ACTIVE" },
    { icon: Database, label: "AZURE AI SEARCH", val: "10,00,000+ Contracts Indexed", tag: "HYBRID RAG" },
    { icon: Zap, label: "FYERS API v3", val: "Millisecond Binary WebSockets", tag: "FASTAPI BFF" },
    { icon: Server, label: "SECURITY BOUNDARY", val: "Zero Client Credential Leakage", tag: "SUPABASE AUDIT" },
  ];

  return (
    <div style={{
      width: "100%", overflow: "hidden", borderBottom: "1px solid var(--line)",
      background: "rgba(10,14,26,0.85)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
      padding: "8px 0", position: "relative", zIndex: 90
    }}>
      <div className="marquee-track">
        {[...items, ...items, ...items].map((it, i) => {
          const Icon = it.icon;
          return (
            <div key={i} className="marquee-content" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "0 22px" }}>
              <Icon size={12} color={t.auroraBright} />
              <span className="font-mono" style={{ fontSize: 11, color: "var(--ink-dim)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{it.label}</span>
              <span className="font-display" style={{ fontSize: 12, fontWeight: 700, color: "var(--ink)" }}>{it.val}</span>
              <span className="font-mono" style={{
                fontSize: 9.5, fontWeight: 700, padding: "2px 7px", borderRadius: 4,
                background: "rgba(31,199,192,0.15)", border: "1px solid rgba(31,199,192,0.3)",
                color: t.auroraBright
              }}>
                {it.tag}
              </span>
              <span style={{ color: "var(--line)", marginLeft: 12 }}>•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
