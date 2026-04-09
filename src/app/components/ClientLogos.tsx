import { motion } from "motion/react";

const clients = [
  { name: "NTPC", abbr: "NTPC" },
  { name: "BHEL", abbr: "BHEL" },
  { name: "KPCL", abbr: "KPCL" },
  { name: "TANGEDCO", abbr: "TGC" },
  { name: "NLC India", abbr: "NLC" },
  { name: "APGENCO", abbr: "APG" },
  { name: "TSGENCO", abbr: "TSG" },
  { name: "JSW Energy", abbr: "JSW" },
  { name: "Tata Power", abbr: "TATA" },
  { name: "CESC", abbr: "CESC" },
];

export function ClientLogos() {
  return (
    <section className="py-10 bg-white border-b border-[#E5E7EB]">
      <div className="site-shell">
        <p className="font-[var(--font-mono)] text-[10px] tracking-[0.2em] text-[#5A6B7D] text-center mb-6 uppercase">
          Trusted by power plants across India
        </p>
        <div className="flex flex-wrap justify-center gap-3 md:gap-5">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="flex items-center justify-center w-20 h-14 md:w-24 md:h-16 rounded-lg border border-[#E5E7EB] bg-[#F3F4F6]/50 hover:border-[#FF6B35]/30 hover:bg-[#FF6B35]/5 transition-colors group cursor-default"
            >
              <div className="text-center">
                <span className="font-[var(--font-heading)] text-[14px] md:text-[16px] text-[#1A2A3A]/50 group-hover:text-[#1A2A3A] transition-colors">
                  {client.abbr}
                </span>
                <p className="text-[7px] text-[#6B7280]/60 mt-0.5 hidden md:block">{client.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="font-[var(--font-mono)] text-[9px] text-[#5A6B7D]/50 text-center mt-4">
          PHOTO SHOOT DIRECTIVE: Replace with actual client logos from approval list
        </p>
      </div>
    </section>
  );
}