"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";

const FloatingTelegram = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 120);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.a
      href={siteConfig.telegram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Telegram"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : 40 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
      className="fixed right-3 sm:right-4 md:right-7 bottom-[max(1rem,env(safe-area-inset-bottom))] sm:bottom-8 md:bottom-10 z-[60]"
    >
      <motion.span
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-white/40 bg-[linear-gradient(135deg,hsl(206_92%_55%)_0%,hsl(220_88%_62%)_100%)] text-white shadow-[0_12px_30px_-10px_hsl(212_84%_48%/0.65)]"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7 fill-current" aria-hidden>
          <path d="M21.94 4.47c.32-1.5-1.03-2.74-2.42-2.2L3.06 8.26c-1.37.45-1.34 2.4.05 2.82l4.2 1.37 1.62 5.08c.45 1.4 2.26 1.7 3.12.5l2.23-3.1 3.62 2.66c1.06.78 2.56.2 2.85-1.08l1.19-5.24zM9.67 11.95l8.96-5.52-7.08 7.26-.34 2.76-1.54-4.5z" />
        </svg>
      </motion.span>
    </motion.a>
  );
};

export default FloatingTelegram;
