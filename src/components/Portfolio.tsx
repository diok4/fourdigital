"use client";

import { motion } from "framer-motion";
import CaseCard from "./CaseCard";

type PortfolioProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  viewCaseLabel: string;
  items: {
    title: string;
    category: string;
    description: string;
    href?: string;
    imageSrc?: string;
    imageAlt?: string;
  }[];
};

const Portfolio = ({ eyebrow, title, highlight, viewCaseLabel, items }: PortfolioProps) => {
  return (
    <section id="portfolio" className="section-padding section-flow-mid">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {items.map((caseItem, index) => (
            <CaseCard key={caseItem.title} {...caseItem} index={index} viewLabel={viewCaseLabel} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
