import CursorGlow from "@/components/CursorGlow";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";
import { getHomeContent } from "@/lib/content";
import { defaultLocale, isLocale, languageNames, localeLabels, locales } from "@/lib/i18n";

export const generateStaticParams = () => locales.map((lang) => ({ lang }));

type PageParams = {
  lang: string;
};

const Page = async ({ params }: { params: Promise<PageParams> }) => {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const content = getHomeContent(locale);
  const canonical = `${siteConfig.url}/${locale}`;
  const languageLinks = locales.map((loc) => ({
    label: localeLabels[loc],
    href: `/${loc}`,
    isActive: loc === locale,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: canonical,
    description: content.meta.description,
    inLanguage: locale,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: siteConfig.areaServed,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "sales",
        email: siteConfig.email,
        availableLanguage: siteConfig.languages.map((lang) => languageNames[lang as keyof typeof languageNames] ?? lang),
      },
    ],
    ...(siteConfig.sameAs.length > 0 ? { sameAs: siteConfig.sameAs } : {}),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div key={locale} className="relative min-h-screen bg-background overflow-x-hidden">
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
        navLinks={content.navLinks}
        ctaLabel={content.headerCta}
        languages={languageLinks}
        homeHref={`/${locale}`}
      />
      <main>
        <Hero {...content.hero} />
        <Services {...content.services} />
        <Process {...content.process} />
        <Portfolio {...content.portfolio} />
        <Testimonials {...content.testimonials} />
        <Team {...content.team} />
        <Faq {...content.faq} />
        <Contact locale={locale} {...content.contact} />
      </main>
      <Footer
        {...content.footer}
        navLinks={content.navLinks}
      />
    </div>
  );
};

export default Page;
