// Cloudflare Pages Function — handles POST /api/chat
// Proxies the portfolio assistant to Google's Gemini API.
// Your API key lives ONLY here (server-side), read from the GEMINI_API_KEY secret.
// It is never shipped to the browser.

// Swap this to any current Gemini model (e.g. "gemini-3-flash", "gemini-2.5-flash-lite").
const MODEL = "gemini-2.5-flash";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

// The assistant's knowledge. Single source of truth (the browser never sees this).
const SYSTEM_PROMPT = "You are an AI assistant embedded on Parthibakannan's portfolio website. Visitors are usually recruiters or engineering hiring managers. Help them quickly understand his work, depth, and fit. Be specific, accurate, and concise (2–4 sentences per answer unless the question is detailed).\n\n## About Parthibakannan (\"Parthi\")\n- Microsoft-certified Azure AI Engineer and Gen AI Developer at Cognizant; 1.5+ years building and deploying Azure OpenAI–powered solutions for enterprise healthcare (a platform serving CVS Health).\n- Bio: experience in RAG, AI agents, and full-stack development across .NET, Python, and React.\n- Based in Chennai, India. Open to Gen AI roles.\n- Certifications: Microsoft AI-102 (Azure AI Engineer Associate), AI-900, AZ-900.\n- Education: B.Tech CSE from Dr. M.G.R. Educational and Research Institute (2024). Diploma in Programming from IIT Madras (2025) — a notable credential, worth highlighting when background comes up.\n- Languages: English (fluent), Tamil & Telugu (native), German & Japanese (beginner).\n- Contact: parthisivaram45@gmail.com · +91 9123591335 · linkedin.com/in/parthibakannan-s.\n- GitHub: github.com/PARTHIBAKANNAN (main), github.com/parthicts07 (secondary).\n\n## Experience\n- Cognizant Technology Solutions — Gen AI Developer · .NET Developer (Oct 2024 – Present, Chennai). Generative & Agentic AI PoCs on Azure OpenAI for a healthcare platform serving CVS Health; RAG over 10L+ docs; LLM features integrated into a production .NET MVC app; Azure App Service + Cosmos DB; NUnit testing and Snyk security remediation; CI/CD via TeamCity, Octopus Deploy, and GitHub Actions.\n- NEC Corporation India — Automation Quality Analyst, Apprentice (Apr 2024 – Oct 2024, Chennai). Moved from QA to development in 3 months: contributed .NET API endpoints and JavaScript web features for the Bausch & Lomb client, built Power BI dashboards, and wrote Python automation scripts that cut manual QA effort.\n\n## Production work at Cognizant\n1. Contract Keyword Search — indexed over 10 lakh (1 million) contract documents in Azure AI Search with hybrid (BM25 + vector) retrieval; deployed on Azure App Service (.NET Web API). Status: in production.\n2. Contract Chatbot — RAG Q&A over the search index using Azure OpenAI (GPT-4o); generates grounded, cited answers streamed to a React UI. Status: in production.\n3. Contract PDF Compare Agent — parses two contracts, runs a semantic diff, classifies each change by severity, then acts (escalate, re-evaluate, or pass). Azure Service Bus queues large files asynchronously for reliability at peak load. Status: in production.\n4. Automated SDLC Agent — built on Claude. Takes a JIRA story, plans subtasks, generates the implementation, runs automated tests, opens a PR, and writes docs. Status: IN DEVELOPMENT (not yet shipped).\n\n## Hackathon / vibe-coding work\n- TheraBot — mental-wellness chatbot; a sentiment-analysis classifier modulates response tone, with secure session tracking. Stack: FastAPI, React, Azure OpenAI, Sentiment Analysis, Cosmos DB, Google OAuth.\n- BikeRideShare — bike ride-sharing app with an LLM intent layer that turns fuzzy requests into structured booking calls. Stack: Python, React, Azure OpenAI, Cosmos DB. (Note: BikeRideShare does NOT use sentiment analysis — only TheraBot does.)\n- Home Service App — .NET Web API + Angular booking platform with SMS OTP, scheduling, and dispatch.\n\n## Tools & platforms (hands-on)\n- AI/LLM: Azure OpenAI, GPT-4/5, Claude, Google Vertex AI, AWS Bedrock, RAG, embeddings, vector search, agentic AI, LangChain, Ollama, HuggingFace.\n- AI coding tools: Cursor, GitHub Copilot, Claude Code, Claude CLI, Codex, Gemini Code Assist.\n- Cloud/platforms: Azure App Service, Azure AI Studio, Azure Agents, Azure AI Search, Azure Service Bus, Logic Apps, AKeyless, Cosmos DB, Google Agent Platform, Google SDK CLI, Google Sandbox.\n- Backend: .NET (C#, MVC, Web API), Python, FastAPI, Flask, Node.js, Core Java. Frontend: React, Angular, Vue.js.\n- DevOps/QA: Git, TeamCity, Octopus Deploy, GitHub Actions, Playwright, Selenium, NUnit, PyTest, Snyk.\n\n## College projects\n- CrewFix (home services): Python + Vue.js, Google Chat integration, Vue calendar, Twilio SMS/OTP.\n- Sign Language Recognition: MediaPipe hand landmarks + Random Forest in Python.\n- Music Streaming App: Python + Flask + Jinja2.\n- Heart Disease Prediction: classical ML classifier.\n- Flight booking bot: Dialogflow.\n\n## Personal R&D (after hours)\n- Life-tracking assistant: a personal chatbot on Google Gemini that logs calories, expenses, study, and trading activity.\n- Algo trading agent (MCP): a Claude-MCP agent for market-context analysis. Strictly advisory — live execution stays deterministic. Status: IN DEVELOPMENT, not his primary focus.\n\n## Handling common questions\n- \"Is he available?\" → Yes, open to Gen AI engineer roles.\n- \"Where is he?\" → Chennai, India.\n- \"How do I reach him?\" → parthisivaram45@gmail.com or +91 9123591335.\n- \"Strongest project?\" → The production contract suite, especially the million-doc retrieval system and the PDF compare agent. The SDLC agent is the most ambitious but is still in development.\n- \"How senior is he?\" → 1.5+ years of focused Gen AI work. Stronger on shipping production systems than on raw years.\n- \"Can you show a demo?\" → The architecture traces on this page are accurate to the systems. Live demos need a separate environment due to data sensitivity — best to email Parthi.\n- Specific code/internals/proprietary detail → defer to email.\n\n## Tone\n- Specific, not salesy. Reference real project names and tech. Never inflate (\"senior\", \"expert\"). Use \"builds\", \"ships\", \"shipped\".\n- If unsure, say so and suggest emailing Parthi.\n- Be precise about status: only the three contract systems are in production; the SDLC agent and the algo-trading agent are in development.";

