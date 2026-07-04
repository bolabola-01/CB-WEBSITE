# Deployment Guide

This project deploys cleanly to **Vercel** (recommended, made by the Next.js team) with **Sanity** as the hosted CMS backend. Estimated setup time: 30–45 minutes.

## 1. Create a Sanity Project

1. Go to https://www.sanity.io/manage and create a free account if you don't have one.
2. Create a new project (any name, e.g. "Caltic Baru Website").
3. Note the **Project ID** shown in the project dashboard.
4. Create a dataset named `production` (Sanity does this by default).
5. Under **API → Tokens**, create a **read** token (only needed if you make your dataset private — it's public by default, in which case you can skip this).

## 2. Configure Environment Variables

Copy `.env.example` to `.env.local` for local development, and set the same variables in your Vercel project settings for production:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-06-01
SANITY_API_READ_TOKEN=              # only needed if dataset is private
NEXT_PUBLIC_SITE_URL=https://www.calticbaru.com
SANITY_REVALIDATE_SECRET=              # optional but recommended — see step 7a below
```

## 3. Push the Code to a Git Repository

```bash
git init
git add .
git commit -m "Initial commit — CV Caltic Baru website"
git remote add origin <your-repo-url>
git push -u origin main
```

## 4. Deploy to Vercel

1. Go to https://vercel.com/new and import your Git repository.
2. Vercel auto-detects Next.js — no build configuration changes needed.
3. Add the environment variables from Step 2 under **Project Settings → Environment Variables**.
4. Click **Deploy**.
5. Once deployed, go to **Project Settings → Domains** and add `www.calticbaru.com` (and a redirect from the bare `calticbaru.com`), then update your domain's DNS records as Vercel instructs.

## 5. Access the CMS

Visit `https://www.calticbaru.com/studio` and log in (Sanity supports Google, GitHub, or email/password login by default — configure this under your Sanity project's **API → CORS & Auth** settings if needed).

Add your team members as Studio users under https://www.sanity.io/manage → your project → Members.

## 6. Import Starter Content (Optional but Recommended)

The site works immediately with built-in seed content (see `src/lib/content/mock-data.ts`), but you'll want that content living in Sanity so your team can edit it. Two options:

- **Manual entry** — follow `docs/CMS-EDITING-GUIDE.md` and recreate the seed content directly in Studio. Recommended if you're also swapping in new photography at the same time.
- **Scripted import** — write a one-off Node script using `@sanity/client`'s `create()` method to push the objects in `mock-data.ts` into your dataset. Ask your developer to do this if you have more than a handful of products to migrate.

## 7. Verify the WhatsApp Contact Flow

There's no server-side form or email service to configure — every "Request a Quotation" CTA opens a modal that links straight to WhatsApp. After deploying:

1. Click "Request a Quotation" in the header and confirm the modal opens with both marketing reps listed.
2. Click "Chat via WhatsApp" on each rep and confirm it opens `wa.me` in a new tab with the pre-filled message.
3. Confirm the floating WhatsApp button (bottom-right, every page) opens the same modal.
4. To change a phone number, the message text, or add a third rep, edit `WHATSAPP_REPS` / `WHATSAPP_MESSAGE` in `src/lib/constants.ts` and redeploy — see `docs/WHATSAPP-CONTACT.md` for details.

## 7a. Set Up Instant Content Updates (Recommended)

Product and category pages already update on their own within about a minute of publishing (time-based revalidation). To make updates appear instantly instead, configure a Sanity webhook pointing at `/api/revalidate` — full steps in `docs/CONTENT-REVALIDATION.md`. This takes about five minutes and needs the `SANITY_REVALIDATE_SECRET` environment variable set from Step 2.

## 8. Google Search Console & Analytics

1. Verify the domain in [Google Search Console](https://search.google.com/search-console) and submit `https://www.calticbaru.com/sitemap.xml` (generated automatically by `src/app/sitemap.ts`).
2. Add an analytics tool of your choice (Google Analytics, Plausible, etc.) — insert the tracking snippet in `src/app/layout.tsx`.

## Troubleshooting

- **Site shows placeholder text instead of my CMS content** — double-check `NEXT_PUBLIC_SANITY_PROJECT_ID` is set correctly in Vercel and that you clicked **Publish** (not just Save) in Studio.
- **Images don't load** — confirm `next.config.mjs` allows `cdn.sanity.io` (already configured by default in this project).
- **Studio shows a blank page** — usually a CORS issue. Add your production domain under your Sanity project's **API → CORS Origins** settings.
