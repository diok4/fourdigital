"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  href?: string;
  timeline?: string;
  price?: string;
  linkLabel?: string;
}

const ServiceCard = ({ icon: Icon, title, description, index, href, timeline, price, linkLabel }: ServiceCardProps) => {
  const renderPrice = (value: string) => {
    const normalized = value.replace(/\u00A0/g, " ").trim();
    const match = normalized.match(/^(\d{1,3}(?: \d{3})*) (\d{3})(.*)$/);

    if (!match) {
      return <span className="font-display text-lg sm:text-xl text-foreground">{value}</span>;
    }

    const [, major, minor, suffix] = match;
    const tail = suffix.trim();

    return (
      <div className="flex items-baseline gap-1 text-foreground">
        <span className="font-display text-2xl sm:text-3xl leading-none">{major}</span>
        <span className="font-display text-xs sm:text-sm leading-none text-foreground/80">{minor}</span>
        {tail ? <span className="text-xs sm:text-sm text-muted-foreground ml-1">{tail}</span> : null}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className={`glass-panel p-6 sm:p-8 group transition-shadow duration-500 hover:shadow-[0_30px_80px_-20px_hsl(168_80%_35%/0.35)] ${href ? "cursor-pointer" : ""}`}
    >
      <div className="mb-6 relative">
        <motion.div
          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
        </motion.div>
      </div>

      {timeline || price ? (
        <div className="mb-4 flex flex-wrap items-center gap-3">
          {timeline ? (
            <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-body uppercase tracking-[0.14em] text-primary">
              {timeline}
            </span>
          ) : null}
          {price ? renderPrice(price) : null}
        </div>
      ) : null}
      
      <h3 className="font-display font-medium text-xl text-foreground mb-3">
        {title}
      </h3>
      
      <p className="font-body text-muted-foreground leading-relaxed text-sm">
        {description}
      </p>

      {href ? (
        <a
          href={href}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-display text-primary hover:border-primary hover:bg-primary/10 transition-colors"
        >
          {linkLabel ?? "Подробнее"} <span aria-hidden>→</span>
        </a>
      ) : null}
    </motion.div>
  );
};

export default ServiceCard;
