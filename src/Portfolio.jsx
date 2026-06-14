import React, { useState, useEffect, useRef } from "react";
import {
  Github, Linkedin, Mail, Phone, ExternalLink, Send, ArrowUpRight, ArrowRight,
  Bot, Search, FileText, Workflow, Code2, Database, Layers, Activity, Zap,
  BrainCircuit, Award, GraduationCap, MapPin, MessageCircle, Loader2, Heart,
  Music, Plane, Hand, Bike, Wand2, LineChart, ShieldCheck, FileSearch,
  GitCommit, Diff, Network, Boxes, Filter, Notebook, Hammer, FlaskConical, Sparkles,
  Download, Briefcase, Building2, Globe, BarChart3, X
} from "lucide-react";

// Professional portrait (served as a static file from /public)
const PORTRAIT = "/portrait.jpg";

// Résumé (served as a static file from /public)
const RESUME_PDF = "/resume.pdf";

const REDUCE = typeof window !== "undefined" && window.matchMedia
  && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ─────────────────────────────────────────────────────────────────────────
// DESIGN TOKENS — light, glossy, premium
// ─────────────────────────────────────────────────────────────────────────
const t = {
  bg: "#F1F3FB",
  bgAlt: "#EAEDF8",
  ink: "#14182A",
  inkSoft: "#3C4561",
  inkMuted: "#646E88",
  inkDim: "#9AA2B8",
  line: "rgba(20,24,42,0.08)",
  iris: "#6A43E0",
  irisBright: "#7C5CFF",
  irisDeep: "#5733C9",
  aurora: "#0C9A94",
  auroraBright: "#1FC7C0",
  amber: "#C9790A",
  amberBright: "#F5A623",
  success: "#0FA968",
  dark: "#0B0E1A",
  darkText: "#EAEEF7",
  darkSoft: "#B8C0D4",
  darkMuted: "#8A93AC",
};

const globalStyles = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: ${t.bg};
  color: ${t.ink};
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

.font-display { font-family: 'Plus Jakarta Sans', sans-serif; letter-spacing: -0.025em; }
.font-body { font-family: 'Inter', sans-serif; }
.font-mono { font-family: 'JetBrains Mono', monospace; }

.mesh-bg {
  position: relative;
  background:
    radial-gradient(ellipse 62% 55% at 6% -8%, rgba(124,92,255,0.20), transparent 56%),
    radial-gradient(ellipse 58% 48% at 94% 6%, rgba(31,199,192,0.16), transparent 60%),
    radial-gradient(ellipse 60% 50% at 72% 108%, rgba(245,166,35,0.10), transparent 60%),
    ${t.bg};
}
.soft-bg {
  background:
    radial-gradient(ellipse 55% 60% at 90% 30%, rgba(31,199,192,0.07), transparent 62%),
    radial-gradient(ellipse 55% 60% at 8% 60%, rgba(124,92,255,0.07), transparent 62%);
}

.glass {
  background: linear-gradient(180deg, #ffffff 0%, #f6f7fd 100%);
  border: 1px solid rgba(20,24,42,0.06);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.9),
    0 1px 2px rgba(20,24,42,0.04),
    0 22px 48px -28px rgba(60,42,140,0.26);
  border-radius: 16px;
  position: relative;
}
.glass-strong {
  background: linear-gradient(180deg, #ffffff 0%, #f4f5fc 100%);
  border: 1px solid rgba(20,24,42,0.07);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,1),
    0 2px 4px rgba(20,24,42,0.04),
    0 36px 80px -34px rgba(60,42,140,0.32);
  border-radius: 22px;
  position: relative;
}
.glass::after, .glass-strong::after {
  content: "";
  position: absolute; inset: 0;
  border-radius: inherit;
  background: linear-gradient(180deg, rgba(255,255,255,0.5), transparent 32%);
  pointer-events: none;
}

.chip {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 5px 11px; border-radius: 999px;
  background: rgba(20,24,42,0.04);
  border: 1px solid rgba(20,24,42,0.07);
  font-size: 11.5px; color: #4B5570;
  font-family: 'JetBrains Mono', monospace; font-weight: 500;
  white-space: nowrap; line-height: 1.4;
}
.chip-iris   { background: rgba(124,92,255,0.10); border-color: rgba(124,92,255,0.22); color: ${t.irisDeep}; }
.chip-aurora { background: rgba(31,199,192,0.10); border-color: rgba(31,199,192,0.26); color: #0A7F7A; }
.chip-amber  { background: rgba(245,166,35,0.13); border-color: rgba(245,166,35,0.32); color: #A9650A; }

.btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 11px 22px; border-radius: 12px;
  background: linear-gradient(180deg, #8366FF 0%, #6A43E0 100%);
  color: #fff; font-weight: 600; font-size: 14px; border: none; cursor: pointer;
  font-family: 'Inter', sans-serif;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.12), 0 14px 30px -10px rgba(106,67,224,0.5);
  transition: transform 0.18s ease, box-shadow 0.22s ease;
  text-decoration: none;
}
.btn-primary:hover { transform: translateY(-1px); box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), 0 18px 38px -10px rgba(106,67,224,0.6); }

.btn-ghost {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 11px 22px; border-radius: 12px;
  background: #fff; color: ${t.ink}; font-weight: 500; font-size: 14px;
  border: 1px solid rgba(20,24,42,0.1); cursor: pointer;
  font-family: 'Inter', sans-serif; text-decoration: none;
  box-shadow: 0 6px 16px -10px rgba(20,24,42,0.2);
  transition: all 0.2s ease;
}
.btn-ghost:hover { transform: translateY(-1px); border-color: rgba(106,67,224,0.35); box-shadow: 0 10px 24px -10px rgba(106,67,224,0.3); }

.section-eyebrow {
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  letter-spacing: 0.2em; text-transform: uppercase; color: ${t.aurora}; font-weight: 500;
}

.hover-card { transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease; }
.hover-card:hover {
  transform: translateY(-3px);
  border-color: rgba(124,92,255,0.3);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.9), 0 30px 60px -30px rgba(106,67,224,0.4);
}

.section { padding: 108px 0; position: relative; }
.section-tight { padding: 70px 0; position: relative; }
.container { max-width: 1180px; margin: 0 auto; padding: 0 32px; }

a { color: inherit; text-decoration: none; }

.scroll-x::-webkit-scrollbar { height: 6px; }
.scroll-x::-webkit-scrollbar-track { background: rgba(20,24,42,0.04); border-radius: 3px; }
.scroll-x::-webkit-scrollbar-thumb { background: rgba(106,67,224,0.3); border-radius: 3px; }
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: ${t.bgAlt}; }
::-webkit-scrollbar-thumb { background: rgba(106,67,224,0.28); border-radius: 6px; }
::-webkit-scrollbar-thumb:hover { background: rgba(106,67,224,0.45); }

