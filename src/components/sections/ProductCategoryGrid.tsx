import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ProductCategory } from "@/types";

export default function ProductCategoryGrid({ categories }: { categories: ProductCategory[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/products/${category.slug}`}
          className="group relative overflow-hidden border border-line bg-paper flex flex-col"
        >
          <div className="relative h-56 w-full overflow-hidden bg-paper-warm">
            {category.coverImage?.asset?.url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={category.coverImage.asset.url}
                alt={category.coverImage.alt || category.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center">
                <span className="font-display italic text-2xl text-navy-700/30">
                  {category.title}
                </span>
              </div>
            )}
          </div>
          <div className="p-7 flex flex-col flex-1">
            <h3 className="font-sans font-semibold text-navy-700">{category.title}</h3>
            <span className="terracotta-tick mt-3 mb-4" />
            <p className="text-sm text-ink-soft leading-relaxed flex-1">
              {category.shortDescription}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-terracotta-500 group-hover:gap-2.5 transition-all">
              View Products <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
