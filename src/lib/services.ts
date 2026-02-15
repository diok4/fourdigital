import type { Locale } from "@/lib/i18n";

export const serviceSlugs = [
  "website-development",
  "landing-page",
  "corporate-website",
  "ecommerce",
  "seo",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export type ServicePage = {
  slug: ServiceSlug;
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
  };
  highlights: {
    title: string;
    items: string[];
  };
  deliverables: {
    title: string;
    items: string[];
  };
  process: {
    title: string;
    steps: { title: string; description: string }[];
  };
  faq: {
    title: string;
    items: { question: string; answer: string }[];
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
};

export type ServicePricing = {
  label: string;
  value: string;
  note?: string;
};

export type ServicesIndexContent = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
};

const pricingByLocale: Record<Locale, Record<ServiceSlug, ServicePricing>> = {
  ru: {
    "website-development": {
      label: "Стоимость",
      value: "от 1 500 000 сум",
      note: "Формат подбираем под задачу: лендинг, корпоративный сайт или магазин.",
    },
    "landing-page": {
      label: "Стоимость",
      value: "от 1 500 000 сум",
      note: "Быстрый запуск и тестирование оффера.",
    },
    "corporate-website": {
      label: "Стоимость",
      value: "от 2 500 000 сум",
      note: "Зависит от структуры и объёма контента.",
    },
    ecommerce: {
      label: "Стоимость",
      value: "индивидуально",
      note: "Подберём 2–3 варианта под ваш бюджет и ассортимент.",
    },
    seo: {
      label: "Стоимость",
      value: "индивидуально",
      note: "Зависит от ниши и конкуренции.",
    },
  },
  uz: {
    "website-development": {
      label: "Narx",
      value: "1 500 000 so'mdan",
      note: "Format vazifaga mos tanlanadi: landing, korporativ yoki do'kon.",
    },
    "landing-page": {
      label: "Narx",
      value: "1 500 000 so'mdan",
      note: "Tez ishga tushirish va offerni test qilish.",
    },
    "corporate-website": {
      label: "Narx",
      value: "2 500 000 so'mdan",
      note: "Struktura va kontent hajmiga bog'liq.",
    },
    ecommerce: {
      label: "Narx",
      value: "individual",
      note: "Byudjet va assortimentga mos 2–3 variant taklif qilamiz.",
    },
    seo: {
      label: "Narx",
      value: "individual",
      note: "Nisha va raqobat darajasiga bog'liq.",
    },
  },
  en: {
    "website-development": {
      label: "Pricing",
      value: "from 1,500,000 UZS",
      note: "We tailor the format: landing, corporate site, or ecommerce.",
    },
    "landing-page": {
      label: "Pricing",
      value: "from 1,500,000 UZS",
      note: "Fast launch to test your offer.",
    },
    "corporate-website": {
      label: "Pricing",
      value: "from 2,500,000 UZS",
      note: "Depends on structure and content scope.",
    },
    ecommerce: {
      label: "Pricing",
      value: "custom",
      note: "We offer 2–3 options aligned with your budget and catalog.",
    },
    seo: {
      label: "Pricing",
      value: "custom",
      note: "Depends on niche and competition level.",
    },
  },
};

