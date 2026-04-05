import { motion } from "framer-motion";
import { MessageSquare, Target, Calendar, Star, Share2, Cog } from "lucide-react";

const services = [
  { icon: MessageSquare, title: "AI Customer Service Agent", desc: "24/7 WhatsApp and web chat agent. Answers FAQs, qualifies leads, escalates when needed.", popular: true },
  { icon: Target, title: "Lead Capture & Follow-Up System", desc: "Captures leads from any source, auto follow-up via WhatsApp/email until they book or buy.", popular: false },
  { icon: Calendar, title: "Booking & Appointment Automation", desc: "Self-booking, automated reminders, reduces no-shows by up to 60%.", popular: false },
  { icon: Star, title: "Review & Reputation Manager", desc: "Auto-requests Google reviews from happy customers, AI-drafted responses.", popular: false },
  { icon: Share2, title: "Social Media & Content Automation", desc: "Generates, schedules, posts to Facebook & Instagram consistently.", popular: false },
  { icon: Cog, title: "Custom AI Business Workflows", desc: "Any repetitive process mapped and automated: invoices, onboarding, reporting.", popular: false },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-foreground"
      >
        AI Systems That Actually <span className="gradient-text">Move the Needle</span>
      </motion.h2>
      <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
        Every system is built to solve a real problem in your business — not just look cool.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative bg-card border border-border rounded-xl p-7 card-hover group"
          >
            {s.popular && (
              <span className="absolute -top-3 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon className="text-primary" size={22} />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-2 text-card-foreground">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
