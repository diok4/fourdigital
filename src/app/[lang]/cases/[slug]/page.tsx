import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarketingPageTemplate from "@/components/seo/MarketingPageTemplate";
import { defaultLocale, isLocale } from "@/lib/i18n";
import { caseSlugs, getCaseStudy, seoLocales } from "@/lib/seo-content";
import { siteConfig } from "@/lib/site";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildOrganizationSchema,
} from "@/lib/seo-schema";

type Params = {
  lang: string;
  slug: string;
};

export const generateStaticParams = () =>
  seoLocales.flatMap((lang) => caseSlugs.map((slug) => ({ lang, slug })));

export const generateMetadata = async ({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> => {
  const { lang, slug } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const study = getCaseStudy(locale, slug);

  if (!study) return { title: siteConfig.name };

  const canonical = `${siteConfig.url}/${locale}/cases/${slug}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: study.seoTitle,
    description: study.metaDescription,
    alternates: {
      canonical,
      languages: {
        ru: `${siteConfig.url}/ru/cases/${slug}`,
        uz: `${siteConfig.url}/uz/cases/${slug}`,
        "x-default": `${siteConfig.url}/ru/cases/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      title: study.seoTitle,
      description: study.metaDescription,
      url: canonical,
      siteName: siteConfig.name,
    },
  };
};

const CasePage = async ({ params }: { params: Promise<Params> }) => {
  const { lang, slug } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;

  if (locale !== "ru" && locale !== "uz") {
    notFound();
  }

  const study = getCaseStudy(locale, slug);
  if (!study) notFound();

  const path = `/${locale}/cases/${study.slug}`;

  const breadcrumbs = [
    { label: locale === "ru" ? "Главная" : "Bosh sahifa", href: `/${locale}` },
    { label: locale === "ru" ? "Кейсы" : "Keyslar", href: `/${locale}/cases` },
    { label: study.title, href: path },
  ];

  const articleSchema = buildArticleSchema({
    title: study.title,
    description: study.metaDescription,
    path,
    locale,
  });

  const orgSchema = buildOrganizationSchema();
  const breadcrumbSchema = buildBreadcrumbSchema(
    breadcrumbs.map((item) => ({ name: item.label, item: `${siteConfig.url}${item.href}` })),
  );

  const sections = [
    { title: locale === "ru" ? "Контекст проекта" : "Loyiha konteksti", paragraphs: [study.intro] },
    { title: locale === "ru" ? "Вызов" : "Muammo", paragraphs: [study.challenge] },
    {
      title: locale === "ru" ? "Что сделали" : "Nima qildik",
      paragraphs: study.solution,
    },
    {
      title: locale === "ru" ? "Результат" : "Natija",
      paragraphs: study.result,
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <MarketingPageTemplate
        locale={locale}
        title={study.title}
        lead={study.metaDescription}
        sections={sections}
        faq={[]}
        ctas={[...study.ctas, { label: locale === "ru" ? "Связаться" : "Aloqa", href: "#contact" }]}
        internalLinks={study.ctas}
        breadcrumbs={breadcrumbs}
      />
    </>
  );
};

export default CasePage;
