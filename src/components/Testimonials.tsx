import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Сайт вышел быстрее ожидаемого. Получили рост заявок уже в первый месяц запуска.",
    name: "Азиз К.",
    role: "Директор, мебельный бренд",
  },
  {
    quote:
      "Команда чётко держала сроки и предложила сильные улучшения по структуре и SEO.",
    name: "Шахноза Р.",
    role: "Маркетинг, девелопер",
  },
  {
    quote:
      "Простой процесс согласований и понятная аналитика. Рекомендуем как надёжного подрядчика.",
    name: "Ильяс М.",
    role: "Сооснователь, B2B сервис",
  },
  {
    quote:
      "Сайт стал основным каналом входящих. Понравилась скорость и прозрачность процесса.",
    name: "Самира Т.",
    role: "Руководитель продаж",
  },
  {
    quote:
      "Обновили позиционирование и структуру — конверсия выросла заметно уже через 2 недели.",
    name: "Рустам А.",
    role: "СЕО, сервисная компания",
  },
  {
    quote:
      "Сделали чистый интерфейс и быстро подключили аналитику. Всё понятно и по делу.",
    name: "Нодира С.",
    role: "Операционный директор",
  },
  {
    quote:
      "Внимание к деталям и аккуратный код. Проект готов к росту без переделок.",
    name: "Жасур Б.",
    role: "Тех. лидер, стартап",
  },
  {
    quote:
      "Нам помогли выделиться среди конкурентов и упростили путь клиента до заявки.",
    name: "Камола У.",
    role: "Маркетинг, B2C бренд",
  },
];

const rowOne = testimonials.slice(0, 4);
const rowTwo = testimonials.slice(4);

const Testimonials = () => {
  type Testimonial = (typeof testimonials)[number];
  const renderRow = (items: Testimonial[], direction: "left" | "right") => {
    const loopItems = [...items, ...items];

    return (
      <div className="marquee">
        <div className={`marquee-track ${direction === "left" ? "marquee-left" : "marquee-right"}`}>
          {loopItems.map((item, index) => (
            <div key={`${item.name}-${index}`} className="glass-panel p-6 min-w-[260px] sm:min-w-[320px]">
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                “{item.quote}”
              </p>
              <div className="font-display text-lg text-foreground">{item.name}</div>
              <div className="font-body text-xs uppercase tracking-[0.2em] text-primary mt-1">
                {item.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Отзывы клиентов
          </p>
          <h2 className="font-display font-light text-4xl md:text-5xl text-foreground">
            Нам доверяют <span className="font-medium">результаты</span>
          </h2>
        </motion.div>
      </div>

      <div className="space-y-6 marquee-full">
        {renderRow(rowOne, "left")}
        {renderRow(rowTwo, "right")}
      </div>
    </section>
  );
};

export default Testimonials;
