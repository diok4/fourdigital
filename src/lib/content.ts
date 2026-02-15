import type { Locale } from "@/lib/i18n";

export type HomeContent = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  navLinks: { label: string; href: string }[];
  headerCta: string;
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  services: {
    eyebrow: string;
    title: string;
    highlight: string;
    linkLabel: string;
    allServicesLabel: string;
    allServicesHref: string;
    items: {
      title: string;
      description: string;
      href?: string;
      timeline?: string;
      price?: string;
    }[];
  };
  process: {
    eyebrow: string;
    title: string;
    highlight: string;
    stepLabel: string;
    steps: { title: string; description: string }[];
  };
  projectTypes: {
    eyebrow: string;
    title: string;
    highlight: string;
    items: {
      title: string;
      timeline: string;
      price: string;
      process: string[];
      description: string;
    }[];
    note: string;
  };
  portfolio: {
    eyebrow: string;
    title: string;
    highlight: string;
    viewCaseLabel: string;
    items: {
      title: string;
      category: string;
      description: string;
      href?: string;
      imageSrc?: string;
      imageAlt?: string;
    }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    highlight: string;
    items: { quote: string; name: string; role: string }[];
  };
  team: {
    eyebrow: string;
    title: string;
    highlight: string;
    items: { name: string; role: string; note: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    highlight: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    cta: string;
  };
  footer: {
    about: string;
    navTitle: string;
    contactTitle: string;
    socialTitle: string;
    location: string;
    notePrimary: string;
    noteSecondary: string;
  };
};

