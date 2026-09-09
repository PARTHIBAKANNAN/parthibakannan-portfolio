import {
  FileText, Layers, Database, Search, FileSearch, MessageCircle, Boxes, BrainCircuit,
  Send, Diff, Filter, ShieldCheck, Zap, Notebook, Workflow, Code2, FlaskConical,
  GitCommit, Heart, Bike, Hammer, Hand, Music, Activity, Plane, Wand2, LineChart, BarChart3,
  Cpu, Terminal, Radio, Gauge, Sparkles, Trophy, Gamepad2, Globe2, Compass, Bot, MapPin, Mic
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────
// FLAGSHIP QUANTITATIVE & AI PLATFORMS (PulseHunter & NUKEBOX)
// ─────────────────────────────────────────────────────────────────────────
export const flagshipQuantWork = [
  {
    id: "pulsehunter",
    title: "PulseHunter · Institutional Quant & AI Terminal",
    eyebrow: "Real-Time Quant · 212+ Stocks · Google Gemini Copilot",
    tagline: "Institutional quantitative momentum scanner monitoring 212+ Indian equity stocks with real-time HTML5 canvas charts, a 5-tier filter matrix, Google Gemini 3.6 Flash AI Copilot (Red-Flag Signal Audit), and 250ms WebSocket state streaming.",
    status: "Live Terminal",
    liveUrl: "https://trading-dashboard-1.duckdns.org/",
    github: "https://github.com/PARTHIBAKANNAN/TradeDashBoard",
    image: "/assets/pulsehunter.jpg",
    problem: "Retail and active traders miss rapid institutional breakouts and sector rotations due to lagging multi-screen UIs, ungrounded speculation, and sluggish broker web interfaces across 200+ symbols.",
    approach: "Engineered a low-latency Python FastAPI Backend-For-Frontend (BFF) connecting to FYERS v3 millisecond WebSocket binary ticks for 212+ Indian equities. In-memory math calculates Intraday Relative Strength (IRS vs NIFTY 50), 30-min Opening Range Breakouts (ORB C0.5, C1–C4), and day range mapping. An embedded Google Gemini 3.6 Flash Copilot audits high-conviction signals with a Red-Flag filter (SKIP_TRAP vs CONFIRM) protected by a concurrency Semaphore(1) rate-limiter, streaming 250ms JSON state deltas to a high-frequency React canvas UI.",
    outcome: "Sub-second live streaming and interactive canvas charts across 212+ stocks. High-performance canvas range rendering with zero broker API credential exposure on the client.",
    metrics: [
      { label: "Tracked Equities", value: "212+ Stocks & Charts" },
      { label: "AI Copilot", value: "Gemini 3.6 Flash Audit" },
      { label: "Stream Latency", value: "250ms Delta Broadcast" },
      { label: "Math Engines", value: "IRS · C0.5-C4 ORB · VWAP" },
    ],
    tech: ["Google Gemini 3.6 Flash", "FYERS API v3", "FastAPI (Python)", "WebSockets", "React", "HTML5 Canvas Charts", "In-Memory Delta Engine", "Supabase Auth"],
    stages: [
      { icon: Radio, label: "01. Ingestion", sub: "212+ symbols binary ticks", tech: "FYERS v3 WebSocket BFF" },
      { icon: Activity, label: "02. Math Engine", sub: "IRS vs Nifty & C0.5–C4 ORB", tech: "In-Memory Calculations" },
      { icon: BrainCircuit, label: "03. Gemini Audit", sub: "Red-Flag Filter (SKIP_TRAP)", tech: "Gemini 3.6 Flash" },
      { icon: Send, label: "04. Broadcaster", sub: "250ms thread-safe state diffs", tech: "FastAPI Broadcaster" },
      { icon: BarChart3, label: "05. Canvas Render", sub: "212+ high-FPS range charts", tech: "React HTML5 Canvas UI" },
    ],
  },
  {
    id: "nukebox",
    title: "NUKEBOX · Autonomous Derivatives Terminal",
    eyebrow: "Autonomous Derivatives · 44 Deployed Strategies",
    tagline: "Autonomous quantitative options execution engine with 44 deployed intraday strategies (14 NIFTY + 15 SENSEX + 15 BANKNIFTY), Black-Scholes Greeks sensitivity engine, pre-market catalyst AI synthesis, and automated Telegram risk gates.",
    status: "Live Terminal",
    liveUrl: "https://trading-dashboard-1.duckdns.org/options-simulator/",
    github: "https://github.com/PARTHIBAKANNAN/OptionsSimulator",
    image: "/assets/nukebox.jpg",
    problem: "Manual options trading suffers from emotional hesitation, flawed risk-to-reward discipline, and inability to evaluate multiple non-linear options Greeks concurrently across diverse market volatility regimes.",
    approach: "Architected a full-stack derivatives trading platform running 44 deployed intraday algorithmic strategies across NIFTY, SENSEX, and BANKNIFTY (Support Bounce, Resistance Rejection, Heikin-Ashi Trend, VWAP POC Pullback, Supertrend CMF, Bollinger Squeeze Explosion, and OI Short Squeeze). At 08:50 AM IST, an automated catalyst engine synthesizes live global feeds (Nasdaq, Brent Crude, India VIX, GIFT Nifty) into Google Gemini 3.6 Flash. Real-time Black-Scholes Greeks (Delta, Gamma, Theta, Vega) enforce automated Stop-Loss, Take-Profit, and Time-Exit risk controls with Telegram dispatch and Supabase audit logging.",
    outcome: "Full-scale paper trading environment simulating 44 parallel strategies across 3 major Indian indices with automated risk controls and sub-second signal dispatch.",
    metrics: [
      { label: "Master Strategies", value: "44 Active Strategies" },
      { label: "Covered Indices", value: "NIFTY · SENSEX · BANKNIFTY" },
      { label: "Pricing Engine", value: "Black-Scholes & Greeks" },
      { label: "Pre-Market AI", value: "08:50 AM IST Catalyst" },
    ],
    tech: ["Python", "FastAPI", "React", "Black-Scholes Engine", "Telegram Bot API", "Supabase", "FYERS API v3", "PyTest", "Chart.js"],
    stages: [
      { icon: LineChart, label: "Feed Ingest", sub: "Live ticks & multi-index feeds", tech: "FYERS API" },
      { icon: BrainCircuit, label: "Catalyst AI", sub: "08:50 AM macro & news", tech: "Gemini 3.6 Flash" },
      { icon: Workflow, label: "Strategy Matrix", sub: "44 Deployed Strategies", tech: "Quant Core" },
      { icon: Gauge, label: "Pricing & Greeks", sub: "Delta/Gamma/Theta/Vega", tech: "Black-Scholes" },
      { icon: ShieldCheck, label: "Risk & Gate", sub: "SL/TP/Time & Telegram", tech: "Telegram Bot API" },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────
// ENTERPRISE PRODUCTION WORK (Cognizant / Healthcare Platform)
// ─────────────────────────────────────────────────────────────────────────
export const productionWork = [
  {
    id: "sdlc-agent", title: "SDLC Agentic AI Tool", status: "In development",
    eyebrow: "Agentic development", tagline: "From JIRA story to merged branch — without a human in the boring parts.",
    image: "/assets/enterprise_rag.jpg",
    problem: "Engineers were spending hours on small, well-scoped tickets that read more like specifications than design problems.",
    approach: "An agent built on Claude: fetch a JIRA story, plan subtasks, generate the implementation, run automated end-to-end tests with Playwright, open a PR, and write the documentation. A human approves the merge; the agent handles everything before that.",
    outcome: "In active development. Targeted first at well-scoped CRUD and refactor tickets; complex design work stays with humans.",
    tech: ["Claude", "JIRA API", "GitHub Actions", "Python", "Playwright"],
    stages: [
      { icon: Notebook, label: "Fetch", sub: "JIRA story", tech: "JIRA API" },
      { icon: Workflow, label: "Plan", sub: "Task graph", tech: "Claude" },
      { icon: Code2, label: "Code", sub: "Patch + diff", tech: "Claude" },
      { icon: FlaskConical, label: "Test", sub: "Run + iterate", tech: "Playwright" },
      { icon: GitCommit, label: "PR", sub: "Branch + docs", tech: "GitHub API" },
    ],
  },
  {
    id: "contract-search", title: "Contract Keyword Search", status: "Production",
    eyebrow: "Enterprise retrieval", tagline: "A million contracts, indexed and searchable in milliseconds.",
    image: "/assets/enterprise_rag.jpg",
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
    image: "/assets/enterprise_rag.jpg",
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
    image: "/assets/enterprise_rag.jpg",
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
];

// ─────────────────────────────────────────────────────────────────────────
// RAPID INNOVATION & DEPLOYED APPS (Vercel + Render + GitHub Pages)
// ─────────────────────────────────────────────────────────────────────────
export const hackathonWork = [
  {
    title: "J.A.R.V.I.S.",
    subtitle: "Autonomous Personal AI Desktop Companion & Arc Reactor HUD",
    icon: Bot,
    accent: "iris",
    status: "Personal Assistant",
    github: "https://github.com/PARTHIBAKANNAN/JARVIS",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=70",
    desc: "An autonomous desktop AI companion built in PyQt6 featuring a Cyberpunk Lavender Iron Man Arc Reactor HUD, hands-free Voice Activity Detection (VAD), biometric speaker verification, <100ms instant Windows application launching, and dual cognitive engine (Google Gemini 3.6 Flash + Ollama local LLM failover).",
    agenticHighlights: [
      "Cyberpunk Arc Reactor HUD & VAD: Hardware-accelerated PyQt6 transparent HUD with live waveform spectrum and non-blocking sounddevice VAD listening.",
      "Biometric Voice Auth: Spectral centroid, ZCR, and acoustic energy verification against enrolled voiceprints with security challenge for unknown voices.",
      "<100ms Windows App Finder & Dual Brain: Zero-latency Start Menu binary launcher with Gemini 3.6 Flash tool calling and automatic offline Ollama failover.",
    ],
    tech: ["PyQt6", "Google Gemini 3.6 Flash", "Ollama (Local LLM)", "Voice Biometrics", "VAD Audio", "Windows Control", "Python"],
  },
  {
    title: "TheraBot",
    subtitle: "AI Therapeutic & Mental Wellness Platform",
    icon: Heart,
    accent: "aurora",
    status: "Live on Vercel + Render",
    liveUrl: "https://therabot-beryl.vercel.app/",
    github: "https://github.com/PARTHIBAKANNAN/therabot",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=70",
    desc: "A clinical AI therapeutic companion engineered with Google Gemini, FastAPI, React TypeScript, and MongoDB Atlas. Features autonomous in-chat tool calling for CBT thought records and paced breathing, bi-directional voice (STT/TTS), 432Hz harmonic soundscapes, somatic tension heatmaps, and a 1-touch Panic SOS system.",
    agenticHighlights: [
      "Autonomous Tool Calling: Triggers interactive UI widgets in-dialogue (`[AGENT_ACTION:BREATHE]`, `[AGENT_ACTION:THOUGHT_RECORD]`, `[AGENT_ACTION:SOMATIC]`).",
      "Bi-Directional Voice & 432Hz Soundscapes: Speech-to-Text input with calibrated Text-to-Speech playback and generative sleep acoustics.",
      "Somatic Heatmap & CBT Record: Clickable 2D tension release guides and persistent 5-column cognitive restructuring worksheets.",
    ],
    tech: ["Google Gemini", "FastAPI (Render)", "React (TypeScript)", "MongoDB Atlas", "Web Audio API", "STT / TTS", "TailwindCSS"],
  },
  {
    title: "SmartRide Chennai (BikeRideShare)",
    subtitle: "AI & Road Corridor-Powered Urban Bike Pooling Platform",
    icon: Bike,
    accent: "aurora",
    status: "Live on Vercel + Render",
    liveUrl: "https://bike-ride-share.vercel.app/",
    github: "https://github.com/PARTHIBAKANNAN/BikeRideShare",
    image: "https://images.unsplash.com/photo-1775127458582-7a601385d361?auto=format&fit=crop&w=800&q=70",
    desc: "A daily office commute pooling platform tailored for Chennai's dense road corridors (OMR IT Expressway, GST Road, 100ft Road). Features turn-by-turn road polylines on Leaflet.js maps via OSRM, Google Gemini AI corridor vector matching, Women-Only Pink Rides, and 3-tap police SOS (112).",
    agenticHighlights: [
      "Gemini AI Corridor Matcher: Evaluates road vector overlaps and calculates route compatibility scores (0–100%) for zero-detour pickups.",
      "Turn-by-Turn Leaflet & OSRM Engine: Renders real road network polylines across 25+ Chennai tech hubs with 0 API billing dependencies.",
      "Women-Only Pink Rides & 3-Tap SOS: Safe commuter filter with direct 3-tap emergency call to 112 and 1-click WhatsApp ride sharing.",
    ],
    tech: ["Google Gemini AI", "Flask RESTX (Render)", "React (Vercel)", "Neon PostgreSQL", "Leaflet.js", "OSRM Engine", "JWT Auth"],
  },
  {
    title: "Sign Language Recognition & Speech AI",
    subtitle: "60 FPS Client-Side WebAssembly & Hand Landmark Classifier",
    icon: Hand,
    accent: "iris",
    status: "Live on GitHub Pages",
    liveUrl: "https://parthibakannan.github.io/SignLanguageRecognition/",
    github: "https://github.com/PARTHIBAKANNAN/SignLanguageRecognition",
    image: "https://images.unsplash.com/photo-1640550444366-b94e5752c479?auto=format&fit=crop&w=800&q=70",
    desc: "A real-time sign language interpreter translating webcam hand gestures into full A–Z alphabet characters and conversational phrases. Runs 100% client-side via Google MediaPipe WebAssembly (zero server costs; camera frames never leave device) with natural voice readout via Web Speech API, backed by a scikit-learn Random Forest model.",
    agenticHighlights: [
      "100% In-Browser 60 FPS WebAssembly: Real-time 21 3D hand landmark extraction with zero latency and privacy-preserving client execution.",
      "Smart Sentence Builder: Temporal majority-voting filter and debounce to eliminate frame flicker and assemble words fluidly.",
      "Natural Speech Output (TTS): Calibrated Web Speech API integration that vocalizes completed sign sentences instantly.",
    ],
    tech: ["MediaPipe WebAssembly", "scikit-learn (Random Forest)", "OpenCV", "Python", "JavaScript", "HTML5 Canvas", "GitHub Pages"],
  },
];

// ─────────────────────────────────────────────────────────────────────────
// PERSONAL R&D & DISCIPLINE
// ─────────────────────────────────────────────────────────────────────────
export const personalRD = [
  {
    title: "Multilingual Mastery & Continuous Learning Streak",
    icon: Trophy,
    status: "350+ Day Streak 🔥",
    desc: "Demonstrated daily cognitive discipline with a continuous 350+ day streak on Duolingo, accumulating 53,132+ XP in the Diamond League with 16 Top-3 finishes. Actively expanding linguistic capabilities across Japanese (14,200+ XP), Hindi (10,800+ XP), and German (3,300+ XP).",
    tech: ["350+ Day Streak 🔥", "53,132 XP", "Diamond League 💎", "Japanese (14.2k XP)", "Hindi (10.8k XP)", "German (3.3k XP)"],
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Algo Trading Agent (Claude MCP)",
    icon: LineChart,
    status: "In Development",
    desc: "A Model Context Protocol (MCP) server for on-demand market regime and volatility analysis — querying VIX levels, open interest clusters, and intraday sector heatmaps through natural language prompts. Feeds deterministic analytical context to quantitative trading engines.",
    tech: ["Claude MCP", "Python", "FYERS API", "In-Memory Delta Engine"],
    image: "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?auto=format&fit=crop&w=800&q=70",
  },
];
