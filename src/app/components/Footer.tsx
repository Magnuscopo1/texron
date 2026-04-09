import { Link } from "react-router";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A2A3A] text-white">
      <div className="site-shell py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#FF6B35] rounded flex items-center justify-center">
              <span className="font-[var(--font-mono)] text-[14px]">TX</span>
            </div>
            <div>
              <div className="font-[var(--font-heading)] text-[16px] tracking-wider">TEXRON</div>
              <div className="text-[9px] text-white/40 tracking-[0.2em]">POWER PLANT SYSTEMS</div>
            </div>
          </div>
          <p className="text-[13px] text-white/50 leading-relaxed">
            Systems Integrators and Custom Manufacturers. 28 years of turbine diagnostics and rapid response engineering.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-[var(--font-heading)] text-[12px] tracking-wider text-white/30 mb-4">NAVIGATION</h4>
          <div className="space-y-2">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Products", path: "/products" },
              { label: "Services", path: "/services" },
              { label: "Capabilities", path: "/capabilities" },
              { label: "Customers", path: "/customers" },
              { label: "Blog", path: "/blog" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <Link key={link.path} to={link.path} className="block text-[13px] text-white/50 hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div>
          <h4 className="font-[var(--font-heading)] text-[12px] tracking-wider text-white/30 mb-4">SPECIALIZATIONS</h4>
          <div className="space-y-2">
            {[
              { label: "BHEL Turbine Retrofits", path: "/bhel-steam-turbine-governor-retrofits" },
              { label: "Voith Hydraulic Systems", path: "/voith-hydraulic-troubleshooting-spares" },
              { label: "RLA Studies", path: "/rla-studies-thermal-power-plants-bangalore" },
              { label: "Long-Term Service Agreements", path: "/services/ltsa-amc-services" },
            ].map((link) => (
              <Link key={link.path} to={link.path} className="block text-[13px] text-white/50 hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-[var(--font-heading)] text-[12px] tracking-wider text-white/30 mb-4">REACH US</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-[#FF6B35] shrink-0" />
              <span className="text-[13px] text-white/50">Peenya Industrial Area, Phase IV, Bengaluru 560058</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#FF6B35] shrink-0" />
              <a href="tel:+918904017774" className="text-[13px] text-white/50 hover:text-white font-[var(--font-mono)]">+91 89040 17774</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#FF6B35] shrink-0" />
              <a href="tel:+918904017775" className="text-[13px] text-white/50 hover:text-white font-[var(--font-mono)]">+91 89040 17775</a>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-green-500 shrink-0" />
              <a href="https://wa.me/918904017774" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/50 hover:text-white">WhatsApp</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#FF6B35] shrink-0" />
              <a href="mailto:info@texronpower.com" className="text-[13px] text-white/50 hover:text-white">info@texronpower.com</a>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 mt-0.5 text-[#FF6B35] shrink-0" />
              <span className="text-[13px] text-white/50">24/7 Emergency Response</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-shell py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-white/20 font-[var(--font-mono)]">
            &copy; 2026 Texron Power Plant Systems Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-[11px] text-white/20 font-[var(--font-mono)]">
            CIN: U29100KA1998PTC023456 | ISO 9001:2015
          </p>
        </div>
      </div>
    </footer>
  );
}

