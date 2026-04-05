import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    setup: "R3,999",
    monthly: "R999/mo",
    featured: false,
    features: [
      "1 AI automation system",
      "WhatsApp or web chat integration",
      "2-week setup",
      "30-day onboarding support",
      "Monthly performance report",
    ],
  },
  {
    name: "Growth",
    setup: "R6,999",
    monthly: "R1,999/mo",
    featured: true,
    features: [
      "3 AI automation systems",
      "WhatsApp + email + social",
      "Lead capture & follow-up",
      "Booking system included",
      "Priority support + monthly strategy review",
    ],
  },
  {
    name: "Enterprise",
    setup: "Custom",
    monthly: "Custom",
    featured: false,
    features: [
      "Unlimited automations",
      "Full business audit",
      "Dedicated account manager",
      "Staff training included",
      "SLA and uptime guarantees",
    ],
  },
];

const PricingSection = () => (
  <section id="pricing" className="section-dark py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-bold text-center mb-4"
      >
        Transparent. <span className="gradient-text">No Surprises.</span>
      </motion.h2>
      <p className="text-center text-surface-dark-foreground/60 mb-14 max-w-md mx-auto">
        Clear pricing. Real value. Cancel anytime.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`rounded-2xl p-8 border ${
              p.featured
                ? "border-primary bg-primary/5 shadow-xl shadow-primary/10 scale-105"
                : "border-primary/10 bg-surface-darker/50"
            }`}
          >
            {p.featured && (
              <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                Most Popular
              </span>
            )}
            <h3 className="font-heading text-xl font-bold mb-2">{p.name}</h3>
            <div className="mb-1">
              <span className="font-heading text-3xl font-bold">{p.setup}</span>
              <span className="text-surface-dark-foreground/50 text-sm ml-1">once-off</span>
            </div>
            <p className="text-primary font-semibold text-sm mb-6">+ {p.monthly}</p>

            <ul className="space-y-3 mb-8">
              {p.features.map((f, fi) => (
                <li key={fi} className="flex items-start gap-2 text-sm text-surface-dark-foreground/80">
                  <Check className="text-primary shrink-0 mt-0.5" size={16} />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#cta"
              className={`block text-center py-3 rounded-xl font-semibold text-sm transition ${
                p.featured
                  ? "bg-primary text-primary-foreground hover:brightness-110 glow-blue"
                  : "border border-primary/30 text-primary hover:bg-primary/10"
              }`}
            >
              Get Started
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
