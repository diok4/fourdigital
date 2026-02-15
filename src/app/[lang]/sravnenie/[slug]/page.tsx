import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarketingPageTemplate from "@/components/seo/MarketingPageTemplate";
import { defaultLocale, isLocale } from "@/lib/i18n";
import { comparisonSlugs, getComparisonPage, seoLocales } from "@/lib/seo-content";
import { siteConfig } from "@/lib/site";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildOrganizationSchema,
} from "@/lib/seo-schema";

type Params = {
  lang: string;
  slug: string;
};

export const generateStaticParams = () =>
  seoLocales.flatMap((lang) => comparisonSlugs.map((slug) => ({ lang, slug })));

export const generateMetadata = async ({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> => {
  const { lang, slug } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const page = getComparisonPage(locale, slug);

  if (!page) return { title: siteConfig.name };

  const canonical = `${siteConfig.url}/${locale}/sravnenie/${slug}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: page.seoTitle,
    description: page.metaDescription,
    alternates: {
      canonical,
      languages: {
        ru: `${siteConfig.url}/ru/sravnenie/${slug}`,
        uz: `${siteConfig.url}/uz/sravnenie/${slug}`,
        "x-default": `${siteConfig.url}/ru/sravnenie/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      title: page.seoTitle,
      description: page.metaDescription,
      url: canonical,
      siteName: siteConfig.name,
    },
  };
};

const ComparisonPage = async ({ params }: { params: Promise<Params> }) => {
  const { lang, slug } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;

  if (locale !== "ru" && locale !== "uz") {
    notFound();
  }

  const page = getComparisonPage(locale, slug);
  if (!page) notFound();

  const path = `/${locale}/sravnenie/${page.slug}`;

  const breadcrumbs = [
    { label: locale === "ru" ? "Главная" : "Bosh sahifa", href: `/${locale}` },
    { label: locale === "ru" ? "Сравнения" : "Taqqoslash", href: `/${locale}/sravnenie` },
    { label: page.h1, href: path },
  ];

  const articleSchema = buildArticleSchema({
    title: page.h1,
    description: page.metaDescription,
    path,
    locale,
  });

  const faqSchema = buildFaqSchema(page.faq);
  const orgSchema = buildOrganizationSchema();
  const breadcrumbSchema = buildBreadcrumbSchema(
    breadcrumbs.map((item) => ({ name: item.label, item: `${siteConfig.url}${item.href}` })),
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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

export default ComparisonPage;
