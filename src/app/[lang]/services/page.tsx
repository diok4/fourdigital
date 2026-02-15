import CursorGlow from "@/components/CursorGlow";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { getHomeContent } from "@/lib/content";
import { getServicePages, getServicesIndexContent } from "@/lib/services";
import { defaultLocale, isLocale, localeLabels, locales, ogLocaleMap } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

export const generateStaticParams = () => locales.map((lang) => ({ lang }));

type ServicesPageParams = {
  lang: string;
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<ServicesPageParams>;
}): Promise<Metadata> => {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const content = getServicesIndexContent(locale);
  const canonical = `${siteConfig.url}/${locale}/services`;
  const languageAlternates = Object.fromEntries(
    locales.map((loc) => [loc, `${siteConfig.url}/${loc}/services`]),
  );

  return {
    metadataBase: new URL(siteConfig.url),
    title: content.meta.title,
    description: content.meta.description,
    keywords: content.meta.keywords,
    alternates: {
      canonical,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: content.meta.title,
      description: content.meta.description,
      siteName: siteConfig.name,
      locale: ogLocaleMap[locale],
      alternateLocale: locales
        .filter((loc) => loc !== locale)
        .map((loc) => ogLocaleMap[loc]),
    },
  };
};

const ServicesPage = async ({ params }: { params: Promise<ServicesPageParams> }) => {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const homeContent = getHomeContent(locale);
  const content = getServicesIndexContent(locale);
  const services = getServicePages(locale);
  const languageLinks = locales.map((loc) => ({
    label: localeLabels[loc],
    href: `/${loc}/services`,
    isActive: loc === locale,
  }));

  return (
    <div key={locale} className="relative min-h-screen bg-background overflow-x-hidden">
      <CursorGlow />
      <Header
        navLinks={homeContent.navLinks}
        ctaLabel={homeContent.headerCta}
        languages={languageLinks}
        homeHref={`/${locale}`}
        navBaseHref={`/${locale}`}
      />
      <main>
        <section className="section-padding pt-32">
          <div className="max-w-5xl mx-auto text-center">
            <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
              {content.hero.eyebrow}
            </p>
            <h1 className="font-display font-light text-4xl md:text-6xl text-foreground mb-6">
              {content.hero.title}
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {content.hero.description}
            </p>
          </div>

          <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${locale}/services/${service.slug}`}
                className="glass-panel p-7 hover:shadow-[0_30px_80px_-20px_hsl(168_80%_35%/0.35)] transition-shadow duration-500"
              >
                <span className="font-body text-xs uppercase tracking-[0.2em] text-primary mb-3 block">
                  {content.hero.eyebrow}
                </span>
                <h2 className="font-display text-2xl font-medium text-foreground mb-3">
                  {service.meta.title}
                </h2>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {service.meta.description}
                </p>
                <div className="mt-4 text-sm font-display text-primary">
                  {homeContent.services.linkLabel} →
                </div>
              </Link>
            ))}
          </div>
        </section>
        <Contact {...homeContent.contact} />
      </main>
      <Footer {...homeContent.footer} navLinks={homeContent.navLinks} />
    </div>
  );
};

export default ServicesPage;
