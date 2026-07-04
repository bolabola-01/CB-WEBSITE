// Shared content types — these mirror the Sanity schema definitions in
// /sanity/schemaTypes so that data fetched from Sanity and local fallback
// content share exactly the same shape throughout the app.

export interface SanityImage {
  asset: {
    url: string;
  };
  alt?: string;
  caption?: string;
}

export interface SanityFile {
  asset: {
    url: string;
    originalFilename?: string;
  };
}

export interface Seo {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  ogImage?: SanityImage;
  noIndex?: boolean;
}

export interface CTA {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface FeatureCardItem {
  title: string;
  description: string;
}

export interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  _id: string;
  quote: string;
  clientName: string;
  clientOrganization?: string;
  image?: SanityImage;
}

export interface FaqItem {
  _id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Industry {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  image?: SanityImage;
  relatedCategorySlugs?: string[];
}

export interface ProductCategory {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description?: string;
  coverImage?: SanityImage;
  bannerImage?: SanityImage;
  seo?: Seo;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  _id: string;
  title: string;
  slug: string;
  productCode?: string;
  categorySlug: string;
  categoryTitle: string;
  coverImage?: SanityImage;
  gallery: SanityImage[];
  shortDescription: string;
  fullDescription: string;
  materials: string[];
  features: string[];
  applications: string[];
  customizationOptions: string[];
  packagingOptions: string[];
  specs?: ProductSpec[];
  relatedProductSlugs?: string[];
  pdf?: SanityFile;
  featured?: boolean;
  isNew?: boolean;
  seo?: Seo;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface SiteSettings {
  siteName: string;
  legalName: string;
  tagline: string;
  logo?: SanityImage;
  address: string;
  email: string;
  officeLandline: string;
  officeLandlineTel: string;
  phoneMarketing1: string;
  phoneMarketing2: string;
  whatsappNumber?: string;
  mainNav: NavigationItem[];
  footerNav: NavigationItem[];
  socialLinks?: { platform: string; url: string }[];
  defaultSeo: Seo;
}
