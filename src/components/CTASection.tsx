import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/trackWhatsAppClick";

const WHATSAPP_CALL = "https://wa.me/27671082665?text=Hi!%20I'd%20like%20to%20book%20a%20free%20strategy%20call.";
const WHATSAPP_GENERAL = "https://wa.me/27671082665?text=Hi!%20I'd%20like%20to%20learn%20more%20about%20GrowMatic%20SA.";

const CTASection = () => (
  <section id="cta" className="section-ink">
    <div className="container mx-auto px-6 py-32 md:py-44 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto"
      >
        <div className="eyebrow text-signal mb-8">Let's Grow</div>
        <h2
          className="font-heading font-extrabold leading-[1.02]"
          style={{ fontSize: "clamp(2.75rem, 7vw, 6rem)", letterSpacing: "-0.04em" }}
        >
          Let's grow your business,
          <br />
          <span className="text-signal">together</span>.
        </h2>
        <p className="text-white/60 text-lg md:text-xl font-light mt-10 max-w-[55ch] mx-auto" style={{ lineHeight: 1.7 }}>
          Book a free 30-minute business consultation. We'll show you exactly where you can save time, respond faster, and win more customers — no pressure, no jargon.
        </p>

        <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_CALL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("cta_book_call", "Hi! I'd like to book a free strategy call.")}
            className="inline-flex items-center justify-center gap-2 bg-signal text-white px-8 py-4 rounded-full text-[15px] font-medium hover:brightness-110 active:scale-[0.98] transition"
          >
            Book your free business consultation
            <ArrowRight size={16} />
          </a>
          <a
            href={WHATSAPP_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("cta_whatsapp_us", "Hi! I'd like to learn more about GrowMatic SA.")}
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full text-[15px] font-medium hover:bg-white/5 transition"
          >
            WhatsApp us
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 eyebrow text-white/40">
          <span>No obligation</span>
          <span>Free 30-min consultation</span>
          <span>100% South African team</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
