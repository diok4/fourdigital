import { motion } from "framer-motion";
import { Palette, Code2, Lightbulb, BarChart3, ClipboardCheck } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: Palette,
    title: "Айдентика и UI-дизайн",
    description: "Создаём визуальный язык, который узнают с первого экрана и запоминают надолго.",
  },
  {
    icon: Code2,
    title: "Разработка сайтов",
    description: "Быстрые, адаптивные и безопасные сайты на современном стеке — от лендинга до портала.",
  },
  {
    icon: Lightbulb,
    title: "Стратегия и UX",
    description: "Исследуем аудиторию, строим сценарии и прототипы, которые приводят к заявкам.",
  },
  {
    icon: BarChart3,
    title: "SEO и рост",
    description: "Техническая оптимизация, контент и аналитика для стабильного органического трафика.",
  },
  {
    icon: ClipboardCheck,
    title: "Поддержка и оптимизация",
    description: "Регулярные улучшения, A/B-тесты и повышение конверсии после запуска.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Что мы делаем
          </p>
          <h2 className="font-display font-light text-4xl md:text-5xl text-foreground">
            Полный цикл <span className="font-medium">создания сайтов</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
          {services.slice(3).map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
