import { motion } from "framer-motion";

const team = [
  {
    name: "Фаррух",
    role: "Стратегия и развитие",
    note: "Фокус на бизнес‑целях и росте заявок.",
  },
  {
    name: "Диана",
    role: "UX/UI и бренд",
    note: "Понятные сценарии и сильная визуальная система.",
  },
  {
    name: "Азиз",
    role: "Frontend и интеграции",
    note: "Быстрые интерфейсы и чистый код без лишних слоёв.",
  },
  {
    name: "Мадина",
    role: "SEO и аналитика",
    note: "Техническая оптимизация и рост органики.",
  },
];

const Team = () => {
  return (
    <section id="team" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Команда профессионалов
          </p>
          <h2 className="font-display font-light text-4xl md:text-5xl text-foreground">
            Команда <span className="font-medium">Fourdigital</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel p-7"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center text-primary font-display text-lg mb-4">
                {member.name.charAt(0)}
              </div>
              <h3 className="font-display text-xl font-medium text-foreground mb-2">
                {member.name}
              </h3>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-primary mb-3">
                {member.role}
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{member.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
