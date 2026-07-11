import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Phone, Mail, Calendar } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/trackWhatsAppClick";

const WHATSAPP_NUMBER = "27671082665";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to chat with someone at GrowMatic SA.")}`;
const CONTACT_EMAIL = "ewan@growmaticsa.com";
const CHAT_API_URL = import.meta.env.VITE_CHAT_API_URL as string | undefined;
const SESSION_KEY = "growmatic_chat_session_id";
const HISTORY_KEY = "growmatic_chat_history";

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
    "Hi! I'm the GrowMatic SA assistant — ask me about our AI automation services, pricing, or tell me a bit about your business and I'll point you in the right direction.",
};

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showEscalation, setShowEscalation] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sessionIdRef = useRef<string>("");

  useEffect(() => {
    sessionIdRef.current = getOrCreateSessionId();
    const history = loadHistory();
    setMessages(history.length > 0 ? history : [GREETING]);
  }, []);

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
      setError("Couldn't reach the assistant — please try again, or contact us directly below.");
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
      <motion.button
        onClick={() => setOpen((v) => !v)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4, type: "spring" }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full bg-signal text-white shadow-[0_10px_40px_-10px_rgba(31,157,92,0.6)] flex items-center justify-center"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={24} />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle size={24} />
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
            className="fixed bottom-24 right-6 z-[60] w-[calc(100vw-2rem)] max-w-[380px] h-[min(70vh,600px)] rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="px-5 py-4 border-b border-white/10 flex items-center gap-3 bg-white/[0.02]">
              <div className="w-9 h-9 rounded-full bg-signal/15 flex items-center justify-center">
                <MessageCircle size={18} className="text-signal" />
              </div>
              <div>
                <div className="text-white text-[14px] font-medium">GrowMatic Assistant</div>
                <div className="text-white/40 text-[11px]">Usually replies in seconds</div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-[13px] leading-relaxed whitespace-pre-wrap ${
                      m.role === "user" ? "bg-signal text-white rounded-tr-sm" : "bg-white/[0.06] text-white/90 rounded-tl-sm"
                    }`}
                  >
                    {m.content}
                  </div>
                </motion.div>
              ))}

              {sending && (
                <div className="flex justify-start">
                  <div className="bg-white/[0.06] rounded-xl rounded-tl-sm px-3.5 py-2.5 flex gap-1">
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
                placeholder="Ask about services, pricing, or tell us about your business…"
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
