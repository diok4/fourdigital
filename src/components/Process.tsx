"use client";

import { motion } from "framer-motion";

type ProcessProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  stepLabel: string;
  steps: { title: string; description: string }[];
};

const Process = ({ eyebrow, title, highlight, stepLabel, steps }: ProcessProps) => {
  return (
    <section id="process" className="section-padding">
      <div className="max-w-6xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="glass-panel p-6 sm:p-8"
            >
              <div className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-4">
                {stepLabel} {index + 1}
              </div>
              <h3 className="font-display text-2xl font-medium text-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
