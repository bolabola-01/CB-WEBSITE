import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import CTASection from "@/components/sections/CTASection";
import { getIndustries } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 60;

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve | CV Caltic Baru",
  description:
    "CV Caltic Baru supplies hotels, resorts, villas, restaurants, hospitals, commercial buildings, hospitality groups, and government projects across Indonesia.",
  path: "/industries",
});

export default async function IndustriesPage() {
  const industries = await getIndustries();

  return (
    <>
      <Breadcrumbs items={[{ name: "Industries", path: "/industries" }]} />

      <section className="container max-w-8xl py-20">
        <SectionEyebrow number="01" label="Industries We Serve" className="mb-8" />
        <h1 className="headline text-4xl md:text-5xl max-w-2xl mb-6">
          Manufacturing for Every Corner of Hospitality.
        </h1>
        <p className="text-sm md:text-base text-ink-soft leading-relaxed max-w-2xl mb-12">
          From single-property villas to multi-site hospitality groups, our manufacturing and
          procurement processes are structured to fit a range of business types and order
          volumes.
        </p>
        <IndustriesGrid industries={industries} />
      </section>

      <CTASection
        heading="Don't see your business type listed?"
        description="We work with a wide range of hospitality and commercial operations — get in touch and we'll confirm how we can help."
      />
    </>
  );
}
