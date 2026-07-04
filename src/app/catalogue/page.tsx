import type { Metadata } from "next";
import { FileText } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import WhatsAppIcon from "@/components/whatsapp/WhatsAppIcon";
import { buildMetadata } from "@/lib/seo";
import { BRAND, WHATSAPP_REPS, buildWhatsAppLink } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Request Our Product Catalogue | CV Caltic Baru",
  description:
    "Request the full CV Caltic Baru hospitality product catalogue — amenities, linen, guest accessories, and packaging, with specifications and customization options.",
  path: "/catalogue",
});

export default function CataloguePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Catalogue", path: "/catalogue" }]} />

      <section className="container max-w-8xl py-20 grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div>
          <SectionEyebrow number="01" label="Product Catalogue" className="mb-8" />
          <h1 className="headline text-4xl md:text-5xl mb-6">
            Request the Full Product Catalogue.
          </h1>
          <span className="terracotta-tick mb-6" />
          <p className="text-sm md:text-base text-ink-soft leading-relaxed mb-6">
            Our full catalogue covers every product line we manufacture — guest room
            amenities, bedding and linen, F&amp;B textiles, bathroom amenities, guest
            accessories, and packaging — along with customization, branding, and packaging
            options for each category.
          </p>
          <p className="text-sm md:text-base text-ink-soft leading-relaxed mb-8">
            Message one of our marketing representatives on WhatsApp and we&apos;ll send the
            current catalogue PDF directly in the chat, along with an introductory quotation
            for the products you&apos;re interested in.
          </p>
          <div className="border border-line p-6 flex items-start gap-4">
            <FileText className="h-6 w-6 text-terracotta-500 shrink-0" />
            <div>
              <p className="font-sans font-semibold text-navy-700 text-sm">
                Prefer email instead?
              </p>
              <p className="text-sm text-ink-soft mt-1">
                Write to{" "}
                <a href={`mailto:${BRAND.email}`} className="text-terracotta-500 underline">
                  {BRAND.email}
                </a>{" "}
                and we&apos;ll send the catalogue right away.
              </p>
            </div>
          </div>
        </div>

        <div className="border border-line bg-paper p-8">
          <div className="flex items-center gap-3 mb-1.5">
            <WhatsAppIcon className="h-5 w-5 text-terracotta-500" />
            <h2 className="font-sans font-semibold text-navy-700">Get the Catalogue on WhatsApp</h2>
          </div>
          <p className="text-sm text-ink-soft mb-6">
            Choose one of our marketing representatives to start the conversation.
          </p>
          <div className="space-y-4">
            {WHATSAPP_REPS.map((rep) => (
              <div key={rep.phoneDigits} className="border border-line p-5 sm:p-6">
                <p className="text-[11px] uppercase tracking-widest2 text-terracotta-500 font-medium">
                  {rep.label}
                </p>
                <a
                  href={`tel:${rep.phoneDigits}`}
                  className="block mt-1.5 font-display text-xl text-navy-700 hover:text-terracotta-500 transition-colors"
                >
                  {rep.phoneDisplay}
                </a>
                <a
                  href={buildWhatsAppLink(rep.phoneDigits)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full mt-4 gap-2"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Chat via WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
