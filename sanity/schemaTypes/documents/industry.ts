import { defineField, defineType } from "sanity";

export default defineType({
  name: "industry",
  title: "Industry",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 2 }),
    defineField({ name: "description", title: "Full Description", type: "text", rows: 4 }),
    defineField({ name: "image", title: "Image", type: "image" }),
    defineField({
      name: "relatedCategories",
      title: "Related Product Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "productCategory" }] }],
    }),
    defineField({ name: "orderRank", title: "Display Order", type: "number" }),
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
});
