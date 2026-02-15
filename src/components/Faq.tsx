"use client";

import { motion } from "framer-motion";

type FaqItem = { question: string; answer: string };

type FaqProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  items: FaqItem[];
};

const Faq = ({ eyebrow, title, highlight, items }: FaqProps) => {
  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-transparent to-secondary/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            {eyebrow}
          </p>
          <h2 className="font-display font-light text-4xl md:text-5xl text-foreground">
            {title} <span className="font-medium">{highlight}</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <motion.details
              key={item.question}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-panel p-6"
            >
              <summary className="cursor-pointer font-display text-lg text-foreground">
                {item.question}
              </summary>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">
                {item.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
