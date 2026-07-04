import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import ProcessStep from "@/components/ui/ProcessStep";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Quality Assurance | CV Caltic Baru",
  description:
    "How CV Caltic Baru maintains consistent quality across hotel amenities and linen manufacturing — from raw material inspection to client sample approval.",
  path: "/quality-assurance",
});

const qaSteps = [
  {
    number: "01",
    title: "Raw Material Inspection",
    description:
      "Every material is sourced from vetted suppliers and inspected upon receipt for compliance with hospitality-grade standards.",
  },
  {
    number: "02",
    title: "In-Process Quality Control",
    description:
      "Our production team monitors quality at each manufacturing stage, checking for consistency and precision across every batch.",
  },
  {
    number: "03",
    title: "Finished Product Testing",
    description:
      "Completed products undergo testing for packaging integrity, product quality, and branding accuracy before release.",
  },
  {
    number: "04",
    title: "Client Approval & Sampling",
    description:
      "Pre-production samples are provided for your review and written approval before full manufacturing begins.",
  },
];

export default function QualityAssurancePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Quality Assurance", path: "/quality-assurance" }]} />

      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="px-6 md:px-16 py-20 flex flex-col justify-center">
          <SectionEyebrow number="01" label="Quality Assurance" className="mb-8" />
          <h1 className="headline text-4xl md:text-5xl max-w-lg">
            Built to Consistent Hospitality Standards.
          </h1>
          <span className="terracotta-tick mt-6 mb-6" />
          <p className="text-sm md:text-base text-ink-soft leading-relaxed max-w-lg">
            Consistency matters more in hospitality supply than almost anywhere else — guests
            notice when amenities or linen vary from room to room. Our quality process is
            structured around four checkpoints, applied to every order regardless of size.
          </p>
        </div>
        <div className="relative min-h-[360px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/photography/quality-inspection.jpg"
            alt="Staff member inspecting finished products"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="container max-w-8xl py-20">
        <SectionEyebrow number="02" label="Our Process" className="mb-10" />
        <h2 className="headline text-3xl md:text-4xl mb-8">Four Quality Checkpoints.</h2>
        <div>
          {qaSteps.map((step) => (
            <ProcessStep key={step.number} {...step} />
          ))}
        </div>
      </section>

      <section className="bg-paper-warm py-20">
        <div className="container max-w-8xl">
          <SectionEyebrow number="03" label="Continuous Improvement" className="mb-10" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="headline text-3xl md:text-4xl mb-6">
                Quality Standards That Keep Evolving.
              </h2>
              <p className="text-sm md:text-base text-ink-soft leading-relaxed mb-4">
                Our commitment to quality isn&apos;t fixed at a single standard — we review
                processes, materials, and touchpoints on an ongoing basis to keep pace with
                what hospitality operators expect.
              </p>
              <p className="text-sm md:text-base text-ink-soft leading-relaxed">
                Every batch of raw material goes through a defined vetting process before
                entering production. Multi-stage inspections cover in-process checks,
                pre-shipment audits, and final quality reviews. Client feedback is fed directly
                back into our quality framework, so standards evolve alongside the properties
                we supply.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                "Stringent raw material selection",
                "Only certified, hospitality-grade inputs sourced",
                "Multi-stage inspection processes",
                "Customer-driven quality feedback loops",
              ].map((item) => (
                <div key={item} className="border border-line p-5">
                  <span className="terracotta-tick mb-3" />
                  <p className="text-sm text-navy-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Want to review a sample before ordering?"
        description="Ask about pre-production samples for the specific products you're considering."
      />
    </>
  );
}