const navLinks = {
  ru: [
    { label: "Услуги", href: "#services" },
    { label: "Этапы", href: "#process" },
    { label: "Проекты", href: "#portfolio" },
    { label: "FAQ", href: "#faq" },
    { label: "Контакты", href: "#contact" },
  ],
  uz: [
    { label: "Xizmatlar", href: "#services" },
    { label: "Bosqichlar", href: "#process" },
    { label: "Loyihalar", href: "#portfolio" },
    { label: "FAQ", href: "#faq" },
    { label: "Aloqa", href: "#contact" },
  ],
  en: [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Work", href: "#portfolio" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
} satisfies Record<Locale, HomeContent["navLinks"]>;

const contentByLocale: Record<Locale, HomeContent> = {
  ru: {
    meta: {
      title: "Создание сайтов под ключ в Узбекистане",
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
    },
    navLinks: navLinks.ru,
    headerCta: "Обсудить проект",
    hero: {
      eyebrow: "Цифровое агентство в Узбекистане",
      title: "Создание сайтов под ключ",
      highlight: "в Узбекистане — SEO‑продвижение",
      description:
        "Fourdigital.uz — агентство по созданию сайтов под ключ: стратегия, дизайн и разработка, которые приводят клиентов. Помогаем брендам в Узбекистане выигрывать внимание и заявки.",
      primaryCta: "Запустить проект",
      secondaryCta: "Смотреть кейсы",
    },
    services: {
      eyebrow: "Что мы делаем",
      title: "Полный цикл",
      highlight: "создания сайтов",
      linkLabel: "Подробнее",
      allServicesLabel: "Все услуги",
      allServicesHref: "/ru/services",
      items: [
        {
          title: "Лендинги",
          description: "Одностраничные сайты под офферы, рекламу и быстрый запуск продаж.",
          timeline: "2-4 дня",
          price: "1 490 000 сум",
          href: "/ru/lending-pod-klyuch-tashkent",
        },
        {
          title: "Корпоративные сайты",
          description: "Сайт компании с услугами, кейсами и блоками доверия.",
          timeline: "5-10 дней",
          price: "2 490 000 сум",
          href: "/ru/korporativny-sait-uzbekistan",
        },
        {
          title: "SEO‑продвижение",
          description: "Техническая оптимизация, структура и контент для роста органики.",
          timeline: "30-60 дней",
          price: "3 490 000 сум",
          href: "/ru/seo-prodvizhenie-tashkent",
        },
      ],
    },
    process: {
      eyebrow: "Три этапа разработки",
      title: "Прозрачный путь к",
      highlight: "запуску",
      stepLabel: "Шаг",
      steps: [
        {
          title: "Старт и стратегия",
          description:
            "Погружаемся в нишу, фиксируем цели, структуру и метрики, чтобы сайт работал на продажи.",
        },
        {
          title: "Дизайн в коде",
          description:
            "Прорабатываем визуал сразу в браузере: быстрые итерации без Figma и лишней бюрократии.",
        },
        {
          title: "Разработка и запуск",
          description:
            "Собираем, тестируем и запускаем. Без платных CMS: чистый код или бесплатные решения при необходимости.",
        },
      ],
    },
    projectTypes: {
      eyebrow: "Типы проектов и сроки",
      title: "Основные",
      highlight: "направления",
      items: [
        {
          title: "Лендинг",
          timeline: "2-4 дня",
          price: "1 490 000 сум",
          process: ["Бриф", "Структура", "Дизайн в коде", "Запуск"],
          description: "Быстрый запуск оффера с фокусом на лиды и конверсию.",
        },
        {
          title: "Корпоративный сайт",
          timeline: "5-10 дней",
          price: "2 490 000 сум",
          process: ["Бриф", "Архитектура", "Дизайн в коде", "Разработка", "Запуск"],
          description: "Структура, доверие, услуги и кейсы в понятной навигации.",
        },
        {
          title: "CRM панель",
          timeline: "10-18 дней",
          price: "3 490 000 сум",
          process: ["Бриф", "UX карта", "Интерфейс", "Интеграции", "Запуск"],
          description: "Личный кабинет и CRM-панель для команды: статусы лидов, задачи и сквозная воронка в одном месте.",
        },
      ],
      note: "Сроки и стоимость зависят от объёма контента, количества страниц и интеграций.",
    },
    portfolio: {
      eyebrow: "Наши проекты",
      title: "Проекты, которые",
      highlight: "дают результат",
      viewCaseLabel: "Смотреть кейс →",
      items: [
        {
          title: "MedTech Future (MTF)",
          category: "Корпоративный сайт • Медицинские технологии",
          description:
            "Разработали сайт mtf.uz с сильным позиционированием, каталогом направлений и конверсионной подачей для B2B/B2G клиник.",
          href: "https://mtf.uz",
          imageSrc: "/portfolio/mtf.png",
          imageAlt: "Главный экран сайта MedTech Future (mtf.uz)",
        },
        {
          title: "Mir Matrasov (matras.uz)",
          category: "SEO оптимизация • E-commerce",
          description:
            "Для matras.uz выполнили SEO-оптимизацию: усилили структуру страниц, метаданные и внутреннюю перелинковку под коммерческие запросы.",
          href: "https://matras.uz",
          imageSrc: "/portfolio/mir-matrasov.png",
          imageAlt: "Главный экран сайта matras.uz после SEO-оптимизации",
        },
        {
          title: "Девелопер",
          category: "Сайт-витрина и лиды",
          description:
            "Собрали премиальный сайт и интегрировали CRM, чтобы отдел продаж работал быстрее.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Отзывы клиентов",
      title: "Нам доверяют",
      highlight: "результаты",
      items: [
        {
          quote: "Сайт вышел быстрее ожидаемого. Получили рост заявок уже в первый месяц запуска.",
          name: "Азиз К.",
          role: "Директор, мебельный бренд",
        },
        {
          quote: "Команда чётко держала сроки и предложила сильные улучшения по структуре и SEO.",
          name: "Шахноза Р.",
          role: "Маркетинг, девелопер",
        },
        {
          quote: "Простой процесс согласований и понятная аналитика. Рекомендуем как надёжного подрядчика.",
          name: "Ильяс М.",
          role: "Сооснователь, B2B сервис",
        },
        {
          quote: "Сайт стал основным каналом входящих. Понравилась скорость и прозрачность процесса.",
          name: "Самира Т.",
          role: "Руководитель продаж",
        },
        {
          quote: "Обновили позиционирование и структуру — конверсия выросла заметно уже через 2 недели.",
          name: "Рустам А.",
          role: "СЕО, сервисная компания",
        },
        {
          quote: "Сделали чистый интерфейс и быстро подключили аналитику. Всё понятно и по делу.",
          name: "Нодира С.",
          role: "Операционный директор",
        },
        {
          quote: "Внимание к деталям и аккуратный код. Проект готов к росту без переделок.",
          name: "Жасур Б.",
          role: "Тех. лидер, стартап",
        },
        {
          quote: "Нам помогли выделиться среди конкурентов и упростили путь клиента до заявки.",
          name: "Камола У.",
          role: "Маркетинг, B2C бренд",
        },
      ],
    },
    team: {
      eyebrow: "Команда профессионалов",
      title: "Наша",
      highlight: "команда",
      items: [
        {
          name: "Фаррух",
          role: "Стратегия и развитие",
          note: "Фокус на бизнес‑целях и росте заявок.",
        },
        {
          name: "Диана",
          role: "UX/UI и бренд",
          note: "Понятные сценарии и сильная визуальная система.",
        },
        {
          name: "Азиз",
          role: "Frontend и интеграции",
          note: "Быстрые интерфейсы и чистый код без лишних слоёв.",
        },
        {
          name: "Мадина",
          role: "SEO и аналитика",
          note: "Техническая оптимизация и рост органики.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Часто задаваемые",
      highlight: "вопросы",
      items: [
        {
          question: "Какой бюджет нужен на сайт?",
          answer: "Стоимость зависит от задач, количества страниц и интеграций. После брифа даём точную смету.",
        },
        {
          question: "Почему дизайн без Figma?",
          answer: "Мы проектируем сразу в браузере — это быстрее и позволяет сразу видеть, как всё работает на разных экранах.",
        },
        {
          question: "Используете платные CMS?",
          answer: "Нет. Если нужна админка — используем бесплатные решения или делаем лёгкую кастомную панель.",
        },
        {
          question: "Что нужно подготовить со стороны клиента?",
          answer: "Цели проекта, контент и примеры сайтов, которые вам нравятся. Остальное соберём вместе.",
        },
        {
          question: "Как устроено SEO‑продвижение?",
          answer: "Стартуем с технической оптимизации, затем семантика, контент и регулярные отчёты по росту.",
        },
      ],
    },
    contact: {
      eyebrow: "Свяжитесь с нами",
      title: "Готовы к сильному",
      highlight: "перезапуску сайта?",
      description: "Расскажите о задаче — мы предложим решение и план запуска в короткие сроки.",
      cta: "Обсудить проект",
    },
    footer: {
      about: "Создаём сайты под ключ и SEO‑продвижение в Узбекистане. Быстро, прозрачно, с фокусом на результат.",
      navTitle: "Навигация",
      contactTitle: "Контакты",
      socialTitle: "Соцсети",
      location: "Узбекистан",
      notePrimary: "© 2026 Fourdigital.uz. Все права защищены.",
      noteSecondary: "Работаем по договору и фиксируем сроки в брифе.",
    },
  },
  uz: {
    meta: {
      title: "O'zbekistonda tayyor sayt yaratish",
      description:
        "O'zbekistonda tayyor sayt yaratish: strategiya, dizayn va ishlab chiqish orqali mijoz olib keladigan yechimlar.",
      keywords: [
        "sayt yaratish",
        "saytlar yaratish",
        "sayt ishlab chiqish",
        "SEO продвижение",
        "digital agentlik",
        "O'zbekiston",
        "Toshkent",
      ],
    },
    navLinks: navLinks.uz,
    headerCta: "Loyihani muhokama qilish",
    hero: {
      eyebrow: "O'zbekistondagi raqamli agentlik",
      title: "Saytlarni to'liq yaratish",
      highlight: "O'zbekistonda — SEO‑yuksalish",
      description:
        "Fourdigital.uz — to'liq sayt yaratish agentligi: strategiya, dizayn va ishlab chiqish orqali mijoz olib keladigan yechimlar. O'zbekistonda brendlarga e'tibor va arizalarni yutishda yordam beramiz.",
      primaryCta: "Loyihani ishga tushirish",
      secondaryCta: "Keyslarga qarang",
    },
    services: {
      eyebrow: "Nima qilamiz",
      title: "Sayt yaratish",
      highlight: "to'liq sikli",
      linkLabel: "Batafsil",
      allServicesLabel: "Barcha xizmatlar",
      allServicesHref: "/uz/services",
      items: [
        {
          title: "Landinglar",
          description: "Reklama va tez savdo uchun bir sahifali saytlar.",
          timeline: "2-4 kun",
          price: "1 490 000 so'm",
          href: "/uz/lending-pod-klyuch-tashkent",
        },
        {
          title: "Korporativ saytlar",
          description: "Xizmatlar, keyslar va ishonch bloklari bilan kompaniya sayti.",
          timeline: "5-10 kun",
          price: "2 490 000 so'm",
          href: "/uz/korporativny-sait-uzbekistan",
        },
        {
          title: "SEO rivojlantirish",
          description: "Texnik optimizatsiya va kontent orqali organik o'sish.",
          timeline: "30-60 kun",
          price: "3 490 000 so'm",
          href: "/uz/seo-prodvizhenie-tashkent",
        },
      ],
    },
    process: {
      eyebrow: "Uch bosqichli ishlab chiqish",
      title: "Ishga tushirishgacha",
      highlight: "aniq yo'l",
      stepLabel: "Qadam",
      steps: [
        {
          title: "Boshlanish va strategiya",
          description:
            "Bozorni chuqur tushunamiz, maqsad, tuzilma va metrikalarni belgilaymiz — sayt sotuvga ishlaydi.",
        },
        {
          title: "Kodda dizayn",
          description:
            "Vizualni brauzerda tayyorlaymiz: tez iteratsiya, Figma va ortiqcha byurokratiyasiz.",
        },
        {
          title: "Ishlab chiqish va ishga tushirish",
          description:
            "Yig'amiz, test qilamiz va ishga tushiramiz. Pullik CMSsiz: toza kod yoki bepul yechimlar.",
        },
      ],
    },
    projectTypes: {
      eyebrow: "Loyiha turlari va muddatlar",
      title: "Asosiy",
      highlight: "yo'nalishlar",
      items: [
        {
          title: "Landing",
          timeline: "2-4 kun",
          price: "1 490 000 so'm",
          process: ["Brif", "Struktura", "Kodda dizayn", "Ishga tushirish"],
          description: "Lid va konversiyaga yo'naltirilgan tezkor ishga tushirish.",
        },
        {
          title: "Korporativ sayt",
          timeline: "5-10 kun",
          price: "2 490 000 so'm",
          process: ["Brif", "Arxitektura", "Kodda dizayn", "Ishlab chiqish", "Ishga tushirish"],
          description: "Tuzilma, ishonch, xizmatlar va keyslar — sodda navigatsiyada.",
        },
        {
          title: "CRM panel",
          timeline: "10-18 kun",
          price: "3 490 000 so'm",
          process: ["Brif", "UX xarita", "Interfeys", "Integratsiyalar", "Ishga tushirish"],
          description: "Jamoa uchun CRM panel: lead statuslari, vazifalar va bitta joyda aniq funnel boshqaruvi.",
        },
      ],
      note: "Muddat va narx kontent hajmi, sahifalar soni va integratsiyalarga bog'liq.",
    },
    portfolio: {
      eyebrow: "Loyihalar",
      title: "Natija",
      highlight: "beradigan ishlar",
      viewCaseLabel: "Keysni ko'rish →",
      items: [
        {
          title: "MedTech Future (MTF)",
          category: "Korporativ sayt • Tibbiyot texnologiyalari",
          description: "mtf.uz uchun kuchli pozitsiyalash va konversiyaga yo'naltirilgan korporativ sayt yaratdik.",
          href: "https://mtf.uz",
          imageSrc: "/portfolio/mtf.png",
          imageAlt: "MedTech Future (mtf.uz) bosh sahifa preview",
        },
        {
          title: "Mir Matrasov (matras.uz)",
          category: "SEO optimizatsiya • E-commerce",
          description:
            "matras.uz uchun texnik va kontent SEO optimizatsiyasini bajardik: sahifa strukturasi, metadata va ichki linking kuchaytirildi.",
          href: "https://matras.uz",
          imageSrc: "/portfolio/mir-matrasov.png",
          imageAlt: "SEO optimizatsiyadan keyingi matras.uz bosh sahifasi",
        },
        {
          title: "Devloper",
          category: "Vitrina sayt va lidlar",
          description: "Premium sayt va CRM integratsiyasi orqali savdo bo'limini tezlashtirdik.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Mijozlar fikri",
      title: "Natijalar",
      highlight: "bizga ishonib topshiriladi",
      items: [
        {
          quote: "Sayt kutilganidan tezroq tayyor bo'ldi. Birinchi oydayoq arizalar o'sdi.",
          name: "Aziz K.",
          role: "Direktor, mebel brendi",
        },
        {
          quote: "Jamoa muddatlarni aniq ushladi va tuzilma hamda SEO bo'yicha kuchli taklif berdi.",
          name: "Shahnoza R.",
          role: "Marketing, devloper",
        },
        {
          quote: "Kelishish jarayoni sodda, analitika tushunarli. Ishonchli hamkor sifatida tavsiya qilamiz.",
          name: "Ilyas M.",
          role: "Hammuasoschi, B2B servis",
        },
        {
          quote: "Sayt kiruvchi mijozlarning asosiy kanali bo'ldi. Tezlik va shaffoflik yoqdi.",
          name: "Samira T.",
          role: "Savdo bo'limi rahbari",
        },
        {
          quote: "Pozitsiya va tuzilmani yangiladik — 2 hafta ichida konversiya sezilarli oshdi.",
          name: "Rustam A.",
          role: "CEO, servis kompaniya",
        },
        {
          quote: "Toza interfeys va tez analitika ulandi. Hammasi tushunarli va aniq.",
          name: "Nodira S.",
          role: "Operatsion direktor",
        },
        {
          quote: "Detallarga e'tibor va saranjom kod. Loyiha kengayishga tayyor.",
          name: "Jasur B.",
          role: "Tech lead, startap",
        },
        {
          quote: "Raqobatchilar orasida ajralib turishga va mijoz yo'lini qisqartirishga yordam berishdi.",
          name: "Kamola U.",
          role: "Marketing, B2C brend",
        },
      ],
    },
    team: {
      eyebrow: "Professionallar jamoasi",
      title: "",
      highlight: "Fourdigital jamoasi",
      items: [
        {
          name: "Farruh",
          role: "Strategiya va rivojlanish",
          note: "Biznes maqsadlari va arizalar o'sishiga fokus.",
        },
        {
          name: "Diana",
          role: "UX/UI va brend",
          note: "Tushunarli ssenariylar va kuchli vizual tizim.",
        },
        {
          name: "Aziz",
          role: "Frontend va integratsiyalar",
          note: "Tezkor interfeyslar va ortiqcha qatlamlarsiz toza kod.",
        },
        {
          name: "Madina",
          role: "SEO va analitika",
          note: "Texnik optimizatsiya va organik o'sish.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Ko'p",
      highlight: "so'raladigan savollar",
      items: [
        {
          question: "Sayt uchun qanday budjet kerak?",
          answer: "Narx vazifa, sahifalar soni va integratsiyalarga bog'liq. Brifdan so'ng aniq smeta beramiz.",
        },
        {
          question: "Nega dizayn Figma'siz?",
          answer: "Dizaynni brauzerda tayyorlaymiz — bu tezroq va turli ekranlarda qanday ishlashini ko'rsatadi.",
        },
        {
          question: "Pullik CMS ishlatasizmi?",
          answer: "Yo'q. Admin panel kerak bo'lsa, bepul yechimlar yoki yengil custom panel qilamiz.",
        },
        {
          question: "Mijoz tomondan nimalar kerak?",
          answer: "Loyiha maqsadlari, kontent va yoqadigan saytlar misoli. Qolganini birga yig'amiz.",
        },
        {
          question: "SEO qanday olib boriladi?",
          answer: "Avval texnik optimizatsiya, so'ng semantika, kontent va muntazam o'sish hisobotlari.",
        },
      ],
    },
    contact: {
      eyebrow: "Biz bilan bog'laning",
      title: "Saytni kuchli",
      highlight: "qayta ishga tushirishga tayyormisiz?",
      description: "Vazifani yozing — biz yechim va tezkor ishga tushirish rejasini taklif qilamiz.",
      cta: "Loyihani muhokama qilish",
    },
    footer: {
      about: "O'zbekistonda tayyor saytlar va SEO‑yuksalish. Tez, shaffof va natijaga yo'naltirilgan.",
      navTitle: "Navigatsiya",
      contactTitle: "Aloqa",
      socialTitle: "Ijtimoiy tarmoqlar",
      location: "O'zbekiston",
      notePrimary: "© 2026 Fourdigital.uz. Barcha huquqlar himoyalangan.",
      noteSecondary: "Shartnoma asosida ishlaymiz va muddatlarni brifda belgilaymiz.",
    },
  },
  en: {
    meta: {
      title: "Website development in Uzbekistan",
      description:
        "Website development in Uzbekistan: strategy, design, and engineering that bring qualified leads.",
      keywords: [
        "website development",
        "website design",
        "SEO",
        "digital agency",
        "Uzbekistan",
        "Tashkent",
      ],
    },
    navLinks: navLinks.en,
    headerCta: "Discuss a project",
    hero: {
      eyebrow: "Digital agency in Uzbekistan",
      title: "Website development",
      highlight: "in Uzbekistan — SEO growth",
      description:
        "Fourdigital.uz is a full‑cycle web agency: strategy, design, and engineering that bring qualified leads. We help brands in Uzbekistan win attention and enquiries.",
      primaryCta: "Start a project",
      secondaryCta: "View case studies",
    },
    services: {
      eyebrow: "What we do",
      title: "Full cycle",
      highlight: "website creation",
      linkLabel: "Learn more",
      allServicesLabel: "All services",
      allServicesHref: "/en/services",
      items: [
        {
          title: "Landing pages",
          description: "Single‑page sites for campaigns, offers, and fast validation.",
          timeline: "2-4 days",
          price: "1 490 000 UZS",
          href: "/en/services/landing-page",
        },
        {
          title: "Corporate websites",
          description: "Company websites with services, case studies, and trust blocks.",
          timeline: "5-10 days",
          price: "2 490 000 UZS",
          href: "/en/services/corporate-website",
        },
        {
          title: "SEO services",
          description: "Technical optimization and content for organic growth.",
          timeline: "30-60 days",
          price: "3 490 000 UZS",
          href: "/en/services/seo",
        },
      ],
    },
    process: {
      eyebrow: "Three delivery stages",
      title: "A transparent path",
      highlight: "to launch",
      stepLabel: "Step",
      steps: [
        {
          title: "Discovery and strategy",
          description:
            "We dive into the niche, set goals, structure, and metrics so the website supports sales.",
        },
        {
          title: "Design in code",
          description:
            "We craft the visual system directly in the browser for fast iterations without Figma overhead.",
        },
        {
          title: "Build and launch",
          description:
            "We build, test, and launch. No paid CMS: clean code or free solutions when needed.",
        },
      ],
    },
    projectTypes: {
      eyebrow: "Project types and timelines",
      title: "Core",
      highlight: "directions",
      items: [
        {
          title: "Landing page",
          timeline: "2-4 days",
          price: "1 490 000 UZS",
          process: ["Brief", "Structure", "Design in code", "Launch"],
          description: "Fast launch focused on leads and conversion.",
        },
        {
          title: "Corporate website",
          timeline: "5-10 days",
          price: "2 490 000 UZS",
          process: ["Brief", "Architecture", "Design in code", "Development", "Launch"],
          description: "Clear navigation with trust, services, and case studies.",
        },
        {
          title: "CRM dashboard",
          timeline: "10-18 days",
          price: "3 490 000 UZS",
          process: ["Brief", "UX map", "Interface", "Integrations", "Launch"],
          description: "A CRM workspace for teams: lead statuses, tasks, and a clear pipeline in one place.",
        },
      ],
      note: "Timelines and cost depend on content volume, number of pages, and integrations.",
    },
    portfolio: {
      eyebrow: "Case studies",
      title: "Projects that",
      highlight: "deliver results",
      viewCaseLabel: "View case →",
      items: [
        {
          title: "MedTech Future (MTF)",
          category: "Corporate website • Medical technologies",
          description: "Built mtf.uz with clear positioning, service storytelling, and conversion-focused structure.",
          href: "https://mtf.uz",
          imageSrc: "/portfolio/mtf.png",
          imageAlt: "MedTech Future (mtf.uz) homepage preview",
        },
        {
          title: "Mir Matrasov (matras.uz)",
          category: "SEO optimization • Ecommerce",
          description:
            "Completed SEO optimization for matras.uz, improving page structure, metadata, and internal linking for commercial intent.",
          href: "https://matras.uz",
          imageSrc: "/portfolio/mir-matrasov.png",
          imageAlt: "matras.uz homepage after SEO optimization",
        },
        {
          title: "Developer",
          category: "Showcase site and leads",
          description: "Built a premium site and integrated CRM to speed up the sales team.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Client feedback",
      title: "Results",
      highlight: "trusted by clients",
      items: [
        {
          quote: "The site shipped faster than expected. We saw more enquiries in the first month.",
          name: "Aziz K.",
          role: "Director, furniture brand",
        },
        {
          quote: "The team met deadlines and suggested strong improvements for structure and SEO.",
          name: "Shahnoza R.",
          role: "Marketing, developer",
        },
        {
          quote: "Simple approvals and clear analytics. We recommend them as a reliable partner.",
          name: "Ilyas M.",
          role: "Co-founder, B2B service",
        },
        {
          quote: "The website became our main inbound channel. Loved the speed and transparency.",
          name: "Samira T.",
          role: "Head of sales",
        },
        {
          quote: "We refreshed positioning and structure — conversion increased within two weeks.",
          name: "Rustam A.",
          role: "CEO, service company",
        },
        {
          quote: "Clean interface and quick analytics setup. Everything is clear and focused.",
          name: "Nodira S.",
          role: "Operations director",
        },
        {
          quote: "Attention to detail and clean code. The project is ready to scale.",
          name: "Jasur B.",
          role: "Tech lead, startup",
        },
        {
          quote: "They helped us stand out and streamlined the client journey to enquiry.",
          name: "Kamola U.",
          role: "Marketing, B2C brand",
        },
      ],
    },
    team: {
      eyebrow: "Professional team",
      title: "",
      highlight: "Fourdigital team",
      items: [
        {
          name: "Farrukh",
          role: "Strategy and growth",
          note: "Focused on business goals and lead growth.",
        },
        {
          name: "Diana",
          role: "UX/UI and brand",
          note: "Clear journeys and a strong visual system.",
        },
        {
          name: "Aziz",
          role: "Frontend and integrations",
          note: "Fast interfaces and clean code without extra layers.",
        },
        {
          name: "Madina",
          role: "SEO and analytics",
          note: "Technical optimization and organic growth.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently",
      highlight: "asked questions",
      items: [
        {
          question: "What budget is needed for a website?",
          answer: "Cost depends on goals, page count, and integrations. After the brief, we provide an exact estimate.",
        },
        {
          question: "Why design without Figma?",
          answer: "We design directly in the browser — faster iterations and immediate cross‑device testing.",
        },
        {
          question: "Do you use paid CMS?",
          answer: "No. If an admin panel is needed, we use free solutions or build a lightweight custom panel.",
        },
        {
          question: "What should the client prepare?",
          answer: "Project goals, content, and examples you like. We take care of the rest together.",
        },
        {
          question: "How is SEO handled?",
          answer: "We start with technical optimization, then semantics, content, and regular growth reports.",
        },
      ],
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Ready for a strong",
      highlight: "website relaunch?",
      description: "Tell us about the task — we will propose a solution and a fast launch plan.",
      cta: "Discuss a project",
    },
    footer: {
      about: "We build full‑cycle websites and SEO growth in Uzbekistan. Fast, transparent, and result‑driven.",
      navTitle: "Navigation",
      contactTitle: "Contacts",
      socialTitle: "Social",
      location: "Uzbekistan",
      notePrimary: "© 2026 Fourdigital.uz. All rights reserved.",
      noteSecondary: "We work under contract and fix timelines in the brief.",
    },
  },
};

export const getHomeContent = (locale: Locale): HomeContent =>
  contentByLocale[locale] ?? contentByLocale.ru;

export const getFaqItems = (locale: Locale) => getHomeContent(locale).faq.items;
