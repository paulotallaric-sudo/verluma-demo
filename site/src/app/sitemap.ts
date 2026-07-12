import type { MetadataRoute } from "next";
import { languages } from "@/lib/data/languages";
import { articles } from "@/lib/data/journal";

const base = "https://verluma.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, priority: 1, changeFrequency: "weekly" },
    { url: `${base}/methode`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/langues`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/tarifs`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/entreprises`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/journal`, priority: 0.7, changeFrequency: "weekly" },
    { url: `${base}/a-propos`, priority: 0.6, changeFrequency: "yearly" },
    { url: `${base}/demo`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/contact`, priority: 0.5, changeFrequency: "yearly" },
    { url: `${base}/inscription`, priority: 0.8, changeFrequency: "yearly" },
  ];

  const languageRoutes: MetadataRoute.Sitemap = languages.map((lang) => ({
    url: `${base}/langues/${lang.slug}`,
    priority: lang.heritage ? 0.9 : 0.8,
    changeFrequency: "monthly",
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${base}/journal/${article.slug}`,
    lastModified: article.date,
    priority: 0.6,
    changeFrequency: "yearly",
  }));

  return [...staticRoutes, ...languageRoutes, ...articleRoutes];
}
