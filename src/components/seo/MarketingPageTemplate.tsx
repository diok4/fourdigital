import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import LeadCaptureForm from "@/components/seo/LeadCaptureForm";
import { getHomeContent } from "@/lib/content";
import { localeLabels, locales, type Locale } from "@/lib/i18n";
import type { CtaItem, FaqItem, PageLink, ContentSection } from "@/lib/seo-content";

type MarketingPageTemplateProps = {
  locale: Locale;
  title: string;
  lead: string;
  sections: ContentSection[];
  faq: FaqItem[];
  ctas: CtaItem[];
  internalLinks: PageLink[];
  lsi?: string[];
  breadcrumbs: { label: string; href: string }[];
};

const MarketingPageTemplate = ({
  locale,
  title,
  lead,
  sections,
  faq,
  ctas,
  internalLinks,
  lsi,
  breadcrumbs,
}: MarketingPageTemplateProps) => {
  const homeContent = getHomeContent(locale);

  const languageLinks = locales.map((loc) => ({
    label: localeLabels[loc],
    href: `/${loc}`,
    isActive: loc === locale,
  }));

  const localeSectionTitle =
    locale === "ru"
      ? "Связанные страницы"
      : locale === "uz"
        ? "Bog'liq sahifalar"
        : "Related pages";

  const faqTitle = locale === "ru" ? "FAQ" : locale === "uz" ? "Savol-javob" : "FAQ";

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
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
          <div className="max-w-5xl mx-auto">
            <Breadcrumbs items={breadcrumbs} />
            <h1 className="font-display font-light text-3xl sm:text-4xl md:text-6xl text-foreground mb-5">{title}</h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">{lead}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {ctas.map((cta) => (
                <a key={cta.label} href={cta.href} className="magnetic-button text-sm px-6 py-3 w-full sm:w-auto justify-center">
                  {cta.label}
                </a>
              ))}
            </div>

            {lsi && lsi.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {lsi.map((item) => (
                  <span key={item} className="rounded-full border border-border/70 px-3 py-1 text-xs text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        {sections.map((section) => (
          <section key={section.title} className="section-padding pt-0">
            <div className="max-w-5xl mx-auto glass-panel p-8 md:p-10">
              <h2 className="font-display text-3xl text-foreground mb-4">{section.title}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>
        ))}

        {faq.length > 0 ? (
          <section className="section-padding pt-0">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-display text-3xl text-foreground mb-6">{faqTitle}</h2>
              <div className="space-y-4">
                {faq.map((item) => (
                  <details key={item.question} className="glass-panel p-6">
                    <summary className="cursor-pointer font-display text-lg text-foreground">{item.question}</summary>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="section-padding pt-0">
          <div className="max-w-5xl mx-auto glass-panel p-7 md:p-8">
            <h2 className="font-display text-2xl text-foreground mb-4">{localeSectionTitle}</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {internalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-border/60 px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-border transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-padding pt-0">
          <div className="max-w-5xl mx-auto">
            <LeadCaptureForm locale={locale === "uz" ? "uz" : "ru"} subjectContext={title} />
          </div>
        </section>
      </main>

      <Footer {...homeContent.footer} navLinks={homeContent.navLinks} />
    </div>
  );
};

export default MarketingPageTemplate;
