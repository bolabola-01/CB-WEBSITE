# CV Caltic Baru — Website

Production codebase for **www.calticbaru.com**, the primary B2B sales platform for CV Caltic Baru's hospitality manufacturing business. Built with Next.js (App Router), TypeScript, Tailwind CSS, and Sanity CMS.

This is not a template — it implements the full information architecture, copywriting, design system, and CMS schema described in the project brief, using the master catalogue (`CALTIC BARU FULL CATALOGUE.pdf`) as the single source of truth for brand identity, tone, and product structure.

## Quick Start

```bash
npm install
cp .env.example .env.local   # then fill in your Sanity project details
npm run dev
```

Open http://localhost:3000. The site runs immediately with realistic seed content (see "Content Strategy" below) even before Sanity is connected.

To edit content once Sanity is connected, visit **/studio** on your deployed site (or http://localhost:3000/studio locally).

## Documentation Index

| Document | Purpose |
|---|---|
| [`docs/CMS-EDITING-GUIDE.md`](docs/CMS-EDITING-GUIDE.md) | Non-developer guide to editing every piece of site content |
| [`docs/WHATSAPP-CONTACT.md`](docs/WHATSAPP-CONTACT.md) | How the WhatsApp quotation modal works and how to customize it |
| [`docs/CONTENT-REVALIDATION.md`](docs/CONTENT-REVALIDATION.md) | How pages update automatically when you publish new content |
| [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) | Step-by-step Vercel + Sanity deployment instructions |
| [`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md) | Color tokens, typography, spacing, and component patterns |
| [`docs/COMPONENT-DOCS.md`](docs/COMPONENT-DOCS.md) | What each reusable component does and how to use it |
| [`docs/SITEMAP.md`](docs/SITEMAP.md) | Full information architecture and page purposes |
| [`docs/SEO.md`](docs/SEO.md) | How SEO, structured data, and target keywords are implemented |

## Content Strategy

Every page fetches content through `src/lib/content/index.ts`, which:

1. Tries Sanity first (once `NEXT_PUBLIC_SANITY_PROJECT_ID` is set in `.env.local`).
2. Falls back to realistic seed content in `src/lib/content/mock-data.ts` if Sanity has no data yet, or isn't configured.

This means the site is **never broken or empty** — you can deploy immediately, then populate the CMS at your own pace. As you add real content in Sanity Studio, it automatically takes over from the seed content.

Product and category photography currently uses real photographs extracted directly from the master catalogue (`public/images/`) as placeholders — replace them with your own photography via the CMS as it becomes available.

## Tech Stack

- **Next.js 14** (App Router, Server Components, `generateStaticParams`/`generateMetadata` for SEO)
- **TypeScript** throughout
- **Tailwind CSS**, with brand design tokens defined in `tailwind.config.ts`
- **Framer Motion** available for animation (see `docs/COMPONENT-DOCS.md`)
- **Sanity CMS** for all editable content, embedded at `/studio`
- **lucide-react** for iconography

## Folder Structure

```
calticbaru/
├── sanity/                      # Sanity Studio configuration
│   ├── schemaTypes/
│   │   ├── objects/             # Reusable field groups (seo, cta, stat, etc.)
│   │   └── documents/           # Page & collection schemas
│   ├── env.ts
│   └── structure.ts             # Custom Studio navigation
├── sanity.config.ts              # Root Studio config
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── (site pages)/...
│   │   ├── studio/[[...tool]]/   # Embedded Sanity Studio at /studio
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/               # Header, Footer
│   │   ├── ui/                   # Buttons, cards, badges, CtaLink, etc.
│   │   ├── sections/             # Page sections (Hero, CTA, grids)
│   │   ├── products/             # Product-specific components
│   │   ├── whatsapp/             # QuoteModal, QuoteTrigger, floating button
│   │   └── seo/                  # JSON-LD helper
│   ├── lib/
│   │   ├── sanity/                # Client, image URL builder, GROQ queries
│   │   ├── content/               # Data-access layer + seed content
│   │   ├── constants.ts           # Brand facts, nav structure
│   │   └── seo.ts                 # Metadata + structured data builders
│   └── types/                    # Shared TypeScript types
├── public/images/                # Static imagery (see Content Strategy)
└── docs/                          # This documentation set
```

## Available Scripts

```bash
npm run dev          # Start local dev server
npm run build         # Production build
npm run start         # Serve the production build
npm run lint          # ESLint
npm run type-check    # TypeScript check with no emit
```

## No E-Commerce, By Design

Per the project brief, this site intentionally has **no pricing, no stock indicators, no cart, and no checkout**. Every "Request a Quotation" CTA opens a WhatsApp modal (see `docs/WHATSAPP-CONTACT.md`) rather than a form or a storefront flow — this is a B2B lead-generation platform designed to get visitors into a direct conversation with the marketing team as fast as possible.
