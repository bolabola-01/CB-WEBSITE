import type { StructureResolver } from "sanity/structure";

const SINGLETONS = [
  { id: "siteSettings", title: "Site Settings" },
  { id: "homePage", title: "Home Page" },
  { id: "aboutPage", title: "About Page" },
  { id: "manufacturingPage", title: "Manufacturing Page" },
  { id: "oemPage", title: "OEM & Private Label Page" },
  { id: "qualityPage", title: "Quality Assurance Page" },
  { id: "cataloguePage", title: "Catalogue Page" },
  { id: "contactPage", title: "Contact Page" },
];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("CV Caltic Baru CMS")
    .items([
      S.listItem()
        .title("Pages")
        .child(
          S.list()
            .title("Pages")
            .items(
              SINGLETONS.map((s) =>
                S.listItem()
                  .title(s.title)
                  .child(S.document().schemaType(s.id).documentId(s.id))
              )
            )
        ),
      S.divider(),
      S.listItem().title("Product Categories").child(S.documentTypeList("productCategory").title("Product Categories")),
      S.listItem()
        .title("Products")
        .child(
          S.list()
            .title("Products")
            .items([
              S.listItem()
                .title("All Products")
                .child(S.documentTypeList("product").title("All Products")),
              S.listItem()
                .title("Featured Products")
                .child(
                  S.documentTypeList("product")
                    .title("Featured Products")
                    .filter('_type == "product" && featured == true')
                ),
              S.listItem()
                .title("New Products")
                .child(
                  S.documentTypeList("product")
                    .title("New Products")
                    .filter('_type == "product" && isNew == true')
                ),
            ])
        ),
      S.listItem().title("Industries").child(S.documentTypeList("industry").title("Industries")),
      S.listItem().title("Testimonials").child(S.documentTypeList("testimonial").title("Testimonials")),
      S.listItem().title("FAQs").child(S.documentTypeList("faq").title("FAQs")),
    ]);
