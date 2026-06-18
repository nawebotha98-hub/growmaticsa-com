import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import ParticleField from "./ParticleField";

const openGHLForm = () => {
  const iframe = document.getElementById('popup-CRmbnwhhi1yorsIXyIrk') as HTMLIFrameElement;
  if (iframe) iframe.style.display = 'block';
};

const CTASection = () => (
  <section id="cta" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto rounded-[2rem] overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10"
      >
        {/* Layered background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(212_45%_10%)] via-[hsl(212_50%_14%)] to-[hsl(212_55%_8%)]" />
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }} />
        <ParticleField density={0.7} />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/30 blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary/25 blur-[90px]" />

        <div className="relative px-6 sm:px-12 py-14 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[11px] font-semibold text-white/90 uppercase tracking-wider">
              Limited Spots This Month
            </span>
          </div>

          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white mb-5 tracking-tight leading-[1.1]">
            Let's build your first <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#60a5fa] to-[#34d399] bg-clip-text text-transparent">
              AI system together.
            </span>
          </h2>
          <p className="text-white/65 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Book a free 30-minute strategy call. We'll show you exactly where automation saves you time and makes you money.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto sm:max-w-none">
            <button
              onClick={openGHLForm}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-2xl text-base font-semibold shadow-xl shadow-primary/30 hover:brightness-110 active:scale-[0.98] transition cursor-pointer"
            >
              <Calendar size={18} />
              Book Free Strategy Call
              <ArrowRight size={18} />
            </button>
            <a
              href="https://wa.me/27000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/15 text-white px-7 py-4 rounded-2xl text-base font-semibold hover:bg-white/10 active:scale-[0.98] transition backdrop-blur-sm"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/50">
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-primary" /> No obligation
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-primary" /> Free 30-min audit
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-primary" /> 100% South African team
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