.trace-line { stroke-dasharray: 4 7; animation: dashFlow 2s linear infinite; }
@keyframes dashFlow { to { stroke-dashoffset: -22; } }
@keyframes pulseSoft { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }
@keyframes floatY { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
@keyframes spin360 { to { transform: rotate(360deg); } }
@keyframes spinS { to { transform: rotate(360deg); } }
.gear { transform-box: fill-box; transform-origin: center; animation: spin360 7s linear infinite; }
@keyframes shineSweep { 0% { transform: translateX(-130%) skewX(-18deg); } 60%,100% { transform: translateX(260%) skewX(-18deg); } }
@keyframes popIn { 0% { opacity: 0; transform: translateY(12px) scale(0.96); } 100% { opacity: 1; transform: translateY(0) scale(1); } }

@media (max-width: 980px) { .proj-grid { grid-template-columns: 1fr !important; gap: 26px !important; } }
@media (max-width: 880px) {
  .section { padding: 68px 0; }
  .section-tight { padding: 46px 0; }
  .container { padding: 0 20px; }
  .hide-mobile { display: none !important; }
  .hero-grid { grid-template-columns: 1fr !important; gap: 44px !important; }
}
@media (prefers-reduced-motion: reduce) {
  .trace-line, .gear, .shine { animation: none !important; }
}
`;

// ─────────────────────────────────────────────────────────────────────────
// REVEAL — subtle fade-up on scroll
// ─────────────────────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, style }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(REDUCE);
  useEffect(() => {
    if (REDUCE) return;
    const el = ref.current; if (!el) return;
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); ob.disconnect(); } }, { threshold: 0.12 });
    ob.observe(el); return () => ob.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      ...style,
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : "translateY(18px)",
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    }}>{children}</div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// PROJECT DATA
// ─────────────────────────────────────────────────────────────────────────
const productionWork = [
  {
    id: "contract-search", title: "Contract Keyword Search", status: "Production",
    eyebrow: "Enterprise retrieval", tagline: "A million contracts, indexed and searchable in milliseconds.",
    problem: "Legal teams needed to find clauses across a sprawling contract repository — plain keyword search over attachments returned nothing useful.",
    approach: "Built a dedicated index in Azure AI Search. Documents are pre-processed, chunked, embedded, and indexed with hybrid search (BM25 + vector). The query layer ranks by semantic similarity with keyword fallback.",
    outcome: "Over 10 lakh contract documents indexed. Sub-second queries returning citation-ready snippets that point back to the source page.",
    tech: ["Azure AI Search", "Azure OpenAI Embeddings", ".NET Web API", "Hybrid Search", "Azure App Service"],
    stages: [
      { icon: FileText, label: "Ingest", sub: "PDF / DOCX", tech: "Document Intel" },
      { icon: Layers, label: "Chunk + Embed", sub: "Semantic blocks", tech: "text-embedding-3" },
      { icon: Database, label: "Index", sub: "Hybrid (BM25+vec)", tech: "Azure AI Search" },
      { icon: Search, label: "Retrieve", sub: "Top-K + rerank", tech: "Cross-encoder" },
      { icon: FileSearch, label: "Respond", sub: "Cited snippets", tech: ".NET API" },
    ],
  },
  {
    id: "contract-chatbot", title: "Contract Chatbot", status: "Production",
    eyebrow: "RAG Q&A", tagline: "Ask any question about any contract. Get a sourced answer back.",
    problem: "Once contracts were indexed, the next ask was to not just return documents, but answer the question directly.",
    approach: "A retrieval-augmented chat layer on the search index. Top-K passages are assembled into a context window with a system prompt that enforces source citation. GPT-4o generates the answer; the UI streams it back.",
    outcome: "Question to grounded answer in 3–5 seconds, with clickable citations back to the exact contract page.",
    tech: ["Azure OpenAI (GPT-4o)", "Azure AI Search", "RAG", "React", "Server-Sent Events"],
    stages: [
      { icon: MessageCircle, label: "Query", sub: "Natural language", tech: "Chat UI" },
      { icon: Search, label: "Retrieve", sub: "Top-K passages", tech: "AI Search" },
      { icon: Boxes, label: "Assemble", sub: "Context window", tech: "Prompt builder" },
      { icon: BrainCircuit, label: "Generate", sub: "Grounded answer", tech: "GPT-4o" },
      { icon: Send, label: "Stream", sub: "+ citations", tech: "SSE" },
    ],
  },
  {
    id: "pdf-compare", title: "Contract PDF Compare Agent", status: "Production",
    eyebrow: "Action agent", tagline: "Diff two contracts, then decide what to do about the diff.",
    problem: "Reviewers were eyeballing redlines across long contracts — slow, error-prone, and inconsistent on what counts as material.",
    approach: "A two-document pipeline: parse both, run a semantic diff, classify each change by severity, then act — escalate to legal, route for re-evaluation, or pass through automatically.",
    outcome: "Reviewers see only the changes that matter. The agent acts on boilerplate diffs without waiting on a human. Azure Service Bus queues large files asynchronously so processing stays reliable at peak load.",
    tech: ["Azure OpenAI", "Document Intelligence", "Azure Service Bus", ".NET", "Rules engine"],
    stages: [
      { icon: FileText, label: "Parse", sub: "Doc A + Doc B", tech: "Document Intel" },
      { icon: Diff, label: "Diff", sub: "Semantic delta", tech: "GPT-4o" },
      { icon: Filter, label: "Classify", sub: "Material / cosmetic", tech: "Policy LLM" },
      { icon: ShieldCheck, label: "Decide", sub: "Escalate / pass", tech: "Rules engine" },
      { icon: Zap, label: "Act", sub: "Route + notify", tech: "Webhooks" },
    ],
  },
  {
    id: "sdlc-agent", title: "Automated SDLC Agent", status: "In development",
    eyebrow: "Agentic development", tagline: "From JIRA story to merged branch — without a human in the boring parts.",
    problem: "Engineers were spending hours on small, well-scoped tickets that read more like specifications than design problems.",
    approach: "An agent built on Claude: fetch a JIRA story, plan subtasks, generate the implementation, run automated tests, open a PR, and write the documentation. A human approves the merge; the agent handles everything before that.",
    outcome: "In active development. Targeted first at well-scoped CRUD and refactor tickets; complex design work stays with humans.",
    tech: ["Claude", "JIRA API", "GitHub Actions", "Python", "Pytest"],
    stages: [
      { icon: Notebook, label: "Fetch", sub: "JIRA story", tech: "JIRA API" },
      { icon: Workflow, label: "Plan", sub: "Task graph", tech: "Claude" },
      { icon: Code2, label: "Code", sub: "Patch + diff", tech: "Claude" },
      { icon: FlaskConical, label: "Test", sub: "Run + iterate", tech: "Pytest" },
      { icon: GitCommit, label: "PR", sub: "Branch + docs", tech: "GitHub API" },
    ],
  },
];

const hackathonWork = [
  { title: "TheraBot", icon: Heart, accent: "iris",
    desc: "Mental-wellness companion with mood-aware responses. A sentiment classifier gates the conversation tone — supportive when distress is detected, conversational otherwise. Secure session tracking on Cosmos DB.",
    tech: ["FastAPI", "React", "Azure OpenAI", "Sentiment Analysis", "Cosmos DB", "Google OAuth"] },
  { title: "BikeRideShare", icon: Bike, accent: "aurora",
    desc: "A two-wheeler ride-sharing app with an LLM intent layer that turns fuzzy ride requests into structured booking calls.",
    tech: ["Python", "React", "Azure OpenAI", "Cosmos DB"] },
  { title: "Home Service App", icon: Hammer, accent: "iris",
    desc: "End-to-end home-services booking with OTP-based auth, scheduling, technician dispatch, and SMS notifications.",
    tech: [".NET Web API", "Angular", "SMS OTP", "SQL Server"] },
];

const collegeWork = [
  { title: "CrewFix", icon: Workflow, desc: "Home-services platform with Google Chat integration, Vue calendars, Twilio OTP, and SMS notifications.", tech: ["Python", "Vue.js", "Twilio", "Google Chat API"] },
  { title: "Sign Language Recognition", icon: Hand, desc: "Real-time hand-gesture classifier using MediaPipe landmarks and a Random Forest model.", tech: ["MediaPipe", "scikit-learn", "OpenCV", "Python"] },
  { title: "Music Streaming App", icon: Music, desc: "Full-stack streaming app with playlists, search, and a Jinja2-templated frontend.", tech: ["Python", "Flask", "Jinja2", "SQLite"] },
  { title: "Heart Disease Prediction", icon: Activity, desc: "Classical-ML classifier on clinical features with feature-importance and accuracy reporting.", tech: ["scikit-learn", "pandas", "Python"] },
  { title: "Flight Booking Bot", icon: Plane, desc: "Conversational booking flow with intent and entity extraction via Dialogflow.", tech: ["Dialogflow", "Python", "REST"] },
];

const personalRD = [
  { title: "Life-tracking assistant", icon: Wand2, status: null,
    desc: "A personal chatbot built on Google Gemini that logs calories, expenses, study time, and trading activity through natural conversation. One source of truth for my day.",
    tech: ["Google Gemini", "Function calling", "Sheets API"] },
  { title: "Algo trading agent (MCP)", icon: LineChart, status: "In development",
    desc: "A Claude-MCP agent for on-demand market-context analysis — VIX regime, OI, sector heatmaps. Advisory only; live execution stays deterministic. Still being built.",
    tech: ["Claude MCP", "Python", "Alice Blue API"] },
];

const stack = [
  { group: "AI / LLM", items: ["Azure OpenAI", "GPT-4 / 5", "Claude", "Google Vertex AI", "AWS Bedrock", "RAG", "Embeddings", "Vector Search", "Agentic AI", "Prompt Engineering", "LangChain", "Ollama", "HuggingFace", "MediaPipe", "scikit-learn"] },
  { group: "AI coding tools", items: ["Cursor", "GitHub Copilot", "Claude Code", "Claude CLI", "Codex", "Gemini Code Assist"] },
  { group: "Cloud & platforms", items: ["Azure App Service", "Azure AI Studio", "Azure Agents", "Azure AI Search", "Azure Service Bus", "Logic Apps", "AKeyless", "Cosmos DB", "Google Agent Platform", "Google SDK CLI", "Google Sandbox"] },
  { group: "Backend", items: [".NET (C# · MVC · Web API)", "Python", "FastAPI", "Flask", "Node.js", "Core Java", "REST", "SSE"] },
  { group: "Frontend", items: ["React", "Angular", "Vue.js", "Jinja2", "Tailwind"] },
  { group: "Data", items: ["SQL Server", "Cosmos DB", "SQLite", "PostgreSQL", "Vector indexes"] },
  { group: "DevOps & QA", items: ["Git", "TeamCity", "Octopus Deploy", "GitHub Actions", "Playwright", "Selenium", "NUnit", "PyTest", "Snyk"] },
];

const aboutSummary = "Microsoft-certified Azure AI Engineer and Gen AI Developer at Cognizant with 1.5+ years building and deploying Azure OpenAI–powered solutions for enterprise healthcare. I've designed RAG pipelines that index and query 10L+ documents, built agentic AI workflows, and integrated LLM features into production .NET MVC systems serving CVS Health — full-stack across Python (FastAPI, Flask) and .NET (C#, MVC, Web API), with hands-on Azure deployment. IIT Madras Diploma in Programming.";

const experience = [
  {
    company: "Cognizant Technology Solutions", role: "Gen AI Developer · .NET Developer",
    period: "Oct 2024 – Present", location: "Chennai", current: true, icon: Building2,
    points: [
      "Design and deploy Generative & Agentic AI PoCs using Azure OpenAI, Python, and React for a healthcare platform serving CVS Health.",
      "Build RAG pipelines with Azure AI Search and vector embeddings for semantic retrieval across 10L+ enterprise documents.",
      "Integrate LLM features — smart automation, document understanding, conversational workflows, reporting — into a production .NET MVC app without disrupting core architecture.",
      "Ship on Azure App Service with a Cosmos DB backend; handle debugging, NUnit testing, and Snyk security-vulnerability remediation.",
      "Manage Git branching, TeamCity CI, and Octopus Deploy / GitHub Actions release management.",
    ],
  },
  {
    company: "NEC Corporation India", role: "Automation Quality Analyst — Apprentice",
    period: "Apr 2024 – Oct 2024", location: "Chennai", current: false, icon: Briefcase,
    points: [
      "Transitioned from QA to development within 3 months — contributing .NET API endpoints and JavaScript web features for the Bausch & Lomb client.",
      "Built Power BI dashboards and analytical reports used by business teams for data-driven decisions.",
      "Created Python automation scripts that streamlined internal testing and cut manual effort across QA cycles.",
    ],
  },
];

const languages = ["English — Fluent", "Tamil — Native", "Telugu — Native", "German — Beginner", "Japanese — Beginner"];

// ─────────────────────────────────────────────────────────────────────────
// ANIMATED PROJECT ILLUSTRATIONS (SVG)
// ─────────────────────────────────────────────────────────────────────────
const IL = { vb: "0 0 440 168", w: "100%", h: 168, fill: "rgba(255,255,255,0.55)" };

function docRect(x, y, key, hl) {
  return (
    <g key={key}>
      <rect x={x} y={y} width="46" height="58" rx="6" fill={hl ? "rgba(124,92,255,0.14)" : "rgba(255,255,255,0.85)"} stroke={hl ? t.iris : "rgba(20,24,42,0.14)"} strokeWidth="1.4" />
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
        <ellipse cx="360" cy="58" rx="34" ry="11" fill="rgba(31,199,192,0.18)" stroke={t.aurora} strokeWidth="1.4" />
        <path d="M326 58 L326 100 A34 11 0 0 0 394 100 L394 58" fill="rgba(31,199,192,0.1)" stroke={t.aurora} strokeWidth="1.4" />
        <ellipse cx="360" cy="100" rx="34" ry="11" fill="none" stroke={t.aurora} strokeWidth="1.4" opacity="0.6" />
        <ellipse cx="360" cy="58" rx="44" ry="15" fill="none" stroke={t.auroraBright} strokeWidth="1.5" style={{ animation: REDUCE ? "none" : "pulseSoft 2.4s ease-in-out infinite" }} />
      </g>
      {/* flow dots doc->index */}
      <path id="sflow" d="M150 85 C 230 120, 280 120, 326 80" fill="none" stroke="rgba(124,92,255,0.25)" strokeWidth="1.5" strokeDasharray="3 6" className="trace-line" />
      {!REDUCE && <circle r="3" fill={t.aurora}><animateMotion dur="2.6s" repeatCount="indefinite" path="M150 85 C 230 120, 280 120, 326 80" /></circle>}
      {/* magnifier sweeping */}
      <g>
        <circle cx="0" cy="0" r="17" fill="rgba(124,92,255,0.08)" stroke={t.iris} strokeWidth="2.4" />
        <line x1="12" y1="12" x2="22" y2="22" stroke={t.iris} strokeWidth="3" strokeLinecap="round" />
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
      <path d="M104 78 C 150 78, 160 70, 196 64" fill="none" stroke="rgba(31,199,192,0.4)" strokeWidth="1.6" strokeDasharray="3 6" className="trace-line" />
      {!REDUCE && <circle r="3" fill={t.aurora}><animateMotion dur="2.2s" repeatCount="indefinite" path="M104 78 C 150 78, 160 70, 196 64" /></circle>}
      {/* chat bubbles */}
      <g>
        <rect x="200" y="40" width="120" height="26" rx="13" fill="rgba(255,255,255,0.92)" stroke="rgba(20,24,42,0.12)" strokeWidth="1.3">
          {!REDUCE && <animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.1;0.25;1" dur="4s" repeatCount="indefinite" />}
        </rect>
        <rect x="210" y="50" width="64" height="3.6" rx="1.8" fill="rgba(20,24,42,0.18)" />
        <rect x="282" y="76" width="120" height="40" rx="13" fill="rgba(124,92,255,0.14)" stroke="rgba(124,92,255,0.3)" strokeWidth="1.4">
          {!REDUCE && <animate attributeName="opacity" values="0;0;0;1;1" keyTimes="0;0.3;0.45;0.6;1" dur="4s" repeatCount="indefinite" />}
        </rect>
        <rect x="293" y="86" width="92" height="3.6" rx="1.8" fill={t.irisDeep} opacity="0.5" />
        <rect x="293" y="95" width="76" height="3.6" rx="1.8" fill={t.irisDeep} opacity="0.4" />
        <rect x="293" y="104" width="84" height="3.6" rx="1.8" fill={t.irisDeep} opacity="0.4" />
      </g>
      {/* sparkle */}
      <g style={{ animation: REDUCE ? "none" : "pulseSoft 1.8s ease-in-out infinite" }}>
        <path d="M392 60 L395 70 L405 73 L395 76 L392 86 L389 76 L379 73 L389 70 Z" fill={t.auroraBright} />
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
        <line x1="46" x2="246" y1="44" y2="44" stroke={t.iris} strokeWidth="2" opacity="0.7">
          <animate attributeName="y1" values="44;126;44" dur="3.2s" repeatCount="indefinite" />
          <animate attributeName="y2" values="44;126;44" dur="3.2s" repeatCount="indefinite" />
        </line>
      )}
      {/* decision branch */}
      <path d="M246 85 L300 85" fill="none" stroke="rgba(124,92,255,0.4)" strokeWidth="1.6" strokeDasharray="3 6" className="trace-line" />
      <circle cx="300" cy="85" r="6" fill={t.iris} />
      <path d="M306 85 L356 60" fill="none" stroke="rgba(31,199,192,0.5)" strokeWidth="1.6" />
      <path d="M306 85 L356 112" fill="none" stroke="rgba(225,140,76,0.5)" strokeWidth="1.6" />
      <g>
        <rect x="356" y="48" width="66" height="24" rx="7" fill="rgba(31,199,192,0.12)" stroke={t.aurora} strokeWidth="1.3" />
        <text x="389" y="63" textAnchor="middle" className="font-mono" fill="#0A7F7A" style={{ fontSize: 10, fontWeight: 600 }}>pass</text>
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
      <line x1="40" y1="84" x2="400" y2="84" stroke="rgba(124,92,255,0.3)" strokeWidth="1.6" strokeDasharray="4 7" className="trace-line" />
      {!REDUCE && <circle r="3.5" fill={t.iris}><animateMotion dur="3.4s" repeatCount="indefinite" path="M40 84 L400 84" /></circle>}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy="84" r="22" fill="#fff" stroke="rgba(124,92,255,0.3)" strokeWidth="1.6"
            style={{ filter: "drop-shadow(0 10px 16px rgba(106,67,224,0.18))" }} />
          {n.icon === "note" && <g><rect x={n.x - 9} y="74" width="18" height="20" rx="3" fill="none" stroke={t.iris} strokeWidth="1.8" /><line x1={n.x - 5} y1="80" x2={n.x + 5} y2="80" stroke={t.iris} strokeWidth="1.6" /><line x1={n.x - 5} y1="85" x2={n.x + 3} y2="85" stroke={t.iris} strokeWidth="1.6" /></g>}
          {n.icon === "gear" && <g className="gear"><circle cx={n.x} cy="84" r="7.5" fill="none" stroke={t.iris} strokeWidth="1.8" />{[0, 60, 120, 180, 240, 300].map(a => { const rad = a * Math.PI / 180; return <line key={a} x1={n.x + Math.cos(rad) * 8} y1={84 + Math.sin(rad) * 8} x2={n.x + Math.cos(rad) * 12} y2={84 + Math.sin(rad) * 12} stroke={t.iris} strokeWidth="2" strokeLinecap="round" />; })}</g>}
          {n.icon === "code" && <text x={n.x} y="90" textAnchor="middle" className="font-mono" fill={t.iris} style={{ fontSize: 16, fontWeight: 700 }}>{"{ }"}</text>}
          {n.icon === "check" && <path d={`M${n.x - 8} 84 L${n.x - 2} 90 L${n.x + 8} 78`} fill="none" stroke={t.success} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />}
          {n.icon === "git" && <g><circle cx={n.x - 6} cy="78" r="3" fill="none" stroke={t.iris} strokeWidth="1.8" /><circle cx={n.x - 6} cy="92" r="3" fill="none" stroke={t.iris} strokeWidth="1.8" /><circle cx={n.x + 7} cy="85" r="3" fill="none" stroke={t.iris} strokeWidth="1.8" /><path d={`M${n.x - 6} 81 L${n.x - 6} 89 M${n.x - 6} 85 Q${n.x} 85 ${n.x + 4} 85`} fill="none" stroke={t.iris} strokeWidth="1.6" /></g>}
          <text x={n.x} y="122" textAnchor="middle" className="font-mono" fill={t.inkMuted} style={{ fontSize: 10 }}>{n.label}</text>
        </g>
      ))}
      {/* in-dev badge */}
      <g style={{ animation: REDUCE ? "none" : "pulseSoft 1.8s ease-in-out infinite" }}>
        <circle cx="56" cy="40" r="4" fill={t.amberBright} />
      </g>
    </svg>
  );
}

const ILLOS = { "contract-search": SearchIllo, "contract-chatbot": ChatIllo, "pdf-compare": CompareIllo, "sdlc-agent": PipelineIllo };

// ─────────────────────────────────────────────────────────────────────────
// NAV
// ─────────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const openChat = () => window.dispatchEvent(new CustomEvent("portfolio:open-chat"));
  const links = [
    { href: "#experience", label: "Experience" }, { href: "#work", label: "Work" }, { href: "#builds", label: "Builds" },
    { onClick: openChat, label: "Ask AI" }, { href: "#contact", label: "Contact" },
  ];
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? "11px 0" : "18px 0",
      background: scrolled ? "rgba(241,243,251,0.78)" : "transparent",
      backdropFilter: scrolled ? "blur(18px)" : "none", WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(20,24,42,0.07)" : "1px solid transparent",
      transition: "all 0.25s ease",
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 999, overflow: "hidden",
            border: "2px solid #fff",
            boxShadow: "0 4px 14px -4px rgba(106,67,224,0.5), 0 0 0 1.5px rgba(124,92,255,0.4)",
          }}>
            <img src={PORTRAIT} alt="Parthibakannan" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
          </div>
          <span className="font-display" style={{ fontSize: 15, fontWeight: 700, color: t.ink }}>Parthibakannan</span>
        </a>
        <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {links.map(l => {
            const sharedStyle = { padding: "8px 14px", fontSize: 13.5, color: t.inkMuted, fontWeight: 500, borderRadius: 8, transition: "all 0.18s", background: "transparent", border: "none", fontFamily: "inherit", cursor: "pointer" };
            const onEnter = e => { e.currentTarget.style.color = t.ink; e.currentTarget.style.background = "rgba(20,24,42,0.04)"; };
            const onLeave = e => { e.currentTarget.style.color = t.inkMuted; e.currentTarget.style.background = "transparent"; };
            return l.onClick
              ? <button key={l.label} type="button" onClick={l.onClick} style={sharedStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>{l.label}</button>
              : <a key={l.href} href={l.href} style={sharedStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>{l.label}</a>;
          })}
        </div>
        <a href="#contact" className="btn-primary" style={{ padding: "8px 16px", fontSize: 13 }}><Mail size={14} /> Get in touch</a>
      </div>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="top" className="mesh-bg" style={{ paddingTop: 158, paddingBottom: 96, position: "relative", overflow: "hidden" }}>
      <div className="container">
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 56, alignItems: "center" }}>
          {/* Left */}
          <div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
              <span className="chip chip-iris"><span style={{ width: 6, height: 6, borderRadius: 3, background: t.success, boxShadow: `0 0 8px ${t.success}` }} /> Available</span>
              <span className="chip"><MapPin size={11} /> Chennai, India</span>
              <span className="chip chip-aurora">Gen AI Engineer · Cognizant</span>
            </div>

            <h1 className="font-display" style={{ fontSize: "clamp(38px, 5.6vw, 62px)", fontWeight: 700, lineHeight: 1.06, margin: "0 0 22px", color: t.ink }}>
              I build AI products<br />that <span style={{ background: `linear-gradient(120deg, ${t.iris}, ${t.auroraBright})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>make it to production.</span>
            </h1>

            <p style={{ fontSize: 17, lineHeight: 1.6, color: t.inkSoft, maxWidth: 540, margin: "0 0 34px" }}>
              Microsoft-certified Azure AI Engineer with experience in RAG, AI agents, and full-stack development across .NET, Python, and React.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 40 }}>
              <a href="#work" className="btn-primary">See the work <ArrowRight size={15} /></a>
              <a href={RESUME_PDF} download="Parthibakannan_S_Resume_2026.pdf" className="btn-ghost"><Download size={15} /> Download résumé</a>
              <button type="button" onClick={() => window.dispatchEvent(new CustomEvent("portfolio:open-chat"))} className="btn-ghost"><Bot size={15} /> Ask the assistant</button>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 30, paddingTop: 26, borderTop: "1px solid rgba(20,24,42,0.08)" }}>
              {[
                { n: "10,00,000+", l: "contracts indexed" },
                { n: "3 shipped", l: "production gen-ai systems" },
                { n: "3 certs", l: "microsoft azure ai" },
              ].map(s => (
                <div key={s.l}>
                  <div className="font-display" style={{ fontSize: 22, fontWeight: 700, color: t.ink }}>{s.n}</div>
                  <div className="font-mono" style={{ fontSize: 10.5, letterSpacing: "0.08em", color: t.inkMuted, textTransform: "uppercase", marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: portrait + floating trace card */}
          <div className="hide-mobile" style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: 320 }}>
              {/* glow */}
              <div style={{ position: "absolute", inset: -30, borderRadius: 32, background: `radial-gradient(circle at 30% 20%, rgba(124,92,255,0.35), transparent 60%), radial-gradient(circle at 80% 90%, rgba(31,199,192,0.3), transparent 60%)`, filter: "blur(28px)", zIndex: 0 }} />
              {/* portrait frame */}
              <div className="glass-strong" style={{ position: "relative", padding: 10, borderRadius: 26, zIndex: 1 }}>
                <div style={{ position: "relative", borderRadius: 18, overflow: "hidden", aspectRatio: "500 / 600" }}>
                  <img src={PORTRAIT} alt="Parthibakannan S" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
                  <div style={{ position: "absolute", inset: 0, background: `linear-gradient(160deg, rgba(124,92,255,0.10), transparent 40%, rgba(31,199,192,0.08))`, pointerEvents: "none" }} />
                </div>
              </div>
              {/* floating mini trace card (dark, glossy) */}
              <div style={{
                position: "absolute", bottom: -26, left: -38, zIndex: 2, width: 188,
                background: `linear-gradient(180deg, #161B2E, #0E1220)`,
                border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "13px 15px",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 50px -18px rgba(20,24,42,0.45)",
                animation: REDUCE ? "none" : "floatY 6s ease-in-out infinite",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 9 }}>
                  <span style={{ width: 7, height: 7, borderRadius: 4, background: t.auroraBright, boxShadow: `0 0 8px ${t.auroraBright}`, animation: REDUCE ? "none" : "pulseSoft 2s infinite" }} />
                  <span className="font-mono" style={{ fontSize: 9.5, letterSpacing: "0.16em", color: t.darkMuted, textTransform: "uppercase" }}>what i ship</span>
                </div>
                {[["retrieval", "rag at scale"], ["agents", "autonomous"], ["stack", ".NET · azure ai"]].map(([a, b], i) => (
                  <div key={a} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: i < 2 ? 7 : 0 }}>
                    <span className="font-display" style={{ fontSize: 11.5, fontWeight: 600, color: t.darkText }}>{a}</span>
                    <span className="font-mono" style={{ fontSize: 9.5, color: t.auroraBright }}>{b}</span>
                  </div>
                ))}
              </div>
              {/* floating cert chip */}
              <div style={{
                position: "absolute", top: -18, right: -30, zIndex: 2,
                background: "#fff", border: "1px solid rgba(245,166,35,0.4)", borderRadius: 12, padding: "9px 13px",
                boxShadow: "0 18px 40px -18px rgba(245,166,35,0.5)",
                animation: REDUCE ? "none" : "floatY 7s ease-in-out infinite reverse",
                display: "flex", alignItems: "center", gap: 8,
              }}>
                <Award size={15} color={t.amber} />
                <div>
                  <div className="font-display" style={{ fontSize: 11.5, fontWeight: 700, color: t.ink, lineHeight: 1 }}>IIT Madras</div>
                  <div className="font-mono" style={{ fontSize: 8.5, color: t.amber, marginTop: 2 }}>DIPLOMA · PROG</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// CREDENTIALS
