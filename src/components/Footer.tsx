import { Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-surface-darker border-t border-primary/10 py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <img src={logo} alt="GrowMatic SA" className="h-12 w-auto mb-3" />
          <p className="text-surface-dark-foreground/50 text-sm">Automate. Grow. Dominate.</p>
          <p className="text-surface-dark-foreground/40 text-xs mt-1">100% South African</p>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-surface-dark-foreground mb-3 text-sm">Links</h4>
          <div className="flex flex-col gap-2">
            {["Services", "Pricing", "Industries", "FAQ"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-surface-dark-foreground/50 text-sm hover:text-primary transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-surface-dark-foreground mb-3 text-sm">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-surface-dark-foreground/50">
            <a href="mailto:hello@growmaticsa.co.za" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} /> hello@growmaticsa.co.za
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} /> South Africa
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-primary/10 pt-6 text-center text-xs text-surface-dark-foreground/30">
        © 2025 GrowMatic SA. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
