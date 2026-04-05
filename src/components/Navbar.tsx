import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-darker/90 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#" className="flex items-center">
          <img src={logo} alt="GrowMatic SA" className="h-10 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-surface-dark-foreground/70 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:brightness-110 transition"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-surface-dark-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-surface-darker overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-4 pb-6">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-surface-dark-foreground/70 hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold text-center"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
