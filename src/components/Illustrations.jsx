import React from "react";
import { t } from "../lib/theme.js";
import { REDUCE } from "../lib/motion.js";

// ─────────────────────────────────────────────────────────────────────────
// ANIMATED PROJECT ILLUSTRATIONS (SVG)
// ─────────────────────────────────────────────────────────────────────────
const IL = { vb: "0 0 440 168", w: "100%", h: 168, fill: "rgba(255,255,255,0.55)" };

// These illustrations always sit on a fixed light card backdrop (regardless
// of page theme — see SelectedWork.jsx's cover band), so their accent
// strokes must stay fixed dark graphite rather than flip with theme.
const ACCENT = "#2A2A2E";
const ACCENT_BRIGHT = "#47474D";
const ACCENT_DEEP = "#17171A";

function docRect(x, y, key, hl) {
  return (
    <g key={key}>
      <rect x={x} y={y} width="46" height="58" rx="6" fill={hl ? "rgba(42,42,46,0.12)" : "rgba(255,255,255,0.85)"} stroke={hl ? ACCENT : "rgba(20,24,42,0.14)"} strokeWidth="1.4" />
      <rect x={x + 8} y={y + 10} width="30" height="3.5" rx="1.75" fill="rgba(20,24,42,0.18)" />
      <rect x={x + 8} y={y + 19} width="24" height="3.5" rx="1.75" fill="rgba(20,24,42,0.13)" />
      <rect x={x + 8} y={y + 28} width="28" height="3.5" rx="1.75" fill="rgba(20,24,42,0.13)" />
      <rect x={x + 8} y={y + 37} width="18" height="3.5" rx="1.75" fill="rgba(20,24,42,0.1)" />
    </g>
  );
}

function SearchIllo() {
  return (
    <svg viewBox={IL.vb} width={IL.w} height={IL.h} preserveAspectRatio="xMidYMid meet">
      {docRect(40, 36, "d1", false)}
      {docRect(98, 56, "d2", true)}
      {docRect(156, 30, "d3", false)}
      {docRect(214, 58, "d4", false)}
      {/* index cylinder */}
      <g>
        <ellipse cx="360" cy="58" rx="34" ry="11" fill="rgba(42,42,46,0.14)" stroke={ACCENT} strokeWidth="1.4" />
        <path d="M326 58 L326 100 A34 11 0 0 0 394 100 L394 58" fill="rgba(42,42,46,0.08)" stroke={ACCENT} strokeWidth="1.4" />
        <ellipse cx="360" cy="100" rx="34" ry="11" fill="none" stroke={ACCENT} strokeWidth="1.4" opacity="0.6" />
        <ellipse cx="360" cy="58" rx="44" ry="15" fill="none" stroke={ACCENT_BRIGHT} strokeWidth="1.5" style={{ animation: REDUCE ? "none" : "pulseSoft 2.4s ease-in-out infinite" }} />
      </g>
      {/* flow dots doc->index */}
      <path id="sflow" d="M150 85 C 230 120, 280 120, 326 80" fill="none" stroke="rgba(42,42,46,0.22)" strokeWidth="1.5" strokeDasharray="3 6" className="trace-line" />
      {!REDUCE && <circle r="3" fill={ACCENT}><animateMotion dur="2.6s" repeatCount="indefinite" path="M150 85 C 230 120, 280 120, 326 80" /></circle>}
      {/* magnifier sweeping */}
      <g>
        <circle cx="0" cy="0" r="17" fill="rgba(42,42,46,0.06)" stroke={ACCENT} strokeWidth="2.4" />
        <line x1="12" y1="12" x2="22" y2="22" stroke={ACCENT} strokeWidth="3" strokeLinecap="round" />
        {!REDUCE && <animateMotion dur="4.5s" repeatCount="indefinite" path="M70 70 L120 86 L185 60 L240 88 L70 70" />}
      </g>
    </svg>
  );
}

