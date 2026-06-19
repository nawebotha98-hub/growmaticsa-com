import { Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const WHATSAPP_CALL = "https://wa.me/27671082665?text=Hi!%20I'd%20like%20to%20book%20a%20free%20strategy%20call.";

const Footer = () => (
  <footer className="relative bg-[hsl(212_45%_8%)] text-white overflow-hidden">
    {/* Top gradient seam */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

    <div className="relative container mx-auto px-6 pt-16 pb-8">
      {/* Top band */}
      <div className="grid lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
        <div className="lg:col-span-5">
          <img src={logo} alt="GrowMatic SA" className="h-10 w-auto mb-4" />
          <p className="text-white/70 text-base max-w-sm leading-relaxed">
            We build AI agents and automation systems that keep South African businesses running 24/7.
          </p>
          <a
            href={WHATSAPP_CALL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl text-sm font-semibold shadow-lg shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition cursor-pointer"
          >
            Book a Strategy Call
          </a>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4 uppercase tracking-wider text-white/90">
              Company
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Services", href: "#services" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Industries", href: "#industries" },
                { label: "Pricing", href: "#pricing" },
              ].map((l) => (
                <a key={l.label} href={l.href} className="text-white/60 text-sm hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4 uppercase tracking-wider text-white/90">
              Resources
            </h4>
            <div className="flex flex-col gap-2.5">
              <a href="#faq" className="text-white/60 text-sm hover:text-white transition-colors">FAQ</a>
              <a href="#cta" className="text-white/60 text-sm hover:text-white transition-colors">Contact</a>
              <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Terms</a>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-heading font-semibold text-white text-sm mb-4 uppercase tracking-wider text-white/90">
              Contact
            </h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="mailto:hello@growmaticsa.co.za" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                <Mail size={14} /> hello@growmaticsa.co.za
              </a>
              <span className="flex items-center gap-2 text-white/60">
                <MapPin size={14} /> South Africa
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom band */}
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-white/40">
          © 2025 GrowMatic SA. All rights reserved.
        </p>
        <div className="flex items-center gap-2 text-xs text-white/40">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Proudly South African · Built with precision
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
