"use client";

import { FormEvent, useMemo, useState } from "react";

type LeadCaptureFormProps = {
  locale: "ru" | "uz";
  subjectContext: string;
};

const labels = {
  ru: {
    title: "Получить предложение",
    subtitle: "Оставьте контакты и задачу. Отправим план и смету в ближайший рабочий день.",
    name: "Имя",
    phone: "Телефон",
    service: "Услуга",
    budget: "Бюджет",
    timeline: "Срок",
    message: "Задача",
    submit: "Отправить запрос",
    success: "Почтовый клиент открыт с подготовленной заявкой.",
    serviceOptions: [
      "Создание сайта",
      "Лендинг",
      "Корпоративный сайт",
      "SEO",
      "Google Ads",
      "Другое",
    ],
    budgetOptions: ["до 3 млн сум", "3-7 млн сум", "7-15 млн сум", "15+ млн сум", "нужно обсудить"],
    timelineOptions: ["срочно (до 2 недель)", "1 месяц", "2-3 месяца", "гибкий срок"],
  },
  uz: {
    title: "Taklif olish",
    subtitle: "Kontakt va vazifani qoldiring. Yaqin ish kunida reja va smeta yuboramiz.",
    name: "Ism",
    phone: "Telefon",
    service: "Xizmat",
    budget: "Byudjet",
    timeline: "Muddat",
    message: "Vazifa",
    submit: "So'rov yuborish",
    success: "Tayyor so'rov bilan email mijoz ochildi.",
    serviceOptions: [
      "Sayt yaratish",
      "Landing",
      "Korporativ sayt",
      "SEO",
      "Google Ads",
      "Boshqa",
    ],
    budgetOptions: ["3 mln so'mgacha", "3-7 mln so'm", "7-15 mln so'm", "15+ mln so'm", "muhokama kerak"],
    timelineOptions: ["tez (2 haftagacha)", "1 oy", "2-3 oy", "moslashuvchan"],
  },
} as const;

const LeadCaptureForm = ({ locale, subjectContext }: LeadCaptureFormProps) => {
  const text = labels[locale];
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState<string>(text.serviceOptions[0]);
  const [budget, setBudget] = useState<string>(text.budgetOptions[0]);
  const [timeline, setTimeline] = useState<string>(text.timelineOptions[0]);
  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState("");

  const isValid = useMemo(() => name.trim().length > 1 && phone.trim().length > 6, [name, phone]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValid) return;

    const subject = locale === "ru" ? `Заявка с сайта: ${subjectContext}` : `Saytdan so'rov: ${subjectContext}`;
    const bodyLines = [
      `${text.name}: ${name}`,
      `${text.phone}: ${phone}`,
      `${text.service}: ${service}`,
      `${text.budget}: ${budget}`,
      `${text.timeline}: ${timeline}`,
      `${text.message}: ${message || "-"}`,
    ];

    const href = `mailto:sales@fourdigital.uz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      bodyLines.join("\n"),
    )}`;

    window.location.href = href;
    setNotice(text.success);
  };

  return (
    <div className="glass-panel p-7 md:p-8">
      <h3 className="font-display text-2xl text-foreground mb-2">{text.title}</h3>
      <p className="text-sm text-muted-foreground mb-6">{text.subtitle}</p>

      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col gap-2 text-sm text-muted-foreground">
          {text.name}
          <input
            className="h-11 rounded-xl border border-border bg-background px-3 text-foreground"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>

        <label className="flex flex-col gap-2 text-sm text-muted-foreground">
          {text.phone}
          <input
            className="h-11 rounded-xl border border-border bg-background px-3 text-foreground"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
          />
        </label>

        <label className="flex flex-col gap-2 text-sm text-muted-foreground">
          {text.service}
          <select
            className="h-11 rounded-xl border border-border bg-background px-3 text-foreground"
            value={service}
            onChange={(event) => setService(event.target.value)}
          >
            {text.serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm text-muted-foreground">
          {text.budget}
          <select
            className="h-11 rounded-xl border border-border bg-background px-3 text-foreground"
            value={budget}
            onChange={(event) => setBudget(event.target.value)}
          >
            {text.budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm text-muted-foreground md:col-span-2">
          {text.timeline}
          <select
            className="h-11 rounded-xl border border-border bg-background px-3 text-foreground"
            value={timeline}
            onChange={(event) => setTimeline(event.target.value)}
          >
            {text.timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm text-muted-foreground md:col-span-2">
          {text.message}
          <textarea
            className="min-h-28 rounded-xl border border-border bg-background px-3 py-2 text-foreground"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>

        <div className="md:col-span-2 flex flex-col gap-3">
          <button
            type="submit"
            disabled={!isValid}
            className="magnetic-button disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            {text.submit}
          </button>
          {notice ? <p className="text-xs text-muted-foreground">{notice}</p> : null}
        </div>
      </form>
    </div>
  );
};

export default LeadCaptureForm;