const servicePagesByLocale: Record<Locale, ServicePage[]> = {
  ru: [
    {
      slug: "website-development",
      meta: {
        title: "Создание сайта под ключ в Узбекистане",
        description:
          "Создание сайта под ключ в Узбекистане: стратегия, дизайн и разработка для роста заявок и продаж.",
        keywords: ["создание сайта", "разработка сайтов", "Узбекистан", "веб-студия"],
      },
      hero: {
        eyebrow: "Создание сайта",
        title: "Создание сайтов под ключ",
        description:
          "Проектируем, разрабатываем и запускаем сайты, которые помогают продавать и укрепляют бренд. Полный цикл от стратегии до аналитики.",
        cta: "Получить консультацию",
      },
      highlights: {
        title: "Почему выбирают нас",
        items: [
          "Фокус на заявках и конверсии, а не только на дизайне",
          "Быстрая разработка на современном стеке",
          "Адаптивность, скорость и чистая архитектура",
          "SEO‑готовность и техподготовка с первого дня",
        ],
      },
      deliverables: {
        title: "Что получаете",
        items: [
          "Структура и прототипы под цели бизнеса",
          "Дизайн в коде и согласование на живых экранах",
          "Разработка, тестирование и запуск",
          "Подключение аналитики и базовое SEO",
        ],
      },
      process: {
        title: "Как работаем",
        steps: [
          {
            title: "Бриф и аудит",
            description: "Фиксируем цели, аудиторию и ключевые сценарии.",
          },
          {
            title: "Дизайн и контент",
            description: "Создаём структуру, тексты и визуальный стиль.",
          },
          {
            title: "Разработка и запуск",
            description: "Собираем сайт, тестируем, подключаем аналитику.",
          },
        ],
      },
      faq: {
        title: "Вопросы и ответы",
        items: [
          {
            question: "Сколько стоит создание сайта?",
            answer: "Цена зависит от объёма, функционала и контента. После брифа даём точную смету.",
          },
          {
            question: "Сколько времени занимает запуск?",
            answer: "Обычно от 7 до 28 дней в зависимости от типа проекта.",
          },
        ],
      },
      cta: {
        title: "Готовы обсудить сайт?",
        description: "Опишите задачу, и мы предложим план и сроки запуска.",
        button: "Обсудить проект",
      },
    },
    {
      slug: "landing-page",
      meta: {
        title: "Создание лендинга в Узбекистане",
        description:
          "Создание лендинга для лидов и продаж: быстрый запуск, понятная структура, высокая конверсия.",
        keywords: ["лендинг", "landing page", "создание лендинга", "Узбекистан"],
      },
      hero: {
        eyebrow: "Лендинг",
        title: "Лендинги, которые конвертируют",
        description:
          "Собираем одностраничные сайты под офферы и рекламные кампании: быстро, понятно и с фокусом на заявку.",
        cta: "Запросить расчёт",
      },
      highlights: {
        title: "Преимущества",
        items: [
          "Чёткая структура под целевое действие",
          "Быстрый запуск и тестирование гипотез",
          "Контент под рекламу и SEO‑запросы",
          "Готовность к аналитике и A/B‑тестам",
        ],
      },
      deliverables: {
        title: "Что входит",
        items: [
          "Прототип и структура блока‑за‑блоком",
          "Дизайн в коде и адаптив под мобильные",
          "Форма заявки и интеграция с CRM/почтой",
          "Подключение аналитики и пикселей",
        ],
      },
      process: {
        title: "Этапы",
        steps: [
          { title: "Бриф", description: "Собираем оффер, УТП и целевую аудиторию." },
          { title: "Структура", description: "Строим путь пользователя и ключевые блоки." },
          { title: "Запуск", description: "Делаем финальный тест и запускаем." },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          { question: "Можно ли запустить за неделю?", answer: "Да, если контент готов и согласования быстрые." },
          { question: "Поможете с текстами?", answer: "Да, подготовим тексты под ваш оффер и аудиторию." },
        ],
      },
      cta: {
        title: "Нужен лендинг?",
        description: "Расскажите об оффере, и мы предложим структуру и сроки.",
        button: "Получить план",
      },
    },
    {
      slug: "corporate-website",
      meta: {
        title: "Корпоративный сайт в Узбекистане",
        description:
          "Корпоративный сайт для доверия и продаж: услуги, кейсы, команда и понятная навигация.",
        keywords: ["корпоративный сайт", "сайт компании", "создание сайта", "Узбекистан"],
      },
      hero: {
        eyebrow: "Корпоративный сайт",
        title: "Сайт компании, которому доверяют",
        description:
          "Создаём корпоративные сайты с понятной структурой, сильным позиционированием и поддержкой продаж.",
        cta: "Запросить консультацию",
      },
      highlights: {
        title: "Что важно для корпоративного сайта",
        items: [
          "Чёткое позиционирование и структура услуг",
          "Кейсы, команда и доверительные блоки",
          "Быстрая загрузка и адаптивность",
          "Готовность к SEO‑продвижению",
        ],
      },
      deliverables: {
        title: "Комплектация",
        items: [
          "Многостраничная структура и прототип",
          "Дизайн‑система и единый стиль",
          "Сборка, тесты, запуск",
          "Подключение аналитики и форм заявок",
        ],
      },
      process: {
        title: "Процесс",
        steps: [
          { title: "Исследование", description: "Анализируем конкурентов и сильные стороны бизнеса." },
          { title: "Структура", description: "Проектируем навигацию и блоки доверия." },
          { title: "Запуск", description: "Тестируем и запускаем сайт с аналитикой." },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          { question: "Сколько страниц нужно?", answer: "Зависит от услуг. Обычно 6–12 ключевых страниц." },
          { question: "Можно добавить блог?", answer: "Да, блог помогает SEO и экспертности." },
        ],
      },
      cta: {
        title: "Нужен корпоративный сайт?",
        description: "Опишите задачи компании — мы соберём структуру и смету.",
        button: "Получить предложение",
      },
    },
    {
      slug: "ecommerce",
      meta: {
        title: "Интернет‑магазин в Узбекистане",
        description:
          "Разработка интернет‑магазина: каталог, фильтры, корзина и интеграции под продажи.",
        keywords: ["интернет-магазин", "ecommerce", "создание магазина", "Узбекистан"],
      },
      hero: {
        eyebrow: "Интернет‑магазин",
        title: "Онлайн‑продажи через современный магазин",
        description:
          "Запускаем e‑commerce с удобным каталогом, фильтрами и оплатой. Фокус — на скорости и конверсии.",
        cta: "Обсудить магазин",
      },
      highlights: {
        title: "Ключевые преимущества",
        items: [
          "Каталог, фильтры, карточки товаров",
          "Интеграции с оплатой и доставкой",
          "SEO‑готовые страницы категорий",
          "Удобная мобильная версия",
        ],
      },
      deliverables: {
        title: "Что входит",
        items: [
          "Проектирование структуры каталога",
          "UX‑дизайн и сценарии покупки",
          "Разработка и тестирование",
          "Интеграции и аналитика",
        ],
      },
      process: {
        title: "Этапы",
        steps: [
          { title: "Аналитика", description: "Определяем ассортимент и ключевые категории." },
          { title: "UX и дизайн", description: "Строим удобный путь от каталога до покупки." },
          { title: "Запуск", description: "Подключаем оплату, доставку, аналитику." },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          { question: "Можно ли интегрировать CRM?", answer: "Да, подключим вашу CRM или предложим вариант." },
          { question: "Сколько товаров можно загрузить?", answer: "Количество не ограничено, зависит от выбранной админки." },
        ],
      },
      cta: {
        title: "Готовы запускать продажи?",
        description: "Расскажите о товарах и логистике — составим план разработки.",
        button: "Запустить магазин",
      },
    },
    {
      slug: "seo",
      meta: {
        title: "SEO‑продвижение в Узбекистане",
        description:
          "SEO‑продвижение сайта в Узбекистане: техническая оптимизация, контент и рост органического трафика.",
        keywords: ["SEO", "SEO продвижение", "оптимизация сайта", "Узбекистан"],
      },
      hero: {
        eyebrow: "SEO‑продвижение",
        title: "Рост органического трафика",
        description:
          "Настраиваем SEO на уровне технической базы, структуры и контента. Фокус на запросы, которые приводят клиентов.",
        cta: "Заказать аудит",
      },
      highlights: {
        title: "Что даёт SEO",
        items: [
          "Рост видимости по целевым запросам",
          "Улучшение скорости и качества сайта",
          "Долгосрочный эффект без зависимости от рекламы",
          "Контент‑план под реальные запросы рынка",
        ],
      },
      deliverables: {
        title: "Что мы делаем",
        items: [
          "Технический аудит и исправления",
          "Семантическое ядро и структура",
          "Оптимизация мета‑данных и контента",
          "Отчёты по росту и позициям",
        ],
      },
      process: {
        title: "Как строим продвижение",
        steps: [
          { title: "Аудит", description: "Выявляем технические и контентные узкие места." },
          { title: "Семантика", description: "Собираем ключевые запросы и группируем по страницам." },
          { title: "Контент", description: "Создаём и оптимизируем тексты и сниппеты." },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          { question: "Когда появится результат?", answer: "Первые улучшения обычно заметны через 2–3 месяца." },
          { question: "Нужен ли новый сайт?", answer: "Не всегда, но технически слабый сайт тормозит рост." },
        ],
      },
      cta: {
        title: "Готовы улучшить SEO?",
        description: "Проведём аудит и предложим приоритетный план работ.",
        button: "Получить аудит",
      },
    },
  ],
  uz: [
    {
      slug: "website-development",
      meta: {
        title: "O'zbekistonda sayt yaratish",
        description:
          "O'zbekistonda sayt yaratish: strategiya, dizayn va ishlab chiqish orqali arizalar va savdoni oshirish.",
        keywords: ["sayt yaratish", "sayt ishlab chiqish", "O'zbekiston", "web studiya"],
      },
      hero: {
        eyebrow: "Sayt yaratish",
        title: "Tayyor saytlar ishlab chiqish",
        description:
          "Strategiya, dizayn va ishlab chiqishni to'liq bajarib, sotuvga ishlaydigan sayt yaratamiz.",
        cta: "Maslahat olish",
      },
      highlights: {
        title: "Nega bizni tanlashadi",
        items: [
          "Asosiy fokus — ariza va konversiya",
          "Zamonaviy stekda tez ishlab chiqish",
          "Moslashuvchan va tez yuklanadigan sayt",
          "SEO uchun tayyor texnik baza",
        ],
      },
      deliverables: {
        title: "Nima olasiz",
        items: [
          "Biznes maqsadlariga mos struktura",
          "Kodda dizayn va real ekranlarda ko'rish",
          "Ishlab chiqish, test va ishga tushirish",
          "Analitika va basic SEO",
        ],
      },
      process: {
        title: "Qanday ishlaymiz",
        steps: [
          { title: "Brif", description: "Maqsad va auditoriyani aniqlaymiz." },
          { title: "Dizayn", description: "Kontent va vizual uslubni shakllantiramiz." },
          { title: "Ishga tushirish", description: "Saytni yig'amiz va analitikani ulaymiz." },
        ],
      },
      faq: {
        title: "Savol-javob",
        items: [
          { question: "Narx qanday hisoblanadi?", answer: "Vazifa va hajmga qarab. Brifdan so'ng smeta beramiz." },
          { question: "Muddat qancha?", answer: "Odatda 7–28 kun." },
        ],
      },
      cta: {
        title: "Sayt kerakmi?",
        description: "Vazifani yozing — yechim va muddatni taklif qilamiz.",
        button: "Loyihani muhokama qilish",
      },
    },
    {
      slug: "landing-page",
      meta: {
        title: "Landing page yaratish",
        description:
          "Lid va savdoga yo'naltirilgan landing page: tez ishga tushirish va yuqori konversiya.",
        keywords: ["landing", "landing page", "landing yaratish", "O'zbekiston"],
      },
      hero: {
        eyebrow: "Landing",
        title: "Konversiyali landinglar",
        description:
          "Reklama kampaniyalari uchun tez va samarali landinglar yaratamiz.",
        cta: "Hisob-kitob so'rash",
      },
      highlights: {
        title: "Afzalliklar",
        items: [
          "Aniq tuzilma va bitta maqsad",
          "Tez ishga tushirish va test",
          "Reklama va SEO uchun mos kontent",
          "Analitika va A/B testga tayyor",
        ],
      },
      deliverables: {
        title: "Nimalar kiradi",
        items: [
          "Blokma‑blok prototip",
          "Mobilga mos dizayn",
          "Ariza formasi va integratsiya",
          "Analitika va piksel ulash",
        ],
      },
      process: {
        title: "Bosqichlar",
        steps: [
          { title: "Brif", description: "OFFER va auditoriyani aniqlaymiz." },
          { title: "Struktura", description: "Mijoz yo'lini quramiz." },
          { title: "Ishga tushirish", description: "Test va ishga tushirish." },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          { question: "1 haftada mumkinmi?", answer: "Kontent tayyor bo'lsa — ha." },
          { question: "Matnlarni yozasizmi?", answer: "Ha, offerga mos copywriting qilamiz." },
        ],
      },
      cta: {
        title: "Landing kerakmi?",
        description: "OFFER haqida yozing — tuzilma va muddatni yuboramiz.",
        button: "Reja olish",
      },
    },
    {
      slug: "corporate-website",
      meta: {
        title: "Korporativ sayt",
        description:
          "Korporativ sayt: xizmatlar, keyslar va ishonchni ko'rsatadigan tuzilma.",
        keywords: ["korporativ sayt", "kompaniya sayti", "O'zbekiston"],
      },
      hero: {
        eyebrow: "Korporativ sayt",
        title: "Ishonch uyg'otadigan sayt",
        description:
          "Kompaniyangizni kuchli ko'rsatadigan va sotuvga xizmat qiladigan korporativ sayt.",
        cta: "Maslahat olish",
      },
      highlights: {
        title: "Muhim jihatlar",
        items: [
          "Aniq pozitsiya va xizmatlar",
          "Keyslar va jamoa",
          "Tez yuklanish va mobil versiya",
          "SEOga tayyor struktura",
        ],
      },
      deliverables: {
        title: "Komplektatsiya",
        items: [
          "Ko'p sahifali tuzilma",
          "Yagona dizayn tizimi",
          "Ishlab chiqish va test",
          "Analitika va ariza formasi",
        ],
      },
      process: {
        title: "Jarayon",
        steps: [
          { title: "Tadqiqot", description: "Raqobatchi va kuchli tomonlarni tahlil qilamiz." },
          { title: "Struktura", description: "Navigatsiya va ishonch bloklarini quramiz." },
          { title: "Ishga tushirish", description: "Test va analitika bilan ishga tushiramiz." },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          { question: "Necha sahifa kerak?", answer: "Odatda 6–12 asosiy sahifa." },
          { question: "Blog qo'shsa bo'ladimi?", answer: "Ha, SEO uchun foydali." },
        ],
      },
      cta: {
        title: "Korporativ sayt kerakmi?",
        description: "Maqsadlarni yozing — tuzilma va smeta yuboramiz.",
        button: "Taklif olish",
      },
    },
    {
      slug: "ecommerce",
      meta: {
        title: "Internet-do'kon yaratish",
        description:
          "Internet-do'kon: katalog, filtrlar, savat va to'lov integratsiyalari.",
        keywords: ["internet do'kon", "ecommerce", "do'kon yaratish", "O'zbekiston"],
      },
      hero: {
        eyebrow: "Internet-do'kon",
        title: "Onlayn savdolar uchun platforma",
        description:
          "Katalog, filtr va to'lovlar bilan to'liq e‑commerce yechimlarini ishga tushiramiz.",
        cta: "Do'konni muhokama qilish",
      },
      highlights: {
        title: "Afzalliklar",
        items: [
          "Katalog va filtrlar",
          "To'lov va yetkazib berish integratsiyasi",
          "SEO‑tayyor kategoriya sahifalari",
          "Mobilga mos",
        ],
      },
      deliverables: {
        title: "Nima kiradi",
        items: [
          "Katalog arxitekturasi",
          "UX va dizayn",
          "Ishlab chiqish va test",
          "Integratsiyalar va analitika",
        ],
      },
      process: {
        title: "Bosqichlar",
        steps: [
          { title: "Analitika", description: "Assortiment va kategoriyalarni belgilaymiz." },
          { title: "UX", description: "Sotib olish yo'lini soddalashtiramiz." },
          { title: "Ishga tushirish", description: "To'lov, yetkazish va analitikani ulaymiz." },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          { question: "CRM ulash mumkinmi?", answer: "Ha, mavjud tizimingizga ulaymiz." },
          { question: "Tovarlar limiti bormi?", answer: "Yo'q, admin panel imkoniyatiga bog'liq." },
        ],
      },
      cta: {
        title: "Savdoni boshlaymizmi?",
        description: "Mahsulotlar va logistika haqida yozing.",
        button: "Do'konni ishga tushirish",
      },
    },
    {
      slug: "seo",
      meta: {
        title: "SEO продвижение",
        description:
          "SEO: texnik optimizatsiya, kontent va organik trafik o'sishi.",
        keywords: ["SEO", "SEO продвижение", "sayt optimizatsiyasi", "O'zbekiston"],
      },
      hero: {
        eyebrow: "SEO",
        title: "Organik trafikni oshirish",
        description:
          "Sayt texnikasi, struktura va kontent orqali qidiruvda ko'rinishni kuchaytiramiz.",
        cta: "Audit buyurtma qilish",
      },
      highlights: {
        title: "SEO nimani beradi",
        items: [
          "Maqsadli so'rovlar bo'yicha ko'rinish",
          "Sayt sifatini oshirish",
          "Reklamasiz barqaror trafik",
          "Bozor so'rovlariga mos kontent",
        ],
      },
      deliverables: {
        title: "Nima qilamiz",
        items: [
          "Texnik audit va tuzatishlar",
          "Semantika va sahifa struktura",
          "Meta va kontent optimizatsiyasi",
          "O'sish bo'yicha hisobotlar",
        ],
      },
      process: {
        title: "Jarayon",
        steps: [
          { title: "Audit", description: "Texnik va kontent muammolarini topamiz." },
          { title: "Semantika", description: "So'rovlarni yig'ib, guruhlaymiz." },
          { title: "Kontent", description: "Matn va snippetlarni optimizatsiya qilamiz." },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          { question: "Natija qachon?", answer: "Odatda 2–3 oyda dastlabki o'sish ko'rinadi." },
          { question: "Yangi sayt kerakmi?", answer: "Har doim emas, ammo texnik baza muhim." },
        ],
      },
      cta: {
        title: "SEOni yaxshilaymizmi?",
        description: "Audit qilamiz va ustuvor rejani beramiz.",
        button: "Audit olish",
      },
    },
  ],
  en: [
    {
      slug: "website-development",
      meta: {
        title: "Website development in Uzbekistan",
        description:
          "Website development in Uzbekistan: strategy, design, and engineering focused on qualified leads.",
        keywords: ["website development", "web design", "Uzbekistan", "digital agency"],
      },
      hero: {
        eyebrow: "Website development",
        title: "Full‑cycle website creation",
        description:
          "We design, build, and launch websites that strengthen your brand and drive enquiries.",
        cta: "Get a consultation",
      },
      highlights: {
        title: "Why clients choose us",
        items: [
          "Conversion‑first structure and content",
          "Modern, fast, and secure stack",
          "Mobile‑first and performance‑ready",
          "SEO‑friendly foundation from day one",
        ],
      },
      deliverables: {
        title: "Deliverables",
        items: [
          "Site structure and user journeys",
          "Design in code with live reviews",
          "Development, QA, and launch",
          "Analytics and basic SEO setup",
        ],
      },
      process: {
        title: "Process",
        steps: [
          { title: "Discovery", description: "We define goals, audience, and priorities." },
          { title: "Design", description: "We craft the visual system and content." },
          { title: "Launch", description: "We build, test, and connect analytics." },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          { question: "How much does a website cost?", answer: "Depends on scope and features. We estimate after the brief." },
          { question: "How long does it take?", answer: "Typically 7–28 days depending on project type." },
        ],
      },
      cta: {
        title: "Ready to discuss your website?",
        description: "Tell us about your goals and we will propose a plan.",
        button: "Discuss a project",
      },
    },
    {
      slug: "landing-page",
      meta: {
        title: "Landing page development",
        description: "Landing pages built for conversion, speed, and advertising campaigns.",
        keywords: ["landing page", "conversion", "web design", "Uzbekistan"],
      },
      hero: {
        eyebrow: "Landing page",
        title: "Landing pages that convert",
        description: "Launch fast and validate offers with a focused, high‑performing landing page.",
        cta: "Request an estimate",
      },
      highlights: {
        title: "Benefits",
        items: [
          "Clear single‑goal structure",
          "Fast launch for testing",
          "Ad‑ready content blocks",
          "Analytics and A/B testing ready",
        ],
      },
      deliverables: {
        title: "What is included",
        items: [
          "Wireframe and content structure",
          "Responsive design",
          "Lead form integrations",
          "Analytics setup",
        ],
      },
      process: {
        title: "Stages",
        steps: [
          { title: "Brief", description: "We capture your offer and audience." },
          { title: "Structure", description: "We design the customer flow." },
          { title: "Launch", description: "We test and deploy." },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          { question: "Can it be done in a week?", answer: "Yes, if the content is ready." },
          { question: "Do you write copy?", answer: "Yes, we help with conversion‑focused copy." },
        ],
      },
      cta: {
        title: "Need a landing page?",
        description: "Share the offer and we will propose structure and timing.",
        button: "Get a plan",
      },
    },
    {
      slug: "corporate-website",
      meta: {
        title: "Corporate website development",
        description: "Corporate websites that build trust and support sales with clear structure.",
        keywords: ["corporate website", "company site", "website development"],
      },
      hero: {
        eyebrow: "Corporate website",
        title: "A website your company can rely on",
        description: "We create corporate websites with strong positioning and sales support blocks.",
        cta: "Schedule a consultation",
      },
      highlights: {
        title: "Key elements",
        items: [
          "Clear positioning and services",
          "Case studies and team blocks",
          "Performance and mobile readiness",
          "SEO‑ready structure",
        ],
      },
      deliverables: {
        title: "Package",
        items: [
          "Multi‑page structure",
          "Design system",
          "Development and QA",
          "Analytics and lead forms",
        ],
      },
      process: {
        title: "Workflow",
        steps: [
          { title: "Research", description: "We analyze competitors and positioning." },
          { title: "Structure", description: "We design navigation and trust blocks." },
          { title: "Launch", description: "We test and deploy with analytics." },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          { question: "How many pages are needed?", answer: "Usually 6–12 core pages." },
          { question: "Can we add a blog?", answer: "Yes, it helps SEO and authority." },
        ],
      },
      cta: {
        title: "Need a corporate website?",
        description: "Share your goals and we will outline the structure and budget.",
        button: "Get a proposal",
      },
    },
    {
      slug: "ecommerce",
      meta: {
        title: "Ecommerce website development",
        description: "Ecommerce websites with catalogs, filters, checkout, and integrations.",
        keywords: ["ecommerce", "online store", "shop development", "Uzbekistan"],
      },
      hero: {
        eyebrow: "Ecommerce",
        title: "Online stores built for sales",
        description: "Launch a store with a clean catalog, filters, and payments. Optimized for conversion.",
        cta: "Discuss an ecommerce project",
      },
      highlights: {
        title: "Highlights",
        items: [
          "Catalog and filters",
          "Payment and delivery integrations",
          "SEO‑ready category pages",
          "Mobile‑first UX",
        ],
      },
      deliverables: {
        title: "Included",
        items: [
          "Catalog architecture",
          "UX design for purchase flow",
          "Development and QA",
          "Integrations and analytics",
        ],
      },
      process: {
        title: "Steps",
        steps: [
          { title: "Analysis", description: "We define categories and product logic." },
          { title: "UX", description: "We simplify the purchase journey." },
          { title: "Launch", description: "We connect payments and analytics." },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          { question: "Can you integrate CRM?", answer: "Yes, we connect your CRM or suggest one." },
          { question: "Any limit on products?", answer: "No hard limit. Depends on the admin setup." },
        ],
      },
      cta: {
        title: "Ready to sell online?",
        description: "Tell us about your products and logistics.",
        button: "Start an online store",
      },
    },
    {
      slug: "seo",
      meta: {
        title: "SEO services in Uzbekistan",
        description: "SEO services: technical optimization, content, and sustainable organic growth.",
        keywords: ["SEO", "SEO services", "search optimization", "Uzbekistan"],
      },
      hero: {
        eyebrow: "SEO",
        title: "Sustainable organic growth",
        description: "We build SEO through technical fixes, structure, and content aligned with real demand.",
        cta: "Request an audit",
      },
      highlights: {
        title: "What SEO delivers",
        items: [
          "Better visibility for target queries",
          "Faster, cleaner website experience",
          "Long‑term traffic without ad dependence",
          "Content plan built on demand",
        ],
      },
      deliverables: {
        title: "What we do",
        items: [
          "Technical audit and fixes",
          "Keyword research and structure",
          "Meta and on‑page optimization",
          "Performance reporting",
        ],
      },
      process: {
        title: "How we work",
        steps: [
          { title: "Audit", description: "We detect technical and content issues." },
          { title: "Semantics", description: "We cluster queries by pages." },
          { title: "Content", description: "We optimize text and snippets." },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          { question: "When will results appear?", answer: "Usually 2–3 months for the first growth signals." },
          { question: "Do we need a new site?", answer: "Not always, but weak tech foundations slow progress." },
        ],
      },
      cta: {
        title: "Ready to improve SEO?",
        description: "We will run an audit and suggest priorities.",
        button: "Get an audit",
      },
    },
  ],
};

