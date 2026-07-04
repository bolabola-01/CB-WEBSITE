import type { Metadata } from "next";
import { Cormorant_Garamond, Cinzel, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuoteModal from "@/components/whatsapp/QuoteModal";
import WhatsAppFloatingButton from "@/components/whatsapp/WhatsAppFloatingButton";
import { getSiteSettings, getProductCategories } from "@/lib/content";
import { organizationJsonLd, localBusinessJsonLd } from "@/lib/seo";
import { BRAND } from "@/lib/constants";

// Revalidate periodically, plus instantly via the Sanity webhook — see
// docs/CONTENT-REVALIDATION.md. This keeps the header's Products dropdown
// in sync with the CMS without any code changes when categories are added.
export const revalidate = 60;

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cinzel",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-worksans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.siteUrl),
  title: {
    default: "CV Caltic Baru | Hotel Amenities & Linen Manufacturer Indonesia",
    template: "%s | CV Caltic Baru",
  },
  description:
    "CV Caltic Baru manufactures and supplies hotel amenities, linen, and guest room accessories across Indonesia. OEM production, private label, and bulk hospitality procurement.",
  keywords: [
    "Hotel Amenities Supplier Indonesia",
    "Hotel Linen Supplier Indonesia",
    "Hospitality Supplier Indonesia",
    "Hospitality Manufacturer Indonesia",
    "OEM Hotel Amenities",
    "Private Label Hotel Amenities",
    "Perlengkapan Hotel",
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [siteSettings, productCategories] = await Promise.all([
    getSiteSettings(),
    getProductCategories(),
  ]);

  return (
    <html lang="en" className={`${cormorant.variable} ${cinzel.variable} ${workSans.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
        <Header siteSettings={siteSettings} productCategories={productCategories} />
        <main>{children}</main>
        <Footer siteSettings={siteSettings} />
        <WhatsAppFloatingButton />
        <QuoteModal />
      </body>
    </html>
  );
}
