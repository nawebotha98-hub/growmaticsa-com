import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Do I need technical knowledge to use this?", a: "Not at all. We build, set up, and manage everything for you. You just approve and go live. If you can use WhatsApp, you can use our systems." },
  { q: "How long does setup take?", a: "Most systems go live within 2-3 business days. More complex setups may take up to 2 weeks, but we keep you updated every step of the way." },
  { q: "Will this work with WhatsApp?", a: "Absolutely. WhatsApp integration is at the core of what we do. Our AI agents can chat with your customers on WhatsApp 24/7, just like a real person." },
  { q: "What happens if something breaks?", a: "We monitor your systems and fix issues fast. Growth and Enterprise plans include priority support. You're never left hanging." },
  { q: "Is this affordable for a small business?", a: "Yes — our Starter plan is designed specifically for small businesses. The ROI typically pays for itself within the first month through saved time and captured leads." },
  { q: "Can I see it before I pay?", a: "Of course. Book a free strategy call and we'll show you a live demo tailored to your business. No pressure, no obligation." },
];

const FAQSection = () => (
  <section id="faq" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-bold text-center mb-14 text-foreground"
      >
        Frequently Asked <span className="gradient-text">Questions</span>
      </motion.h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <AccordionItem value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6">
              <AccordionTrigger className="text-left font-heading font-semibold text-card-foreground hover:text-primary transition-colors">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
