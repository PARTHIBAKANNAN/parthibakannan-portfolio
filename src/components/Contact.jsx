import React, { useState } from "react";
import { Mail, Phone, ArrowUpRight, Download, Linkedin, Github, Copy, Check, Sparkles, Send, MessageSquare, MessageCircle, Clock } from "lucide-react";
import { t } from "../lib/theme.js";
import { Reveal } from "./Reveal.jsx";

const RESUME_PDF = "/resume.pdf";

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  function copyText(text, isEmail) {
    navigator.clipboard.writeText(text);
    if (isEmail) {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  }

  return (
    <section id="contact" className="section-tight mesh-bg" style={{ borderTop: "1px solid var(--line)", paddingBottom: 88 }}>
      <div className="container">
        <Reveal style={{ maxWidth: 880, margin: "0 auto" }}>
          
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 34 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "5px 14px", borderRadius: 999, background: "rgba(124,92,255,0.12)", border: "1px solid rgba(124,92,255,0.3)", marginBottom: 12 }}>
              <span style={{ width: 7, height: 7, borderRadius: 999, background: t.success, boxShadow: `0 0 8px ${t.success}` }} />
              <span className="font-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: t.irisBright }}>
                Direct Communication Terminal
              </span>
            </div>
            <h2 className="font-display" style={{ fontSize: "clamp(30px, 4.4vw, 44px)", fontWeight: 800, color: t.ink, margin: "0 0 12px", lineHeight: 1.1 }}>
              Let's build something exceptional.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: t.inkSoft, maxWidth: 620, margin: "0 auto" }}>
              Open to high-impact Gen AI Engineer &amp; Quantitative Systems roles. Fast responses guaranteed.
            </p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 10, fontSize: 12, color: t.auroraBright, fontFamily: "'JetBrains Mono', monospace" }}>
              <Clock size={13} />
              <span>Average Response Time: &lt; 2 Hours &bull; Timezone: IST (UTC+5:30)</span>
            </div>
          </div>

          {/* Interactive Contact Cards Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 28 }}>
            
            {/* Email Card */}
            <div className="glass-strong hover-card" style={{ padding: "24px 22px", borderRadius: 18 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 12,
                  background: `linear-gradient(135deg, ${t.irisBright}, ${t.irisDeep})`,
                  display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px -6px rgba(124,92,255,0.5)"
                }}>
                  <Mail size={19} color="#fff" />
                </div>
                <button
                  type="button"
                  onClick={() => copyText("parthisivaram45@gmail.com", true)}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 5, padding: "5px 10px", borderRadius: 8,
                    background: copiedEmail ? "rgba(15,169,104,0.18)" : "rgba(255,255,255,0.06)",
                    border: copiedEmail ? "1px solid rgba(15,169,104,0.4)" : "1px solid var(--chip-border)",
                    color: copiedEmail ? t.success : "var(--ink-muted)", fontSize: 11, fontFamily: "'JetBrains Mono', monospace",
                    cursor: "pointer", transition: "all 0.15s"
                  }}
                >
                  {copiedEmail ? <Check size={12} /> : <Copy size={12} />}
                  {copiedEmail ? "Copied!" : "Copy"}
                </button>
              </div>
              <div className="font-mono" style={{ fontSize: 11, color: t.inkMuted, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>Primary Email</div>
              <a href="mailto:parthisivaram45@gmail.com" className="font-display" style={{ fontSize: 15, fontWeight: 700, color: t.ink, display: "inline-flex", alignItems: "center", gap: 6 }}>
                parthisivaram45@gmail.com <ArrowUpRight size={14} color={t.auroraBright} />
              </a>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="glass-strong hover-card" style={{ padding: "24px 22px", borderRadius: 18 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 12,
                  background: `linear-gradient(135deg, ${t.auroraBright}, #0B8A85)`,
                  display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px -6px rgba(31,199,192,0.5)"
                }}>
                  <Phone size={19} color="#fff" />
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  <a
                    href="https://wa.me/919123591335?text=Hi%20Parthibakannan,%20reaching%20out%20from%20your%20portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 4, padding: "5px 10px", borderRadius: 8,
                      background: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.35)",
                      color: "#25D366", fontSize: 11, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700
                    }}
                  >
                    <MessageCircle size={12} /> WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => copyText("+919123591335", false)}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 5, padding: "5px 10px", borderRadius: 8,
                      background: copiedPhone ? "rgba(15,169,104,0.18)" : "rgba(255,255,255,0.06)",
                      border: copiedPhone ? "1px solid rgba(15,169,104,0.4)" : "1px solid var(--chip-border)",
                      color: copiedPhone ? t.success : "var(--ink-muted)", fontSize: 11, fontFamily: "'JetBrains Mono', monospace",
                      cursor: "pointer", transition: "all 0.15s"
                    }}
                  >
                    {copiedPhone ? <Check size={12} /> : <Copy size={12} />}
                    {copiedPhone ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
              <div className="font-mono" style={{ fontSize: 11, color: t.inkMuted, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>Phone Direct</div>
              <a href="tel:+919123591335" className="font-display" style={{ fontSize: 15, fontWeight: 700, color: t.ink, display: "inline-flex", alignItems: "center", gap: 6 }}>
                +91 91235 91335 <ArrowUpRight size={14} color={t.auroraBright} />
              </a>
            </div>

          </div>

          {/* Social Links & Resume Deck */}
          <div style={{
            display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap",
            paddingTop: 20, borderTop: "1px solid var(--line)"
          }}>
            <a
              href={RESUME_PDF}
              download="Parthibakannan_S_Resume_2026.pdf"
              className="btn-primary"
              style={{
                background: `linear-gradient(135deg, ${t.irisBright}, ${t.irisDeep})`,
                color: "#fff", fontWeight: 700, padding: "11px 22px", fontSize: 13.5
              }}
            >
              <Download size={15} /> Download Official Résumé (PDF)
            </a>
            <a
              href="https://www.linkedin.com/in/parthibakannan-s"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ padding: "11px 20px", fontSize: 13.5 }}
            >
              <Linkedin size={15} color="#0A66C2" /> LinkedIn Profile <ArrowUpRight size={13} />
            </a>
            <a
              href="https://github.com/PARTHIBAKANNAN"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ padding: "11px 20px", fontSize: 13.5 }}
            >
              <Github size={15} /> GitHub · main <ArrowUpRight size={13} />
            </a>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("portfolio:open-chat"))}
              className="btn-ghost"
              style={{ padding: "11px 20px", fontSize: 13.5 }}
            >
              <Sparkles size={15} color={t.irisBright} /> Ask AI Assistant
            </button>
          </div>

        </Reveal>
      </div>
    </section>
  );
}
