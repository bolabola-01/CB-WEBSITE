export interface BrandedAmenityPartner {
  name: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  availableAs: string[];
  note?: string;
}

export const BRANDED_AMENITY_PARTNERS: BrandedAmenityPartner[] = [
  {
    name: "Byredo",
    tagline: "Bal d'Afrique",
    description:
      "Niche Swedish perfumery, available as a full guest-room bath collection for five-star and boutique properties.",
    image: "/images/branded-amenities/byredo.jpg",
    alt: "Byredo Bal d'Afrique shampoo, conditioner, and body wash bottles on a bathroom shelf",
    availableAs: ["Hair Shampoo", "Hair Conditioner", "Body Wash", "Body Lotion"],
  },
  {
    name: "Le Labo",
    tagline: "Santal 33",
    description:
      "The cult New York fragrance house's signature scent, available in the Santal 33 variant.",
    image: "/images/branded-amenities/le-labo.jpg",
    alt: "Le Labo Santal 33 soap bars resting on stone",
    availableAs: ["Santal 33 variant"],
    note: "Santal 33 variant only · Subject to brand approval",
  },
  {
    name: "Balmain Paris",
    tagline: "Signature Fragrance",
    description:
      "Parisian haute couture for the bathroom — mint, bergamot, lavender, and cinnamon across a full dispenser-ready range.",
    image: "/images/branded-amenities/balmain.png",
    alt: "Balmain Paris shampoo and conditioner tubes styled on silk fabric",
    availableAs: ["Shampoo", "Conditioner", "Body Wash", "Body Lotion", "Liquid Soap", "Soap"],
  },
  {
    name: "Penhaligon's",
    tagline: "Halfeti",
    description:
      "London luxury since 1870 — grapefruit, Levantine spice, and black rose, available in bespoke pump and tube formats.",
    image: "/images/branded-amenities/penhaligons.png",
    alt: "Penhaligon's Halfeti body lotion styled with red roses and lime",
    availableAs: ["Shampoo", "Conditioner", "Shower Gel", "Body Lotion", "Liquid Soap", "Soap"],
  },
];
