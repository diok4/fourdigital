import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getHomeContent } from "@/lib/content";
import { defaultLocale, isLocale, localeLabels, locales } from "@/lib/i18n";
import { getBlogPosts, getContentPlan } from "@/lib/seo-content";
import { siteConfig } from "@/lib/site";

export const generateStaticParams = () => [{ lang: "ru" }, { lang: "uz" }];

type Params = { lang: string };

export const generateMetadata = async ({ params }: { params: Promise<Params> }): Promise<Metadata> => {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const title = locale === "ru" ? "Блог и SEO-гайды" : "Blog va SEO qo'llanmalar";
  const description =
    locale === "ru"
      ? "Контент-хаб Fourdigital: 24 материала на 3 месяца по сайтам, SEO, Google Ads и аналитике лидов."
      : "Fourdigital content-hub: sayt, SEO, Google Ads va lead analitika bo'yicha 24 ta material.";

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    alternates: {
      canonical: `${siteConfig.url}/${locale}/blog`,
      languages: {
        ru: `${siteConfig.url}/ru/blog`,
        uz: `${siteConfig.url}/uz/blog`,
        "x-default": `${siteConfig.url}/ru/blog`,
      },
    },
  };
};

const BlogIndexPage = async ({ params }: { params: Promise<Params> }) => {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;

  if (locale !== "ru" && locale !== "uz") {
    notFound();
  }
  const content = getHomeContent(locale);
  const posts = getBlogPosts(locale);
  const plan = getContentPlan(locale);

  const languageLinks = locales.map((loc) => ({
    label: localeLabels[loc],
    href: `/${loc}/blog`,
    isActive: loc === locale,
  }));

  const title = locale === "ru" ? "Блог и контент-план" : "Blog va kontent reja";
  const lead =
    locale === "ru"
      ? "24 материала на 3 месяца: сравнения, гайды, кейсы и чеклисты с привязкой к коммерческим страницам."
      : "3 oyga 24 ta material: taqqoslash, qo'llanma, keys va checklist, hammasi kommersiya sahifalari bilan bog'langan.";

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
            <p className="text-lg text-muted-foreground max-w-4xl mb-10">{lead}</p>

            <div className="grid gap-5 md:grid-cols-2">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/${locale}/blog/${post.slug}`}
                  className="glass-panel p-6 hover:shadow-[0_30px_80px_-20px_hsl(168_80%_35%/0.35)] transition-shadow"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">{post.format}</p>
                  <h2 className="font-display text-2xl text-foreground mb-2">{post.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{post.metaDescription}</p>
                  <span className="text-primary text-sm">{locale === "ru" ? "Читать" : "O'qish"} →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="max-w-6xl mx-auto glass-panel p-6 md:p-8 overflow-x-auto">
            <h2 className="font-display text-2xl text-foreground mb-4">
              {locale === "ru" ? "Контент-план (24 материала)" : "Kontent reja (24 material)"}
            </h2>
            <table className="w-full min-w-[900px] text-left text-sm text-muted-foreground">
              <thead>
                <tr className="border-b border-border/60 text-foreground">
                  <th className="py-2 pr-4">{locale === "ru" ? "Тема" : "Mavzu"}</th>
                  <th className="py-2 pr-4">Intent</th>
                  <th className="py-2 pr-4">{locale === "ru" ? "Ключи" : "Kalitlar"}</th>
                  <th className="py-2 pr-4">{locale === "ru" ? "Формат" : "Format"}</th>
                  <th className="py-2 pr-4">{locale === "ru" ? "Цель" : "Maqsad"}</th>
                  <th className="py-2">{locale === "ru" ? "Продвигает" : "Promote"}</th>
                </tr>
              </thead>
              <tbody>
                {plan.map((item) => (
                  <tr key={item.topic} className="border-b border-border/30 align-top">
                    <td className="py-2 pr-4 text-foreground">{item.topic}</td>
                    <td className="py-2 pr-4">{item.intent}</td>
                    <td className="py-2 pr-4">{item.keys}</td>
                    <td className="py-2 pr-4">{item.format}</td>
                    <td className="py-2 pr-4">{item.goal}</td>
                    <td className="py-2">{item.promotes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <Footer {...content.footer} navLinks={content.navLinks} />
    </div>
  );
};

export default BlogIndexPage;
