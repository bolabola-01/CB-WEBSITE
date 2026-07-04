import { defineField, defineType } from "sanity";

export default defineType({
  name: "galleryImage",
  title: "Image",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: "alt",
      title: "Alt Text",
      type: "string",
      description: "Describes the image for screen readers and SEO. Required for every image.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
      description: "Optional. Shown beneath the image in the lightbox gallery.",
    }),
  ],
});