function ChatIllo() {
  return (
    <svg viewBox={IL.vb} width={IL.w} height={IL.h} preserveAspectRatio="xMidYMid meet">
      {/* doc stack */}
      <g>
        <rect x="40" y="50" width="54" height="68" rx="7" fill="rgba(255,255,255,0.7)" stroke="rgba(20,24,42,0.13)" strokeWidth="1.3" transform="rotate(-7 67 84)" />
        <rect x="46" y="44" width="54" height="68" rx="7" fill="rgba(255,255,255,0.92)" stroke="rgba(20,24,42,0.16)" strokeWidth="1.4" />
        <rect x="54" y="56" width="38" height="3.6" rx="1.8" fill="rgba(20,24,42,0.2)" />
        <rect x="54" y="66" width="30" height="3.6" rx="1.8" fill="rgba(20,24,42,0.14)" />
        <rect x="54" y="76" width="34" height="3.6" rx="1.8" fill="rgba(20,24,42,0.14)" />
        <rect x="54" y="86" width="22" height="3.6" rx="1.8" fill="rgba(20,24,42,0.1)" />
      </g>
      {/* retrieval line */}
      <path d="M104 78 C 150 78, 160 70, 196 64" fill="none" stroke="rgba(42,42,46,0.32)" strokeWidth="1.6" strokeDasharray="3 6" className="trace-line" />
      {!REDUCE && <circle r="3" fill={ACCENT}><animateMotion dur="2.2s" repeatCount="indefinite" path="M104 78 C 150 78, 160 70, 196 64" /></circle>}
      {/* chat bubbles */}
      <g>
        <rect x="200" y="40" width="120" height="26" rx="13" fill="rgba(255,255,255,0.92)" stroke="rgba(20,24,42,0.12)" strokeWidth="1.3">
          {!REDUCE && <animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.1;0.25;1" dur="4s" repeatCount="indefinite" />}
        </rect>
        <rect x="210" y="50" width="64" height="3.6" rx="1.8" fill="rgba(20,24,42,0.18)" />
        <rect x="282" y="76" width="120" height="40" rx="13" fill="rgba(42,42,46,0.12)" stroke="rgba(42,42,46,0.25)" strokeWidth="1.4">
          {!REDUCE && <animate attributeName="opacity" values="0;0;0;1;1" keyTimes="0;0.3;0.45;0.6;1" dur="4s" repeatCount="indefinite" />}
        </rect>
        <rect x="293" y="86" width="92" height="3.6" rx="1.8" fill={ACCENT_DEEP} opacity="0.5" />
        <rect x="293" y="95" width="76" height="3.6" rx="1.8" fill={ACCENT_DEEP} opacity="0.4" />
        <rect x="293" y="104" width="84" height="3.6" rx="1.8" fill={ACCENT_DEEP} opacity="0.4" />
      </g>
      {/* sparkle */}
      <g style={{ animation: REDUCE ? "none" : "pulseSoft 1.8s ease-in-out infinite" }}>
        <path d="M392 60 L395 70 L405 73 L395 76 L392 86 L389 76 L379 73 L389 70 Z" fill={ACCENT_BRIGHT} />
      </g>
    </svg>
  );
}

function CompareIllo() {
  const lines = (x) => [62, 74, 86, 98, 110].map((y, i) => (
    <rect key={i} x={x} y={y} width={i % 2 ? 40 : 54} height="4" rx="2" fill="rgba(20,24,42,0.13)" />
  ));
  return (
    <svg viewBox={IL.vb} width={IL.w} height={IL.h} preserveAspectRatio="xMidYMid meet">
      {/* doc A */}
      <rect x="46" y="36" width="86" height="98" rx="8" fill="rgba(255,255,255,0.9)" stroke="rgba(20,24,42,0.14)" strokeWidth="1.4" />
      {lines(58)}
      <rect x="58" y="74" width="54" height="5" rx="2.5" fill="rgba(225,76,76,0.45)">
        {!REDUCE && <animate attributeName="opacity" values="0.2;0.9;0.2" dur="2.4s" repeatCount="indefinite" />}
      </rect>
      {/* doc B */}
      <rect x="160" y="36" width="86" height="98" rx="8" fill="rgba(255,255,255,0.9)" stroke="rgba(20,24,42,0.14)" strokeWidth="1.4" />
      {lines(172)}
      <rect x="172" y="98" width="40" height="5" rx="2.5" fill="rgba(31,199,160,0.55)">
        {!REDUCE && <animate attributeName="opacity" values="0.2;0.9;0.2" dur="2.4s" begin="0.5s" repeatCount="indefinite" />}
      </rect>
      {/* scan line */}
      {!REDUCE && (
        <line x1="46" x2="246" y1="44" y2="44" stroke={ACCENT} strokeWidth="2" opacity="0.7">
          <animate attributeName="y1" values="44;126;44" dur="3.2s" repeatCount="indefinite" />
          <animate attributeName="y2" values="44;126;44" dur="3.2s" repeatCount="indefinite" />
        </line>
      )}
      {/* decision branch */}
      <path d="M246 85 L300 85" fill="none" stroke="rgba(42,42,46,0.3)" strokeWidth="1.6" strokeDasharray="3 6" className="trace-line" />
      <circle cx="300" cy="85" r="6" fill={ACCENT} />
      <path d="M306 85 L356 60" fill="none" stroke="rgba(42,42,46,0.4)" strokeWidth="1.6" />
      <path d="M306 85 L356 112" fill="none" stroke="rgba(225,140,76,0.5)" strokeWidth="1.6" />
      <g>
        <rect x="356" y="48" width="66" height="24" rx="7" fill="rgba(42,42,46,0.1)" stroke={ACCENT} strokeWidth="1.3" />
        <text x="389" y="63" textAnchor="middle" className="font-mono" fill="#3A3A3E" style={{ fontSize: 10, fontWeight: 600 }}>pass</text>
      </g>
      <g style={{ animation: REDUCE ? "none" : "pulseSoft 2s ease-in-out infinite" }}>
        <rect x="356" y="100" width="66" height="24" rx="7" fill="rgba(245,166,35,0.14)" stroke={t.amberBright} strokeWidth="1.3" />
        <text x="389" y="115" textAnchor="middle" className="font-mono" fill="#A9650A" style={{ fontSize: 10, fontWeight: 600 }}>escalate</text>
      </g>
    </svg>
  );
}

function PipelineIllo() {
  const nodes = [
    { x: 40, label: "story", icon: "note" },
    { x: 130, label: "plan", icon: "gear" },
    { x: 220, label: "code", icon: "code" },
    { x: 310, label: "test", icon: "check" },
    { x: 400, label: "PR", icon: "git" },
  ];
  return (
    <svg viewBox={IL.vb} width={IL.w} height={IL.h} preserveAspectRatio="xMidYMid meet">
      {/* connector */}
      <line x1="40" y1="84" x2="400" y2="84" stroke="rgba(42,42,46,0.25)" strokeWidth="1.6" strokeDasharray="4 7" className="trace-line" />
      {!REDUCE && <circle r="3.5" fill={ACCENT}><animateMotion dur="3.4s" repeatCount="indefinite" path="M40 84 L400 84" /></circle>}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy="84" r="22" fill="#fff" stroke="rgba(42,42,46,0.25)" strokeWidth="1.6"
            style={{ filter: "drop-shadow(0 10px 16px rgba(0,0,0,0.16))" }} />
          {n.icon === "note" && <g><rect x={n.x - 9} y="74" width="18" height="20" rx="3" fill="none" stroke={ACCENT} strokeWidth="1.8" /><line x1={n.x - 5} y1="80" x2={n.x + 5} y2="80" stroke={ACCENT} strokeWidth="1.6" /><line x1={n.x - 5} y1="85" x2={n.x + 3} y2="85" stroke={ACCENT} strokeWidth="1.6" /></g>}
          {n.icon === "gear" && <g className="gear"><circle cx={n.x} cy="84" r="7.5" fill="none" stroke={ACCENT} strokeWidth="1.8" />{[0, 60, 120, 180, 240, 300].map(a => { const rad = a * Math.PI / 180; return <line key={a} x1={n.x + Math.cos(rad) * 8} y1={84 + Math.sin(rad) * 8} x2={n.x + Math.cos(rad) * 12} y2={84 + Math.sin(rad) * 12} stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />; })}</g>}
          {n.icon === "code" && <text x={n.x} y="90" textAnchor="middle" className="font-mono" fill={ACCENT} style={{ fontSize: 16, fontWeight: 700 }}>{"{ }"}</text>}
          {n.icon === "check" && <path d={`M${n.x - 8} 84 L${n.x - 2} 90 L${n.x + 8} 78`} fill="none" stroke={t.success} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />}
          {n.icon === "git" && <g><circle cx={n.x - 6} cy="78" r="3" fill="none" stroke={ACCENT} strokeWidth="1.8" /><circle cx={n.x - 6} cy="92" r="3" fill="none" stroke={ACCENT} strokeWidth="1.8" /><circle cx={n.x + 7} cy="85" r="3" fill="none" stroke={ACCENT} strokeWidth="1.8" /><path d={`M${n.x - 6} 81 L${n.x - 6} 89 M${n.x - 6} 85 Q${n.x} 85 ${n.x + 4} 85`} fill="none" stroke={ACCENT} strokeWidth="1.6" /></g>}
          <text x={n.x} y="122" textAnchor="middle" className="font-mono" fill="#6B6B70" style={{ fontSize: 10 }}>{n.label}</text>
        </g>
      ))}
      {/* in-dev badge */}
      <g style={{ animation: REDUCE ? "none" : "pulseSoft 1.8s ease-in-out infinite" }}>
        <circle cx="56" cy="40" r="4" fill={t.amberBright} />
      </g>
    </svg>
  );
}

export const ILLOS = { "sdlc-agent": PipelineIllo, "contract-search": SearchIllo, "contract-chatbot": ChatIllo, "pdf-compare": CompareIllo };
