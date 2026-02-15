"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Send, PenTool, Phone, Mail, MapPin, type LucideIcon } from "lucide-react";
import { siteConfig } from "@/lib/site";

type NavLinkItem = {
  label: string;
  href: string;
};

type FooterProps = {
  about: string;
  navTitle: string;
  contactTitle: string;
  socialTitle: string;
  location: string;
  navLinks: NavLinkItem[];
  notePrimary: string;
  noteSecondary: string;
};

const defaultSocial = [
  { label: "Telegram", href: "#", icon: Send },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Behance", href: "#", icon: PenTool },
];

const iconMap: Record<string, LucideIcon> = {
  Telegram: Send,
  Instagram,
  LinkedIn: Linkedin,
  Behance: PenTool,
};

const Footer = ({ about, navTitle, contactTitle, socialTitle, location, navLinks, notePrimary, noteSecondary }: FooterProps) => {
  const socialLinks =
    siteConfig.socialLinks.length > 0
      ? siteConfig.socialLinks.map((link) => ({
          ...link,
          icon: iconMap[link.label] ?? Send,
        }))
      : defaultSocial;

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
            {about}
          </p>
        </div>

        <div>
          <div className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            {navTitle}
          </div>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            {contactTitle}
          </div>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <a className="inline-flex items-center gap-2 hover:text-foreground transition-colors" href={`tel:${siteConfig.phone}`}>
              <Phone className="w-4 h-4 text-primary" /> {siteConfig.phone}
            </a>
            <a className="inline-flex items-center gap-2 hover:text-foreground transition-colors" href={`mailto:${siteConfig.email}`}>
              <Mail className="w-4 h-4 text-primary" /> {siteConfig.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> {location}
            </span>
          </div>
        </div>

        <div>
          <div className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            {socialTitle}
          </div>
          <div className="flex flex-col gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon className="w-4 h-4 text-primary" /> {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-muted-foreground">
          {notePrimary}
        </p>
        <p className="font-body text-xs text-muted-foreground">
          {noteSecondary}
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
