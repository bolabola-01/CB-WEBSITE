import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({ name: "heroImage", title: "Hero Image", type: "image" }),
    defineField({ name: "storyHeading", title: "Story Heading", type: "string" }),
    defineField({ name: "storyBodyLeft", title: "Story — Left Column", type: "text", rows: 5 }),
    defineField({ name: "storyBodyRight", title: "Story — Right Column", type: "text", rows: 5 }),
    defineField({ name: "stats", title: "Statistics", type: "array", of: [{ type: "stat" }] }),
    defineField({ name: "expertiseHeading", title: "Expertise Heading", type: "string" }),
    defineField({ name: "expertiseBody", title: "Expertise Body", type: "text", rows: 6 }),
    defineField({ name: "expertiseCards", title: "Expertise Cards", type: "array", of: [{ type: "featureCard" }] }),
    defineField({ name: "seo", title: "SEO", type: "seo" }),
  ],
  preview: {
    prepare() {
      return { title: "About Page" };
    },
  },
});
