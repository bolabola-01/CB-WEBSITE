import { defineField, defineType } from "sanity";

export default defineType({
  name: "processStep",
  title: "Process Step",
  type: "object",
  fields: [
    defineField({ name: "number", title: "Step Number", type: "string", description: 'e.g. "01"' }),
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
  ],
  preview: {
    select: { title: "title", subtitle: "number" },
  },
});
