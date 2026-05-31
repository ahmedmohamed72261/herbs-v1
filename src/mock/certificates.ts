export interface Certificate {
  id: string;
  code: string;
  title: string;
  authority: string;
  status: string;
  description: string;
  date: string;
  issuer: string;
  scope: string;
  serial: string;
  image: string;
}

export const certificates: Certificate[] = [
  {
    id: "iso-9001",
    code: "ISO 9001:2015",
    title: "Quality Management Systems",
    authority: "Global Standardization Registry",
    status: "Certified & Active",
    description:
      "Demonstrates our ability to consistently provide products and services that meet customer and regulatory requirements.",
    date: "Valid until Nov 2028",
    issuer: "TÜV Certification Services",
    scope:
      "Sourcing, processing, standard cleaning, packaging and export logistics of premium dehydrated herbs, spices and seeds.",
    serial: "QA-9001-2026-HERBS",
    image: "/certificates/cert1.png",
  },
  {
    id: "usda-organic",
    code: "USDA Organic",
    title: "National Organic Certification",
    authority: "Department of Agriculture",
    status: "Certified & Active",
    description:
      "Verifies that our agricultural and processing operations comply with the organic standards.",
    date: "Valid until Dec 2027",
    issuer: "National Organic Accreditation Board",
    scope:
      "Organic cultivation of aromatic flowers, sifted leaves, and sorting processing line.",
    serial: "ORG-USDA-2026-HERBS",
    image: "/certificates/cert2.png",
  },
  {
    id: "gmp",
    code: "GMP Certification",
    title: "Good Manufacturing Practices",
    authority: "Pharmaceutical Standards Bureau",
    status: "Certified & Active",
    description:
      "Ensures products are consistently produced and controlled according to quality standards.",
    date: "Valid until Jan 2029",
    issuer: "Health & Food Quality Audit Board",
    scope:
      "Dehydration processing, sorting technology and multi-layer clean-room sealing infrastructure.",
    serial: "GMP-PHARM-2026-HERBS",
    image: "/certificates/cert3.png",
  },
  {
    id: "halal-kosher",
    code: "Kosher & Halal",
    title: "Dietary Compliance Verification",
    authority: "International Food Authority",
    status: "Certified & Active",
    description:
      "Guarantees that the ingredients, raw materials, and processing environments comply with global dietary rules.",
    date: "Valid until Jun 2028",
    issuer: "Union of Orthodox & Halal Audit Councils",
    scope:
      "Direct processing and chemical-free mechanical washing of raw plant seeds and flowers.",
    serial: "DK-HK-2026-HERBS",
    image: "/certificates/cert4.jpeg",
  },
];

export function getCertificateById(id: string): Certificate | undefined {
  return certificates.find((c) => c.id === id);
}
