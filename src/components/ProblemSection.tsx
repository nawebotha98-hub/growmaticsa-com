import { motion } from "framer-motion";
import { AlertTriangle, Clock, Lock } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "You're Wasting Hours on Repetitive Tasks",
    desc: "Answering the same questions, confirming bookings, sending follow-ups — it's eating your day alive.",
  },
  {
    icon: Clock,
    title: "Slow Response = Lost Customers",
    desc: "80% of customers go with whoever responds first. If you're sleeping, you're losing.",
  },
  {
    icon: Lock,
    title: "You're Stuck IN the Business",
    desc: "Automation gives you your time back so you can actually grow — instead of just survive.",
  },
];

const ProblemSection = () => (
  <section className="section-dark py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-bold text-center mb-4"
      >
        Your Business Is <span className="gradient-text">Losing Money</span> While You Sleep
      </motion.h2>
      <p className="text-center text-surface-dark-foreground/60 mb-14 max-w-xl mx-auto">
        If any of these sound familiar, you need automation — yesterday.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-surface-darker/50 border border-primary/10 rounded-xl p-8 text-center"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <p.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-3">{p.title}</h3>
            <p className="text-surface-dark-foreground/60 text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
