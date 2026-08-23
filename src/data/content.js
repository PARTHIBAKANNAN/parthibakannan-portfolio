import { Building2, Briefcase, Users, GraduationCap, Mic, ShieldCheck, Zap, Server, BrainCircuit, Trophy, Award, Gamepad2, Globe2, Bot } from "lucide-react";

export const aboutSummary = "Microsoft-certified Azure AI Engineer, Gen AI Developer at Cognizant, and Quantitative Systems Architect with 2+ years building enterprise RAG pipelines, autonomous agents, and low-latency algorithmic trading terminals. Designed enterprise systems indexing 10L+ contracts for healthcare (CVS Health) and architected real-time institutional trading terminals powered by Google Gemini 3.6 Flash and high-frequency WebSocket streams. Full-stack across Python (FastAPI, Flask) and .NET (C#, MVC, Web API) with hands-on Azure, Vercel & Cloudflare deployment. IIT Madras Diploma in Programming.";

export const experience = [
  {
    company: "Cognizant Technology Solutions", role: "Gen AI Developer · .NET Developer",
    period: "Oct 2024 – Present", location: "Chennai", current: true, icon: Building2,
    points: [
      "Shipped 3 production Generative AI systems on Azure OpenAI — contract search, a RAG chatbot, and a PDF-compare agent — live on a healthcare platform serving CVS Health.",
      "Engineered a hybrid (BM25 + vector) RAG pipeline on Azure AI Search that indexes 10L+ enterprise contracts and returns cited answers in seconds.",
      "Embedded LLM-powered features — semantic search, document understanding, automated contract comparison — into a production .NET MVC app with zero disruption to existing architecture.",
      "Own delivery end-to-end on Azure App Service + Cosmos DB: NUnit test coverage, Snyk vulnerability remediation, and release management via TeamCity, Octopus Deploy, and GitHub Actions.",
    ],
  },
  {
    company: "NEC Corporation India", role: "Automation Quality Analyst — Apprentice",
    period: "Apr 2024 – Oct 2024", location: "Chennai", current: false, icon: Briefcase,
    points: [
      "Fast-tracked from QA apprentice to developer in 3 months, shipping .NET Web API endpoints and JavaScript features for the Bausch & Lomb account.",
      "Built Power BI dashboards that gave business stakeholders real-time visibility into product quality metrics.",
      "Automated regression testing with Python scripts, cutting manual effort across QA cycles.",
    ],
  },
];

export const languages = [
  "English — Fluent",
  "Tamil — Native",
  "Telugu — Native",
  "Japanese — Duolingo Learner (14,199 XP)",
  "Hindi — Professional (10,812 XP)",
  "German — Beginner (3,298 XP)"
];

// Dynamically incrementing streak starting from base 350 days
const streakBaseDate = new Date("2024-09-08").getTime();
const daysSinceBase = Math.max(0, Math.floor((Date.now() - streakBaseDate) / (1000 * 60 * 60 * 24)));
export const dynamicStreakDays = 350 + daysSinceBase;

export const duolingoStats = {
  streak: `${dynamicStreakDays}+ Day Streak 🔥`,
  totalXp: "53,132 XP",
  league: "Diamond League 💎 (Week 2)",
  topFinishes: "16 Top 3 Finishes 🥇",
  chessElo: "710 Elo (24,077 XP)",
};

export const hackerRankStats = {
  sql: "5-Star Gold Badge ★★★★★",
  sqlCert: "Verified SQL (Basic) Certificate",
  problemSolving: "3-Star Badge ★★★",
  python: "2-Star Badge ★★",
};

export const gamingInterests = [
  { name: "BGMI (Battlegrounds Mobile India)", detail: "Real-time squad communication, split-second reflexes & zone rotation strategy" },
  { name: "GTA 5", detail: "Open-world systems simulation & tactical mission execution" },
  { name: "Need for Speed: Most Wanted (NFS MW)", detail: "High-speed reflex conditioning & pursuit mechanics" },
];

export const stack = [
  { group: "Quant & Real-Time Trading", items: ["FYERS API v3", "WebSockets (ms binary)", "Google Gemini 3.6 Flash Copilot", "Black-Scholes & Greeks Engine", "Intraday Relative Strength (IRS)", "ORB Engines", "Supabase", "Telegram Bot API", "HTML5 Canvas Rendering"] },
  { group: "AI / LLM & RAG", items: ["Google Gemini 3.6 Flash", "Azure OpenAI (GPT-4o)", "Claude 3.5 Sonnet", "Ollama (Local LLM)", "RAG (BM25 + text-embedding-3)", "Azure AI Search", "Agentic Tool Calling", "MediaPipe (Hand Landmarks)", "scikit-learn", "HuggingFace"] },
  { group: "Maps, Voice & Desktop AI", items: ["Leaflet.js", "OSRM Road Routing Engine", "Web Audio API (432Hz)", "Speech-to-Text / TTS", "PyQt6 Desktop GUI", "Voice Activity Detection (VAD)", "Voice Biometrics"] },
  { group: "Cloud & Platforms", items: ["Azure App Service", "Azure AI Studio", "Azure Service Bus", "Vercel", "Render", "Cloudflare Workers AI", "MongoDB Atlas", "Neon PostgreSQL", "Supabase", "Cosmos DB"] },
  { group: "Backend", items: ["Python (FastAPI · Flask · Flask-RESTX)", ".NET (C# · MVC · Web API)", "SQLAlchemy", "JWT Authentication", "Node.js", "REST", "SSE", "WebSockets"] },
  { group: "Frontend", items: ["React (Vite · TypeScript)", "Angular", "Vue.js", "HTML5 Canvas", "TailwindCSS", "Leaflet Maps"] },
  { group: "Data & Persistence", items: ["SQL Server", "MongoDB Atlas", "Neon PostgreSQL", "Supabase", "Cosmos DB", "SQLite", "In-Memory Delta Caches"] },
  { group: "DevOps & QA", items: ["Git", "GitHub Actions", "GitHub Pages", "TeamCity", "Octopus Deploy", "Playwright", "Selenium", "NUnit", "PyTest", "Snyk"] },
];

