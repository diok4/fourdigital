"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { defaultLocale, locales } from "@/lib/i18n";

const messages = {
  ru: {
    title: "Страница не найдена",
    back: "Вернуться на главную",
  },
  uz: {
    title: "Sahifa topilmadi",
    back: "Bosh sahifaga qaytish",
  },
  en: {
    title: "Page not found",
    back: "Back to home",
  },
};

const NotFound = () => {
  const pathname = usePathname() ?? "";
  const segment = pathname.split("/")[1];
  const locale = locales.includes(segment as typeof locales[number])
    ? (segment as typeof locales[number])
    : defaultLocale;
  const text = messages[locale];

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">{text.title}</p>
        <Link href={`/${locale}`} className="text-primary underline hover:text-primary/90">
          {text.back}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
