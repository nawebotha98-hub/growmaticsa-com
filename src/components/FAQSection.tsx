import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useSiteContent } from "@/lib/useSiteContent";

type Faq = { q: string; a: string };

const defaultFaqs: Faq[] = [
  { q: "Do I need technical knowledge to use this?", a: "Not at all. We build, set up, and manage everything for you. You just approve and go live. If you can use WhatsApp, you can use our systems." },
  { q: "How long does setup take?", a: "Most systems go live within about 2 weeks. We keep you updated every step of the way." },
  { q: "Will this work with WhatsApp?", a: "Absolutely. WhatsApp integration is at the core of what we do. Our AI agents can chat with your customers on WhatsApp 24/7, just like a real person." },
  { q: "What happens if something breaks?", a: "We monitor your systems and fix issues fast. Admin Autopilot and Custom Automation Build include priority support. You're never left hanging." },
  { q: "Is this affordable for a small business?", a: "Yes — our Lead Response Bot package is designed to be accessible for small businesses. The ROI typically pays for itself within the first month through saved time and captured leads." },
  { q: "Can I see it before I pay?", a: "Of course — right now, no call needed. Hit \"Live demo\" in the menu to try our interactive demos and chat with a real AI agent yourself. Prefer something tailored to your business? Book a free strategy call and we'll walk you through it. No pressure, no obligation." },
];

const FAQSection = () => {
  const faqs = useSiteContent<Faq[]>("faqs", defaultFaqs);

  return (
  <section id="faq" className="section-paper">
    <div className="container mx-auto px-6 py-32 md:py-40 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="eyebrow text-graphite mb-6">FAQ</div>
        <h2
          className="font-heading font-extrabold text-ink leading-[1.05]"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", letterSpacing: "-0.04em" }}
        >
          Questions, <span className="text-signal">answered</span>.
        </h2>
      </motion.div>

      <Accordion type="single" collapsible className="border-t border-hairline">
        {faqs.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
          >
            <AccordionItem value={`faq-${i}`} className="border-b border-hairline">
              <AccordionTrigger className="text-left font-heading font-bold text-lg text-ink hover:text-signal transition-colors py-6" style={{ letterSpacing: "-0.02em" }}>
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-graphite text-[15px] font-light pb-6 max-w-[60ch]" style={{ lineHeight: 1.7 }}>
                {f.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
  );
};

export default FAQSection;
