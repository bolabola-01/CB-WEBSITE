import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import FeatureCard from "@/components/ui/FeatureCard";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "OEM & Private Label Hotel Amenities | CV Caltic Baru",
  description:
    "CV Caltic Baru produces OEM and private label hotel amenities, linen, and guest products under your own brand, from existing catalogue items or custom development.",
  path: "/oem-private-label",
});

export default function OemPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "OEM & Private Label", path: "/oem-private-label" }]} />

      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="px-6 md:px-16 py-20 flex flex-col justify-center">
          <SectionEyebrow number="01" label="OEM & Private Label" className="mb-8" />
          <h1 className="headline text-4xl md:text-5xl max-w-lg">
            Manufactured Exclusively Under Your Brand.
          </h1>
          <span className="terracotta-tick mt-6 mb-6" />
          <p className="text-sm md:text-base text-ink-soft leading-relaxed max-w-lg">
            OEM and private label production is a core part of our business, not an add-on
            service. We manufacture existing catalogue products under your label, or develop a
            new product from a brief and reference samples — with your branding applied
            consistently across labeling, packaging, and presentation.
          </p>
        </div>
        <div className="relative min-h-[360px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/photography/whychoose-tabletop.jpg"
            alt="Amenity items packaged with custom branding"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="container max-w-8xl py-20">
        <SectionEyebrow number="02" label="How It Works" className="mb-10" />
        <h2 className="headline text-3xl md:text-4xl mb-10">Two Ways to Brand Your Products.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-bordered">
            <h3 className="font-sans font-semibold text-navy-700 text-lg">OEM Production</h3>
            <span className="terracotta-tick mt-3 mb-4" />
            <p className="text-sm text-ink-soft leading-relaxed">
              Select from our existing catalogue of amenities, linen, and accessories, and we
              manufacture them under your property or brand name. This is the faster route to
              a branded product line, since the base product specification is already
              established.
            </p>
          </div>
          <div className="card-bordered">
            <h3 className="font-sans font-semibold text-navy-700 text-lg">Private Label Development</h3>
            <span className="terracotta-tick mt-3 mb-4" />
            <p className="text-sm text-ink-soft leading-relaxed">
              Bring us a brief, reference samples, or a specific formulation and packaging
              requirement, and our team develops the product from scratch — including
              sampling and approval rounds — before moving into full production.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper-warm py-20">
        <div className="container max-w-8xl">
          <SectionEyebrow number="03" label="What's Included" className="mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Branded Packaging"
              description="Printed, embroidered, or debossed logo application across bottles, labels, and packaging formats."
              icon="Tag"
            />
            <FeatureCard
              title="Product Development"
              description="Formulation, material, and design input from brief through to an approved production sample."
              icon="Beaker"
            />
            <FeatureCard
              title="Consistent Specification"
              description="Once approved, specifications are locked so repeat orders match the original sample."
              icon="ClipboardCheck"
            />
            <FeatureCard
              title="Flexible Order Volumes"
              description="Production planning that accommodates both large-scale and smaller private label runs."
              icon="Layers"
            />
            <FeatureCard
              title="Packaging Design Support"
              description="Guidance on packaging formats that suit your product line and budget."
              icon="Package"
            />
            <FeatureCard
              title="Ongoing Account Management"
              description="A consistent point of contact for repeat orders, specification changes, and new product requests."
              icon="Users"
            />
          </div>
        </div>
      </section>

      <CTASection
        heading="Considering a private label amenity line?"
        description="Share your brief, reference samples, or existing product specifications and we'll advise on feasibility and next steps."
      />
    </>
  );
}
