import type { Testimonial } from "@/types";

export default function TestimonialSection({ testimonial }: { testimonial: Testimonial }) {
  return (
    <section className="relative bg-navy-800 py-24">
      <div className="container max-w-4xl text-center relative z-10">
        <p className="font-label text-xs tracking-widest2 uppercase text-terracotta-400 mb-6">
          Client Feedback
        </p>
        <p className="font-display italic text-2xl md:text-3xl text-paper leading-relaxed">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <p className="mt-8 text-sm text-paper/70 tracking-wide uppercase">
          — {testimonial.clientName}
        </p>
      </div>
    </section>
  );
}
