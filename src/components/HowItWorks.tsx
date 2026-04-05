import { motion } from "framer-motion";
import { Phone, FileText, Wrench, Rocket } from "lucide-react";

const steps = [
  { icon: Phone, num: "01", title: "Free Strategy Call", desc: "We find your biggest time-wasters." },
  { icon: FileText, num: "02", title: "Custom Build Plan", desc: "Designed around your business specifically." },
  { icon: Wrench, num: "03", title: "We Build It For You", desc: "No code, no tech stress — just approve it." },
  { icon: Rocket, num: "04", title: "Go Live & Grow", desc: "System runs, we optimise monthly." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="section-dark py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-bold text-center mb-4"
      >
        Simple. Fast. <span className="gradient-text">Done.</span>
      </motion.h2>
      <p className="text-center text-surface-dark-foreground/60 mb-14 max-w-md mx-auto">
        From first call to live system in days — not months.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
              <s.icon className="text-primary" size={26} />
            </div>
            <span className="text-primary font-heading font-bold text-xs">{s.num}</span>
            <h3 className="font-heading text-lg font-semibold mt-1 mb-2">{s.title}</h3>
            <p className="text-surface-dark-foreground/60 text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
