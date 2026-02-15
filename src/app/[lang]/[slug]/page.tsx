import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarketingPageTemplate from "@/components/seo/MarketingPageTemplate";
import { defaultLocale, isLocale, locales } from "@/lib/i18n";
import { getMarketingPage, getMarketingPages, seoLocales } from "@/lib/seo-content";
import { siteConfig } from "@/lib/site";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildOrganizationSchema,
  buildServiceSchema,
} from "@/lib/seo-schema";

type Params = {
  lang: string;
  slug: string;
};

export const generateStaticParams = () =>
  seoLocales.flatMap((lang) =>
    getMarketingPages(lang).map((page) => ({
      lang,
      slug: page.slug,
    })),
  );

export const generateMetadata = async ({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> => {
  const { lang, slug } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const page = getMarketingPage(locale, slug);

  if (!page) {
    return {
      title: siteConfig.name,
    };
  }

  const canonical = `${siteConfig.url}/${locale}/${slug}`;
  const languageAlternates = Object.fromEntries(
    locales
      .filter((loc) => loc === "ru" || loc === "uz")
      .map((loc) => [loc, `${siteConfig.url}/${loc}/${slug}`]),
  );

  return {
    metadataBase: new URL(siteConfig.url),
    title: page.seoTitle,
    description: page.metaDescription,
    keywords: page.lsi,
    alternates: {
      canonical,
      languages: {
        ...languageAlternates,
        "x-default": `${siteConfig.url}/ru/${slug}`,
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: page.seoTitle,
      description: page.metaDescription,
      siteName: siteConfig.name,
    },
  };
};

const MarketingPage = async ({ params }: { params: Promise<Params> }) => {
  const { lang, slug } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;

  if (locale !== "ru" && locale !== "uz") {
    notFound();
  }

  const page = getMarketingPage(locale, slug);

  if (!page) {
    notFound();
  }

  const path = `/${locale}/${page.slug}`;
  const breadcrumbs = [
    { label: locale === "ru" ? "Главная" : "Bosh sahifa", href: `/${locale}` },
    { label: locale === "ru" ? "Услуги" : "Xizmatlar", href: `/${locale}/services` },
    { label: page.h1, href: path },
  ];

  const serviceSchema = buildServiceSchema({
    name: page.h1,
    description: page.metaDescription,
    serviceType: page.serviceType,
    path,
    locale,
  });

  const faqSchema = buildFaqSchema(page.faq);
  const orgSchema = buildOrganizationSchema();
  const breadcrumbSchema = buildBreadcrumbSchema(
    breadcrumbs.map((crumb) => ({ name: crumb.label, item: `${siteConfig.url}${crumb.href}` })),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <MarketingPageTemplate
        locale={locale}
        title={page.h1}
        lead={page.lead}
        sections={page.sections}
        faq={page.faq}
        ctas={page.ctas}
        internalLinks={page.internalLinks}
        lsi={page.lsi}
        breadcrumbs={breadcrumbs}
      />
    </>
  );
};

export default MarketingPage;
