import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | CV Caltic Baru",
  description: "How CV Caltic Baru collects and uses information submitted through this website.",
  path: "/privacy-policy",
  seo: { noIndex: true },
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Privacy Policy", path: "/privacy-policy" }]} />
      <section className="container max-w-3xl py-20 prose-sm">
        <h1 className="headline text-4xl mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-sm text-ink-soft leading-relaxed">
          <p>
            This page explains how {BRAND.legalName} collects and uses information submitted
            through {BRAND.domain}. This is a starter policy — have it reviewed by legal
            counsel before publishing, and update it to reflect your actual data handling
            practices.
          </p>
          <h2 className="font-sans font-semibold text-navy-700 text-base mt-8">
            Information We Collect
          </h2>
          <p>
            This website does not collect personal information through on-site forms. Instead,
            "Request a Quotation" and similar buttons open WhatsApp with a pre-filled message.
            Any information you share happens directly inside your conversation with our
            marketing team on WhatsApp, which is operated by Meta and governed by{" "}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta-500 underline"
            >
              WhatsApp's own privacy policy
            </a>
            .
          </p>
          <h2 className="font-sans font-semibold text-navy-700 text-base mt-8">
            How We Use Your Information
          </h2>
          <p>
            Information shared with us over WhatsApp is used solely to respond to your
            inquiry, prepare quotations, and follow up on potential orders. We do not sell or
            share your information with third parties for marketing purposes.
          </p>
          <h2 className="font-sans font-semibold text-navy-700 text-base mt-8">Contact</h2>
          <p>
            Questions about this policy can be directed to{" "}
            <a href={`mailto:${BRAND.email}`} className="text-terracotta-500 underline">
              {BRAND.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
