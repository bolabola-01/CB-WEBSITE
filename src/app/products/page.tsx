import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import ProductCategoryGrid from "@/components/sections/ProductCategoryGrid";
import ProductBrowser from "@/components/products/ProductBrowser";
import CTASection from "@/components/sections/CTASection";
import { getProductCategories, getAllProducts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

// Revalidate periodically, plus instantly via the Sanity webhook — see
// docs/CONTENT-REVALIDATION.md. This is how this page picks up newly
// published products and categories automatically, with no code changes.
export const revalidate = 60;

export const metadata: Metadata = buildMetadata({
  title: "Hotel Amenities & Linen Products | CV Caltic Baru",
  description:
    "Browse hotel amenities, bedding, linen, and guest accessory categories manufactured and supplied by CV Caltic Baru in Indonesia. No pricing shown — request a quotation.",
  path: "/products",
});

export default async function ProductsIndexPage() {
  const [categories, products] = await Promise.all([getProductCategories(), getAllProducts()]);

  return (
    <>
      <Breadcrumbs items={[{ name: "Products", path: "/products" }]} />

      <section className="container max-w-8xl py-20">
        <SectionEyebrow number="01" label="What We Manufacture" className="mb-8" />
        <h1 className="headline text-4xl md:text-5xl max-w-2xl mb-6">Our Product Categories.</h1>
        <p className="text-sm md:text-base text-ink-soft leading-relaxed max-w-2xl mb-12">
          Every product listed is manufactured to order and fully customizable in material,
          size, branding, and packaging. Specific pricing, minimum order quantities, and lead
          times are confirmed at quotation, tailored to your order.
        </p>
        <ProductCategoryGrid categories={categories} />
      </section>

      <section className="bg-paper-warm py-20">
        <div className="container max-w-8xl">
          <SectionEyebrow number="02" label="Browse All Products" className="mb-8" />
          <h2 className="headline text-3xl md:text-4xl mb-10">Search the Full Catalogue.</h2>
          <ProductBrowser products={products} categories={categories} />
        </div>
      </section>

      <CTASection
        heading="Looking for a product that isn't listed?"
        description="Our manufacturing range extends beyond this overview — send us your requirements and we'll confirm what's possible."
      />
    </>
  );
}
