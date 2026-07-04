import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { breadcrumbJsonLd } from "@/lib/seo";

interface BreadcrumbsProps {
  items: { name: string; path: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const full = [{ name: "Home", path: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="border-b border-line bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(full)) }}
      />
      <div className="container max-w-8xl py-3.5 flex items-center gap-1.5 text-xs text-ink-soft overflow-x-auto whitespace-nowrap">
        {full.map((item, i) => (
          <span key={item.path} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="h-3 w-3 text-line" />}
            {i === full.length - 1 ? (
              <span className="text-navy-700 font-medium">{item.name}</span>
            ) : (
              <Link href={item.path} className="hover:text-terracotta-500 transition-colors">
                {item.name}
              </Link>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
