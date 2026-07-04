# Content Revalidation — How Pages Update Automatically

This project is statically generated for speed, but the catalogue needs to grow
continuously without a developer rebuilding or redeploying anything. Two mechanisms work
together to make that possible:

## 1. Time-based revalidation (always on, zero setup)

Every page that reads product, category, or industry content exports:

```ts
export const revalidate = 60;
```

This tells Next.js to treat the page as static but re-check it against Sanity at most once
every 60 seconds. In practice: publish a product in Sanity Studio, and within a minute it
appears on `/products`, its category page, and its own product page — automatically, with
zero configuration.

Pages using this today: `/`, `/products`, `/products/[category]`,
`/products/[category]/[slug]`, `/industries`, `/industries/[slug]`, the root layout (for the
header's Products dropdown), and `sitemap.xml`.

## 2. Instant on-demand revalidation (optional, recommended for production)

Waiting up to 60 seconds is fine for most catalogues, but if you want changes to appear the
moment you click **Publish**, configure a Sanity webhook that calls
`src/app/api/revalidate/route.ts`:

1. Set an environment variable `SANITY_REVALIDATE_SECRET` to a random string (in `.env.local`
   and in your Vercel project settings).
2. In [sanity.io/manage](https://www.sanity.io/manage) → your project → **API → Webhooks**,
   create a new webhook:
   - **URL**: `https://www.calticbaru.com/api/revalidate?secret=YOUR_SECRET` (same secret as step 1)
   - **Dataset**: `production`
   - **Trigger on**: Create, Update, Delete
   - **Filter**: `_type in ["product", "productCategory", "siteSettings", "industry", "homePage"]`
   - **Projection**:
     ```groq
     {
       "_type": _type,
       "slug": slug.current,
       "categorySlug": category->slug.current
     }
     ```
3. Save. Sanity will now POST to your site on every publish, and the relevant pages
   revalidate within a second or two.

If this webhook isn't configured (e.g. during local development), the time-based
revalidation above still applies — nothing breaks, updates just take up to a minute instead
of being instant.

## Why this matters for "no code changes"

Because every page reads its list of categories/products live from Sanity (rather than a
hardcoded array), and because those pages revalidate automatically, the full loop —
**publish a product → it appears everywhere it should** — never requires touching the
codebase:

- New product → appears on its category page, `/products`, the search/filter browser, and
  (if marked Featured) the homepage.
- New category → appears on `/products`, gets its own `/products/[slug]` page, and appears
  in the header's Products dropdown (which is generated live — see
  `src/components/layout/Header.tsx`).
- New industry → appears on `/industries` and gets its own page.

## Local development

`export const revalidate = 60` has no effect under `next dev` (every request is always
fresh in dev mode), so you'll see changes immediately while developing locally regardless of
webhook configuration.