export const getServicePages = (locale: Locale): ServicePage[] =>
  servicePagesByLocale[locale];

export const getServicePage = (locale: Locale, slug: ServiceSlug): ServicePage | undefined =>
  servicePagesByLocale[locale].find((page) => page.slug === slug);

export const getServicePricing = (locale: Locale, slug: ServiceSlug): ServicePricing =>
  pricingByLocale[locale][slug];

const servicesIndexByLocale: Record<Locale, ServicesIndexContent> = {
  ru: {
    meta: {
      title: "Услуги по созданию сайтов в Узбекистане",
      description:
        "Услуги по созданию сайтов, лендингов, интернет-магазинов и SEO в Узбекистане.",
      keywords: ["услуги", "создание сайтов", "лендинги", "SEO", "Узбекистан"],
    },
    hero: {
      eyebrow: "Услуги",
      title: "Услуги по созданию сайтов",
      description:
        "Выберите направление: от лендингов и корпоративных сайтов до интернет‑магазинов и SEO‑продвижения.",
    },
  },
  uz: {
    meta: {
      title: "Sayt yaratish xizmatlari",
      description:
        "O'zbekistonda sayt yaratish, landing, internet-do'kon va SEO xizmatlari.",
      keywords: ["xizmatlar", "sayt yaratish", "landing", "SEO", "O'zbekiston"],
    },
    hero: {
      eyebrow: "Xizmatlar",
      title: "Sayt yaratish xizmatlari",
      description:
        "Landinglardan korporativ sayt va internet‑do'konlargacha — o'zingizga mos xizmatni tanlang.",
    },
  },
  en: {
    meta: {
      title: "Website services in Uzbekistan",
      description:
        "Website services in Uzbekistan: landing pages, corporate sites, ecommerce, and SEO.",
      keywords: ["services", "website development", "landing page", "SEO", "Uzbekistan"],
    },
    hero: {
      eyebrow: "Services",
      title: "Website services",
      description:
        "Choose the right service: landing pages, corporate websites, ecommerce, and SEO.",
    },
  },
};

export const getServicesIndexContent = (locale: Locale): ServicesIndexContent =>
  servicesIndexByLocale[locale];