export const engineeringTenets = [
  {
    icon: ShieldCheck,
    title: "Zero Client Credential Leakage",
    desc: "Broker API secrets, TOTP seeds, and LLM orchestration keys reside exclusively behind server-side proxies (FastAPI/Azure App Service). The client receives only sanitized delta states.",
  },
  {
    icon: Zap,
    title: "Sub-Second Deterministic Compute",
    desc: "Critical quantitative math (IRS, ORB, Black-Scholes Greeks) runs in-memory before reaching network layers, guaranteeing lightning-fast reaction time in volatile markets.",
  },
  {
    icon: BrainCircuit,
    title: "Grounded LLM Reasoning",
    desc: "LLMs are strictly guided by bounded context windows, hybrid vector search citations, and schema-enforced function calling to eliminate hallucinations in production.",
  },
  {
    icon: Server,
    title: "Asynchronous Resilience",
    desc: "Heavy loads, contract diffs, and order logs queue through Azure Service Bus, WebSockets, or Supabase real-time channels to keep UI rendering silky smooth at 60 FPS.",
  },
];

// ─────────────────────────────────────────────────────────────────────────
// Certifications — each links out to the public verification page.
// ─────────────────────────────────────────────────────────────────────────
export const certifications = [
  {
    code: "Claude Architect", label: "Claude Certified Architect — Foundations", issuer: "Anthropic",
    url: "https://www.credly.com/badges/60cdf07a-6f52-468e-8621-3463dd0921eb/public_url",
  },
  {
    code: "AI-102", label: "Azure AI Engineer Associate", issuer: "Microsoft",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/PARTHIBAKANNANS-2282/E41D379143EEA14C?sharingId=F58BA09119E4B72E",
  },
  {
    code: "AI-900", label: "Azure AI Fundamentals", issuer: "Microsoft",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/PARTHIBAKANNANS-2282/41B9415EA58CF240?sharingId=F58BA09119E4B72E",
  },
  {
    code: "AZ-900", label: "Azure Fundamentals", issuer: "Microsoft",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/PARTHIBAKANNANS-2282/9394338E42F3F76E?sharingId=F58BA09119E4B72E",
  },
  {
    code: "HackerRank SQL", label: "5-Star Gold Badge & Verified SQL Skill", issuer: "HackerRank",
    url: "https://www.hackerrank.com/profile/parthisivaram45",
  },
];

export const education = [
  { title: "Diploma in Programming", org: "IIT MADRAS", accent: "amber" },
  { title: "B.Tech, Computer Science", org: "DR. M.G.R. ERI", accent: "aurora" },
];

// ─────────────────────────────────────────────────────────────────────────
// Achievements & Awards
// ─────────────────────────────────────────────────────────────────────────
export const awards = [
  {
    title: "Global ADM Star Award",
    category: "GenC Star",
    org: "Cognizant — Application Development & Management",
    presenter: "Hari Parmeswaran, Global Delivery Head – ADM",
    year: "2025",
    blurb: "Recognized globally within Cognizant's ADM organization for standout impact as a Gen-C (early-career) engineer — one honoree in the \"GenC Star\" category.",
  },
];

// ─────────────────────────────────────────────────────────────────────────
// Leadership & Community
// ─────────────────────────────────────────────────────────────────────────
export const leadership = [
  {
    title: "Agentic AI & RAG training",
    icon: Users,
    stat: "100+ attendees",
    desc: "Ran internal sessions on agentic AI and retrieval-augmented generation for Cognizant colleagues — associates, senior associates, and directors alike.",
  },
  {
    title: "SQL workshop",
    icon: GraduationCap,
    stat: "300+ students",
    desc: "Designed and delivered a hands-on SQL workshop for fellow students during college, covering query fundamentals through to optimization.",
  },
  {
    title: "Head Organizer, college events",
    icon: Mic,
    stat: "Multiple events",
    desc: "Led organizing for symposiums, debates, and fundraiser events during college — planning, logistics, and hosting from end to end.",
  },
];
