import React, { useState } from "react";
import { Terminal, Send, Check, Copy, Sparkles, ArrowRight, Zap } from "lucide-react";
import { t } from "../lib/theme.js";
import { Reveal } from "./Reveal.jsx";

export function TerminalPlayground() {
  const [history, setHistory] = useState([
    {
      cmd: "help",
      out: "Available commands:\n  • quant-metrics   - Real-time trading engines (210+ stocks, 21 strategies)\n  • enterprise-rag  - 10L+ contract indexing architecture on Azure\n  • stack           - Full-stack & AI technologies summary\n  • contact         - Reach out via email, phone, or LinkedIn",
    }
  ]);
  const [input, setInput] = useState("");

  const commandMap = {
    help: "Available commands:\n  • quant-metrics   - Real-time trading engines (210+ stocks, 21 strategies)\n  • enterprise-rag  - 10L+ contract indexing architecture on Azure\n  • stack           - Full-stack & AI technologies summary\n  • contact         - Reach out via email, phone, or LinkedIn\n  • clear           - Clear terminal window",
    "quant-metrics": "⚡ QUANTITATIVE SYSTEMS PERFORMANCE MATRIX:\n  • PulseHunter: 210+ Stocks & HTML5 Canvas Charts, 250ms WebSocket Delta Stream, In-Memory IRS & ORB, Google Gemini 3.6 Flash Copilot\n  • NUKEBOX: 21 Deployed Intraday Strategies, 90+ Days 1-Min Historical Backtest, Black-Scholes Greeks, Supabase Audit, 54 PyTest suites\n  • Security Boundary: 0 Client Credential Exposure (Server-Side FastAPI BFF Proxy)\n  • Live Terminals:\n    - https://trading-dashboard-1.duckdns.org/\n    - https://trading-dashboard-1.duckdns.org/options-simulator/",
    "enterprise-rag": "🏢 ENTERPRISE COGNIZANT GEN-AI PLATFORM:\n  • Contract Retrieval: 10,00,000+ contracts indexed with Hybrid Search (BM25 + text-embedding-3)\n  • RAG Chatbot: Azure OpenAI GPT-4o with cited source passages streamed in 3-5s\n  • PDF Compare Agent: Two-document semantic diff with Azure Service Bus async queuing\n  • SDLC Agentic Tool: Claude-based ticket-to-PR automated pipeline with Playwright",
    stack: "🛠️ TECHNICAL STACK SUMMARY:\n  • Gen AI / LLM: Azure OpenAI, GPT-4/5, Claude, Gemini 3.6 Flash, RAG, Embeddings, Vector Search\n  • Quant / Low-Latency: FYERS API v3, WebSockets, In-Memory Delta Caches, Black-Scholes Greeks, Canvas 2D\n  • Full-Stack: Python (FastAPI, Flask), .NET (C#, MVC, Web API), React, Supabase, Cosmos DB\n  • DevOps & QA: Azure App Service, GitHub Actions, TeamCity, Octopus Deploy, Playwright, NUnit, PyTest",
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
    <section className="section-tight" style={{ borderTop: "1px solid var(--line)", background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(31,199,192,0.04), transparent 70%)" }}>
      <div className="container">
        <Reveal>
          <div style={{ marginBottom: 28, maxWidth: 720 }}>
            <div className="section-eyebrow" style={{ marginBottom: 12 }}>Interactive Developer Console</div>
            <h2 className="font-display heading-huge" style={{ fontSize: "clamp(26px, 3.4vw, 36px)", margin: "0 0 12px", color: t.ink }}>
              Interactive CLI Terminal.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: t.inkMuted, margin: 0 }}>
              Query real-time system performance (210+ stocks &amp; 21 strategies), enterprise RAG architectures, or contact details directly.
            </p>
          </div>
        </Reveal>

        {/* Terminal Container */}
        <div style={{
          borderRadius: 18, overflow: "hidden", border: "1px solid rgba(124,92,255,0.25)",
          background: "linear-gradient(180deg, #101426, #090B14)",
          boxShadow: "0 30px 70px -25px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.08)"
        }}>
          {/* Header */}
          <div style={{
            padding: "10px 18px", borderBottom: "1px solid rgba(255,255,255,0.07)",
            background: "rgba(255,255,255,0.02)", display: "flex", alignItems: "center", justifyContent: "space-between"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 11, height: 11, borderRadius: 6, background: "#FF5F56" }} />
              <span style={{ width: 11, height: 11, borderRadius: 6, background: "#FFBD2E" }} />
              <span style={{ width: 11, height: 11, borderRadius: 6, background: "#27C93F" }} />
              <span className="font-mono" style={{ fontSize: 11.5, color: "var(--ink-dim)", marginLeft: 10 }}>parthi-cli — bash — 80x24</span>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {["quant-metrics", "enterprise-rag", "stack", "contact"].map(chip => (
                <button
                  key={chip}
                  onClick={() => executeCommand(chip)}
                  style={{
                    padding: "3px 10px", borderRadius: 6, background: "rgba(124,92,255,0.12)",
                    border: "1px solid rgba(124,92,255,0.25)", color: t.auroraBright,
                    fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, cursor: "pointer",
                    transition: "all 0.15s"
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(124,92,255,0.25)"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(124,92,255,0.12)"; e.currentTarget.style.color = t.auroraBright; }}
                >
                  &gt; {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: "20px 24px", minHeight: 220, maxHeight: 380, overflowY: "auto", fontFamily: "'JetBrains Mono', monospace", fontSize: 12.5, lineHeight: 1.65 }}>
            {history.map((h, idx) => (
              <div key={idx} style={{ marginBottom: 14 }}>
                <div style={{ color: t.auroraBright, display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                  <span style={{ color: t.irisBright }}>guest@parthi-system:~$</span>
                  <span style={{ color: "#fff", fontWeight: 600 }}>{h.cmd}</span>
                </div>
                <div style={{ color: "var(--ink-soft)", whiteSpace: "pre-wrap", paddingLeft: 12, borderLeft: "2px solid rgba(124,92,255,0.3)" }}>
                  {h.out}
                </div>
              </div>
            ))}

            {/* Input Line */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12 }}>
              <span style={{ color: t.irisBright }}>guest@parthi-system:~$</span>
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter") executeCommand(); }}
                placeholder="Type 'help', 'quant-metrics', 'enterprise-rag'..."
                style={{
                  flex: 1, background: "transparent", border: "none", outline: "none",
                  color: "#fff", fontFamily: "'JetBrains Mono', monospace", fontSize: 12.5
                }}
                autoFocus
              />
              <button
                onClick={() => executeCommand()}
                style={{ background: "transparent", border: "none", color: t.auroraBright, cursor: "pointer", padding: "4px 8px" }}
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
