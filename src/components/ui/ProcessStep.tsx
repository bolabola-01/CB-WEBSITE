import type { ProcessStepItem } from "@/types";

export default function ProcessStep({ number, title, description }: ProcessStepItem) {
  return (
    <div className="grid grid-cols-[3.5rem_1fr] gap-4 md:gap-6 border-b border-line py-6">
      <span className="font-display italic text-3xl md:text-4xl text-navy-700/70">{number}</span>
      <div>
        <h3 className="font-sans font-semibold text-navy-700">{title}</h3>
        <p className="mt-1.5 text-sm text-ink-soft leading-relaxed max-w-2xl">{description}</p>
      </div>
    </div>
  );
}
