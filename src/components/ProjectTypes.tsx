import { motion } from "framer-motion";

const projectTypes = [
  {
    title: "Лендинг",
    timeline: "7–14 дней",
    price: "от 6 000 000 сум",
    process: ["Бриф", "Структура", "Дизайн в коде", "Запуск"],
    description: "Быстрый запуск оффера с фокусом на лиды и конверсию.",
  },
  {
    title: "Корпоративный сайт",
    timeline: "14–28 дней",
    price: "от 12 000 000 сум",
    process: ["Бриф", "Архитектура", "Дизайн в коде", "Разработка", "Запуск"],
    description: "Структура, доверие, услуги и кейсы в понятной навигации.",
  },
];

const ProjectTypes = () => {
  return (
    <section id="types" className="section-padding bg-gradient-to-b from-secondary/20 via-transparent to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Типы проектов и сроки
          </p>
          <h2 className="font-display font-light text-4xl md:text-5xl text-foreground">
            Планируем <span className="font-medium">честно и заранее</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectTypes.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel p-8"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-primary font-display text-lg">{item.timeline}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {item.price}
                </span>
              </div>
              <h3 className="font-display text-2xl font-medium text-foreground mb-3">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.process.map((step) => (
                  <span
                    key={step}
                    className="text-xs font-body uppercase tracking-[0.2em] text-primary/80 bg-primary/10 px-3 py-1 rounded-full"
                  >
                    {step}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Сроки и стоимость зависят от объёма контента, количества страниц и интеграций.
        </p>
      </div>
    </section>
  );
};

export default ProjectTypes;
