"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CaseCardProps {
  title: string;
  category: string;
  description: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  index: number;
  viewLabel: string;
}

const CaseCard = ({ title, category, description, href, imageSrc, imageAlt, index, viewLabel }: CaseCardProps) => {
  const hasLink = Boolean(href);
  const isExternal = href?.startsWith("http");
  const hasPreviewImage = Boolean(imageSrc);

  return (
    <motion.a
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
      className={`glass-panel overflow-hidden group ${hasLink ? "cursor-pointer" : "cursor-default"}`}
      href={href ?? "#"}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={(event) => {
        if (!hasLink) {
          event.preventDefault();
        }
      }}
    >
      <div 
        className={
          hasPreviewImage
            ? "relative aspect-[16/9] overflow-hidden bg-slate-900/40"
            : "relative h-64 overflow-hidden md:h-80"
        }
        style={
          hasPreviewImage
            ? undefined
            : {
                background:
                  index === 0
                    ? "linear-gradient(135deg, hsl(220 30% 12%) 0%, hsl(210 25% 18%) 100%)"
                    : index === 1
                      ? "linear-gradient(135deg, hsl(168 30% 12%) 0%, hsl(190 35% 18%) 100%)"
                      : "linear-gradient(135deg, hsl(230 25% 12%) 0%, hsl(260 20% 18%) 100%)",
              }
        }
      >
        {hasPreviewImage ? (
          <Image
            src={imageSrc as string}
            alt={imageAlt ?? title}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="absolute inset-8 flex flex-col gap-4 opacity-30">
            <div className="h-3 bg-foreground/20 rounded-full w-1/3" />
            <div className="h-2 bg-foreground/10 rounded-full w-2/3" />
            <div className="h-2 bg-foreground/10 rounded-full w-1/2" />
            <div className="flex-1" />
            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-xl bg-foreground/10" />
              <div className="h-10 w-10 rounded-xl bg-foreground/10" />
              <div className="h-10 w-10 rounded-xl bg-foreground/10" />
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent flex items-end p-5 sm:p-8"
        >
          <span className="font-display text-foreground text-lg font-medium">
            {viewLabel}
          </span>
        </motion.div>
      </div>

      <div className="p-6 sm:p-8">
        <span className="font-body text-xs uppercase tracking-[0.2em] text-primary mb-3 block">
          {category}
        </span>
        <h3 className="font-display font-medium text-xl sm:text-2xl text-foreground mb-4">
          {title}
        </h3>
        <p className="font-body text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.a>
  );
};

export default CaseCard;
