import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Send, Phone, Mail, Calendar, MessageCircle } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/trackWhatsAppClick";
import LogoIcon from "./LogoIcon";

const WHATSAPP_NUMBER = "27671082665";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to chat with someone at GrowMatic SA.")}`;
const CONTACT_EMAIL = "ewan@growmaticsa.com";
const CHAT_API_URL = import.meta.env.VITE_CHAT_API_URL as string | undefined;
const SESSION_KEY = "growmatic_chat_session_id";
const HISTORY_KEY = "growmatic_chat_history";
const TEASER_DISMISSED_KEY = "growmatic_chat_teaser_dismissed";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function getOrCreateSessionId(): string {
  const existing = localStorage.getItem(SESSION_KEY);
  if (existing) return existing;
  const fresh = crypto.randomUUID();
  localStorage.setItem(SESSION_KEY, fresh);
  return fresh;
}

function loadHistory(): ChatMessage[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveHistory(messages: ChatMessage[]) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(messages.slice(-40)));
}

const GREETING: ChatMessage = {
  role: "assistant",
  content:
    "Hi, I'm Matt from GrowMatic SA. Ask me about our AI automation services, pricing, or tell me a bit about your business and I'll point you in the right direction.",
};

const WhatsAppIcon = ({ size = 26 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className="fill-white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showEscalation, setShowEscalation] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sessionIdRef = useRef<string>("");

  useEffect(() => {
    sessionIdRef.current = getOrCreateSessionId();
    const history = loadHistory();
    setMessages(history.length > 0 ? history : [GREETING]);

    if (!localStorage.getItem(TEASER_DISMISSED_KEY)) {
      const timer = setTimeout(() => setShowTeaser(true), 1600);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismissTeaser = () => {
    setShowTeaser(false);
    localStorage.setItem(TEASER_DISMISSED_KEY, "1");
  };

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, sending, open]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || sending) return;

    const nextMessages = [...messages, { role: "user" as const, content: text }];
    setMessages(nextMessages);
    saveHistory(nextMessages);
    setInput("");
    setSending(true);
    setError(null);

    if (!CHAT_API_URL) {
      setError("Chat isn't configured yet — please reach out on WhatsApp or email instead.");
      setShowEscalation(true);
      setSending(false);
      return;
    }

    try {
      const res = await fetch(CHAT_API_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ sessionId: sessionIdRef.current, message: text }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      const withReply = [...nextMessages, { role: "assistant" as const, content: data.reply }];
      setMessages(withReply);
      saveHistory(withReply);

      if (data.bookingRequested || data.leadCaptured) {
        setShowEscalation(true);
      }
    } catch (err) {
      setError("Couldn't reach Matt — please try again, or contact us directly below.");
      setShowEscalation(true);
    } finally {
      setSending(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* WhatsApp — stacked just above the chat launcher, hidden while chat is open */}
      <AnimatePresence>
        {!open && (
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("floating_button")}
            aria-label="Chat on WhatsApp"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.35, type: "spring" }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-24 right-6 z-[60] w-14 h-14 rounded-full bg-[#25D366] shadow-[0_10px_40px_-10px_rgba(37,211,102,0.6)] flex items-center justify-center"
          >
            <WhatsAppIcon />
          </motion.a>
        )}
      </AnimatePresence>

      {/* "Need help?" teaser — makes it unmistakable this is a chat, not just a logo */}
      <AnimatePresence>
        {showTeaser && !open && (
          <motion.div
            initial={{ opacity: 0, x: 12, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-7 right-24 z-[60] max-w-[210px] bg-white text-ink text-[13px] font-medium leading-snug px-4 py-3 rounded-2xl rounded-br-md shadow-[0_10px_30px_-8px_rgba(0,0,0,0.3)] flex items-start gap-2"
          >
            <button
              onClick={() => {
                dismissTeaser();
                setOpen(true);
              }}
              className="text-left flex-1"
            >
              Need help? Ask me anything 👋
            </button>
            <button
              onClick={dismissTeaser}
              aria-label="Dismiss"
              className="shrink-0 text-ink/30 hover:text-ink/60 -mt-0.5 -mr-0.5"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Matt — the chat launcher */}
      <motion.button
        onClick={() => {
          setOpen((v) => !v);
          if (showTeaser) dismissTeaser();
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4, type: "spring" }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? "Close chat" : "Chat with Matt"}
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full bg-signal shadow-[0_10px_40px_-10px_rgba(31,157,92,0.6)] flex items-center justify-center"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={22} className="text-white" />
            </motion.span>
          ) : (
            <motion.span key="bubble" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.7, opacity: 0 }}>
              <MessageCircle size={24} className="text-white" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-[60] w-[calc(100vw-2rem)] max-w-[380px] h-[min(70vh,600px)] rounded-[1.5rem] bg-[#0a0a0a] border border-white/10 shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="px-5 py-4 border-b border-white/10 flex items-center gap-3 bg-white/[0.03]">
              <div className="relative shrink-0">
                <LogoIcon size={38} />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-signal ring-2 ring-[#0a0a0a]" />
              </div>
              <div className="min-w-0">
                <div className="text-white text-[14px] font-medium leading-tight">Matt</div>
                <div className="text-white/40 text-[11px] leading-tight">GrowMatic SA · usually replies in seconds</div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-end gap-2 ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {m.role === "assistant" && <LogoIcon size={22} className="mb-0.5 shrink-0" />}
                  <div
                    className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed whitespace-pre-wrap ${
                      m.role === "user"
                        ? "bg-signal text-white rounded-br-md"
                        : "bg-white/[0.07] text-white/90 rounded-bl-md"
                    }`}
                  >
                    {m.content}
                  </div>
                </motion.div>
              ))}

              {sending && (
                <div className="flex items-end gap-2 justify-start">
                  <LogoIcon size={22} className="mb-0.5 shrink-0" />
                  <div className="bg-white/[0.07] rounded-2xl rounded-bl-md px-3.5 py-2.5 flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-white/50"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {error && <div className="text-[12px] text-red-400/90 px-1">{error}</div>}
            </div>

            <AnimatePresence>
              {showEscalation && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t border-white/10 px-4 py-3 flex gap-2 overflow-hidden"
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick("chat_widget_escalation")}
                    className="flex-1 flex items-center justify-center gap-1.5 text-[11px] font-medium text-white/80 border border-white/15 rounded-lg py-2 hover:bg-white/5 transition-colors"
                  >
                    <Phone size={13} /> WhatsApp
                  </a>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex-1 flex items-center justify-center gap-1.5 text-[11px] font-medium text-white/80 border border-white/15 rounded-lg py-2 hover:bg-white/5 transition-colors"
                  >
                    <Mail size={13} /> Email
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick("chat_widget_book_call")}
                    className="flex-1 flex items-center justify-center gap-1.5 text-[11px] font-medium text-white/80 border border-white/15 rounded-lg py-2 hover:bg-white/5 transition-colors"
                  >
                    <Calendar size={13} /> Book a call
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="border-t border-white/10 p-3 flex items-end gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask Matt about services, pricing, or your business…"
                rows={1}
                className="flex-1 resize-none bg-white/[0.06] text-white text-[13px] placeholder:text-white/30 rounded-xl px-3.5 py-2.5 outline-none focus:ring-1 focus:ring-signal/50 max-h-24"
              />
              <button
                onClick={sendMessage}
                disabled={sending || !input.trim()}
                aria-label="Send message"
                className="w-9 h-9 rounded-full bg-signal text-white flex items-center justify-center shrink-0 disabled:opacity-30 disabled:cursor-not-allowed hover:brightness-110 transition"
              >
                <Send size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
