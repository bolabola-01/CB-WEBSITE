# Sitemap & Information Architecture

## Page Map

| URL | Purpose | CMS-driven? |
|---|---|---|
| `/` | Convert visitors into inquiries; establish credibility fast (stats, why-choose-us, product/industry overview, testimonial, CTA) | Partial — layout is fixed, copy/stats/testimonials are CMS-editable via Home Page + referenced content |
| `/about` | Company story, values, expertise — builds trust with procurement teams researching the company | Partial (see About Page schema) |
| `/products` | Index of all product categories, plus a search-and-filter browser across every product | Yes — pulls all Product Categories and Products |
| `/products/[category]` | Category listing (e.g. `/products/hotel-linen`) | Yes — pulls Product Category + its Products |
| `/products/[category]/[slug]` | Individual product page (e.g. `/products/hotel-linen/premium-bath-towel`): gallery with lightbox, description, materials, applications, features, customization/packaging options, specs, PDF download, related products, WhatsApp quotation CTA | Yes — fully CMS-driven per Product document |
| `/manufacturing` | Factory capability, production workflow, scale & flexibility | Partial (Manufacturing Page schema) |
| `/oem-private-label` | OEM vs. private label explanation, what's included | Partial (OEM Page schema) |
| `/quality-assurance` | Four-step QA process, continuous improvement | Partial (Quality Page schema) |
| `/industries` | Grid of all industries served | Yes — pulls all Industries |
| `/industries/[slug]` | Industry detail + relevant product categories | Yes — fully CMS-driven per Industry document |
| `/catalogue` | Lead page to request the full PDF catalogue via WhatsApp or email | Partial (Catalogue Page schema + file upload) |
| `/faq` | Grouped, searchable-by-category FAQ list with FAQPage schema | Yes — pulls all FAQ documents |
| `/contact` | Contact details, map, and direct WhatsApp links to both marketing reps | Partial (Contact Page schema) |
| `/privacy-policy` | Basic data-handling policy (noindex) | Static — have legal counsel review before publishing |
| `/sitemap.xml` | Auto-generated from all published categories, products, and industries | Automatic |
| `/robots.txt` | Standard robots directives + sitemap reference | Automatic |
| `/studio` | Embedded Sanity Studio (CMS admin) | N/A |

"Partial" means the page layout/structure is fixed in code (matching the catalogue's editorial design), but all text, images, and statistics shown are pulled from a corresponding Sanity singleton document — edit the copy without touching code.

## Navigation Structure

**Main navigation** (edit under Site Settings → Main Navigation):

```
Home
About
Products ▾
  All Categories
  [one entry per published Product Category, generated live — see below]
Manufacturing
OEM & Private Label
Quality Assurance
Industries
Catalogue
FAQ
Contact
```

**Footer navigation** (three columns): Company (About, Manufacturing, OEM & Private Label, Quality Assurance), Resources (Products, Industries, Catalogue, FAQ), Legal (Contact, Privacy Policy).

## Product Category → Product Relationship

Categories and Products are separate Sanity document types linked by reference (`product.category → productCategory`), not a nested structure. This means:

- Deleting or renaming a category doesn't require touching every product — just re-point references if needed.
- A category page automatically lists every product referencing it — no manual list management.
- The header's "Products" dropdown is generated live from the current list of categories (`src/components/layout/Header.tsx`) — creating a category is enough to make it appear in navigation, with no code or Site Settings edit required.
- **Related Products** default to an automatic pick of other products in the same category (`getRelatedProducts()` in `src/lib/content/index.ts`), with a manual override available per-product if an editor wants to hand-pick a specific list instead.
- **Unlimited categories and products** — there's no cap in the schema or the code; both `/products` and the header dropdown render however many exist.
- New products and categories go live automatically without a deploy — see `docs/CONTENT-REVALIDATION.md`.

## Every Path Leads to an Inquiry

Per the brief, every page ends in a `CTASection` (or a direct `QuoteTrigger` button) that opens the WhatsApp quotation modal — see `docs/WHATSAPP-CONTACT.md` for how this works. There is deliberately no pricing, cart, or checkout flow anywhere in the site — the entire IA is built around getting visitors into a direct WhatsApp conversation with the marketing team as fast as possible.
