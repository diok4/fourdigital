import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Свяжитесь с нами
          </p>
          <h2 className="font-display font-light text-4xl md:text-6xl text-foreground mb-6">
            Готовы к сильному
            <br />
            <span className="font-medium">перезапуску сайта?</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
            Расскажите о задаче — мы предложим решение и план запуска в короткие сроки.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="magnetic-button text-lg px-12 py-5"
          >
            Обсудить проект
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
