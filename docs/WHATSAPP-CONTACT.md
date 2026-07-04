# WhatsApp Contact System

The site's entire quotation/contact flow is WhatsApp-first. There is no on-site form and no
`/api` route collecting personal data — every "Request a Quotation" style CTA opens a modal
that links straight into WhatsApp with a pre-filled message, addressed to one of two
marketing representatives.

## How it works

1. **Trigger** — any button that should open the modal renders `<QuoteTrigger>` (see
   `src/components/whatsapp/QuoteTrigger.tsx`), or uses `<CtaLink href="/contact" .../>`
   (see `src/components/ui/CtaLink.tsx`), which automatically swaps itself for a
   `QuoteTrigger` whenever its `href` is `/contact`. This means any existing page section
   that already pointed a CTA at `/contact` — `CTASection`, `Hero`, product detail pages —
   picked up the new WhatsApp behavior with no per-page changes.
2. **Event** — clicking a trigger dispatches a `caltic:open-quote-modal` custom DOM event
   (`src/components/whatsapp/events.ts`).
3. **Modal** — `<QuoteModal>` is mounted once, site-wide, in `src/app/layout.tsx`. It listens
   for that event and opens. It supports Escape-to-close, click-outside-to-close, a smooth
   fade/scale transition, and traps focus on its close button when opened.
4. **Floating button** — `<WhatsAppFloatingButton>` is also mounted site-wide (bottom-right,
   fixed) and dispatches the same event — so it opens the identical modal rather than
   linking directly to WhatsApp.
5. **The two reps** — inside the modal, each representative is a bordered card with:
   - A clickable `tel:` link showing their number
   - A "Chat via WhatsApp" button that opens `https://wa.me/<number>?text=<message>` in a
     new tab

## Where the rep numbers and message live

Everything is centralized in `src/lib/constants.ts`:

```ts
export const WHATSAPP_MESSAGE = "Hello CV Caltic Baru, I would like to request a quotation for your hospitality products.";

export const WHATSAPP_REPS = [
  { label: "Marketing 1", phoneDisplay: "+62 817-133-800", phoneDigits: "62817133800" },
  { label: "Marketing 2", phoneDisplay: "+62 818-0225-4747", phoneDigits: "6281802254747" },
];

export function buildWhatsAppLink(phoneDigits: string): string { /* ... */ }
```

To change the message, add a rep, or update a phone number, edit this file only — the
modal, the Contact page, and the Catalogue page all read from these same constants.

## Where it's used

- **Header** — desktop and mobile "Request a Quotation" buttons
- **Floating WhatsApp button** — every page
- **`CTASection`** — the closing band on nearly every page (whenever its primary CTA points
  at `/contact`)
- **`Hero`** (both variants) — homepage and interior hero CTAs
- **Product detail pages** — "Request a Quotation for This Product" button, plus the
  closing `CTASection`
- **Contact page** (`/contact`) — shows both reps directly inline (no need to open a modal
  when you're already on the dedicated contact page)
- **Catalogue page** (`/catalogue`) — same direct inline treatment, for requesting the PDF

## What was removed

The old email-based system (`InquiryForm` component, `/api/inquiry` route, and the
`inquiry` Sanity document type) has been removed entirely — it's no longer referenced
anywhere in the codebase. If a future requirement calls for also logging leads
server-side (e.g. for CRM sync), that would need to be rebuilt from scratch; WhatsApp
conversations happen entirely on Meta's platform and aren't visible to this codebase.

## Customizing the modal design

The modal (`src/components/whatsapp/QuoteModal.tsx`) uses the same design tokens as the
rest of the site — `eyebrow`, `headline`, `.btn-primary`, bordered cards, the terracotta
accent bar — so it should never need one-off styling. If you add a third representative,
just add an entry to `WHATSAPP_REPS`; the modal and Contact/Catalogue pages render the list
dynamically and don't need any layout changes for 1–4 reps.