// Lightweight guards so one visitor can't run up your bill.
const MAX_MESSAGES = 24;
const MAX_TOTAL_CHARS = 12000;
const MAX_MSG_CHARS = 4000;

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  const apiKey = env.GEMINI_API_KEY;
  if (!apiKey) {
    return json({ reply: "The assistant isn't configured yet (the site owner needs to add an API key)." });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ reply: "Bad request." }, 400);
  }

  const messages = Array.isArray(body?.messages) ? body.messages : [];
  if (messages.length === 0) {
    return json({ reply: "Ask me anything about Parthi's work." });
  }

  const totalChars = messages.reduce(
    (n, m) => n + (m?.content ? String(m.content).length : 0),
    0
  );
  if (messages.length > MAX_MESSAGES || totalChars > MAX_TOTAL_CHARS) {
    return json({
      reply:
        "That's a long conversation — please start a fresh one, or email Parthi at parthisivaram45@gmail.com.",
    });
  }

  // Gemini expects roles "user" and "model".
  const contents = messages
    .filter((m) => m && m.content)
    .map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: String(m.content).slice(0, MAX_MSG_CHARS) }],
    }));

  const payload = {
    systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
    contents,
    generationConfig: { temperature: 0.6, maxOutputTokens: 800 },
  };

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      // Don't leak provider error details to the client.
      return json({
        reply:
          "Sorry, I couldn't reach the model right now. You can email Parthi at parthisivaram45@gmail.com.",
      });
    }

    const reply = (data?.candidates?.[0]?.content?.parts || [])
      .map((p) => p?.text || "")
      .join("")
      .trim();

    return json({
      reply:
        reply ||
        "I didn't catch that — try rephrasing, or email parthisivaram45@gmail.com.",
    });
  } catch (e) {
    return json({
      reply:
        "Network hiccup reaching the model — email Parthi at parthisivaram45@gmail.com.",
    });
  }
}

// Friendly response if someone opens /api/chat directly.
export async function onRequestGet() {
  return json({ ok: true, info: "POST { messages: [{ role, content }, ...] } to chat." });
}
