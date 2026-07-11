# Parthibakannan S — Portfolio

A single-page portfolio (React + Vite) with a built-in AI assistant and a light/dark
theme. The assistant runs on **Cloudflare Workers AI** (Llama 3.3 70B), called through a
**Cloudflare Pages Function** — no external API keys, no third-party billing, free-tier
eligible.

- Frontend: React 18 + Vite, composed from `src/Portfolio.jsx` + `src/components/*.jsx`,
  with content in `src/data/*.js` and the theme system in `src/lib/*.js`.
- Assistant: `functions/api/chat.js` → Workers AI via the `AI` binding.
- Assets: `public/portrait.jpg`, `public/resume.pdf` (swap these to update them).
- Hosting: Cloudflare Pages (free, unlimited bandwidth).

---

## What you need (all free)

1. **Node.js 20+** installed locally.
2. A **GitHub** account.
3. A **Cloudflare** account.

That's it. No API keys, no payment methods — the chat assistant uses Cloudflare's
built-in Workers AI, which has a free daily allowance more than sufficient for portfolio
traffic.

---

## Step 1 — Run it locally

```bash
npm install
npm run dev          # frontend at http://localhost:5173
```

To test the **chatbot** locally (it needs the function runtime):

```bash
npm run build
npx wrangler pages dev dist
```

Open the URL wrangler prints. The `AI` binding is picked up from `wrangler.toml`
automatically — no `.dev.vars` or secrets needed.

---

## Step 2 — Push to GitHub

```bash
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

---

## Step 3 — Deploy on Cloudflare Pages

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** tab →
   **Connect to Git**.
2. Authorize GitHub and select your repo.
3. Build settings:
   - **Framework preset:** React (Vite)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**. The first build takes a minute.

Cloudflare automatically picks up the `functions/` folder, so `/api/chat` goes live with
the site.

---

## Step 4 — Enable the Workers AI binding

The chatbot won't reply until you do this (one-time setup).

1. Open your new Pages project → **Settings** → **Functions** → **AI bindings**
   (sometimes shown under "Bindings" → "AI").
2. **Add binding**:
   - Variable name: `AI`
   - Service: leave default (Workers AI)
3. Save. Then **Deployments** → on the latest deployment, click **⋮** → **Retry
   deployment** so the function picks up the binding.

---

## Step 5 — You're live

Visit `https://<your-project>.pages.dev`, click the floating chat bubble, and try a
question. If it replies, you're done. If it says "isn't wired up yet," recheck Step 4.

---

## Step 6 — Custom domain (optional)

Pages project → **Custom domains** → **Set up a domain**. If you buy a domain through
Cloudflare Registrar, DNS is automatic. This is the only part that costs money, and
it's optional — the `.pages.dev` URL is free forever.

---

## Updating the site later

- **Projects / experience / stack / awards:** edit the arrays in `src/data/content.js`
  and `src/data/projects.js` — no component code needed for text changes.
- **A section's layout:** edit the matching file in `src/components/`.
- **Theme colors:** edit the light/dark variable blocks in `src/lib/theme.js`.
- **Photo:** replace `public/portrait.jpg` (keep the name).
- **Résumé:** replace `public/resume.pdf` (keep the name).
- **Assistant's knowledge:** edit `SYSTEM_PROMPT` in `functions/api/chat.js` — keep it in
  sync with `src/data/*.js` so the chatbot doesn't contradict the page.
- **AI model:** change `MODEL` in `functions/api/chat.js` to any model from
  https://developers.cloudflare.com/workers-ai/models/. Redeploy.

Commit and push — Cloudflare redeploys automatically.

---

## Project structure

```
.
├── functions/
│   └── api/
│       └── chat.js          # POST /api/chat  → Workers AI (via env.AI binding)
├── public/
│   ├── portrait.jpg         # headshot
│   ├── resume.pdf           # downloadable résumé
│   └── favicon.svg          # monogram favicon
├── src/
│   ├── Portfolio.jsx        # composition — renders every section in order + global styles
│   ├── main.jsx             # React entry
│   ├── lib/
│   │   ├── theme.js         # design tokens `t` + the light/dark CSS variable block
│   │   ├── useThemeToggle.js
│   │   └── motion.js        # prefers-reduced-motion flag
│   ├── data/
│   │   ├── content.js       # experience, stack, certifications, awards, leadership, …
│   │   └── projects.js      # production work, hackathon builds, college work, personal R&D
│   └── components/          # one file per section (Nav, Hero, Credentials, Achievements,
│                             # Experience, SelectedWork, Builds, Foundations, Leadership,
│                             # AfterHours, AIChatbot, Stack, Contact, Footer, …)
├── index.html
├── package.json
├── vite.config.js
├── wrangler.toml            # Cloudflare config — declares the AI binding
└── .nvmrc                   # Node 20 for the Cloudflare build
```
