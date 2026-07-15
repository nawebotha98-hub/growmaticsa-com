import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Mail, MessageCircle } from "lucide-react";
import LogoIcon from "./LogoIcon";

// The hero device tells the whole GrowMatic story in one loop: a customer
// message arrives on WhatsApp (phone), then the phone becomes the owner's
// laptop, where the same system answers email, handles the website chat
// (Matt, on growmaticsa.com itself), and rolls everything up into one
// dashboard. Phone ↔ laptop is a crossfade+3D transform; the three laptop
// views crossfade inside the same screen.
const STAGE_MS = 4300;
const CAPTIONS = ["On WhatsApp", "In your inbox", "On your website", "One dashboard"];

const TrafficDots = () => (
  <span className="flex gap-1.5 shrink-0">
    <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
    <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
    <span className="w-2 h-2 rounded-full bg-[#28c840]" />
  </span>
);

/* ---------------- Phone: WhatsApp ---------------- */

const waMsgs = [
  { us: false, text: "Hi, are you open on Sundays?", time: "14:02" },
  { us: true, text: "We're closed Sundays, but open Mon–Sat 9am–9pm 😊", time: "14:02" },
  { us: false, text: "Can I book for 4 on Friday at 7?", time: "14:03" },
  { us: true, text: "Done — Friday 7pm for 4 is confirmed ✅ Reminder set.", time: "14:03" },
];

