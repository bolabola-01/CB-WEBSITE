# CMS Editing Guide (No Coding Required)

This guide is written for the CV Caltic Baru team — no development experience needed.

## 1. Accessing the CMS

Go to **www.calticbaru.com/studio** and log in with the account your developer invited you with (Google, GitHub, or email).

You'll see a left-hand menu with:

- **Pages** — the singleton pages of the site (Home, About, Manufacturing, etc.)
- **Product Categories**
- **Products** — with sub-views for All Products, Featured Products, and New Products
- **Industries**
- **Testimonials**
- **FAQs**

## 2. Editing a Page (e.g. Home Page)

1. Click **Pages → Home Page**.
2. Edit any field — headlines, body text, images, statistics.
3. Click **Publish** (top right) to make the change live. "Save" alone keeps it as a draft only you can see.

Changes typically appear on the live site within a minute.

## 3. Adding a New Product

1. Click **Products → All Products → + Create new**.
2. The form is organized into tabs at the top — **Content**, **Media**, **Details**,
   **Related & Badges**, **SEO** — so it doesn't feel overwhelming. Fill in:

   **Content tab**
   - **Product Name** — e.g. "Conditioner"
   - **Slug** — auto-generated from the name; this becomes the page URL, e.g.
     `/products/guest-room-amenities/premium-bath-towel`. Only change it if you need a
     specific URL.
   - **Product Code (SKU)** — optional internal reference code, shown on the product page if set.
   - **Category** — select the matching Product Category. This determines which category
     page the product appears on, and drives automatic related-product suggestions.
   - **Short Description** — a 1–2 sentence summary, used on product cards and as a search
     fallback.
   - **Full Description** — the longer descriptive copy shown on the product's own page.

   **Media tab**
   - **Cover Image** — the main image, used on cards and first in the gallery. Click the
     image after uploading to drag the focal point (hotspot) — this keeps the important
     part of the photo visible no matter how the card is cropped on different screen sizes.
   - **Gallery Images** — add as many additional images as you like. **Drag the images by
     their handle to reorder them** — the order here is exactly the order shown on the
     product page and in the lightbox. Each image has its own **Alt Text** (required, for
     accessibility and SEO) and an optional **Caption** (shown under the image when a
     visitor opens the lightbox).
   - **Downloadable PDF** — optional. Upload a spec sheet and a "Download Spec Sheet"
     button appears automatically on the product page.

   **Details tab**
   - **Materials, Features, Applications, Customization Options, Packaging Options** — each
     is a simple bullet list. Click "+ Add item" to add a line; drag to reorder.
   - **Specifications** — optional label/value pairs (e.g. "Volume options" → "30ml / 40ml / 60ml").

   **Related & Badges tab**
   - **Featured Product** — toggle on to show this product in the homepage's "Featured
     Products" section and let visitors filter for it in the product search.
   - **New Product Badge** — toggle on to show a "New" badge on this product's card.
   - **Related Products** — leave empty and the site automatically shows other products
     from the same category. Only fill this in if you want to hand-pick a specific list
     instead (manual override).

   **SEO tab**
   - **SEO Title, SEO Description, SEO Keywords** — optional; if left blank, the page falls
     back to the Short Description automatically.

3. Click **Publish**.

The new product appears on its category page, in `/products`, in the search/filter
browser, and in the sitemap automatically — usually within a minute, and instantly if the
revalidation webhook is configured (see `docs/CONTENT-REVALIDATION.md`). No code changes,
ever, are required to add a product.

## 4. Adding a New Product Category

1. Click **Product Categories → + Create new**.
2. Fill in:
   - **Category Name** and **Slug** (the slug becomes part of every product URL in this
     category, e.g. `/products/hotel-linen/...`)
   - **Short Description** — used on category cards (Home, Products index)
   - **Full Description** — used at the top of the category's own page
   - **Cover Image** — used on category cards
   - **Banner Image** — used as the full-width header on the category's own page. If left
     blank, the Cover Image is used instead.
   - **SEO** — optional title/description/keywords for this category page.
