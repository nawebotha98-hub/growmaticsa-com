import { motion } from "framer-motion";
import { Clock, Users, Zap, MapPin } from "lucide-react";

const stats = [
  { icon: Clock, label: "24/7 Automated Responses" },
  { icon: Users, label: "ZERO Extra Staff Needed" },
  { icon: Zap, label: "2–3 Days Average Setup" },
  { icon: MapPin, label: "100% Built for SA Businesses" },
];

const TrustBar = () => (
  <section className="bg-surface-darker py-10 border-y border-primary/10">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center gap-3 text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <s.icon className="text-primary" size={22} />
            </div>
            <span className="text-surface-dark-foreground/90 text-sm font-semibold tracking-wide">
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
