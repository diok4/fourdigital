import { motion } from "framer-motion";

const faqs = [
  {
    question: "Какой бюджет нужен на сайт?",
    answer:
      "Стоимость зависит от задач, количества страниц и интеграций. После брифа даём точную смету.",
  },
  {
    question: "Почему дизайн без Figma?",
    answer:
      "Мы проектируем сразу в браузере — это быстрее и позволяет сразу видеть, как всё работает на разных экранах.",
  },
  {
    question: "Используете платные CMS?",
    answer:
      "Нет. Если нужна админка — используем бесплатные решения или делаем лёгкую кастомную панель.",
  },
  {
    question: "Что нужно подготовить со стороны клиента?",
    answer:
      "Цели проекта, контент и примеры сайтов, которые вам нравятся. Остальное соберём вместе.",
  },
  {
    question: "Как устроено SEO‑продвижение?",
    answer:
      "Стартуем с технической оптимизации, затем семантика, контент и регулярные отчёты по росту.",
  },
];

const Faq = () => {
  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-transparent to-secondary/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            FAQ
          </p>
          <h2 className="font-display font-light text-4xl md:text-5xl text-foreground">
            Часто задаваемые <span className="font-medium">вопросы</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <motion.details
              key={item.question}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-panel p-6"
            >
              <summary className="cursor-pointer font-display text-lg text-foreground">
                {item.question}
              </summary>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">
                {item.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
