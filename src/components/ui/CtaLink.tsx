import Link from "next/link";
import QuoteTrigger from "@/components/whatsapp/QuoteTrigger";

interface CtaLinkProps {
  href: string;
  label: string;
  className?: string;
}

// Every CTA that used to point at /contact (the old email-form page) now
// opens the WhatsApp quote modal instead. Anything else still navigates
// normally. This means existing pages that pass { href: "/contact" } into
// CTASection / Hero automatically get the new WhatsApp-first behavior with
// no per-page changes required.
export default function CtaLink({ href, label, className }: CtaLinkProps) {
  if (href === "/contact") {
    return <QuoteTrigger className={className}>{label}</QuoteTrigger>;
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
