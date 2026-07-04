import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { projectId, dataset } from "./client";

const builder =
  projectId && dataset ? createImageUrlBuilder({ projectId, dataset }) : null;

/**
 * Returns a Sanity CDN URL for an image reference. If Sanity isn't
 * configured, returns null so components can fall back to a static
 * placeholder from /public/images.
 */
export function urlForImage(source: SanityImageSource) {
  if (!builder) return null;
  return builder.image(source);
}
