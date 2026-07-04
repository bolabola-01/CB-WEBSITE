import CtaLink from "@/components/ui/CtaLink";
import type { CTA } from "@/types";

interface CTASectionProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
}

export default function CTASection({
  eyebrow = "Start a Quotation",
  heading,
  description,
  primaryCta = { label: "Request a Quotation", href: "/contact" },
  secondaryCta = { label: "View Products", href: "/products" },
}: CTASectionProps) {
  return (
    <section className="bg-navy-700 text-paper">
      <div className="container max-w-8xl py-20 text-center flex flex-col items-center">
        <p className="font-label text-xs tracking-widest2 uppercase text-terracotta-400 mb-5">
          {eyebrow}
        </p>
        <h2 className="font-display italic text-3xl md:text-4xl max-w-2xl">{heading}</h2>
        {description && (
          <p className="mt-5 max-w-xl text-sm md:text-base text-paper/75 leading-relaxed">
            {description}
          </p>
        )}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <CtaLink href={primaryCta.href} label={primaryCta.label} className="btn-primary" />
          <CtaLink href={secondaryCta.href} label={secondaryCta.label} className="btn-ghost-light" />
        </div>
      </div>
    </section>
  );
}
