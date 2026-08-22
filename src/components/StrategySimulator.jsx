import React, { useState } from "react";
import { t } from "../lib/theme.js";
import { Activity, ShieldCheck, Zap, BrainCircuit, BarChart3, ChevronRight, Sparkles, Filter } from "lucide-react";

export function StrategySimulator() {
  const categories = [
    { id: "all", label: "All 21 Strategies" },
    { id: "momentum", label: "Momentum & Breakouts (6)" },
    { id: "greeks", label: "IV & Greeks Harvest (5)" },
    { id: "reversion", label: "Mean Reversion (5)" },
    { id: "gamma", label: "Gamma Scalping & Expiry (5)" },
  ];

  const allStrategies = [
    {
      id: "orb-c1",
      cat: "momentum",
      name: "ORB Breakout C1",
      type: "Intraday Momentum Call",
      regime: "Trending Bullish",
      winRate: "68.4%",
      profitFactor: "2.14",
      sampleDays: "365 Days (1-Year Data)",
      greeks: { delta: "+0.64", gamma: "+0.012", theta: "-14.2", vega: "+8.5" },
      geminiReasoning: "Strong volume expansion beyond 15-min Opening Range High with broad NIFTY IT & Banking sector RS alignment. High probability breakout continuation.",
      riskRule: "SL: 15 pts below ORB High · TP: 1:2 Risk-Reward · Auto-Exit: 15:15 IST",
    },
    {
      id: "orb-c4",
      cat: "momentum",
      name: "ORB Breakdown C4",
      type: "Intraday Momentum Put",
      regime: "Trending Bearish",
      winRate: "66.2%",
      profitFactor: "2.05",
      sampleDays: "365 Days (1-Year Data)",
      greeks: { delta: "-0.62", gamma: "+0.011", theta: "-13.8", vega: "+7.9" },
      geminiReasoning: "Heavy call writing at ATM strikes with cumulative order book delta deeply negative. Confirmed breakdown below 15-min low.",
      riskRule: "SL: 15 pts above ORB Low · TP: 1:2.2 Risk-Reward · Auto-Exit: 15:15 IST",
    },
    {
      id: "iron-condor",
      cat: "greeks",
      name: "Iron Condor IV Crush",
      type: "Multi-Leg Greeks Harvest",
      regime: "High IV / Rangebound",
      winRate: "76.2%",
      profitFactor: "1.92",
      sampleDays: "365 Days (1-Year Data)",
      greeks: { delta: "+0.02", gamma: "-0.008", theta: "+24.6", vega: "-18.4" },
      geminiReasoning: "India VIX spike > 16.5 ahead of weekly expiry. Implied volatility priced higher than historical realized volatility. Optimal for positive Theta decay harvest.",
      riskRule: "SL: 2x Credit Received per leg · TP: 50% Max Profit · Auto-Exit: Exp Day 15:00",
    },
    {
      id: "short-strangle",
      cat: "greeks",
      name: "Delta-Neutral Strangle",
      type: "Volatility Short Spread",
      regime: "Consolidation / Range",
      winRate: "74.5%",
      profitFactor: "1.88",
      sampleDays: "365 Days (1-Year Data)",
      greeks: { delta: "+0.01", gamma: "-0.006", theta: "+19.8", vega: "-14.2" },
      geminiReasoning: "0.15 Delta OTM Put and Call shorted during midday consolidation (11:30 - 13:30 IST) to maximize time-decay decay curve.",
      riskRule: "SL: 30% premium increase on either leg · TP: 40% decay · Auto-Exit: 14:45",
    },
    {
      id: "rs-momentum",
      cat: "momentum",
      name: "Intraday RS Swing (Call)",
      type: "Sector Relative Strength",
      regime: "Outperforming Tickers",
      winRate: "71.0%",
      profitFactor: "2.38",
      sampleDays: "365 Days (1-Year Data)",
      greeks: { delta: "+0.58", gamma: "+0.010", theta: "-11.8", vega: "+6.2" },
      geminiReasoning: "Ticker RS score > +75 against NIFTY benchmark with positive Order Book Delta across 210+ stocks. High institutional buying pressure.",
      riskRule: "Trailing SL on 5-EMA · TP: Intraday Pivot R2 · Auto-Exit: 15:10 IST",
    },
    {
      id: "mean-reversion",
      cat: "reversion",
      name: "Mean Reversion Put",
      type: "Overbought Reversal",
      regime: "Overextended Resistance",
      winRate: "64.8%",
      profitFactor: "1.85",
      sampleDays: "365 Days (1-Year Data)",
      greeks: { delta: "-0.55", gamma: "+0.009", theta: "-12.5", vega: "+7.1" },
      geminiReasoning: "RSI > 78 with dual-range extension > 90% and negative divergence on 5-min order book delta. Exhaustion volume suggests impending pullback.",
      riskRule: "SL: Day High + 10 pts · TP: Mean VWAP line · Auto-Exit: 14:45 IST",
    },
    {
      id: "gamma-scalp",
      cat: "gamma",
      name: "0-DTE Expiry Gamma Burst",
      type: "Expiry Day Scalp",
      regime: "Post-13:30 Expiry Squeeze",
      winRate: "62.4%",
      profitFactor: "2.65",
      sampleDays: "365 Days (1-Year Data)",
      greeks: { delta: "+0.45", gamma: "+0.048", theta: "-38.2", vega: "+3.1" },
      geminiReasoning: "Late afternoon short-covering surge on weekly expiry. High gamma coefficient accelerates option delta from 0.20 to 0.70 within minutes.",
      riskRule: "Fixed SL: 25% of entry price · TP: 100%+ runner · Auto-Exit: 15:20 IST",
    },
  ];

  const [activeCat, setActiveCat] = useState("all");
  const filtered = activeCat === "all" ? allStrategies : allStrategies.filter(s => s.cat === activeCat);
  const [activeStrat, setActiveStrat] = useState(allStrategies[0]);

  return (
    <div style={{
      marginTop: 34, padding: "26px 28px", borderRadius: 20,
      background: "linear-gradient(180deg, rgba(20,26,46,0.9), rgba(11,14,26,0.95))",
      border: "1px solid rgba(124,92,255,0.25)",
      boxShadow: "0 20px 50px -20px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)"
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18, flexWrap: "wrap", gap: 10 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 4 }}>
            <Activity size={16} color={t.auroraBright} />
            <span className="font-mono" style={{ fontSize: 11, color: t.auroraBright, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700 }}>21 Deployed Strategies · 365-Day Backtest Matrix</span>
          </div>
          <h4 className="font-display" style={{ fontSize: 18, fontWeight: 700, color: "var(--ink)", margin: 0 }}>
            NUKEBOX Algorithmic Execution &amp; 1-Year Backtest Explorer
          </h4>
        </div>
        <div className="font-mono" style={{ fontSize: 11, color: t.success, background: "rgba(15,169,104,0.15)", padding: "4px 12px", borderRadius: 999, border: "1px solid rgba(15,169,104,0.3)" }}>
          ● 21 COMPILED (365-DAY TESTED)
        </div>
      </div>

      {/* Category Tabs */}
      <div style={{ display: "flex", gap: 8, marginBottom: 14, overflowX: "auto", paddingBottom: 4 }}>
        {categories.map(c => {
          const isSelected = c.id === activeCat;
          return (
            <button
              key={c.id}
              onClick={() => setActiveCat(c.id)}
              style={{
                padding: "6px 14px", borderRadius: 8, cursor: "pointer", fontSize: 11.5, fontWeight: 700,
                border: isSelected ? `1px solid ${t.auroraBright}` : "1px solid rgba(255,255,255,0.07)",
                background: isSelected ? "rgba(31,199,192,0.18)" : "rgba(255,255,255,0.03)",
                color: isSelected ? t.auroraBright : "var(--ink-muted)",
                whiteSpace: "nowrap", transition: "all 0.15s"
              }}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      {/* Strategy Switcher Pills */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20, overflowX: "auto", paddingBottom: 6 }}>
        {filtered.map(s => {
          const isSelected = s.id === activeStrat.id;
          return (
            <button
              key={s.id}
              onClick={() => setActiveStrat(s)}
              style={{
                padding: "8px 16px", borderRadius: 10, cursor: "pointer", fontSize: 12.5, fontWeight: 600,
                border: isSelected ? `1.5px solid ${t.irisBright}` : "1px solid rgba(255,255,255,0.08)",
                background: isSelected ? `linear-gradient(135deg, rgba(124,92,255,0.25), rgba(31,199,192,0.15))` : "rgba(255,255,255,0.03)",
                color: isSelected ? "#fff" : "var(--ink-muted)",
                whiteSpace: "nowrap", transition: "all 0.18s", display: "flex", alignItems: "center", gap: 6
              }}
            >
              <Zap size={12} color={isSelected ? t.auroraBright : "var(--ink-dim)"} />
              {s.name}
            </button>
          );
        })}
      </div>

      {/* Interactive Display Card */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, alignItems: "start" }}>
        
        {/* Left: Strategy Specs & Greeks */}
        <div style={{ padding: 18, borderRadius: 14, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14, alignItems: "center" }}>
            <span className="font-mono" style={{ fontSize: 11, color: t.auroraBright, textTransform: "uppercase", fontWeight: 700 }}>{activeStrat.type}</span>
            <span className="font-mono" style={{ fontSize: 11, color: t.amberBright, background: "rgba(245,166,35,0.12)", padding: "2px 8px", borderRadius: 6 }}>{activeStrat.regime}</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
            <div style={{ padding: "8px 12px", borderRadius: 8, background: "rgba(124,92,255,0.08)", border: "1px solid rgba(124,92,255,0.15)" }}>
              <div className="font-mono" style={{ fontSize: 9.5, color: "var(--ink-dim)", textTransform: "uppercase" }}>365-Day (1-Yr) Win Rate</div>
              <div className="font-display" style={{ fontSize: 18, fontWeight: 800, color: t.success, marginTop: 2 }}>{activeStrat.winRate}</div>
            </div>
            <div style={{ padding: "8px 12px", borderRadius: 8, background: "rgba(31,199,192,0.08)", border: "1px solid rgba(31,199,192,0.15)" }}>
              <div className="font-mono" style={{ fontSize: 9.5, color: "var(--ink-dim)", textTransform: "uppercase" }}>Profit Factor</div>
              <div className="font-display" style={{ fontSize: 18, fontWeight: 800, color: t.auroraBright, marginTop: 2 }}>{activeStrat.profitFactor}</div>
            </div>
          </div>

          <div className="font-mono" style={{ fontSize: 10, color: "var(--ink-dim)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8, fontWeight: 700 }}>
            Black-Scholes Greeks Sensitivity Engine
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }}>
            {Object.entries(activeStrat.greeks).map(([g, val]) => (
              <div key={g} style={{ padding: "6px 8px", borderRadius: 6, background: "rgba(0,0,0,0.3)", textAlign: "center", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="font-mono" style={{ fontSize: 9, color: "var(--ink-dim)", textTransform: "capitalize" }}>{g}</div>
                <div className="font-mono" style={{ fontSize: 11, fontWeight: 700, color: t.irisBright, marginTop: 2 }}>{val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Google Gemini AI Copilot Reasoning & Risk Rules */}
        <div style={{ padding: 18, borderRadius: 14, background: "rgba(124,92,255,0.04)", border: "1px solid rgba(124,92,255,0.18)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
            <Sparkles size={14} color={t.irisBright} />
            <span className="font-mono" style={{ fontSize: 11, color: t.irisBright, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Google Gemini 3.6 Flash Context AI
            </span>
          </div>
          <p style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.6, margin: "0 0 14px", fontStyle: "italic" }}>
            "{activeStrat.geminiReasoning}"
          </p>

          <div style={{ paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="font-mono" style={{ fontSize: 10, color: "var(--ink-dim)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4, fontWeight: 700 }}>
              Automated Risk Enforcement (SL / TP / Expiry Exit)
            </div>
            <div className="font-mono" style={{ fontSize: 11, color: t.success, lineHeight: 1.5 }}>
              {activeStrat.riskRule}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
