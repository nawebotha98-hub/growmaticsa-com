import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const WHATSAPP_CALL = "https://wa.me/27671082665?text=Hi!%20I'd%20like%20to%20book%20a%20free%20strategy%20call.";

type Msg = { from: "customer" | "agent"; text: string; time: string };
const messages: Msg[] = [
  { from: "customer", text: "Hi, are you open on Sundays?", time: "14:02" },
  { from: "agent", text: "We're closed Sundays, but open Mon–Sat 9am–9pm. Anything else I can help with?", time: "14:02" },
  { from: "customer", text: "Can I book a table for 4 on Friday at 7?", time: "14:03" },
  { from: "agent", text: "Done — Friday 7pm for 4 is confirmed ✅ I'll send a reminder the morning of.", time: "14:03" },
];

const PhoneMock = () => (
  <div className="relative mx-auto w-[300px] sm:w-[340px]">
    {/* soft floor shadow */}
    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/20 blur-2xl rounded-full" />
    <div className="relative rounded-[2.75rem] bg-black p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)]">
      {/* screen */}
      <div className="rounded-[2.25rem] overflow-hidden bg-[#ECE5DD] h-[600px] flex flex-col">
        {/* whatsapp header */}
        <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#1f9d5c] flex items-center justify-center font-semibold text-sm">G</div>
          <div className="flex-1 min-w-0">
            <div className="text-[14px] font-medium leading-tight">GrowMatic Assistant</div>
            <div className="text-[11px] opacity-80 leading-tight">online</div>
          </div>
        </div>
        {/* chat area */}
        <div
          className="flex-1 px-3 py-4 space-y-2 overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        >
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.9, duration: 0.35 }}
              className={`flex ${m.from === "agent" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[78%] px-3 py-2 rounded-lg text-[13px] leading-snug shadow-sm ${
                  m.from === "agent"
                    ? "bg-[#DCF8C6] text-[#0a0a0a] rounded-tr-sm"
                    : "bg-white text-[#0a0a0a] rounded-tl-sm"
                }`}
              >
                {m.text}
                <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-black/45">
                  {m.time}
                  {m.from === "agent" && <Check size={11} className="text-[#34B7F1] -ml-0.5" />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Hero = () => (
  <section className="section-paper relative">
    <div className="container mx-auto px-6 pt-36 pb-32 md:pt-44 md:pb-40">
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow text-graphite mb-8"
          >
            South Africa · AI Automation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-heading font-extrabold text-ink leading-[1.02]"
            style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)", letterSpacing: "-0.04em" }}
          >
            Work less.
            <br />
            Sell <span className="text-signal">more</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-10 text-lg md:text-xl text-graphite font-light max-w-[60ch]"
            style={{ lineHeight: 1.7 }}
          >
            We build AI agents that answer your customers on WhatsApp, capture leads, and book appointments — 24/7. So you can run your business without being chained to it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <a
              href={WHATSAPP_CALL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-signal text-white px-8 py-4 rounded-full text-[15px] font-medium hover:brightness-110 active:scale-[0.98] transition"
            >
              Book a free strategy call
              <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 text-ink px-8 py-4 rounded-full text-[15px] font-medium border border-hairline hover:bg-white transition"
            >
              See what we build
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="lg:col-span-5"
        >
          <PhoneMock />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
