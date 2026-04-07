import { motion } from "framer-motion";
import { AlertTriangle, Clock, Lock } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Hours Wasted on Repetitive Tasks",
    desc: "Answering the same questions, confirming bookings, sending follow-ups — it's eating your day alive.",
    accent: "border-t-primary",
  },
  {
    icon: Clock,
    title: "Slow Response = Lost Customers",
    desc: "80% of customers go with whoever responds first. If you're sleeping, you're losing.",
    accent: "border-t-accent",
  },
  {
    icon: Lock,
    title: "Stuck Working IN the Business",
    desc: "Automation gives you your time back so you can actually grow — instead of just survive.",
    accent: "border-t-primary",
  },
];

const ProblemSection = () => (
  <section className="py-16 md:py-24 bg-secondary">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
          Your Business Is <span className="gradient-text">Losing Money</span> While You Sleep
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          If any of these sound familiar, you need automation — yesterday.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`bg-card rounded-xl p-7 border border-border ${p.accent} border-t-2 card-hover`}
          >
            <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center mb-5">
              <p.icon className="text-primary" size={22} />
            </div>
            <h3 className="font-heading text-lg font-bold mb-2 text-card-foreground">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
