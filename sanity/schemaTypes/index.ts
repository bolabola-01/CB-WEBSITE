import { type SchemaTypeDefinition } from "sanity";

// Objects (reusable field groups)
import seo from "./objects/seo";
import navItem from "./objects/navItem";
import navChildItem from "./objects/navChildItem";
import stat from "./objects/stat";
import cta from "./objects/cta";
import featureCard from "./objects/featureCard";
import processStep from "./objects/processStep";
import productSpec from "./objects/productSpec";
import galleryImage from "./objects/galleryImage";

// Singleton pages
import siteSettings from "./documents/siteSettings";
import homePage from "./documents/homePage";
import aboutPage from "./documents/aboutPage";
import manufacturingPage from "./documents/manufacturingPage";
import oemPage from "./documents/oemPage";
import qualityPage from "./documents/qualityPage";
import cataloguePage from "./documents/cataloguePage";
import contactPage from "./documents/contactPage";

// Collections
import productCategory from "./documents/productCategory";
import product from "./documents/product";
import industry from "./documents/industry";
import testimonial from "./documents/testimonial";
import faq from "./documents/faq";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Objects
    seo,
    navItem,
    navChildItem,
    stat,
    cta,
    featureCard,
    processStep,
    productSpec,
    galleryImage,
    // Singleton pages
    siteSettings,
    homePage,
    aboutPage,
    manufacturingPage,
    oemPage,
    qualityPage,
    cataloguePage,
    contactPage,
    // Collections
    productCategory,
    product,
    industry,
    testimonial,
    faq,
  ],
};
