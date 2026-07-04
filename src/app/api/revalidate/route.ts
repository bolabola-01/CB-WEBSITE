import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

/**
 * Configure this as a Sanity webhook (Project → API → Webhooks):
 *   URL: https://www.calticbaru.com/api/revalidate?secret=YOUR_SECRET
 *   Dataset: production
 *   Trigger on: Create, Update, Delete
 *   Filter: _type in ["product", "productCategory", "siteSettings", "industry", "homePage"]
 *   Projection: { "_type": _type, "slug": slug.current, "categorySlug": category->slug.current }
 *
 * See docs/CONTENT-REVALIDATION.md for full setup steps.
 *
 * Without this webhook configured, pages still update on their own within
 * ~60 seconds thanks to the `revalidate = 60` export on each page — this
 * route just makes updates appear immediately instead of waiting.
 */
export async function POST(request: Request) {
  const secret = new URL(request.url).searchParams.get("secret");

  if (!process.env.SANITY_REVALIDATE_SECRET || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ revalidated: false, message: "Invalid secret" }, { status: 401 });
  }

  let body: { _type?: string; slug?: string; categorySlug?: string } = {};
  try {
    body = await request.json();
  } catch {
    // Some webhook test-pings send no body — that's fine, fall through to a full revalidation.
  }

  const { _type, slug, categorySlug } = body;

  try {
    switch (_type) {
      case "product":
        if (categorySlug && slug) {
          revalidatePath(`/products/${categorySlug}/${slug}`);
          revalidatePath(`/products/${categorySlug}`);
        }
        revalidatePath("/products");
        revalidatePath("/");
        break;

      case "productCategory":
        if (slug) revalidatePath(`/products/${slug}`);
        revalidatePath("/products");
        revalidatePath("/");
        revalidatePath("/", "layout"); // header dropdown reflects category changes
        break;

      case "industry":
        if (slug) revalidatePath(`/industries/${slug}`);
        revalidatePath("/industries");
        revalidatePath("/");
        break;

      case "siteSettings":
        revalidatePath("/", "layout");
        break;

      default:
        // Unknown or unfiltered document type — revalidate everything to be safe.
        revalidatePath("/", "layout");
        break;
    }

    return NextResponse.json({ revalidated: true, type: _type ?? "unknown" });
  } catch (err) {
    console.error("Revalidation failed:", err);
    return NextResponse.json({ revalidated: false, error: "Revalidation failed" }, { status: 500 });
  }
}
