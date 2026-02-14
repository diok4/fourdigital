import { motion } from "framer-motion";
import CaseCard from "./CaseCard";

const cases = [
  {
    title: "Мебельный бренд",
    category: "E-commerce и каталоги",
    description:
      "Запустили интернет-магазин с фильтрами, оплатой и доставкой по Узбекистану.",
  },
  {
    title: "Девелопер",
    category: "Сайт-витрина и лиды",
    description:
      "Собрали премиальный сайт и интегрировали CRM, чтобы отдел продаж работал быстрее.",
  },
  {
    title: "B2B сервис",
    category: "Платформа и личный кабинет",
    description:
      "Спроектировали кабинет партнёров и автоматизировали заявки в единую воронку.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-gradient-to-b from-transparent to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Наши проекты
          </p>
          <h2 className="font-display font-light text-4xl md:text-5xl text-foreground">
            Проекты, которые <span className="font-medium">дают результат</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <CaseCard key={caseItem.title} {...caseItem} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
