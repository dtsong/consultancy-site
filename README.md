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
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build   # builds site + generates sitemap
npm run start   # serves production build locally
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Deploy — no configuration needed

Set `SITE_URL` environment variable in Vercel to your production domain for correct sitemap URLs.

## Project Structure

```
src/
├── app/                    # Pages (App Router)
│   ├── page.tsx            # Homepage
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
    └── content.ts          # Content reading utility
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
