import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarketingPageTemplate from "@/components/seo/MarketingPageTemplate";
import { defaultLocale, isLocale } from "@/lib/i18n";
import { blogSlugs, getBlogPost, seoLocales } from "@/lib/seo-content";
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
  seoLocales.flatMap((lang) => blogSlugs.map((slug) => ({ lang, slug })));

export const generateMetadata = async ({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> => {
  const { lang, slug } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const post = getBlogPost(locale, slug);

  if (!post) return { title: siteConfig.name };

  const canonical = `${siteConfig.url}/${locale}/blog/${slug}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: post.seoTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical,
      languages: {
        ru: `${siteConfig.url}/ru/blog/${slug}`,
        uz: `${siteConfig.url}/uz/blog/${slug}`,
        "x-default": `${siteConfig.url}/ru/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      type: "article",
      url: canonical,
      siteName: siteConfig.name,
    },
  };
};

const BlogPostPage = async ({ params }: { params: Promise<Params> }) => {
  const { lang, slug } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;

  if (locale !== "ru" && locale !== "uz") {
    notFound();
  }

  const post = getBlogPost(locale, slug);
  if (!post) notFound();

  const path = `/${locale}/blog/${post.slug}`;

  const breadcrumbs = [
    { label: locale === "ru" ? "Главная" : "Bosh sahifa", href: `/${locale}` },
    { label: "Blog", href: `/${locale}/blog` },
    { label: post.title, href: path },
  ];

  const articleSchema = buildArticleSchema({
    title: post.title,
    description: post.metaDescription,
    path,
    locale,
  });

  const faqSchema = buildFaqSchema(post.faq);
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
        title={post.title}
        lead={post.intro}
        sections={post.sections}
        faq={post.faq}
        ctas={[
          { label: locale === "ru" ? "Получить консультацию" : "Maslahat olish", href: "#contact" },
          ...post.promotedPages.map((item) => ({ label: item.label, href: item.href })),
        ]}
        internalLinks={post.promotedPages}
        lsi={post.keywords}
        breadcrumbs={breadcrumbs}
      />
    </>
  );
};

export default BlogPostPage;
