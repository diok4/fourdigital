import "../globals.css";
import type { Metadata } from "next";
import { Istok_Web, Poppins } from "next/font/google";
import Providers from "../providers";
import { siteConfig } from "@/lib/site";
import { getHomeContent } from "@/lib/content";
import { defaultLocale, isLocale, locales, ogLocaleMap } from "@/lib/i18n";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const istok = Istok_Web({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-body",
  display: "swap",
});

type LayoutParams = {
  lang: string;
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<LayoutParams>;
}): Promise<Metadata> => {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const content = getHomeContent(locale);
  const canonical = `${siteConfig.url}/${locale}`;
  const languageAlternates = Object.fromEntries(
    locales.map((loc) => [loc, `${siteConfig.url}/${loc}`]),
  );

  return {
    metadataBase: new URL(siteConfig.url),
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico" },
      ],
      shortcut: "/favicon.svg",
    },
    title: {
      default: content.meta.title,
      template: `%s — ${siteConfig.name}`,
    },
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
    twitter: {
      card: "summary_large_image",
      title: content.meta.title,
      description: content.meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<LayoutParams>;
};

const RootLayout = async ({ children, params }: RootLayoutProps) => {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;

  return (
    <html lang={locale} className={`${poppins.variable} ${istok.variable}`} suppressHydrationWarning>
      <body className="font-body">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
