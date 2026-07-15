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
  { q: "Do I need any technical knowledge?", a: "Not at all. We build, set up, and manage everything for you — you just approve and go live. If you can use WhatsApp, you'll have no trouble at all." },
  { q: "How long until it's up and running?", a: "Most businesses are live within about 2 weeks. We keep you updated every step of the way." },
  { q: "Will this work with WhatsApp?", a: "Absolutely. WhatsApp is at the heart of what we do — your customers get looked after on WhatsApp 24/7, just like they're talking to a helpful member of your team." },
  { q: "What happens if something goes wrong?", a: "We keep an eye on everything and fix issues fast. Business Autopilot and the Custom Growth Solution include priority support — you're never left hanging." },
  { q: "Is this affordable for a small business?", a: "Yes — our Growth Starter package is designed to be accessible for smaller businesses. It typically pays for itself within the first month through the time you save and the customers you stop losing." },
  { q: "Can I see it before I commit?", a: "Of course — right now, no call needed. Hit \"Live demo\" in the menu to try it yourself. Prefer something tailored to your business? Book a free consultation and we'll walk you through exactly how it would work for you. No pressure, no obligation." },
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
