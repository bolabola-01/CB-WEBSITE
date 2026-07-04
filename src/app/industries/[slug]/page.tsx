import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import CTASection from "@/components/sections/CTASection";
import { getIndustries, getIndustryBySlug, getProductCategories } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 60;

export async function generateStaticParams() {
  const industries = await getIndustries();
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const industry = await getIndustryBySlug(params.slug);
  if (!industry) return {};
  return buildMetadata({
    title: `${industry.title} Hospitality Supplier | CV Caltic Baru`,
    description: industry.summary,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const industry = await getIndustryBySlug(params.slug);
  if (!industry) notFound();

  const categories = await getProductCategories();
  const relatedCategories = categories.filter((c) =>
    industry.relatedCategorySlugs?.includes(c.slug)
  );

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Industries", path: "/industries" },
          { name: industry.title, path: `/industries/${industry.slug}` },
        ]}
      />

      <section className="container max-w-8xl py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <SectionEyebrow label="Industry" className="mb-8" />
          <h1 className="headline text-4xl md:text-5xl mb-6">{industry.title}</h1>
          <span className="terracotta-tick mb-6" />
          <p className="text-sm md:text-base text-ink-soft leading-relaxed">
            {industry.description}
          </p>
        </div>
        <div className="relative min-h-[280px] border border-line bg-paper-warm">
          {industry.image?.asset?.url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={industry.image.asset.url}
              alt={industry.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center">
              <span className="font-display italic text-2xl text-navy-700/30">
                {industry.title}
              </span>
            </div>
          )}
        </div>
      </section>

      {relatedCategories.length > 0 && (
        <section className="bg-paper-warm py-20">
          <div className="container max-w-8xl">
            <SectionEyebrow label="Relevant Product Categories" className="mb-10" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/products/${cat.slug}`}
                  className="card-bordered group"
                >
                  <h3 className="font-sans font-semibold text-navy-700">{cat.title}</h3>
                  <span className="terracotta-tick mt-3 mb-4" />
                  <p className="text-sm text-ink-soft leading-relaxed">{cat.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        heading={`Sourcing for a ${industry.title.toLowerCase()} project?`}
        description="Tell us about your property and requirements — we'll recommend relevant products and confirm a quotation."
      />
    </>
  );
}
