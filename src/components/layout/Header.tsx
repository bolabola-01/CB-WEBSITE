"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import Logo from "@/components/ui/Logo";
import QuoteTrigger from "@/components/whatsapp/QuoteTrigger";
import type { SiteSettings, ProductCategory, NavigationItem } from "@/types";

interface HeaderProps {
  siteSettings: SiteSettings;
  productCategories: ProductCategory[];
}

export default function Header({ siteSettings, productCategories }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // The "Products" nav item's dropdown is generated live from Sanity
  // categories rather than a hardcoded list, so publishing a new product
  // category updates this menu automatically — no code changes needed.
  const mainNav: NavigationItem[] = useMemo(() => {
    return siteSettings.mainNav.map((item) => {
      if (item.href !== "/products") return item;
      return {
        ...item,
        children: [
          { label: "All Categories", href: "/products" },
          ...productCategories.map((c) => ({
            label: c.title,
            href: `/products/${c.slug}`,
          })),
        ],
      };
    });
  }, [siteSettings.mainNav, productCategories]);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-line">
      <div className="container max-w-8xl flex items-center justify-between gap-6 h-20">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden 2xl:flex items-center gap-6">
          {mainNav.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.children && setActiveMenu(item.label)}
              onMouseLeave={() => item.children && setActiveMenu(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 text-sm text-navy-700 hover:text-terracotta-500 transition-colors py-2"
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {item.children && activeMenu === item.label && (
                <div className="absolute top-full left-0 bg-paper border border-line shadow-card min-w-[240px] py-2 max-h-[70vh] overflow-y-auto">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-5 py-2.5 text-sm text-navy-700 hover:bg-paper-warm hover:text-terracotta-500 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden 2xl:flex items-center gap-4 shrink-0">
          <a
            href={`tel:${siteSettings.officeLandlineTel}`}
            className="flex items-center gap-1.5 text-sm text-navy-700"
          >
            <Phone className="h-3.5 w-3.5 text-terracotta-500" />
            {siteSettings.officeLandline}
          </a>
          <QuoteTrigger className="btn-primary text-xs px-5 py-3">
            Request a Quotation
          </QuoteTrigger>
        </div>

        <button
          className="2xl:hidden text-navy-700"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="2xl:hidden border-t border-line bg-paper max-h-[80vh] overflow-y-auto">
          <nav className="container py-4 flex flex-col">
            {mainNav.map((item) => (
              <div key={item.href} className="border-b border-line/70 last:border-none">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-sm text-navy-700 font-medium"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pb-3 pl-4 flex flex-col gap-2.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="text-sm text-ink-soft"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <QuoteTrigger
              onBeforeOpen={() => setOpen(false)}
              className="btn-primary mt-5 w-full"
            >
              Request a Quotation
            </QuoteTrigger>
          </nav>
        </div>
      )}
    </header>
  );
}
