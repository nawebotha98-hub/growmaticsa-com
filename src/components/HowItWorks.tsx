import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Free strategy call", desc: "We find your biggest time-wasters." },
  { num: "02", title: "Custom build plan", desc: "Designed around your business." },
  { num: "03", title: "We build it for you", desc: "No code, no tech stress — just approve." },
  { num: "04", title: "Go live and grow", desc: "System runs, we optimise monthly." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="section-ink">
    <div className="container mx-auto px-6 py-32 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-20"
      >
        <div className="eyebrow text-signal mb-6">The Process</div>
        <h2
          className="font-heading font-extrabold leading-[1.05]"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", letterSpacing: "-0.04em" }}
        >
          Simple. Fast. <span className="text-signal">Done.</span>
        </h2>
        <p className="text-white/60 mt-6 text-lg font-light max-w-[60ch]">
          From first call to live system in about two weeks.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <div className="hairline-dark mb-6" />
            <div className="eyebrow text-signal mb-5">{s.num}</div>
            <h3 className="font-heading text-xl font-bold mb-3" style={{ letterSpacing: "-0.02em" }}>
              {s.title}
            </h3>
            <p className="text-white/55 text-[15px] font-light" style={{ lineHeight: 1.7 }}>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
