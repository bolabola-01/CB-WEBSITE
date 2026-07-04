import { createClient, type SanityClient } from "@sanity/client";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-06-01";

// The site can run without Sanity configured yet (local fallback content
// in src/lib/content/mock-data.ts is used instead). Once NEXT_PUBLIC_SANITY_PROJECT_ID
// is set, all page-level fetchers in src/lib/content/index.ts automatically
// switch to live Sanity data.
export const isSanityConfigured = Boolean(projectId);

let cachedClient: SanityClient | null = null;

export function getSanityClient(): SanityClient | null {
  if (!isSanityConfigured) return null;
  if (cachedClient) return cachedClient;

  cachedClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    token: process.env.SANITY_API_READ_TOKEN,
    perspective: "published",
  });

  return cachedClient;
}
