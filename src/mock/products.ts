export interface ProductSpecifications {
  moisture: string;
  purity: string;
  ashContent: string;
  essentialOil: string;
  packaging: string;
  shelfLife: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  specifications: ProductSpecifications;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Egyptian Chamomile",
    category: "Flowers",
    price: "Contact for pricing",
    description:
      "Premium grade whole and sifted chamomile flowers, harvested at peak potency with exceptional essential oil retention. Known for vibrant golden yellow color. Perfect for herbal teas, cosmetics, and pharmaceutical applications.",
    specifications: {
      moisture: "< 10%",
      purity: "99%",
      ashContent: "< 8%",
      essentialOil: "> 0.4 ml/100g",
      packaging: "20kg Multi-layer Paper Bags",
      shelfLife: "24 Months",
    },
    image: "/product/Cinnamon.jpg",
  },
  {
    id: "2",
    name: "Organic Peppermint Leaves",
    category: "Leaves",
    price: "Contact for pricing",
    description:
      "Premium organic peppermint leaves (Mentha piperita), shade-dried to preserve aroma and menthol content. Ideal for specialty teas, essential oil extraction, and culinary applications.",
    specifications: {
      moisture: "< 12%",
      purity: "99%",
      ashContent: "< 7.5%",
      essentialOil: "> 1.2 ml/100g",
      packaging: "15kg Carton boxes",
      shelfLife: "24 Months",
    },
    image: "/product/Marjoram.jpg",
  },
  {
    id: "3",
    name: "Red Hibiscus Flowers",
    category: "Flowers",
    price: "Contact for pricing",
    description:
      "Deep crimson whole calyces of Hibiscus sabdariffa. Intensely tart and vibrant, perfect for herbal beverages, food colorants, and traditional wellness preparations.",
    specifications: {
      moisture: "< 11%",
      purity: "99%",
      ashContent: "< 9%",
      essentialOil: "Trace amounts",
      packaging: "25kg Woven Polypropylene Bags",
      shelfLife: "36 Months",
    },
    image: "/product/Nigella.jpg",
  },
  {
    id: "4",
    name: "Spearmint Leaves",
    category: "Leaves",
    price: "Contact for pricing",
    description:
      "Carefully selected and sifted whole spearmint leaves with a milder, sweeter profile than peppermint. Excellent for herbal blends, confectionery, and beverages.",
    specifications: {
      moisture: "< 10%",
      purity: "98.5%",
      ashContent: "< 7%",
      essentialOil: "> 0.9 ml/100g",
      packaging: "15kg Carton boxes",
      shelfLife: "24 Months",
    },
    image: "/product/Dill-tips.jpg",
  },
  {
    id: "5",
    name: "Premium Fennel Seeds",
    category: "Seeds",
    price: "Contact for pricing",
    description:
      "Grade-A fennel seeds (Foeniculum vulgare) with distinctive anise aroma. Used in traditional medicine, culinary spice blends, and natural digestive preparations.",
    specifications: {
      moisture: "< 9%",
      purity: "99.5%",
      ashContent: "< 6%",
      essentialOil: "> 2.0 ml/100g",
      packaging: "25kg Paper Bags",
      shelfLife: "30 Months",
    },
    image: "/product/Fennel.jpg",
  },
  {
    id: "6",
    name: "Natural Licorice Root",
    category: "Roots",
    price: "Contact for pricing",
    description:
      "Pure dried licorice roots (Glycyrrhiza glabra) in premium quality sticks and slices. Widely used in traditional herbal medicine, confectionery, and pharmaceutical formulations.",
    specifications: {
      moisture: "< 12%",
      purity: "99%",
      ashContent: "< 5%",
      essentialOil: "N/A (Glycyrrhizin-based)",
      packaging: "50kg Jute Bags",
      shelfLife: "36 Months",
    },
    image: "/product/Liquorice.jpg",
  },
  {
    id: "7",
    name: "Dried Basil Leaves",
    category: "Leaves",
    price: "Contact for pricing",
    description:
      "Premium dried basil (Ocimum basilicum) with strong aromatic properties. Perfect for culinary use, herbal teas, and natural flavoring applications.",
    specifications: {
      moisture: "< 10%",
      purity: "98%",
      ashContent: "< 7%",
      essentialOil: "> 0.5 ml/100g",
      packaging: "10kg Carton boxes",
      shelfLife: "24 Months",
    },
    image: "/product/BASIL.jpg",
  },
  {
    id: "8",
    name: "Organic Lemon Balm",
    category: "Leaves",
    price: "Contact for pricing",
    description:
      "Fresh-dried lemon balm (Melissa officinalis) with bright citrus aroma. Ideal for herbal infusions, aromatherapy, and wellness beverages.",
    specifications: {
      moisture: "< 11%",
      purity: "99%",
      ashContent: "< 6%",
      essentialOil: "> 0.3 ml/100g",
      packaging: "12kg Carton boxes",
      shelfLife: "24 Months",
    },
    image: "/product/Lemon-grass.jpg",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
}

export const productCategories = ["All", "Flowers", "Leaves", "Seeds", "Roots"];
