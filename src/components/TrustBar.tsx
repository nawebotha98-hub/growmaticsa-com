import { motion } from "framer-motion";
import { Clock, Users, Zap, MapPin } from "lucide-react";

const stats = [
  { icon: Clock, label: "24/7 Automated Responses", color: "text-primary" },
  { icon: Users, label: "Zero Extra Staff Needed", color: "text-primary" },
  { icon: Zap, label: "2-Week Average Setup", color: "text-primary" },
  { icon: MapPin, label: "100% Built for SA", color: "text-primary" },
];

const TrustBar = () => (
  <section className="py-12 bg-background border-b border-border">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
              <s.icon className={s.color} size={20} />
            </div>
            <span className="text-foreground text-sm font-semibold leading-tight">
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
