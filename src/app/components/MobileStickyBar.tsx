import { Phone, MessageCircle, Wrench } from "lucide-react";
import { Link } from "react-router";

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#1A2A3A] border-t border-white/10 safe-area-bottom">
      <div className="grid grid-cols-3 h-14">
        <a
          href="tel:+918904017774"
          className="flex flex-col items-center justify-center gap-0.5 text-white active:bg-white/10 transition-colors"
        >
          <Phone className="w-4 h-4 text-[#FF6B35]" />
          <span className="text-[9px] font-[var(--font-mono)]">CALL</span>
        </a>
        <a
          href="https://wa.me/918904017774?text=Need%20turbine%20support%20-%20Texron"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 text-white active:bg-white/10 transition-colors border-x border-white/10"
        >
          <MessageCircle className="w-4 h-4 text-green-400" />
          <span className="text-[9px] font-[var(--font-mono)]">WHATSAPP</span>
        </a>
        <Link
          to="/services"
          className="flex flex-col items-center justify-center gap-0.5 text-white active:bg-white/10 transition-colors"
        >
          <Wrench className="w-4 h-4 text-white/60" />
          <span className="text-[9px] font-[var(--font-mono)]">SERVICES</span>
        </Link>
      </div>
    </div>
  );
}
