import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import { useSiteContent } from "@/lib/useSiteContent";

type Service = { eyebrow: string; title: string; desc: string };

const defaultServices: Service[] = [
  {
    eyebrow: "Customer Communication",
    title: "24/7 Customer Response.",
    desc: "The problem: enquiries come in after hours and on WhatsApp, email and your website — and a slow reply loses the sale. Our always-on response system answers every customer in seconds, day or night, across all three channels, and only brings you in when a real person is genuinely needed. The result: no enquiry ever goes cold, and you look bigger and more professional than the competition.",
  },
  {
    eyebrow: "Lead Management",
    title: "Turn More Enquiries Into Customers.",
    desc: "The problem: most leads never get a second follow-up, so they quietly go cold. We capture every enquiry from every source and follow up automatically over WhatsApp and email until the customer books, buys, or clearly says no. The result: more of the leads you already pay to get actually turn into paying customers.",
  },
  {
    eyebrow: "Bookings & Scheduling",
    title: "Effortless Booking & Appointments.",
    desc: "The problem: back-and-forth to set a time, plus costly no-shows. Customers self-book in seconds, and friendly reminders go out automatically before every appointment. The result: a fuller diary, far fewer no-shows, and zero admin on your side.",
  },
  {
    eyebrow: "Never Miss a Lead",
    title: "Every Missed Call, Recovered.",
    desc: "The problem: when you can't get to the phone, most callers don't leave a message — they just call the next business. The moment a call is missed, we send the caller a friendly WhatsApp within seconds. The result: a missed call becomes a live conversation instead of a lost customer — ideal for trades, medical, security and anyone who can't stop mid-job to answer.",
  },
  {
    eyebrow: "Business Intelligence",
    title: "See Your Business at a Glance.",
    desc: "The problem: your bookings and leads are scattered across your phone, inbox and memory. A private, always-current dashboard shows every upcoming booking and new lead in one place — no extra app, no separate login. The result: you always know exactly where the business stands, without digging for it.",
  },
  {
    eyebrow: "Reputation & Reviews",
    title: "Build a 5-Star Reputation.",
    desc: "The problem: your happiest customers rarely leave a review, and reviews you do get sit unanswered. We ask satisfied customers for a Google review at exactly the right moment and draft an on-brand reply to every review for you to approve in one tap. The result: more 5-star reviews, more trust, and more new customers finding you online.",
  },
  {
    eyebrow: "Marketing on Autopilot",
    title: "Show Up Consistently, Effortlessly.",
    desc: "The problem: staying active on social media falls to the bottom of the list every week. We create, schedule and post to Facebook and Instagram consistently on your behalf. The result: your business stays visible and top-of-mind — without you ever opening the app.",
  },
  {
    eyebrow: "Process Optimisation",
    title: "Streamline the Work Behind the Scenes.",
    desc: "The problem: quotes, invoices, onboarding and reporting eat hours of manual admin every week. We map the repetitive processes in your business and take them off your plate. The result: less manual work, fewer mistakes, and more time to focus on growth. If your team is repeating it, we can streamline it.",
  },
];

const ServicesSection = () => {
  const services = useSiteContent<Service[]>("services", defaultServices);

  return (
  <section id="services" className="section-paper">
    <div className="container mx-auto px-6 py-32 md:py-40 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <div className="eyebrow text-graphite mb-6">Our Solutions</div>
        <h2
          className="font-heading font-extrabold text-ink leading-[1.05] max-w-3xl"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", letterSpacing: "-0.04em" }}
        >
          Solutions that <span className="text-signal">grow your business</span>.
        </h2>
      </motion.div>

      <div>
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-t border-hairline"
          >
            <TiltCard max={3} className="grid md:grid-cols-12 gap-8 py-12 md:py-14 will-change-transform">
              <div className="md:col-span-3">
                <div className="eyebrow text-graphite">{s.eyebrow}</div>
              </div>
              <div className="md:col-span-9">
                <h3
                  className="font-heading font-bold text-ink mb-4"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
                >
                  {s.title}
                </h3>
                <p className="text-graphite text-[17px] font-light max-w-[60ch]" style={{ lineHeight: 1.7 }}>
                  {s.desc}
                </p>
              </div>
            </TiltCard>
          </motion.div>
        ))}
        <div className="border-t border-hairline" />
      </div>
    </div>
  </section>
  );
};

export default ServicesSection;
