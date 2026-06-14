# Parthibakannan S — Portfolio

A single-page portfolio (React + Vite) with a built-in AI assistant. The assistant
runs on **Google Gemini**, called through a **Cloudflare Pages Function** so your API
key stays server-side and never reaches the browser.

- Frontend: React 18 + Vite, one component (`src/Portfolio.jsx`).
- Assistant: `functions/api/chat.js` → Gemini API.
- Assets: `public/portrait.jpg`, `public/resume.pdf` (swap these to update them).
- Hosting: Cloudflare Pages (free, unlimited bandwidth).

---

## What you need (all free)

1. **Node.js 20+** installed locally.
2. A **GitHub** account.
3. A **Cloudflare** account.
4. A **Gemini API key** (from your Google / GCP account — see Step 1).

---

## Step 1 — Get a Gemini API key

Easiest route:

1. Go to **https://aistudio.google.com/apikey**.
2. Click **Create API key** and pick your existing **Google Cloud project** (this ties
   usage and billing to your GCP account).
3. Copy the key (starts with `AIza...`). You'll paste it into Cloudflare in Step 5.

Recommended hardening (in the Google Cloud Console → **APIs & Services → Credentials**):

- **Restrict the key** to the *Generative Language API* only.
- Set a **budget alert** (Billing → Budgets & alerts) so you're notified of any spend.
- Gemini 2.5 Flash is very cheap, and a portfolio's traffic typically stays inside the
  free tier. The function also caps message size/count to prevent abuse.

> Prefer **Vertex AI** with a service account instead of an API key? That works too,
> but the function needs OAuth instead of a key — ask and it can be swapped.

---

## Step 2 — Run it locally (optional)

```bash
npm install
npm run dev          # frontend at http://localhost:5173
```

To test the **chatbot** locally (it needs the function runtime):

```bash
cp .dev.vars.example .dev.vars      # then put your real key in .dev.vars
npm run build
npx wrangler pages dev dist
```

Open the URL wrangler prints. `.dev.vars` is gitignored — your key won't be committed.

---

## Step 3 — Push to GitHub

```bash
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

---

## Step 4 — Deploy on Cloudflare Pages

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** tab →
   **Connect to Git**.
2. Authorize GitHub and select your repo.
3. Build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**. The first build takes a minute.

Cloudflare automatically picks up the `functions/` folder, so `/api/chat` goes live with
the site.

---

## Step 5 — Add your Gemini key as a secret

The chatbot won't work until you do this.

1. Open your new Pages project → **Settings** → **Variables and secrets**.
2. **Add variable**:
   - Name: `GEMINI_API_KEY`
   - Value: your `AIza...` key
   - Mark it as a **Secret** (encrypted), for the **Production** environment.
3. Go to **Deployments** → **Retry deployment** (or push a new commit) so the function
   picks up the secret.

---

## Step 6 — You're live

Visit `https://<your-project>.pages.dev`, scroll to **Ask the assistant**, and try a
question. If it replies, you're done. If it says it "isn't configured," recheck Step 5.

---

## Step 7 — Custom domain (optional)

Pages project → **Custom domains** → **Set up a domain**. If you buy a domain through
Cloudflare Registrar (e.g. `parthibakannan.in`), DNS is automatic. This is the only part
that costs money, and it's optional — the `.pages.dev` URL is free forever.

---

## Updating the site later

- **Text / projects / styling:** edit `src/Portfolio.jsx`, commit, push — Cloudflare
  redeploys automatically.
- **Photo:** replace `public/portrait.jpg` (keep the name).
- **Résumé:** replace `public/resume.pdf` (keep the name).
- **Assistant's knowledge:** edit `SYSTEM_PROMPT` in `functions/api/chat.js`.
- **Gemini model:** change `MODEL` in `functions/api/chat.js` (e.g. to a newer flash
  model). Redeploy.

---

## Project structure

```
.
├── functions/
│   └── api/
│       └── chat.js        # POST /api/chat  → Gemini  (key stays here)
├── public/
│   ├── portrait.jpg       # headshot
│   └── resume.pdf         # downloadable résumé
├── src/
│   ├── Portfolio.jsx      # the whole site
│   └── main.jsx           # React entry
├── index.html
├── package.json
├── vite.config.js
├── .nvmrc                 # Node 20 for the Cloudflare build
└── .dev.vars.example      # local-only key template
```
