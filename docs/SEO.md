# SEO Implementation

## Target Keyword Coverage

The following target terms from the brief are mapped to specific pages/elements (not stuffed — each appears naturally within page copy, titles, or meta descriptions):

| Keyword theme | Primary page(s) |
|---|---|
| Hotel Amenities Supplier / Manufacturer Indonesia | Home, Guest Room Amenities category |
| Hotel Linen Supplier Indonesia | Home, Bedding & Linen category |
| Hospitality Supplier / Manufacturer Indonesia | Home, About |
| OEM Hotel Amenities | OEM & Private Label page |
| Private Label Hotel Amenities | OEM & Private Label page |
| Hotel Slippers Supplier / Guest Room Amenities | Guest Room Amenities category & product pages |
| Supplier Hotel Indonesia / Supplier Linen Hotel / Supplier Amenities Hotel | Home, category pages, Contact |
| Custom Hotel Amenities | OEM & Private Label, product detail pages (Customization Options section) |
| Perlengkapan Hotel | Home meta description / keywords (Indonesian-language search coverage) |

## Technical SEO Checklist

- ✅ **Unique, descriptive `<title>` and meta description per page** via `buildMetadata()` in `src/lib/seo.ts`, called from every page's `generateMetadata` or `metadata` export.
- ✅ **Canonical URLs** set on every page (`alternates.canonical`).
- ✅ **Semantic heading hierarchy** — one `<h1>` per page (page title), `<h2>` for major sections, `<h3>` for card/subsection titles. Verify with a heading outline tool after adding new content.
- ✅ **Descriptive, human-readable URLs** — `/products/bedding-linen/pillow`, not query strings or IDs.
- ✅ **Image alt text** — required on every product image (`images[].alt` field in the Product schema) and set on all structural images in code.
- ✅ **Breadcrumbs + `BreadcrumbList` schema** on every interior page via the `Breadcrumbs` component.
- ✅ **`Organization` + `LocalBusiness` JSON-LD** injected site-wide in `layout.tsx`, using the real registered address and contact details from the catalogue.
- ✅ **`FAQPage` JSON-LD** on `/faq`.
- ✅ **`Product` JSON-LD** on every product detail page.
- ✅ **Auto-generated `sitemap.xml`** (`src/app/sitemap.ts`) — includes every published category, product, and industry page automatically; no manual maintenance needed as content grows.
- ✅ **`robots.txt`** (`src/app/robots.ts`) — disallows `/api/`, references the sitemap.
- ✅ **Image optimization** — Next.js `<Image>` used where dimensions are static (Logo); hero/gallery images use plain `<img>` with `object-cover` for full-bleed flexibility, but are still served from Sanity's CDN (auto-resized, auto-format) once uploaded through the CMS.
- ✅ **Mobile responsive** — every page/component built mobile-first with Tailwind breakpoints.

## Adding SEO Fields to New Content

Every major document type (pages, product categories, products) includes a `seo` object field (Meta Title, Meta Description, SEO Keywords, Social Share Image, Hide from Search Engines toggle). The Keywords field is a simple tag list — it isn't rendered as a meta keywords tag (search engines ignore that tag today) but is useful internally for tracking which terms each page is meant to target, and is available to pull into future on-page copy or reporting. When Meta Title/Description are left blank, `buildMetadata()` falls back to the page's main heading and Short Description automatically — so a page is never left with empty SEO tags, but filling in a custom, keyword-aware Meta Title/Description per product is recommended for anything you specifically want to rank.

## What to Do Next (Not Automatable From This Codebase)

- Submit the sitemap to Google Search Console and Bing Webmaster Tools after launch.
- Register/verify a Google Business Profile using the exact address in `src/lib/constants.ts` for local pack visibility.
- Build backlinks from hospitality industry directories and Indonesian business listings — outside the scope of the codebase itself.
- Monitor Core Web Vitals in Search Console after a few weeks of real traffic and revisit image sizes/lazy-loading if any page scores poorly.
