import { Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const WHATSAPP_CALL = "https://wa.me/27671082665?text=Hi!%20I'd%20like%20to%20book%20a%20free%20strategy%20call.";

const Footer = () => (
  <footer className="section-paper border-t border-hairline">
    <div className="container mx-auto px-6 pt-24 pb-10">
      <div className="grid lg:grid-cols-12 gap-12 pb-16">
        <div className="lg:col-span-5">
          <img src={logo} alt="GrowMatic SA" className="h-9 w-auto mb-6" />
          <p className="text-graphite text-[15px] font-light max-w-sm" style={{ lineHeight: 1.7 }}>
            We build AI agents and automation systems that keep South African businesses running 24/7.
          </p>
          <a
            href={WHATSAPP_CALL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-signal text-white px-6 py-3 rounded-full text-sm font-medium hover:brightness-110 active:scale-[0.98] transition"
          >
            Book a strategy call
          </a>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
          <div>
            <div className="eyebrow text-graphite mb-5">Company</div>
            <div className="flex flex-col gap-3">
              {[
                { label: "Services", href: "#services" },
                { label: "How it works", href: "#how-it-works" },
                { label: "Industries", href: "#industries" },
                { label: "Pricing", href: "#pricing" },
              ].map((l) => (
                <a key={l.label} href={l.href} className="text-ink text-sm hover:text-signal transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow text-graphite mb-5">Resources</div>
            <div className="flex flex-col gap-3">
              <a href="#faq" className="text-ink text-sm hover:text-signal transition-colors">FAQ</a>
              <a href="#cta" className="text-ink text-sm hover:text-signal transition-colors">Contact</a>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <div className="eyebrow text-graphite mb-5">Contact</div>
            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:hello@growmaticsa.co.za" className="flex items-center gap-2 text-ink hover:text-signal transition-colors">
                <Mail size={14} /> hello@growmaticsa.co.za
              </a>
              <span className="flex items-center gap-2 text-graphite">
                <MapPin size={14} /> South Africa
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="eyebrow text-graphite">© 2026 GrowMatic SA</p>
        <p className="eyebrow text-graphite">Proudly South African</p>
      </div>
    </div>
  </footer>
);

export default Footer;
