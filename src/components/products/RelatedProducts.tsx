import { getRelatedProducts } from "@/lib/content";
import ProductCard from "@/components/products/ProductCard";
import type { Product } from "@/types";

export default async function RelatedProducts({ product }: { product: Product }) {
  const related = await getRelatedProducts(product);

  if (related.length === 0) return null;

  return (
    <div>
      <p className="eyebrow mb-6">Related Products</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {related.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}
