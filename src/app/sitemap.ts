import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { defaultLocale, locales } from "@/lib/i18n";
import { serviceSlugs } from "@/lib/services";

const sitemap = (): MetadataRoute.Sitemap => {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    pages.push({
      url: `${siteConfig.url}/${locale}`,
      lastModified,
      changeFrequency: "weekly",
      priority: locale === defaultLocale ? 1 : 0.8,
    });

    pages.push({
      url: `${siteConfig.url}/${locale}/services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    });

    serviceSlugs.forEach((slug) => {
      pages.push({
        url: `${siteConfig.url}/${locale}/services/${slug}`,
        lastModified,
        changeFrequency: "weekly",
        priority: 0.6,
      });
    });
  });

  return pages;
};

export default sitemap;