3. Click **Publish**.

That's it — the new category immediately gets its own page at `/products/your-slug`, appears
in `/products`, and **appears in the header's "Products" dropdown menu automatically** (the
dropdown is generated live from your categories, not hardcoded). There is no limit to how
many categories or products you can create, and no developer involvement is needed for
either.

## 5. Adding an Industry

Click **Industries → + Create new**. Fill in Title, Slug, Summary (short card text), Description (full page text), and optionally link Related Product Categories so visitors see relevant products on that industry's page.

## 6. Managing Testimonials

Click **Testimonials → + Create new**. Add the quote, client name, and organization. The **Display Order** field controls which testimonial appears first if you add more than one (lower numbers appear first).

## 7. Managing FAQs

Click **FAQs → + Create new**. Add a question, answer, and category (used to group questions on the FAQ page). Questions with the same category are grouped together automatically.

## 8. Updating Contact Details, Logo, or Navigation

All of this lives in **Pages → Site Settings**:

- **Logo** — the real CV Caltic Baru logo (from your provided logo file) is already built in as the site default across the header, footer, and favicon. Upload a file here only if you want to replace it with an updated or higher-resolution version later (PNG or SVG with transparent background recommended).
- **Address, Email, Phone Numbers** — update here; these automatically update in the header, footer, and Contact page.
- **Main Navigation** — add, remove, or reorder menu items. Each item needs a Label and a Link (e.g. `/about`). Items can have Dropdown Items nested under them (used for the Products menu).

## 9. Uploading the Catalogue PDF

Go to **Pages → Catalogue Page → Catalogue PDF** and upload the current PDF. Since the site is WhatsApp-first, this file is meant to be sent manually by whichever marketing rep the visitor messages (they'll ask for the catalogue in the chat) — it isn't auto-attached to the WhatsApp message itself. You're welcome to also send it as an email attachment for visitors who use the "prefer email" option on the Catalogue page.

## 10. Managing the WhatsApp Marketing Reps

The two marketing representatives shown in the "Request a Quotation" modal (and on the Contact and Catalogue pages) are **not** edited in Sanity Studio — they live in the codebase at `src/lib/constants.ts`, since they're simple, rarely-changing values (a name, a phone number, and a pre-filled message). To update a phone number, change the wording of the pre-filled WhatsApp message, or add a third representative, a developer needs to edit `WHATSAPP_REPS` / `WHATSAPP_MESSAGE` in that file and redeploy. See `docs/WHATSAPP-CONTACT.md` for the full reference.

## 11. What Visitors See: Search, Filters, and the Lightbox

A few front-end features work automatically once you've filled in the fields above — there's
nothing extra to configure:

- **`/products` search and filters** — visitors can search by product name, code, or
  category, and filter by category or "Featured only." This searches every published
  product live, so it's always current.
- **Product galleries** — every gallery image you upload is shown as a thumbnail strip on
  the product page. Clicking any image (or the expand icon) opens a full-screen lightbox
  with left/right navigation, captions, and Escape-to-close.
- **"New" and "Featured" badges** — appear automatically on product cards wherever that
  toggle is turned on, site-wide (category pages, the homepage, search results).

## Tips

- Always click **Publish**, not just save — unpublished drafts are not visible on the live site.
- Image uploads are automatically optimized and resized by Sanity's CDN — upload reasonably high-resolution originals (at least 1600px wide for hero/cover/banner images, and at least 1200px wide for gallery images) and let the system handle the rest.
- Use the hotspot tool (click an uploaded image to open it) on Cover Images especially — it keeps products centered correctly across the square/landscape crops used throughout the site.
- If a field is left empty, the site falls back to sensible default text rather than showing a blank space — but it's best practice to fill in every field for full control over your messaging.
- New products and categories go live automatically — see `docs/CONTENT-REVALIDATION.md` if you want changes to appear instantly instead of within about a minute.
