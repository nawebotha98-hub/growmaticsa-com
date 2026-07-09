import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#how-it-works" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const WHATSAPP_CALL = "https://wa.me/27671082665?text=Hi!%20I'd%20like%20to%20book%20a%20free%20strategy%20call.";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/85 backdrop-blur-lg border-b border-hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logo} alt="" className="h-8 w-8 rounded-full object-cover" />
          <span className="font-heading font-extrabold text-ink text-lg" style={{ letterSpacing: "-0.02em" }}>
            GrowMatic <span className="text-signal">SA</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-ink/70 hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_CALL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ink text-white px-5 py-2.5 rounded-full text-[13px] font-medium hover:bg-signal transition-colors"
          >
            Book a call
          </a>
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-paper border-b border-hairline overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-ink/70 hover:text-ink transition-colors py-3 text-sm font-medium"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WHATSAPP_CALL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="bg-ink text-white px-5 py-3 rounded-full text-sm font-medium text-center mt-3"
              >
                Book a call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
