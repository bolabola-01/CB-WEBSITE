import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import WhatsAppIcon from "@/components/whatsapp/WhatsAppIcon";
import { buildMetadata } from "@/lib/seo";
import { BRAND, WHATSAPP_REPS, buildWhatsAppLink } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Contact CV Caltic Baru | Hotel Amenities & Linen Manufacturer",
  description:
    "Contact CV Caltic Baru's marketing team to request a quotation for hotel amenities, linen, and guest room products. Based in Bantul, Yogyakarta, Indonesia.",
  path: "/contact",
});

export default function ContactPage() {
  const mapQuery = encodeURIComponent(BRAND.address);

  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />

      <section className="container max-w-8xl py-20">
        <SectionEyebrow number="01" label="Contact Us" className="mb-8" />
        <h1 className="headline text-4xl md:text-5xl max-w-2xl mb-6">
          Let&apos;s Talk About Your Requirements.
        </h1>
        <p className="text-sm md:text-base text-ink-soft leading-relaxed max-w-2xl mb-14">
          The fastest way to reach us is WhatsApp — message one of our marketing
          representatives directly and we&apos;ll follow up with product options, minimum order
          quantities, and lead times.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-14">
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="h-5 w-5 text-terracotta-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-sans font-semibold text-navy-700 text-sm">Address</p>
                <p className="text-sm text-ink-soft mt-1 max-w-xs">{BRAND.address}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="h-5 w-5 text-terracotta-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-sans font-semibold text-navy-700 text-sm">Office Landline</p>
                <a href={`tel:${BRAND.officeLandlineTel}`} className="text-sm text-terracotta-500 mt-1 block">
                  {BRAND.officeLandline}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="h-5 w-5 text-terracotta-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-sans font-semibold text-navy-700 text-sm">Email</p>
                <a href={`mailto:${BRAND.email}`} className="text-sm text-terracotta-500 mt-1 block">
                  {BRAND.email}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="h-5 w-5 text-terracotta-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-sans font-semibold text-navy-700 text-sm">WhatsApp</p>
                <a href={`tel:${BRAND.phoneMarketing1.replace(/\s/g, "")}`} className="text-sm text-ink-soft mt-1 block">
                  {BRAND.phoneMarketing1} (Marketing 1)
                </a>
                <a href={`tel:${BRAND.phoneMarketing2.replace(/\s/g, "")}`} className="text-sm text-ink-soft block">
                  {BRAND.phoneMarketing2} (Marketing 2)
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="h-5 w-5 text-terracotta-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-sans font-semibold text-navy-700 text-sm">Response Time</p>
                <p className="text-sm text-ink-soft mt-1">
                  WhatsApp messages are typically answered same-day during business hours.
                </p>
              </div>
            </div>

            <div className="border border-line h-64 overflow-hidden">
              <iframe
                title="CV Caltic Baru location"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>

          <div className="border border-line bg-paper p-8">
            <h2 className="font-sans font-semibold text-navy-700 mb-1.5">Chat on WhatsApp</h2>
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
        </div>
      </section>
    </>
  );
}
