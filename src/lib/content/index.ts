import { getSanityClient } from "@/lib/sanity/client";
import * as Q from "@/lib/sanity/queries";
import * as mock from "@/lib/content/mock-data";
import type {
  SiteSettings,
  ProductCategory,
  Product,
  Industry,
  Testimonial,
  FaqItem,
} from "@/types";

/**
 * Every function below follows the same pattern:
 * 1. If Sanity is configured (NEXT_PUBLIC_SANITY_PROJECT_ID is set), fetch
 *    live content with the matching GROQ query.
 * 2. Otherwise (or if the query returns nothing yet because the CMS is
 *    still being populated), fall back to the local seed content so the
 *    site never breaks or shows an empty page.
 */

async function fetchSanity<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  const client = getSanityClient();
  if (!client) return null;
  try {
    return await client.fetch<T>(query, params);
  } catch (err) {
    console.error("Sanity fetch failed, using fallback content:", err);
    return null;
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await fetchSanity<SiteSettings>(Q.SITE_SETTINGS_QUERY);
  return data ?? mock.siteSettings;
}

export async function getProductCategories(): Promise<ProductCategory[]> {
  const data = await fetchSanity<ProductCategory[]>(Q.ALL_PRODUCT_CATEGORIES_QUERY);
  return data && data.length ? data : mock.productCategories;
}

export async function getProductCategoryBySlug(slug: string): Promise<ProductCategory | null> {
  const data = await fetchSanity<ProductCategory>(Q.PRODUCT_CATEGORY_BY_SLUG_QUERY, { slug });
  return data ?? mock.productCategories.find((c) => c.slug === slug) ?? null;
}

export async function getProductsByCategory(slug: string): Promise<Product[]> {
  const data = await fetchSanity<Product[]>(Q.PRODUCTS_BY_CATEGORY_QUERY, { slug });
  if (data && data.length) return data;
  return mock.products.filter((p) => p.categorySlug === slug);
}

export async function getAllProducts(): Promise<Product[]> {
  const data = await fetchSanity<Product[]>(Q.ALL_PRODUCTS_QUERY);
  if (data && data.length) return data;
  return mock.products;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const data = await fetchSanity<Product[]>(Q.FEATURED_PRODUCTS_QUERY);
  if (data && data.length) return data;
  const featuredMock = mock.products.filter((p) => p.featured);
  return featuredMock.length ? featuredMock : mock.products.slice(0, 4);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const data = await fetchSanity<Product>(Q.PRODUCT_BY_SLUG_QUERY, { slug });
  return data ?? mock.products.find((p) => p.slug === slug) ?? null;
}

/**
 * Related products: if the editor has manually set "Related Products" on the
 * product in Sanity, that hand-picked list is used as-is (manual override).
 * Otherwise, related products are generated automatically from other
 * products in the same category, excluding the current product.
 */
export async function getRelatedProducts(product: Product, limit = 4): Promise<Product[]> {
  if (product.relatedProductSlugs && product.relatedProductSlugs.length > 0) {
    const manual = await Promise.all(
      product.relatedProductSlugs.map((slug) => getProductBySlug(slug))
    );
    const resolved = manual.filter((p): p is Product => Boolean(p));
    if (resolved.length) return resolved.slice(0, limit);
  }

  const sameCategory = await getProductsByCategory(product.categorySlug);
  return sameCategory.filter((p) => p.slug !== product.slug).slice(0, limit);
}

export async function getIndustries(): Promise<Industry[]> {
  const data = await fetchSanity<Industry[]>(Q.ALL_INDUSTRIES_QUERY);
  return data && data.length ? data : mock.industries;
}

export async function getIndustryBySlug(slug: string): Promise<Industry | null> {
  const data = await fetchSanity<Industry>(Q.INDUSTRY_BY_SLUG_QUERY, { slug });
  return data ?? mock.industries.find((i) => i.slug === slug) ?? null;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const data = await fetchSanity<Testimonial[]>(Q.ALL_TESTIMONIALS_QUERY);
  return data && data.length ? data : mock.testimonials;
}

export async function getFaqs(): Promise<FaqItem[]> {
  const data = await fetchSanity<FaqItem[]>(Q.ALL_FAQS_QUERY);
  return data && data.length ? data : mock.faqs;
}
