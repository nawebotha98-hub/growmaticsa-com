import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ParticleField from "./ParticleField";

const openGHLForm = () => {
  const iframe = document.getElementById('popup-CRmbnwhhi1yorsIXyIrk') as HTMLIFrameElement;
  if (iframe) iframe.style.display = 'block';
};

const stats = [
  { value: "24/7", label: "Always-On Automation" },
  { value: "2 Weeks", label: "Average Setup" },
  { value: "100%", label: "Built for South Africa" },
  { value: "0", label: "Extra Staff Needed" },
];

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-white via-secondary/60 to-white">
    {/* Animated particle field */}
    <ParticleField density={1.1} />

    {/* Subtle background orbs */}
    <div className="pointer-events-none absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-primary/10 rounded-full blur-[110px]" />
    <div className="pointer-events-none absolute -bottom-24 -left-24 w-[22rem] h-[22rem] bg-primary/10 rounded-full blur-[90px]" />


    <div className="container mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-24 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/15 mb-7"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary" />
          <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
            South Africa's AI Automation Partner
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="font-heading text-[40px] sm:text-5xl md:text-6xl font-extrabold text-foreground leading-[1.05] tracking-tight"
        >
          Stop doing work a{" "}
          <span className="text-primary">robot</span> can do better.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
        >
          We build AI agents and automation systems that save you time, cut costs, and keep your South African business running 24/7.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto sm:max-w-none"
        >
          <button
            onClick={openGHLForm}
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-2xl text-base font-semibold shadow-lg shadow-primary/20 hover:brightness-105 active:scale-[0.98] transition cursor-pointer"
          >
            Book Free Strategy Call
            <ArrowRight size={18} />
          </button>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 bg-white text-foreground border border-border px-7 py-4 rounded-2xl text-base font-semibold hover:bg-secondary active:scale-[0.98] transition"
          >
            See Our Services
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-4 rounded-2xl bg-secondary/60 border border-border text-left"
            >
              <div className="font-heading text-2xl font-extrabold text-primary">{s.value}</div>
              <div className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
