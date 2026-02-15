"use client";

import { motion } from "framer-motion";
import DiscussProjectDialog from "@/components/DiscussProjectDialog";
import { siteConfig } from "@/lib/site";

type ContactProps = {
  locale: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  cta: string;
};

const Contact = ({ locale, eyebrow, title, highlight, description, cta }: ContactProps) => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-xs sm:text-sm uppercase tracking-[0.24em] sm:tracking-[0.3em] text-muted-foreground mb-4">
            {eyebrow}
          </p>
          <h2 className="font-display font-light text-3xl sm:text-4xl md:text-6xl text-foreground mb-6">
            {title}
            <br />
            <span className="font-medium">{highlight}</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col items-center gap-5">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <DiscussProjectDialog locale={locale} triggerLabel={cta} triggerClassName="magnetic-button text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 w-full sm:w-auto" />
            </motion.div>
            <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-muted-foreground">
              <a className="hover:text-foreground transition-colors" href={`tel:${siteConfig.phone}`}>
                {siteConfig.phoneDisplay}
              </a>
              <span className="hidden sm:inline">•</span>
              <a className="hover:text-foreground transition-colors" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
