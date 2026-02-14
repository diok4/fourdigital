import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6"
        >
          Цифровое агентство в Узбекистане
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="font-display font-light text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] tracking-tight mb-8"
        >
          Создание сайтов под ключ
          <br />
          <span className="font-medium">в Узбекистане — SEO‑продвижение</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Fourdigital.uz — агентство по созданию сайтов под ключ: стратегия, дизайн и разработка,
          которые приводят клиентов. Помогаем брендам в Узбекистане выигрывать внимание и заявки.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="magnetic-button">
            Запустить проект
          </button>
          <a 
            href="#portfolio" 
            className="font-display text-sm font-medium text-foreground px-8 py-4 hover:text-primary transition-colors duration-300"
          >
            Смотреть кейсы
          </a>
        </motion.div>
      </div>

      {/* Decorative elements */}
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
