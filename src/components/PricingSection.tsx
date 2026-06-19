import { motion } from "framer-motion";
import { Check } from "lucide-react";

const waLink = (plan: string) =>
  `https://wa.me/27671082665?text=${encodeURIComponent(`Hi! I'm interested in the ${plan} plan`)}`;

const plans = [
  {
    name: "Starter",
    setup: "R4,999",
    monthly: "R999/mo",
    featured: false,
    features: [
      "1 AI automation system",
      "WhatsApp or web chat integration",
      "2-week average setup",
      "30-day onboarding support",
      "Monthly performance report",
    ],
  },
  {
    name: "Growth",
    setup: "R9,999",
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
  <section id="pricing" className="section-dark py-16 md:py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
          Transparent. <span className="gradient-text">No Surprises.</span>
        </h2>
        <p className="text-surface-dark-foreground/60 max-w-md mx-auto">
          Clear pricing. Real value. Cancel anytime.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto items-start">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-xl p-7 border ${
              p.featured
                ? "border-primary bg-primary/5 ring-1 ring-primary/20 scale-[1.03]"
                : "border-surface-dark-foreground/10 bg-surface-darker/40"
            }`}
          >
            {p.featured && (
              <span className="inline-block bg-[hsl(42_65%_47%)] text-white text-xs font-bold px-3 py-0.5 rounded-full mb-4">
                Most Popular
              </span>
            )}
            <h3 className="font-heading text-lg font-bold mb-1">{p.name}</h3>
            <div className="mb-1">
              <span className="font-heading text-3xl font-extrabold">{p.setup}</span>
              <span className="text-surface-dark-foreground/50 text-sm ml-1">once-off</span>
            </div>
            <p className="text-primary font-semibold text-sm mb-5">+ {p.monthly}</p>

            <ul className="space-y-2.5 mb-6">
              {p.features.map((f, fi) => (
                <li key={fi} className="flex items-start gap-2 text-sm text-surface-dark-foreground/75">
                  <Check className="text-primary shrink-0 mt-0.5" size={15} />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={waLink(p.name)}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full text-center py-3 rounded-lg font-semibold text-sm transition cursor-pointer ${
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
