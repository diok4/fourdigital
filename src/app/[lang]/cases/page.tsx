import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getHomeContent } from "@/lib/content";
import { defaultLocale, isLocale, localeLabels, locales } from "@/lib/i18n";
import { getCaseStudies } from "@/lib/seo-content";
import { siteConfig } from "@/lib/site";

export const generateStaticParams = () => [{ lang: "ru" }, { lang: "uz" }];

type Params = { lang: string };

export const generateMetadata = async ({ params }: { params: Promise<Params> }): Promise<Metadata> => {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const title = locale === "ru" ? "Кейсы Fourdigital" : "Fourdigital keyslari";
  const description =
    locale === "ru"
      ? "Реальные кейсы по сайтам, SEO и рекламе с задачами, решениями и результатами."
      : "Sayt, SEO va reklama bo'yicha real keyslar: vazifa, yechim va natija.";

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    alternates: {
      canonical: `${siteConfig.url}/${locale}/cases`,
      languages: {
        ru: `${siteConfig.url}/ru/cases`,
        uz: `${siteConfig.url}/uz/cases`,
        "x-default": `${siteConfig.url}/ru/cases`,
      },
    },
  };
};

const CasesPage = async ({ params }: { params: Promise<Params> }) => {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;

  if (locale !== "ru" && locale !== "uz") {
    notFound();
  }
  const content = getHomeContent(locale);
  const cases = getCaseStudies(locale);

  const languageLinks = locales.map((loc) => ({
    label: localeLabels[loc],
    href: `/${loc}/cases`,
    isActive: loc === locale,
  }));

  const title = locale === "ru" ? "Кейсы и результаты" : "Keyslar va natijalar";

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
            <h1 className="font-display font-light text-4xl md:text-6xl text-foreground mb-8">{title}</h1>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {cases.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${locale}/cases/${item.slug}`}
                  className="glass-panel p-6 hover:shadow-[0_30px_80px_-20px_hsl(168_80%_35%/0.35)] transition-shadow"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2">{item.industry}</p>
                  <h2 className="font-display text-2xl text-foreground mb-2">{item.title}</h2>
                  <p className="text-sm text-muted-foreground mb-3">{item.metaDescription}</p>
                  <span className="text-primary text-sm">{locale === "ru" ? "Смотреть кейс" : "Keysni ochish"} →</span>
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

export default CasesPage;
