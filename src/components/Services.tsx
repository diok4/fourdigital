"use client";

import { motion } from "framer-motion";
import { Palette, Code2, Lightbulb, BarChart3, ClipboardCheck, LayoutDashboard } from "lucide-react";
import ServiceCard from "./ServiceCard";

type ServicesProps = {
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

const iconMap = [Palette, Code2, Lightbulb, LayoutDashboard, BarChart3, ClipboardCheck];

const Services = ({ eyebrow, title, highlight, linkLabel, allServicesLabel, allServicesHref, items }: ServicesProps) => {
  const services = items.map((item, index) => ({
    ...item,
    icon: iconMap[index % iconMap.length],
  }));

  return (
    <section id="services" className="section-padding section-flow-start">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs sm:text-sm uppercase tracking-[0.24em] sm:tracking-[0.3em] text-muted-foreground mb-4">
            {eyebrow}
          </p>
          <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-foreground">
            {title} <span className="font-medium">{highlight}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} linkLabel={linkLabel} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={allServicesHref}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-7 py-3 font-display text-base text-foreground hover:border-primary hover:text-primary transition-colors w-full sm:w-auto justify-center"
          >
            {allServicesLabel} <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