// ─────────────────────────────────────────────────────────────────────────
function Credentials() {
  const certs = [
    { code: "AI-102", label: "Azure AI Engineer Associate" },
    { code: "AI-900", label: "Azure AI Fundamentals" },
    { code: "AZ-900", label: "Azure Fundamentals" },
  ];
  return (
    <section className="section-tight" style={{ borderTop: "1px solid rgba(20,24,42,0.06)", borderBottom: "1px solid rgba(20,24,42,0.06)" }}>
      <div className="container">
        <div className="section-eyebrow" style={{ marginBottom: 20, textAlign: "center" }}>Credentials</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", alignItems: "stretch" }}>
          {/* IIT Madras — amber, with shine sweep */}
          <div className="hover-card" style={{
            padding: "18px 22px", display: "flex", alignItems: "center", gap: 14, borderRadius: 16,
            position: "relative", overflow: "hidden",
            background: "linear-gradient(180deg, #FFFDF8, #FFF6E8)",
            border: "1px solid rgba(245,166,35,0.4)",
            boxShadow: "inset 0 1px 0 #fff, 0 22px 48px -28px rgba(245,166,35,0.5)",
          }}>
            <div className="shine" style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: 60, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)", animation: REDUCE ? "none" : "shineSweep 4.5s ease-in-out infinite", pointerEvents: "none" }} />
            <div style={{ width: 40, height: 40, borderRadius: 11, background: `linear-gradient(135deg, ${t.amberBright}, #E0820A)`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4)", flexShrink: 0 }}>
              <Award size={19} color="#fff" strokeWidth={2.2} />
            </div>
            <div>
              <div className="font-display" style={{ fontSize: 15, fontWeight: 700, color: t.ink }}>Diploma in Programming</div>
              <div className="font-mono" style={{ fontSize: 11, color: t.amber, marginTop: 2, letterSpacing: "0.06em", fontWeight: 500 }}>IIT MADRAS</div>
            </div>
          </div>
          {certs.map(c => (
            <div key={c.code} className="glass hover-card" style={{ padding: "18px 22px", display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: 11, background: `linear-gradient(135deg, ${t.irisBright}, ${t.irisDeep})`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)", flexShrink: 0 }}>
                <ShieldCheck size={19} color="#fff" strokeWidth={2.2} />
              </div>
              <div>
                <div className="font-display" style={{ fontSize: 14, fontWeight: 700, color: t.ink }}>{c.label}</div>
                <div className="font-mono" style={{ fontSize: 11, color: t.iris, marginTop: 2, letterSpacing: "0.06em" }}>MICROSOFT · {c.code}</div>
              </div>
            </div>
          ))}
          <div className="glass hover-card" style={{ padding: "18px 22px", display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 40, height: 40, borderRadius: 11, background: `linear-gradient(135deg, ${t.auroraBright}, #0B8A85)`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)", flexShrink: 0 }}>
              <GraduationCap size={19} color="#fff" strokeWidth={2.2} />
            </div>
            <div>
              <div className="font-display" style={{ fontSize: 14, fontWeight: 700, color: t.ink }}>B.Tech, Computer Science</div>
              <div className="font-mono" style={{ fontSize: 11, color: t.aurora, marginTop: 2, letterSpacing: "0.06em" }}>DR. M.G.R. ERI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// EXPERIENCE
// ─────────────────────────────────────────────────────────────────────────
function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <div style={{ marginBottom: 38, maxWidth: 780 }}>
            <div className="section-eyebrow" style={{ marginBottom: 12 }}>About · Experience</div>
            <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.6vw, 38px)", fontWeight: 700, color: t.ink, margin: "0 0 18px", lineHeight: 1.12 }}>From QA apprentice to Gen AI developer.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: t.inkSoft, margin: 0 }}>{aboutSummary}</p>
          </div>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {experience.map((e, i) => {
            const Icon = e.icon;
            return (
              <Reveal key={e.company} delay={i * 100}>
                <div className="glass" style={{ padding: 28, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: e.current ? `linear-gradient(180deg, ${t.irisBright}, ${t.auroraBright})` : "rgba(20,24,42,0.12)" }} />
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 18, flexWrap: "wrap" }}>
                    <div style={{ width: 46, height: 46, borderRadius: 12, flexShrink: 0, background: e.current ? `linear-gradient(135deg, ${t.irisBright}, ${t.irisDeep})` : "rgba(20,24,42,0.06)", border: e.current ? "none" : "1px solid rgba(20,24,42,0.08)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: e.current ? "inset 0 1px 0 rgba(255,255,255,0.3), 0 12px 26px -12px rgba(106,67,224,0.4)" : "none" }}>
                      <Icon size={20} color={e.current ? "#fff" : t.inkMuted} strokeWidth={2.1} />
                    </div>
                    <div style={{ flex: 1, minWidth: 220 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                        <h3 className="font-display" style={{ fontSize: 18.5, fontWeight: 700, color: t.ink, margin: 0 }}>{e.company}</h3>
                        {e.current && <span className="chip chip-aurora" style={{ fontSize: 10 }}><span style={{ width: 5, height: 5, borderRadius: 3, background: t.aurora }} /> Current</span>}
                      </div>
                      <div style={{ fontSize: 14, color: t.iris, fontWeight: 600, marginTop: 4 }}>{e.role}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div className="font-mono" style={{ fontSize: 11.5, color: t.inkMuted }}>{e.period}</div>
                      <div className="font-mono" style={{ fontSize: 10.5, color: t.inkDim, marginTop: 4 }}>{e.location}</div>
                    </div>
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                    {e.points.map((p, j) => (
                      <li key={j} style={{ display: "flex", gap: 11, fontSize: 13.5, color: t.inkSoft, lineHeight: 1.55 }}>
                        <span style={{ color: t.aurora, marginTop: 1, flexShrink: 0, fontSize: 12 }}>▸</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div style={{ marginTop: 26, display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7, color: t.inkMuted }}>
              <Globe size={15} color={t.aurora} />
              <span className="font-mono" style={{ fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase" }}>Languages</span>
            </span>
            {languages.map(l => <span key={l} className="chip">{l}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// PROJECT TRACE (light)
// ─────────────────────────────────────────────────────────────────────────
function ProjectTrace({ stages }) {
  const NODE_W = 148, NODE_H = 108, GAP = 48, PAD = 22;
  const totalW = PAD * 2 + stages.length * NODE_W + (stages.length - 1) * GAP;
  const H = 184, cY = H / 2;
  return (
    <div className="scroll-x" style={{ overflowX: "auto", overflowY: "hidden", padding: "16px 0" }}>
      <div style={{ position: "relative", width: `${totalW}px`, height: `${H}px`, minWidth: `${totalW}px` }}>
        <svg width={totalW} height={H} style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <defs>
            <linearGradient id="tg" x1="0" x2="1" y1="0" y2="0"><stop offset="0%" stopColor={t.iris} stopOpacity="0.55" /><stop offset="100%" stopColor={t.aurora} stopOpacity="0.55" /></linearGradient>
            <pattern id="dg" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="rgba(20,24,42,0.05)" /></pattern>
          </defs>
          <rect width={totalW} height={H} fill="url(#dg)" />
          {stages.slice(0, -1).map((_, i) => {
            const x1 = PAD + (i + 1) * NODE_W + i * GAP;
            const x2 = PAD + (i + 1) * NODE_W + (i + 1) * GAP;
            return (
              <g key={i}>
                <path d={`M ${x1} ${cY} L ${x2} ${cY}`} stroke="url(#tg)" strokeWidth="2" fill="none" className="trace-line" />
                {!REDUCE && <circle r="3.5" fill={t.aurora} style={{ filter: `drop-shadow(0 0 4px ${t.aurora})` }}><animateMotion dur="2.4s" repeatCount="indefinite" path={`M ${x1} ${cY} L ${x2} ${cY}`} begin={`${i * 0.3}s`} /></circle>}
              </g>
            );
          })}
        </svg>
        {stages.map((s, i) => {
          const Icon = s.icon;
          const x = PAD + i * (NODE_W + GAP), y = cY - NODE_H / 2;
          return (
            <div key={i} className="glass hover-card" style={{ position: "absolute", left: `${x}px`, top: `${y}px`, width: `${NODE_W}px`, minHeight: `${NODE_H}px`, padding: 14, display: "flex", flexDirection: "column", gap: 6, borderRadius: 14, zIndex: 2 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg, rgba(124,92,255,0.16), rgba(31,199,192,0.12))", border: "1px solid rgba(124,92,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={14} color={t.iris} strokeWidth={2.2} />
                </div>
                <span className="font-mono" style={{ fontSize: 9.5, color: t.inkDim }}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="font-display" style={{ fontSize: 13.5, fontWeight: 700, color: t.ink, marginTop: 4, lineHeight: 1.2 }}>{s.label}</div>
              <div style={{ fontSize: 10.5, color: t.inkMuted, lineHeight: 1.35 }}>{s.sub}</div>
              <div className="font-mono" style={{ fontSize: 9.5, color: t.aurora, marginTop: "auto" }}>{s.tech}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// SELECTED WORK
// ─────────────────────────────────────────────────────────────────────────
function StatusBadge({ status }) {
  const inDev = status === "In development";
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 11px", borderRadius: 999,
      fontSize: 11, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace",
      background: inDev ? "rgba(245,166,35,0.14)" : "rgba(15,169,104,0.13)",
      border: `1px solid ${inDev ? "rgba(245,166,35,0.35)" : "rgba(15,169,104,0.3)"}`,
      color: inDev ? "#A9650A" : "#0A7A4D",
    }}>
      <span style={{ width: 6, height: 6, borderRadius: 3, background: inDev ? t.amberBright : t.success, animation: REDUCE ? "none" : "pulseSoft 2s infinite" }} />
      {status}
    </span>
  );
}

function SelectedWork() {
  const [active, setActive] = useState(productionWork[0].id);
  const project = productionWork.find(p => p.id === active);
  const Illo = ILLOS[project.id];
  return (
    <section id="work" className="section soft-bg">
      <div className="container">
        <Reveal>
          <div style={{ marginBottom: 40, maxWidth: 720 }}>
            <div className="section-eyebrow" style={{ marginBottom: 12 }}>Selected work · Cognizant</div>
            <h2 className="font-display" style={{ fontSize: "clamp(32px, 4.2vw, 44px)", fontWeight: 700, color: t.ink, margin: "0 0 16px", lineHeight: 1.1 }}>Production Gen AI systems.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: t.inkMuted, margin: 0 }}>Built for a healthcare platform serving CVS Health — from contract retrieval at scale to an autonomous SDLC agent, with LLM features integrated into a production .NET MVC system. Each one is shown with the trace it actually runs as: the stages, the technology, and the flow of a request through the stack.</p>
          </div>
        </Reveal>

        <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
          {productionWork.map(p => {
            const isActive = p.id === active;
            return (
              <button key={p.id} onClick={() => setActive(p.id)} style={{
                padding: "10px 18px", borderRadius: 11, cursor: "pointer", fontSize: 13.5, fontWeight: 600, transition: "all 0.18s",
                border: isActive ? `1px solid ${t.iris}` : "1px solid rgba(20,24,42,0.09)",
                background: isActive ? "linear-gradient(180deg, #8366FF, #6A43E0)" : "#fff",
                color: isActive ? "#fff" : t.inkMuted,
                boxShadow: isActive ? "inset 0 1px 0 rgba(255,255,255,0.3), 0 12px 26px -12px rgba(106,67,224,0.5)" : "0 4px 12px -8px rgba(20,24,42,0.2)",
              }}>{p.title}</button>
            );
          })}
        </div>

        <div className="glass-strong" style={{ overflow: "hidden" }}>
          {/* Cover illustration band */}
          <div style={{ position: "relative", background: "linear-gradient(120deg, rgba(124,92,255,0.10), rgba(31,199,192,0.08))", borderBottom: "1px solid rgba(20,24,42,0.06)", overflow: "hidden" }}>
            <Illo />
            <div style={{ position: "absolute", top: 16, right: 18 }}><StatusBadge status={project.status} /></div>
            <div style={{ position: "absolute", left: 28, bottom: 16 }}>
              <div className="section-eyebrow" style={{ color: t.iris, marginBottom: 4 }}>{project.eyebrow}</div>
              <div className="font-display" style={{ fontSize: 24, fontWeight: 700, color: t.ink }}>{project.title}</div>
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: 34 }}>
            <p style={{ fontSize: 15.5, color: t.inkSoft, lineHeight: 1.55, marginBottom: 26, fontStyle: "italic", maxWidth: 760 }}>{project.tagline}</p>
            <div className="proj-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28, alignItems: "start", marginBottom: 30 }}>
              {[["Problem", project.problem], ["Approach", project.approach], ["Outcome", project.outcome]].map(([k, v]) => (
                <div key={k}>
                  <div className="font-mono" style={{ fontSize: 10.5, color: t.aurora, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>{k}</div>
                  <p style={{ fontSize: 14, color: t.inkSoft, lineHeight: 1.6, margin: 0 }}>{v}</p>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 26 }}>
              {project.tech.map(tech => <span key={tech} className="chip">{tech}</span>)}
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, paddingBottom: 12, borderBottom: "1px solid rgba(20,24,42,0.06)" }}>
                <Network size={14} color={t.aurora} />
                <span className="font-mono" style={{ fontSize: 11, color: t.inkMuted, letterSpacing: "0.14em", textTransform: "uppercase" }}>Architecture · live trace</span>
              </div>
              <ProjectTrace stages={project.stages} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// BUILDS (hackathon)
// ─────────────────────────────────────────────────────────────────────────
function Builds() {
  return (
    <section id="builds" className="section">
      <div className="container">
        <Reveal>
          <div style={{ marginBottom: 40, maxWidth: 720 }}>
            <div className="section-eyebrow" style={{ marginBottom: 12 }}>Built fast</div>
            <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.6vw, 36px)", fontWeight: 700, color: t.ink, margin: "0 0 14px", lineHeight: 1.15 }}>Hackathon &amp; vibe-coding work.</h2>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: t.inkMuted, margin: 0 }}>Internal sprints where the brief was "ship something useful in 48 hours." LLM-glued products with full auth, persistence, and a story.</p>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {hackathonWork.map((h, i) => {
            const Icon = h.icon;
            const accent = h.accent === "iris" ? t.irisBright : t.auroraBright;
            const accentDeep = h.accent === "iris" ? t.irisDeep : "#0B8A85";
            return (
              <Reveal key={h.title} delay={i * 90}>
                <div className="glass hover-card" style={{ padding: 26, height: "100%" }}>
                  <div style={{ width: 46, height: 46, borderRadius: 13, background: `linear-gradient(135deg, ${accent}, ${accentDeep})`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, boxShadow: `inset 0 1px 0 rgba(255,255,255,0.3), 0 14px 28px -10px ${accent}88` }}>
                    <Icon size={21} color="#fff" strokeWidth={2.2} />
                  </div>
                  <h3 className="font-display" style={{ fontSize: 20, fontWeight: 700, color: t.ink, margin: "0 0 10px" }}>{h.title}</h3>
                  <p style={{ fontSize: 14, color: t.inkSoft, lineHeight: 1.6, margin: "0 0 16px" }}>{h.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>{h.tech.map(tech => <span key={tech} className="chip">{tech}</span>)}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// FOUNDATIONS
// ─────────────────────────────────────────────────────────────────────────
function Foundations() {
  return (
    <section id="foundations" className="section soft-bg">
      <div className="container">
        <Reveal>
          <div style={{ marginBottom: 40, maxWidth: 720 }}>
            <div className="section-eyebrow" style={{ marginBottom: 12 }}>Foundations</div>
            <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.6vw, 36px)", fontWeight: 700, color: t.ink, margin: "0 0 14px", lineHeight: 1.15 }}>Where I learned to ship.</h2>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: t.inkMuted, margin: 0 }}>College work — full-stack apps, ML classifiers, and conversational bots. The projects that taught me what production really means.</p>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {collegeWork.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 70}>
                <div className="glass hover-card" style={{ padding: 22, height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(124,92,255,0.1)", border: "1px solid rgba(124,92,255,0.22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={16} color={t.iris} strokeWidth={2.2} />
                    </div>
                    <h3 className="font-display" style={{ fontSize: 15.5, fontWeight: 700, color: t.ink, margin: 0 }}>{c.title}</h3>
                  </div>
                  <p style={{ fontSize: 13, color: t.inkMuted, lineHeight: 1.6, margin: "0 0 12px" }}>{c.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>{c.tech.map(tech => <span key={tech} className="chip" style={{ fontSize: 10, padding: "3px 8px" }}>{tech}</span>)}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// AFTER HOURS
// ─────────────────────────────────────────────────────────────────────────
function AfterHours() {
  return (
    <section className="section-tight">
      <div className="container">
        <div style={{ marginBottom: 26, display: "flex", alignItems: "center", gap: 14 }}>
          <div className="section-eyebrow">After hours</div>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(20,24,42,0.1), transparent)" }} />
        </div>
        <p style={{ fontSize: 15, lineHeight: 1.65, color: t.inkMuted, maxWidth: 720, margin: "0 0 26px" }}>Personal R&amp;D — what I build for myself to keep pushing on the craft.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
          {personalRD.map(p => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="glass" style={{ padding: 22, display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0, background: "rgba(31,199,192,0.1)", border: "1px solid rgba(31,199,192,0.24)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={16} color={t.aurora} strokeWidth={2.2} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                    <h3 className="font-display" style={{ fontSize: 15, fontWeight: 700, color: t.ink, margin: 0 }}>{p.title}</h3>
                    {p.status && <StatusBadge status={p.status} />}
                  </div>
                  <p style={{ fontSize: 13, color: t.inkMuted, lineHeight: 1.55, margin: "0 0 10px" }}>{p.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>{p.tech.map(tech => <span key={tech} className="chip" style={{ fontSize: 10, padding: "3px 8px" }}>{tech}</span>)}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// AI CHATBOT — dark glossy card; calls /api/chat (Gemini via Cloudflare Pages Function)
// ─────────────────────────────────────────────────────────────────────────

function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "assistant", content: "Hi — I'm an AI assistant trained on Parthi's work. Ask me about his projects, stack, certifications, or anything you'd want to know before reaching out." }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => { if (open && endRef.current) endRef.current.scrollIntoView({ behavior: "smooth" }); }, [messages, loading, open]);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("portfolio:open-chat", onOpen);
    return () => window.removeEventListener("portfolio:open-chat", onOpen);
  }, []);

  const suggestions = ["What did he build at Cognizant?", "Walk me through the PDF compare agent.", "Why is the IIT Madras diploma relevant?", "How do I get in touch?"];

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
          background: "linear-gradient(135deg, #8366FF, #6A43E0)",
          border: "1.5px solid rgba(255,255,255,0.18)",
          boxShadow: "0 18px 40px -14px rgba(106,67,224,0.6), inset 0 1px 0 rgba(255,255,255,0.25)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "transform 0.18s ease, box-shadow 0.18s ease",
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 22px 46px -14px rgba(106,67,224,0.7), inset 0 1px 0 rgba(255,255,255,0.3)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 18px 40px -14px rgba(106,67,224,0.6), inset 0 1px 0 rgba(255,255,255,0.25)"; }}
      >
        {open ? <X size={22} color="#fff" /> : <Bot size={24} color="#fff" />}
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
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), 0 40px 90px -30px rgba(20,24,42,0.7)",
            display: "flex", flexDirection: "column",
            animation: REDUCE ? "none" : "popIn 0.22s ease-out",
          }}
        >
          <div style={{ padding: "14px 18px", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 30, height: 30, borderRadius: 999, overflow: "hidden", border: "1.5px solid rgba(255,255,255,0.15)" }}>
              <img src={PORTRAIT} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="font-display" style={{ fontSize: 13, fontWeight: 700, color: t.darkText }}>Parthi · portfolio assistant</div>
              <div className="font-mono" style={{ fontSize: 10, color: t.auroraBright, marginTop: 2 }}>● online · Google Gemini</div>
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
                  background: m.role === "user" ? "linear-gradient(180deg, #8366FF, #5E3DD6)" : "rgba(255,255,255,0.05)",
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
                  style={{ padding: "6px 12px", borderRadius: 999, background: "rgba(124,92,255,0.14)", border: "1px solid rgba(124,92,255,0.3)", color: t.darkSoft, fontSize: 11.5, cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(124,92,255,0.24)"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(124,92,255,0.14)"; e.currentTarget.style.color = t.darkSoft; }}>{s}</button>
              ))}
            </div>
          )}

          <div style={{ padding: 12, borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", gap: 8 }}>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => { if (e.key === "Enter") send(); }} placeholder="Ask about Parthi's work…"
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

// ─────────────────────────────────────────────────────────────────────────
// STACK
// ─────────────────────────────────────────────────────────────────────────
function Stack() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div style={{ marginBottom: 34, maxWidth: 720 }}>
            <div className="section-eyebrow" style={{ marginBottom: 12 }}>Tooling</div>
            <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.6vw, 36px)", fontWeight: 700, color: t.ink, margin: "0 0 12px", lineHeight: 1.15 }}>What I reach for.</h2>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {stack.map((g, i) => (
            <Reveal key={g.group} delay={i * 70}>
              <div className="glass" style={{ padding: 20, height: "100%" }}>
                <div className="font-mono" style={{ fontSize: 10.5, color: t.aurora, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>{g.group}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>{g.items.map(it => <span key={it} className="chip" style={{ fontSize: 11.5 }}>{it}</span>)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="section mesh-bg" style={{ borderTop: "1px solid rgba(20,24,42,0.06)" }}>
      <div className="container">
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
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
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ padding: "30px 0", borderTop: "1px solid rgba(20,24,42,0.06)" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
        <div className="font-mono" style={{ fontSize: 11.5, color: t.inkDim }}>© 2026 Parthibakannan S · Built in Chennai</div>
        <div className="font-mono" style={{ fontSize: 11.5, color: t.inkDim }}>Gen AI Engineer</div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────
export default function Portfolio() {
  return (
    <div className="font-body" style={{ background: t.bg, color: t.ink, minHeight: "100vh" }}>
      <style>{globalStyles}</style>
      <Nav />
      <Hero />
      <Credentials />
      <Experience />
      <SelectedWork />
      <Builds />
      <Foundations />
      <AfterHours />
      <AIChatbot />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}
