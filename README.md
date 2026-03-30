# Klearpath Solutions - Consultancy Site

Next.js 16 marketing website replacing the current Wix site at klearpathsolutions.com. Includes an AI Readiness Assessment that captures leads into the [consultancy portal](https://github.com/dtsong/multi-tenant-portal).

## Quick Start

```bash
npm install
cp .env.example .env.local   # set PORTAL_API_URL
npm run dev                   # http://localhost:3000
```

To test lead capture end-to-end, run the portal on port 3001 first:
```bash
cd ../multi-tenant-portal/consultancy-portal && PORT=3001 npm run dev
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `SITE_URL` | Production | Domain for sitemap (e.g. `https://klearpathsolutions.com`) |
| `PORTAL_API_URL` | Yes | Portal URL for lead API (default: `http://localhost:3001`) |

## What This Site Does

### Pages

| Route | Purpose |
|-------|---------|
| `/` | Homepage with 6 service cards, differentiators, assessment CTA |
| `/assess` | 8-question AI Readiness Assessment with scoring and use case recommendations |
| `/services` | All 6 services with detailed MDX content |
| `/about` | Company story, values, team (Matthew Dillane, Marcus Wilson) |
| `/contact` | Contact form (wired to portal API), phone, email, location |
| `/blog` | Blog posts (MDX, auto-discovered) |
| `/case-studies` | Case studies (MDX, auto-discovered) |

### 6 Services

1. Data Engineering (Azure data platforms)
2. Security & Compliance (HIPAA, SOX, zero-trust)
3. AI-Accelerated Delivery (Copilot, Azure OpenAI)
4. Microsoft Platform (Azure, M365, Power Platform)
5. Data Visualization & BI (Power BI dashboards)
6. Process Improvement (Lean Six Sigma, Smartsheet)

### AI Readiness Assessment (`/assess`)

8 questions across 2 groups (Context + Readiness). Scores prospects on 4 dimensions:

- Data Readiness, AI Maturity, Compliance Posture, Organizational Readiness

Recommends top 3 use cases from 12 curated options for regulated industries. Results shown before any email gate. "Get Full Report" CTA captures the lead with full assessment metadata.

Assessment data: `src/lib/assessment-data.ts`

### Lead Capture Flow

```
Contact form or assessment → server action (src/app/actions/submit-lead.ts)
  → POST to portal /api/leads → stored in PostgreSQL → visible at portal /leads
```

## Tech Stack

Next.js 16 (App Router), Tailwind CSS v4, TypeScript, MDX (`next-mdx-remote/rsc` + `gray-matter`), `next-sitemap`

## Adding Content

Drop an MDX file in the right directory. No code changes needed.

**Blog post:** `src/content/blog/your-slug.mdx`
```yaml
---
title: "Post Title"
description: "Short description."
date: "2026-03-30"
author: "Klearpath Team"
tags: ["Tag1"]
---
```

**Case study:** `src/content/case-studies/your-slug.mdx`
```yaml
---
title: "Case Study Title"
description: "Short description."
client: "Client Name"
industry: "Industry"
services: ["Data Engineering"]
results: ["Result 1"]
---
```

**Service:** `src/content/services/your-slug.mdx`
```yaml
---
title: "Service Name"
description: "One-line description."
icon: "grid"
order: 7
---
```

Services auto-sort by `order`. New services automatically appear on `/services` and the homepage grid.

## Project Structure

```
src/
├── app/
│   ├── page.tsx                # Homepage
│   ├── assess/                 # AI Readiness Assessment
│   │   ├── page.tsx
│   │   └── AssessmentFlow.tsx  # Multi-step form + results
│   ├── actions/
│   │   └── submit-lead.ts     # Server action → portal API
│   ├── services/               # Services listing
│   ├── about/                  # Company info + team
│   ├── contact/                # Contact form + info
│   ├── blog/                   # Blog index + [slug]
│   └── case-studies/           # Case studies index + [slug]
├── components/                 # Header, Footer, Button, Card, etc.
├── content/                    # MDX content (auto-discovered)
│   ├── services/               # 6 service descriptions
│   ├── blog/                   # 2 blog posts
│   └── case-studies/           # 2 case studies
└── lib/
    ├── content.ts              # MDX reading utility
    └── assessment-data.ts      # Questions, scoring, 12 use cases
```

## Build & Deploy

```bash
npm run build   # builds site + generates sitemap
npm run start   # serves production build
```

Deployed on Vercel. Set `SITE_URL` and `PORTAL_API_URL` in Vercel environment variables.
