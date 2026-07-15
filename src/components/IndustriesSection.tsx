import { motion } from "framer-motion";

const industries = [
  { eyebrow: "Trades", title: "Electricians & plumbers", desc: "Answer every callout, follow up quotes, book jobs — even mid-job." },
  { eyebrow: "Security", title: "Security & response", desc: "Instant enquiry response, faster call-outs, organised scheduling." },
  { eyebrow: "Construction", title: "Construction & contractors", desc: "Capture project leads, chase quotes, keep site admin under control." },
  { eyebrow: "Medical", title: "Medical & healthcare", desc: "Self-booking, reminders that cut no-shows, calmer front desk." },
  { eyebrow: "Professional", title: "Professional services", desc: "Qualify enquiries, book consultations, reduce back-office admin." },
  { eyebrow: "Property", title: "Property & real estate", desc: "Respond to every listing enquiry instantly and never lose a buyer." },
  { eyebrow: "Retail", title: "Retail & e-commerce", desc: "Answer product questions, recover sales, manage enquiries at scale." },
  { eyebrow: "Any Business", title: "Any growing business", desc: "Manufacturing, logistics, wellness and more — if you have customers, we can help." },
];

const IndustriesSection = () => (
  <section id="industries" className="section-paper">
    <div className="container mx-auto px-6 py-32 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-20"
      >
        <div className="eyebrow text-graphite mb-6">Who It's For</div>
        <h2
          className="font-heading font-extrabold text-ink leading-[1.05]"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", letterSpacing: "-0.04em" }}
        >
          Solutions for <span className="text-signal">every kind of business</span>.
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {industries.map((ind, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
          >
            <div className="hairline mb-6" />
            <div className="eyebrow text-graphite mb-5">{ind.eyebrow}</div>
            <h3 className="font-heading text-xl font-bold text-ink mb-3" style={{ letterSpacing: "-0.02em" }}>
              {ind.title}
            </h3>
            <p className="text-graphite text-[15px] font-light" style={{ lineHeight: 1.7 }}>{ind.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
