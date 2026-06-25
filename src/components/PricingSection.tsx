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
  <section id="pricing" className="section-ink">
    <div className="container mx-auto px-6 py-32 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-20"
      >
        <div className="eyebrow text-signal mb-6">Pricing</div>
        <h2
          className="font-heading font-extrabold leading-[1.05]"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", letterSpacing: "-0.04em" }}
        >
          Transparent. <span className="text-signal">No surprises.</span>
        </h2>
        <p className="text-white/60 mt-6 text-lg font-light max-w-[60ch]">
          Clear pricing. Real value. Cancel anytime.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-px bg-white/8 border-y border-white/10">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className={`relative p-10 ${p.featured ? "bg-white/[0.04]" : "bg-[#0a0a0a]"}`}
          >
            {p.featured && (
              <div className="eyebrow text-signal mb-5">Most Popular</div>
            )}
            {!p.featured && <div className="eyebrow text-white/40 mb-5">Plan</div>}

            <h3 className="font-heading text-2xl font-bold mb-6" style={{ letterSpacing: "-0.02em" }}>
              {p.name}
            </h3>

            <div className="mb-1">
              <span
                className="font-heading font-extrabold text-white"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", letterSpacing: "-0.04em", lineHeight: 1 }}
              >
                {p.setup}
              </span>
            </div>
            <div className="text-white/50 text-sm mb-1">once-off setup</div>
            <div className="text-signal text-sm font-medium mb-8">+ {p.monthly}</div>

            <div className="hairline-dark mb-6" />

            <ul className="space-y-3 mb-10">
              {p.features.map((f, fi) => (
                <li key={fi} className="flex items-start gap-3 text-[14px] text-white/75 font-light">
                  <Check className="text-signal shrink-0 mt-0.5" size={15} />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={waLink(p.name)}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full text-center py-3.5 rounded-full text-sm font-medium transition ${
                p.featured
                  ? "bg-signal text-white hover:brightness-110"
                  : "border border-white/20 text-white hover:bg-white/5"
              }`}
            >
              Get started
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
