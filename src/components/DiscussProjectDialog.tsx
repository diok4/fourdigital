"use client";

import { type FormEvent, useId, useMemo, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site";

type SupportedLocale = "ru" | "uz" | "en";
type FormField = "name" | "phone" | "email" | "message";

type DiscussProjectDialogProps = {
  locale: string;
  triggerLabel: string;
  triggerClassName?: string;
  onTriggerClick?: () => void;
};

const copyByLocale: Record<
  SupportedLocale,
  {
    title: string;
    description: string;
    nameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    messageLabel: string;
    submitLabel: string;
    messagePlaceholder: string;
    subjectPrefix: string;
    nameError: string;
    phoneError: string;
    emailError: string;
    messageError: string;
  }
> = {
  ru: {
    title: "Обсудить проект",
    description: "Заполните форму и откроется письмо на вашу почту для отправки нам.",
    nameLabel: "Имя",
    phoneLabel: "Телефон",
    emailLabel: "Email",
    messageLabel: "Сообщение",
    submitLabel: "Отправить",
    messagePlaceholder: "Кратко опишите задачу, сроки и бюджет",
    subjectPrefix: "Новая заявка с сайта",
    nameError: "Введите имя (минимум 2 символа).",
    phoneError: "Введите корректный номер телефона.",
    emailError: "Введите корректный email.",
    messageError: "Опишите задачу подробнее (минимум 10 символов).",
  },
  uz: {
    title: "Loyihani muhokama qilish",
    description: "Formani to'ldiring, shundan so'ng bizga yuborish uchun email oynasi ochiladi.",
    nameLabel: "Ism",
    phoneLabel: "Telefon",
    emailLabel: "Email",
    messageLabel: "Xabar",
    submitLabel: "Yuborish",
    messagePlaceholder: "Vazifa, muddat va byudjetni qisqacha yozing",
    subjectPrefix: "Saytdan yangi so'rov",
    nameError: "Ismni kiriting (kamida 2 ta belgi).",
    phoneError: "Telefon raqamini to'g'ri kiriting.",
    emailError: "Email manzilni to'g'ri kiriting.",
    messageError: "Vazifani batafsil yozing (kamida 10 ta belgi).",
  },
  en: {
    title: "Discuss a project",
    description: "Fill in the form and your email app will open with a ready message to us.",
    nameLabel: "Name",
    phoneLabel: "Phone",
    emailLabel: "Email",
    messageLabel: "Message",
    submitLabel: "Send",
    messagePlaceholder: "Briefly describe scope, timeline, and budget",
    subjectPrefix: "New website enquiry",
    nameError: "Enter a valid name (at least 2 characters).",
    phoneError: "Enter a valid phone number.",
    emailError: "Enter a valid email address.",
    messageError: "Describe your request in at least 10 characters.",
  },
};

const resolveLocale = (value: string): SupportedLocale => {
  if (value === "uz" || value === "en") return value;
  return "ru";
};

const DiscussProjectDialog = ({
  locale,
  triggerLabel,
  triggerClassName = "magnetic-button text-sm",
  onTriggerClick,
}: DiscussProjectDialogProps) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Partial<Record<FormField, string>>>({});
  const idBase = useId();

  const normalizedLocale = useMemo(() => resolveLocale(locale), [locale]);
  const copy = copyByLocale[normalizedLocale];

  const validateField = (field: FormField, value: string): string | undefined => {
    switch (field) {
      case "name":
        return value.trim().length >= 2 ? undefined : copy.nameError;
      case "phone": {
        const digits = value.replace(/\D/g, "");
        return digits.length >= 9 && digits.length <= 15 ? undefined : copy.phoneError;
      }
      case "email": {
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value.trim());
        return isValidEmail ? undefined : copy.emailError;
      }
      case "message":
        return value.trim().length >= 10 ? undefined : copy.messageError;
      default:
        return undefined;
    }
  };

  const validateForm = (): Partial<Record<FormField, string>> => {
    const nextErrors: Partial<Record<FormField, string>> = {};
    const fields: Array<[FormField, string]> = [
      ["name", name],
      ["phone", phone],
      ["email", email],
      ["message", message],
    ];

    fields.forEach(([field, value]) => {
      const error = validateField(field, value);
      if (error) {
        nextErrors[field] = error;
      }
    });

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const subject = `${copy.subjectPrefix}: ${name}`;
    const bodyLines = [
      `${copy.nameLabel}: ${name}`,
      `${copy.phoneLabel}: ${phone}`,
      `${copy.emailLabel}: ${email || "-"}`,
      "",
      `${copy.messageLabel}:`,
      message,
    ];

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className={triggerClassName}
          onClick={() => {
            onTriggerClick?.();
          }}
        >
          {triggerLabel}
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-[calc(100%-1rem)] sm:max-w-xl max-h-[85vh] overflow-y-auto border-border/70 bg-background/95 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">{copy.title}</DialogTitle>
          <DialogDescription>{copy.description}</DialogDescription>
        </DialogHeader>

        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor={`${idBase}-name`} className="text-sm text-muted-foreground">
                {copy.nameLabel}
              </label>
              <Input
                id={`${idBase}-name`}
                value={name}
                onChange={(event) => {
                  const value = event.target.value;
                  setName(value);
                  if (errors.name) {
                    setErrors((prev) => ({ ...prev, name: validateField("name", value) }));
                  }
                }}
                onBlur={(event) => {
                  const value = event.target.value;
                  setErrors((prev) => ({ ...prev, name: validateField("name", value) }));
                }}
                aria-invalid={Boolean(errors.name)}
                className={errors.name ? "border-destructive focus-visible:ring-destructive" : undefined}
                required
                autoComplete="name"
              />
              {errors.name ? <p className="text-xs text-destructive">{errors.name}</p> : null}
            </div>
            <div className="space-y-2">
              <label htmlFor={`${idBase}-phone`} className="text-sm text-muted-foreground">
                {copy.phoneLabel}
              </label>
              <Input
                id={`${idBase}-phone`}
                type="tel"
                value={phone}
                onChange={(event) => {
                  const value = event.target.value;
                  setPhone(value);
                  if (errors.phone) {
                    setErrors((prev) => ({ ...prev, phone: validateField("phone", value) }));
                  }
                }}
                onBlur={(event) => {
                  const value = event.target.value;
                  setErrors((prev) => ({ ...prev, phone: validateField("phone", value) }));
                }}
                aria-invalid={Boolean(errors.phone)}
                className={errors.phone ? "border-destructive focus-visible:ring-destructive" : undefined}
                required
                autoComplete="tel"
              />
              {errors.phone ? <p className="text-xs text-destructive">{errors.phone}</p> : null}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor={`${idBase}-email`} className="text-sm text-muted-foreground">
              {copy.emailLabel}
            </label>
            <Input
              id={`${idBase}-email`}
              type="email"
              value={email}
              onChange={(event) => {
                const value = event.target.value;
                setEmail(value);
                if (errors.email) {
                  setErrors((prev) => ({ ...prev, email: validateField("email", value) }));
                }
              }}
              onBlur={(event) => {
                const value = event.target.value;
                setErrors((prev) => ({ ...prev, email: validateField("email", value) }));
              }}
              aria-invalid={Boolean(errors.email)}
              className={errors.email ? "border-destructive focus-visible:ring-destructive" : undefined}
              required
              autoComplete="email"
            />
            {errors.email ? <p className="text-xs text-destructive">{errors.email}</p> : null}
          </div>

          <div className="space-y-2">
            <label htmlFor={`${idBase}-message`} className="text-sm text-muted-foreground">
              {copy.messageLabel}
            </label>
            <Textarea
              id={`${idBase}-message`}
              value={message}
              onChange={(event) => {
                const value = event.target.value;
                setMessage(value);
                if (errors.message) {
                  setErrors((prev) => ({ ...prev, message: validateField("message", value) }));
                }
              }}
              onBlur={(event) => {
                const value = event.target.value;
                setErrors((prev) => ({ ...prev, message: validateField("message", value) }));
              }}
              placeholder={copy.messagePlaceholder}
              aria-invalid={Boolean(errors.message)}
              className={`min-h-28 ${errors.message ? "border-destructive focus-visible:ring-destructive" : ""}`}
              required
            />
            {errors.message ? <p className="text-xs text-destructive">{errors.message}</p> : null}
          </div>

          <button
            type="submit"
            className="w-full rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-display text-primary transition-colors hover:border-primary hover:bg-primary/20"
          >
            {copy.submitLabel}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DiscussProjectDialog;
