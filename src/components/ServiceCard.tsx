"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  href?: string;
  linkLabel?: string;
}

const ServiceCard = ({ icon: Icon, title, description, index, href, linkLabel }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className={`glass-panel p-8 group transition-shadow duration-500 hover:shadow-[0_30px_80px_-20px_hsl(168_80%_35%/0.35)] ${href ? "cursor-pointer" : ""}`}
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
      
      <h3 className="font-display font-medium text-xl text-foreground mb-3">
        {title}
      </h3>
      
      <p className="font-body text-muted-foreground leading-relaxed text-sm">
        {description}
      </p>

      {href ? (
        <a
          href={href}
          className="mt-6 inline-flex items-center gap-2 text-sm font-display text-primary hover:text-primary/80 transition-colors"
        >
          {linkLabel ?? "Подробнее"} <span aria-hidden>→</span>
        </a>
      ) : null}
    </motion.div>
  );
};

export default ServiceCard;
