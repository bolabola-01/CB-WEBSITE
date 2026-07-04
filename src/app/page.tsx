import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroFullBleed } from "@/components/sections/Hero";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import StatBand from "@/components/ui/StatBand";
import FeatureCard from "@/components/ui/FeatureCard";
import ProductCategoryGrid from "@/components/sections/ProductCategoryGrid";
import ProductCard from "@/components/products/ProductCard";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import ClientsSection from "@/components/sections/ClientsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CTASection from "@/components/sections/CTASection";
import { getProductCategories, getFeaturedProducts, getIndustries, getTestimonials } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { BRAND } from "@/lib/constants";

// Revalidate periodically, plus instantly via the Sanity webhook — see
// docs/CONTENT-REVALIDATION.md.
export const revalidate = 60;

export const metadata: Metadata = buildMetadata({
  title: "CV Caltic Baru | Hotel Amenities & Linen Manufacturer Indonesia",
  description:
    "CV Caltic Baru manufactures and supplies hotel amenities, linen, and guest room accessories across Indonesia. OEM production, private label, and bulk hospitality procurement.",
  path: "/",
});

const featureCards = [
  {
    title: "Fully Customizable",
    description:
      "Every product is manufactured to your exact specifications — logo printing, materials, finishes, and packaging tailored to your brand identity.",
    icon: "Settings2" as const,
  },
  {
    title: "OEM & Private Label",
    description:
      "We manufacture under your brand name. Your identity and specifications, delivered with consistent manufacturing practices.",
    icon: "Tag" as const,
  },
  {
    title: "Quality Assurance",
    description:
      "Defined quality control protocols at every production stage, from raw material inspection through final testing.",
    icon: "ShieldCheck" as const,
  },
  {
    title: "Wide Product Range",
    description:
      "From amenities and linen to F&B textiles and packaging — a full hospitality supply range from one manufacturing partner.",
    icon: "LayoutGrid" as const,
  },
  {
    title: "Reliable Production",
    description:
      "Consistent lead times, transparent communication, and dependable delivery. Built for long-term manufacturing partnerships.",
    icon: "Truck" as const,
  },
  {
    title: "Hospitality Expertise",
    description:
      "11+ years of manufacturing focused specifically on hospitality operations and guest-facing product requirements.",
    icon: "Building2" as const,
  },
];

export default async function HomePage() {
  const [categories, featuredProducts, industries, testimonials] = await Promise.all([
    getProductCategories(),
    getFeaturedProducts(),
    getIndustries(),
    getTestimonials(),
  ]);

  return (
    <>
      <HeroFullBleed
        eyebrow="Delivering Quality, Service, and Innovation"
        headingItalic="Your Trusted"
        heading="Hospitality Supplier"
        subheading="CV Caltic Baru manufactures and supplies fully customizable hotel amenities, linen, and guest room products for hospitality businesses across Indonesia."
        imageUrl="/images/photography/hero-restaurant.jpg"
        imageAlt="Hotel restaurant interior"
        primaryCta={{ label: "Request a Quotation", href: "/contact" }}
        secondaryCta={{ label: "View Products", href: "/products" }}
      />

      {/* About teaser + stat band */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="px-6 md:px-16 py-20 flex flex-col justify-center">
          <SectionEyebrow number="01" label="About CV Caltic Baru" className="mb-8" />
          <h2 className="headline text-4xl md:text-5xl">Crafted for Hospitality.</h2>
          <span className="terracotta-tick mt-6 mb-6" />
          <p className="text-sm md:text-base text-ink-soft leading-relaxed max-w-md">
            {BRAND.legalName} is an Indonesian hospitality manufacturing company producing
            fully customizable products for hotels, resorts, villas, serviced apartments,
            hospitals, restaurants, cafés, and commercial buildings.
          </p>
          <p className="mt-4 text-sm md:text-base text-ink-soft leading-relaxed max-w-md">
            We partner directly with hospitality brands to manufacture products that carry
            their own identity — from amenities and linen to packaging — each tailored to
            exact specifications.
          </p>
          <Link href="/about" className="btn-secondary mt-8 self-start">
            Learn About Us
          </Link>
        </div>
        <StatBand
          stats={[
            { value: BRAND.yearsExperience, label: "Years of Manufacturing Experience" },
            { value: BRAND.productsCount, label: "Products Across All Categories" },
            { value: BRAND.partnersCount, label: "Hotel & Resort Partnerships" },
            { value: BRAND.customizationRate, label: "Fully Customizable Manufacturing" },
          ]}
        />
      </section>

      {/* Why choose us */}
      <section className="container max-w-8xl py-20">
        <SectionEyebrow number="02" label="Why Choose Us" className="mb-8" />
        <h2 className="headline text-3xl md:text-4xl mb-10">A Partner You Can Trust.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      {/* Product categories */}
      <section className="bg-paper-warm py-20">
        <div className="container max-w-8xl">
          <SectionEyebrow number="03" label="What We Manufacture" className="mb-8" />
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <h2 className="headline text-3xl md:text-4xl">Our Product Categories.</h2>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-terracotta-500 hover:gap-2.5 transition-all"
            >
              View all products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ProductCategoryGrid categories={categories} />
        </div>
      </section>

      {/* Featured products */}
      {featuredProducts.length > 0 && (
        <section className="container max-w-8xl py-20">
          <SectionEyebrow number="04" label="Featured Products" className="mb-8" />
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <h2 className="headline text-3xl md:text-4xl">A Few of Our Products.</h2>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-terracotta-500 hover:gap-2.5 transition-all"
            >
              Browse the full catalogue <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Industries */}
      <section className="container max-w-8xl py-20">
        <SectionEyebrow number="05" label="Industries We Serve" className="mb-8" />
        <h2 className="headline text-3xl md:text-4xl mb-10">Who We Manufacture For.</h2>
        <IndustriesGrid industries={industries.slice(0, 6)} />
        <div className="mt-10 text-center">
          <Link href="/industries" className="btn-secondary">
            View All Industries
          </Link>
        </div>
      </section>

      {/* Manufacturing / OEM teaser */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[360px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/photography/factory-production-floor.jpg"
            alt="Production floor with staff assembling amenity kits"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="bg-navy-700 text-paper px-6 md:px-16 py-20 flex flex-col justify-center">
          <p className="font-label text-xs tracking-widest2 uppercase text-terracotta-400 mb-6">
            06 — Manufacturing &amp; OEM
          </p>
          <h2 className="font-display italic text-3xl md:text-4xl max-w-md">
            Your Brand, Manufactured to Order.
          </h2>
          <p className="mt-6 text-sm md:text-base text-paper/75 leading-relaxed max-w-md">
            Our production facility handles OEM and private label manufacturing end to end —
            from raw material sourcing through final inspection — so your brand appears
            consistently across every product we deliver.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/manufacturing" className="btn-ghost-light">
              Manufacturing Capability
            </Link>
            <Link href="/oem-private-label" className="btn-ghost-light">
              OEM &amp; Private Label
            </Link>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="container max-w-8xl py-20">
        <SectionEyebrow number="07" label="Our Clients" className="mb-8" />
        <h2 className="headline text-3xl md:text-4xl mb-10">Trusted by Hospitality Brands.</h2>
        <ClientsSection />
      </section>

      {testimonials[0] && <TestimonialSection testimonial={testimonials[0]} />}

      <CTASection
        heading="Ready to discuss your hospitality supply requirements?"
        description="Tell us what you need — products, estimated volume, and timeline — and our marketing team will follow up with a tailored quotation."
      />
    </>
  );
}
