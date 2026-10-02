import type { Metadata } from "next";
import { Check } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { HeroFullBleed } from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";
import { BRANDED_AMENITY_PARTNERS } from "@/lib/brandedAmenities";

export const metadata: Metadata = buildMetadata({
  title: "Branded Amenities | Globally Recognized Fragrance Houses | CV Caltic Baru",
  description:
    "CV Caltic Baru supplies hotel amenity collections from globally recognized fragrance houses — sourced through our distributor network and delivered at hospitality-grade volume.",
  path: "/branded-amenities",
});

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Choose a Collection",
    description:
      "Select from our available branded amenity lines, or ask which other collections can be sourced for your market.",
  },
  {
    step: "02",
    title: "Confirm Formats & Volume",
    description:
      "We confirm available product formats, dispenser systems, and minimum order quantities against your property's needs.",
  },
  {
    step: "03",
    title: "Delivered to Your Property",
    description:
      "Orders are fulfilled through our distribution network and delivered on a schedule that matches your procurement cycle.",
  },
];

export default function BrandedAmenitiesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Branded Amenities", path: "/branded-amenities" }]} />

      <HeroFullBleed
        eyebrow="Exclusive Partnerships"
        headingItalic="Globally Recognized"
        heading="Branded Amenities"
        subheading="Bring a recognizable name to every guest bathroom — sourced through our distributor network and delivered at hospitality-grade volume and consistency."
        imageUrl="/images/branded-amenities/byredo.jpg"
        imageAlt="Byredo Bal d'Afrique amenity bottles styled on a dark bathroom shelf"
        primaryCta={{ label: "Request a Quotation", href: "/contact" }}
        secondaryCta={{ label: "View Products", href: "/products" }}
      />

      {/* Intro */}
      <section className="container max-w-8xl py-20">
        <div className="max-w-2xl">
          <SectionEyebrow number="01" label="About Branded Amenities" className="mb-8" />
          <h1 className="headline text-3xl md:text-4xl lg:text-5xl">
            A Recognizable Name, Guest-Ready.
          </h1>
          <span className="terracotta-tick mt-6 mb-6" />
          <p className="text-sm md:text-base text-ink-soft leading-relaxed">
            Beyond our own private label manufacturing, CV Caltic Baru also supplies amenity
            collections from globally recognized fragrance houses — sourced through our
            distributor network and delivered at hospitality-grade volume and consistency.
            It&apos;s a way to give guests an instantly recognizable name in the bathroom, without
            managing a separate supplier relationship yourself.
          </p>
        </div>
      </section>

      {/* Brand grid */}
      <section className="bg-navy-700 py-20 md:py-28">
        <div className="container max-w-8xl">
          <p className="font-label text-xs tracking-widest2 uppercase text-terracotta-400 mb-8">
            02 — Available Collections
          </p>
          <h2 className="font-display italic text-3xl md:text-4xl lg:text-5xl text-paper max-w-2xl mb-14">
            Our Current Partner Brands.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-paper/10">
            {BRANDED_AMENITY_PARTNERS.map((brand) => (
              <div key={brand.name} className="bg-navy-700 grid grid-cols-1 sm:grid-cols-2">
                <div className="relative h-72 sm:h-full min-h-[280px] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={brand.image}
                    alt={brand.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <p className="font-label text-[11px] tracking-widest2 uppercase text-terracotta-400 mb-2">
                    {brand.tagline}
                  </p>
                  <h3 className="font-display text-2xl text-paper mb-3">{brand.name}</h3>
                  <p className="text-sm text-paper/65 leading-relaxed mb-5">
                    {brand.description}
                  </p>
                  <ul className="space-y-1.5">
                    {brand.availableAs.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs text-paper/75"
                      >
                        <Check className="h-3.5 w-3.5 text-terracotta-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {brand.note && (
                    <p className="mt-5 text-[11px] tracking-wide uppercase text-terracotta-400">
                      {brand.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm text-paper/70 max-w-2xl">
            Ask us which other collections are available for your market and order volume —
            our distributor network extends beyond what&apos;s shown here. All collections
            are subject to brand approval and available upon request only.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="container max-w-8xl py-20">
        <SectionEyebrow number="03" label="How It Works" className="mb-10" />
        <h2 className="headline text-3xl md:text-4xl mb-10">From Selection to Delivery.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOW_IT_WORKS.map((item) => (
            <div key={item.step} className="card-bordered">
              <p className="font-display text-3xl text-terracotta-500 mb-4">{item.step}</p>
              <h3 className="font-sans font-semibold text-navy-700 text-lg mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Branded Amenities"
        heading="Want a recognizable name in your guest rooms?"
        description="Tell us your property profile and target collection, and our marketing team will confirm availability, formats, and lead times."
      />
    </>
  );
}
