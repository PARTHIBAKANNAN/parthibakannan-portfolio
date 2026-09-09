import React, { useState, useEffect, useRef } from "react";
import { Send, Bot, X, Loader2 } from "lucide-react";
import { t } from "../lib/theme.js";
import { REDUCE } from "../lib/motion.js";

const PORTRAIT = "/portrait.jpg";

export function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{
    role: "assistant",
    content: "Hi — I'm an AI assistant trained on Parthi's engineering work. Ask me about his enterprise RAG systems at Cognizant (10L+ contracts for CVS Health), high-concurrency quant systems (PulseHunter with 212+ stocks & NUKEBOX with 44 strategies), autonomous agents (J.A.R.V.I.S. & TheraBot), or certifications."
  }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => { if (open && endRef.current) endRef.current.scrollIntoView({ behavior: "smooth" }); }, [messages, loading, open]);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("portfolio:open-chat", onOpen);
    return () => window.removeEventListener("portfolio:open-chat", onOpen);
  }, []);

  const suggestions = [
    "Tell me about the 10L+ contracts RAG pipeline at Cognizant.",
    "How does PulseHunter audit trades with Gemini & 250ms WebSocket deltas?",
    "How does NUKEBOX execute 44 strategies with Black-Scholes Greeks?",
    "How does J.A.R.V.I.S. implement voice biometrics & <50ms OS dispatch?",
    "What are his credentials from IIT Madras, Anthropic & Microsoft?",
    "How do I get in touch?"
  ];

  async function send(text) {
    const userMsg = (text ?? input).trim();
    if (!userMsg || loading) return;
    const next = [...messages, { role: "user", content: userMsg }];
    setMessages(next); setInput(""); setLoading(true);
    try {
      const apiMessages = next.map(m => ({ role: m.role, content: m.content }));
      const res = await fetch("/api/chat", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });
      const data = await res.json();
      const reply = (data.reply || "").trim()
        || "Sorry — I couldn't reach the model just now. Try again, or email parthisivaram45@gmail.com.";
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: "assistant", content: "Network hiccup — I couldn't reach the model. You can email Parthi at parthisivaram45@gmail.com." }]);
    } finally { setLoading(false); }
  }

  return (
    <>
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? "Close assistant" : "Open assistant"}
        style={{
          position: "fixed", right: 22, bottom: 22, zIndex: 200,
          width: 60, height: 60, borderRadius: 999, cursor: "pointer",
          background: `linear-gradient(135deg, ${t.irisBright}, ${t.irisDeep})`,
          border: "1.5px solid rgba(255,255,255,0.25)",
          boxShadow: "0 18px 40px -14px rgba(106,67,224,0.65), inset 0 1px 0 rgba(255,255,255,0.3)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "transform 0.18s ease, box-shadow 0.18s ease",
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05) translateY(-2px)"; e.currentTarget.style.boxShadow = "0 22px 46px -14px rgba(106,67,224,0.8), inset 0 1px 0 rgba(255,255,255,0.35)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "scale(1) translateY(0)"; e.currentTarget.style.boxShadow = "0 18px 40px -14px rgba(106,67,224,0.65), inset 0 1px 0 rgba(255,255,255,0.3)"; }}
      >
        {open ? <X size={22} color="#fff" /> : <Bot size={25} color="#fff" />}
      </button>

      {open && (
        <div
          id="ask"
          role="dialog"
          aria-label="Portfolio assistant"
          style={{
            position: "fixed", right: 22, bottom: 96, zIndex: 199,
            width: "min(390px, calc(100vw - 32px))",
            height: "min(600px, calc(100vh - 130px))",
            background: "linear-gradient(180deg, #131829, #0B0E1A)",
            borderRadius: 20, overflow: "hidden",
            border: "1px solid rgba(124,92,255,0.25)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), 0 40px 90px -30px rgba(20,24,42,0.7), 0 0 30px rgba(106,67,224,0.2)",
            display: "flex", flexDirection: "column",
            animation: REDUCE ? "none" : "popIn 0.22s ease-out",
          }}
        >
          <div style={{ padding: "14px 18px", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: 10, background: "rgba(124,92,255,0.08)" }}>
            <div style={{ width: 32, height: 32, borderRadius: 999, overflow: "hidden", border: `1.5px solid ${t.irisBright}` }}>
              <img src={PORTRAIT} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="font-display" style={{ fontSize: 13, fontWeight: 700, color: t.darkText }}>Parthi · portfolio assistant</div>
              <div className="font-mono" style={{ fontSize: 10, color: t.auroraBright, marginTop: 2 }}>● online · Cloudflare AI</div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close"
              style={{ background: "transparent", border: "none", color: t.darkSoft, cursor: "pointer", padding: 6, borderRadius: 6, display: "flex", alignItems: "center", transition: "background 0.15s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}>
              <X size={16} />
            </button>
          </div>

          <div style={{ flex: 1, padding: 18, overflowY: "auto", display: "flex", flexDirection: "column", gap: 12 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "85%", padding: "10px 14px", borderRadius: 13, fontSize: 13.5, lineHeight: 1.55, whiteSpace: "pre-wrap",
                  background: m.role === "user" ? `linear-gradient(180deg, ${t.irisBright}, ${t.irisDeep})` : "rgba(255,255,255,0.05)",
                  border: m.role === "user" ? "none" : "1px solid rgba(255,255,255,0.07)",
                  color: m.role === "user" ? "#fff" : t.darkSoft,
                  boxShadow: m.role === "user" ? "inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 22px -10px rgba(106,67,224,0.6)" : "inset 0 1px 0 rgba(255,255,255,0.04)",
                }}>{m.content}</div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div style={{ padding: "12px 16px", borderRadius: 13, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", gap: 5 }}>
                  {[0, 1, 2].map(i => <span key={i} style={{ width: 5, height: 5, borderRadius: 3, background: t.auroraBright, animation: "pulseSoft 1.4s infinite", animationDelay: `${i * 0.2}s` }} />)}
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {messages.length <= 1 && (
            <div style={{ padding: "0 16px 12px", display: "flex", flexWrap: "wrap", gap: 6 }}>
              {suggestions.map(s => (
                <button key={s} onClick={() => send(s)}
                  style={{ padding: "6px 12px", borderRadius: 999, background: "rgba(124,92,255,0.14)", border: "1px solid rgba(124,92,255,0.3)", color: t.darkSoft, fontSize: 11.5, cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s", textAlign: "left" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(124,92,255,0.24)"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(124,92,255,0.14)"; e.currentTarget.style.color = t.darkSoft; }}>{s}</button>
              ))}
            </div>
          )}

          <div style={{ padding: 12, borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", gap: 8 }}>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => { if (e.key === "Enter") send(); }} placeholder="Ask about PulseHunter, NUKEBOX, or RAG systems…"
              style={{ flex: 1, padding: "10px 14px", borderRadius: 10, background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)", color: t.darkText, fontSize: 13.5, fontFamily: "inherit", outline: "none", transition: "border-color 0.15s" }}
              onFocus={e => { e.currentTarget.style.borderColor = "rgba(124,92,255,0.5)"; }} onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }} />
            <button onClick={() => send()} disabled={!input.trim() || loading} className="btn-primary" style={{ padding: "10px 14px", opacity: (!input.trim() || loading) ? 0.5 : 1, cursor: (!input.trim() || loading) ? "not-allowed" : "pointer" }}>
              {loading ? <Loader2 size={14} style={{ animation: "spinS 1s linear infinite" }} /> : <Send size={14} />}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
