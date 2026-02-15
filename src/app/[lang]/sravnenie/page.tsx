import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getHomeContent } from "@/lib/content";
import { defaultLocale, isLocale, localeLabels, locales } from "@/lib/i18n";
import { getComparisonPages } from "@/lib/seo-content";
import { siteConfig } from "@/lib/site";

export const generateStaticParams = () => [{ lang: "ru" }, { lang: "uz" }];

type Params = { lang: string };

export const generateMetadata = async ({ params }: { params: Promise<Params> }): Promise<Metadata> => {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;

  const title = locale === "ru" ? "Сравнения и выбор решений" : "Taqqoslash va yechim tanlash";
  const description =
    locale === "ru"
      ? "Сравниваем форматы и каналы: лендинг vs сайт, SEO vs Ads, freelancer vs агентство, Tilda vs custom."
      : "Format va kanallarni taqqoslaymiz: landing vs sayt, SEO vs Ads, freelancer vs agentlik, Tilda vs custom.";

  const canonical = `${siteConfig.url}/${locale}/sravnenie`;

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ru: `${siteConfig.url}/ru/sravnenie`,
        uz: `${siteConfig.url}/uz/sravnenie`,
        "x-default": `${siteConfig.url}/ru/sravnenie`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      siteName: siteConfig.name,
    },
  };
};

const ComparisonIndexPage = async ({ params }: { params: Promise<Params> }) => {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;

  if (locale !== "ru" && locale !== "uz") {
    notFound();
  }
  const content = getHomeContent(locale);
  const pages = getComparisonPages(locale);

  const languageLinks = locales.map((loc) => ({
    label: localeLabels[loc],
    href: `/${loc}/sravnenie`,
    isActive: loc === locale,
  }));

  const title = locale === "ru" ? "Сравнения и выбор" : "Taqqoslash va tanlov";
  const lead =
    locale === "ru"
      ? "Практические материалы для принятия решений по сайтам, SEO и рекламе."
      : "Sayt, SEO va reklama bo'yicha qaror qabul qilish uchun amaliy materiallar.";

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <CursorGlow />
      <Header
        navLinks={content.navLinks}
        ctaLabel={content.headerCta}
        languages={languageLinks}
        homeHref={`/${locale}`}
        navBaseHref={`/${locale}`}
      />
      <main>
        <section className="section-padding pt-32">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-display font-light text-4xl md:text-6xl text-foreground mb-4">{title}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mb-10">{lead}</p>
            <div className="grid gap-5 md:grid-cols-2">
              {pages.map((page) => (
                <Link key={page.slug} href={`/${locale}/sravnenie/${page.slug}`} className="glass-panel p-6 hover:shadow-[0_30px_80px_-20px_hsl(168_80%_35%/0.35)] transition-shadow">
                  <h2 className="font-display text-2xl text-foreground mb-2">{page.h1}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{page.metaDescription}</p>
                  <span className="text-primary text-sm">{locale === "ru" ? "Открыть материал" : "Maqolani ochish"} →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer {...content.footer} navLinks={content.navLinks} />
    </div>
  );
};

export default ComparisonIndexPage;
