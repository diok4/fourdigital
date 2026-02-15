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
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 border-t border-white/30 bg-[linear-gradient(135deg,hsl(174_60%_39%)_0%,hsl(185_66%_47%)_100%)] text-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
        <div>
          <div className="font-display font-semibold text-2xl sm:text-3xl tracking-tight text-white mb-4">
            <span className="text-white/90">Four</span>digital
          </div>
          <p className="font-body text-base text-white/90 leading-relaxed">
            {about}
          </p>
        </div>

        <div>
          <div className="font-display text-base uppercase tracking-[0.24em] text-white/80 mb-4">
            {navTitle}
          </div>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="font-body text-base text-white/88 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-display text-base uppercase tracking-[0.24em] text-white/80 mb-4">
            {contactTitle}
          </div>
          <div className="flex flex-col gap-3 text-base text-white/88">
            <a className="inline-flex items-center gap-2 hover:text-white transition-colors" href={`tel:${siteConfig.phone}`}>
              <Phone className="w-4 h-4 text-white/85" /> {siteConfig.phoneDisplay}
            </a>
            <a className="inline-flex items-center gap-2 hover:text-white transition-colors" href={`mailto:${siteConfig.email}`}>
              <Mail className="w-4 h-4 text-white/85" /> {siteConfig.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-white/85" /> {location}
            </span>
          </div>
        </div>

        <div>
          <div className="font-display text-base uppercase tracking-[0.24em] text-white/80 mb-4">
            {socialTitle}
          </div>
          <div className="flex flex-col gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-2 text-base text-white/88 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4 text-white/85" /> {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/30 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
        <p className="font-body text-sm text-white/80">
          {notePrimary}
        </p>
        <p className="font-body text-sm text-white/80">
          {noteSecondary}
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
