import { defineField, defineType } from "sanity";

export default defineType({
  name: "qualityPage",
  title: "Quality Assurance Page",
  type: "document",
  fields: [
    defineField({ name: "heroImage", title: "Hero Image", type: "image" }),
    defineField({ name: "heroHeading", title: "Hero Heading", type: "string" }),
    defineField({ name: "heroBody", title: "Hero Body", type: "text", rows: 4 }),
    defineField({ name: "qaSteps", title: "Quality Checkpoints", type: "array", of: [{ type: "processStep" }] }),
    defineField({ name: "improvementHeading", title: "Continuous Improvement Heading", type: "string" }),
    defineField({ name: "improvementBody", title: "Continuous Improvement Body", type: "text", rows: 5 }),
    defineField({ name: "improvementPoints", title: "Improvement Points", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "seo", title: "SEO", type: "seo" }),
  ],
  preview: {
    prepare() {
      return { title: "Quality Assurance Page" };
    },
  },
});
