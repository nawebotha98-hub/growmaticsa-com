import { motion } from "framer-motion";

const services = [
  {
    eyebrow: "Chat Agent",
    title: "AI customer service agent.",
    desc: "A 24/7 WhatsApp and web chat agent that answers FAQs, qualifies leads, and escalates to you only when it actually matters.",
  },
  {
    eyebrow: "Lead Capture",
    title: "Lead capture and follow-up.",
    desc: "Captures leads from any source and follows up automatically over WhatsApp and email until they book or buy.",
  },
  {
    eyebrow: "Booking",
    title: "Booking and appointments.",
    desc: "Customers self-book. Automated reminders cut no-shows by up to 60%.",
  },
  {
    eyebrow: "Reputation",
    title: "Review and reputation manager.",
    desc: "Auto-requests Google reviews from happy customers. AI-drafted, on-brand responses, ready for one tap.",
  },
  {
    eyebrow: "Social",
    title: "Social media automation.",
    desc: "Generates, schedules, and posts to Facebook and Instagram consistently — without you ever opening the app.",
  },
  {
    eyebrow: "Custom",
    title: "Custom AI workflows.",
    desc: "Any repetitive process mapped and automated: invoices, onboarding, reporting. If a human is repeating it, we replace it.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-paper">
    <div className="container mx-auto px-6 py-32 md:py-40 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <div className="eyebrow text-graphite mb-6">What We Build</div>
        <h2
          className="font-heading font-extrabold text-ink leading-[1.05] max-w-3xl"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", letterSpacing: "-0.04em" }}
        >
          AI systems that <span className="text-signal">move the needle</span>.
        </h2>
      </motion.div>

      <div>
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-12 gap-8 py-12 md:py-14 border-t border-hairline"
          >
            <div className="md:col-span-3">
              <div className="eyebrow text-graphite">{s.eyebrow}</div>
            </div>
            <div className="md:col-span-9">
              <h3
                className="font-heading font-bold text-ink mb-4"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
              >
                {s.title}
              </h3>
              <p className="text-graphite text-[17px] font-light max-w-[60ch]" style={{ lineHeight: 1.7 }}>
                {s.desc}
              </p>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-hairline" />
      </div>
    </div>
  </section>
);

export default ServicesSection;
