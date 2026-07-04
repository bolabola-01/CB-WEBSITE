import { defineField, defineType } from "sanity";

export default defineType({
  name: "stat",
  title: "Statistic",
  type: "object",
  fields: [
    defineField({
      name: "value",
      title: "Value",
      type: "string",
      description: 'e.g. "11+", "200+", "100%"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "label", title: "Label", type: "string", validation: (Rule) => Rule.required() }),
  ],
  preview: {
    select: { title: "value", subtitle: "label" },
  },
});
