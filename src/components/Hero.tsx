import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Mail } from "lucide-react";
import LogoIcon from "./LogoIcon";
import HeroCanvas from "./HeroCanvas";
import { trackWhatsAppClick } from "@/lib/trackWhatsAppClick";
import { DEMO_URL } from "@/lib/links";

const WHATSAPP_CALL = "https://wa.me/27671082665?text=Hi!%20I'd%20like%20to%20book%20a%20free%20strategy%20call.";

// The hero phone cycles through the three channels one system handles for
// you — WhatsApp, then email, then the website chat — each styled to look
// like the real thing, so a visitor instantly gets "every channel, covered".
const CHANNEL_LABELS = ["WhatsApp", "Email", "Website chat"];
const SCREEN_MS = 5200;

type Bubble = { from: "them" | "us"; text: string; time?: string };

const waMessages: Bubble[] = [
  { from: "them", text: "Hi, are you open on Sundays?", time: "14:02" },
  { from: "us", text: "We're closed Sundays, but open Mon–Sat 9am–9pm 😊", time: "14:02" },
  { from: "them", text: "Can I book for 4 on Friday at 7?", time: "14:03" },
  { from: "us", text: "Done — Friday 7pm for 4 is confirmed ✅ Reminder set.", time: "14:03" },
];

const webMessages: Bubble[] = [
  { from: "them", text: "Do you work with medical practices?" },
  { from: "us", text: "We do! We help practices cut no-shows and answer patients 24/7." },
  { from: "them", text: "Sounds good 👍" },
  { from: "us", text: "Want a quick demo? I can set it up in 2 minutes 🚀" },
];

const WhatsAppScreen = () => (
  <>
    <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3 shrink-0">
      <LogoIcon size={36} />
      <div className="flex-1 min-w-0">
        <div className="text-[14px] font-medium leading-tight">GrowMatic Assistant</div>
        <div className="text-[11px] opacity-80 leading-tight">online</div>
      </div>
    </div>
    <div
      className="flex-1 min-h-0 px-3 py-4 space-y-2 overflow-hidden"
      style={{
        backgroundColor: "#ECE5DD",
        backgroundImage: "radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)",
        backgroundSize: "14px 14px",
      }}
    >
      {waMessages.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.55, duration: 0.3 }}
          className={`flex ${m.from === "us" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[80%] px-3 py-2 rounded-lg text-[13px] leading-snug shadow-sm ${
              m.from === "us" ? "bg-[#DCF8C6] text-[#0a0a0a] rounded-tr-sm" : "bg-white text-[#0a0a0a] rounded-tl-sm"
            }`}
          >
            {m.text}
            <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-black/45">
              {m.time}
              {m.from === "us" && <Check size={11} className="text-[#34B7F1] -ml-0.5" />}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </>
);

const EmailScreen = () => (
  <>
    <div className="bg-white text-[#0a0a0a] px-4 py-3 flex items-center gap-3 shrink-0 border-b border-black/5">
      <div className="w-9 h-9 rounded-full bg-signal/10 flex items-center justify-center">
        <Mail size={18} className="text-signal" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[14px] font-semibold leading-tight">Inbox</div>
        <div className="text-[11px] text-black/45 leading-tight">Answered automatically · in seconds</div>
      </div>
    </div>
    <div className="flex-1 min-h-0 px-3.5 py-4 space-y-3 overflow-hidden bg-[#f4f4f5]">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.35 }}
        className="bg-white rounded-xl p-3.5 shadow-sm"
      >
        <div className="flex items-center justify-between">
          <div className="text-[12.5px] font-semibold text-[#0a0a0a]">Sarah — Woodlands Dental</div>
          <div className="text-[10px] text-black/40">now</div>
        </div>
        <div className="text-[11px] text-black/50 mb-2">Subject: Appointment availability</div>
        <div className="text-[12.5px] text-[#0a0a0a] leading-snug">
          Hi, do you have anything open this week for a check-up?
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.15, duration: 0.35 }}
        className="bg-signal/[0.08] border border-signal/20 rounded-xl p-3.5"
      >
        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-signal bg-signal/10 rounded-full px-2 py-0.5 mb-2">
          <Check size={11} /> Replied automatically
        </span>
        <div className="text-[12.5px] text-[#0a0a0a] leading-snug">
          Hi Sarah! Thanks for reaching out 😊 We've got Thursday 10:30 or Friday 14:00 open — want me to book one in for you?
        </div>
      </motion.div>
    </div>
  </>
);

