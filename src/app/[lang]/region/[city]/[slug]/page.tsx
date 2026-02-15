import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarketingPageTemplate from "@/components/seo/MarketingPageTemplate";
import { defaultLocale, isLocale } from "@/lib/i18n";
import { getRegionPage, regionCitySlugs, regionPageSlug, seoLocales } from "@/lib/seo-content";
import { siteConfig } from "@/lib/site";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildServiceSchema,
} from "@/lib/seo-schema";

type Params = {
  lang: string;
  city: string;
  slug: string;
};

export const generateStaticParams = () =>
  seoLocales.flatMap((lang) =>
    regionCitySlugs.map((city) => ({
      lang,
      city,
      slug: regionPageSlug,
    })),
  );

export const generateMetadata = async ({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> => {
  const { lang, city, slug } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const page = getRegionPage(locale, city, slug);

  if (!page) return { title: siteConfig.name };

  const canonical = `${siteConfig.url}/${locale}/region/${city}/${slug}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: page.seoTitle,
    description: page.metaDescription,
    alternates: {
      canonical,
      languages: {
        ru: `${siteConfig.url}/ru/region/${city}/${slug}`,
        uz: `${siteConfig.url}/uz/region/${city}/${slug}`,
        "x-default": `${siteConfig.url}/ru/region/${city}/${slug}`,
      },
    },
    openGraph: {
      type: "website",
      title: page.seoTitle,
      description: page.metaDescription,
      url: canonical,
      siteName: siteConfig.name,
    },
  };
};

const RegionPage = async ({ params }: { params: Promise<Params> }) => {
  const { lang, city, slug } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;

  if (locale !== "ru" && locale !== "uz") {
    notFound();
  }

  const page = getRegionPage(locale, city, slug);
  if (!page) notFound();

  const path = `/${locale}/region/${page.city}/${page.slug}`;

  const breadcrumbs = [
    { label: locale === "ru" ? "Главная" : "Bosh sahifa", href: `/${locale}` },
    { label: locale === "ru" ? "Регионы" : "Regionlar", href: `/${locale}/region/${page.city}/${page.slug}` },
    { label: page.h1, href: path },
  ];

  const serviceSchema = buildServiceSchema({
    name: page.h1,
    description: page.metaDescription,
    serviceType: "LocalWebService",
    path,
    locale,
  });
  const faqSchema = buildFaqSchema(page.faq);
  const localBusinessSchema = buildLocalBusinessSchema({
    path,
    city: page.cityLabel,
    locale,
  });
  const orgSchema = buildOrganizationSchema();
  const breadcrumbSchema = buildBreadcrumbSchema(
    breadcrumbs.map((item) => ({ name: item.label, item: `${siteConfig.url}${item.href}` })),
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <MarketingPageTemplate
        locale={locale}
        title={page.h1}
        lead={page.lead}
        sections={page.sections}
        faq={page.faq}
        ctas={page.ctas}
        internalLinks={page.internalLinks}
        breadcrumbs={breadcrumbs}
      />
    </>
  );
};

export default RegionPage;
