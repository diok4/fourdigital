import { motion } from "framer-motion";

const steps = [
  {
    title: "Старт и стратегия",
    description:
      "Погружаемся в нишу, фиксируем цели, структуру и метрики, чтобы сайт работал на продажи.",
  },
  {
    title: "Дизайн в коде",
    description:
      "Прорабатываем визуал сразу в браузере: быстрые итерации без Figma и лишней бюрократии.",
  },
  {
    title: "Разработка и запуск",
    description:
      "Собираем, тестируем и запускаем. Без платных CMS: чистый код или бесплатные решения при необходимости.",
  },
];

const Process = () => {
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
          <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Три этапа разработки
          </p>
          <h2 className="font-display font-light text-4xl md:text-5xl text-foreground">
            Прозрачный путь к <span className="font-medium">запуску</span>
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
              className="glass-panel p-8"
            >
              <div className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-4">
                Шаг {index + 1}
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
