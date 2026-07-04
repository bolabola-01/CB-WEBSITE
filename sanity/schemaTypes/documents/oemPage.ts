import { defineField, defineType } from "sanity";

export default defineType({
  name: "oemPage",
  title: "OEM & Private Label Page",
  type: "document",
  fields: [
    defineField({ name: "heroImage", title: "Hero Image", type: "image" }),
    defineField({ name: "heroHeading", title: "Hero Heading", type: "string" }),
    defineField({ name: "heroBody", title: "Hero Body", type: "text", rows: 4 }),
    defineField({ name: "oemDescription", title: "OEM Production Description", type: "text", rows: 4 }),
    defineField({ name: "privateLabelDescription", title: "Private Label Description", type: "text", rows: 4 }),
    defineField({ name: "includedCards", title: "What's Included Cards", type: "array", of: [{ type: "featureCard" }] }),
    defineField({ name: "seo", title: "SEO", type: "seo" }),
  ],
  preview: {
    prepare() {
      return { title: "OEM & Private Label Page" };
    },
  },
});
