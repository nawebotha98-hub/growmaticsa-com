import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
    style={{ background: `linear-gradient(to bottom, hsl(220 25% 5% / 0.85), hsl(220 25% 5% / 0.95)), url(${heroBg}) center/cover no-repeat` }}
  >
    {/* Pulsing agent dot */}
    <div className="absolute top-28 right-8 md:right-16 flex items-center gap-2">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary animate-pulse-glow" />
      </span>
      <span className="text-xs text-primary font-medium">AI Agent Online</span>
    </div>

    <div className="container mx-auto px-4 text-center pt-24 pb-16">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-primary font-semibold text-sm tracking-widest uppercase mb-4"
      >
        Automate. Grow. Dominate.
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-surface-dark-foreground leading-tight max-w-4xl mx-auto"
      >
        Stop Doing Work A Robot{" "}
        <span className="gradient-text">Can Do Better</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-lg md:text-xl text-surface-dark-foreground/70 max-w-2xl mx-auto"
      >
        GrowMatic SA builds AI agents and automation systems that save you time, cut costs, and keep your business running 24/7 — without hiring more staff.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a href="#cta" className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:brightness-110 transition glow-green">
          Book Free Strategy Call
        </a>
        <a href="#services" className="border border-surface-dark-foreground/20 text-surface-dark-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:border-primary/50 hover:text-primary transition">
          See Our Services
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 text-xs text-surface-dark-foreground/40"
      >
        AI Systems Built for South African Businesses
      </motion.p>
    </div>
  </section>
);

export default Hero;
