const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fourdigital.uz";

const normalizeUrl = (value: string) => {
  if (!value) return "https://fourdigital.uz";
  const withProtocol = value.startsWith("http") ? value : `https://${value}`;
  return withProtocol.replace(/\/$/, "");
};

export const siteConfig = {
  name: "Fourdigital",
  legalName: "Fourdigital.uz",
  url: normalizeUrl(rawSiteUrl),
  locale: "ru_UZ",
  description:
    "Создание сайтов под ключ в Узбекистане: стратегия, дизайн и разработка, которые приводят клиентов.",
  keywords: [
    "создание сайта",
    "создание сайтов",
    "разработка сайтов",
    "SEO продвижение",
    "digital агентство",
    "Узбекистан",
    "Ташкент",
  ],
  phone: "+998200074430",
  phoneDisplay: "+998 20 007 44 30",
  telegram: "https://t.me/fourdigitaluz",
  email: "sales@fourdigital.uz",
  areaServed: ["UZ"],
  languages: ["ru", "uz", "en"],
  sameAs: ["https://t.me/fourdigitaluz"] as string[],
  socialLinks: [] as { label: string; href: string }[],
};
