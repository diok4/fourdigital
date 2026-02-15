"use client";

import { motion } from "framer-motion";

type Testimonial = { quote: string; name: string; role: string };

type TestimonialsProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  items: Testimonial[];
};

const Testimonials = ({ eyebrow, title, highlight, items }: TestimonialsProps) => {
  const rowOne = items.slice(0, 4);
  const rowTwo = items.slice(4);

  const renderRow = (items: Testimonial[], direction: "left" | "right") => {
    const loopItems = [...items, ...items];

    return (
      <div className="marquee">
        <div className={`marquee-track ${direction === "left" ? "marquee-left" : "marquee-right"}`}>
          {loopItems.map((item, index) => (
            <div key={`${item.name}-${index}`} className="glass-panel p-6 min-w-[260px] sm:min-w-[320px]">
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                “{item.quote}”
              </p>
              <div className="font-display text-lg text-foreground">{item.name}</div>
              <div className="font-body text-xs uppercase tracking-[0.2em] text-primary mt-1">
                {item.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-6xl mx-auto">
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
      </div>

      <div className="space-y-6 marquee-full">
        {renderRow(rowOne, "left")}
        {renderRow(rowTwo, "right")}
      </div>
    </section>
  );
};

export default Testimonials;
