// Canonical brand facts, sourced directly from the master catalogue
// (CALTIC BARU FULL CATALOGUE, back cover). Used as fallback values and
// for structured data — keep in sync with Sanity "Site Settings" if the
// business details ever change.

export const BRAND = {
  siteName: "Caltic Baru",
  legalName: "CV Caltic Baru",
  tagline: "Hotel Linen & Amenities Supplier",
  domain: "www.calticbaru.com",
  siteUrl: "https://www.calticbaru.com",
  email: "marketing@calticbaru.com",
  officeLandline: "(0274) 420345",
  officeLandlineTel: "+62274420345",
  phoneMarketing1: "+62 817-133-800",
  phoneMarketing2: "+62 818-0225-4747",
  address:
    "Jl. Sorowajan Baru No.160, Tegal Tanda, Pedak Baru, Banguntapan, Bantul, Daerah Istimewa Yogyakarta, Indonesia 55281",
  addressLocality: "Bantul",
  addressRegion: "Daerah Istimewa Yogyakarta",
  postalCode: "55281",
  addressCountry: "ID",
  yearsExperience: "11+",
  productsCount: "200+",
  partnersCount: "700+",
  customizationRate: "100%",
};

export const PRIMARY_NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  // "children" here is intentionally omitted: Header.tsx builds this
  // dropdown live from Sanity product categories, so it always reflects
  // whatever categories currently exist with no code changes required.
  { label: "Products", href: "/products" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "OEM & Private Label", href: "/oem-private-label" },
  { label: "Quality Assurance", href: "/quality-assurance" },
  { label: "Catalogue", href: "/catalogue" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV = {
  company: [
    { label: "About", href: "/about" },
    { label: "Manufacturing", href: "/manufacturing" },
    { label: "OEM & Private Label", href: "/oem-private-label" },
    { label: "Quality Assurance", href: "/quality-assurance" },
  ],
  resources: [
    { label: "Products", href: "/products" },
    { label: "Industries Served", href: "/industries" },
    { label: "Catalogue", href: "/catalogue" },
    { label: "FAQ", href: "/faq" },
  ],
  legal: [
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

// WhatsApp-first quotation flow — replaces the old email inquiry form as
// the primary conversion mechanism site-wide. Every "Request a Quotation"
// / "Contact Sales" CTA and the floating WhatsApp button all open the same
// modal, which routes to one of these two reps.
export const WHATSAPP_MESSAGE =
  "Hello CV Caltic Baru, I would like to request a quotation for your hospitality products.";

export const WHATSAPP_REPS = [
  {
    label: "Marketing 1",
    phoneDisplay: BRAND.phoneMarketing1,
    phoneDigits: "62817133800",
  },
  {
    label: "Marketing 2",
    phoneDisplay: BRAND.phoneMarketing2,
    phoneDigits: "6281802254747",
  },
];

export function buildWhatsAppLink(phoneDigits: string): string {
  return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}
