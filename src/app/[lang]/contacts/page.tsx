import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarketingPageTemplate from "@/components/seo/MarketingPageTemplate";
import { defaultLocale, isLocale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import {
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
  buildOrganizationSchema,
} from "@/lib/seo-schema";

type Params = {
  lang: string;
};

export const generateStaticParams = () => [{ lang: "ru" }, { lang: "uz" }];

export const generateMetadata = async ({ params }: { params: Promise<Params> }): Promise<Metadata> => {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;

  const title = locale === "ru" ? "Контакты Fourdigital в Ташкенте" : "Toshkentdagi Fourdigital kontaktlari";
  const description =
    locale === "ru"
      ? "Контакты и офис Fourdigital: сайт под ключ, SEO и Google Ads в Ташкенте."
      : "Fourdigital aloqa va ofis: Toshkentda sayt, SEO va Google Ads xizmatlari.";

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    alternates: {
      canonical: `${siteConfig.url}/${locale}/contacts`,
      languages: {
        ru: `${siteConfig.url}/ru/contacts`,
        uz: `${siteConfig.url}/uz/contacts`,
        "x-default": `${siteConfig.url}/ru/contacts`,
      },
    },
  };
};

const ContactsPage = async ({ params }: { params: Promise<Params> }) => {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;

  if (locale !== "ru" && locale !== "uz") {
    notFound();
  }

  const title = locale === "ru" ? "Контакты и офис Fourdigital" : "Fourdigital aloqa va ofis";
  const lead =
    locale === "ru"
      ? "Работаем с бизнесом в Ташкенте и по всему Узбекистану. Для старта проекта оставьте заявку — вернёмся с планом и сметой."
      : "Toshkent va butun O'zbekiston bo'yicha ishlaymiz. Loyiha starti uchun so'rov qoldiring, reja va smeta yuboramiz.";

  const sections = [
    {
      title: locale === "ru" ? "Контактные данные" : "Kontakt ma'lumotlari",
      paragraphs: [
        `${locale === "ru" ? "Телефон" : "Telefon"}: ${siteConfig.phoneDisplay}`,
        `${locale === "ru" ? "Email" : "Email"}: ${siteConfig.email}`,
        `${locale === "ru" ? "Город" : "Shahar"}: Tashkent, Uzbekistan`,
        `${locale === "ru" ? "График" : "Ish vaqti"}: Mon-Fri, 10:00-19:00`,
      ],
    },
    {
      title: locale === "ru" ? "Как проходит старт проекта" : "Loyiha qanday boshlanadi",
      paragraphs: [
        locale === "ru"
          ? "1) Бриф и цели. 2) Предварительная структура и оценка. 3) Коммерческое предложение и план на 30-90 дней."
          : "1) Brif va maqsad. 2) Dastlabki struktura va baholash. 3) Tijoriy taklif va 30-90 kunlik reja.",
        locale === "ru"
          ? "На этапе брифа фиксируем каналы привлечения, KPI и модель отчетности, чтобы сайт запускался как управляемый актив."
          : "Brif bosqichida kanal, KPI va hisobot modelini aniqlaymiz, sayt boshqariladigan aktiv sifatida ishga tushadi.",
      ],
    },
  ];

  const faq = [
    {
      question: locale === "ru" ? "Можно встретиться в офисе в Ташкенте?" : "Toshkent ofisida uchrashsa bo'ladimi?",
      answer:
        locale === "ru"
          ? "Да, проводим офлайн встречи по предварительной договоренности."
          : "Ha, oldindan kelishilgan holda oflayn uchrashuv o'tkazamiz.",
    },
    {
      question: locale === "ru" ? "Какие услуги можно запустить быстро?" : "Qaysi xizmatni tez ishga tushirish mumkin?",
      answer:
        locale === "ru"
          ? "Лендинг, аудит SEO, аудит рекламы и пилотный запуск Google Ads."
          : "Landing, SEO auditi, reklama auditi va Google Ads pilot launch.",
    },
    {
      question: locale === "ru" ? "Вы работаете по договору?" : "Shartnoma bilan ishlaysizmi?",
      answer:
        locale === "ru"
          ? "Да, фиксируем объем, сроки, этапы и зоны ответственности."
          : "Ha, scope, muddat, bosqich va javobgarlikni shartnomada belgilaymiz.",
    },
    {
      question: locale === "ru" ? "Сколько ждать ответ после заявки?" : "So'rovdan keyin qancha vaqtda javob berasiz?",
      answer:
        locale === "ru"
          ? "Обычно отвечаем в течение одного рабочего дня."
          : "Odatda bir ish kuni ichida javob beramiz.",
    },
    {
      question: locale === "ru" ? "Можно ли начать с одного этапа?" : "Bir bosqichdan boshlasak bo'ladimi?",
      answer:
        locale === "ru"
          ? "Да, можно стартовать с аудита или прототипа и масштабировать дальше."
          : "Ha, audit yoki prototipdan boshlash va keyin kengaytirish mumkin.",
    },
  ];

  const breadcrumbs = [
    { label: locale === "ru" ? "Главная" : "Bosh sahifa", href: `/${locale}` },
    { label: locale === "ru" ? "Контакты" : "Aloqa", href: `/${locale}/contacts` },
  ];

  const path = `/${locale}/contacts`;
  const orgSchema = buildOrganizationSchema();
  const localBusinessSchema = buildLocalBusinessSchema({ path, city: "Tashkent", locale });
  const breadcrumbSchema = buildBreadcrumbSchema(
    breadcrumbs.map((item) => ({ name: item.label, item: `${siteConfig.url}${item.href}` })),
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <MarketingPageTemplate
        locale={locale}
        title={title}
        lead={lead}
        sections={sections}
        faq={faq}
        ctas={[
          { label: locale === "ru" ? "Оставить заявку" : "So'rov qoldirish", href: "#contact" },
          {
            label: locale === "ru" ? "Позвонить" : "Qo'ng'iroq qilish",
            href: `tel:${siteConfig.phone}`,
          },
        ]}
        internalLinks={[
          { href: `/${locale}/sozdanie-saitov-tashkent`, label: locale === "ru" ? "Создание сайтов" : "Sayt yaratish" },
          { href: `/${locale}/seo-prodvizhenie-tashkent`, label: "SEO" },
          { href: `/${locale}/kontekstnaya-reklama-google-ads`, label: "Google Ads" },
        ]}
        breadcrumbs={breadcrumbs}
      />
    </>
  );
};

export default ContactsPage;
