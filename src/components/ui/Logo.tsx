import Image from "next/image";
import Link from "next/link";
import type { SanityImage } from "@/types";

interface LogoProps {
  logo?: SanityImage;
  variant?: "dark" | "light";
}

// Full lockup (wordmark + tagline) extracted from the client-provided logo
// file (public/images/brand/). A CMS-uploaded logo (Site Settings -> Logo)
// always takes priority once set — this is just the launch default.
const LOCKUP_DARK = "/images/brand/logo-full.png";
const LOCKUP_LIGHT = "/images/brand/logo-full-light.png";
const LOCKUP_ASPECT = 1600 / 514;

export default function Logo({ logo, variant = "dark" }: LogoProps) {
  if (logo?.asset?.url) {
    return (
      <Link href="/" className="flex items-center shrink-0" aria-label="CV Caltic Baru — Home">
        <Image src={logo.asset.url} alt="CV Caltic Baru" width={170} height={48} priority />
      </Link>
    );
  }

  const src = variant === "light" ? LOCKUP_LIGHT : LOCKUP_DARK;
  const height = 44;
  const width = Math.round(height * LOCKUP_ASPECT);

  return (
    <Link href="/" className="flex items-center shrink-0" aria-label="CV Caltic Baru — Home">
      <Image
        src={src}
        alt="CV Caltic Baru — Hotel Linen & Amenities Supplier"
        width={width}
        height={height}
        priority
        className="h-11 w-auto sm:h-12"
      />
    </Link>
  );
}
