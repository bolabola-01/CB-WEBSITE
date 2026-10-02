import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BRANDED_AMENITY_PARTNERS } from "@/lib/brandedAmenities";

export default function BrandedAmenitiesSection() {
  return (
    <section className="bg-navy-700 py-20 md:py-28">
      <div className="container max-w-8xl">
        <p className="font-label text-xs tracking-widest2 uppercase text-terracotta-400 mb-8">
          07 — Branded Amenities
        </p>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper max-w-xl leading-[1.1]">
            <span className="italic">Recognizable brands,</span>
            <br />
            for every guest bathroom.
          </h2>
          <p className="text-sm md:text-base text-paper/70 leading-relaxed max-w-sm">
            Beyond private label manufacturing, we also supply amenity collections from
            globally recognized fragrance houses — sourced through our distributor network
            and delivered at hospitality-grade volume and consistency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-paper/10">
          {BRANDED_AMENITY_PARTNERS.map((brand) => (
            <div key={brand.name} className="bg-navy-700 group">
              <div className="relative h-72 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={brand.image}
                  alt={brand.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/0 to-navy-900/0" />
              </div>
              <div className="p-6">
                <p className="font-label text-[11px] tracking-widest2 uppercase text-terracotta-400 mb-2">
                  {brand.tagline}
                </p>
                <h3 className="font-display text-xl text-paper mb-3">{brand.name}</h3>
                <p className="text-xs text-paper/65 leading-relaxed">{brand.description}</p>
                {brand.note && (
                  <p className="mt-3 text-[10px] tracking-wide uppercase text-terracotta-400">
                    {brand.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-paper/15 pt-10">
          <p className="text-sm text-paper/70 max-w-md">
            Ask us which collections are available for your market and order volume.
            All collections are subject to brand approval and available upon request only.
          </p>
          <Link
            href="/branded-amenities"
            className="btn-ghost-light shrink-0 inline-flex items-center gap-2"
          >
            Discover the Collection <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
