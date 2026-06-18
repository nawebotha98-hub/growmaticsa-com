import { motion } from "framer-motion";
import { Phone, FileText, Wrench, Rocket } from "lucide-react";

const steps = [
  { icon: Phone, title: "Free Strategy Call", desc: "We find your biggest time-wasters.", num: "01" },
  { icon: FileText, title: "Custom Build Plan", desc: "Designed around your business.", num: "02" },
  { icon: Wrench, title: "We Build It For You", desc: "No code, no tech stress — just approve.", num: "03" },
  { icon: Rocket, title: "Go Live & Grow", desc: "System runs, we optimise monthly.", num: "04" },
];

const HowItWorks = () => (
  <section id="how-it-works" className="section-dark py-16 md:py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
          Simple. Fast. <span className="gradient-text">Done.</span>
        </h2>
        <p className="text-surface-dark-foreground/60 max-w-md mx-auto">
          From first call to live system in about 2 weeks.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative bg-surface-dark/50 border border-primary/10 rounded-xl p-6 text-center group hover:border-primary/25 transition-colors"
          >
            <span className="text-xs font-bold text-primary/40 absolute top-4 right-4">{s.num}</span>
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
              <s.icon className="text-primary" size={22} />
            </div>
            <h3 className="font-heading text-base font-bold mb-1.5">{s.title}</h3>
            <p className="text-surface-dark-foreground/55 text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
