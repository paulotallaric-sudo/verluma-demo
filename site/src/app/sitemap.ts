import type { MetadataRoute } from "next";
import { metiers } from "@/lib/data/metiers";
import { articles } from "@/lib/data/journal";

const base = "https://etabli.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, priority: 1, changeFrequency: "weekly" },
    { url: `${base}/produit`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/metiers`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/tarifs`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/reseaux`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/journal`, priority: 0.7, changeFrequency: "weekly" },
    { url: `${base}/a-propos`, priority: 0.6, changeFrequency: "yearly" },
    { url: `${base}/demo`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/contact`, priority: 0.5, changeFrequency: "yearly" },
    { url: `${base}/inscription`, priority: 0.8, changeFrequency: "yearly" },
  ];

  const metierRoutes: MetadataRoute.Sitemap = metiers.map((metier) => ({
    url: `${base}/metiers/${metier.slug}`,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${base}/journal/${article.slug}`,
    lastModified: article.date,
    priority: 0.6,
    changeFrequency: "yearly",
  }));

  return [...staticRoutes, ...metierRoutes, ...articleRoutes];
}
