import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Free consultation", desc: "We learn your business and find where you're losing time and sales." },
  { num: "02", title: "Your growth plan", desc: "A simple plan built around your goals — no jargon, no guesswork." },
  { num: "03", title: "We set it all up", desc: "We build and manage everything for you. You just approve and go live." },
  { num: "04", title: "Go live and grow", desc: "It runs quietly in the background while we fine-tune it every month." },
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
