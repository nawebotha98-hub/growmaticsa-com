import { motion } from "framer-motion";
import { Phone, Calendar, Users, RefreshCw } from "lucide-react";

const capabilities = [
  { icon: Phone, label: "Answers calls 24/7" },
  { icon: Calendar, label: "Books appointments" },
  { icon: Users, label: "Handles leads" },
  { icon: RefreshCw, label: "Automated follow-ups" },
];

const ComingSoon = () => (
  <section id="coming-soon" className="section-ink">
    <div className="container mx-auto px-6 py-32 md:py-40 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <span className="eyebrow text-signal">Coming Soon</span>
          <span className="h-px flex-1 bg-white/10" />
          <span className="eyebrow text-white/40">Q3 · 2026</span>
        </div>

        <h2
          className="font-heading font-extrabold leading-[1.02] max-w-4xl"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", letterSpacing: "-0.04em" }}
        >
          AI <span className="text-signal">Receptionist</span>.
          <br />
          Never miss a call again.
        </h2>

        <p className="mt-10 text-white/60 text-lg md:text-xl font-light max-w-[60ch]" style={{ lineHeight: 1.7 }}>
          A voice AI that picks up on the first ring, sounds human, and does the work of a full-time receptionist — without lunch breaks, sick days, or missed opportunities.
        </p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="hairline-dark mb-5" />
              <c.icon size={22} className="text-signal mb-4" strokeWidth={1.5} />
              <div className="font-heading text-base font-bold" style={{ letterSpacing: "-0.02em" }}>
                {c.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a
            href="https://wa.me/27671082665?text=Hi!%20I'd%20like%20early%20access%20to%20the%20AI%20Receptionist."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-signal text-white px-8 py-4 rounded-full text-[15px] font-medium hover:brightness-110 active:scale-[0.98] transition"
          >
            Join the early access list
          </a>
          <span className="eyebrow text-white/40">Priority pricing for first 20 businesses</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ComingSoon;
