import type { MetadataRoute } from "next";
import { getProductCategories, getAllProducts, getIndustries } from "@/lib/content";
import { BRAND } from "@/lib/constants";

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [categories, products, industries] = await Promise.all([
    getProductCategories(),
    getAllProducts(),
    getIndustries(),
  ]);

  const staticRoutes = [
    "",
    "/about",
    "/manufacturing",
    "/oem-private-label",
    "/quality-assurance",
    "/industries",
    "/products",
    "/catalogue",
    "/faq",
    "/contact",
  ].map((path) => ({
    url: `${BRAND.siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${BRAND.siteUrl}/products/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const productRoutes = products.map((p) => ({
    url: `${BRAND.siteUrl}/products/${p.categorySlug}/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  const industryRoutes = industries.map((i) => ({
    url: `${BRAND.siteUrl}/industries/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...industryRoutes];
}
