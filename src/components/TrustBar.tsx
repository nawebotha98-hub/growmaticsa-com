import { motion } from "framer-motion";

const stats = [
  { value: "24/7", label: "Every customer answered" },
  { value: "2wk", label: "Up and running fast" },
  { value: "100%", label: "Built for South Africa" },
  { value: "0", label: "Extra staff needed" },
];

const TrustBar = () => (
  <section className="section-paper border-t border-hairline">
    <div className="container mx-auto px-6 py-24 md:py-32">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <div
              className="font-heading font-extrabold text-ink leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.04em" }}
            >
              {s.value}
            </div>
            <div className="eyebrow text-graphite mt-4">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
