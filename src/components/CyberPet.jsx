import React, { useState, useEffect, useRef } from "react";
import { Sparkles, MessageSquare, X, Moon, Sun, Zap, Heart } from "lucide-react";
import { t } from "../lib/theme.js";
import { REDUCE } from "../lib/motion.js";

export function CyberPet() {
  const [pos, setPos] = useState({ x: 40, y: 160 }); // from bottom-right
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [eyeState, setEyeState] = useState("happy"); // happy, look, poke, love, drag, sleep, star
  const [eyeAngle, setEyeAngle] = useState({ x: 0, y: 0 });
  const [speech, setSpeech] = useState("Beep boop! I'm Omni, Parthi's AI companion! (≧◡≦)");
  const [showSpeech, setShowSpeech] = useState(true);
  const [isSleeping, setIsSleeping] = useState(false);
  const [isDocked, setIsDocked] = useState(false);
  const [spinAnim, setSpinAnim] = useState(false);
  const [hopAnim, setHopAnim] = useState(false);
  const [hearts, setHearts] = useState([]);

  const petRef = useRef(null);
  const idleTimer = useRef(null);
  const speechTimer = useRef(null);

  const quips = [
    "PulseHunter is streaming 210+ stocks in 250ms! ⚡",
    "NUKEBOX 21 strategies backtested over 365 days! 📊",
    "10 Lakh contracts indexed with Azure AI Search! 🏢",
    "IIT Madras Programming Diploma verified! 🏆",
    "Ask me or the AI Copilot about Parthi's work! 🤖",
    "Zero client credential leakage — pure FastAPI BFF! 🛡️",
    "Google Gemini 3.6 Flash Copilot is online! ✨",
    "Boop! You found the easter egg! (♥‿♥)",
    "Drag me anywhere on your screen! 🚀",
  ];

  // Auto-hide initial speech bubble after 6s
  useEffect(() => {
    speechTimer.current = setTimeout(() => setShowSpeech(false), 7000);
    return () => clearTimeout(speechTimer.current);
  }, []);

  // Global mouse move listener for head & eye tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isSleeping || isDragging) return;

      // Reset idle sleep timer
      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => {
        setEyeState("sleep");
      }, 16000);

      if (petRef.current) {
        const rect = petRef.current.getBoundingClientRect();
        const petCenterX = rect.left + rect.width / 2;
        const petCenterY = rect.top + rect.height / 2;

        const dx = e.clientX - petCenterX;
        const dy = e.clientY - petCenterY;
        const dist = Math.hypot(dx, dy);

        if (dist > 10) {
          const maxShift = 4;
          const shiftX = (dx / dist) * Math.min(maxShift, dist / 80);
          const shiftY = (dy / dist) * Math.min(maxShift, dist / 80);
          setEyeAngle({ x: shiftX, y: shiftY });
          if (eyeState !== "poke" && eyeState !== "love" && eyeState !== "star") {
            setEyeState("look");
          }
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(idleTimer.current);
    };
  }, [isSleeping, isDragging, eyeState]);

  // Dragging Handlers
  const handlePointerDown = (e) => {
    if (isDocked) return;
    setIsDragging(true);
    setEyeState("drag");
    setShowSpeech(false);
    const startX = window.innerWidth - pos.x;
    const startY = window.innerHeight - pos.y;
    setDragOffset({
      x: e.clientX - (window.innerWidth - pos.x),
      y: e.clientY - (window.innerHeight - pos.y),
    });
  };

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!isDragging) return;
      const newRight = Math.max(10, Math.min(window.innerWidth - 90, window.innerWidth - e.clientX));
      const newBottom = Math.max(10, Math.min(window.innerHeight - 120, window.innerHeight - e.clientY));
      setPos({ x: newRight, y: newBottom });
    };

    const handlePointerUp = () => {
      if (isDragging) {
        setIsDragging(false);
        setEyeState("happy");
        setHopAnim(true);
        setTimeout(() => setHopAnim(false), 600);
      }
    };

    if (isDragging) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
    }
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging]);

  // Click Poke Interaction
  const handlePoke = (e) => {
    if (isDragging) return;
    e.stopPropagation();

    // Spawn floating heart
    const newHeart = { id: Date.now(), x: Math.random() * 20 - 10 };
    setHearts((prev) => [...prev, newHeart]);
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1200);

    // Random reaction
    const emotes = ["love", "star", "poke", "happy"];
    const chosenEmote = emotes[Math.floor(Math.random() * emotes.length)];
    setEyeState(chosenEmote);

    if (Math.random() > 0.5) {
      setSpinAnim(true);
      setTimeout(() => setSpinAnim(false), 700);
    } else {
      setHopAnim(true);
      setTimeout(() => setHopAnim(false), 500);
    }

    // Pick random quip
    const nextQuip = quips[Math.floor(Math.random() * quips.length)];
    setSpeech(nextQuip);
    setShowSpeech(true);

    clearTimeout(speechTimer.current);
    speechTimer.current = setTimeout(() => setShowSpeech(false), 5500);

    setTimeout(() => {
      setEyeState("happy");
    }, 1800);
  };

  if (isDocked) {
    return (
      <button
        onClick={() => { setIsDocked(false); setShowSpeech(true); }}
        title="Summon Cyber Pet"
        style={{
          position: "fixed", right: 24, bottom: 94, zIndex: 180,
          background: "linear-gradient(135deg, #151A2E, #0B0E1B)",
          border: `1.5px solid ${t.auroraBright}`, borderRadius: 999, padding: "6px 12px",
          color: t.auroraBright, fontSize: 11, fontFamily: "'JetBrains Mono', monospace",
          display: "flex", alignItems: "center", gap: 6, cursor: "pointer",
          boxShadow: "0 8px 24px rgba(31,199,192,0.3)", backdropFilter: "blur(8px)"
        }}
      >
        <span style={{ width: 6, height: 6, borderRadius: 3, background: t.auroraBright, animation: "pulseSoft 1.5s infinite" }} />
        <span>Summon Omni 🤖</span>
      </button>
    );
  }

  return (
    <div
      ref={petRef}
      style={{
        position: "fixed",
        right: `${pos.x}px`,
        bottom: `${pos.y}px`,
        zIndex: 180,
        width: 86,
        userSelect: "none",
        cursor: isDragging ? "grabbing" : "grab",
        transition: isDragging ? "none" : "transform 0.15s ease",
        animation: REDUCE || isDragging ? "none" : "floatY 4s ease-in-out infinite",
      }}
      onPointerDown={handlePointerDown}
      onClick={handlePoke}
    >
      {/* Speech Bubble */}
      {showSpeech && (
        <div
          style={{
            position: "absolute",
            bottom: 94,
            right: -20,
            width: 200,
            padding: "9px 13px",
            background: "linear-gradient(180deg, #181E34, #0E1222)",
            border: "1.2px solid rgba(124,92,255,0.35)",
            borderRadius: 14,
            boxShadow: "0 18px 36px -10px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.12)",
            fontSize: 11.5,
            lineHeight: 1.45,
            color: "#EAEEF7",
            fontFamily: "'Inter', sans-serif",
            animation: "popIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) both",
            zIndex: 10,
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            if (speech.includes("Copilot") || speech.includes("chat")) {
              window.dispatchEvent(new CustomEvent("portfolio:open-chat"));
            }
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
            <span className="font-mono" style={{ fontSize: 9, color: t.auroraBright, fontWeight: 700, textTransform: "uppercase" }}>Omni · AI Pet</span>
            <button
              onClick={(e) => { e.stopPropagation(); setShowSpeech(false); }}
              style={{ background: "transparent", border: "none", color: "var(--ink-dim)", cursor: "pointer", padding: 0 }}
            >
              <X size={11} />
            </button>
          </div>
          {speech}
          {/* Speech Bubble Arrow */}
          <div
            style={{
              position: "absolute",
              bottom: -6,
              right: 48,
              width: 10,
              height: 10,
              background: "#0E1222",
              borderRight: "1.2px solid rgba(124,92,255,0.35)",
              borderBottom: "1.2px solid rgba(124,92,255,0.35)",
              transform: "rotate(45deg)",
            }}
          />
        </div>
      )}

      {/* Floating Hearts Particle Emitter */}
      {hearts.map((h) => (
        <div
          key={h.id}
          style={{
            position: "absolute",
            top: -10,
            left: 36 + h.x,
            color: "#FF4D8D",
            fontSize: 16,
            animation: "popIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            pointerEvents: "none",
            filter: "drop-shadow(0 0 6px rgba(255,77,141,0.8))",
          }}
        >
          ❤️
        </div>
      ))}

      {/* Sleep Zzz Bubbles */}
      {eyeState === "sleep" && (
        <div
          style={{
            position: "absolute",
            top: -14,
            right: 4,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: t.auroraBright,
            fontWeight: 700,
            animation: "pulseSoft 2s infinite",
          }}
        >
          Zzz...
        </div>
      )}

      {/* Controls: Sleep / Minimize buttons on hover */}
      <div
        style={{
          position: "absolute",
          top: -6,
          right: -10,
          display: "flex",
          gap: 4,
          opacity: 0.85,
          zIndex: 5,
        }}
      >
        <button
          onClick={(e) => { e.stopPropagation(); setIsDocked(true); }}
          title="Minimize Pet"
          style={{
            width: 18, height: 18, borderRadius: 9, background: "rgba(10,14,26,0.85)",
            border: "1px solid rgba(255,255,255,0.15)", color: "var(--ink-dim)",
            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          }}
        >
          <X size={10} />
        </button>
      </div>

      {/* Robot Mascot SVG */}
      <div
        style={{
          transform: `${spinAnim ? "rotate(360deg)" : hopAnim ? "translateY(-12px) scale(1.08)" : "none"}`,
          transition: spinAnim ? "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)" : hopAnim ? "transform 0.4s ease" : "none",
          filter: "drop-shadow(0 14px 28px rgba(106,67,224,0.45))",
        }}
      >
        <svg viewBox="0 0 100 120" width="86" height="103" style={{ display: "block" }}>
          <defs>
            <linearGradient id="suitGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#E2E7F5" />
              <stop offset="100%" stopColor="#C4CEEB" />
            </linearGradient>
            <linearGradient id="armorPurple" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#9C7FFF" />
              <stop offset="100%" stopColor="#6A43E0" />
            </linearGradient>
            <linearGradient id="visorGlass" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#141829" />
              <stop offset="100%" stopColor="#080A12" />
            </linearGradient>
            <linearGradient id="antennaNeon" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1FC7C0" />
              <stop offset="100%" stopColor="#7C5CFF" />
            </linearGradient>
            <filter id="glowCyan">
              <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#1FC7C0" floodOpacity="0.8" />
            </filter>
            <filter id="glowPurple">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#9C7FFF" floodOpacity="0.7" />
            </filter>
          </defs>

          {/* Left Bunny Ear Antenna */}
          <g transform="translate(18, 8) rotate(-18)">
            <rect x="0" y="0" width="13" height="24" rx="6.5" fill="url(#suitGrad)" stroke="#6A43E0" strokeWidth="1.2" />
            <rect x="3" y="3" width="7" height="15" rx="3.5" fill="url(#antennaNeon)" filter="url(#glowCyan)" />
          </g>

          {/* Right Bunny Ear Antenna */}
          <g transform="translate(68, 4) rotate(18)">
            <rect x="0" y="0" width="13" height="24" rx="6.5" fill="url(#suitGrad)" stroke="#6A43E0" strokeWidth="1.2" />
            <rect x="3" y="3" width="7" height="15" rx="3.5" fill="url(#antennaNeon)" filter="url(#glowCyan)" />
          </g>

          {/* Headset Outer Halo */}
          <circle cx="50" cy="44" r="32" fill="url(#armorPurple)" stroke="#1FC7C0" strokeWidth="1.5" filter="url(#glowPurple)" />
          <circle cx="50" cy="44" r="29" fill="url(#suitGrad)" />

          {/* Dark Glass Digital Visor */}
          <rect x="25" y="24" width="50" height="38" rx="19" fill="url(#visorGlass)" stroke="#2A3152" strokeWidth="1.2" />
          
          {/* Visor Glare Curve */}
          <path d="M 30 30 Q 50 24 70 30" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

          {/* Animated LED Eyes / Expressions */}
          <g transform={`translate(${eyeAngle.x}, ${eyeAngle.y})`}>
            {eyeState === "look" && (
              <>
                {/* Determined / Focused Eyes */}
                <path d="M 35 41 L 43 45" stroke="#1FC7C0" strokeWidth="2.8" strokeLinecap="round" filter="url(#glowCyan)" />
                <path d="M 65 41 L 57 45" stroke="#1FC7C0" strokeWidth="2.8" strokeLinecap="round" filter="url(#glowCyan)" />
                {/* Cute Smile */}
                <path d="M 47 50 Q 50 53 53 50" stroke="#1FC7C0" strokeWidth="2" strokeLinecap="round" fill="none" />
              </>
            )}

            {eyeState === "happy" && (
              <>
                {/* Happy Arches ^_^ */}
                <path d="M 35 44 Q 40 37 45 44" stroke="#1FC7C0" strokeWidth="2.8" strokeLinecap="round" fill="none" filter="url(#glowCyan)" />
                <path d="M 55 44 Q 60 37 65 44" stroke="#1FC7C0" strokeWidth="2.8" strokeLinecap="round" fill="none" filter="url(#glowCyan)" />
                {/* Smile */}
                <path d="M 46 51 Q 50 55 54 51" stroke="#1FC7C0" strokeWidth="2" strokeLinecap="round" fill="none" />
              </>
            )}

            {eyeState === "drag" && (
              <>
                {/* >_< Expression */}
                <path d="M 36 38 L 44 43 L 36 48" stroke="#1FC7C0" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#glowCyan)" />
                <path d="M 64 38 L 56 43 L 64 48" stroke="#1FC7C0" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#glowCyan)" />
                {/* W Open Mouth */}
                <path d="M 46 52 Q 50 56 54 52" stroke="#1FC7C0" strokeWidth="2" fill="none" />
              </>
            )}

            {eyeState === "love" && (
              <>
                {/* Heart Eyes ♥_♥ */}
                <path d="M 37 41 Q 40 37 42 41 Q 40 46 37 48 Q 34 46 32 41 Q 34 37 37 41" fill="#FF4D8D" filter="url(#glowPurple)" />
                <path d="M 63 41 Q 66 37 68 41 Q 66 46 63 48 Q 60 46 58 41 Q 60 37 63 41" fill="#FF4D8D" filter="url(#glowPurple)" />
                <path d="M 46 52 Q 50 56 54 52" stroke="#FF4D8D" strokeWidth="2" fill="none" />
              </>
            )}

            {eyeState === "star" && (
              <>
                {/* Star Eyes ★_★ */}
                <circle cx="39" cy="43" r="4" fill="#FFBD2E" filter="url(#glowCyan)" />
                <circle cx="61" cy="43" r="4" fill="#FFBD2E" filter="url(#glowCyan)" />
                <path d="M 46 52 Q 50 56 54 52" stroke="#FFBD2E" strokeWidth="2" fill="none" />
              </>
            )}

            {eyeState === "sleep" && (
              <>
                {/* Sleeping Closed Eyes -_- */}
                <line x1="35" y1="44" x2="45" y2="44" stroke="#1FC7C0" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="55" y1="44" x2="65" y2="44" stroke="#1FC7C0" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="50" cy="51" r="1.5" fill="#1FC7C0" />
              </>
            )}
          </g>

          {/* Headset Mic */}
          <path d="M 23 48 Q 18 64 34 68" stroke="#7C5CFF" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="35" cy="68" r="3.5" fill="#1FC7C0" filter="url(#glowCyan)" />

          {/* Cybernetic Body / Suit */}
          <path d="M 34 68 Q 50 64 66 68 L 71 96 Q 50 100 29 96 Z" fill="url(#suitGrad)" stroke="#6A43E0" strokeWidth="1.2" />
          
          {/* Cyber Collar Trim */}
          <path d="M 40 67 L 50 75 L 60 67" stroke="#7C5CFF" strokeWidth="2" fill="none" />
          <line x1="50" y1="75" x2="50" y2="97" stroke="#6A43E0" strokeWidth="1.5" />

          {/* Left Arm (Folded pose) */}
          <path d="M 31 72 Q 22 82 36 86" stroke="url(#suitGrad)" strokeWidth="7" strokeLinecap="round" fill="none" />
          <circle cx="36" cy="86" r="4" fill="#7C5CFF" />

          {/* Right Arm */}
          <path d="M 69 72 Q 78 82 64 86" stroke="url(#suitGrad)" strokeWidth="7" strokeLinecap="round" fill="none" />
          <circle cx="64" cy="86" r="4" fill="#7C5CFF" />

          {/* Thruster Feet */}
          <g transform="translate(0, 0)">
            <rect x="36" y="96" width="9" height="12" rx="4.5" fill="#7C5CFF" />
            <rect x="55" y="96" width="9" height="12" rx="4.5" fill="#7C5CFF" />
            {/* Plasma Thrust Glow */}
            <ellipse cx="40.5" cy="110" rx="3.5" ry="5" fill="#1FC7C0" filter="url(#glowCyan)" />
            <ellipse cx="59.5" cy="110" rx="3.5" ry="5" fill="#1FC7C0" filter="url(#glowCyan)" />
          </g>

          {/* Cute Tail Antenna */}
          <path d="M 68 88 Q 84 88 78 78" stroke="#6A43E0" strokeWidth="2" fill="none" strokeLinecap="round" />
          <rect x="76" y="74" width="7" height="4" rx="2" fill="#1FC7C0" filter="url(#glowCyan)" transform="rotate(-25 78 76)" />
        </svg>
      </div>

      {/* Floating Levitation Shadow */}
      <div
        style={{
          width: 54,
          height: 8,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(124,92,255,0.45), transparent 70%)",
          margin: "2px auto 0",
          filter: "blur(2px)",
        }}
      />
    </div>
  );
}
