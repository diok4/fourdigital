import CursorGlow from "@/components/CursorGlow";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getHomeContent } from "@/lib/content";
import { getServicePage, getServicePricing, serviceSlugs } from "@/lib/services";
import { defaultLocale, isLocale, localeLabels, locales, ogLocaleMap } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateStaticParams = () =>
  locales.flatMap((lang) => serviceSlugs.map((slug) => ({ lang, slug })));

type ServicePageParams = {
  lang: string;
  slug: string;
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<ServicePageParams>;
}): Promise<Metadata> => {
  const { lang, slug } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const service = getServicePage(locale, slug as typeof serviceSlugs[number]);

  if (!service) {
    return {
      title: siteConfig.name,
    };
  }

  const canonical = `${siteConfig.url}/${locale}/services/${service.slug}`;
  const languageAlternates = Object.fromEntries(
    locales.map((loc) => [loc, `${siteConfig.url}/${loc}/services/${service.slug}`]),
  );

  return {
    metadataBase: new URL(siteConfig.url),
    title: service.meta.title,
    description: service.meta.description,
    keywords: service.meta.keywords,
    alternates: {
      canonical,
      languages: {
        ...languageAlternates,
        "x-default": `${siteConfig.url}/ru/services/${service.slug}`,
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: service.meta.title,
      description: service.meta.description,
      siteName: siteConfig.name,
      locale: ogLocaleMap[locale],
      alternateLocale: locales
        .filter((loc) => loc !== locale)
        .map((loc) => ogLocaleMap[loc]),
    },
  };
};

const ServicePage = async ({ params }: { params: Promise<ServicePageParams> }) => {
  const { lang, slug } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const homeContent = getHomeContent(locale);
  const service = getServicePage(locale, slug as typeof serviceSlugs[number]);

  if (!service) {
    notFound();
  }

  const pricing = getServicePricing(locale, service.slug);

  const languageLinks = locales.map((loc) => ({
    label: localeLabels[loc],
    href: `/${loc}/services/${service.slug}`,
    isActive: loc === locale,
  }));

  const allServicesLabel = {
    ru: "Все услуги",
    uz: "Barcha xizmatlar",
    en: "All services",
  }[locale];
  const discussButtons = new Set(["Обсудить проект", "Loyihani muhokama qilish", "Discuss a project"]);
  const primaryCtaHref = discussButtons.has(service.cta.button)
    ? siteConfig.telegram
    : `mailto:${siteConfig.email}`;
  const primaryCtaExternal = primaryCtaHref.startsWith("http");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.meta.title,
    description: service.meta.description,
    serviceType: service.hero.title,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phone,
      email: siteConfig.email,
    },
    areaServed: siteConfig.areaServed,
    inLanguage: locale,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div key={`${locale}-${service.slug}`} className="relative min-h-screen bg-background overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
            <p className="font-body text-xs sm:text-sm uppercase tracking-[0.24em] sm:tracking-[0.3em] text-muted-foreground mb-4">
              {service.hero.eyebrow}
            </p>
            <h1 className="font-display font-light text-3xl sm:text-4xl md:text-6xl text-foreground mb-6">
              {service.hero.title}
            </h1>
            <p className="font-body text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {service.hero.description}
            </p>
            <div className="mt-6 inline-flex flex-col items-center gap-1 rounded-2xl border border-border/50 bg-background/70 px-6 py-4">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {pricing.label}
              </span>
              <span className="font-display text-xl text-foreground">
                {pricing.value}
              </span>
              {pricing.note ? (
                <span className="text-xs text-muted-foreground">{pricing.note}</span>
              ) : null}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="magnetic-button w-full sm:w-auto">
                {service.hero.cta}
              </a>
              <a href={`/${locale}/services`} className="font-display text-sm text-foreground hover:text-primary transition-colors w-full sm:w-auto text-center">
                {allServicesLabel} →
              </a>
            </div>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="glass-panel p-8">
              <h2 className="font-display text-2xl font-medium text-foreground mb-4">
                {service.highlights.title}
              </h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {service.highlights.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-panel p-8">
              <h2 className="font-display text-2xl font-medium text-foreground mb-4">
                {service.deliverables.title}
              </h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {service.deliverables.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl font-medium text-foreground mb-8 text-center">
              {service.process.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.process.steps.map((step, index) => (
                <div key={step.title} className="glass-panel p-7">
                  <div className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-3">{step.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl font-medium text-foreground mb-8 text-center">
              {service.faq.title}
            </h2>
            <div className="space-y-4">
              {service.faq.items.map((item) => (
                <details key={item.question} className="glass-panel p-6">
                  <summary className="cursor-pointer font-display text-lg text-foreground">
                    {item.question}
                  </summary>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-padding pt-0">
          <div className="max-w-5xl mx-auto text-center glass-panel p-10">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              {service.cta.title}
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-2xl mx-auto">
              {service.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={primaryCtaHref}
                className="magnetic-button w-full sm:w-auto"
                target={primaryCtaExternal ? "_blank" : undefined}
                rel={primaryCtaExternal ? "noopener noreferrer" : undefined}
              >
                {service.cta.button}
              </a>
              <a href={`tel:${siteConfig.phone}`} className="font-display text-sm text-foreground hover:text-primary transition-colors">
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer {...homeContent.footer} navLinks={homeContent.navLinks} />
    </div>
  );
};

export default ServicePage;
