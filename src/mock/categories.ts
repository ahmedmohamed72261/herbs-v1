export interface Category {
  id: string;
  title: string;
  description: string;
  count: string;
  image: string;
  items: string[];
}

export const categories: Category[] = [
  {
    id: "flowers",
    title: "Botanical Flowers",
    description: "Premium grade whole and sifted flowers, harvested at peak potency.",
    count: "14 Products",
    image: "/category/Herbs.png",
    items: ["Egyptian Chamomile", "Hibiscus Flowers", "Calendula Petals", "Lavender Buds"],
  },
  {
    id: "leaves",
    title: "Aromatic Leaves & Herbs",
    description: "High-essential-oil culinary and medicinal leaves, sun-dried naturally.",
    count: "22 Products",
    image: "/category/Seeds.png",
    items: ["Peppermint Leaves", "Spearmint Leaves", "Basil Leaves", "Majoram Whole"],
  },
  {
    id: "seeds-roots",
    title: "Seeds, Roots & Bark",
    description: "Meticulously sorted agricultural seeds and raw roots for industrial extraction.",
    count: "18 Products",
    image: "/category/Spices.png",
    items: ["Fennel Seeds", "Anise Seeds", "Licorice Root", "Coriander Seeds"],
  },
  {
    id: "industrial",
    title: "Specialty & Industrial",
    description: "Standardized materials engineered for pharmaceutical and wellness manufacture.",
    count: "9 Products",
    image: "/category/all.jpeg",
    items: ["Dehydrated Extracts", "Essential Oil Fractions", "Custom Sifting Blends"],
  },
];
