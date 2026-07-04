import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "siteName", title: "Site Name", type: "string", initialValue: "Caltic Baru" }),
    defineField({ name: "legalName", title: "Legal Company Name", type: "string", initialValue: "CV Caltic Baru" }),
    defineField({ name: "tagline", title: "Tagline", type: "string", initialValue: "Hotel Linen & Amenities Supplier" }),
    defineField({ name: "logo", title: "Logo", type: "image", description: "Upload the CALTIC BARU logo (transparent PNG or SVG recommended)." }),
    defineField({ name: "address", title: "Full Address", type: "text", rows: 3 }),
    defineField({ name: "email", title: "Contact Email", type: "string" }),
    defineField({
      name: "officeLandline",
      title: "Office Landline (Display)",
      type: "string",
      description: "Primary office telephone number shown site-wide (header, footer, contact page), e.g. \"(0274) 420345\".",
    }),
    defineField({
      name: "officeLandlineTel",
      title: "Office Landline (Tel Link)",
      type: "string",
      description: "Same number in click-to-call format, e.g. \"+62274420345\".",
    }),
    defineField({ name: "phoneMarketing1", title: "Phone — Marketing 1", type: "string" }),
    defineField({ name: "phoneMarketing2", title: "Phone — Marketing 2", type: "string" }),
    defineField({ name: "whatsappNumber", title: "WhatsApp Number", type: "string" }),
    defineField({
      name: "mainNav",
      title: "Main Navigation",
      type: "array",
      of: [{ type: "navItem" }],
    }),
    defineField({
      name: "footerNav",
      title: "Footer Navigation",
      type: "array",
      of: [{ type: "navChildItem" }],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", title: "Platform", type: "string" },
            { name: "url", title: "URL", type: "url" },
          ],
        },
      ],
    }),
    defineField({ name: "defaultSeo", title: "Default SEO", type: "seo" }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
