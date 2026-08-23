import React, { useState } from "react";
import { Terminal, Send, Check, Copy, Sparkles, ArrowRight, Zap, ExternalLink } from "lucide-react";
import { t } from "../lib/theme.js";
import { Reveal } from "./Reveal.jsx";

export function TerminalPlayground() {
  const [history, setHistory] = useState([
    {
      cmd: "help",
      out: "Available commands:\n  • apps            - 5 Live deployed applications (Quant, AI & Vision)\n  • jarvis          - J.A.R.V.I.S. Autonomous Desktop AI Companion\n  • quant-metrics   - Real-time trading engines (210+ stocks, 21 strategies)\n  • enterprise-rag  - 10L+ contract indexing architecture on Azure\n  • hobbies         - Duolingo 350+D streak, 710 Chess Elo & Gaming\n  • stack           - Full-stack & AI technologies summary\n  • contact         - Reach out via email, phone, or LinkedIn\n  • clear           - Clear terminal window",
    }
  ]);
  const [input, setInput] = useState("");

  const commandMap = {
    help: "Available commands:\n  • apps            - 5 Live deployed applications (Quant, AI & Vision)\n  • jarvis          - J.A.R.V.I.S. Autonomous Desktop AI Companion\n  • quant-metrics   - Real-time trading engines (210+ stocks, 21 strategies)\n  • enterprise-rag  - 10L+ contract indexing architecture on Azure\n  • hobbies         - Duolingo 350+D streak, 710 Chess Elo & Gaming\n  • stack           - Full-stack & AI technologies summary\n  • contact         - Reach out via email, phone, or LinkedIn\n  • clear           - Clear terminal window",
    apps: "🚀 LIVE PRODUCTION APPLICATIONS:\n  1. PulseHunter (Institutional Momentum Scanner):\n     → https://trading-dashboard-1.duckdns.org/\n     → 210+ stocks, 250ms WebSocket delta stream, Google Gemini 3.6 Flash Copilot\n\n  2. NUKEBOX (Autonomous Options Simulator):\n     → https://trading-dashboard-1.duckdns.org/options-simulator/\n     → 21 strategies, 365-day backtest, Black-Scholes Greeks, Telegram risk gates\n\n  3. TheraBot (AI Therapeutic Companion):\n     → https://therabot-beryl.vercel.app/\n     → Google Gemini, autonomous tool calling, bi-directional voice (STT/TTS), MongoDB Atlas\n\n  4. SmartRide Chennai (Urban Bike Pooling):\n     → https://bike-ride-share.vercel.app/\n     → Google Gemini corridor matcher, OSRM turn-by-turn Leaflet maps, Pink Rides mode\n\n  5. SignLanguageRecognition (Webcam Gesture Interpreter):\n     → https://parthibakannan.github.io/SignLanguageRecognition/\n     → Google MediaPipe 21-landmark extraction, Random Forest classification",
    jarvis: "🤖 J.A.R.V.I.S. — AUTONOMOUS DESKTOP AI COMPANION:\n  • GitHub: https://github.com/PARTHIBAKANNAN/JARVIS\n  • UI: Cyberpunk Lavender Floating Arc Reactor HUD in PyQt6\n  • Voice: Voice Activity Detection (VAD) + Biometric Speaker Verification\n  • Speed: <100ms instant Windows app launcher (VS Code, Antigravity, PowerPoint)\n  • Cognitive Core: Google Gemini 3.6 Flash + local Ollama failover\n  • Sentinel: GPU thermal monitor & active screen-time posture alerts",
    "quant-metrics": "⚡ QUANTITATIVE SYSTEMS PERFORMANCE MATRIX:\n  • PulseHunter: 210+ Stocks & HTML5 Canvas Charts, 250ms WebSocket Delta Stream, In-Memory IRS & ORB, Google Gemini 3.6 Flash Copilot\n  • NUKEBOX: 21 Deployed Intraday Strategies, 365-Day 1-Min Historical Backtest, Black-Scholes Greeks, Telegram Bot & Supabase Audit\n  • Security Boundary: 0 Client Credential Exposure (Server-Side FastAPI BFF Proxy)\n  • Live Terminals:\n    - https://trading-dashboard-1.duckdns.org/\n    - https://trading-dashboard-1.duckdns.org/options-simulator/",
    "enterprise-rag": "🏢 ENTERPRISE COGNIZANT GEN-AI PLATFORM:\n  • Contract Retrieval: 10,00,000+ contracts indexed with Hybrid Search (BM25 + text-embedding-3)\n  • RAG Chatbot: Azure OpenAI GPT-4o with cited source passages streamed in 3-5s\n  • PDF Compare Agent: Two-document semantic diff with Azure Service Bus async queuing\n  • SDLC Agentic Tool: Claude-based ticket-to-PR automated pipeline with Playwright",
    hobbies: "🔥 COGNITIVE DISCIPLINE, CHESS & GAMING:\n  • Duolingo: 350+ Day Streak 🔥 | 53,132 Total XP | Diamond League 💎 (16 Top-3 finishes)\n  • Duolingo Chess: 710 Elo Rating (24,077 XP) — tactical calculation & endgame foresight\n  • Languages: Japanese (14.2k XP), Hindi (10.8k XP), German (3.3k XP), Tamil, Telugu, English\n  • HackerRank: 5-Star Gold SQL Badge (★★★★★) & Verified SQL Skill Certificate\n  • Competitive Gaming: BGMI (Squad Tactics & Callouts), GTA 5 (Simulation), NFS Most Wanted (Reflexes)",
    duolingo: "🔥 DUOLINGO STATS:\n  • 350+ Day Continuous Streak\n  • 53,132 Total XP (Diamond League)\n  • Chess: 710 Elo (24,077 XP)\n  • Japanese: 14,199 XP | Hindi: 10,812 XP | German: 3,298 XP",
    hackerrank: "🏆 HACKERRANK VERIFIED BADGES:\n  • SQL: 5-Star Gold Badge (★★★★★)\n  • SQL Skill: Verified Certificate\n  • Problem Solving: 3-Star (★★★)\n  • Python: 2-Star (★★)",
    stack: "🛠️ TECHNICAL STACK SUMMARY:\n  • Gen AI & Vision: Google Gemini 3.6 Flash, Azure OpenAI (GPT-4o), Claude, Ollama, MediaPipe, scikit-learn\n  • Maps & Desktop: Leaflet.js, OSRM Road Engine, Web Audio API (432Hz), PyQt6 GUI, Voice Biometrics\n  • Quant / Low-Latency: FYERS API v3, WebSockets, In-Memory Delta Caches, Black-Scholes Greeks, Canvas 2D\n  • Full-Stack: Python (FastAPI, Flask), .NET (C#, MVC, Web API), React, MongoDB Atlas, Neon PostgreSQL, Supabase\n  • Cloud & Hosting: Azure App Service, Vercel, Render, GitHub Pages, Cloudflare Workers AI, GitHub Actions",
    contact: "📬 CONTACT CHANNELS:\n  • Email: parthisivaram45@gmail.com\n  • Phone: +91 9123591335\n  • LinkedIn: linkedin.com/in/parthibakannan-s\n  • GitHub: github.com/PARTHIBAKANNAN",
    hire: "✨ HIRING PARTHIBAKANNAN:\n  • Role: Open to Gen AI Engineer & Quantitative Systems Architect roles.\n  • Location: Chennai, India (open to remote/hybrid).\n  • Immediate response via email: parthisivaram45@gmail.com",
  };

  function executeCommand(cmdStr) {
    const cleanCmd = (cmdStr || input).trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const output = commandMap[cleanCmd] || `Command not found: "${cleanCmd}". Type "help" for a list of available commands.`;
    setHistory(prev => [...prev, { cmd: cleanCmd, out: output }]);
    setInput("");
  }

  return (
    <section id="terminal" className="section-tight" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="container">
        <Reveal>
          <div style={{ marginBottom: 28, display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 16 }}>
            <div>
              <div className="section-eyebrow" style={{ marginBottom: 8 }}>Interactive CLI Sandbox</div>
              <h2 className="font-display heading-huge" style={{ fontSize: "clamp(24px, 3.2vw, 32px)", fontWeight: 800, color: t.ink, margin: 0 }}>
                Developer Terminal Playground
              </h2>
            </div>
            {/* Quick Command Pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["apps", "jarvis", "quant-metrics", "enterprise-rag", "hobbies", "stack", "contact"].map(c => (
                <button
                  key={c}
                  onClick={() => executeCommand(c)}
                  className="font-mono"
                  style={{
                    background: "rgba(124,92,255,0.08)", border: "1px solid rgba(124,92,255,0.22)",
                    borderRadius: 8, padding: "5px 10px", fontSize: 11.5, color: t.irisBright,
                    cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 4
                  }}
                >
                  <Zap size={11} /> {c}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Terminal Window Card */}
        <Reveal delay={80}>
          <div className="glass-strong" style={{
            borderRadius: 18, overflow: "hidden", border: "1px solid rgba(124,92,255,0.3)",
            boxShadow: "0 28px 60px -20px rgba(0,0,0,0.6)"
          }}>
            {/* Title Bar */}
            <div style={{
              background: "linear-gradient(180deg, #181D33, #101426)", padding: "12px 18px",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              borderBottom: "1px solid rgba(255,255,255,0.08)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ display: "flex", gap: 6 }}>
                  <span style={{ width: 10, height: 10, borderRadius: 5, background: "#FF5F56" }} />
                  <span style={{ width: 10, height: 10, borderRadius: 5, background: "#FFBD2E" }} />
                  <span style={{ width: 10, height: 10, borderRadius: 5, background: "#27C93F" }} />
                </div>
                <span className="font-mono" style={{ fontSize: 11.5, color: "var(--ink-dim)", marginLeft: 8 }}>
                  parthi@quant-core:~ (zsh)
                </span>
              </div>
              <span className="font-mono" style={{ fontSize: 10.5, color: t.auroraBright, display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ width: 6, height: 6, borderRadius: 3, background: t.auroraBright, animation: "pulseSoft 1.5s infinite" }} />
                FASTAPI &bull; GEMINI 3.6 READY
              </span>
            </div>

            {/* Terminal Body */}
            <div style={{
              background: "#0A0D1A", padding: "20px 24px", minHeight: 220, maxHeight: 380, overflowY: "auto",
              fontFamily: "'JetBrains Mono', monospace", fontSize: 12.5, color: "#E2E8F0", lineHeight: 1.6
            }}>
              {history.map((h, idx) => (
                <div key={idx} style={{ marginBottom: 16 }}>
                  <div style={{ color: t.auroraBright, display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ color: t.irisBright }}>parthi-cli $</span> {h.cmd}
                  </div>
                  <pre style={{
                    margin: "6px 0 0", whiteSpace: "pre-wrap", color: "#C9D4E8", fontFamily: "inherit",
                    fontSize: 12, lineHeight: 1.55
                  }}>
                    {h.out}
                  </pre>
                </div>
              ))}

              {/* Input Line */}
              <form
                onSubmit={(e) => { e.preventDefault(); executeCommand(); }}
                style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12 }}
              >
                <span style={{ color: t.irisBright, fontWeight: 700 }}>parthi-cli $</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="type a command (e.g. apps, jarvis, quant-metrics, hobbies, hire, clear)..."
                  style={{
                    flex: 1, background: "transparent", border: "none", outline: "none",
                    color: "#FFFFFF", fontFamily: "'JetBrains Mono', monospace", fontSize: 12.5
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: "rgba(124,92,255,0.2)", border: "1px solid rgba(124,92,255,0.4)",
                    borderRadius: 6, padding: "4px 10px", color: "#fff", cursor: "pointer",
                    fontSize: 11, fontFamily: "inherit"
                  }}
                >
                  <Send size={11} />
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
