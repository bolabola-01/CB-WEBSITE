import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Industry } from "@/types";

export default function IndustriesGrid({ industries }: { industries: Industry[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {industries.map((industry) => (
        <Link
          key={industry.slug}
          href={`/industries/${industry.slug}`}
          className="group card-bordered flex flex-col"
        >
          <h3 className="font-sans font-semibold text-navy-700">{industry.title}</h3>
          <span className="terracotta-tick mt-3 mb-4" />
          <p className="text-sm text-ink-soft leading-relaxed flex-1">{industry.summary}</p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-terracotta-500 group-hover:gap-2.5 transition-all">
            Learn more <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>
      ))}
    </div>
  );
}
