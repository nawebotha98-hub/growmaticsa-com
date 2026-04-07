import { motion } from "framer-motion";
import { UtensilsCrossed, ShoppingBag, Sparkles, Hammer } from "lucide-react";

const industries = [
  { icon: UtensilsCrossed, title: "Restaurants & Cafés", desc: "Reservations, WhatsApp orders, reviews, loyalty programs." },
  { icon: ShoppingBag, title: "Retail & Local Shops", desc: "Restock alerts, promos, enquiry management." },
  { icon: Sparkles, title: "Beauty & Wellness", desc: "Self-booking, reminders, rebooking nudges." },
  { icon: Hammer, title: "Trades & Services", desc: "Lead qualification, quote follow-up, scheduling." },
];

const IndustriesSection = () => (
  <section id="industries" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
          Built for SA's <span className="gradient-text">Local Business Owners</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          We understand the hustle. Our systems are designed for businesses like yours.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {industries.map((ind, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card border border-border rounded-xl p-6 text-center card-hover"
          >
            <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <ind.icon className="text-accent" size={22} />
            </div>
            <h3 className="font-heading text-base font-bold mb-1.5 text-card-foreground">{ind.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{ind.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
