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
    eyebrow: "Real-Time Quant · 210+ Stocks · Google Gemini Copilot",
    tagline: "Institutional quantitative momentum scanner monitoring 210+ stocks with real-time HTML5 canvas charts, a 5-tier filter matrix, Google Gemini 3.6 Flash AI Copilot, and 250ms WebSocket state streaming.",
    status: "Live Terminal",
    liveUrl: "https://trading-dashboard-1.duckdns.org/",
    github: "https://github.com/PARTHIBAKANNAN/TradeDashBoard",
    image: "/assets/pulsehunter.jpg",
    problem: "Retail and active traders miss rapid institutional breakouts and sector rotations due to lagging multi-screen UIs, ungrounded speculation, and sluggish broker web interfaces across 200+ symbols.",
    approach: "Engineered a low-latency Python FastAPI Backend-For-Frontend (BFF) connecting to FYERS v3 millisecond WebSocket binary ticks for 210+ Indian equity stocks. In-memory math calculates Intraday Relative Strength (IRS), Opening Range Breakouts (ORB C1–C4), and day range mapping. An embedded Google Gemini 3.6 Flash AI Copilot provides live natural language market regime analysis, streaming thread-safe 250ms JSON deltas to a high-frequency React canvas chart UI.",
    outcome: "Sub-second live streaming and interactive canvas charts across 210+ stocks. High-performance canvas range rendering with zero broker API credential exposure on the client.",
    metrics: [
      { label: "Tracked Equities", value: "210+ Stocks & Charts" },
      { label: "AI Copilot", value: "Gemini 3.6 Flash" },
      { label: "Stream Latency", value: "250ms Delta" },
      { label: "Math Engines", value: "IRS · ORB · Range %" },
    ],
    tech: ["Google Gemini 3.6 Flash", "FYERS API v3", "FastAPI (Python)", "WebSockets", "React", "HTML5 Canvas Charts", "In-Memory Delta Engine", "TailwindCSS"],
    stages: [
      { icon: Radio, label: "Ingest", sub: "210+ symbols ms ticks", tech: "FYERS WebSocket BFF" },
      { icon: Activity, label: "Compute", sub: "IRS + ORB + Range %", tech: "FastAPI Engine" },
      { icon: BrainCircuit, label: "Analyze", sub: "Market regime & insights", tech: "Gemini 3.6 Flash" },
      { icon: Send, label: "Stream", sub: "250ms JSON state deltas", tech: "WebSocket Stream" },
      { icon: BarChart3, label: "Render", sub: "210+ interactive charts", tech: "React Canvas UI" },
    ],
  },
  {
    id: "nukebox",
    title: "NUKEBOX · Autonomous Derivatives Terminal",
    eyebrow: "Autonomous Derivatives · 21 Deployed Strategies",
    tagline: "Autonomous quantitative options execution engine with 21 deployed intraday strategies, Black-Scholes Greeks sensitivity engine, extensive 365-day (1-year) backtest verification, and automated Telegram risk gates.",
    status: "Live Terminal",
    liveUrl: "https://trading-dashboard-1.duckdns.org/options-simulator/",
    github: "https://github.com/PARTHIBAKANNAN/OptionsSimulator",
    image: "/assets/nukebox.jpg",
    problem: "Manual options trading suffers from emotional hesitation, flawed risk-to-reward discipline, and inability to evaluate multiple non-linear options Greeks concurrently across diverse market volatility regimes.",
    approach: "Architected a full-stack derivatives trading platform running 21 deployed intraday algorithmic strategies (Breakouts, Mean-Reversion, IV Crush, Gamma Scalping, and Delta-Neutral Spreads) against live NIFTY options data. Computes real-time Black-Scholes Greeks (Delta, Gamma, Theta, Vega), enforces automated Stop-Loss, Take-Profit, and Time-Exit risk controls, and routes instant execution signals through a Telegram Bot and Supabase audit database.",
    outcome: "Fully simulated paper trading environment backtested on 365 days (1 full year) of 1-minute historical candle data across all 21 strategies with automated risk controls and sub-second signal dispatch.",
    metrics: [
      { label: "Deployed Strategies", value: "21 Quant Strategies" },
      { label: "Backtest Verification", value: "365 Days (1-Year Data)" },
      { label: "Pricing Engine", value: "Black-Scholes & Greeks" },
      { label: "Execution & Audit", value: "Telegram & Supabase" },
    ],
    tech: ["Python", "FastAPI", "React", "Black-Scholes Engine", "Telegram Bot API", "Supabase", "FYERS API v3", "PyTest", "Chart.js"],
    stages: [
      { icon: LineChart, label: "Feed Ingest", sub: "Live NIFTY 1-min ticks", tech: "FYERS API" },
      { icon: Workflow, label: "Strategy Matrix", sub: "21 Deployed Strategies", tech: "Quant Core" },
      { icon: Gauge, label: "Pricing & Greeks", sub: "Delta/Gamma/Theta/Vega", tech: "Black-Scholes" },
      { icon: ShieldCheck, label: "Risk & Gate", sub: "SL/TP/Time & Telegram", tech: "Telegram Bot API" },
      { icon: Database, label: "Execution & Audit", sub: "365-day backtested DB", tech: "Supabase DB" },
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
    desc: "A futuristic, autonomous desktop AI companion built in PyQt6 featuring a Cyberpunk Lavender Iron Man Arc Reactor HUD, hands-free Voice Activity Detection (VAD), biometric speaker verification, <100ms instant Windows app launcher, and dual cognitive engine (Google Gemini 3.6 Flash + Ollama local LLM failover).",
    agenticHighlights: [
      "Cyberpunk Arc Reactor HUD & Voice VAD: Hardware-accelerated PyQt6 transparent HUD with real-time waveform spectrum and non-blocking sounddevice VAD listening.",
      "Biometric Voice Auth: Spectral centroid & ZCR acoustic feature verification enrolling Parthi's voice profile with passcode challenge for unauthorized voices.",
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
    desc: "A clinical AI therapeutic companion engineered with Google Gemini, FastAPI, React TypeScript, and MongoDB Atlas. Features autonomous in-chat tool calling for CBT thought records and breathing pacing, bi-directional voice (STT/TTS), 432Hz harmonic soundscapes, somatic tension heatmaps, and a 1-touch Panic SOS system.",
    agenticHighlights: [
      "Autonomous Tool Calling: Triggers interactive UI widgets in-dialogue (`[AGENT_ACTION:BREATHE]`, `[AGENT_ACTION:THOUGHT_RECORD]`, `[AGENT_ACTION:SOMATIC]`).",
      "Bi-Directional Voice & 432Hz Soundscapes: Speech-to-Text input with soothing calibrated Text-to-Speech playback and generative sleep acoustics.",
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
    desc: "A daily office commute pooling platform tailored for Chennai's dense road corridors (OMR, GST Road, 100ft Road). Features turn-by-turn road polylines on Leaflet.js maps via OSRM, Google Gemini AI corridor vector matching, Women-Only Pink Rides, and 3-tap police SOS (112).",
    agenticHighlights: [
      "Gemini AI Corridor Matcher: Evaluates road vector overlaps and calculates compatibility scores (0–100%) for zero-detour pickups.",
      "Turn-by-Turn Leaflet & OSRM Engine: Renders real road network polylines across 25+ Chennai tech hubs with 0 API billing dependencies.",
      "Women-Only Pink Rides & 3-Tap Police SOS: Safe commuter filter with direct 3-tap emergency call to 112 and 1-click WhatsApp ride sharing.",
    ],
    tech: ["Google Gemini AI", "Flask RESTX (Render)", "React (Vercel)", "Neon PostgreSQL", "Leaflet.js", "OSRM Engine", "JWT Auth"],
  },
  {
    title: "Sign Language Recognition",
    subtitle: "Real-Time Computer Vision & Hand Gesture Interpreter",
    icon: Hand,
    accent: "iris",
    status: "Live on GitHub Pages",
    liveUrl: "https://parthibakannan.github.io/SignLanguageRecognition/",
    github: "https://github.com/PARTHIBAKANNAN/SignLanguageRecognition",
    image: "https://images.unsplash.com/photo-1640550444366-b94e5752c479?auto=format&fit=crop&w=800&q=70",
    desc: "An accessible real-time sign language interpreter translating webcam hand gestures into full A–Z alphabet characters and words. Uses Google MediaPipe for 21 3D hand landmark extraction combined with a trained Random Forest ML classifier for instantaneous visual feedback.",
    agenticHighlights: [
      "MediaPipe 21-Landmark Vector Pipeline: Extracts 3D hand coordinates (x, y, z) in real time at 30+ FPS.",
      "Random Forest Gesture Classifier: Predicts alphabet letters with high accuracy across varying lighting conditions.",
      "Interactive Browser Experience: Deployed live on GitHub Pages with instant webcam camera feeds.",
    ],
    tech: ["MediaPipe", "scikit-learn (Random Forest)", "OpenCV", "Python", "JavaScript", "HTML5 Canvas", "GitHub Pages"],
  },
  {
    title: "Home Service App",
    subtitle: "Enterprise Dispatch & Technician Booking Platform",
    icon: Hammer,
    accent: "aurora",
    status: "Hackathon Sprint",
    image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=800&q=70",
    desc: "End-to-end home-services booking platform featuring OTP-based authentication, interactive service scheduling calendars, technician category dispatch, and automated SMS notifications — built with .NET Web API, Angular, and SQL Server.",
    tech: [".NET Web API", "Angular", "SMS OTP", "SQL Server", "RESTful Architecture"],
  },
];

// ─────────────────────────────────────────────────────────────────────────
// COLLEGE & FOUNDATIONAL WORK
// ─────────────────────────────────────────────────────────────────────────
export const collegeWork = [
  {
    title: "Sign Language Recognition", icon: Hand,
    desc: "Real-time sign-language interpreter for the full A–Z alphabet via webcam. A 21-landmark MediaPipe vector extraction pipeline paired with a Random Forest classifier deployed on GitHub Pages.",
    tech: ["MediaPipe", "scikit-learn", "OpenCV", "Python", "GitHub Pages"],
    image: "https://images.unsplash.com/photo-1640550444366-b94e5752c479?auto=format&fit=crop&w=800&q=70",
    liveUrl: "https://parthibakannan.github.io/SignLanguageRecognition/",
    github: "https://github.com/PARTHIBAKANNAN/SignLanguageRecognition"
  },
  {
    title: "CrewFix", icon: Workflow,
    desc: "Home-services booking platform with a Flask backend and Vue.js calendars for scheduling. Twilio handles OTP verification and SMS notifications end-to-end, with Google Chat API integration for service-team coordination.",
    tech: ["Python", "Flask", "Vue.js", "Twilio", "Google Chat API"],
    image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=800&q=70",
    github: "https://github.com/PARTHIBAKANNAN/CrewFix-HomeServiceApp"
  },
  {
    title: "Music Streaming App", icon: Music,
    desc: "Full-stack Flask streaming platform: users register, build playlists, and rate songs; creators upload albums and tracks. Server-rendered with Jinja2 templates and Flask-Login-backed auth, on SQLite.",
    tech: ["Python", "Flask", "Flask-SQLAlchemy", "Flask-Login", "Jinja2", "SQLite"],
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=70",
    github: "https://github.com/PARTHIBAKANNAN/MusicStreamingApp"
  },
  {
    title: "Heart Disease Prediction", icon: Activity,
    desc: "Classical-ML classifier trained on clinical features (age, cholesterol, blood pressure, and related indicators) to flag heart-disease risk, with feature-importance and accuracy reporting to keep the model's reasoning inspectable.",
    tech: ["scikit-learn", "pandas", "Python"],
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=70"
  },
  {
    title: "Flight Booking Bot", icon: Plane,
    desc: "Conversational flight-booking flow that extracts intent and entities (origin, destination, dates) from natural language via Dialogflow, then walks the user through a structured booking confirmation.",
    tech: ["Dialogflow", "Python", "REST"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=70",
    github: "https://github.com/PARTHIBAKANNAN/FlightTicketBookingBot"
  },
];

// ─────────────────────────────────────────────────────────────────────────
// PERSONAL R&D & COGNITIVE ARENA
// ─────────────────────────────────────────────────────────────────────────
export const personalRD = [
  {
    title: "Duolingo 350+ Day Streak & Chess Mastery",
    icon: Trophy,
    status: "350+ Day Streak 🔥",
    desc: "Daily cognitive training and multilingual discipline: 53,132+ Total XP in Duolingo's Diamond League with 16 Top-3 finishes. 710 Elo Rating in Duolingo Chess (24,077 XP) focusing on rapid tactical visualization, endgame calculations, and strategic pattern recognition.",
    tech: ["350+ Day Streak 🔥", "53,132 XP", "Diamond League 💎", "710 Chess Elo", "Japanese (14.2k XP)", "Hindi (10.8k XP)", "German (3.3k XP)"],
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Tactical & Open-World Gaming Arena",
    icon: Gamepad2,
    status: "PC & Mobile",
    desc: "Passionate gamer sharpening split-second reflexes, squad coordination, and spatial resource management across tactical and racing titles: BGMI (Battlegrounds Mobile India squad rotation & callouts), GTA 5 (complex open-world simulation), and Need for Speed: Most Wanted (high-speed pursuit mechanics).",
    tech: ["BGMI (Squad Tactics)", "GTA 5", "NFS: Most Wanted", "Spatial Awareness", "Reflex Conditioning"],
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Algo Trading Agent (MCP)",
    icon: LineChart,
    status: "In Development",
    desc: "A Claude-MCP agent for on-demand market-context analysis — VIX regime, open interest, sector heatmaps — surfaced through natural-language queries. Advisory only; live order execution stays deterministic and outside the agent's control.",
    tech: ["Claude MCP", "Python", "FYERS API", "In-Memory Delta Engine"],
    image: "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?auto=format&fit=crop&w=800&q=70",
  },
];
