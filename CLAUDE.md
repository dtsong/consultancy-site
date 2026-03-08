# Klearpath Consultancy Site

Enterprise marketing website for Klearpath, a data engineering and security consultancy.

## Tech Stack

- Next.js 16 (App Router, TypeScript, static generation)
- Tailwind CSS v4 (CSS-first config in `src/app/globals.css`)
- MDX via `next-mdx-remote/rsc` + `gray-matter`
- Deployed to Vercel Hobby tier

## Project Structure

- `src/app/` — pages using App Router
- `src/components/` — shared components (Header, Footer, Button, Card, Container, SectionHeading, MobileMenu, ContactForm, MDXContent)
- `src/content/` — MDX content files (services/, blog/, case-studies/)
- `src/lib/content.ts` — content reading utility with typed frontmatter

## Design System

- **Colors**: navy (#0f172a), slate (#334155), teal (#0d9488) accent, offwhite (#f8fafc)
- **Fonts**: DM Sans (headings, `font-heading`), Source Sans 3 (body, `font-body`)
- **Layout**: max-w-7xl container, py-20 section padding
- **Patterns**: `bg-grid-pattern`, `bg-hero-pattern`, `bg-grid-pattern-dark` CSS classes for geometric backgrounds

## Key Conventions

- All colors defined as `@theme` vars in globals.css — use as `text-navy`, `bg-teal`, etc.
- Content is MDX with typed frontmatter (see interfaces in `src/lib/content.ts`)
- New content files auto-discovered at build time — no code changes needed
- Contact form logs to console — needs backend integration (TODO)
- `next-sitemap` runs post-build to generate sitemap.xml
- Header is a client component (manages mobile menu state)
- All other pages are server components

## Commands

```bash
npm run dev    # development server
npm run build  # production build + sitemap
npm run lint   # ESLint
```
