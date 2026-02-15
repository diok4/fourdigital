"use client";

import { motion } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatarSrc?: string;
  rating?: number;
};

type TestimonialsProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  items: Testimonial[];
};

const Testimonials = ({ eyebrow, title, highlight, items }: TestimonialsProps) => {
  const rowOne = items.slice(0, 4);
  const rowTwo = items.slice(4);

  const localAvatars = [
    "/avatars/client-1.svg",
    "/avatars/client-2.svg",
    "/avatars/client-3.svg",
    "/avatars/client-4.svg",
    "/avatars/client-5.svg",
    "/avatars/client-6.svg",
    "/avatars/client-7.svg",
    "/avatars/client-8.svg",
  ];

  const getAvatarUrl = (item: Testimonial) => {
    if (item.avatarSrc) return item.avatarSrc;

    const hash = item.name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return localAvatars[hash % localAvatars.length];
  };

  const renderRow = (items: Testimonial[], direction: "left" | "right") => {
    const loopItems = [...items, ...items];

    return (
      <div className="marquee">
        <div className={`marquee-track ${direction === "left" ? "marquee-left" : "marquee-right"}`}>
          {loopItems.map((item, index) => (
            <div key={`${item.name}-${index}`} className="glass-panel p-5 sm:p-6 min-w-[240px] sm:min-w-[320px]">
              <div className="flex items-center gap-1 mb-4" aria-label={`Rating: ${item.rating ?? 5} out of 5`}>
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <span
                    key={`${item.name}-star-${starIndex}`}
                    className={starIndex < (item.rating ?? 5) ? "text-amber-400" : "text-foreground/25"}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                “{item.quote}”
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={getAvatarUrl(item)}
                  alt={item.name}
                  className="h-12 w-12 rounded-full object-cover border border-border/70"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-display text-lg text-foreground leading-tight">{item.name}</div>
                  <div className="font-body text-xs uppercase tracking-[0.2em] text-primary mt-1">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="testimonials" className="section-padding section-flow-end">
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
      </div>

      <div className="space-y-6 marquee-full">
        {renderRow(rowOne, "left")}
        {renderRow(rowTwo, "right")}
      </div>
    </section>
  );
};

export default Testimonials;
