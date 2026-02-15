"use client";

import { motion } from "framer-motion";

type ProjectTypesProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  items: {
    title: string;
    timeline: string;
    price: string;
    process: string[];
    description: string;
  }[];
  note: string;
};

const ProjectTypes = ({ eyebrow, title, highlight, items, note }: ProjectTypesProps) => {
  return (
    <section id="types" className="section-padding bg-gradient-to-b from-secondary/20 via-transparent to-transparent">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel p-8"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-primary font-display text-lg">{item.timeline}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {item.price}
                </span>
              </div>
              <h3 className="font-display text-2xl font-medium text-foreground mb-3">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.process.map((step) => (
                  <span
                    key={step}
                    className="text-xs font-body uppercase tracking-[0.2em] text-primary/80 bg-primary/10 px-3 py-1 rounded-full"
                  >
                    {step}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          {note}
        </p>
      </div>
    </section>
  );
};

export default ProjectTypes;
