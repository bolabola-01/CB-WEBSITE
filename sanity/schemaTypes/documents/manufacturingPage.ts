import { defineField, defineType } from "sanity";

export default defineType({
  name: "manufacturingPage",
  title: "Manufacturing Page",
  type: "document",
  fields: [
    defineField({ name: "heroImage", title: "Hero Image", type: "image" }),
    defineField({ name: "heroHeading", title: "Hero Heading", type: "string" }),
    defineField({ name: "heroBody", title: "Hero Body", type: "text", rows: 4 }),
    defineField({ name: "capabilities", title: "Capability Cards", type: "array", of: [{ type: "featureCard" }] }),
    defineField({ name: "workflowHeading", title: "Workflow Heading", type: "string" }),
    defineField({ name: "workflowSteps", title: "Workflow Steps", type: "array", of: [{ type: "processStep" }] }),
    defineField({
      name: "galleryImages",
      title: "Factory Gallery Images",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({ name: "seo", title: "SEO", type: "seo" }),
  ],
  preview: {
    prepare() {
      return { title: "Manufacturing Page" };
    },
  },
});
