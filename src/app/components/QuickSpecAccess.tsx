import { Download, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";

const topSpecs = [
  { name: "DTG-3000 Digital Governor", ver: "v3.2", updated: "Feb 2026", size: "2.4 MB", compat: ["BHEL", "Siemens", "Alstom"] },
  { name: "HA-500 Hydraulic Actuator Kit", ver: "v2.1", updated: "Jan 2026", size: "1.8 MB", compat: ["Voith", "Woodward"] },
  { name: "NPR-21 Protection Relay", ver: "v4.0", updated: "Dec 2025", size: "3.1 MB", compat: ["Siemens", "ABB", "CG"] },
  { name: "EHG-2000 Electro-Hydraulic", ver: "v2.8", updated: "Oct 2025", size: "2.9 MB", compat: ["BHEL", "Voith"] },
];

export function QuickSpecAccess() {
  return (
    <section className="py-12 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-1">
              2-Click Downloads
            </h2>
            <h3 className="font-[var(--font-heading)] text-[#1A2A3A] text-[22px]">
              Most Requested Spec Sheets
            </h3>
          </div>
          <Link
            to="/specs"
            className="hidden md:flex items-center gap-1.5 text-[#FF6B35] hover:text-[#e55a2a] text-[13px] transition-colors"
          >
            All Documents <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {topSpecs.map((spec, i) => (
            <motion.button
              key={spec.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.3 }}
              className="group bg-[#F3F4F6] hover:bg-[#1A2A3A] rounded-xl p-4 text-left transition-all duration-300 border border-transparent hover:border-[#1A2A3A]"
            >
              <div className="flex items-start justify-between mb-2">
                <FileText className="w-5 h-5 text-[#1A2A3A]/40 group-hover:text-[#FF6B35] transition-colors" />
                <Download className="w-4 h-4 text-[#5A6B7D] group-hover:text-white opacity-0 group-hover:opacity-100 transition-all" />
              </div>
              <p className="text-[13px] text-[#1A2A3A] group-hover:text-white transition-colors mb-1 leading-snug">{spec.name}</p>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-[var(--font-mono)] text-[10px] text-[#FF6B35]">{spec.ver}</span>
                <span className="text-[#6B7280]/30 group-hover:text-white/30">|</span>
                <span className="font-[var(--font-mono)] text-[10px] text-[#6B7280] group-hover:text-white/50 transition-colors">{spec.size}</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {spec.compat.map((c) => (
                  <span
                    key={c}
                    className="px-1.5 py-0.5 bg-[#1A2A3A]/5 group-hover:bg-white/10 rounded text-[9px] font-[var(--font-mono)] text-[#1A2A3A] group-hover:text-white/70 transition-colors"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>

        <Link
          to="/specs"
          className="md:hidden flex items-center justify-center gap-1.5 text-[#FF6B35] hover:text-[#e55a2a] text-[13px] mt-4 transition-colors"
        >
          View All Documents <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}