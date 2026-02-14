import { motion } from "framer-motion";
import { Instagram, Linkedin, Send, PenTool, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 px-6 md:px-12 lg:px-20 border-t border-border/50"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="font-display font-semibold text-2xl tracking-tight text-foreground mb-4">
            <span className="text-primary">Four</span>digital
          </div>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            Создаём сайты под ключ и SEO‑продвижение в Узбекистане. Быстро, прозрачно, с фокусом на результат.
          </p>
        </div>

        <div>
          <div className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Навигация
          </div>
          <div className="flex flex-col gap-2">
            <a href="#services" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Услуги
            </a>
            <a href="#process" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Этапы
            </a>
            <a href="#portfolio" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Проекты
            </a>
            <a href="#faq" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
            <a href="#contact" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Контакты
            </a>
          </div>
        </div>

        <div>
          <div className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Контакты
          </div>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" /> +998 90 000 00 00
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" /> hello@fourdigital.uz
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> Ташкент, Узбекистан
            </span>
          </div>
        </div>

        <div>
          <div className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Соцсети
          </div>
          <div className="flex flex-col gap-3">
            <a href="#" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Send className="w-4 h-4 text-primary" /> Telegram
            </a>
            <a href="#" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="w-4 h-4 text-primary" /> Instagram
            </a>
            <a href="#" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-4 h-4 text-primary" /> LinkedIn
            </a>
            <a href="#" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <PenTool className="w-4 h-4 text-primary" /> Behance
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-muted-foreground">
          © 2026 Fourdigital.uz. Все права защищены.
        </p>
        <p className="font-body text-xs text-muted-foreground">
          Работаем по договору и фиксируем сроки в брифе.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
