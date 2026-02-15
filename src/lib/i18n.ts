export const locales = ["ru", "uz", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ru";

export const localeLabels: Record<Locale, string> = {
  ru: "RU",
  uz: "UZ",
  en: "EN",
};

export const ogLocaleMap: Record<Locale, string> = {
  ru: "ru_UZ",
  uz: "uz_UZ",
  en: "en_US",
};

export const languageNames: Record<Locale, string> = {
  ru: "Russian",
  uz: "Uzbek",
  en: "English",
};

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);
