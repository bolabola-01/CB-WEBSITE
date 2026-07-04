import { defineField, defineType } from "sanity";

export default defineType({
  name: "navItem",
  title: "Navigation Item",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "href", title: "Link", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "children",
      title: "Dropdown Items",
      type: "array",
      of: [{ type: "navChildItem" }],
    }),
  ],
  preview: {
    select: { title: "label", subtitle: "href" },
  },
});
