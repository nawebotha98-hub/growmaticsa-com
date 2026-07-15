import { Mail, MapPin } from "lucide-react";
import Logo from "./Logo";
import FooterGrowthCanvas from "./FooterGrowthCanvas";
import { trackWhatsAppClick } from "@/lib/trackWhatsAppClick";

const WHATSAPP_CALL = "https://wa.me/27671082665?text=Hi!%20I'd%20like%20to%20book%20a%20free%20strategy%20call.";
const WHATSAPP_GENERAL = "https://wa.me/27671082665?text=Hi!%20I'd%20like%20to%20learn%20more%20about%20GrowMatic%20SA.";

const Footer = () => (
  <footer className="section-paper border-t border-hairline">
    <div className="container mx-auto px-6 pt-24 pb-8">
      <div className="grid lg:grid-cols-12 gap-12 pb-20">
        <div className="lg:col-span-5">
          <a href="#top" className="inline-flex items-center mb-6">
            <Logo height={48} />
          </a>
          <p className="text-graphite text-[15px] font-light max-w-sm" style={{ lineHeight: 1.7 }}>
            We help South African businesses win more customers, respond faster and cut the admin — practical growth solutions that work quietly in the background, 24/7.
          </p>
          <div className="mt-8 flex items-center gap-3 flex-wrap">
            <a
              href={WHATSAPP_CALL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("footer_book_call", "Hi! I'd like to book a free strategy call.")}
              className="inline-flex items-center gap-2 bg-signal text-white px-6 py-3 rounded-full text-sm font-medium hover:brightness-110 active:scale-[0.98] transition"
            >
              Book a consultation
            </a>
            <a
              href={WHATSAPP_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("footer_whatsapp_us", "Hi! I'd like to learn more about GrowMatic SA.")}
              className="inline-flex items-center gap-2 border border-hairline text-ink px-6 py-3 rounded-full text-sm font-medium hover:bg-white transition"
            >
              WhatsApp us
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10 pt-3">
          <div>
            <div className="eyebrow text-graphite mb-5">Company</div>
            <div className="flex flex-col gap-3">
              {[
                { label: "Solutions", href: "#services" },
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
              <a href="#coming-soon" className="text-ink text-sm hover:text-signal transition-colors">Virtual Receptionist</a>
              <a href="#cta" className="text-ink text-sm hover:text-signal transition-colors">Contact</a>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <div className="eyebrow text-graphite mb-5">Get in touch</div>
            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:ewan@growmaticsa.com" className="flex items-center gap-2 text-ink hover:text-signal transition-colors">
                <Mail size={14} /> ewan@growmaticsa.com
              </a>
              <a
                href={WHATSAPP_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("footer_phone_link", "Hi! I'd like to learn more about GrowMatic SA.")}
                className="text-ink hover:text-signal transition-colors"
              >
                +27 67 108 2665
              </a>
              <span className="flex items-center gap-2 text-graphite">
                <MapPin size={14} /> South Africa
              </span>
            </div>
          </div>
        </div>
      </div>

      <FooterGrowthCanvas />

      <div className="pt-6 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-3 eyebrow text-graphite">
        <span>© 2026 GrowMatic SA · All rights reserved</span>
        <span>growmaticsa.com</span>
        <span>Proudly South African</span>
      </div>
    </div>
  </footer>
);

export default Footer;
