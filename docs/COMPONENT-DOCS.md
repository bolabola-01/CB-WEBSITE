# Component Documentation

## Layout

**`Header`** (`src/components/layout/Header.tsx`) — Sticky site header with desktop dropdown navigation and a mobile slide-down menu. Reads `mainNav` from Site Settings (via the `siteSettings` prop) plus a `productCategories` prop passed from `layout.tsx`. The "Products" nav item's dropdown is always generated live from `productCategories` (not from any hardcoded list or CMS field) — publishing a new category updates this menu automatically. Client component (`"use client"`) due to menu open/close state.

**`Footer`** (`src/components/layout/Footer.tsx`) — Four-column footer (brand blurb, Company links, Resources links, Contact details). Contact details are pulled live from Site Settings.

## UI Primitives (`src/components/ui/`)

- **`Logo`** — renders the uploaded CMS logo if present, otherwise an SVG/text approximation of the catalogue wordmark. Accepts a `variant="light"` prop for use on dark backgrounds (footer, hero overlays).
- **`SectionEyebrow`** — the small-caps `01 — SECTION NAME` label with a trailing hairline, used at the top of nearly every page section.
- **`StatBand`** — dark navy panel of large terracotta statistics. Supports `orientation="vertical"` (sidebar, as on Home) or `"horizontal"` (full-width row, as on About).
- **`FeatureCard`** — bordered card with optional Lucide icon, title, terracotta tick, description. Powers all "Why Choose Us" / capability grids.
- **`ProcessStep`** — numbered step row (large italic numeral + title + description), used for manufacturing workflow and QA checkpoints.
- **`Breadcrumbs`** — renders breadcrumb trail and injects matching `BreadcrumbList` JSON-LD automatically. Pass `items` as an array of `{ name, path }` excluding Home (added automatically).
- **`CtaLink`** — drop-in replacement for a plain `Link` used as a CTA. Renders a normal `<Link>` for any ordinary `href`, but automatically renders a `QuoteTrigger` (opening the WhatsApp modal) whenever `href="/contact"`. Used by `Hero` and `CTASection` so page-level CTA props don't need to know about the modal at all.

## Sections (`src/components/sections/`)

- **`HeroFullBleed`** / **`HeroSplit`** (in `Hero.tsx`) — two hero layouts matching the catalogue's cover spread (full-bleed photo, centered text) and interior spreads (50/50 split with image).
- **`CTASection`** — the recurring dark closing band with heading, optional description, and two CTAs. Used at the bottom of nearly every page — defaults to "Request a Quotation" / "View Products" if no props are passed.
- **`TestimonialSection`** — full-width dark section for a single centered testimonial quote.
- **`IndustriesGrid`** / **`ProductCategoryGrid`** — responsive card grids for their respective content types, both linking through to detail pages.

## Products (`src/components/products/`)

- **`ProductCard`** — compact card for category listing grids, search results, and related-product grids. Uses `coverImage`; shows "New" / "Featured" badges automatically based on the product's toggles.
- **`ProductGallery`** — client component. Shows the cover image + gallery as a large image with a thumbnail strip; clicking any image (or the expand icon) opens a full-screen lightbox with left/right keyboard navigation, captions, and Escape/click-outside to close. Gracefully shows a typographic placeholder if no images are uploaded yet.
- **`ProductSpecTable`** — renders the `specs` array as a simple label/value table (mirrors the catalogue's "Available Sizes" spec blocks).
- **`RelatedProducts`** — server component; takes the full `product` (not just slugs) and calls `getRelatedProducts()`, which uses the editor's manual override list if set, or otherwise auto-generates related items from the same category. Renders a `ProductCard` grid.
- **`ProductBrowser`** — client component powering the search box and category/featured filter chips on `/products`. Takes the full product and category lists as props and filters entirely client-side (fast, and always in sync with what was fetched server-side moments earlier).

## WhatsApp Contact (`src/components/whatsapp/`)

- **`QuoteModal`** — the site-wide quotation modal, mounted once in `layout.tsx`. Listens for the `caltic:open-quote-modal` custom event, supports Escape/click-outside to close, locks body scroll while open, and animates in/out. Lists both reps from `WHATSAPP_REPS` (`src/lib/constants.ts`).
- **`QuoteTrigger`** — a plain button that dispatches the open-modal event. Drop it anywhere in place of a Link: `<QuoteTrigger className="btn-primary">Request a Quotation</QuoteTrigger>`.
- **`WhatsAppFloatingButton`** — the fixed bottom-right button present on every page; also just dispatches the open-modal event.
- **`WhatsAppIcon`** — the small inline SVG glyph used on both the floating button and every "Chat via WhatsApp" button.
- **`events.ts`** — exports `OPEN_QUOTE_MODAL_EVENT` and a typed `openQuoteModal()` helper so any client component can open the modal without importing React state.

See `docs/WHATSAPP-CONTACT.md` for the full flow and how `CtaLink` (below) automatically wires existing CTAs into this system.

## SEO (`src/components/seo/` and `src/lib/seo.ts`)

- **`JsonLd`** — generic `<script type="application/ld+json">` injector; pass any structured data object.
- **`buildMetadata()`** — wraps Next.js `Metadata` with sensible defaults (canonical URL, Open Graph, Twitter card), pulling from a page's `seo` CMS field when present.
- **`organizationJsonLd`**, **`localBusinessJsonLd`**, **`breadcrumbJsonLd`**, **`faqJsonLd`**, **`productJsonLd`** — structured data builders for each schema type used on the site.

## Adding a New Reusable Component

1. Decide which folder it belongs in (`ui` for a small primitive, `sections` for a page-level block, etc.).
2. Type its props explicitly — reuse types from `src/types/index.ts` where possible rather than redefining shapes.
3. If it needs interactivity (state, event handlers), mark it `"use client"` at the top of the file; otherwise leave it as a server component for better performance.
4. If it displays CMS content, add the corresponding field(s) to the relevant Sanity schema in `sanity/schemaTypes/` and the matching GROQ query in `src/lib/sanity/queries.ts`, plus a fallback value in `src/lib/content/mock-data.ts`.
