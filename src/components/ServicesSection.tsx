import { motion } from "framer-motion";
import { MessageSquare, Target, Calendar, Star, Share2, Cog } from "lucide-react";

const services = [
  { icon: MessageSquare, title: "AI Customer Service Agent", desc: "24/7 WhatsApp and web chat agent. Answers FAQs, qualifies leads, escalates when needed.", popular: true },
  { icon: Target, title: "Lead Capture & Follow-Up", desc: "Captures leads from any source, auto follow-up via WhatsApp/email until they book or buy.", popular: false },
  { icon: Calendar, title: "Booking & Appointments", desc: "Self-booking, automated reminders, reduces no-shows by up to 60%.", popular: false },
  { icon: Star, title: "Review & Reputation Manager", desc: "Auto-requests Google reviews from happy customers, AI-drafted responses.", popular: false },
  { icon: Share2, title: "Social Media Automation", desc: "Generates, schedules, posts to Facebook & Instagram consistently.", popular: false },
  { icon: Cog, title: "Custom AI Workflows", desc: "Any repetitive process mapped and automated: invoices, onboarding, reporting.", popular: false },
];

const ServicesSection = () => (
  <section id="services" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
          AI Systems That Actually <span className="gradient-text">Move the Needle</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Every system is built to solve a real problem — not just look cool.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="relative bg-card border border-border rounded-xl p-6 card-hover group"
          >
            {s.popular && (
              <span className="absolute -top-2.5 right-4 bg-[hsl(42_65%_47%)] text-white text-xs font-bold px-3 py-0.5 rounded-full">
                Most Popular
              </span>
            )}
            <div className="w-10 h-10 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
              <s.icon className="text-primary" size={20} />
            </div>
            <h3 className="font-heading text-base font-bold mb-1.5 text-card-foreground">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
