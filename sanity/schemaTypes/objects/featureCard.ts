import { defineField, defineType } from "sanity";

export default defineType({
  name: "featureCard",
  title: "Feature Card",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({
      name: "icon",
      title: "Icon Name",
      type: "string",
      description: "Optional — a Lucide icon name (e.g. ShieldCheck, Truck, Tag). Leave blank for no icon.",
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});
