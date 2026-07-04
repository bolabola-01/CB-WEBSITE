import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import StatBand from "@/components/ui/StatBand";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "About CV Caltic Baru — Hospitality Manufacturer Indonesia",
  description:
    "CV Caltic Baru is an Indonesian hospitality manufacturing company with 11+ years of experience supplying hotels, resorts, villas, restaurants, and hospitals.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About", path: "/about" }]} />

      {/* Hero image */}
      <section className="relative h-[46vh] min-h-[320px] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/about-warehouse-wide.jpg"
          alt="CV Caltic Baru manufacturing warehouse"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/55 flex items-center justify-center">
          <h1 className="font-display italic text-4xl md:text-6xl text-paper">About Us</h1>
        </div>
      </section>

      {/* Founding story */}
      <section className="container max-w-8xl py-20">
        <SectionEyebrow number="01" label="Our Story" className="mb-10" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-5 text-sm md:text-base text-ink-soft leading-relaxed">
            <p>
              Founded with a focus on the hospitality industry, {BRAND.legalName} has grown
              into a manufacturing partner for hotels, restaurants, and hospitality businesses
              across Indonesia. Our objective from day one has been straightforward: give
              hospitality operators a dependable source for the amenities, linen, and guest
              products their properties run on.
            </p>
            <p>
              We believe in building long-term partnerships based on transparency, consistency,
              and a clear understanding of what hospitality procurement teams need. From the
              first order onward, our focus is on making sourcing more straightforward for the
              properties we work with.
            </p>
          </div>
          <div className="space-y-5 text-sm md:text-base text-ink-soft leading-relaxed">
            <p>
              Our core values guide day-to-day production decisions. Quality is checked at
              every stage of manufacturing. Reliability means clients can plan around the lead
              times we commit to. And a customer-first approach means we adapt product
              specifications, packaging, and support to how each property actually operates.
            </p>
            <p>
              Together, these values define how we operate as a manufacturing partner —
              not just as a one-time vendor.
            </p>
          </div>
        </div>
      </section>

      {/* Stat band */}
      <section>
        <StatBand
          orientation="horizontal"
          stats={[
            { value: BRAND.yearsExperience, label: "Years of Manufacturing Experience" },
            { value: BRAND.productsCount, label: "Products Across All Categories" },
            { value: BRAND.partnersCount, label: "Hotel & Resort Partnerships" },
            { value: BRAND.customizationRate, label: "Fully Customizable Manufacturing" },
          ]}
        />
      </section>

      {/* Expertise */}
      <section className="container max-w-8xl py-20">
        <SectionEyebrow number="02" label="Our Expertise" className="mb-10" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="headline text-3xl md:text-4xl mb-6">
              Manufacturing Built Around Hospitality Operations.
            </h2>
            <p className="text-sm md:text-base text-ink-soft leading-relaxed mb-6">
              {BRAND.legalName} brings {BRAND.yearsExperience} years of specialized experience
              to hospitality product manufacturing. Our capabilities span the full range of
              hospitality supply — from amenities and guest room accessories to linen and
              packaging. We combine production expertise with practical manufacturing
              technology to meet the operational standards of hotels, resorts, villas, and
              serviced residences.
            </p>
            <p className="text-sm md:text-base text-ink-soft leading-relaxed">
              Every product we produce is engineered around your brand&apos;s specifications — from
              material selection and finish to packaging design and logo placement. We serve a
              range of hospitality segments including hotels, boutique resorts, private villas,
              serviced apartments, and healthcare facilities, with production planning that
              accommodates both large supply contracts and smaller bespoke runs.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="border border-line p-6">
              <h3 className="font-sans font-semibold text-navy-700 text-sm">
                Hospitality manufacturing focus
              </h3>
              <span className="terracotta-tick mt-3 mb-3" />
              <p className="text-sm text-ink-soft">
                Every product line is developed specifically for guest-facing hospitality use.
              </p>
            </div>
            <div className="border border-line p-6">
              <h3 className="font-sans font-semibold text-navy-700 text-sm">
                Fully customizable solutions
              </h3>
              <span className="terracotta-tick mt-3 mb-3" />
              <p className="text-sm text-ink-soft">
                Materials, finishes, and branding adapted to your specification on every order.
              </p>
            </div>
            <div className="border border-line p-6">
              <h3 className="font-sans font-semibold text-navy-700 text-sm">
                Broad segment coverage
              </h3>
              <span className="terracotta-tick mt-3 mb-3" />
              <p className="text-sm text-ink-soft">
                Serving hotels, resorts, villas, hospitals, and commercial developments.
              </p>
            </div>
            <div className="border border-line p-6">
              <h3 className="font-sans font-semibold text-navy-700 text-sm">
                Responsible sourcing
              </h3>
              <span className="terracotta-tick mt-3 mb-3" />
              <p className="text-sm text-ink-soft">
                Materials and packaging choices considered with sustainability in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Interested in working with our manufacturing team?"
        description="Get in touch to discuss your property's requirements and request a tailored quotation."
      />
    </>
  );
}
