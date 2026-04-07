import { Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-surface-darker py-10">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <img src={logo} alt="GrowMatic SA" className="h-10 w-auto mb-3" />
          <p className="text-surface-dark-foreground/50 text-sm">Automate. Grow. Dominate.</p>
          <p className="text-surface-dark-foreground/35 text-xs mt-1">100% South African</p>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-surface-dark-foreground text-sm mb-3">Links</h4>
          <div className="flex flex-col gap-1.5">
            {[
              { label: "Services", href: "#services" },
              { label: "Pricing", href: "#pricing" },
              { label: "Industries", href: "#industries" },
              { label: "FAQ", href: "#faq" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="text-surface-dark-foreground/45 text-sm hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-surface-dark-foreground text-sm mb-3">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-surface-dark-foreground/45">
            <a href="mailto:hello@growmaticsa.co.za" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} /> hello@growmaticsa.co.za
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} /> South Africa
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-surface-dark-foreground/10 pt-6 text-center text-xs text-surface-dark-foreground/25">
        © 2025 GrowMatic SA. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
