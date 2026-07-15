import { motion } from "framer-motion";

const problems = [
  {
    eyebrow: "The Cost",
    title: "Hours wasted on repetitive tasks.",
    desc: "Answering the same questions, confirming bookings, sending follow-ups — it's eating your day alive.",
  },
  {
    eyebrow: "The Risk",
    title: "Every missed call is a lost sale.",
    desc: "When you don't pick up, most people don't leave a voicemail — they just call the next business on the list. If you're not answering, someone else is.",
  },
  {
    eyebrow: "The Trap",
    title: "Stuck working in the business, not on it.",
    desc: "The right systems working quietly in the background give you your time back — so you can actually grow instead of just keeping up.",
  },
];

const ProblemSection = () => (
  <section className="section-ink">
    <div className="container mx-auto px-6 py-32 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-20"
      >
        <div className="eyebrow text-signal mb-6">The Problem</div>
        <h2
          className="font-heading font-extrabold leading-[1.05]"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", letterSpacing: "-0.04em" }}
        >
          Your business is losing money <span className="text-signal">while you sleep</span>.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-12 md:gap-16">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <div className="hairline-dark mb-6" />
            <div className="eyebrow text-signal mb-5">{p.eyebrow}</div>
            <h3 className="font-heading text-2xl font-bold mb-4 leading-tight" style={{ letterSpacing: "-0.02em" }}>
              {p.title}
            </h3>
            <p className="text-white/60 text-[15px] font-light" style={{ lineHeight: 1.7 }}>
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
