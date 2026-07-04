import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, FileText } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ProductGallery from "@/components/products/ProductGallery";
import ProductSpecTable from "@/components/products/ProductSpecTable";
import RelatedProducts from "@/components/products/RelatedProducts";
import CTASection from "@/components/sections/CTASection";
import QuoteTrigger from "@/components/whatsapp/QuoteTrigger";
import JsonLd from "@/components/seo/JsonLd";
import { getAllProducts, getProductBySlug, getProductCategoryBySlug } from "@/lib/content";
import { buildMetadata, productJsonLd } from "@/lib/seo";

// Revalidate at most once a minute, and instantly whenever the Sanity
// webhook hits /api/revalidate after a product is published — see
// docs/CONTENT-REVALIDATION.md.
export const revalidate = 60;

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((p) => ({ category: p.categorySlug, slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string; slug: string };
}): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  if (!product) return {};
  return buildMetadata({
    title: product.seo?.metaTitle || `${product.title} — ${product.categoryTitle} | CV Caltic Baru`,
    description: product.seo?.metaDescription || product.shortDescription,
    path: `/products/${product.categorySlug}/${product.slug}`,
    seo: product.seo,
  });
}

function ListBlock({ title, items }: { title: string; items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div>
      <h3 className="font-sans font-semibold text-navy-700 text-sm uppercase tracking-wide mb-3">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
            <Check className="h-4 w-4 text-terracotta-500 mt-0.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function ProductDetailPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const product = await getProductBySlug(params.slug);
  if (!product || product.categorySlug !== params.category) notFound();

  const category = await getProductCategoryBySlug(params.category);

  // Cover image leads the gallery; avoid showing it twice if it's already
  // the first gallery item (editors often upload it into both fields).
  const galleryImages = product.coverImage
    ? [
        product.coverImage,
        ...(product.gallery || []).filter((img) => img.asset.url !== product.coverImage?.asset.url),
      ]
    : product.gallery || [];

  return (
    <>
      <JsonLd data={productJsonLd(product)} />
      <Breadcrumbs
        items={[
          { name: "Products", path: "/products" },
          { name: category?.title || product.categoryTitle, path: `/products/${product.categorySlug}` },
          { name: product.title, path: `/products/${product.categorySlug}/${product.slug}` },
        ]}
      />

      <section className="container max-w-8xl py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <ProductGallery gallery={galleryImages} title={product.title} />

          <div>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <p className="eyebrow">{product.categoryTitle}</p>
              {product.isNew && (
                <span className="bg-terracotta-500 text-paper text-[10px] font-medium uppercase tracking-wide px-2 py-1">
                  New
                </span>
              )}
              {product.featured && (
                <span className="bg-navy-700 text-paper text-[10px] font-medium uppercase tracking-wide px-2 py-1">
                  Featured
                </span>
              )}
            </div>
            <h1 className="headline text-3xl md:text-4xl mb-2">{product.title}</h1>
            {product.productCode && (
              <p className="text-xs text-ink-soft mb-6">Product Code: {product.productCode}</p>
            )}
            <p className={`text-sm md:text-base text-ink-soft leading-relaxed ${product.productCode ? "" : "mt-6"} mb-8`}>
              {product.fullDescription}
            </p>

            <div className="space-y-6 mb-8">
              <ListBlock title="Materials" items={product.materials} />
              <ListBlock title="Applications" items={product.applications} />
              <ListBlock title="Features" items={product.features} />
            </div>

            <ProductSpecTable specs={product.specs || []} />

            <div className="flex flex-wrap gap-4 mt-8">
              <QuoteTrigger className="btn-primary w-full sm:w-auto">
                Request a Quotation for This Product
              </QuoteTrigger>
              {product.pdf?.asset?.url && (
                <a
                  href={product.pdf.asset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full sm:w-auto gap-2"
                >
                  <FileText className="h-4 w-4" />
                  Download Spec Sheet
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Customization / Packaging */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16 border-t border-line pt-16">
          <ListBlock title="Customization Options" items={product.customizationOptions} />
          <ListBlock title="Packaging Options" items={product.packagingOptions} />
        </div>
      </section>

      <section className="bg-paper-warm py-16">
        <div className="container max-w-8xl">
          <RelatedProducts product={product} />
        </div>
      </section>

      <CTASection
        heading={`Interested in ${product.title.toLowerCase()}?`}
        description="Chat with our marketing team on WhatsApp for pricing, minimum order quantities, and lead times on this product."
        primaryCta={{ label: "Request a Quotation", href: "/contact" }}
        secondaryCta={{ label: "View Related Products", href: `/products/${product.categorySlug}` }}
      />
    </>
  );
}
