import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "quote", title: "Quote", type: "text", rows: 4, validation: (Rule) => Rule.required() }),
    defineField({ name: "clientName", title: "Client Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "clientOrganization", title: "Client Organization", type: "string" }),
    defineField({ name: "image", title: "Client / Property Photo", type: "image" }),
    defineField({ name: "orderRank", title: "Display Order", type: "number" }),
  ],
  preview: {
    select: { title: "clientName", subtitle: "quote" },
  },
});
