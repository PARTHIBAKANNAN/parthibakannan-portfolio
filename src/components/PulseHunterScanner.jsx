import React, { useState } from "react";
import { t } from "../lib/theme.js";
import { Activity, Radio, Zap, Sparkles, Filter, BarChart3, LineChart, TrendingUp, CheckCircle2 } from "lucide-react";

export function PulseHunterScanner() {
  const filterTiers = [
    { id: "all", label: "All 210+ Stocks" },
    { id: "orb-bull", label: "ORB C1 Breakouts" },
    { id: "rs-leaders", label: "Intraday RS > 70" },
    { id: "volume-surge", label: "Volume > 2.5x Avg" },
    { id: "range-expansion", label: "Day Range > 80%" },
  ];

  const sampleStocks = [
    {
      symbol: "RELIANCE.EQ",
      sector: "Energy / Conglomerate",
      irsScore: "+84.2",
      orbStatus: "ORB C1 Triggered",
      volumeMultiplier: "3.4x",
      rangePct: "92%",
      geminiInsight: "Heavy institutional block accumulation at 15-min Opening Range High. Sector RS outperforming NIFTY 50 by 1.8x.",
    },
    {
      symbol: "HDFCBANK.EQ",
      sector: "Banking & Finance",
      irsScore: "+76.5",
      orbStatus: "ORB C1 Validated",
      volumeMultiplier: "2.8x",
      rangePct: "88%",
      geminiInsight: "Order book delta positive (+18.4k contracts). Bullish momentum continuation across BankNIFTY constituents.",
    },
    {
      symbol: "INFY.EQ",
      sector: "Information Technology",
      irsScore: "+71.0",
      orbStatus: "Consolidation Breakout",
      volumeMultiplier: "2.6x",
      rangePct: "85%",
      geminiInsight: "Breakout above yesterday's VWAP with expanding 1-minute delta ticks. Gemini AI regime: High-Probability Trend Continuation.",
    },
    {
      symbol: "TATASTEEL.EQ",
      sector: "Metals & Mining",
      irsScore: "+69.4",
      orbStatus: "ORB C2 Continuation",
      volumeMultiplier: "2.9x",
      rangePct: "81%",
      geminiInsight: "Commodities cycle rotation with strong delivery volume. 250ms WebSocket state stream confirms uninterrupted bid depth.",
    },
  ];

  const [activeTier, setActiveTier] = useState("all");
  const [selectedStock, setSelectedStock] = useState(sampleStocks[0]);

  return (
    <div style={{
      marginTop: 34, padding: "26px 28px", borderRadius: 20,
      background: "linear-gradient(180deg, rgba(20,26,46,0.9), rgba(11,14,26,0.95))",
      border: "1px solid rgba(31,199,192,0.25)",
      boxShadow: "0 20px 50px -20px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)"
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18, flexWrap: "wrap", gap: 10 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 4 }}>
            <Radio size={16} color={t.auroraBright} />
            <span className="font-mono" style={{ fontSize: 11, color: t.auroraBright, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700 }}>
              210+ Indian Equities · 5-Tier Filter Matrix
            </span>
          </div>
          <h4 className="font-display" style={{ fontSize: 18, fontWeight: 700, color: "var(--ink)", margin: 0 }}>
            PulseHunter Real-Time Momentum Scanner &amp; Gemini AI Copilot
          </h4>
        </div>
        <div className="font-mono" style={{ fontSize: 11, color: t.success, background: "rgba(15,169,104,0.15)", padding: "4px 12px", borderRadius: 999, border: "1px solid rgba(15,169,104,0.3)" }}>
          ● 250ms WEBSOCKET STREAM ACTIVE
        </div>
      </div>

      {/* Filter Matrix Tier Buttons */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16, overflowX: "auto", paddingBottom: 4 }}>
        {filterTiers.map(tier => {
          const isSelected = tier.id === activeTier;
          return (
            <button
              key={tier.id}
              onClick={() => setActiveTier(tier.id)}
              style={{
                padding: "6px 14px", borderRadius: 8, cursor: "pointer", fontSize: 11.5, fontWeight: 700,
                border: isSelected ? `1px solid ${t.auroraBright}` : "1px solid rgba(255,255,255,0.07)",
                background: isSelected ? "rgba(31,199,192,0.18)" : "rgba(255,255,255,0.03)",
                color: isSelected ? t.auroraBright : "var(--ink-muted)",
                whiteSpace: "nowrap", transition: "all 0.15s"
              }}
            >
              {tier.label}
            </button>
          );
        })}
      </div>

      {/* Stock Switcher Deck */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20, overflowX: "auto", paddingBottom: 6 }}>
        {sampleStocks.map(s => {
          const isSelected = s.symbol === selectedStock.symbol;
          return (
            <button
              key={s.symbol}
              onClick={() => setSelectedStock(s)}
              style={{
                padding: "8px 16px", borderRadius: 10, cursor: "pointer", fontSize: 12.5, fontWeight: 600,
                border: isSelected ? `1.5px solid ${t.auroraBright}` : "1px solid rgba(255,255,255,0.08)",
                background: isSelected ? `linear-gradient(135deg, rgba(31,199,192,0.22), rgba(124,92,255,0.15))` : "rgba(255,255,255,0.03)",
                color: isSelected ? "#fff" : "var(--ink-muted)",
                whiteSpace: "nowrap", transition: "all 0.18s", display: "flex", alignItems: "center", gap: 6
              }}
            >
              <TrendingUp size={12} color={isSelected ? t.auroraBright : "var(--ink-dim)"} />
              {s.symbol}
            </button>
          );
        })}
      </div>

      {/* Interactive Stock Telemetry Card */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, alignItems: "start" }}>
        
        {/* Left: Signal Metrics & In-Memory Math */}
        <div style={{ padding: 18, borderRadius: 14, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14, alignItems: "center" }}>
            <span className="font-display" style={{ fontSize: 15, fontWeight: 800, color: "#fff" }}>{selectedStock.symbol}</span>
            <span className="font-mono" style={{ fontSize: 11, color: t.auroraBright, background: "rgba(31,199,192,0.12)", padding: "2px 8px", borderRadius: 6 }}>
              {selectedStock.sector}
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
            <div style={{ padding: "8px 12px", borderRadius: 8, background: "rgba(31,199,192,0.08)", border: "1px solid rgba(31,199,192,0.15)" }}>
              <div className="font-mono" style={{ fontSize: 9.5, color: "var(--ink-dim)", textTransform: "uppercase" }}>Intraday RS Score</div>
              <div className="font-display" style={{ fontSize: 18, fontWeight: 800, color: t.auroraBright, marginTop: 2 }}>{selectedStock.irsScore}</div>
            </div>
            <div style={{ padding: "8px 12px", borderRadius: 8, background: "rgba(124,92,255,0.08)", border: "1px solid rgba(124,92,255,0.15)" }}>
              <div className="font-mono" style={{ fontSize: 9.5, color: "var(--ink-dim)", textTransform: "uppercase" }}>Volume vs 20-D Avg</div>
              <div className="font-display" style={{ fontSize: 18, fontWeight: 800, color: t.irisBright, marginTop: 2 }}>{selectedStock.volumeMultiplier}</div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <div style={{ padding: "8px 12px", borderRadius: 8, background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="font-mono" style={{ fontSize: 9, color: "var(--ink-dim)", textTransform: "uppercase" }}>ORB Trigger Status</div>
              <div className="font-mono" style={{ fontSize: 11, fontWeight: 700, color: t.success, marginTop: 2 }}>{selectedStock.orbStatus}</div>
            </div>
            <div style={{ padding: "8px 12px", borderRadius: 8, background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="font-mono" style={{ fontSize: 9, color: "var(--ink-dim)", textTransform: "uppercase" }}>Day Range %</div>
              <div className="font-mono" style={{ fontSize: 11, fontWeight: 700, color: t.amberBright, marginTop: 2 }}>{selectedStock.rangePct}</div>
            </div>
          </div>
        </div>

        {/* Right: Google Gemini 3.6 Flash Market Regime Copilot */}
        <div style={{ padding: 18, borderRadius: 14, background: "rgba(31,199,192,0.04)", border: "1px solid rgba(31,199,192,0.2)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
            <Sparkles size={14} color={t.auroraBright} />
            <span className="font-mono" style={{ fontSize: 11, color: t.auroraBright, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Google Gemini 3.6 Flash Market Regime Copilot
            </span>
          </div>
          <p style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.6, margin: "0 0 14px", fontStyle: "italic" }}>
            "{selectedStock.geminiInsight}"
          </p>

          <div style={{ paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: 8 }}>
            <CheckCircle2 size={13} color={t.success} />
            <div className="font-mono" style={{ fontSize: 10.5, color: "var(--ink-dim)" }}>
              HTML5 Canvas Range Engine &bull; Zero Client Broker Secret Exposure
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
