import { motion } from "framer-motion";
import { UtensilsCrossed, ShoppingBag, Sparkles, Hammer } from "lucide-react";

const industries = [
  { icon: UtensilsCrossed, title: "Restaurants & Cafés", desc: "Reservations, WhatsApp orders, reviews, loyalty programs." },
  { icon: ShoppingBag, title: "Retail & Local Shops", desc: "Restock alerts, promos, enquiry management." },
  { icon: Sparkles, title: "Beauty & Wellness", desc: "Self-booking, reminders, rebooking nudges." },
  { icon: Hammer, title: "Trades & Services", desc: "Lead qualification, quote follow-up, scheduling." },
];

const IndustriesSection = () => (
  <section id="industries" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-foreground"
      >
        Built for SA's <span className="gradient-text">Local Business Owners</span>
      </motion.h2>
      <p className="text-center text-muted-foreground mb-14 max-w-md mx-auto">
        We understand the hustle. Our systems are designed for businesses like yours.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {industries.map((ind, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-7 text-center card-hover"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <ind.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-2 text-card-foreground">{ind.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{ind.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
