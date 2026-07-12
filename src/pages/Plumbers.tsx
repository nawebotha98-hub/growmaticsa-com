import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneOff, Clock, MessageSquareOff, CalendarX } from "lucide-react";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { trackWhatsAppClick } from "@/lib/trackWhatsAppClick";

const WHATSAPP_PLUMBER = "https://wa.me/27671082665?text=Hi!%20I'm%20a%20plumber%20and%20I'd%20like%20to%20see%20how%20GrowMatic's%20AI%20agent%20could%20work%20for%20my%20business.";

const PAGE_TITLE = "AI Receptionist & Lead Follow-Up for Plumbers | GrowMatic SA";
const PAGE_DESCRIPTION =
  "GrowMatic builds AI agents for South African plumbers — answer emergency calls 24/7, follow up on quotes automatically, and never lose a job to a missed call again.";

const painPoints = [
  {
    icon: PhoneOff,
    title: "It's 11pm and a pipe bursts",
    desc: "The customer calls, nobody answers, and they call the next plumber in the Google results instead.",
  },
  {
    icon: MessageSquareOff,
    title: "You quote a job, then... silence",
    desc: "No follow-up, no reminder — the lead just goes cold and you never find out why.",
  },
  {
    icon: Clock,
    title: "You're under a sink, phone's ringing",
    desc: "You can't stop mid-job to answer, and every unanswered ring is a customer who might not call back.",
  },
  {
    icon: CalendarX,
    title: "Customers expect WhatsApp, not calls",
    desc: "Especially younger homeowners — if you're not on WhatsApp, you're harder to hire than the competition.",
  },
];

const capabilities = [
  { title: "Answers 24/7", desc: "Emergency calls and WhatsApp messages get a reply within seconds, day or night." },
  { title: "Chases quotes automatically", desc: "Follows up on every quote until the customer books or says no — so nothing falls through the cracks." },
  { title: "Missed Call Text-Back", desc: "Can't pick up? The caller gets an instant WhatsApp message instead of a dead ringtone." },
  { title: "Books straight into your diary", desc: "Customers self-book a callout time without a single phone tag." },
];

const Plumbers = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = PAGE_TITLE;

    const descTag = document.querySelector('meta[name="description"]');
    const prevDesc = descTag?.getAttribute("content") ?? null;
    descTag?.setAttribute("content", PAGE_DESCRIPTION);

    return () => {
      document.title = prevTitle;
      if (descTag && prevDesc !== null) descTag.setAttribute("content", prevDesc);
    };
  }, []);

  return (
    <>
      <Navbar />

      <section id="top" className="section-paper relative overflow-hidden">
        <div className="container mx-auto px-6 pt-36 pb-28 md:pt-44 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow text-graphite mb-8"
          >
            For Plumbers &amp; Trades
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-heading font-extrabold text-ink leading-[1.02] max-w-4xl"
            style={{ fontSize: "clamp(2.75rem, 7vw, 6rem)", letterSpacing: "-0.04em" }}
          >
            Never lose a job to a <span className="text-signal">missed call</span> again.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-10 text-lg md:text-xl text-graphite font-light max-w-[60ch]"
            style={{ lineHeight: 1.7 }}
          >
            Your AI agent answers emergency calls and WhatsApp enquiries 24/7, follows up on every quote until it's won, and books jobs straight into your diary — so you can stay under the sink instead of chasing your phone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <a
              href={WHATSAPP_PLUMBER}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackWhatsAppClick(
                  "plumbers_hero_whatsapp",
                  "Hi! I'm a plumber and I'd like to see how GrowMatic's AI agent could work for my business."
                )
              }
              className="inline-flex items-center justify-center gap-2 bg-signal text-white px-8 py-4 rounded-full text-[15px] font-medium hover:brightness-110 active:scale-[0.98] transition"
            >
              Get a free demo on WhatsApp
              <ArrowRight size={16} />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 text-ink px-8 py-4 rounded-full text-[15px] font-medium border border-hairline hover:bg-white transition"
            >
              See pricing
            </a>
          </motion.div>
        </div>
      </section>

      <section id="sound-familiar" className="section-ink">
        <div className="container mx-auto px-6 py-28 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-20"
          >
            <div className="eyebrow text-signal mb-6">Sound Familiar?</div>
            <h2
              className="font-heading font-extrabold leading-[1.05]"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", letterSpacing: "-0.04em" }}
            >
              Every missed call is a <span className="text-signal">job for someone else</span>.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-10">
            {painPoints.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
              >
                <div className="hairline-dark mb-6" />
                <p.icon size={22} className="text-signal mb-5" strokeWidth={1.5} />
                <h3 className="font-heading text-xl font-bold mb-3" style={{ letterSpacing: "-0.02em" }}>
                  {p.title}
                </h3>
                <p className="text-white/60 text-[15px] font-light" style={{ lineHeight: 1.7 }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="what-you-get" className="section-paper">
        <div className="container mx-auto px-6 py-28 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-20"
          >
            <div className="eyebrow text-graphite mb-6">What You Get</div>
            <h2
              className="font-heading font-extrabold text-ink leading-[1.05]"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", letterSpacing: "-0.04em" }}
            >
              Built for how <span className="text-signal">plumbers actually work</span>.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {capabilities.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
              >
                <div className="hairline mb-6" />
                <h3 className="font-heading text-lg font-bold text-ink mb-3" style={{ letterSpacing: "-0.02em" }}>
                  {c.title}
                </h3>
                <p className="text-graphite text-[15px] font-light" style={{ lineHeight: 1.7 }}>
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Plumbers;
