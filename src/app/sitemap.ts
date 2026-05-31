import type { MetadataRoute } from "next";

const siteUrl = "https://globalrawmaterials.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0 },
    { path: "/products", priority: 0.9 },
    { path: "/categories", priority: 0.8 },
    { path: "/certificates", priority: 0.7 },
    { path: "/team", priority: 0.6 },
    { path: "/contact", priority: 0.7 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "monthly" : "weekly",
    priority,
  }));
}
