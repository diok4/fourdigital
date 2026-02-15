import { siteConfig } from "@/lib/site";
import type { FaqItem } from "@/lib/seo-content";

export const buildOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  areaServed: siteConfig.areaServed,
  sameAs: siteConfig.sameAs,
});

export const buildServiceSchema = ({
  name,
  description,
  serviceType,
  path,
  locale,
}: {
  name: string;
  description: string;
  serviceType: string;
  path: string;
  locale: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  serviceType,
  url: `${siteConfig.url}${path}`,
  inLanguage: locale,
  areaServed: ["Tashkent", "Uzbekistan"],
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
  },
});

export const buildFaqSchema = (faq: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

export const buildBreadcrumbSchema = (items: Array<{ name: string; item: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: crumb.item,
  })),
});

export const buildLocalBusinessSchema = ({
  path,
  city,
  locale,
}: {
  path: string;
  city: string;
  locale: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  url: `${siteConfig.url}${path}`,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  areaServed: city,
  address: {
    "@type": "PostalAddress",
    addressLocality: city,
    addressCountry: "UZ",
  },
  availableLanguage: locale,
});

export const buildArticleSchema = ({
  title,
  description,
  path,
  locale,
}: {
  title: string;
  description: string;
  path: string;
  locale: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  inLanguage: locale,
  mainEntityOfPage: `${siteConfig.url}${path}`,
  author: {
    "@type": "Organization",
    name: siteConfig.name,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
  },
});
