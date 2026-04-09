import { useState } from "react";
import { Phone, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import emergencySupport from "../../assets/emergency-support.svg";

export function FloatingEmergency() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl border border-[#E8EAED] p-5 w-72 mb-2"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-[var(--font-mono)] text-[10px] tracking-[0.2em] text-red-600 uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                
              </span>
              <button onClick={() => setExpanded(false)} className="text-[#5A6B7D] hover:text-[#1E3A5F] p-1">
                <X className="w-4 h-4" />
              </button>
            </div>

            <img
              src={emergencySupport}
              alt="Round-the-clock turbine emergency support illustration"
              className="w-full h-24 object-contain mb-4"
            />

            <div className="space-y-3">
              <div className="bg-[#F5F5F5] rounded-xl p-3">
                <p className="font-[var(--font-mono)] text-[10px] text-[#FF6B35] tracking-wider mb-1">STANLEY</p>
                <a
                  href="tel:+918904017774"
                  className="flex items-center gap-2 text-[#1E3A5F] text-[13px] mb-1.5 hover:text-[#FF6B35] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  +91 89040 17774
                </a>
                <a
                  href="https://wa.me/918904017774?text=PLANT%20EMERGENCY%20-%20Need%20immediate%20turbine%20support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-600 text-[12px] hover:text-green-700 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp (send photos)
                </a>
              </div>

              <div className="bg-[#F5F5F5] rounded-xl p-3">
                <p className="font-[var(--font-mono)] text-[10px] text-[#FF6B35] tracking-wider mb-1">JAGADISH</p>
                <a
                  href="tel:+918904017775"
                  className="flex items-center gap-2 text-[#1E3A5F] text-[13px] mb-1.5 hover:text-[#FF6B35] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  +91 89040 17775
                </a>
                <a
                  href="https://wa.me/918904017775?text=PLANT%20EMERGENCY%20-%20Need%20immediate%20turbine%20support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-600 text-[12px] hover:text-green-700 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp (send photos)
                </a>
              </div>
            </div>

            <p className="font-[var(--font-mono)] text-[9px] text-[#5A6B7D] text-center mt-3">
              30-MIN CALLBACK GUARANTEED 24/7
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setExpanded(!expanded)}
        className={`relative w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-colors ${
          expanded ? "bg-[#1E3A5F]" : "bg-red-600 hover:bg-red-700"
        }`}
        whileTap={{ scale: 0.92 }}
        animate={expanded ? {} : { scale: [1, 1.08, 1] }}
        transition={expanded ? {} : { repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        {expanded ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <Phone className="w-5 h-5 text-white" />
        )}
        {!expanded && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#FF6B35] flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          </span>
        )}
      </motion.button>
    </div>
  );
}
