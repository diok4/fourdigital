"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggle from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

type NavLinkItem = {
  label: string;
  href: string;
};

type LanguageLink = {
  label: string;
  href: string;
  isActive: boolean;
};

type HeaderProps = {
  navLinks: NavLinkItem[];
  ctaLabel: string;
  languages: LanguageLink[];
  homeHref: string;
  navBaseHref?: string;
};

const Header = ({ navLinks, ctaLabel, languages, homeHref, navBaseHref }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);
  const withBase = (href: string) =>
    navBaseHref && href.startsWith("#") ? `${navBaseHref}${href}` : href;

  const activeLanguage = languages.find((language) => language.isActive) ?? languages[0];

  const getLocaleFromHref = (href: string) => {
    const segment = href.split("/")[1];
    return segment || "";
  };

  const flagForLocale = (locale: string) => {
    switch (locale) {
      case "ru":
        return "🇷🇺";
      case "uz":
        return "🇺🇿";
      case "en":
        return "🇬🇧";
      default:
        return "🌐";
    }
  };

  const LanguageMenu = ({ className }: { className?: string }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex h-10 items-center gap-2 rounded-full border border-border/60 bg-background/70 px-4 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground",
            className,
          )}
        >
          <span className="text-base" aria-hidden>
            {flagForLocale(getLocaleFromHref(activeLanguage?.href ?? ""))}
          </span>
          <span>{activeLanguage?.label}</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[140px] border border-border/60 bg-background/90 backdrop-blur-xl"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.href}
            asChild
            className={cn(
              "flex items-center gap-2 cursor-pointer",
              language.isActive && "text-foreground",
            )}
          >
            <Link href={language.href} onClick={handleLinkClick} className="flex items-center gap-2">
              <span className="text-base" aria-hidden>
                {flagForLocale(getLocaleFromHref(language.href))}
              </span>
              <span>{language.label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <nav className="glass-panel px-5 py-3 flex items-center justify-between bg-background/70 backdrop-blur-xl">
          <a href={homeHref} className="font-display font-semibold text-xl tracking-tight text-foreground">
            <span className="text-primary">Four</span>digital
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={withBase(link.href)}
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <LanguageMenu />
            <ThemeToggle />
            <a href={withBase("#contact")} className="magnetic-button text-sm">
              {ctaLabel}
            </a>
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
          <div className="glass-panel bg-background/70 backdrop-blur-2xl border border-border/60 px-6 py-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={withBase(link.href)}
                onClick={handleLinkClick}
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between">
              <LanguageMenu className="flex-1 justify-between" />
              <ThemeToggle className="ml-3" />
            </div>
            <a href={withBase("#contact")} className="magnetic-button text-sm w-full" onClick={handleLinkClick}>
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
