# Klearpath Consultancy Site

Enterprise marketing website for Klearpath — a data engineering and security consultancy. Built with Next.js, Tailwind CSS, and MDX.

## Tech Stack

- **Next.js 16** — App Router, static generation
- **Tailwind CSS v4** — CSS-first configuration
- **MDX** — `next-mdx-remote/rsc` + `gray-matter` for content
- **TypeScript** — strict mode
- **next-sitemap** — auto-generated sitemap.xml and robots.txt

## Local Development

```bash
npm install
cp .env.example .env.local   # then edit PORTAL_API_URL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Running with the Portal (full lead capture flow)

The contact form and assessment tool POST leads to the [consultancy-portal](https://github.com/dtsong/multi-tenant-portal). To test the full flow locally:

1. Start the portal on port 3001: `cd ../multi-tenant-portal/consultancy-portal && PORT=3001 npm run dev`
2. Set `PORTAL_API_URL=http://localhost:3001` in this project's `.env.local`
3. Start this site: `npm run dev`
4. Submit the contact form or complete the assessment — leads appear in the portal at `/leads`

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `SITE_URL` | Production | Your domain for sitemap generation (e.g. `https://klearpath.com`) |
| `PORTAL_API_URL` | Yes | Consultancy portal URL for lead capture API (e.g. `http://localhost:3001`) |

## Build

```bash
npm run build   # builds site + generates sitemap
npm run start   # serves production build locally
```

## AI Readiness Assessment

The site includes an 8-question AI Readiness Assessment at `/assess` that:

- Scores prospects across 4 dimensions: Data Readiness, AI Maturity, Compliance Posture, Organizational Readiness
- Recommends top 3 AI use cases from 10 curated options for regulated industries
- Shows results before any email gate (value first)
- Captures leads via "Get Full Report" CTA → posts to portal API with assessment metadata

Assessment data (questions, scoring, use cases) lives in `src/lib/assessment-data.ts`.

## Project Structure

```
src/
├── app/
│   ├── page.tsx            # Homepage (with assessment CTAs)
│   ├── assess/             # AI Readiness Assessment
│   │   ├── page.tsx        # Assessment page wrapper
│   │   └── AssessmentFlow.tsx  # Multi-step form + results
│   ├── actions/
│   │   └── submit-lead.ts  # Server action: forwards leads to portal API
│   ├── services/           # Services page
│   ├── about/              # About page
│   ├── case-studies/       # Case studies index + [slug]
│   ├── blog/               # Blog index + [slug]
│   └── contact/            # Contact page with form
├── components/             # Shared UI components
├── content/                # MDX content files
│   ├── services/           # 4 service descriptions
│   ├── blog/               # Blog posts
│   └── case-studies/       # Case study write-ups
└── lib/
    ├── content.ts          # Content reading utility
    └── assessment-data.ts  # Questions, scoring logic, use case recommendations
```

## Adding Content

### New Blog Post

Create `src/content/blog/your-slug.mdx`:

```mdx
---
title: "Post Title"
description: "Short description for SEO and cards."
date: "2026-03-15"
author: "Klearpath Team"
tags: ["Tag1", "Tag2"]
---

Your content here...
```

### New Case Study

Create `src/content/case-studies/your-slug.mdx`:

```mdx
---
title: "Case Study Title"
description: "Short description."
client: "Client Name"
industry: "Industry"
services: ["Data Engineering", "Security & Compliance"]
results: ["Result 1", "Result 2"]
---

Your content here...
```

No code changes needed — new MDX files are automatically picked up at build time.
