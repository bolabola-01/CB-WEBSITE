// Centralized GROQ queries. Keep every query here (rather than inline in
// pages) so the CMS content model stays easy to audit in one place.

export const SITE_SETTINGS_QUERY = /* groq */ `
*[_type == "siteSettings"][0]{
  siteName,
  legalName,
  tagline,
  logo{asset->{url}},
  address,
  email,
  officeLandline,
  officeLandlineTel,
  phoneMarketing1,
  phoneMarketing2,
  whatsappNumber,
  mainNav,
  footerNav,
  socialLinks,
  defaultSeo
}`;

export const HOME_PAGE_QUERY = /* groq */ `
*[_type == "homePage"][0]{
  ...,
  featuredIndustries[]->{_id, title, "slug": slug.current, summary, image{asset->{url}}},
  featuredTestimonials[]->{_id, quote, clientName, clientOrganization, image{asset->{url}}}
}`;

export const ABOUT_PAGE_QUERY = /* groq */ `*[_type == "aboutPage"][0]`;
export const MANUFACTURING_PAGE_QUERY = /* groq */ `*[_type == "manufacturingPage"][0]`;
export const OEM_PAGE_QUERY = /* groq */ `*[_type == "oemPage"][0]`;
export const QUALITY_PAGE_QUERY = /* groq */ `*[_type == "qualityPage"][0]`;
export const CATALOGUE_PAGE_QUERY = /* groq */ `*[_type == "cataloguePage"][0]{
  ...,
  catalogueFile{asset->{url, originalFilename}}
}`;
export const CONTACT_PAGE_QUERY = /* groq */ `*[_type == "contactPage"][0]`;

export const ALL_PRODUCT_CATEGORIES_QUERY = /* groq */ `
*[_type == "productCategory"] | order(orderRank asc, title asc){
  _id, title, "slug": slug.current, shortDescription, description,
  coverImage{asset->{url}, alt, caption},
  bannerImage{asset->{url}, alt, caption},
  seo
}`;

export const PRODUCT_CATEGORY_BY_SLUG_QUERY = /* groq */ `
*[_type == "productCategory" && slug.current == $slug][0]{
  _id, title, "slug": slug.current, shortDescription, description,
  coverImage{asset->{url}, alt, caption},
  bannerImage{asset->{url}, alt, caption},
  seo
}`;

// Lightweight projection used for card grids (category pages, search/filter browser, related products)
const PRODUCT_CARD_PROJECTION = /* groq */ `
  _id, title, "slug": slug.current, productCode,
  "categorySlug": category->slug.current,
  "categoryTitle": category->title,
  shortDescription,
  coverImage{asset->{url}, alt, caption},
  featured, isNew
`;

export const PRODUCTS_BY_CATEGORY_QUERY = /* groq */ `
*[_type == "product" && category->slug.current == $slug] | order(title asc){
  ${PRODUCT_CARD_PROJECTION}
}`;

export const ALL_PRODUCTS_QUERY = /* groq */ `
*[_type == "product"] | order(title asc){
  ${PRODUCT_CARD_PROJECTION}
}`;

export const FEATURED_PRODUCTS_QUERY = /* groq */ `
*[_type == "product" && featured == true] | order(title asc){
  ${PRODUCT_CARD_PROJECTION}
}`;

export const PRODUCT_BY_SLUG_QUERY = /* groq */ `
*[_type == "product" && slug.current == $slug][0]{
  _id, title, "slug": slug.current, productCode,
  "categorySlug": category->slug.current,
  "categoryTitle": category->title,
  shortDescription, fullDescription,
  materials, applications, features, customizationOptions, packagingOptions, specs,
  coverImage{asset->{url}, alt, caption},
  gallery[]{asset->{url}, alt, caption},
  pdf{asset->{url, originalFilename}},
  featured, isNew,
  "relatedProductSlugs": relatedProducts[]->slug.current,
  seo
}`;

export const ALL_INDUSTRIES_QUERY = /* groq */ `
*[_type == "industry"] | order(orderRank asc){
  _id, title, "slug": slug.current, summary, description,
  image{asset->{url}}, "relatedCategorySlugs": relatedCategories[]->slug.current
}`;

export const INDUSTRY_BY_SLUG_QUERY = /* groq */ `
*[_type == "industry" && slug.current == $slug][0]{
  _id, title, "slug": slug.current, summary, description,
  image{asset->{url}}, "relatedCategorySlugs": relatedCategories[]->slug.current
}`;

export const ALL_TESTIMONIALS_QUERY = /* groq */ `
*[_type == "testimonial"] | order(orderRank asc){
  _id, quote, clientName, clientOrganization, image{asset->{url}}
}`;

export const ALL_FAQS_QUERY = /* groq */ `
*[_type == "faq"] | order(orderRank asc){
  _id, question, answer, category
}`;
