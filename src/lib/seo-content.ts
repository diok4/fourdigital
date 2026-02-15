import type { Locale } from "@/lib/i18n";

export const seoLocales = ["ru", "uz"] as const;
export type SeoLocale = (typeof seoLocales)[number];

export type PageLink = {
  href: string;
  label: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ContentSection = {
  title: string;
  paragraphs: string[];
};

export type CtaItem = {
  label: string;
  href: string;
};

export type MarketingPage = {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  intent: string;
  serviceType: string;
  outline: string[];
  lsi: string[];
  sections: ContentSection[];
  faq: FaqItem[];
  ctas: CtaItem[];
  internalLinks: PageLink[];
};

export type ComparisonPage = {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  intent: string;
  sections: ContentSection[];
  faq: FaqItem[];
  ctas: CtaItem[];
  internalLinks: PageLink[];
};

export type RegionPage = {
  city: string;
  cityLabel: string;
  slug: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  sections: ContentSection[];
  faq: FaqItem[];
  ctas: CtaItem[];
  internalLinks: PageLink[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  industry: string;
  intro: string;
  challenge: string;
  solution: string[];
  result: string[];
  ctas: CtaItem[];
};

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  intent: string;
  format: string;
  goal: string;
  keywords: string[];
  promotedPages: PageLink[];
  intro: string;
  sections: ContentSection[];
  faq: FaqItem[];
};

const ruLinks = {
  web: "/ru/sozdanie-saitov-tashkent",
  landing: "/ru/lending-pod-klyuch-tashkent",
  corp: "/ru/korporativny-sait-uzbekistan",
  seo: "/ru/seo-prodvizhenie-tashkent",
  ads: "/ru/kontekstnaya-reklama-google-ads",
  med: "/ru/sait-dlya-meditsiny",
  b2b: "/ru/sait-dlya-b2b-kompanii",
  ecommerce: "/ru/sait-dlya-ecommerce",
  service: "/ru/sait-dlya-servisnogo-biznesa",
  cmpLanding: "/ru/sravnenie/lending-vs-sait",
  cmpSeoAds: "/ru/sravnenie/seo-vs-google-ads",
  contacts: "/ru/contacts",
};

const uzLinks = {
  web: "/uz/sozdanie-saitov-tashkent",
  landing: "/uz/lending-pod-klyuch-tashkent",
  corp: "/uz/korporativny-sait-uzbekistan",
  seo: "/uz/seo-prodvizhenie-tashkent",
  ads: "/uz/kontekstnaya-reklama-google-ads",
  med: "/uz/sait-dlya-meditsiny",
  b2b: "/uz/sait-dlya-b2b-kompanii",
  ecommerce: "/uz/sait-dlya-ecommerce",
  service: "/uz/sait-dlya-servisnogo-biznesa",
  cmpLanding: "/uz/sravnenie/lending-vs-sait",
  cmpSeoAds: "/uz/sravnenie/seo-vs-google-ads",
  contacts: "/uz/contacts",
};

const marketingPagesByLocale: Record<SeoLocale, MarketingPage[]> = {
  ru: [
    {
      slug: "sozdanie-saitov-tashkent",
      seoTitle: "Создание сайтов в Ташкенте под ключ | Fourdigital",
      metaDescription:
        "Создание сайтов под ключ в Ташкенте: стратегия, UX, разработка, SEO-база и аналитика. Сроки от 7 дней.",
      h1: "Создание сайтов в Ташкенте под ключ",
      lead:
        "Разрабатываем сайты как канал продаж: от структуры и контента до запуска, аналитики и роста заявок.",
      intent: "high commercial",
      serviceType: "WebsiteDevelopment",
      outline: [
        "Какие задачи решает сайт в 2026 году",
        "Что входит в разработку под ключ",
        "Сроки, этапы и KPI проекта",
        "Сколько стоит создание сайта",
        "Как мы связываем сайт с лидами и продажами",
      ],
      lsi: [
        "веб-студия Ташкент",
        "разработка сайта для бизнеса",
        "сайт под ключ Узбекистан",
        "конверсия сайта",
        "crm интеграция",
        "техническое seo",
        "сайт для лидов",
      ],
      sections: [
        {
          title: "Сайт как система продаж, а не просто дизайн",
          paragraphs: [
            "В большинстве проектов проблема начинается не с дизайна, а с постановки задачи. Компания хочет \"современный сайт\", но не фиксирует, какой тип лида нужен, как клиент принимает решение и что мешает конверсии сейчас. Мы начинаем с этого уровня, потому что без него даже качественная разработка не даёт предсказуемого результата.",
            "На старте фиксируем бизнес-цель страницы: заявка, звонок, запись на встречу, запрос КП или заказ. Затем формируем карту сценариев: как пользователь заходит на сайт, что видит на первом экране, где получает подтверждение компетенции и на каком блоке оставляет контакт. Такой подход сокращает потери в воронке и повышает долю целевых обращений.",
            "Отдельно прорабатываем структуру под SEO и рекламу. Коммерческие страницы строим под high-intent запросы, информационные блоки под возражения, а навигацию — под глубину просмотра и повторные визиты. В результате сайт начинает работать и как конверсионный инструмент, и как долгосрочный актив для органики.",
          ],
        },
        {
          title: "Что входит в разработку под ключ",
          paragraphs: [
            "Работа идёт по этапам: бриф и аудит, прототип и контент-модель, дизайн-система, frontend-разработка, интеграции, аналитика, запуск. На каждом этапе есть измеримый результат и точка согласования, чтобы проект не зависал на абстрактных обсуждениях.",
            "Мы внедряем базовую SEO-инфраструктуру уже в процессе сборки: корректные мета-теги, структура заголовков, canonical, hreflang для RU/UZ, schema-разметка, чистые URL и внутренние связи между коммерческими и информационными страницами. Это позволяет быстрее выйти в индекс и не переплачивать за переделки после релиза.",
            "Технически проект готовится под мобильный трафик: приоритет Core Web Vitals, аккуратная загрузка ассетов, оптимизация изображений, минимизация лишнего JavaScript и логика форм, удобная для смартфонов. Для рынка Ташкента это критично, так как значительная доля первичных касаний приходит с мобильных устройств.",
          ],
        },
        {
          title: "Сроки, стоимость и прозрачность",
          paragraphs: [
            "Типовые сроки: лендинг 7–14 дней, корпоративный сайт 14–28 дней, eCommerce и сложные интеграции — индивидуально по карте работ. Важный момент: мы показываем не только дедлайн релиза, но и промежуточные даты, чтобы вы видели динамику и могли планировать маркетинг заранее.",
            "Стоимость зависит от объёма страниц, глубины контента, интеграций и требований по автоматизации. После брифа вы получаете структурированную смету с пояснениями, а не размытый диапазон. Это уменьшает риск дополнительных расходов и делает бюджет управляемым.",
            "После запуска передаём план роста на 30–90 дней: какие страницы усиливать, какие связки SEO/Ads запускать, какие конверсионные гипотезы тестировать в первую очередь. В итоге сайт не \"сдается\" как файл, а вводится в эксплуатацию как канал заявок.",
          ],
        },
      ],
      faq: [
        {
          question: "Сколько стоит создание сайта под ключ?",
          answer:
            "После брифа даём точную смету. Цена зависит от количества страниц, интеграций, объёма контента и целевых сценариев.",
        },
        {
          question: "За сколько можно запустить проект?",
          answer:
            "Лендинг обычно запускается за 7–14 дней, корпоративный сайт — за 14–28 дней при оперативном согласовании.",
        },
        {
          question: "Вы помогаете с текстами и структурой?",
          answer:
            "Да. Мы формируем контент-модель и тексты под коммерческий интент и реальные возражения клиентов.",
        },
        {
          question: "Подключаете CRM и аналитику?",
          answer:
            "Да, подключаем формы, события, цели и передачу лидов в CRM, чтобы маркетинг был измеряемым.",
        },
        {
          question: "Что происходит после запуска?",
          answer:
            "Фиксируем технический контроль, базовую поддержку и roadmap улучшений на 30–90 дней.",
        },
      ],
      ctas: [
        { label: "Получить смету за 24 часа", href: "#contact" },
        { label: "Запросить аудит текущего сайта", href: ruLinks.seo },
      ],
      internalLinks: [
        { href: ruLinks.landing, label: "Лендинг под ключ" },
        { href: ruLinks.corp, label: "Корпоративный сайт" },
        { href: ruLinks.seo, label: "SEO-продвижение" },
        { href: ruLinks.cmpLanding, label: "Лендинг vs сайт" },
      ],
    },
    {
      slug: "lending-pod-klyuch-tashkent",
      seoTitle: "Лендинг под ключ в Ташкенте: цена и сроки | Fourdigital",
      metaDescription:
        "Конверсионные лендинги под рекламу и лиды: оффер, структура, тексты, дизайн, запуск и аналитика. От 7 дней.",
      h1: "Лендинг под ключ в Ташкенте",
      lead:
        "Собираем одностраничные сайты, которые быстро запускаются, тестируют оффер и дают прогнозируемый поток заявок.",
      intent: "high commercial",
      serviceType: "LandingPageDevelopment",
      outline: [
        "Когда лендинг работает лучше многостраничного сайта",
        "Из чего состоит конверсионная структура",
        "Как связываем лендинг с Google Ads",
        "Какие метрики отслеживаем после запуска",
      ],
      lsi: [
        "landing page Ташкент",
        "одностраничный сайт",
        "конверсионный лендинг",
        "оффер и лид-форма",
        "A/B тест",
        "реклама google ads",
      ],
      sections: [
        {
          title: "Лендинг нужен, когда важна скорость и фокус",
          paragraphs: [
            "Лендинг эффективен в сценариях, где нужно быстро проверить спрос, запустить акцию или собрать заявки на одну конкретную услугу. Его сила в фокусе: один оффер, один ключевой сценарий, минимум лишних отвлечений.",
            "Мы проектируем лендинг не как баннер, а как пошаговый диалог с клиентом. Сначала фиксируем боль и цель пользователя, затем показываем решение, подтверждаем компетенцию кейсами и закрываем возражения FAQ-блоком. Только после этого усиливаем CTA и форму.",
            "Такой порядок повышает качество конверсии: вы получаете меньше случайных заявок и больше запросов от клиентов, готовых обсуждать проект и бюджет.",
          ],
        },
        {
          title: "Что входит в конверсионный лендинг",
          paragraphs: [
            "Базовый набор: оффер, блок ценности, социальное доказательство, сценарий процесса, ответы на возражения и короткая форма. Для рекламы добавляем релевантность между ключевым запросом, объявлением и первым экраном лендинга.",
            "На этапе разработки внедряем аналитику событий: скролл, клики по CTA, отправка формы, звонки, переходы в мессенджеры. Это позволяет видеть, где теряется пользователь, и быстро корректировать контент или структуру.",
            "После запуска рекомендуем итерации по гипотезам: заголовок, оффер, длина формы, последовательность блоков, микро-доказательства. Даже 2–3 цикла оптимизации обычно заметно снижают CPL.",
          ],
        },
      ],
      faq: [
        {
          question: "Можно запустить лендинг за неделю?",
          answer:
            "Да, если контент и согласования идут без задержек. Для срочных запусков делаем MVP и затем дорабатываем.",
        },
        {
          question: "Делаете тексты под рекламу?",
          answer:
            "Да, пишем тексты под коммерческий интент и связку с рекламными объявлениями.",
        },
        {
          question: "Подключаете CRM?",
          answer:
            "Да, подключаем формы и передачу лидов в вашу CRM или на email/телеграм.",
        },
        {
          question: "Нужен ли отдельный лендинг под каждую услугу?",
          answer:
            "В большинстве случаев да: это повышает релевантность и конверсию рекламного трафика.",
        },
        {
          question: "Как понять, что лендинг работает?",
          answer:
            "Смотрим CPL, CR, качество лидов и поведение пользователей по этапам воронки.",
        },
      ],
      ctas: [
        { label: "Получить структуру лендинга", href: "#contact" },
        { label: "Запустить Google Ads", href: ruLinks.ads },
      ],
      internalLinks: [
        { href: ruLinks.ads, label: "Контекстная реклама Google Ads" },
        { href: ruLinks.seo, label: "SEO для долгосрочного роста" },
        { href: ruLinks.cmpLanding, label: "Сравнение: лендинг или сайт" },
      ],
    },
    {
      slug: "korporativny-sait-uzbekistan",
      seoTitle: "Корпоративный сайт в Узбекистане | Fourdigital",
      metaDescription:
        "Корпоративный сайт для роста доверия и лидов: структура 6–12 страниц, кейсы, SEO-ready архитектура, аналитика.",
      h1: "Корпоративный сайт для бизнеса в Узбекистане",
      lead:
        "Создаём корпоративные сайты, которые помогают продавать услуги, укреплять бренд и ускорять сделки в B2B/B2C.",
      intent: "high commercial",
      serviceType: "CorporateWebsiteDevelopment",
      outline: [
        "Какая структура нужна корпоративному сайту",
        "Как строится доверие и экспертность",
        "Как сайт помогает отделу продаж",
      ],
      lsi: [
        "сайт компании",
        "многостраничный сайт",
        "структура услуг",
        "кейсы и отзывы",
        "воронка заявок",
      ],
      sections: [
        {
          title: "Корпоративный сайт должен помогать в продаже, а не только в имидже",
          paragraphs: [
            "В корпоративном сегменте решение принимается дольше, чем в импульсных покупках. Поэтому сайт должен сопровождать клиента на всех этапах: первое знакомство, оценка компетенции, сравнение подрядчиков и финальное обращение.",
            "Мы проектируем архитектуру так, чтобы каждая страница отвечала на конкретный запрос: что вы делаете, для кого, с каким результатом, за какой срок и в каком формате сотрудничества. Это сокращает циклы переговоров и уменьшает количество \"нецелевых\" лидов.",
            "Обязательный набор блоков: услуги, кейсы, процесс, команда, FAQ, контакты, материалы для прогрева (статьи/сравнения). Такая структура работает одновременно на SEO, доверие и конверсию.",
          ],
        },
        {
          title: "Как мы упаковываем экспертизу в контент",
          paragraphs: [
            "Вместо общих формулировок используем доказательства: проектная логика, ограничения, решения, результат в цифрах и периодах. Это формирует более высокий уровень доверия, чем абстрактные обещания \"лучшего качества\".",
            "Для каждой услуги формируем отдельную коммерческую посадочную страницу с CTA, FAQ и внутренними ссылками. В итоге поисковые системы понимают тематическую глубину, а пользователь быстрее находит нужный сценарий взаимодействия.",
          ],
        },
      ],
      faq: [
        {
          question: "Сколько страниц нужно корпоративному сайту?",
          answer:
            "Для старта обычно достаточно 6–12 приоритетных страниц: главная, услуги, кейсы, о компании, контакты, FAQ/блог.",
        },
        {
          question: "Можно ли масштабировать сайт после запуска?",
          answer:
            "Да, архитектура сразу проектируется под рост и добавление новых кластерных страниц.",
        },
        {
          question: "Нужен ли блог корпоративному сайту?",
          answer:
            "Да, блог усиливает экспертность и помогает собирать информационный спрос в верхней воронке.",
        },
        {
          question: "Вы делаете миграцию со старого сайта?",
          answer:
            "Да, переносим структуру и контент с учётом SEO-рисков и карты редиректов.",
        },
        {
          question: "Можно интегрировать CRM и аналитику продаж?",
          answer:
            "Да, подключаем CRM и настраиваем события, чтобы видеть путь от визита до лида.",
        },
      ],
      ctas: [
        { label: "Получить структуру корпоративного сайта", href: "#contact" },
        { label: "Посмотреть SEO-услугу", href: ruLinks.seo },
      ],
      internalLinks: [
        { href: ruLinks.b2b, label: "Сайт для B2B-компании" },
        { href: ruLinks.web, label: "Создание сайтов под ключ" },
        { href: ruLinks.cmpSeoAds, label: "SEO vs Google Ads" },
      ],
    },
    {
      slug: "seo-prodvizhenie-tashkent",
      seoTitle: "SEO продвижение в Ташкенте | Fourdigital",
      metaDescription:
        "SEO под лиды: технический аудит, семантика, контент и структура. План роста на 90 дней для рынка Узбекистана.",
      h1: "SEO-продвижение в Ташкенте",
      lead:
        "Строим SEO как управляемую систему роста заявок: техбаза, коммерческие страницы, контент и аналитика результата.",
      intent: "high commercial",
      serviceType: "SEOService",
      outline: [
        "Из чего состоит SEO-рост в 2026",
        "Пошаговый план на 90 дней",
        "Какие KPI реально измерять",
      ],
      lsi: [
        "seo услуги ташкент",
        "технический seo аудит",
        "семантическое ядро",
        "контентный план",
        "локальное seo",
      ],
      sections: [
        {
          title: "SEO начинается не с текста, а с архитектуры",
          paragraphs: [
            "Если на сайте нет страниц под коммерческие кластеры, поисковый спрос не конвертируется в лиды. Поэтому первый шаг — разобрать структуру URL, соответствие интентам и приоритет коммерческих страниц в индексации.",
            "Мы анализируем, какие запросы уже можно закрыть текущими страницами, какие требуют переработки и какие нужно создать с нуля. На этом этапе формируется карта \"кластер → URL → CTA → KPI\", которая становится основой всех последующих работ.",
            "Параллельно закрываем технические ограничения: индексация, canonical, hreflang, скорость, schema, внутренние ссылки, дублирующие шаблоны. Это критично для стабильного роста, особенно в конкурентных нишах Ташкента.",
          ],
        },
        {
          title: "План SEO на 90 дней",
          paragraphs: [
            "Этап 1 (0–30 дней): аудит, приоритизация критических ошибок, базовые правки мета и структуры, запуск money-pages. Этап 2 (30–60 дней): кластеризация семантики, контент под коммерческие и comparison-интенты, расширение внутренней перелинковки. Этап 3 (60–90 дней): масштабирование блога, усиление EEAT, регулярная оптимизация сниппетов и CTR.",
            "Мы фиксируем KPI не только по позициям, но и по бизнес-метрикам: лиды, качество лидов, конверсия страницы, вклад кластера в воронку. Это позволяет направлять ресурсы туда, где есть коммерческий эффект.",
            "Для локального роста добавляем региональные страницы, LocalBusiness разметку и системную работу с профилем Google Business Profile. Так вы получаете видимость и по общим, и по геозависимым запросам.",
          ],
        },
      ],
      faq: [
        {
          question: "Когда ждать первые результаты SEO?",
          answer:
            "Первые сигналы видимости обычно появляются через 4–8 недель, устойчивый коммерческий эффект — в горизонте 3–6 месяцев.",
        },
        {
          question: "Нужен ли новый сайт для SEO?",
          answer:
            "Не всегда. Часто достаточно исправить архитектуру, техошибки и контент, если текущий сайт технически пригоден.",
        },
        {
          question: "Как измеряется эффективность?",
          answer:
            "По кластерам запросов, органическому трафику, CTR, лидам и конверсии ключевых страниц.",
        },
        {
          question: "Вы делаете локальное SEO по Ташкенту?",
          answer:
            "Да, включая региональные страницы, NAP-сигналы и оптимизацию Google Business Profile.",
        },
        {
          question: "Что входит в ежемесячную работу?",
          answer:
            "Техоптимизация, контент/мета, перелинковка, отчётность и корректировка roadmap по фактическим данным.",
        },
      ],
      ctas: [
        { label: "Получить SEO-аудит", href: "#contact" },
        { label: "Сравнить SEO и Google Ads", href: ruLinks.cmpSeoAds },
      ],
      internalLinks: [
        { href: ruLinks.web, label: "Создание сайтов под SEO" },
        { href: ruLinks.ads, label: "Google Ads для быстрого спроса" },
        { href: "/ru/region/tashkent/sozdanie-saitov", label: "Локальная страница Ташкента" },
      ],
    },
    {
      slug: "kontekstnaya-reklama-google-ads",
      seoTitle: "Google Ads в Ташкенте: настройка и ведение | Fourdigital",
      metaDescription:
        "Настройка и ведение Google Ads в Ташкенте с фокусом на CPL и качество лидов. Отчётность и оптимизация каждую неделю.",
      h1: "Контекстная реклама Google Ads в Ташкенте",
      lead:
        "Запускаем и ведём рекламные кампании с фокусом на стоимость целевого лида и связку с конверсионной посадочной страницей.",
      intent: "high commercial",
      serviceType: "PPCService",
      outline: [
        "Когда Ads даёт лучший эффект",
        "Как устроена структура кампаний",
        "Как мы снижаем CPL и повышаем качество лидов",
      ],
      lsi: [
        "google ads ташкент",
        "контекстная реклама узбекистан",
        "ppc агентство",
        "стоимость лида",
        "ремаркетинг",
      ],
      sections: [
        {
          title: "Контекст работает только в связке с посадочной",
          paragraphs: [
            "Частая ошибка — запуск рекламы без проверки релевантности посадочной страницы. В результате клики есть, а лиды дорогие. Мы проектируем связку \"запрос → объявление → посадочная → аналитика\" как единую систему.",
            "На старте сегментируем спрос: горячие коммерческие запросы, брендовые, конкурентные, информационные. Для каждого сегмента создаём отдельную логику объявлений и целей. Это повышает управляемость бюджета и упрощает оптимизацию.",
            "Обязательный элемент — корректная передача конверсий в аналитику и CRM. Без этого невозможно понять, какие ключи действительно приводят продажи.",
          ],
        },
        {
          title: "Как мы ведём кампании после запуска",
          paragraphs: [
            "Еженедельно оптимизируем семантику, минус-слова, объявления, ставки, аудитории и расписание показов. Параллельно улучшаем посадочные страницы, чтобы растить CR и снижать CPL.",
            "Отчёты строим по метрикам бизнеса: лиды, CPL, доля квалифицированных обращений, вклад каналов в воронку. Это позволяет принимать решения на данных, а не на ощущениях.",
          ],
        },
      ],
      faq: [
        {
          question: "Какой минимальный бюджет нужен?",
          answer:
            "Зависит от ниши и конкуренции. Обычно стартуем с тестового бюджета и корректируем по фактическому CPL.",
        },
        {
          question: "Через сколько будут первые лиды?",
          answer:
            "При готовой посадочной странице первые лиды обычно приходят в первые дни после запуска.",
        },
        {
          question: "Вы работаете в нашем рекламном кабинете?",
          answer: "Да, можем вести кампании в вашем аккаунте для полной прозрачности.",
        },
        {
          question: "Можно ли вести только аудит и рекомендации?",
          answer:
            "Да, возможен формат аудита с планом внедрения, если ваша команда ведёт кампании самостоятельно.",
        },
        {
          question: "Как снижаете стоимость лида?",
          answer:
            "Через сегментацию спроса, минус-слова, тест офферов и повышение конверсии посадочной страницы.",
        },
      ],
      ctas: [
        { label: "Получить медиаплан Google Ads", href: "#contact" },
        { label: "Запустить лендинг под рекламу", href: ruLinks.landing },
      ],
      internalLinks: [
        { href: ruLinks.seo, label: "SEO для долгосрочного канала" },
        { href: ruLinks.cmpSeoAds, label: "SEO vs Ads: что выбрать" },
      ],
    },
    {
      slug: "sait-dlya-meditsiny",
      seoTitle: "Сайт для клиники в Ташкенте | Fourdigital",
      metaDescription:
        "Разработка сайта для клиники: запись на приём, доверие, локальное SEO и аналитика заявок.",
      h1: "Сайт для клиники: доверие, запись и стабильные заявки",
      lead: "Проектируем медицинские сайты, где пациенту легко принять решение и записаться на приём.",
      intent: "commercial niche",
      serviceType: "MedicalWebsiteDevelopment",
      outline: ["Требования к медицинскому сайту", "Запись и конверсия", "Локальное SEO для клиник"],
      lsi: ["сайт клиники", "запись на прием", "медицинский маркетинг", "локальное seo"],
      sections: [
        {
          title: "Что важно медицинскому сайту",
          paragraphs: [
            "Пациент выбирает клинику через доверие: квалификация врачей, прозрачные услуги, понятные цены и удобная запись. Мы строим структуру сайта вокруг этих критериев.",
            "Добавляем блоки доверия: лицензии, специалисты, реальные отзывы, сценарии лечения, FAQ по частым вопросам и понятные CTA на запись.",
          ],
        },
      ],
      faq: [
        { question: "Какие разделы обязательны?", answer: "Услуги, врачи, цены, отзывы, контакты, онлайн-запись и FAQ." },
        { question: "Можно подключить CRM/телефонию?", answer: "Да, подключаем запись в CRM и трекинг звонков." },
        { question: "Нужно ли локальное SEO?", answer: "Да, для клиник это один из ключевых источников заявок." },
        { question: "Срок запуска?", answer: "Базовую версию можно запустить в течение 2–4 недель." },
        { question: "Делаете контент о врачах и услугах?", answer: "Да, подготавливаем структуру и редакторский стандарт." },
      ],
      ctas: [
        { label: "Запросить структуру сайта клиники", href: "#contact" },
        { label: "Усилить SEO клиники", href: ruLinks.seo },
      ],
      internalLinks: [
        { href: "/ru/region/tashkent/sozdanie-saitov", label: "Локальная страница Ташкента" },
        { href: ruLinks.web, label: "Создание сайта под ключ" },
      ],
    },
    {
      slug: "sait-dlya-b2b-kompanii",
      seoTitle: "Сайт для B2B-компании под лидогенерацию | Fourdigital",
      metaDescription:
        "B2B-сайт с воронкой лидов: структура услуг, экспертный контент, кейсы и CRM-интеграция.",
      h1: "Сайт для B2B-компании под лидогенерацию",
      lead: "Строим B2B-сайты, которые помогают отделу продаж получать более качественные заявки.",
      intent: "commercial niche",
      serviceType: "B2BWebsiteDevelopment",
      outline: ["Структура B2B-сайта", "Контент для длинного цикла сделки", "KPI по лидам"],
      lsi: ["b2b сайт", "воронка лидов", "кейс компании", "crm интеграция"],
      sections: [
        {
          title: "Сайт для B2B работает как пресейл",
          paragraphs: [
            "В B2B пользователь до контакта с менеджером хочет понять экспертизу, релевантность и масштаб вашей команды. Поэтому ключевая задача сайта — снизить неопределённость и подготовить клиента к разговору с продажами.",
            "Мы выстраиваем структуру вокруг задач покупателя: решение проблемы, кейсы в похожей отрасли, формат запуска, SLA и понятная следующая точка контакта.",
          ],
        },
      ],
      faq: [
        { question: "Как повысить качество лидов?", answer: "Через правильную квалификацию формы, кейсы по нишам и понятное позиционирование." },
        { question: "Нужен ли блог B2B-сайту?", answer: "Да, экспертный контент ускоряет прогрев и улучшает SEO." },
        { question: "Что интегрируете с CRM?", answer: "Формы, события и статус обработки заявок." },
        { question: "Какой KPI на запуске?", answer: "CR ключевых страниц, доля целевых лидов и скорость реакции отдела продаж." },
        { question: "Сколько времени занимает проект?", answer: "Обычно 3–5 недель с учетом контента и интеграций." },
      ],
      ctas: [
        { label: "Получить карту B2B-структуры", href: "#contact" },
        { label: "Заказать корпоративный сайт", href: ruLinks.corp },
      ],
      internalLinks: [
        { href: ruLinks.seo, label: "SEO-продвижение для B2B" },
        { href: ruLinks.ads, label: "Google Ads для быстрого спроса" },
      ],
    },
    {
      slug: "sait-dlya-ecommerce",
      seoTitle: "Интернет-магазин под ключ в Узбекистане | Fourdigital",
      metaDescription:
        "Создание eCommerce-сайтов: каталог, фильтры, карточки товара, SEO категорий, интеграции оплаты и доставки.",
      h1: "Интернет-магазин под ключ в Узбекистане",
      lead: "Проектируем eCommerce, где удобно искать, сравнивать и покупать — с акцентом на скорость и конверсию.",
      intent: "commercial niche",
      serviceType: "EcommerceWebsiteDevelopment",
      outline: ["Архитектура каталога", "Конверсия карточки и checkout", "SEO для категорий"],
      lsi: ["интернет-магазин", "каталог товаров", "checkout", "ecommerce seo"],
      sections: [
        {
          title: "Что определяет эффективность eCommerce-сайта",
          paragraphs: [
            "Продажи в eCommerce зависят от удобства каталога, полноты карточки товара, скорости загрузки и прозрачности оформления заказа. Мы проектируем магазин так, чтобы пользователь быстрее находил нужный товар и завершал покупку.",
            "Отдельно настраиваем SEO-архитектуру: категории, фильтры, перелинковка, мета и шаблоны контента для масштабируемого роста органики.",
          ],
        },
      ],
      faq: [
        { question: "Можно интегрировать платежи и доставку?", answer: "Да, подключаем нужные сервисы оплаты и логистики." },
        { question: "Есть ограничение по товарам?", answer: "Нет, архитектура проектируется под ваш ассортимент и рост." },
        { question: "Что важнее: дизайн или скорость?", answer: "Для продаж важны оба параметра, но скорость критична для мобильного трафика." },
        { question: "Вы делаете SEO для категорий?", answer: "Да, это обязательная часть eCommerce-проекта." },
        { question: "Нужна поддержка после запуска?", answer: "Да, рекомендуем регулярные итерации по данным аналитики." },
      ],
      ctas: [
        { label: "Получить смету eCommerce", href: "#contact" },
        { label: "Узнать про SEO для магазина", href: ruLinks.seo },
      ],
      internalLinks: [
        { href: ruLinks.web, label: "Создание сайтов под ключ" },
        { href: ruLinks.ads, label: "Реклама для eCommerce" },
      ],
    },
    {
      slug: "sait-dlya-servisnogo-biznesa",
      seoTitle: "Сайт для сервисного бизнеса в Ташкенте | Fourdigital",
      metaDescription:
        "Сайт для сервисной компании: структура услуг, локальные триггеры доверия, звонки и заявки с сайта.",
      h1: "Сайт для сервисного бизнеса в Ташкенте",
      lead: "Создаём сайты для компаний услуг, где приоритет — звонки, заявки и понятный путь клиента до контакта.",
      intent: "commercial niche",
      serviceType: "ServiceBusinessWebsite",
      outline: ["Как сервисному бизнесу получать лиды", "Локальные сигналы доверия", "Метрики эффективности"],
      lsi: ["сайт услуг", "лидогенерация", "локальный спрос", "заявки и звонки"],
      sections: [
        {
          title: "Сайт услуг должен сразу отвечать на три вопроса",
          paragraphs: [
            "Клиент хочет быстро понять: что вы делаете, сколько это стоит и почему вам можно доверять. Если на странице нет этих ответов в первых блоках, конверсия падает.",
            "Мы выстраиваем структуру под быстрый выбор: направления услуг, кейсы, процесс, цены/диапазоны, отзывы и заметный CTA на заявку или звонок.",
          ],
        },
      ],
      faq: [
        { question: "Как увеличить звонки с сайта?", answer: "Через локальные посадочные, короткие формы и видимые CTA в ключевых блоках." },
        { question: "Нужна ли отдельная страница под каждую услугу?", answer: "Да, это повышает релевантность и SEO-видимость." },
        { question: "Что добавить для доверия?", answer: "Кейсы, отзывы, процесс работы, сроки и прозрачные условия." },
        { question: "Как отслеживать заявки?", answer: "Через аналитику событий, call tracking и CRM-отчёты." },
        { question: "Сроки разработки?", answer: "От 2 недель для базового запуска с приоритетными услугами." },
      ],
      ctas: [
        { label: "Разобрать ваш текущий сайт", href: "#contact" },
        { label: "Запустить локальное SEO", href: ruLinks.seo },
      ],
      internalLinks: [
        { href: "/ru/region/tashkent/sozdanie-saitov", label: "Создание сайтов в Ташкенте" },
        { href: ruLinks.ads, label: "Google Ads для услуг" },
      ],
    },
  ],
  uz: [
    {
      slug: "sozdanie-saitov-tashkent",
      seoTitle: "Toshkentda sayt yaratish kalit topshirish | Fourdigital",
      metaDescription:
        "Toshkentda sayt yaratish: strategiya, dizayn, ishlab chiqish, SEO baza va analitika. Ishga tushirish 7 kundan.",
      h1: "Toshkentda kalit topshirish sayt yaratish",
      lead:
        "Saytni oddiy vitrina emas, lead olib keladigan tizim sifatida ishlab chiqamiz.",
      intent: "high commercial",
      serviceType: "WebsiteDevelopment",
      outline: [
        "2026 yilda sayt nimani hal qiladi",
        "Kalit topshirish paketiga nima kiradi",
        "Muddat, bosqich va KPI",
      ],
      lsi: ["sayt yaratish", "web studio toshkent", "biznes sayt", "seo tayyor sayt"],
      sections: [
        {
          title: "Sayt biznes natijaga ishlashi kerak",
          paragraphs: [
            "Ko'p loyihalarda asosiy xato dizaynda emas, maqsadni noto'g'ri qo'yishda bo'ladi. Biz avval lead turi, auditoriya va konversiya ssenariylarini aniqlaymiz.",
            "Shundan keyin sahifa arxitekturasi quriladi: foydalanuvchi qayerdan kiradi, qaysi bloklarda ishonch hosil qiladi va qayerda ariza qoldiradi.",
          ],
        },
        {
          title: "Ish jarayoni va nazorat",
          paragraphs: [
            "Brif, prototip, kontent, dizayn, frontend, integratsiya, analitika va launch bosqichlari bo'yicha ishlaymiz. Har bosqichda aniq natija va muddat bo'ladi.",
            "Launchdan keyin 30-90 kunlik growth reja beramiz: qaysi sahifalarni kuchaytirish, qaysi kanalni ulash va qaysi KPIga qarab qaror qilish.",
          ],
        },
      ],
      faq: [
        { question: "Narx qanday hisoblanadi?", answer: "Brifdan keyin sahifalar, integratsiya va kontent hajmiga qarab aniq smeta beramiz." },
        { question: "Qancha muddatda tayyor bo'ladi?", answer: "Landing odatda 7-14 kun, korporativ sayt 14-28 kun." },
        { question: "Matn va strukturani ham qilasizmi?", answer: "Ha, kontent modeli va copywriting ham xizmat tarkibida." },
        { question: "CRM ulaysizmi?", answer: "Ha, forma va eventlarni CRM bilan bog'laymiz." },
        { question: "Launchdan keyin yordam bormi?", answer: "Ha, texnik qo'llab-quvvatlash va growth rejasi beriladi." },
      ],
      ctas: [
        { label: "24 soatda smeta olish", href: "#contact" },
        { label: "SEO audit olish", href: uzLinks.seo },
      ],
      internalLinks: [
        { href: uzLinks.landing, label: "Landing page xizmati" },
        { href: uzLinks.corp, label: "Korporativ sayt" },
      ],
    },
    {
      slug: "lending-pod-klyuch-tashkent",
      seoTitle: "Toshkentda landing page kalit topshirish | Fourdigital",
      metaDescription:
        "Konversiyaga ishlaydigan landing: offer, strukturasi, matn, dizayn, analitika va ishga tushirish.",
      h1: "Toshkentda landing page kalit topshirish",
      lead: "Tez ishga tushadigan va reklama trafiki bilan ishlaydigan konversion landinglar yaratamiz.",
      intent: "high commercial",
      serviceType: "LandingPageDevelopment",
      outline: ["Qachon landing kerak", "Konversion struktura", "Analitika va optimizatsiya"],
      lsi: ["landing page", "konversiya", "google ads landing", "lead forma"],
      sections: [
        {
          title: "Landingning kuchi fokusda",
          paragraphs: [
            "Bitta xizmat yoki offer bo'lsa, landing eng tez natija beradigan format. Asosiy maqsad — foydalanuvchini bitta harakatga olib kelish.",
            "Strukturani pain-point, yechim, ishonch, FAQ va CTA ketma-ketligida quramiz.",
          ],
        },
      ],
      faq: [
        { question: "Bir haftada launch qilsa bo'ladimi?", answer: "Ha, kontent tayyor bo'lsa MVP formatida tez ishga tushiramiz." },
        { question: "Matnlarni yozib berasizmi?", answer: "Ha, reklamaga mos copywriting qilamiz." },
        { question: "CRM integratsiya bormi?", answer: "Ha, forma va eventlar CRMga uzatiladi." },
        { question: "A/B test qilasizmi?", answer: "Ha, asosiy bloklar bo'yicha test strategiyasi beriladi." },
        { question: "Natija qanday o'lchanadi?", answer: "CPL, CR va lead sifatiga qarab." },
      ],
      ctas: [
        { label: "Landing strukturasi olish", href: "#contact" },
        { label: "Google Ads ishga tushirish", href: uzLinks.ads },
      ],
      internalLinks: [
        { href: uzLinks.cmpLanding, label: "Landing yoki sayt" },
        { href: uzLinks.seo, label: "SEO xizmati" },
      ],
    },
    {
      slug: "korporativny-sait-uzbekistan",
      seoTitle: "O'zbekistonda korporativ sayt yaratish | Fourdigital",
      metaDescription:
        "Korporativ sayt: xizmatlar struktura, keyslar, ishonch bloklari va SEO-ready arxitektura.",
      h1: "Kompaniya uchun korporativ sayt",
      lead: "Korporativ saytni savdo va ishonch uchun ishlaydigan platformaga aylantiramiz.",
      intent: "high commercial",
      serviceType: "CorporateWebsiteDevelopment",
      outline: ["Korporativ sayt strukturasi", "Ishonch bloklari", "Sotuv bilan integratsiya"],
      lsi: ["korporativ sayt", "kompaniya sayti", "B2B sayt"],
      sections: [
        {
          title: "Korporativ sayt savdo jarayonini tezlashtiradi",
          paragraphs: [
            "B2B va murakkab xizmatlarda mijoz qarori bir necha bosqichdan o'tadi. Sayt shu jarayonni qo'llab-quvvatlashi kerak.",
            "Xizmatlar, keyslar, jamoa, FAQ va aloqa sahifalari orqali mijozning asosiy savollariga oldindan javob beramiz.",
          ],
        },
      ],
      faq: [
        { question: "Nechta sahifa kerak bo'ladi?", answer: "Start uchun odatda 6-12 ta asosiy sahifa yetarli." },
        { question: "Blog kerakmi?", answer: "Ha, SEO va ekspertlik uchun juda foydali." },
        { question: "Eski saytdan ko'chirish bo'ladimi?", answer: "Ha, SEO xavflarini hisobga olgan holda migratsiya qilamiz." },
        { question: "CRM ulash mumkinmi?", answer: "Ha, lead oqimi CRMga uzatiladi." },
        { question: "Muddat qancha?", answer: "Kontentga qarab 3-5 hafta atrofida." },
      ],
      ctas: [
        { label: "Korporativ sayt rejasi olish", href: "#contact" },
        { label: "B2B sahifani ko'rish", href: uzLinks.b2b },
      ],
      internalLinks: [
        { href: uzLinks.web, label: "Sayt yaratish xizmati" },
        { href: uzLinks.seo, label: "SEO xizmati" },
      ],
    },
    {
      slug: "seo-prodvizhenie-tashkent",
      seoTitle: "Toshkentda SEO xizmati | Fourdigital",
      metaDescription:
        "SEO: texnik audit, semantika, kontent va lokal optimizatsiya. 90 kunlik growth rejasi.",
      h1: "Toshkentda SEO xizmati",
      lead: "SEOni trafik emas, lead va biznes natijaga ishlaydigan tizim sifatida quramiz.",
      intent: "high commercial",
      serviceType: "SEOService",
      outline: ["SEO asosi", "90 kunlik reja", "KPI va hisobot"],
      lsi: ["seo xizmati", "texnik audit", "semantika", "lokal seo"],
      sections: [
        {
          title: "SEO uchun to'g'ri arxitektura zarur",
          paragraphs: [
            "Kontent yozishdan oldin URL struktura va texnik bazani to'g'ri qilish kerak. Aks holda pozitsiya o'ssa ham lead o'smaydi.",
            "Biz klasterlar bo'yicha sahifalarni qayta joylaymiz, meta va ichki linkingni optimallashtiramiz.",
          ],
        },
      ],
      faq: [
        { question: "Natija qachon ko'rinadi?", answer: "Odatda 4-8 haftada dastlabki signal, 3-6 oyda barqaror natija." },
        { question: "Yangi sayt kerakmi?", answer: "Har doim emas, hozirgi sayt texnik holatiga bog'liq." },
        { question: "KPI qanday o'lchanadi?", answer: "Pozitsiya, trafik, lead va konversiya bo'yicha." },
        { question: "Lokal SEO qilasizmi?", answer: "Ha, Toshkent bo'yicha alohida strategiya qilamiz." },
        { question: "Oyma-oy nima qilasiz?", answer: "Texnik optimizatsiya, kontent, linking va hisobot." },
      ],
      ctas: [
        { label: "SEO audit olish", href: "#contact" },
        { label: "SEO vs Ads taqqoslash", href: uzLinks.cmpSeoAds },
      ],
      internalLinks: [
        { href: uzLinks.web, label: "SEOga tayyor sayt yaratish" },
        { href: uzLinks.ads, label: "Google Ads xizmati" },
      ],
    },
    {
      slug: "kontekstnaya-reklama-google-ads",
      seoTitle: "Toshkentda Google Ads yuritish | Fourdigital",
      metaDescription:
        "Google Ads kampaniyalarini CPL va lead sifati bo'yicha boshqaramiz: setup, yuritish, optimizatsiya.",
      h1: "Google Ads reklama xizmati",
      lead: "Google Ads orqali tez lead oqimini yo'lga qo'yamiz va landing konversiyasini oshiramiz.",
      intent: "high commercial",
      serviceType: "PPCService",
      outline: ["Kampaniya struktura", "Lead sifati", "Hisobot"],
      lsi: ["google ads", "ppc", "cpl", "kontekst reklama"],
      sections: [
        {
          title: "Ads natijasi landing va analitikaga bog'liq",
          paragraphs: [
            "Faqat reklama ishga tushirish yetarli emas. So'rov, e'lon, landing va CRM bir tizim bo'lib ishlashi kerak.",
            "Biz haftalik optimizatsiya orqali CPLni pasaytirib, sifatli lead ulushini oshiramiz.",
          ],
        },
      ],
      faq: [
        { question: "Minimal byudjet qancha?", answer: "Nishaga qarab test byudjetdan boshlaymiz." },
        { question: "Lead qachon keladi?", answer: "Odatda to'g'ri setup bo'lsa birinchi kunlardan." },
        { question: "Kabinet kimniki bo'ladi?", answer: "Sizning kabinetda ishlashimiz mumkin." },
        { question: "Faqat audit qilasizmi?", answer: "Ha, audit + action plan ham mavjud." },
        { question: "CPLni qanday tushirasiz?", answer: "Semantika, minus-so'zlar, landing testlari va bid optimizatsiyasi orqali." },
      ],
      ctas: [
        { label: "Google Ads media reja olish", href: "#contact" },
        { label: "Landing page yaratish", href: uzLinks.landing },
      ],
      internalLinks: [
        { href: uzLinks.cmpSeoAds, label: "SEO va Ads taqqoslash" },
        { href: uzLinks.seo, label: "SEO xizmati" },
      ],
    },
    {
      slug: "sait-dlya-meditsiny",
      seoTitle: "Klinika uchun sayt yaratish | Fourdigital",
      metaDescription: "Klinika sayti: ishonch, onlayn yozilish, lokal SEO va lead analitikasi.",
      h1: "Klinika uchun sayt",
      lead: "Bemor uchun qulay, klinika uchun samarali bo'lgan tibbiyot saytlarini ishlab chiqamiz.",
      intent: "commercial niche",
      serviceType: "MedicalWebsiteDevelopment",
      outline: ["Majburiy bo'limlar", "Yozilish konversiyasi", "Lokal SEO"],
      lsi: ["klinika sayti", "yozilish formasi", "lokal seo"],
      sections: [{ title: "Klinika saytida ishonch birinchi", paragraphs: ["Litsenziya, shifokor profili, xizmatlar va sharhlar bemor qaroriga kuchli ta'sir qiladi."] }],
      faq: [
        { question: "Qaysi bo'limlar shart?", answer: "Xizmatlar, shifokorlar, narxlar, sharhlar, aloqa va yozilish." },
        { question: "CRM bilan integratsiya bo'ladimi?", answer: "Ha, yozilishlarni CRMga ulaymiz." },
        { question: "Lokal SEO kerakmi?", answer: "Ha, klinikalar uchun juda muhim." },
        { question: "Muddat qancha?", answer: "2-4 hafta ichida bazaviy versiya." },
        { question: "Kontentga yordam berasizmi?", answer: "Ha, struktura va matn bo'yicha yordam beramiz." },
      ],
      ctas: [{ label: "Klinika sayt strukturasi", href: "#contact" }, { label: "SEO xizmati", href: uzLinks.seo }],
      internalLinks: [{ href: uzLinks.web, label: "Sayt yaratish" }],
    },
    {
      slug: "sait-dlya-b2b-kompanii",
      seoTitle: "B2B kompaniya uchun sayt | Fourdigital",
      metaDescription: "B2B sayt: lead funnel, keyslar, ekspert kontent va CRM integratsiyasi.",
      h1: "B2B kompaniya uchun lead-generatsiya sayti",
      lead: "B2B savdoni tezlashtiradigan va sifatli lead olib keladigan sayt arxitekturasini quramiz.",
      intent: "commercial niche",
      serviceType: "B2BWebsiteDevelopment",
      outline: ["B2B sayt strukturasi", "Kontent va keyslar", "KPI"],
      lsi: ["b2b sayt", "lead funnel", "crm"],
      sections: [{ title: "B2B sayt presales rolini bajaradi", paragraphs: ["Mijoz menejer bilan gaplashishdan oldin sayt orqali sizni baholaydi. Shuning uchun keys va jarayon ochiq bo'lishi kerak."] }],
      faq: [
        { question: "Lead sifatini qanday oshirasiz?", answer: "Forma kvalifikatsiyasi va niche keyslar orqali." },
        { question: "Blog kerakmi?", answer: "Ha, ekspertlik va SEO uchun." },
        { question: "CRM ulaysizmi?", answer: "Ha." },
        { question: "Qanday KPI qo'yiladi?", answer: "CR, MQL ulushi, lead sifati." },
        { question: "Muddat qancha?", answer: "3-5 hafta." },
      ],
      ctas: [{ label: "B2B sayt rejasi", href: "#contact" }, { label: "Korporativ sayt", href: uzLinks.corp }],
      internalLinks: [{ href: uzLinks.seo, label: "SEO xizmati" }],
    },
    {
      slug: "sait-dlya-ecommerce",
      seoTitle: "O'zbekistonda internet-do'kon yaratish | Fourdigital",
      metaDescription: "eCommerce sayt: katalog, filtr, checkout, SEO kategoriya va to'lov integratsiyasi.",
      h1: "Internet-do'kon kalit topshirish",
      lead: "Onlayn savdoni oshirish uchun qulay katalog va konversion checkoutga ega do'konlar yaratamiz.",
      intent: "commercial niche",
      serviceType: "EcommerceWebsiteDevelopment",
      outline: ["Katalog arxitekturasi", "Checkout konversiyasi", "SEO"],
      lsi: ["internet do'kon", "katalog", "checkout", "ecommerce seo"],
      sections: [{ title: "eCommerce samaradorligi nimaga bog'liq", paragraphs: ["Katalog qulayligi, tezlik, karta kontenti va checkoutning sodda bo'lishi sotuvga to'g'ridan-to'g'ri ta'sir qiladi."] }],
      faq: [
        { question: "To'lov tizimi ulansa bo'ladimi?", answer: "Ha, kerakli payment yechimlarini ulaymiz." },
        { question: "Tovarlar limiti bormi?", answer: "Yo'q, arxitektura bo'yicha kengaytiriladi." },
        { question: "SEO qilasizmi?", answer: "Ha, kategoriya va mahsulot sahifalari optimizatsiyasi bilan." },
        { question: "Muddat qancha?", answer: "Loyiha hajmiga qarab individual." },
        { question: "Launchdan keyin support bormi?", answer: "Ha, iterativ rivojlantirish rejasi bilan." },
      ],
      ctas: [{ label: "eCommerce smeta", href: "#contact" }, { label: "SEO xizmati", href: uzLinks.seo }],
      internalLinks: [{ href: uzLinks.ads, label: "Google Ads" }],
    },
    {
      slug: "sait-dlya-servisnogo-biznesa",
      seoTitle: "Servis biznes uchun sayt | Fourdigital",
      metaDescription: "Xizmat ko'rsatish biznesi uchun sayt: lokal lead, qo'ng'iroq va arizalarni ko'paytirish.",
      h1: "Servis biznes uchun konversion sayt",
      lead: "Xizmat ko'rsatish kompaniyalari uchun ariza va qo'ng'iroqni oshiradigan saytlar ishlab chiqamiz.",
      intent: "commercial niche",
      serviceType: "ServiceBusinessWebsite",
      outline: ["Lokal demand", "Ishonch bloklari", "KPI"],
      lsi: ["xizmat sayti", "lokal lead", "qo'ng'iroq"],
      sections: [{ title: "Xizmat saytida tez qaror muhim", paragraphs: ["Foydalanuvchi birinchi ekranlarda xizmat, narx diapazoni va ishonch signallarini ko'rishi kerak."] }],
      faq: [
        { question: "Qo'ng'iroqlarni qanday oshirish mumkin?", answer: "Lokal sahifalar, qisqa forma va ko'rinadigan CTA bilan." },
        { question: "Har xizmat uchun alohida sahifa kerakmi?", answer: "Ha, SEO va konversiya uchun foydali." },
        { question: "Ishonch bloklari nimalar?", answer: "Keys, sharh, jarayon, muddat va kafolat." },
        { question: "Analitika qanday bo'ladi?", answer: "Event tracking, call tracking va CRM." },
        { question: "Launch muddati?", answer: "2 haftadan boshlab." },
      ],
      ctas: [{ label: "Sayt auditi olish", href: "#contact" }, { label: "Lokal SEO", href: uzLinks.seo }],
      internalLinks: [{ href: "/uz/region/tashkent/sozdanie-saitov", label: "Toshkent sahifasi" }],
    },
  ],
};

const comparisonPagesByLocale: Record<SeoLocale, ComparisonPage[]> = {
  ru: [
    {
      slug: "landing-vs-sait",
      seoTitle: "Лендинг или сайт: что выбрать в 2026 | Fourdigital",
      metaDescription:
        "Сравнение лендинга и многостраничного сайта: бюджет, сроки, SEO-потенциал и влияние на лиды.",
      h1: "Лендинг или многостраничный сайт: что выбрать бизнесу",
      lead: "Выбор зависит от целей, сроков и этапа развития бизнеса. Разбираем на практике без шаблонных ответов.",
      intent: "mid intent",
      sections: [
        {
          title: "Когда выигрывает лендинг",
          paragraphs: [
            "Лендинг лучше подходит для запуска конкретного оффера, теста спроса и быстрой рекламной кампании. Он быстрее запускается и проще в оптимизации под CPL.",
            "Если вам нужно быстро проверить гипотезу, собрать первичный спрос и получить первые лиды, лендинг — рациональный старт.",
          ],
        },
        {
          title: "Когда нужен многостраничный сайт",
          paragraphs: [
            "Если у вас несколько услуг, длинный цикл сделки и цель расти в SEO, нужен многостраничный сайт. Он лучше закрывает разные интенты и даёт масштабируемую структуру под контент.",
            "Оптимальная стратегия часто гибридная: старт с лендинга, затем расширение в полноценный сайт.",
          ],
        },
      ],
      faq: [
        { question: "Можно стартовать с лендинга и позже масштабироваться?", answer: "Да, это частый и экономически оправданный сценарий." },
        { question: "Что лучше для SEO?", answer: "Для долгосрочного SEO почти всегда лучше многостраничная структура." },
        { question: "Что дешевле на старте?", answer: "Лендинг обычно дешевле и быстрее в запуске." },
        { question: "Как выбрать для B2B?", answer: "Для B2B чаще нужен многостраничный сайт с кейсами и экспертным контентом." },
        { question: "Можно сделать оба формата?", answer: "Да, это лучшая модель для быстрого и долгого эффекта." },
      ],
      ctas: [
        { label: "Запросить выбор формата", href: ruLinks.contacts },
        { label: "Запустить лендинг", href: ruLinks.landing },
      ],
      internalLinks: [
        { href: ruLinks.web, label: "Создание сайтов под ключ" },
        { href: ruLinks.corp, label: "Корпоративный сайт" },
      ],
    },
    {
      slug: "frilanser-vs-agentstvo",
      seoTitle: "Фрилансер или агентство: что выбрать для сайта | Fourdigital",
      metaDescription:
        "Сравнение фрилансера и агентства по срокам, рискам, процессу и контролю качества.",
      h1: "Фрилансер или агентство: что выбрать для проекта",
      lead: "Сравниваем форматы без токсичности: где выгоднее фрилансер, а где безопаснее агентский процесс.",
      intent: "mid intent",
      sections: [
        {
          title: "Плюсы и ограничения фриланса",
          paragraphs: [
            "Фриланс может быть выгоднее в небольших задачах с узким scope. Но при росте проекта возникают риски по срокам, замене исполнителя и сквозной ответственности.",
          ],
        },
        {
          title: "Плюсы агентского формата",
          paragraphs: [
            "Агентство даёт систему: менеджмент, дизайн, разработка, маркетинг и отчётность в одном процессе. Это снижает риск простоев и облегчает масштабирование.",
          ],
        },
      ],
      faq: [
        { question: "Когда фриланс — хороший выбор?", answer: "Для небольших разовых задач с понятным ТЗ." },
        { question: "Когда лучше агентство?", answer: "Для проектов, где важны сроки, SLA, аналитика и рост." },
        { question: "Агентство всегда дороже?", answer: "На старте может быть дороже, но часто дешевле по совокупной стоимости владения." },
        { question: "Можно комбинировать форматы?", answer: "Да, но нужна единая ответственность за результат." },
        { question: "Как снизить риски выбора подрядчика?", answer: "Смотреть на процесс, кейсы с KPI и прозрачность коммуникации." },
      ],
      ctas: [
        { label: "Получить разбор вашего проекта", href: ruLinks.contacts },
        { label: "Посмотреть кейсы", href: "/ru/cases" },
      ],
      internalLinks: [
        { href: ruLinks.web, label: "Создание сайта" },
        { href: ruLinks.seo, label: "SEO продвижение" },
      ],
    },
    {
      slug: "seo-vs-google-ads",
      seoTitle: "SEO или Google Ads: что лучше для лидов | Fourdigital",
      metaDescription:
        "SEO vs Google Ads: сроки, бюджет, риски и когда лучше комбинировать каналы.",
      h1: "SEO или Google Ads: как выбрать канал для лидов",
      lead: "Сравниваем два канала по времени результата, стоимости и устойчивости, чтобы выбрать подходящую модель роста.",
      intent: "mid intent",
      sections: [
        {
          title: "Сильные стороны SEO",
          paragraphs: [
            "SEO формирует устойчивый канал спроса и снижает зависимость от рекламного бюджета в долгосрочной перспективе. Подходит бизнесам, готовым инвестировать в системный рост.",
          ],
        },
        {
          title: "Сильные стороны Google Ads",
          paragraphs: [
            "Google Ads даёт быстрые лиды и позволяет оперативно тестировать офферы. Подходит, когда нужен результат в коротком горизонте и есть рабочая посадочная страница.",
          ],
        },
        {
          title: "Гибридная модель",
          paragraphs: [
            "На практике лучший вариант — комбинировать каналы: Ads для быстрого спроса, SEO для долгой окупаемости и снижения стоимости привлечения со временем.",
          ],
        },
      ],
      faq: [
        { question: "Что быстрее даёт лиды?", answer: "Google Ads обычно быстрее на старте." },
        { question: "Что выгоднее в долгую?", answer: "SEO чаще выгоднее в горизонте 6–12 месяцев." },
        { question: "Можно начать только с одного канала?", answer: "Да, выбор зависит от бюджета, сроков и готовности сайта." },
        { question: "Какой канал для B2B?", answer: "Чаще комбинация SEO и точечного Ads по коммерческим запросам." },
        { question: "Как измерять эффективность?", answer: "По CPL, качеству лидов и доле сделок по каждому каналу." },
      ],
      ctas: [
        { label: "Запросить медиаплан каналов", href: ruLinks.contacts },
        { label: "Получить SEO-аудит", href: ruLinks.seo },
      ],
      internalLinks: [
        { href: ruLinks.ads, label: "Google Ads" },
        { href: ruLinks.seo, label: "SEO продвижение" },
      ],
    },
    {
      slug: "tilda-vs-custom",
      seoTitle: "Tilda или custom сайт: что выбрать | Fourdigital",
      metaDescription:
        "Сравнение Tilda и custom-разработки: срок, бюджет, масштабирование, SEO и контроль продукта.",
      h1: "Tilda или custom-сайт: как принять решение",
      lead: "Разбираем, когда Tilda закрывает задачу, а когда выгоднее сразу идти в custom-разработку.",
      intent: "mid intent",
      sections: [
        {
          title: "Где Tilda уместна",
          paragraphs: [
            "Для быстрых MVP, простых лендингов и коротких кампаний Tilda может быть рациональным выбором по скорости.",
          ],
        },
        {
          title: "Где custom выигрывает",
          paragraphs: [
            "При сложной логике, интеграциях, масштабируемом SEO и контроле производительности custom-решение обычно эффективнее.",
          ],
        },
      ],
      faq: [
        { question: "Можно начать на Tilda и перейти на custom?", answer: "Да, но важно заранее планировать структуру и миграцию." },
        { question: "Что лучше для SEO?", answer: "Для масштабного SEO чаще лучше custom-архитектура." },
        { question: "Custom всегда дороже?", answer: "Старт может быть дороже, но окупается при росте функциональности." },
        { question: "Какой вариант для eCommerce?", answer: "Для серьёзного eCommerce чаще выбирают custom." },
        { question: "Можно ли комбинировать?", answer: "Да, например лендинг на no-code и основной сайт на custom." },
      ],
      ctas: [
        { label: "Получить техрекомендацию", href: ruLinks.contacts },
        { label: "Создать сайт под ключ", href: ruLinks.web },
      ],
      internalLinks: [
        { href: ruLinks.landing, label: "Лендинг под ключ" },
        { href: ruLinks.ecommerce, label: "Сайт для eCommerce" },
      ],
    },
  ],
  uz: [
    {
      slug: "landing-vs-sait",
      seoTitle: "Landing yoki ko'p sahifali sayt: qaysi biri yaxshi | Fourdigital",
      metaDescription: "Landing va ko'p sahifali sayt taqqoslovi: byudjet, muddat, SEO va lead natijalari.",
      h1: "Landing yoki ko'p sahifali sayt: qaysi birini tanlash kerak",
      lead: "Format tanlovi biznes maqsadiga bog'liq. Har bir variantni amaliy tomondan ko'rib chiqamiz.",
      intent: "mid intent",
      sections: [
        { title: "Landing qachon yaxshi", paragraphs: ["Bitta offer va tez launch kerak bo'lsa, landing eng tez natija beradi."] },
        { title: "Ko'p sahifali sayt qachon kerak", paragraphs: ["Bir nechta xizmat, SEO o'sish va uzoq muddatli strategiya bo'lsa, multi-page sayt ma'qul."] },
      ],
      faq: [
        { question: "Landingdan keyin saytga o'tsa bo'ladimi?", answer: "Ha, bu keng tarqalgan strategiya." },
        { question: "SEO uchun qaysi biri yaxshi?", answer: "Ko'p sahifali sayt SEO uchun kuchliroq." },
        { question: "Qaysi biri tezroq launch bo'ladi?", answer: "Landing." },
        { question: "B2B uchun qaysi biri?", answer: "Ko'p sahifali sayt ko'proq mos." },
        { question: "Ikkalasini birga qilish mumkinmi?", answer: "Ha, eng samarali model shu." },
      ],
      ctas: [{ label: "Format bo'yicha maslahat", href: uzLinks.contacts }, { label: "Landing xizmati", href: uzLinks.landing }],
      internalLinks: [{ href: uzLinks.web, label: "Sayt yaratish" }, { href: uzLinks.corp, label: "Korporativ sayt" }],
    },
    {
      slug: "frilanser-vs-agentstvo",
      seoTitle: "Freelancer yoki agentlik: qaysi biri yaxshiroq | Fourdigital",
      metaDescription: "Freelancer va agentlikni muddat, xavf, jarayon va sifat nazorati bo'yicha solishtiramiz.",
      h1: "Freelancer yoki agentlik: to'g'ri tanlov",
      lead: "Loyiha hajmi va riskga qarab model tanlanadi. Plus/minuslarni ochiq ko'rib chiqamiz.",
      intent: "mid intent",
      sections: [
        { title: "Freelancer afzalliklari", paragraphs: ["Kichik vazifalarda tez va nisbatan arzon bo'lishi mumkin."] },
        { title: "Agentlik afzalliklari", paragraphs: ["Kompleks loyihada tizimli jarayon, SLA va keng jamoa ustunlik beradi."] },
      ],
      faq: [
        { question: "Qachon freelancer yaxshi?", answer: "Kichik va aniq scope bo'lsa." },
        { question: "Qachon agentlik yaxshiroq?", answer: "Murakkab loyiha, muddat va natija javobgarligi kerak bo'lsa." },
        { question: "Agentlik doim qimmatmi?", answer: "Umumiy ownership cost bo'yicha ko'pincha samaraliroq bo'ladi." },
        { question: "Ikkalasini birga ishlatish mumkinmi?", answer: "Ha, lekin javobgarlik markazi aniq bo'lishi kerak." },
        { question: "Xavfni qanday kamaytirish mumkin?", answer: "Jarayon, KPI va shaffoflikni oldindan tekshirish kerak." },
      ],
      ctas: [{ label: "Loyiha tahlili olish", href: uzLinks.contacts }, { label: "Keyslarni ko'rish", href: "/uz/cases" }],
      internalLinks: [{ href: uzLinks.web, label: "Sayt yaratish" }, { href: uzLinks.seo, label: "SEO xizmati" }],
    },
    {
      slug: "seo-vs-google-ads",
      seoTitle: "SEO yoki Google Ads: lead uchun qaysi biri | Fourdigital",
      metaDescription: "SEO va Google Ads taqqoslovi: tezlik, byudjet, risk va kombinatsiya strategiyasi.",
      h1: "SEO yoki Google Ads: lead uchun tanlov",
      lead: "Qaysi kanalni tanlashni muddat, byudjet va biznes maqsadiga qarab tushuntiramiz.",
      intent: "mid intent",
      sections: [
        { title: "SEO kuchli tomonlari", paragraphs: ["SEO uzoq muddatli barqaror trafik va lead oqimini beradi."] },
        { title: "Ads kuchli tomonlari", paragraphs: ["Google Ads tez natija va offer test qilish imkonini beradi."] },
        { title: "Gibrid model", paragraphs: ["Eng yaxshi yondashuv ko'pincha SEO + Ads kombinatsiyasi." ] },
      ],
      faq: [
        { question: "Tez leadni qaysi kanal beradi?", answer: "Odatda Google Ads." },
        { question: "Uzoq muddatda qaysi biri foydaliroq?", answer: "Ko'p holatda SEO." },
        { question: "Bir kanal bilan boshlasa bo'ladimi?", answer: "Ha, holatga qarab." },
        { question: "B2B uchun qaysi model?", answer: "Ko'pincha kombinatsiya." },
        { question: "KPI qanday bo'ladi?", answer: "CPL, lead sifati va sotuvga ta'sir." },
      ],
      ctas: [{ label: "Kanal media-reja olish", href: uzLinks.contacts }, { label: "SEO audit", href: uzLinks.seo }],
      internalLinks: [{ href: uzLinks.ads, label: "Google Ads" }, { href: uzLinks.seo, label: "SEO" }],
    },
    {
      slug: "tilda-vs-custom",
      seoTitle: "Tilda yoki custom sayt: qaysi biri yaxshi | Fourdigital",
      metaDescription: "Tilda va custom yechim taqqoslovi: muddat, byudjet, SEO va kengayish imkoniyati.",
      h1: "Tilda yoki custom: qaysi variantni tanlash kerak",
      lead: "Sizning vazifaga mos platformani tanlash uchun asosiy mezonlarni beramiz.",
      intent: "mid intent",
      sections: [
        { title: "Tilda qachon yetarli", paragraphs: ["Tez MVP yoki oddiy landing uchun Tilda mos." ] },
        { title: "Custom qachon kerak", paragraphs: ["Murakkab integratsiya va masshtab kerak bo'lsa custom yaxshi." ] },
      ],
      faq: [
        { question: "Tildadan customga o'tsa bo'ladimi?", answer: "Ha, oldindan migratsiya rejasi bilan." },
        { question: "SEO uchun qaysi biri kuchli?", answer: "Masshtabli SEO uchun custom kuchliroq." },
        { question: "Custom doim qimmatmi?", answer: "Startda qimmatroq, lekin uzoq muddatda samaraliroq bo'lishi mumkin." },
        { question: "eCommerce uchun qaysi biri?", answer: "Ko'pincha custom." },
        { question: "Aralash model mumkinmi?", answer: "Ha, loyiha bosqichiga qarab." },
      ],
      ctas: [{ label: "Texnik maslahat olish", href: uzLinks.contacts }, { label: "Sayt yaratish", href: uzLinks.web }],
      internalLinks: [{ href: uzLinks.landing, label: "Landing" }, { href: uzLinks.ecommerce, label: "eCommerce" }],
    },
  ],
};

const regionPagesByLocale: Record<SeoLocale, RegionPage[]> = {
  ru: [
    {
      city: "tashkent",
      cityLabel: "Ташкент",
      slug: "sozdanie-saitov",
      seoTitle: "Создание сайтов в Ташкенте | Fourdigital",
      metaDescription:
        "Локальная разработка сайтов в Ташкенте: запуск под ключ, сроки, кейсы, договор и поддержка.",
      h1: "Создание сайтов в Ташкенте",
      lead: "Локальная команда для запуска сайтов, SEO и рекламы с фокусом на коммерческие результаты.",
      sections: [
        {
          title: "Почему локальный фокус важен",
          paragraphs: [
            "Для запросов с геопривязкой важны не только общие SEO-факторы, но и локальные сигналы: региональная посадочная страница, NAP-блок, отзывы, релевантные кейсы и прозрачные контакты.",
            "Мы делаем сайт и маркетинг под локальный спрос Ташкента, чтобы вы получали лиды с понятной стоимостью и прогнозируемой динамикой.",
          ],
        },
      ],
      faq: [
        { question: "Работаете ли с бизнесом в Ташкенте офлайн?", answer: "Да, возможны офлайн встречи и рабочие сессии по проекту." },
        { question: "Можно ли начать с одной услуги?", answer: "Да, стартуем с приоритетного направления и масштабируем." },
        { question: "Как быстро стартуем?", answer: "После брифа можем начать в течение 1-2 рабочих дней." },
        { question: "Даете договор и сроки?", answer: "Да, фиксируем scope, сроки и ответственность в договоре." },
        { question: "Поддержка после релиза есть?", answer: "Да, предлагаем поддержку и roadmap роста." },
      ],
      ctas: [
        { label: "Назначить встречу в Ташкенте", href: "#contact" },
        { label: "Получить локальную смету", href: ruLinks.contacts },
      ],
      internalLinks: [
        { href: ruLinks.web, label: "Создание сайтов под ключ" },
        { href: ruLinks.seo, label: "SEO продвижение" },
      ],
    },
    {
      city: "samarkand",
      cityLabel: "Самарканд",
      slug: "sozdanie-saitov",
      seoTitle: "Создание сайтов в Самарканде | Fourdigital",
      metaDescription: "Разработка сайтов в Самарканде: запуск под ключ, SEO-подготовка и аналитика лидов.",
      h1: "Создание сайтов в Самарканде",
      lead: "Запускаем сайты для компаний Самарканда с акцентом на заявки и локальный спрос.",
      sections: [
        {
          title: "Запуск под региональный спрос",
          paragraphs: [
            "Под региональные проекты важно адаптировать оффер, контент и локальные сигналы доверия. Мы готовим структуру под специфику ниши и города.",
          ],
        },
      ],
      faq: [
        { question: "Работаете удаленно с Самаркандом?", answer: "Да, полностью сопровождаем проект дистанционно и в гибридном формате." },
        { question: "Какие проекты запускаете?", answer: "Лендинги, корпоративные сайты, eCommerce, SEO и Ads." },
        { question: "Сроки запуска?", answer: "От 7 дней для лендингов и от 2-4 недель для многостраничных проектов." },
        { question: "Что нужно от клиента?", answer: "Цель, приоритетные услуги и базовые материалы по бренду." },
        { question: "Есть поддержка после запуска?", answer: "Да, с фокусом на рост заявок и улучшение конверсии." },
      ],
      ctas: [{ label: "Получить предложение", href: "#contact" }, { label: "Смотреть услуги", href: "/ru/services" }],
      internalLinks: [{ href: ruLinks.web, label: "Создание сайтов" }, { href: ruLinks.seo, label: "SEO" }],
    },
    {
      city: "bukhara",
      cityLabel: "Бухара",
      slug: "sozdanie-saitov",
      seoTitle: "Создание сайтов в Бухаре | Fourdigital",
      metaDescription: "Сайты под ключ в Бухаре: структура, дизайн, запуск и рост заявок через SEO/Ads.",
      h1: "Создание сайтов в Бухаре",
      lead: "Помогаем бизнесу в Бухаре запускать сайты, которые приносят обращения и продажи.",
      sections: [
        {
          title: "Как выстроить сайт под локальный рынок",
          paragraphs: [
            "Фокусируем структуру на локальных потребностях аудитории и каналах привлечения, которые реально работают в регионе.",
          ],
        },
      ],
      faq: [
        { question: "Делаете локальное SEO по Бухаре?", answer: "Да, добавляем региональные кластеры и локальные сигналы." },
        { question: "Можно ли сразу подключить рекламу?", answer: "Да, запускаем Ads параллельно с сайтом." },
        { question: "Есть фиксированные пакеты?", answer: "Да, но итоговый scope адаптируем под цели." },
        { question: "Как отслеживать результат?", answer: "Через аналитику лидов, звонков и конверсии." },
        { question: "Какие ниши обслуживаете?", answer: "B2B, услуги, медицина, eCommerce и локальные бренды." },
      ],
      ctas: [{ label: "Запросить расчет", href: "#contact" }, { label: "Связаться с нами", href: ruLinks.contacts }],
      internalLinks: [{ href: ruLinks.web, label: "Создание сайтов" }, { href: ruLinks.ads, label: "Google Ads" }],
    },
  ],
  uz: [
    {
      city: "tashkent",
      cityLabel: "Toshkent",
      slug: "sozdanie-saitov",
      seoTitle: "Toshkentda sayt yaratish | Fourdigital",
      metaDescription: "Toshkent uchun lokal sayt ishlab chiqish, SEO va reklama bilan leadlar oqimini oshirish.",
      h1: "Toshkentda sayt yaratish",
      lead: "Toshkent bozoriga mos sayt, SEO va reklama strategiyasini bir tizimda beramiz.",
      sections: [{ title: "Lokal fokusning afzalligi", paragraphs: ["Lokal sahifa, NAP ma'lumotlari va region keyslari geoso'rovlarda yaxshi natija beradi."] }],
      faq: [
        { question: "Toshkentda oflayn uchrashuv bormi?", answer: "Ha, uchrashuv va workshop formatida ishlaymiz." },
        { question: "Qancha vaqtda start qilasizlar?", answer: "Brifdan keyin 1-2 kunda start qilamiz." },
        { question: "Shartnoma bo'ladimi?", answer: "Ha, scope va muddatni shartnomada belgilaymiz." },
        { question: "Launchdan keyin support bormi?", answer: "Ha, growth roadmap bilan." },
        { question: "Qaysi xizmatlar bor?", answer: "Sayt yaratish, SEO, Google Ads va analitika." },
      ],
      ctas: [{ label: "Toshkent uchrashuvini belgilash", href: "#contact" }, { label: "Smeta olish", href: uzLinks.contacts }],
      internalLinks: [{ href: uzLinks.web, label: "Sayt yaratish" }, { href: uzLinks.seo, label: "SEO" }],
    },
    {
      city: "samarkand",
      cityLabel: "Samarqand",
      slug: "sozdanie-saitov",
      seoTitle: "Samarqandda sayt yaratish | Fourdigital",
      metaDescription: "Samarqand bizneslari uchun sayt ishlab chiqish, SEO tayyor struktura va analitika.",
      h1: "Samarqandda sayt yaratish",
      lead: "Samarqand uchun lokal demandga mos sayt va marketing yechimlarini ishga tushiramiz.",
      sections: [{ title: "Region uchun moslashtirilgan yondashuv", paragraphs: ["Niche va city talabi bo'yicha sahifa strukturasi va offer moslashtiriladi."] }],
      faq: [
        { question: "Masofadan ishlaysizlarmi?", answer: "Ha, to'liq remote jarayon bilan." },
        { question: "Qaysi loyihalarni qilasiz?", answer: "Landing, korporativ sayt, eCommerce, SEO va Ads." },
        { question: "Muddat qancha?", answer: "Loyiha hajmiga qarab 1-4 hafta." },
        { question: "Klientdan nima kerak bo'ladi?", answer: "Maqsad, xizmatlar ro'yxati va bazaviy kontent." },
        { question: "Support bormi?", answer: "Ha, launchdan keyin ham qo'llab-quvvatlaymiz." },
      ],
      ctas: [{ label: "Taklif olish", href: "#contact" }, { label: "Xizmatlar", href: "/uz/services" }],
      internalLinks: [{ href: uzLinks.web, label: "Sayt yaratish" }, { href: uzLinks.seo, label: "SEO" }],
    },
    {
      city: "bukhara",
      cityLabel: "Buxoro",
      slug: "sozdanie-saitov",
      seoTitle: "Buxoroda sayt yaratish | Fourdigital",
      metaDescription: "Buxoroda kalit topshirish sayt, SEO va Google Ads bilan leadlarni oshirish.",
      h1: "Buxoroda sayt yaratish",
      lead: "Buxoro bizneslari uchun konversion sayt va o'sish strategiyasini birga ishga tushiramiz.",
      sections: [{ title: "Lokal bozor uchun aniq model", paragraphs: ["Sahifalar va CTAlar lokal mijozning qaror jarayoniga mos quriladi."] }],
      faq: [
        { question: "Lokal SEO qilasizmi?", answer: "Ha, Buxoro bo'yicha geoso'rovlarni qamrab olamiz." },
        { question: "Google Ads ulash mumkinmi?", answer: "Ha, sayt bilan birga Ads ham ishga tushiramiz." },
        { question: "Paketlar bormi?", answer: "Ha, lekin scope maqsadga ko'ra moslashtiriladi." },
        { question: "Natijani qanday ko'ramiz?", answer: "Lead va konversiya analitikasi orqali." },
        { question: "Qaysi segmentlar bilan ishlaysiz?", answer: "B2B, xizmatlar, tibbiyot va eCommerce." },
      ],
      ctas: [{ label: "Hisob-kitob olish", href: "#contact" }, { label: "Aloqa", href: uzLinks.contacts }],
      internalLinks: [{ href: uzLinks.web, label: "Sayt yaratish" }, { href: uzLinks.ads, label: "Google Ads" }],
    },
  ],
};

const caseStudiesByLocale: Record<SeoLocale, CaseStudy[]> = {
  ru: [
    {
      slug: "mtf-uz-medtech",
      title: "Кейс: MedTech Future (mtf.uz)",
      seoTitle: "Кейс: MedTech Future (mtf.uz) | Fourdigital",
      metaDescription: "Как мы запустили mtf.uz для MedTech Future с сильным позиционированием и конверсионной структурой.",
      industry: "Medical Technologies",
      intro:
        "Для MedTech Future мы разработали корпоративный сайт mtf.uz с акцентом на доверие, экспертизу и удобную навигацию по направлениям.",
      challenge:
        "Нужно было упаковать сложный B2B/B2G продукт в понятную цифровую витрину и усилить конверсию в консультации.",
      solution: [
        "Собрали новую структуру главной и сервисных блоков под коммерческий интент.",
        "Добавили конверсионные блоки: преимущества, категории, доверие, CTA на консультацию.",
        "Оптимизировали визуальную и текстовую подачу под нишу медицинских технологий.",
      ],
      result: [
        "Сформировали сильную цифровую презентацию бренда для рынка Узбекистана.",
        "Улучшили качество входящих обращений благодаря структурному UX и понятному офферу.",
        "Подготовили основу для дальнейшего SEO и performance-масштабирования.",
      ],
      ctas: [
        { label: "Открыть mtf.uz", href: "https://mtf.uz" },
        { label: "Обсудить похожий проект", href: ruLinks.contacts },
      ],
    },
    {
      slug: "mir-matrasov-matras-uz",
      title: "Кейс: Mir Matrasov (matras.uz)",
      seoTitle: "Кейс: SEO-оптимизация matras.uz | Fourdigital",
      metaDescription: "Как для matras.uz провели SEO-оптимизацию и усилили видимость коммерческих страниц в поиске.",
      industry: "E-commerce",
      intro:
        "Для проекта Mir Matrasov (matras.uz) задача была в том, чтобы усилить органический трафик и сделать каталог понятнее для поисковых систем и пользователей.",
      challenge:
        "Часть коммерческих страниц была слабо оптимизирована, а внутренняя перелинковка не раскрывала приоритетные категории.",
      solution: [
        "Провели технический и on-page SEO-аудит ключевых страниц.",
        "Пересобрали метаданные и заголовки под приоритетные коммерческие кластеры.",
        "Усилили перелинковку и структуру разделов каталога для лучшего crawl и релевантности.",
      ],
      result: [
        "Укрепили SEO-базу проекта для стабильного роста органики.",
        "Повысили релевантность посадочных страниц под целевые поисковые запросы.",
        "Подготовили структуру сайта к дальнейшему масштабированию SEO-контента.",
      ],
      ctas: [
        { label: "Открыть matras.uz", href: "https://matras.uz" },
        { label: "Обсудить SEO для сайта", href: ruLinks.seo },
      ],
    },
    {
      slug: "developer-corporate-site",
      title: "Кейс: корпоративный сайт для девелопера",
      seoTitle: "Кейс: корпоративный сайт девелопера | Fourdigital",
      metaDescription: "Как корпоративный сайт с CRM-интеграцией ускорил обработку лидов в отделе продаж.",
      industry: "Real Estate",
      intro: "Проект требовал премиальной подачи бренда и прозрачной воронки лидов для отдела продаж.",
      challenge: "Разрозненные заявки, низкая прозрачность источников и долгий цикл обработки обращений.",
      solution: [
        "Собрали многостраничную структуру под услуги и объекты.",
        "Интегрировали формы и события в CRM.",
        "Настроили отчётность по каналам и типам лидов.",
      ],
      result: [
        "Сокращение времени обработки входящих на 36%.",
        "Рост целевых заявок на 33% за 10 недель.",
        "Повышение глубины просмотра ключевых страниц на 24%.",
      ],
      ctas: [
        { label: "Нужен корпоративный сайт", href: ruLinks.corp },
        { label: "Связаться с нами", href: ruLinks.contacts },
      ],
    },
    {
      slug: "b2b-service-seo-growth",
      title: "Кейс: B2B сервис и рост органики",
      seoTitle: "Кейс: SEO-рост для B2B сервиса | Fourdigital",
      metaDescription: "Как техоптимизация и кластерный контент помогли B2B-сервису нарастить органические лиды.",
      industry: "B2B Services",
      intro: "Клиент хотел снизить зависимость от платного трафика и увеличить долю органических заявок.",
      challenge: "Слабая структура коммерческих страниц и отсутствие контентной матрицы под спрос.",
      solution: [
        "Собрали кластерную структуру услуг и comparison-контент.",
        "Закрыли технические SEO-ошибки и улучшили перелинковку.",
        "Добавили регулярный контент-план с привязкой к money-pages.",
      ],
      result: [
        "Рост органических лидов на 47% за 4 месяца.",
        "Улучшение видимости по коммерческим кластерам на 58%.",
        "Снижение стоимости привлечения лида в миксе каналов.",
      ],
      ctas: [
        { label: "Заказать SEO-аудит", href: ruLinks.seo },
        { label: "Смотреть сравнения каналов", href: ruLinks.cmpSeoAds },
      ],
    },
  ],
  uz: [
    {
      slug: "mtf-uz-medtech",
      title: "Keys: MedTech Future (mtf.uz)",
      seoTitle: "Keys: MedTech Future (mtf.uz) | Fourdigital",
      metaDescription: "MedTech Future uchun mtf.uz korporativ saytini pozitsiyalash va konversiya fokusida ishga tushirish tajribasi.",
      industry: "Medical Technologies",
      intro: "MedTech Future uchun mtf.uz saytini tibbiyot texnologiyalari bozoriga mos kuchli taqdimot sifatida ishlab chiqdik.",
      challenge: "Murakkab B2B/B2G mahsulotni sodda va ishonchli raqamli formatda ko'rsatish vazifasi turdi.",
      solution: ["Asosiy sahifa va servis bloklarini tijoriy intent bo'yicha qayta qurdik.", "Konsultatsiyaga olib boradigan CTA va ishonch bloklarini kuchaytirdik.", "Vizual va matnli kommunikatsiyani nishaga moslashtirdik."],
      result: ["Brendning digital taqdimoti ancha kuchaydi.", "Kiruvchi so'rovlar sifati yaxshilandi.", "SEO va performance uchun keyingi bosqichlarga tayyor baza yaratildi."],
      ctas: [{ label: "mtf.uz ni ochish", href: "https://mtf.uz" }, { label: "O'xshash loyiha muhokamasi", href: uzLinks.contacts }],
    },
    {
      slug: "mir-matrasov-matras-uz",
      title: "Keys: Mir Matrasov (matras.uz)",
      seoTitle: "Keys: matras.uz SEO optimizatsiyasi | Fourdigital",
      metaDescription: "matras.uz uchun texnik va on-page SEO optimizatsiyasi orqali tijoriy sahifalar ko'rinishini kuchaytirish tajribasi.",
      industry: "E-commerce",
      intro:
        "Mir Matrasov (matras.uz) loyihasida asosiy maqsad organik trafikni oshirish va katalogni qidiruv tizimi hamda foydalanuvchi uchun aniqroq qilish edi.",
      challenge: "Tijoriy sahifalarning bir qismi yetarli optimizatsiyaga ega emasdi, ichki linking ham prioritet kategoriyalarni to'liq ochib bermasdi.",
      solution: [
        "Kalit sahifalar uchun texnik va on-page SEO audit o'tkazdik.",
        "Metadata va headinglarni prioritet tijoriy klasterlarga moslab yangiladik.",
        "Katalog bo'limlari strukturasini va ichki linkingni crawl hamda relevanthlik uchun kuchaytirdik.",
      ],
      result: [
        "Organik o'sish uchun SEO bazasi mustahkamlandi.",
        "Landing sahifalarning maqsadli qidiruv so'rovlariga mosligi oshdi.",
        "Keyingi SEO kontent masshtabi uchun sayt strukturasi tayyorlandi.",
      ],
      ctas: [
        { label: "matras.uz ni ochish", href: "https://matras.uz" },
        { label: "SEO xizmatini muhokama qilish", href: uzLinks.seo },
      ],
    },
    {
      slug: "developer-corporate-site",
      title: "Keys: developer uchun korporativ sayt",
      seoTitle: "Keys: developer korporativ sayt loyihasi | Fourdigital",
      metaDescription: "Korporativ sayt va CRM integratsiyasi orqali leadlarni tezroq qayta ishlash natijasi.",
      industry: "Real Estate",
      intro: "Loyiha premium taqdimot va lead funnel shaffofligini talab qildi.",
      challenge: "So'rovlar tarqoq, source analytics zaif edi.",
      solution: ["Ko'p sahifali struktura yaratildi.", "CRM integratsiya qilindi.", "Kanal kesimidagi hisobot sozlandi."],
      result: ["Lead processing vaqti 36% kamaydi.", "10 haftada maqsadli leadlar 33% oshdi.", "Sahifa chuqurligi 24% oshdi."],
      ctas: [{ label: "Korporativ sayt", href: uzLinks.corp }, { label: "Aloqa", href: uzLinks.contacts }],
    },
    {
      slug: "b2b-service-seo-growth",
      title: "Keys: B2B servisda SEO o'sishi",
      seoTitle: "Keys: B2B uchun SEO growth | Fourdigital",
      metaDescription: "Texnik SEO va klaster kontent orqali B2B servisda organik lead o'sishi.",
      industry: "B2B Services",
      intro: "Maqsad pullik trafikga bog'liqlikni kamaytirish edi.",
      challenge: "Kommersiya sahifalari va kontent strukturasi zaif edi.",
      solution: ["Klasterni qayta qurdik.", "Texnik xatolarni yopdik.", "Kontent rejani ishga tushirdik."],
      result: ["4 oyda organik leadlar 47% oshdi.", "Kommersiya klasterlari ko'rinishi 58% yaxshilandi.", "Umumiy CPL pasaydi."],
      ctas: [{ label: "SEO audit", href: uzLinks.seo }, { label: "Taqqoslash sahifasi", href: uzLinks.cmpSeoAds }],
    },
  ],
};

type BlogTopic = {
  slug: string;
  titleRu: string;
  titleUz: string;
  intentRu: string;
  intentUz: string;
  keywordsRu: string[];
  keywordsUz: string[];
  format: string;
  goalRu: string;
  goalUz: string;
  promotedRu: PageLink[];
  promotedUz: PageLink[];
};

const blogTopics: BlogTopic[] = [
  {
    slug: "lending-vs-mnogostranichnyy-sayt",
    titleRu: "Лендинг vs многостраничный сайт: как выбрать формат",
    titleUz: "Landing vs ko'p sahifali sayt: qaysi formatni tanlash",
    intentRu: "mid intent",
    intentUz: "mid intent",
    keywordsRu: ["лендинг или сайт", "многостраничный сайт", "выбор формата"],
    keywordsUz: ["landing yoki sayt", "kop sahifali sayt", "format tanlash"],
    format: "comparison",
    goalRu: "прогрев",
    goalUz: "qizdirish",
    promotedRu: [{ href: ruLinks.landing, label: "Лендинг под ключ" }, { href: ruLinks.web, label: "Создание сайтов" }],
    promotedUz: [{ href: uzLinks.landing, label: "Landing xizmati" }, { href: uzLinks.web, label: "Sayt yaratish" }],
  },
  {
    slug: "frilanser-vs-agentstvo-dlya-sayta",
    titleRu: "Фрилансер vs агентство: кого выбрать для сайта",
    titleUz: "Freelancer vs agentlik: sayt uchun kimni tanlash",
    intentRu: "mid intent",
    intentUz: "mid intent",
    keywordsRu: ["фрилансер или агентство", "разработка сайта", "подрядчик"],
    keywordsUz: ["freelancer yoki agentlik", "sayt ishlab chiqish", "pudratchi"],
    format: "comparison",
    goalRu: "прогрев",
    goalUz: "qizdirish",
    promotedRu: [{ href: ruLinks.web, label: "Создание сайтов" }, { href: "/ru/cases", label: "Кейсы" }],
    promotedUz: [{ href: uzLinks.web, label: "Sayt yaratish" }, { href: "/uz/cases", label: "Keyslar" }],
  },
  {
    slug: "seo-vs-kontekstnaya-reklama",
    titleRu: "SEO vs контекстная реклама: что выбрать",
    titleUz: "SEO vs kontekst reklama: qaysi birini tanlash",
    intentRu: "mid intent",
    intentUz: "mid intent",
    keywordsRu: ["seo или контекст", "google ads", "лиды"],
    keywordsUz: ["seo yoki kontekst", "google ads", "lead"],
    format: "comparison",
    goalRu: "прогрев",
    goalUz: "qizdirish",
    promotedRu: [{ href: ruLinks.seo, label: "SEO" }, { href: ruLinks.ads, label: "Google Ads" }],
    promotedUz: [{ href: uzLinks.seo, label: "SEO" }, { href: uzLinks.ads, label: "Google Ads" }],
  },
  {
    slug: "tilda-vs-custom-razrabotka",
    titleRu: "Tilda vs custom: что лучше для бизнеса",
    titleUz: "Tilda vs custom: biznes uchun qaysi biri yaxshi",
    intentRu: "mid intent",
    intentUz: "mid intent",
    keywordsRu: ["tilda или custom", "конструктор или разработка", "масштабирование сайта"],
    keywordsUz: ["tilda yoki custom", "konstruktor yoki custom", "saytni kengaytirish"],
    format: "comparison",
    goalRu: "прогрев",
    goalUz: "qizdirish",
    promotedRu: [{ href: ruLinks.web, label: "Создание сайтов" }, { href: ruLinks.corp, label: "Корпоративный сайт" }],
    promotedUz: [{ href: uzLinks.web, label: "Sayt yaratish" }, { href: uzLinks.corp, label: "Korporativ sayt" }],
  },
  {
    slug: "pochemu-sayt-ne-prinosit-zayavki",
    titleRu: "Почему сайт не приносит заявки: 9 причин",
    titleUz: "Nega sayt ariza olib kelmaydi: 9 sabab",
    intentRu: "informational",
    intentUz: "informational",
    keywordsRu: ["сайт не приносит заявки", "конверсия сайта", "ошибки сайта"],
    keywordsUz: ["sayt ariza bermayapti", "konversiya", "sayt xatolari"],
    format: "guide",
    goalRu: "трафик",
    goalUz: "trafik",
    promotedRu: [{ href: ruLinks.web, label: "Создание сайтов" }, { href: ruLinks.service, label: "Сайт для услуг" }],
    promotedUz: [{ href: uzLinks.web, label: "Sayt yaratish" }, { href: uzLinks.service, label: "Servis sayt" }],
  },
  {
    slug: "oshibki-lendinga-pod-reklamu",
    titleRu: "12 ошибок лендинга под рекламу",
    titleUz: "Reklama uchun landingdagi 12 xato",
    intentRu: "informational",
    intentUz: "informational",
    keywordsRu: ["ошибки лендинга", "лендинг под рекламу", "конверсия"],
    keywordsUz: ["landing xatolari", "reklama landing", "konversiya"],
    format: "checklist",
    goalRu: "трафик",
    goalUz: "trafik",
    promotedRu: [{ href: ruLinks.landing, label: "Лендинг под ключ" }, { href: ruLinks.ads, label: "Google Ads" }],
    promotedUz: [{ href: uzLinks.landing, label: "Landing" }, { href: uzLinks.ads, label: "Google Ads" }],
  },
  {
    slug: "kak-snizit-stoimost-lida-v-google-ads",
    titleRu: "Как снизить стоимость лида в Google Ads",
    titleUz: "Google Adsda lead narxini qanday kamaytirish",
    intentRu: "informational",
    intentUz: "informational",
    keywordsRu: ["стоимость лида", "cpl", "google ads"],
    keywordsUz: ["lead narxi", "cpl", "google ads"],
    format: "guide",
    goalRu: "прогрев",
    goalUz: "qizdirish",
    promotedRu: [{ href: ruLinks.ads, label: "Google Ads" }, { href: ruLinks.landing, label: "Лендинг" }],
    promotedUz: [{ href: uzLinks.ads, label: "Google Ads" }, { href: uzLinks.landing, label: "Landing" }],
  },
  {
    slug: "kak-schitat-cpl-cac-romi",
    titleRu: "Как считать CPL, CAC и ROMI для сайта",
    titleUz: "Sayt uchun CPL, CAC va ROMIni qanday hisoblash",
    intentRu: "informational",
    intentUz: "informational",
    keywordsRu: ["как считать cpl", "cac", "romi"],
    keywordsUz: ["cpl hisoblash", "cac", "romi"],
    format: "guide",
    goalRu: "прогрев",
    goalUz: "qizdirish",
    promotedRu: [{ href: ruLinks.web, label: "Создание сайтов" }, { href: ruLinks.ads, label: "Google Ads" }],
    promotedUz: [{ href: uzLinks.web, label: "Sayt yaratish" }, { href: uzLinks.ads, label: "Google Ads" }],
  },
  {
    slug: "pochemu-seo-ne-daet-lidov",
    titleRu: "Почему SEO не даёт лидов: 7 типовых ошибок",
    titleUz: "Nega SEO lead bermaydi: 7 tipik xato",
    intentRu: "informational",
    intentUz: "informational",
    keywordsRu: ["seo не дает лиды", "seo ошибки", "коммерческий трафик"],
    keywordsUz: ["seo lead bermaydi", "seo xatolar", "kommersiya trafik"],
    format: "guide",
    goalRu: "прогрев",
    goalUz: "qizdirish",
    promotedRu: [{ href: ruLinks.seo, label: "SEO продвижение" }, { href: ruLinks.cmpSeoAds, label: "SEO vs Ads" }],
    promotedUz: [{ href: uzLinks.seo, label: "SEO" }, { href: uzLinks.cmpSeoAds, label: "SEO vs Ads" }],
  },
  {
    slug: "kak-podgotovit-tz-na-sayt",
    titleRu: "Как подготовить ТЗ на сайт: практический шаблон",
    titleUz: "Sayt uchun TZni qanday tayyorlash",
    intentRu: "informational",
    intentUz: "informational",
    keywordsRu: ["тз на сайт", "бриф сайта", "структура проекта"],
    keywordsUz: ["sayt tz", "brif", "loyiha struktura"],
    format: "checklist",
    goalRu: "трафик",
    goalUz: "trafik",
    promotedRu: [{ href: ruLinks.web, label: "Создание сайтов" }, { href: ruLinks.contacts, label: "Контакты" }],
    promotedUz: [{ href: uzLinks.web, label: "Sayt yaratish" }, { href: uzLinks.contacts, label: "Aloqa" }],
  },
  {
    slug: "sayt-dlya-kliniki-struktura",
    titleRu: "Сайт для клиники: структура, которая конвертирует",
    titleUz: "Klinika sayti: konversiyaga ishlaydigan struktura",
    intentRu: "commercial",
    intentUz: "commercial",
    keywordsRu: ["сайт для клиники", "медицинский сайт", "запись на прием"],
    keywordsUz: ["klinika sayti", "meditsina sayt", "yozilish"],
    format: "niche",
    goalRu: "конверсия",
    goalUz: "konversiya",
    promotedRu: [{ href: ruLinks.med, label: "Сайт для клиники" }, { href: ruLinks.seo, label: "SEO" }],
    promotedUz: [{ href: uzLinks.med, label: "Klinika sayti" }, { href: uzLinks.seo, label: "SEO" }],
  },
  {
    slug: "sayt-dlya-b2b-voronka",
    titleRu: "Сайт для B2B: как построить воронку заявок",
    titleUz: "B2B sayt: lead voronkasini qanday qurish",
    intentRu: "commercial",
    intentUz: "commercial",
    keywordsRu: ["b2b сайт", "воронка заявок", "b2b лиды"],
    keywordsUz: ["b2b sayt", "lead voronka", "b2b lead"],
    format: "niche",
    goalRu: "конверсия",
    goalUz: "konversiya",
    promotedRu: [{ href: ruLinks.b2b, label: "Сайт для B2B" }, { href: ruLinks.corp, label: "Корпоративный сайт" }],
    promotedUz: [{ href: uzLinks.b2b, label: "B2B sayt" }, { href: uzLinks.corp, label: "Korporativ sayt" }],
  },
  {
    slug: "ecommerce-sayt-obyazatelnye-bloki",
    titleRu: "Что обязательно должно быть в eCommerce-сайте",
    titleUz: "eCommerce saytda bo'lishi shart bo'lgan bloklar",
    intentRu: "commercial",
    intentUz: "commercial",
    keywordsRu: ["ecommerce сайт", "карточка товара", "checkout"],
    keywordsUz: ["ecommerce sayt", "tovar kartasi", "checkout"],
    format: "niche",
    goalRu: "конверсия",
    goalUz: "konversiya",
    promotedRu: [{ href: ruLinks.ecommerce, label: "Сайт для eCommerce" }, { href: ruLinks.ads, label: "Google Ads" }],
    promotedUz: [{ href: uzLinks.ecommerce, label: "eCommerce sayt" }, { href: uzLinks.ads, label: "Google Ads" }],
  },
  {
    slug: "sayt-dlya-servisnoy-kompanii",
    titleRu: "Сайт для сервисной компании: как получать больше звонков",
    titleUz: "Servis kompaniya sayti: ko'proq qo'ng'iroq olish",
    intentRu: "commercial",
    intentUz: "commercial",
    keywordsRu: ["сайт для услуг", "звонки с сайта", "локальные лиды"],
    keywordsUz: ["xizmat sayti", "qo'ng'iroq", "lokal lead"],
    format: "niche",
    goalRu: "конверсия",
    goalUz: "konversiya",
    promotedRu: [{ href: ruLinks.service, label: "Сайт для сервиса" }, { href: ruLinks.seo, label: "SEO" }],
    promotedUz: [{ href: uzLinks.service, label: "Servis sayt" }, { href: uzLinks.seo, label: "SEO" }],
  },
  {
    slug: "stoimost-sayta-v-tashkente-2026",
    titleRu: "Сколько стоит сайт в Ташкенте в 2026 году",
    titleUz: "2026 yilda Toshkentda sayt narxi qancha",
    intentRu: "commercial",
    intentUz: "commercial",
    keywordsRu: ["цена сайта ташкент", "стоимость разработки", "сайт под ключ"],
    keywordsUz: ["sayt narxi toshkent", "ishlab chiqish narxi", "kalit topshirish"],
    format: "guide",
    goalRu: "конверсия",
    goalUz: "konversiya",
    promotedRu: [{ href: ruLinks.web, label: "Создание сайтов" }, { href: ruLinks.contacts, label: "Получить смету" }],
    promotedUz: [{ href: uzLinks.web, label: "Sayt yaratish" }, { href: uzLinks.contacts, label: "Smeta olish" }],
  },
  {
    slug: "kak-vybrat-veb-studiyu-v-uzbekistane",
    titleRu: "Как выбрать веб-студию в Узбекистане",
    titleUz: "O'zbekistonda web studiyani qanday tanlash",
    intentRu: "mid intent",
    intentUz: "mid intent",
    keywordsRu: ["как выбрать веб-студию", "подрядчик на сайт", "агентство узбекистан"],
    keywordsUz: ["web studio tanlash", "sayt pudratchi", "agentlik"],
    format: "guide",
    goalRu: "прогрев",
    goalUz: "qizdirish",
    promotedRu: [{ href: ruLinks.web, label: "Создание сайтов" }, { href: "/ru/cases", label: "Кейсы" }],
    promotedUz: [{ href: uzLinks.web, label: "Sayt yaratish" }, { href: "/uz/cases", label: "Keyslar" }],
  },
  {
    slug: "cheklist-zapuska-sayta-za-14-dney",
    titleRu: "Чеклист запуска сайта за 14 дней",
    titleUz: "14 kunda sayt launch qilish cheklisti",
    intentRu: "informational",
    intentUz: "informational",
    keywordsRu: ["запуск сайта", "чеклист", "сроки разработки"],
    keywordsUz: ["sayt launch", "checklist", "muddat"],
    format: "checklist",
    goalRu: "трафик",
    goalUz: "trafik",
    promotedRu: [{ href: ruLinks.landing, label: "Лендинг" }, { href: ruLinks.web, label: "Создание сайтов" }],
    promotedUz: [{ href: uzLinks.landing, label: "Landing" }, { href: uzLinks.web, label: "Sayt yaratish" }],
  },
  {
    slug: "keys-rost-lidov-posle-redizayna",
    titleRu: "Кейс: рост лидов после редизайна сайта",
    titleUz: "Keys: redesigndan keyin lead o'sishi",
    intentRu: "bofu",
    intentUz: "bofu",
    keywordsRu: ["кейс редизайн", "рост лидов", "конверсия сайта"],
    keywordsUz: ["redesign keys", "lead o'sishi", "konversiya"],
    format: "case",
    goalRu: "доверие",
    goalUz: "ishonch",
    promotedRu: [{ href: "/ru/cases", label: "Кейсы" }, { href: ruLinks.web, label: "Создание сайтов" }],
    promotedUz: [{ href: "/uz/cases", label: "Keyslar" }, { href: uzLinks.web, label: "Sayt yaratish" }],
  },
  {
    slug: "keys-seo-rost-za-90-dney",
    titleRu: "Кейс: SEO-рост за 90 дней",
    titleUz: "Keys: 90 kunda SEO o'sishi",
    intentRu: "bofu",
    intentUz: "bofu",
    keywordsRu: ["seo кейс", "рост трафика", "органические лиды"],
    keywordsUz: ["seo keys", "trafik o'sishi", "organik lead"],
    format: "case",
    goalRu: "доверие",
    goalUz: "ishonch",
    promotedRu: [{ href: ruLinks.seo, label: "SEO" }, { href: "/ru/cases/b2b-service-seo-growth", label: "Кейс B2B" }],
    promotedUz: [{ href: uzLinks.seo, label: "SEO" }, { href: "/uz/cases/b2b-service-seo-growth", label: "B2B keysi" }],
  },
  {
    slug: "keys-snizhenie-cpl-v-ads",
    titleRu: "Кейс: снижение CPL в Google Ads",
    titleUz: "Keys: Google Adsda CPL kamayishi",
    intentRu: "bofu",
    intentUz: "bofu",
    keywordsRu: ["cpl кейс", "google ads кейс", "оптимизация рекламы"],
    keywordsUz: ["cpl keys", "google ads keys", "reklama optimizatsiya"],
    format: "case",
    goalRu: "доверие",
    goalUz: "ishonch",
    promotedRu: [{ href: ruLinks.ads, label: "Google Ads" }, { href: ruLinks.landing, label: "Лендинг" }],
    promotedUz: [{ href: uzLinks.ads, label: "Google Ads" }, { href: uzLinks.landing, label: "Landing" }],
  },
  {
    slug: "lokalnoe-seo-dlya-tashkenta",
    titleRu: "Локальное SEO для Ташкента: практический план",
    titleUz: "Toshkent uchun lokal SEO: amaliy reja",
    intentRu: "informational",
    intentUz: "informational",
    keywordsRu: ["локальное seo", "seo ташкент", "google business profile"],
    keywordsUz: ["lokal seo", "seo toshkent", "google business"],
    format: "guide",
    goalRu: "трафик",
    goalUz: "trafik",
    promotedRu: [{ href: "/ru/region/tashkent/sozdanie-saitov", label: "Ташкент страница" }, { href: ruLinks.seo, label: "SEO" }],
    promotedUz: [{ href: "/uz/region/tashkent/sozdanie-saitov", label: "Toshkent sahifa" }, { href: uzLinks.seo, label: "SEO" }],
  },
  {
    slug: "kak-oformit-keysy-na-sayte",
    titleRu: "Как оформлять кейсы на сайте, чтобы они продавали",
    titleUz: "Saytda keyslarni sotuvga ishlaydigan formatda berish",
    intentRu: "mid intent",
    intentUz: "mid intent",
    keywordsRu: ["как оформить кейс", "кейсы на сайте", "доверие"],
    keywordsUz: ["keys format", "saytda keys", "ishonch"],
    format: "guide",
    goalRu: "прогрев",
    goalUz: "qizdirish",
    promotedRu: [{ href: "/ru/cases", label: "Кейсы" }, { href: ruLinks.corp, label: "Корпоративный сайт" }],
    promotedUz: [{ href: "/uz/cases", label: "Keyslar" }, { href: uzLinks.corp, label: "Korporativ sayt" }],
  },
  {
    slug: "oshibki-korporativnogo-sayta",
    titleRu: "10 ошибок корпоративного сайта, которые мешают продажам",
    titleUz: "Sotuvga halal beradigan korporativ saytning 10 xatosi",
    intentRu: "informational",
    intentUz: "informational",
    keywordsRu: ["ошибки корпоративного сайта", "сайт компании", "конверсия"],
    keywordsUz: ["korporativ sayt xatolari", "kompaniya sayti", "konversiya"],
    format: "checklist",
    goalRu: "трафик",
    goalUz: "trafik",
    promotedRu: [{ href: ruLinks.corp, label: "Корпоративный сайт" }, { href: ruLinks.b2b, label: "Сайт для B2B" }],
    promotedUz: [{ href: uzLinks.corp, label: "Korporativ sayt" }, { href: uzLinks.b2b, label: "B2B sayt" }],
  },
  {
    slug: "faq-po-sozdaniyu-saytov-v-uzbekistane",
    titleRu: "FAQ по созданию сайтов в Узбекистане",
    titleUz: "O'zbekistonda sayt yaratish bo'yicha FAQ",
    intentRu: "bofu",
    intentUz: "bofu",
    keywordsRu: ["faq создание сайта", "вопросы по разработке", "стоимость сайта"],
    keywordsUz: ["sayt yaratish faq", "savollar", "sayt narxi"],
    format: "faq",
    goalRu: "конверсия",
    goalUz: "konversiya",
    promotedRu: [{ href: ruLinks.web, label: "Создание сайтов" }, { href: ruLinks.contacts, label: "Контакты" }],
    promotedUz: [{ href: uzLinks.web, label: "Sayt yaratish" }, { href: uzLinks.contacts, label: "Aloqa" }],
  },
  {
    slug: "kak-sobrat-otzyvy-dlya-google-business-profile",
    titleRu: "Как собирать отзывы для Google Business Profile",
    titleUz: "Google Business Profile uchun sharhlarni qanday yig'ish",
    intentRu: "informational",
    intentUz: "informational",
    keywordsRu: ["google business отзывы", "локальный рейтинг", "репутация"],
    keywordsUz: ["google business sharh", "lokal reyting", "reputatsiya"],
    format: "guide",
    goalRu: "трафик",
    goalUz: "trafik",
    promotedRu: [{ href: ruLinks.contacts, label: "Контакты/офис" }, { href: ruLinks.seo, label: "SEO" }],
    promotedUz: [{ href: uzLinks.contacts, label: "Aloqa/ofis" }, { href: uzLinks.seo, label: "SEO" }],
  },
  {
    slug: "kak-uluchshit-cwv-bez-pererabotki-sayta",
    titleRu: "Как улучшить Core Web Vitals без полной переделки сайта",
    titleUz: "Saytni to'liq qayta qilmasdan Core Web Vitalsni yaxshilash",
    intentRu: "informational",
    intentUz: "informational",
    keywordsRu: ["core web vitals", "ускорить сайт", "lcp cls inp"],
    keywordsUz: ["core web vitals", "sayt tezligi", "lcp cls inp"],
    format: "checklist",
    goalRu: "трафик",
    goalUz: "trafik",
    promotedRu: [{ href: ruLinks.web, label: "Создание сайтов" }, { href: ruLinks.seo, label: "SEO" }],
    promotedUz: [{ href: uzLinks.web, label: "Sayt yaratish" }, { href: uzLinks.seo, label: "SEO" }],
  },
  {
    slug: "kak-svyazat-sayt-crm-i-analitiku",
    titleRu: "Как связать сайт, CRM и аналитику в одну систему",
    titleUz: "Sayt, CRM va analitikani bitta tizimga qanday ulash",
    intentRu: "informational",
    intentUz: "informational",
    keywordsRu: ["сайт crm аналитика", "сквозная аналитика", "лиды"],
    keywordsUz: ["sayt crm analitika", "skvoznaya analitika", "lead"],
    format: "guide",
    goalRu: "прогрев",
    goalUz: "qizdirish",
    promotedRu: [{ href: ruLinks.web, label: "Создание сайтов" }, { href: ruLinks.ads, label: "Google Ads" }],
    promotedUz: [{ href: uzLinks.web, label: "Sayt yaratish" }, { href: uzLinks.ads, label: "Google Ads" }],
  },
];

const buildBlogPost = (locale: SeoLocale, topic: BlogTopic): BlogPost => {
  const isRu = locale === "ru";
  const title = isRu ? topic.titleRu : topic.titleUz;
  const keywords = isRu ? topic.keywordsRu : topic.keywordsUz;
  const intent = isRu ? topic.intentRu : topic.intentUz;
  const goal = isRu ? topic.goalRu : topic.goalUz;
  const promoted = isRu ? topic.promotedRu : topic.promotedUz;

  const intro = isRu
    ? `${title}. В статье разбираем практический подход для рынка Узбекистана: что влияет на результат, какие ошибки встречаются чаще всего и как связать контент со страницами услуг.`
    : `${title}. Ushbu maqolada O'zbekiston bozori uchun amaliy yondashuvni ko'rsatamiz: natijaga nima ta'sir qiladi va xizmat sahifalarini qanday kuchaytirish kerak.`;

  const sections: ContentSection[] = isRu
    ? [
        {
          title: "Контекст задачи и почему тема важна",
          paragraphs: [
            `Запросы по теме \"${keywords[0]}\" стабильно связаны с коммерческим намерением. Пользователь ищет не только теорию, но и понятный план действий, который можно применить в ближайшие недели.`,
            "Ключевая цель — убрать разрыв между контентом и продажей: статья должна прогревать, отвечать на возражения и переводить пользователя на релевантную коммерческую страницу.",
          ],
        },
        {
          title: "Пошаговый подход",
          paragraphs: [
            "Шаг 1: зафиксировать метрику успеха и сегмент аудитории. Шаг 2: сформировать структуру страницы под реальный интент. Шаг 3: добавить доказательства и кейсы. Шаг 4: внедрить внутреннюю перелинковку в money-pages.",
            `В рамках темы используйте ключи: ${keywords.join(", ")}. Не перегружайте текст повторениями — приоритет на понятность и коммерческую релевантность.`,
          ],
        },
        {
          title: "Типичные ошибки и как их избежать",
          paragraphs: [
            "Ошибка №1 — общий текст без привязки к этапу воронки. Ошибка №2 — отсутствие CTA в логичных точках. Ошибка №3 — статья не связана с услуговыми страницами и не передаёт им вес.",
            "Исправление: добавляйте блоки с процессом, KPI, FAQ и понятным следующим действием. Для high-intent тем обязательно вести пользователя к заявке или консультации.",
          ],
        },
        {
          title: "Что внедрить в ближайшие 14 дней",
          paragraphs: [
            "Опубликуйте материал, добавьте минимум 3 внутренних ссылки на коммерческие URL, настройте schema Article/FAQ, обновите мета и проверьте индексирование. Затем оцените CTR и глубину просмотра.",
            "Через 2–3 недели обновите статью на основе фактических данных: какие блоки читают дольше, где кликают чаще, какие CTA конвертируют лучше.",
          ],
        },
      ]
    : [
        {
          title: "Nega bu mavzu muhim",
          paragraphs: [
            `\"${keywords[0]}\" bo'yicha so'rovlar ko'pincha tijoriy niyatga ega bo'ladi. Foydalanuvchi nazariya emas, amaliy reja kutadi.`,
            "Maqsad — kontentni sotuv voronkasi bilan bog'lash: maqola savollarga javob bersin va kerakli xizmat sahifasiga olib borsin.",
          ],
        },
        {
          title: "Bosqichma-bosqich yondashuv",
          paragraphs: [
            "1-qadam: KPI va auditoriyani aniqlash. 2-qadam: intentga mos struktura qurish. 3-qadam: ishonch dalillari qo'shish. 4-qadam: ichki linking orqali money-page'larni kuchaytirish.",
            `Mavzu uchun asosiy kalitlar: ${keywords.join(", ")}. Matnni tabiiy va foydalanuvchiga tushunarli qiling.`,
          ],
        },
        {
          title: "Tipik xatolar",
          paragraphs: [
            "Xato №1 — umumiy gaplar, amaliy qadam yo'q. Xato №2 — CTA yo'qligi. Xato №3 — maqola xizmat sahifalariga ulanmagan.",
            "Yechim: jarayon, KPI, FAQ va aniq keyingi qadamlarni qo'shing.",
          ],
        },
        {
          title: "14 kunda nima qilish kerak",
          paragraphs: [
            "Maqolani chiqaring, kamida 3 ta ichki link bering, schema qo'shing, indeksatsiyani tekshiring. Keyin CTR va sahifa chuqurligini tahlil qiling.",
            "2-3 haftadan keyin real ma'lumotlarga qarab kontentni yangilang.",
          ],
        },
      ];

  const faq: FaqItem[] = isRu
    ? [
        {
          question: "Как быстро статья может начать приводить трафик?",
          answer: "Первые сигналы обычно видны через 2–6 недель, в зависимости от конкуренции кластера.",
        },
        {
          question: "Нужно ли обновлять материал после публикации?",
          answer: "Да, регулярное обновление повышает релевантность и помогает расти в выдаче.",
        },
        {
          question: "Сколько внутренних ссылок добавлять?",
          answer: "Минимум 3–5 релевантных ссылок на money-pages и тематические материалы.",
        },
        {
          question: "Нужна ли FAQ-разметка?",
          answer: "Для материалов с вопросами и ответами — да, это повышает структурированность страницы.",
        },
        {
          question: "Как связать статью с лидами?",
          answer: "Через явные CTA, кейсы и переходы на коммерческие страницы услуг.",
        },
      ]
    : [
        { question: "Maqola trafikni qachon bera boshlaydi?", answer: "Odatda 2–6 hafta ichida dastlabki signal paydo bo'ladi." },
        { question: "Maqolani yangilash kerakmi?", answer: "Ha, doimiy yangilash relevansni oshiradi." },
        { question: "Ichki link nechta bo'lishi kerak?", answer: "Kamida 3–5 ta relevanti link berish tavsiya etiladi." },
        { question: "FAQ schema kerakmi?", answer: "Savol-javob bloki bo'lsa, albatta kerak." },
        { question: "Maqoladan leadga qanday o'tkazamiz?", answer: "CTA, keys va xizmat sahifalariga to'g'ri o'tishlar orqali." },
      ];

  return {
    slug: topic.slug,
    title,
    seoTitle: isRu ? `${title} | Fourdigital` : `${title} | Fourdigital`,
    metaDescription: isRu
      ? `${title}. Практический разбор для рынка Узбекистана: шаги внедрения, ошибки и связка с лидогенерацией.`
      : `${title}. O'zbekiston bozori uchun amaliy qo'llanma: qadamlar, xatolar va lead-generatsiya bilan bog'lanish.`,
    intent,
    format: topic.format,
    goal,
    keywords,
    promotedPages: promoted,
    intro,
    sections,
    faq,
  };
};

const blogPostsByLocale: Record<SeoLocale, BlogPost[]> = {
  ru: blogTopics.map((topic) => buildBlogPost("ru", topic)),
  uz: blogTopics.map((topic) => buildBlogPost("uz", topic)),
};

const contentPlanByLocale: Record<SeoLocale, Array<{ topic: string; intent: string; keys: string; format: string; goal: string; promotes: string }>> = {
  ru: blogTopics.map((topic) => ({
    topic: topic.titleRu,
    intent: topic.intentRu,
    keys: topic.keywordsRu.join(", "),
    format: topic.format,
    goal: topic.goalRu,
    promotes: topic.promotedRu.map((item) => item.href).join(", "),
  })),
  uz: blogTopics.map((topic) => ({
    topic: topic.titleUz,
    intent: topic.intentUz,
    keys: topic.keywordsUz.join(", "),
    format: topic.format,
    goal: topic.goalUz,
    promotes: topic.promotedUz.map((item) => item.href).join(", "),
  })),
};

const isSeoLocale = (locale: string): locale is SeoLocale =>
  seoLocales.includes(locale as SeoLocale);

export const getMarketingPages = (locale: Locale): MarketingPage[] => {
  if (!isSeoLocale(locale)) return [];
  return marketingPagesByLocale[locale];
};

export const getMarketingPage = (locale: Locale, slug: string): MarketingPage | undefined =>
  getMarketingPages(locale).find((page) => page.slug === slug);

export const getComparisonPages = (locale: Locale): ComparisonPage[] => {
  if (!isSeoLocale(locale)) return [];
  return comparisonPagesByLocale[locale];
};

export const getComparisonPage = (locale: Locale, slug: string): ComparisonPage | undefined =>
  getComparisonPages(locale).find((page) => page.slug === slug);

export const getRegionPages = (locale: Locale): RegionPage[] => {
  if (!isSeoLocale(locale)) return [];
  return regionPagesByLocale[locale];
};

export const getRegionPage = (locale: Locale, city: string, slug: string): RegionPage | undefined =>
  getRegionPages(locale).find((page) => page.city === city && page.slug === slug);

export const getCaseStudies = (locale: Locale): CaseStudy[] => {
  if (!isSeoLocale(locale)) return [];
  return caseStudiesByLocale[locale];
};

export const getCaseStudy = (locale: Locale, slug: string): CaseStudy | undefined =>
  getCaseStudies(locale).find((item) => item.slug === slug);

export const getBlogPosts = (locale: Locale): BlogPost[] => {
  if (!isSeoLocale(locale)) return [];
  return blogPostsByLocale[locale];
};

export const getBlogPost = (locale: Locale, slug: string): BlogPost | undefined =>
  getBlogPosts(locale).find((post) => post.slug === slug);

export const getContentPlan = (locale: Locale) => {
  if (!isSeoLocale(locale)) return [];
  return contentPlanByLocale[locale];
};

export const getPrimaryServiceLink = (locale: Locale, legacySlug: string): string => {
  if (locale === "ru") {
    const mapping: Record<string, string> = {
      "website-development": "sozdanie-saitov-tashkent",
      "landing-page": "lending-pod-klyuch-tashkent",
      "corporate-website": "korporativny-sait-uzbekistan",
      ecommerce: "sait-dlya-ecommerce",
      seo: "seo-prodvizhenie-tashkent",
    };

    if (mapping[legacySlug]) return `/ru/${mapping[legacySlug]}`;
  }

  if (locale === "uz") {
    const mapping: Record<string, string> = {
      "website-development": "sozdanie-saitov-tashkent",
      "landing-page": "lending-pod-klyuch-tashkent",
      "corporate-website": "korporativny-sait-uzbekistan",
      ecommerce: "sait-dlya-ecommerce",
      seo: "seo-prodvizhenie-tashkent",
    };

    if (mapping[legacySlug]) return `/uz/${mapping[legacySlug]}`;
  }

  return `/${locale}/services/${legacySlug}`;
};

export const getLegacyServiceRedirects = () => [
  { source: "/ru/services/website-development", destination: "/ru/sozdanie-saitov-tashkent" },
  { source: "/ru/services/landing-page", destination: "/ru/lending-pod-klyuch-tashkent" },
  { source: "/ru/services/corporate-website", destination: "/ru/korporativny-sait-uzbekistan" },
  { source: "/ru/services/seo", destination: "/ru/seo-prodvizhenie-tashkent" },
  { source: "/ru/services/ecommerce", destination: "/ru/sait-dlya-ecommerce" },
  { source: "/uz/services/website-development", destination: "/uz/sozdanie-saitov-tashkent" },
  { source: "/uz/services/landing-page", destination: "/uz/lending-pod-klyuch-tashkent" },
  { source: "/uz/services/corporate-website", destination: "/uz/korporativny-sait-uzbekistan" },
  { source: "/uz/services/seo", destination: "/uz/seo-prodvizhenie-tashkent" },
  { source: "/uz/services/ecommerce", destination: "/uz/sait-dlya-ecommerce" },
];

export const marketingSlugs = marketingPagesByLocale.ru.map((page) => page.slug);
export const comparisonSlugs = comparisonPagesByLocale.ru.map((page) => page.slug);
export const blogSlugs = blogTopics.map((topic) => topic.slug);
export const regionCitySlugs = ["tashkent", "samarkand", "bukhara"];
export const regionPageSlug = "sozdanie-saitov";
export const caseSlugs = caseStudiesByLocale.ru.map((item) => item.slug);
