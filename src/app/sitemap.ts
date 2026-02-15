import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { defaultLocale, locales } from "@/lib/i18n";
import { serviceSlugs } from "@/lib/services";
import {
  blogSlugs,
  caseSlugs,
  comparisonSlugs,
  marketingSlugs,
  regionCitySlugs,
  regionPageSlug,
  seoLocales,
} from "@/lib/seo-content";

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

  seoLocales.forEach((locale) => {
    pages.push({
      url: `${siteConfig.url}/${locale}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    });

    pages.push({
      url: `${siteConfig.url}/${locale}/sravnenie`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    });

    pages.push({
      url: `${siteConfig.url}/${locale}/cases`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    });

    pages.push({
      url: `${siteConfig.url}/${locale}/contacts`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    });

    marketingSlugs.forEach((slug) => {
      pages.push({
        url: `${siteConfig.url}/${locale}/${slug}`,
        lastModified,
        changeFrequency: "weekly",
        priority: 0.9,
      });
    });

    comparisonSlugs.forEach((slug) => {
      pages.push({
        url: `${siteConfig.url}/${locale}/sravnenie/${slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });

    blogSlugs.forEach((slug) => {
      pages.push({
        url: `${siteConfig.url}/${locale}/blog/${slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    });

    regionCitySlugs.forEach((city) => {
      pages.push({
        url: `${siteConfig.url}/${locale}/region/${city}/${regionPageSlug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    });

    caseSlugs.forEach((slug) => {
      pages.push({
        url: `${siteConfig.url}/${locale}/cases/${slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
  });

  return pages;
};

export default sitemap;
