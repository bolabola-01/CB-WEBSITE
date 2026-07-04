import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import ProductCard from "@/components/products/ProductCard";
import CTASection from "@/components/sections/CTASection";
import {
  getProductCategories,
  getProductCategoryBySlug,
  getProductsByCategory,
} from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

// Revalidate periodically, plus instantly via the Sanity webhook — see
// docs/CONTENT-REVALIDATION.md. This is how new products in this category
// appear automatically after publishing, with no code changes.
export const revalidate = 60;

export async function generateStaticParams() {
  const categories = await getProductCategories();
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const category = await getProductCategoryBySlug(params.category);
  if (!category) return {};
  return buildMetadata({
    title: `${category.title} | CV Caltic Baru`,
    description: category.shortDescription,
    path: `/products/${category.slug}`,
    seo: category.seo,
  });
}

export default async function ProductCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = await getProductCategoryBySlug(params.category);
  if (!category) notFound();

  const products = await getProductsByCategory(category.slug);
  const banner = category.bannerImage?.asset?.url ? category.bannerImage : category.coverImage;

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Products", path: "/products" },
          { name: category.title, path: `/products/${category.slug}` },
        ]}
      />

      <section className="relative h-[36vh] min-h-[260px] w-full overflow-hidden">
        {banner?.asset?.url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={banner.asset.url}
            alt={banner.alt || category.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-paper-warm" />
        )}
        <div className="absolute inset-0 bg-navy-900/50 flex items-center justify-center">
          <h1 className="font-display italic text-3xl md:text-5xl text-paper text-center px-6">
            {category.title}
          </h1>
        </div>
      </section>

      <section className="container max-w-8xl py-16">
        <SectionEyebrow label="Category Overview" className="mb-8" />
        <p className="text-sm md:text-base text-ink-soft leading-relaxed max-w-2xl mb-12">
          {category.description || category.shortDescription}
        </p>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="border border-line p-10 text-center text-sm text-ink-soft">
            Products in this category are being added to the catalogue. Contact us directly
            for the full current range and specifications.
          </div>
        )}
      </section>

      <CTASection
        heading={`Need a quotation for ${category.title.toLowerCase()}?`}
        description="Tell us the products, quantities, and branding requirements you have in mind."
      />
    </>
  );
}
