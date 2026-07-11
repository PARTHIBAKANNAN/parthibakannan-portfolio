import { Building2, Briefcase, Users, GraduationCap, Mic } from "lucide-react";

export const aboutSummary = "Microsoft-certified Azure AI Engineer and Gen AI Developer at Cognizant with 1.5+ years building and deploying Azure OpenAI–powered solutions for enterprise healthcare. I've designed RAG pipelines that index and query 10L+ documents, built agentic AI workflows, and integrated LLM features into production .NET MVC systems serving CVS Health — full-stack across Python (FastAPI, Flask) and .NET (C#, MVC, Web API), with hands-on Azure deployment. IIT Madras Diploma in Programming.";

export const experience = [
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

export const languages = ["English — Fluent", "Tamil — Native", "Telugu — Native", "German — Beginner", "Japanese — Beginner"];

export const stack = [
  { group: "AI / LLM", items: ["Azure OpenAI", "GPT-4 / 5", "Claude", "Google Vertex AI", "AWS Bedrock", "RAG", "Embeddings", "Vector Search", "Agentic AI", "Prompt Engineering", "LangChain", "Ollama", "HuggingFace", "MediaPipe", "scikit-learn"] },
  { group: "AI coding tools", items: ["Cursor", "GitHub Copilot", "Claude Code", "Claude CLI", "Codex", "Gemini Code Assist"] },
  { group: "Cloud & platforms", items: ["Azure App Service", "Azure AI Studio", "Azure Agents", "Azure AI Search", "Azure Service Bus", "Logic Apps", "AKeyless", "Cosmos DB", "Google Agent Platform", "Google SDK CLI", "Google Sandbox"] },
  { group: "Backend", items: [".NET (C# · MVC · Web API)", "Python", "FastAPI", "Flask", "Node.js", "Core Java", "REST", "SSE"] },
  { group: "Frontend", items: ["React", "Angular", "Vue.js", "Jinja2", "Tailwind"] },
  { group: "Data", items: ["SQL Server", "Cosmos DB", "SQLite", "PostgreSQL", "Vector indexes"] },
  { group: "DevOps & QA", items: ["Git", "TeamCity", "Octopus Deploy", "GitHub Actions", "Playwright", "Selenium", "NUnit", "PyTest", "Snyk"] },
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
