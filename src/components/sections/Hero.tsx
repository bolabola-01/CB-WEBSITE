import CtaLink from "@/components/ui/CtaLink";
import type { CTA } from "@/types";

interface HeroFullBleedProps {
  eyebrow?: string;
  heading: string;
  headingItalic?: string;
  subheading?: string;
  imageUrl: string;
  imageAlt: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
}

export function HeroFullBleed({
  eyebrow,
  heading,
  headingItalic,
  subheading,
  imageUrl,
  imageAlt,
  primaryCta,
  secondaryCta,
}: HeroFullBleedProps) {
  return (
    <section className="relative h-[86vh] min-h-[560px] w-full overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imageUrl} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/35 to-navy-900/10" />
      <div className="relative z-10 h-full container max-w-8xl flex flex-col items-center justify-center text-center px-6">
        {eyebrow && (
          <p className="font-label text-xs md:text-sm tracking-widest2 uppercase text-paper/90 mb-5">
            {eyebrow}
          </p>
        )}
        <h1 className="text-paper max-w-4xl">
          {headingItalic && (
            <span className="block font-display italic text-4xl md:text-6xl">{headingItalic}</span>
          )}
          <span className="block font-display font-medium text-4xl md:text-6xl uppercase tracking-wide mt-1">
            {heading}
          </span>
        </h1>
        {subheading && (
          <p className="mt-6 max-w-xl text-sm md:text-base text-paper/85 leading-relaxed">
            {subheading}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            {primaryCta && (
              <CtaLink href={primaryCta.href} label={primaryCta.label} className="btn-primary" />
            )}
            {secondaryCta && (
              <CtaLink href={secondaryCta.href} label={secondaryCta.label} className="btn-ghost-light" />
            )}
          </div>
        )}
      </div>
    </section>
  );
}

interface HeroSplitProps {
  eyebrow?: string;
  heading: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  cta?: CTA;
  imageSide?: "left" | "right";
}

export function HeroSplit({
  eyebrow,
  heading,
  description,
  imageUrl,
  imageAlt,
  cta,
  imageSide = "right",
}: HeroSplitProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
      <div
        className={`flex flex-col justify-center px-6 md:px-16 py-16 lg:py-0 ${
          imageSide === "left" ? "lg:order-2" : ""
        }`}
      >
        {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
        <h1 className="headline text-4xl md:text-5xl max-w-md">{heading}</h1>
        <span className="terracotta-tick mt-6 mb-6" />
        <p className="text-sm md:text-base text-ink-soft leading-relaxed max-w-md">
          {description}
        </p>
        {cta && <CtaLink href={cta.href} label={cta.label} className="btn-primary mt-8 self-start" />}
      </div>
      <div className={`relative min-h-[340px] ${imageSide === "left" ? "lg:order-1" : ""}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
      </div>
    </section>
  );
}
