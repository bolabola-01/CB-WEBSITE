import { defineField, defineType } from "sanity";

export default defineType({
  name: "productCategory",
  title: "Product Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Category Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      description: "Used in the URL, e.g. /products/hotel-linen",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 2,
      description: "Shown on category cards throughout the site (Home, Products index).",
    }),
    defineField({
      name: "description",
      title: "Full Description",
      type: "text",
      rows: 5,
      description: "Shown at the top of this category's own page.",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "galleryImage",
      description: "Used on category cards (Home, Products index, Industries pages).",
    }),
    defineField({
      name: "bannerImage",
      title: "Banner Image",
      type: "galleryImage",
      description: "Used as the full-width header banner on this category's own page. Falls back to the Cover Image if left blank.",
    }),
    defineField({
      name: "orderRank",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first. Leave blank to sort alphabetically.",
    }),
    defineField({ name: "seo", title: "SEO", type: "seo" }),
  ],
  preview: {
    select: { title: "title", media: "coverImage" },
  },
});
