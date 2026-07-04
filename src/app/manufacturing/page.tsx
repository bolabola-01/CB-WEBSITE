import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import ProcessStep from "@/components/ui/ProcessStep";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Manufacturing Capability | CV Caltic Baru",
  description:
    "CV Caltic Baru's manufacturing facility handles material sourcing, production, quality control, packaging, and delivery for hospitality products at scale.",
  path: "/manufacturing",
});

const workflow = [
  {
    number: "01",
    title: "Requirement & Specification",
    description:
      "We review your product list, target specifications, and branding requirements to scope the order and confirm feasibility.",
  },
  {
    number: "02",
    title: "Material Selection",
    description:
      "Materials are selected from our supplier base to match the product's intended use, durability requirements, and budget.",
  },
  {
    number: "03",
    title: "Sampling",
    description:
      "Pre-production samples are produced for your review and written approval before full manufacturing begins.",
  },
  {
    number: "04",
    title: "Production",
    description:
      "Approved specifications move into production, combining automated processes with hand-finishing where precision matters.",
  },
  {
    number: "05",
    title: "Quality Control",
    description:
      "In-process checks and a final inspection are carried out before any order is cleared for packaging.",
  },
  {
    number: "06",
    title: "Packaging & Delivery",
    description:
      "Products are packaged to your specification and prepared for delivery on the schedule confirmed at quotation.",
  },
];

export default function ManufacturingPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Manufacturing", path: "/manufacturing" }]} />

      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="px-6 md:px-16 py-20 flex flex-col justify-center order-2 lg:order-1">
          <SectionEyebrow number="01" label="Manufacturing Capability" className="mb-8" />
          <h1 className="headline text-4xl md:text-5xl max-w-lg">
            Scale and Flexibility, Under One Roof.
          </h1>
          <span className="terracotta-tick mt-6 mb-6" />
          <p className="text-sm md:text-base text-ink-soft leading-relaxed max-w-lg">
            Our manufacturing infrastructure is built to serve hospitality businesses of every
            size — from single-property villas to multi-property hotel groups. Production
            planning accommodates high-volume supply contracts alongside smaller, bespoke
            runs, with the same inspection standards applied at every scale.
          </p>
        </div>
        <div className="relative min-h-[360px] order-1 lg:order-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/photography/factory-warehouse-aisle.jpg"
            alt="Finished goods warehouse aisle"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Capability list */}
      <section className="container max-w-8xl py-20">
        <SectionEyebrow number="02" label="Production Capabilities" className="mb-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Large-scale capacity", desc: "Production planning for high-volume hotel chain contracts." },
            { title: "Agile bespoke production", desc: "Smaller, precision-crafted runs for villas and boutique properties." },
            { title: "Diverse materials & finishes", desc: "An extensive library of materials, textures, and formats." },
            { title: "End-to-end supply flexibility", desc: "Flexible scheduling, account management, and delivery logistics." },
          ].map((item) => (
            <div key={item.title} className="border border-line p-6">
              <h3 className="font-sans font-semibold text-navy-700 text-sm">{item.title}</h3>
              <span className="terracotta-tick mt-3 mb-3" />
              <p className="text-sm text-ink-soft leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-paper-warm py-20">
        <div className="container max-w-8xl">
          <SectionEyebrow number="03" label="Production Workflow" className="mb-10" />
          <h2 className="headline text-3xl md:text-4xl mb-8">From Specification to Delivery.</h2>
          <div>
            {workflow.map((step) => (
              <ProcessStep key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Factory floor image band */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[300px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/photography/factory-production-floor.jpg"
            alt="Staff assembling products on the production floor"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="relative min-h-[300px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/photography/warehouse-stacked-linen.jpg"
            alt="Warehouse shelving stacked with packaged linen"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      <CTASection
        heading="Have a product specification ready?"
        description="Send us your requirements and we'll confirm feasibility, lead time, and pricing."
        primaryCta={{ label: "Request a Quotation", href: "/contact" }}
        secondaryCta={{ label: "OEM & Private Label", href: "/oem-private-label" }}
      />
    </>
  );
}
