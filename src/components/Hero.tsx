import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const openGHLForm = () => {
  const iframe = document.getElementById('popup-CRmbnwhhi1yorsIXyIrk') as HTMLIFrameElement;
  if (iframe) iframe.style.display = 'block';
};

const Hero = () => (
  <section className="relative overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-surface-dark via-surface-darker to-surface-dark" />
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(210 100% 50%) 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }}
    />
    {/* Gradient orbs */}
    <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    <div className="absolute bottom-20 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

    <div className="container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-28 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-xs font-semibold text-primary-foreground/80 tracking-wide uppercase">
            AI-Powered Automation for SA Businesses
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary-foreground leading-[1.1] tracking-tight"
        >
          Stop Doing Work
          <br />
          A Robot{" "}
          <span className="gradient-text">Can Do Better</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg text-primary-foreground/60 max-w-xl mx-auto leading-relaxed"
        >
          We build AI agents and automation systems that save you time, cut costs, and keep your South African business running 24/7.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={openGHLForm}
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl text-base font-semibold hover:brightness-110 transition glow-blue cursor-pointer"
          >
            Book Free Strategy Call
            <ArrowRight size={18} />
          </button>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 text-primary-foreground/80 px-7 py-3.5 rounded-xl text-base font-semibold hover:border-primary/60 hover:text-primary transition"
          >
            <Play size={16} />
            See Our Services
          </a>
        </motion.div>
      </div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default Hero;