const WebsiteScreen = () => (
  <>
    <div className="bg-[#0a0a0a] px-4 py-3 flex items-center gap-3 shrink-0 border-b border-white/10">
      <div className="relative">
        <LogoIcon size={36} />
        <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-signal ring-2 ring-[#0a0a0a]" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[14px] font-medium leading-tight text-white">Matt</div>
        <div className="text-[11px] text-white/40 leading-tight">usually replies in seconds</div>
      </div>
    </div>
    <div className="flex-1 min-h-0 px-3.5 py-4 space-y-2.5 overflow-hidden bg-[#0f0f10]">
      {webMessages.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.55, duration: 0.3 }}
          className={`flex ${m.from === "us" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[80%] px-3.5 py-2 rounded-2xl text-[13px] leading-relaxed ${
              m.from === "us" ? "bg-signal text-white rounded-br-md" : "bg-white/[0.08] text-white/90 rounded-bl-md"
            }`}
          >
            {m.text}
          </div>
        </motion.div>
      ))}
    </div>
  </>
);

const PhoneMock = () => {
  const [screen, setScreen] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setScreen((s) => (s + 1) % 3), SCREEN_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto w-[300px] sm:w-[340px]">
      {/* soft floor shadow */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/20 blur-2xl rounded-full" />
      <div className="relative rounded-[2.75rem] bg-black p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)]">
        {/* screen */}
        <div className="rounded-[2.25rem] overflow-hidden bg-white h-[600px] flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={screen}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="flex-1 min-h-0 flex flex-col"
            >
              {screen === 0 && <WhatsAppScreen />}
              {screen === 1 && <EmailScreen />}
              {screen === 2 && <WebsiteScreen />}
            </motion.div>
          </AnimatePresence>
          {/* channel indicator */}
          <div className="shrink-0 flex items-center justify-center gap-3 py-3.5 bg-[#0a0a0a]">
            <div className="flex items-center gap-1.5">
              {[0, 1, 2].map((idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === screen ? "w-5 bg-signal" : "w-1.5 bg-white/25"
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] font-medium text-white/70 w-[92px]">{CHANNEL_LABELS[screen]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => (
  <section id="top" className="section-paper relative overflow-hidden">
    <HeroCanvas />
    <div className="container mx-auto px-6 pt-36 pb-32 md:pt-44 md:pb-40 relative">
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow text-graphite mb-8"
          >
            South Africa · Business Growth Partner
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-heading font-extrabold text-ink leading-[1.02]"
            style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)", letterSpacing: "-0.04em" }}
          >
            Win more customers.
            <br />
            Work <span className="text-signal">less</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            data-multichannel="true"
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-10 text-lg md:text-xl text-graphite font-light max-w-[60ch]"
            style={{ lineHeight: 1.7 }}
          >
            GrowMatic SA helps South African businesses reply to every enquiry in seconds, follow up automatically, and take care of the admin in the background — so you capture more sales, look more professional, and get hours back every week.
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
              onClick={() => trackWhatsAppClick("hero_book_call", "Hi! I'd like to book a free strategy call.")}
              className="inline-flex items-center justify-center gap-2 bg-signal text-white px-8 py-4 rounded-full text-[15px] font-medium hover:brightness-110 active:scale-[0.98] transition"
            >
              Book your free business consultation
              <ArrowRight size={16} />
            </a>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-ink px-8 py-4 rounded-full text-[15px] font-medium border border-hairline hover:bg-white transition"
            >
              Try the live demo
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
