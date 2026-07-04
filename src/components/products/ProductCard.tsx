import Link from "next/link";
import type { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  const image = product.coverImage?.asset?.url;

  return (
    <Link
      href={`/products/${product.categorySlug}/${product.slug}`}
      className="group border border-line bg-paper flex flex-col relative"
    >
      {(product.isNew || product.featured) && (
        <div className="absolute top-3 left-3 z-10 flex gap-1.5">
          {product.isNew && (
            <span className="bg-terracotta-500 text-paper text-[10px] font-medium uppercase tracking-wide px-2 py-1">
              New
            </span>
          )}
          {product.featured && (
            <span className="bg-navy-700 text-paper text-[10px] font-medium uppercase tracking-wide px-2 py-1">
              Featured
            </span>
          )}
        </div>
      )}
      <div className="relative h-52 w-full bg-paper-warm overflow-hidden">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={product.coverImage?.alt || product.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <span className="font-display italic text-lg text-navy-700/30">{product.title}</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <p className="text-[11px] uppercase tracking-widest2 text-terracotta-500 mb-1.5">
          {product.categoryTitle}
        </p>
        <h3 className="font-sans font-medium text-navy-700 text-sm">{product.title}</h3>
      </div>
    </Link>
  );
}
