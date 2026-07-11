import {
  FileText, Layers, Database, Search, FileSearch, MessageCircle, Boxes, BrainCircuit,
  Send, Diff, Filter, ShieldCheck, Zap, Notebook, Workflow, Code2, FlaskConical,
  GitCommit, Heart, Bike, Hammer, Hand, Music, Activity, Plane, Wand2, LineChart, BarChart3,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────
// PROJECT DATA
// ─────────────────────────────────────────────────────────────────────────
export const productionWork = [
  {
    id: "sdlc-agent", title: "SDLC Agentic AI Tool", status: "In development",
    eyebrow: "Agentic development", tagline: "From JIRA story to merged branch — without a human in the boring parts.",
    problem: "Engineers were spending hours on small, well-scoped tickets that read more like specifications than design problems.",
    approach: "An agent built on Claude: fetch a JIRA story, plan subtasks, generate the implementation, run automated end-to-end tests, open a PR, and write the documentation. A human approves the merge; the agent handles everything before that.",
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
];

export const hackathonWork = [
  { title: "TheraBot", icon: Heart, accent: "iris",
    desc: "Mental-wellness companion with mood-aware responses. A sentiment classifier gates the conversation tone — supportive when distress is detected, conversational otherwise. Secure session tracking on Cosmos DB.",
    tech: ["FastAPI", "React", "Azure OpenAI", "Sentiment Analysis", "Cosmos DB", "Google OAuth"],
    videoUrl: "https://drive.google.com/file/d/1N5gZzYloBTSR6ikDFGc8NInlk8w0Cofm/preview" },
  { title: "BikeRideShare", icon: Bike, accent: "aurora",
    desc: "A two-wheeler ride-sharing app with an LLM intent layer that turns fuzzy ride requests into structured booking calls.",
    tech: ["Python", "React", "Azure OpenAI", "Cosmos DB"] },
  { title: "Home Service App", icon: Hammer, accent: "iris",
    desc: "End-to-end home-services booking with OTP-based auth, scheduling, technician dispatch, and SMS notifications.",
    tech: [".NET Web API", "Angular", "SMS OTP", "SQL Server"] },
];

export const collegeWork = [
  { title: "CrewFix", icon: Workflow, desc: "Home-services platform with Google Chat integration, Vue calendars, Twilio OTP, and SMS notifications.", tech: ["Python", "Vue.js", "Twilio", "Google Chat API"] },
  { title: "Sign Language Recognition", icon: Hand, desc: "Real-time hand-gesture classifier using MediaPipe landmarks and a Random Forest model.", tech: ["MediaPipe", "scikit-learn", "OpenCV", "Python"] },
  { title: "Music Streaming App", icon: Music, desc: "Full-stack streaming app with playlists, search, and a Jinja2-templated frontend.", tech: ["Python", "Flask", "Jinja2", "SQLite"] },
  { title: "Heart Disease Prediction", icon: Activity, desc: "Classical-ML classifier on clinical features with feature-importance and accuracy reporting.", tech: ["scikit-learn", "pandas", "Python"] },
  { title: "Flight Booking Bot", icon: Plane, desc: "Conversational booking flow with intent and entity extraction via Dialogflow.", tech: ["Dialogflow", "Python", "REST"] },
];

export const personalRD = [
  { title: "Intraday Trade Dashboard", icon: BarChart3, status: null,
    desc: "A live trading dashboard streaming real-time intraday market data through the Fyers API — price feeds, open positions, and P&L, visualized for fast at-a-glance decisions during the trading session.",
    tech: ["Fyers API", "Python", "React", "WebSockets", "Data Visualization"] },
  { title: "Life-tracking assistant", icon: Wand2, status: null,
    desc: "A personal chatbot built on Google Gemini that logs calories, expenses, study time, and trading activity through natural conversation. One source of truth for my day.",
    tech: ["Google Gemini", "Function calling", "Sheets API"] },
  { title: "Algo trading agent (MCP)", icon: LineChart, status: "In development",
    desc: "A Claude-MCP agent for on-demand market-context analysis — VIX regime, OI, sector heatmaps. Advisory only; live execution stays deterministic. Still being built.",
    tech: ["Claude MCP", "Python", "Alice Blue API"] },
];
