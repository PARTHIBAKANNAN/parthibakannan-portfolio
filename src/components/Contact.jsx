import React from "react";
import { Mail, Phone, ArrowUpRight, Download, Linkedin, Github } from "lucide-react";
import { t } from "../lib/theme.js";
import { Reveal } from "./Reveal.jsx";

const RESUME_PDF = "/resume.pdf";

export function Contact() {
  return (
    <section id="contact" className="section mesh-bg" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="container">
        <Reveal style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div className="section-eyebrow" style={{ marginBottom: 12 }}>Contact</div>
          <h2 className="font-display" style={{ fontSize: "clamp(32px, 4.6vw, 50px)", fontWeight: 700, color: t.ink, margin: "0 0 16px", lineHeight: 1.1 }}>Hiring for a Gen AI role?</h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: t.inkSoft, margin: "0 0 36px" }}>I'm open to new opportunities. Send a note and I'll get back the same day.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14, marginBottom: 34 }}>
            <a href="mailto:parthisivaram45@gmail.com" className="glass hover-card" style={{ padding: 22, textAlign: "left", display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: `linear-gradient(135deg, ${t.irisBright}, ${t.irisDeep})`, display: "flex", alignItems: "center", justifyContent: "center" }}><Mail size={18} color="#fff" /></div>
              <div style={{ flex: 1 }}>
                <div className="font-mono" style={{ fontSize: 10.5, color: t.inkMuted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Email</div>
                <div className="font-display" style={{ fontSize: 14, fontWeight: 600, color: t.ink }}>parthisivaram45@gmail.com</div>
              </div>
              <ArrowUpRight size={16} color={t.inkMuted} />
            </a>
            <a href="tel:+919123591335" className="glass hover-card" style={{ padding: 22, textAlign: "left", display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: `linear-gradient(135deg, ${t.auroraBright}, #0B8A85)`, display: "flex", alignItems: "center", justifyContent: "center" }}><Phone size={18} color="#fff" /></div>
              <div style={{ flex: 1 }}>
                <div className="font-mono" style={{ fontSize: 10.5, color: t.inkMuted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Phone</div>
                <div className="font-display" style={{ fontSize: 14, fontWeight: 600, color: t.ink }}>+91 91235 91335</div>
              </div>
              <ArrowUpRight size={16} color={t.inkMuted} />
            </a>
          </div>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={RESUME_PDF} download="Parthibakannan_S_Resume_2026.pdf" className="btn-primary"><Download size={15} /> Download résumé</a>
            <a href="https://www.linkedin.com/in/parthibakannan-s" target="_blank" rel="noopener noreferrer" className="btn-ghost"><Linkedin size={15} /> LinkedIn <ArrowUpRight size={13} /></a>
            <a href="https://github.com/PARTHIBAKANNAN" target="_blank" rel="noopener noreferrer" className="btn-ghost"><Github size={15} /> GitHub · main <ArrowUpRight size={13} /></a>
            <a href="https://github.com/parthicts07" target="_blank" rel="noopener noreferrer" className="btn-ghost"><Github size={15} /> GitHub · second <ArrowUpRight size={13} /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
