import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";
import type { Seo, FaqItem, Product } from "@/types";

export function buildMetadata(opts: {
  title: string;
  description: string;
  path?: string;
  seo?: Seo;
}): Metadata {
  const title = opts.seo?.metaTitle || opts.title;
  const description = opts.seo?.metaDescription || opts.description;
  const url = `${BRAND.siteUrl}${opts.path || ""}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: opts.seo?.noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND.siteName,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.legalName,
    alternateName: BRAND.siteName,
    url: BRAND.siteUrl,
    logo: `${BRAND.siteUrl}/images/logo.png`,
    email: BRAND.email,
    telephone: BRAND.officeLandlineTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Sorowajan Baru No.160, Tegal Tanda, Pedak Baru",
      addressLocality: BRAND.addressLocality,
      addressRegion: BRAND.addressRegion,
      postalCode: BRAND.postalCode,
      addressCountry: BRAND.addressCountry,
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BRAND.siteUrl}/#business`,
    name: BRAND.legalName,
    image: `${BRAND.siteUrl}/images/og-default.jpg`,
    url: BRAND.siteUrl,
    telephone: BRAND.officeLandlineTel,
    email: BRAND.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Sorowajan Baru No.160, Tegal Tanda, Pedak Baru",
      addressLocality: BRAND.addressLocality,
      addressRegion: BRAND.addressRegion,
      postalCode: BRAND.postalCode,
      addressCountry: BRAND.addressCountry,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BRAND.siteUrl}${item.path}`,
    })),
  };
}

export function faqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.shortDescription,
    brand: {
      "@type": "Brand",
      name: BRAND.siteName,
    },
    manufacturer: {
      "@type": "Organization",
      name: BRAND.legalName,
    },
  };
}
