"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import type { Product, ProductCategory } from "@/types";

interface ProductBrowserProps {
  products: Product[];
  categories: ProductCategory[];
}

export default function ProductBrowser({ products, categories }: ProductBrowserProps) {
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (categoryFilter && p.categorySlug !== categoryFilter) return false;
      if (featuredOnly && !p.featured) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.shortDescription?.toLowerCase().includes(q) ||
        p.categoryTitle.toLowerCase().includes(q) ||
        p.productCode?.toLowerCase().includes(q)
      );
    });
  }, [products, query, categoryFilter, featuredOnly]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-soft" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products by name, code, or category..."
            className="w-full border border-line bg-paper pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-terracotta-500"
          />
        </div>
        <button
          type="button"
          onClick={() => setFeaturedOnly((v) => !v)}
          className={`px-4 py-3 text-xs uppercase tracking-wide font-medium border transition-colors whitespace-nowrap ${
            featuredOnly
              ? "bg-navy-700 text-paper border-navy-700"
              : "border-line text-navy-700 hover:border-navy-700"
          }`}
        >
          Featured Only
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        <button
          type="button"
          onClick={() => setCategoryFilter(null)}
          className={`px-4 py-2 text-xs uppercase tracking-wide font-medium border transition-colors ${
            categoryFilter === null
              ? "bg-terracotta-500 text-paper border-terracotta-500"
              : "border-line text-navy-700 hover:border-terracotta-500"
          }`}
        >
          All Categories
        </button>
        {categories.map((c) => (
          <button
            key={c.slug}
            type="button"
            onClick={() => setCategoryFilter(c.slug)}
            className={`px-4 py-2 text-xs uppercase tracking-wide font-medium border transition-colors ${
              categoryFilter === c.slug
                ? "bg-terracotta-500 text-paper border-terracotta-500"
                : "border-line text-navy-700 hover:border-terracotta-500"
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="border border-line p-10 text-center text-sm text-ink-soft">
          No products match your search. Try a different term, or contact us directly —
          our full range extends beyond what&apos;s listed here.
        </div>
      )}

      <p className="mt-6 text-xs text-ink-soft">
        Showing {filtered.length} of {products.length} products
      </p>
    </div>
  );
}
