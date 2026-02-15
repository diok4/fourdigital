"use client";

import { motion } from "framer-motion";

type HeroProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
};

const Hero = ({ eyebrow, title, highlight, description, primaryCta, secondaryCta }: HeroProps) => {
  return (
    <section className="min-h-[100svh] flex items-center justify-center section-padding pt-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-xs sm:text-sm uppercase tracking-[0.24em] sm:tracking-[0.3em] text-muted-foreground mb-6"
        >
          {eyebrow}
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="font-display font-light text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] tracking-tight mb-8"
        >
          {title}
          <br />
          <span className="font-medium">{highlight}</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {description}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="magnetic-button w-full sm:w-auto">
            {primaryCta}
          </a>
          <a 
            href="#portfolio" 
            className="font-display text-sm font-medium text-foreground px-8 py-4 hover:text-primary transition-colors duration-300 w-full sm:w-auto text-center"
          >
            {secondaryCta}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute top-1/4 right-[10%] w-72 h-72 rounded-full bg-gradient-to-br from-primary/5 to-accent/10 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="absolute bottom-1/4 left-[5%] w-96 h-96 rounded-full bg-gradient-to-tr from-primary/5 to-transparent blur-3xl"
      />
    </section>
  );
};

export default Hero;
