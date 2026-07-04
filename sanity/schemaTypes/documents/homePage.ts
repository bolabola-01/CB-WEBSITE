import { defineField, defineType } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Hero Eyebrow Text", type: "string" }),
    defineField({ name: "heroHeadingItalic", title: "Hero Heading — Italic Line", type: "string" }),
    defineField({ name: "heroHeading", title: "Hero Heading — Bold Line", type: "string" }),
    defineField({ name: "heroSubheading", title: "Hero Subheading", type: "text", rows: 2 }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image" }),
    defineField({ name: "heroPrimaryCta", title: "Hero Primary Button", type: "cta" }),
    defineField({ name: "heroSecondaryCta", title: "Hero Secondary Button", type: "cta" }),

    defineField({ name: "aboutHeading", title: "About Section Heading", type: "string" }),
    defineField({ name: "aboutBody", title: "About Section Body", type: "text", rows: 4 }),
    defineField({ name: "stats", title: "Statistics", type: "array", of: [{ type: "stat" }] }),

    defineField({ name: "whyChooseHeading", title: "Why Choose Us Heading", type: "string" }),
    defineField({ name: "whyChooseCards", title: "Why Choose Us Cards", type: "array", of: [{ type: "featureCard" }] }),

    defineField({
      name: "featuredIndustries",
      title: "Featured Industries",
      type: "array",
      of: [{ type: "reference", to: [{ type: "industry" }] }],
    }),
    defineField({
      name: "featuredTestimonials",
      title: "Featured Testimonials",
      type: "array",
      of: [{ type: "reference", to: [{ type: "testimonial" }] }],
    }),

    defineField({ name: "seo", title: "SEO", type: "seo" }),
  ],
  preview: {
    prepare() {
      return { title: "Home Page" };
    },
  },
});
