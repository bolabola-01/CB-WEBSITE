import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import { getFaqs } from "@/lib/content";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions | CV Caltic Baru",
  description:
    "Answers to common questions about ordering, OEM and private label production, minimum order quantities, lead times, and quality assurance at CV Caltic Baru.",
  path: "/faq",
});

export default async function FaqPage() {
  const faqs = await getFaqs();

  const categories = Array.from(new Set(faqs.map((f) => f.category).filter(Boolean)));

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <Breadcrumbs items={[{ name: "FAQ", path: "/faq" }]} />

      <section className="container max-w-4xl py-20">
        <SectionEyebrow number="01" label="Frequently Asked Questions" className="mb-8" />
        <h1 className="headline text-4xl md:text-5xl mb-12">Questions, Answered.</h1>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="font-label text-xs tracking-widest2 uppercase text-terracotta-500 mb-4">
                {category}
              </h2>
              <div className="divide-y divide-line border-t border-line">
                {faqs
                  .filter((f) => f.category === category)
                  .map((faq) => (
                    <details key={faq._id} className="group py-5">
                      <summary className="flex items-center justify-between cursor-pointer list-none">
                        <span className="font-sans font-medium text-navy-700 pr-4">
                          {faq.question}
                        </span>
                        <span className="text-terracotta-500 text-xl leading-none shrink-0 group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-sm text-ink-soft leading-relaxed max-w-2xl">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        heading="Still have a question?"
        description="Reach out directly — our marketing team responds to every inquiry."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "View Products", href: "/products" }}
      />
    </>
  );
}
