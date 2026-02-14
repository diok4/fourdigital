import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <nav className="glass-panel px-5 py-3 flex items-center justify-between">
          <a href="/" className="font-display font-semibold text-xl tracking-tight text-foreground">
            <span className="text-primary">Four</span>digital
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Услуги
            </a>
            <a href="#process" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Этапы
            </a>
            <a href="#types" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Типы
            </a>
            <a href="#portfolio" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Проекты
            </a>
            <a href="#faq" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              FAQ
            </a>
            <a href="#contact" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Контакты
            </a>
          </div>

          <div className="hidden md:flex">
            <button className="magnetic-button text-sm">Обсудить проект</button>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-border/60 text-foreground"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        <div className={`md:hidden mt-3 ${isOpen ? "block" : "hidden"}`}>
          <div className="glass-panel px-6 py-5 flex flex-col gap-4">
            <a href="#services" onClick={handleLinkClick} className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Услуги
            </a>
            <a href="#process" onClick={handleLinkClick} className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Этапы
            </a>
            <a href="#types" onClick={handleLinkClick} className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Типы
            </a>
            <a href="#portfolio" onClick={handleLinkClick} className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Проекты
            </a>
            <a href="#faq" onClick={handleLinkClick} className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
            <a href="#contact" onClick={handleLinkClick} className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Контакты
            </a>
            <button className="magnetic-button text-sm w-full" onClick={handleLinkClick}>
              Обсудить проект
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