const PhoneDevice = () => (
  <div className="relative mx-auto w-[262px]">
    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/20 blur-2xl rounded-full" />
    <div className="relative rounded-[2.4rem] bg-black p-2.5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)]">
      <div className="rounded-[1.9rem] overflow-hidden bg-white h-[498px] flex flex-col">
        <div className="bg-[#075E54] text-white px-3.5 py-2.5 flex items-center gap-2.5 shrink-0">
          <LogoIcon size={32} />
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-medium leading-tight">GrowMatic Assistant</div>
            <div className="text-[10px] opacity-80 leading-tight">online</div>
          </div>
        </div>
        <div
          className="flex-1 min-h-0 px-3 py-3.5 space-y-2 overflow-hidden"
          style={{
            backgroundColor: "#ECE5DD",
            backgroundImage: "radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        >
          {waMsgs.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.5, duration: 0.3 }}
              className={`flex ${m.us ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[82%] px-3 py-2 rounded-lg text-[12.5px] leading-snug shadow-sm ${
                  m.us ? "bg-[#DCF8C6] text-[#0a0a0a] rounded-tr-sm" : "bg-white text-[#0a0a0a] rounded-tl-sm"
                }`}
              >
                {m.text}
                <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-black/45">
                  {m.time}
                  {m.us && <Check size={10} className="text-[#34B7F1] -ml-0.5" />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ---------------- Laptop shell ---------------- */

const Laptop = ({ children }: { children: React.ReactNode }) => (
  <div className="relative mx-auto w-[430px] max-w-full">
    <div className="relative rounded-t-[14px] bg-[#0a0a0a] p-2 shadow-[0_26px_64px_-26px_rgba(0,0,0,0.45)]">
      <div className="rounded-[7px] overflow-hidden bg-white" style={{ aspectRatio: "16 / 10" }}>
        {children}
      </div>
    </div>
    <div className="relative">
      <div
        className="mx-auto h-[13px] bg-gradient-to-b from-[#e0e4e9] to-[#b4bac4]"
        style={{ width: "116%", marginLeft: "-8%", clipPath: "polygon(3% 0, 97% 0, 100% 100%, 0 100%)" }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[5px] w-16 rounded-b-[6px] bg-[#99a0ab]" />
    </div>
    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[80%] h-6 bg-black/20 blur-2xl rounded-full" />
  </div>
);

/* ---------------- Laptop screen 1: Email ---------------- */

const emailRows = [
  { name: "Sarah — Woodlands Dental", subj: "Appointment availability", time: "now", initial: "S" },
  { name: "Themba Mokoena", subj: "Quote for office cleaning", time: "2m", initial: "T" },
];

const EmailScreen = () => (
  <div className="h-full flex flex-col text-left bg-[#f4f4f5]">
    <div className="flex items-center gap-2 px-3 py-2 bg-white border-b border-black/5 shrink-0">
      <TrafficDots />
      <div className="flex items-center gap-1.5 ml-1 text-[11px] font-semibold text-[#0a0a0a]">
        <Mail size={12} className="text-signal" /> Inbox — GrowMatic SA
      </div>
      <span className="ml-auto text-[9px] font-medium text-signal bg-signal/10 rounded-full px-2 py-0.5">Auto-reply on</span>
    </div>
    <div className="flex-1 min-h-0 p-2.5 space-y-2 overflow-hidden">
      {emailRows.map((r, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.25, duration: 0.3 }}
          className="bg-white rounded-lg px-2.5 py-2 shadow-sm flex items-center gap-2"
        >
          <div className="w-6 h-6 rounded-full bg-signal/10 flex items-center justify-center text-signal text-[10px] font-bold shrink-0">
            {r.initial}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-semibold text-[#0a0a0a] truncate">{r.name}</span>
              <span className="text-[9px] text-black/40 shrink-0">{r.time}</span>
            </div>
            <div className="text-[10px] text-black/55 truncate">{r.subj}</div>
          </div>
          <span className="text-[8px] font-medium text-signal bg-signal/10 rounded-full px-1.5 py-0.5 shrink-0 flex items-center gap-0.5">
            <Check size={8} /> replied
          </span>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.35 }}
        className="bg-signal/[0.08] border border-signal/20 rounded-lg p-2.5"
      >
        <div className="text-[9px] font-medium text-signal mb-1 flex items-center gap-1">
          <Check size={9} /> Replied automatically · in seconds
        </div>
        <div className="text-[10.5px] text-[#0a0a0a] leading-snug">
          Hi Sarah! Thanks for reaching out 😊 We've got Thursday 10:30 or Friday 14:00 open — want me to book one in for you?
        </div>
      </motion.div>
    </div>
  </div>
);

/* ---------------- Laptop screen 2: Website (growmaticsa.com + Matt) ---------------- */

const WebsiteScreen = () => (
  <div className="h-full flex flex-col bg-white text-left">
    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#ececee] border-b border-black/5 shrink-0">
      <TrafficDots />
      <div className="ml-1 flex items-center gap-1 bg-white rounded-full px-2.5 py-1 text-[9px] text-black/50">
        <span className="text-signal">🔒</span> growmaticsa.com
      </div>
    </div>
    <div className="flex-1 min-h-0 relative overflow-hidden" style={{ background: "linear-gradient(180deg,#f7f8f7,#eef1ee)" }}>
      <div className="flex items-center justify-between px-3.5 py-2">
        <span className="text-[10px] font-extrabold text-[#0a0a0a]">
          GrowMatic<span className="text-signal"> SA</span>
        </span>
        <span className="flex items-center gap-2 text-[8px] text-black/50">
          <span>Solutions</span>
          <span>Pricing</span>
          <span className="bg-[#0a0a0a] text-white rounded-full px-2 py-0.5">Book a call</span>
        </span>
      </div>
      <div className="px-3.5 pt-2">
        <div className="text-[20px] leading-[1.02] font-extrabold text-[#0a0a0a] tracking-tight">
          Win more customers.
          <br />
          Work <span className="text-signal">less</span>.
        </div>
        <div className="mt-2 text-[9px] text-black/55 max-w-[62%] leading-snug">
          Reply to every enquiry in seconds and win more sales — without the admin.
        </div>
        <div className="mt-2.5 inline-flex items-center gap-1 bg-signal text-white rounded-full px-3 py-1.5 text-[9px] font-medium">
          Book your free consultation →
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.4 }}
        className="absolute bottom-2.5 right-2.5 w-[152px]"
      >
        <div className="rounded-xl bg-[#0a0a0a] border border-white/10 shadow-lg overflow-hidden">
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 border-b border-white/10">
            <div className="relative">
              <LogoIcon size={16} />
              <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-signal ring-1 ring-[#0a0a0a]" />
            </div>
            <div className="text-[9px] text-white font-medium leading-none">Matt</div>
            <span className="ml-auto text-[7px] text-white/40 leading-none">online</span>
          </div>
          <div className="p-2 space-y-1.5">
            <div className="text-[8.5px] text-white/85 bg-white/10 rounded-lg rounded-tl-sm px-2 py-1 max-w-[88%]">
              Do you work with medical practices?
            </div>
            <div className="text-[8.5px] text-white bg-signal rounded-lg rounded-tr-sm px-2 py-1 max-w-[92%] ml-auto">
              We do! Want a quick demo? 🚀
            </div>
          </div>
        </div>
        <div className="ml-auto mt-1.5 w-7 h-7 rounded-full bg-signal shadow-lg flex items-center justify-center">
          <MessageCircle size={15} className="text-white" />
        </div>
      </motion.div>
    </div>
  </div>
);

/* ---------------- Laptop screen 3: Dashboard ---------------- */

const stats = [
  { label: "New leads", value: "12", note: "+3 today" },
  { label: "Bookings", value: "8", note: "this week" },
  { label: "Avg reply", value: "9s", note: "24/7" },
  { label: "Rating", value: "4.9★", note: "+18 reviews" },
];
const dashChats = [
  { ch: "WhatsApp", line: "Lindiwe — booked Fri 15:00" },
  { ch: "Website", line: "Visitor — asked about pricing" },
];
const dashMails = [
  { line: "Sarah — Dental · appointment" },
  { line: "Themba — quote sent" },
];

const DashboardScreen = () => (
  <div className="h-full flex flex-col bg-[#0d0d0f] text-left text-white">
    <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 shrink-0">
      <LogoIcon size={16} />
      <span className="text-[11px] font-semibold">GrowMatic Dashboard</span>
      <span className="ml-auto flex items-center gap-1 text-[8.5px] text-signal">
        <span className="w-1.5 h-1.5 rounded-full bg-signal" /> All systems active
      </span>
    </div>
    <div className="flex-1 min-h-0 p-2.5 flex flex-col gap-2 overflow-hidden">
      <div className="grid grid-cols-4 gap-1.5">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.3 }}
            className="bg-white/[0.06] rounded-lg px-2 py-1.5"
          >
            <div className="text-[8px] text-white/45 leading-tight">{s.label}</div>
            <div className="text-[15px] font-extrabold leading-tight tracking-tight">{s.value}</div>
            <div className="text-[7.5px] text-signal leading-tight">{s.note}</div>
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-1.5 flex-1 min-h-0">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="bg-white/[0.04] rounded-lg p-2 min-h-0"
        >
          <div className="text-[8.5px] text-white/50 mb-1.5">Recent chats</div>
          {dashChats.map((c, i) => (
            <div key={i} className="flex items-center gap-1.5 mb-1.5">
              <span className="text-[7px] rounded px-1 py-0.5 bg-white/10 text-white/70 shrink-0">{c.ch}</span>
              <span className="text-[9px] text-white/85 truncate flex-1">{c.line}</span>
              <Check size={9} className="text-signal shrink-0" />
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.3 }}
          className="bg-white/[0.04] rounded-lg p-2 min-h-0"
        >
          <div className="text-[8.5px] text-white/50 mb-1.5">Recent emails</div>
          {dashMails.map((c, i) => (
            <div key={i} className="flex items-center gap-1.5 mb-1.5">
              <Mail size={9} className="text-white/40 shrink-0" />
              <span className="text-[9px] text-white/85 truncate flex-1">{c.line}</span>
              <Check size={9} className="text-signal shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </div>
);

/* ---------------- Orchestrator ---------------- */

const HeroDevice = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setStage((s) => (s + 1) % 4), STAGE_MS);
    return () => clearInterval(timer);
  }, []);

  const isPhone = stage === 0;

  return (
    <div className="relative">
      <div className="relative flex items-center justify-center min-h-[520px]" style={{ perspective: 1200 }}>
        <AnimatePresence mode="wait">
          {isPhone ? (
            <motion.div
              key="phone"
              initial={{ opacity: 0, scale: 0.9, rotateY: -18 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.85, rotateY: 22 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full flex justify-center"
            >
              <PhoneDevice />
            </motion.div>
          ) : (
            <motion.div
              key="laptop"
              initial={{ opacity: 0, scale: 0.92, rotateY: 18 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: -18 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full flex justify-center"
            >
              <Laptop>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={stage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="h-full"
                  >
                    {stage === 1 && <EmailScreen />}
                    {stage === 2 && <WebsiteScreen />}
                    {stage === 3 && <DashboardScreen />}
                  </motion.div>
                </AnimatePresence>
              </Laptop>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <div className="flex items-center gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === stage ? "w-5 bg-signal" : "w-1.5 bg-ink/15"}`}
            />
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.span
            key={stage}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
            className="text-[12px] font-medium text-graphite w-[130px]"
          >
            {CAPTIONS[stage]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroDevice;
