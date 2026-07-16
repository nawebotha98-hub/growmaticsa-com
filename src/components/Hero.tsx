import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroCanvas from "./HeroCanvas";
import HeroDevice from "./HeroDevice";
import { trackWhatsAppClick } from "@/lib/trackWhatsAppClick";
import { DEMO_URL } from "@/lib/links";

const WHATSAPP_CALL = "https://wa.me/27827900255?text=Hi!%20I'd%20like%20to%20book%20a%20free%20strategy%20call.";

const Hero = () => (
  <section id="top" className="section-paper relative overflow-hidden">
    <HeroCanvas />
    <div className="container mx-auto px-6 pt-36 pb-32 md:pt-44 md:pb-40 relative">
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow text-graphite mb-8"
          >
            South Africa · Business Growth Partner
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-heading font-extrabold text-ink leading-[1.02]"
            style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)", letterSpacing: "-0.04em" }}
          >
            Win more customers.
            <br />
            Work <span className="text-signal">less</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            data-multichannel="true"
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-10 text-lg md:text-xl text-graphite font-light max-w-[60ch]"
            style={{ lineHeight: 1.7 }}
          >
            GrowMatic SA helps South African businesses reply to every enquiry in seconds, follow up automatically, and take care of the admin in the background — so you capture more sales, look more professional, and get hours back every week.
          </motion.p>


          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <a
              href={WHATSAPP_CALL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("hero_book_call", "Hi! I'd like to book a free strategy call.")}
              className="inline-flex items-center justify-center gap-2 bg-signal text-white px-8 py-4 rounded-full text-[15px] font-medium hover:brightness-110 active:scale-[0.98] transition"
            >
              Book your free business consultation
              <ArrowRight size={16} />
            </a>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-ink px-8 py-4 rounded-full text-[15px] font-medium border border-hairline hover:bg-white transition"
            >
              Try the live demo
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="lg:col-span-5"
        >
          <HeroDevice />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;

