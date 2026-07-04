import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { FOOTER_NAV } from "@/lib/constants";
import type { SiteSettings } from "@/types";

export default function Footer({ siteSettings }: { siteSettings: SiteSettings }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-700 text-paper">
      <div className="container max-w-8xl py-16 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-12">
        <div>
          <Logo variant="light" />
          <p className="mt-5 text-sm text-paper/70 leading-relaxed max-w-xs">
            {siteSettings.legalName} manufactures and supplies hospitality products for
            hotels, resorts, villas, restaurants, hospitals, and commercial projects across
            Indonesia.
          </p>
        </div>

        <div>
          <h4 className="font-label text-xs tracking-widest2 uppercase text-terracotta-400 mb-5">
            Company
          </h4>
          <ul className="space-y-3">
            {FOOTER_NAV.company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-paper/80 hover:text-terracotta-300 transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-label text-xs tracking-widest2 uppercase text-terracotta-400 mb-5">
            Resources
          </h4>
          <ul className="space-y-3">
            {FOOTER_NAV.resources.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-paper/80 hover:text-terracotta-300 transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-label text-xs tracking-widest2 uppercase text-terracotta-400 mb-5">
            Contact
          </h4>
          <ul className="space-y-4 text-sm text-paper/80">
            <li className="flex gap-2.5">
              <MapPin className="h-4 w-4 text-terracotta-400 shrink-0 mt-0.5" />
              <span>{siteSettings.address}</span>
            </li>
            <li className="flex gap-2.5 items-center">
              <Mail className="h-4 w-4 text-terracotta-400 shrink-0" />
              <a href={`mailto:${siteSettings.email}`} className="hover:text-terracotta-300 transition-colors">
                {siteSettings.email}
              </a>
            </li>
            <li className="flex gap-2.5 items-center">
              <Phone className="h-4 w-4 text-terracotta-400 shrink-0" />
              <a href={`tel:${siteSettings.officeLandlineTel}`} className="hover:text-terracotta-300 transition-colors">
                {siteSettings.officeLandline}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/15">
        <div className="container max-w-8xl py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-paper/60">
          <p>© {year} {siteSettings.legalName}. All rights reserved.</p>
          <div className="flex gap-5">
            {FOOTER_NAV.legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-terracotta-300 transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
