import { defineField, defineType } from "sanity";

export default defineType({
  name: "cataloguePage",
  title: "Catalogue Page",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text", rows: 4 }),
    defineField({
      name: "catalogueFile",
      title: "Catalogue PDF",
      type: "file",
      options: { accept: ".pdf" },
      description: "Upload the current catalogue PDF for direct download / email delivery.",
    }),
    defineField({ name: "seo", title: "SEO", type: "seo" }),
  ],
  preview: {
    prepare() {
      return { title: "Catalogue Page" };
    },
  },
});
