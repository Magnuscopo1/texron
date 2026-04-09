import { motion } from "motion/react";

const milestones = [
  { year: "1998", title: "Founded in Peenya", desc: "Texron established by Stanley & Jagadish with focus on turbine governor systems" },
  { year: "2003", title: "BHEL Vendor Approval", desc: "Approved as authorized retrofit partner for BHEL steam turbine governors" },
  { year: "2007", title: "Voith Hydraulic Division", desc: "Expanded into Voith-compatible hydraulic actuator refurbishment and spares" },
  { year: "2012", title: "ISO 9001 Certification", desc: "Certified quality management system for power plant equipment services" },
  { year: "2016", title: "Digital Governor Launch", desc: "DTG-3000 series launched - digital replacement for legacy Woodward systems" },
  { year: "2019", title: "RLA & NDT Division", desc: "Residual Life Assessment services for thermal power plants across South India" },
  { year: "2022", title: "500th Retrofit Milestone", desc: "Completed 500th governor retrofit across NTPC, KPCL, and private plants" },
  { year: "2026", title: "28 Years Strong", desc: "Serving 150+ power plants with 24/7 emergency response from Bengaluru" },
];

export function ExperienceTimeline() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="site-shell">
        <div className="text-center mb-10">
          <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
            Our Journey
          </h2>
          <h3 className="text-[#1E3A5F] text-[28px] md:text-[32px]">
            28 Years of Engineering Excellence
          </h3>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          <div className="absolute top-6 left-0 right-0 h-px bg-[#E8EAED]" />
          <div className="grid grid-cols-8 gap-0">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="relative pt-10 px-2 text-center"
              >
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white border-2 border-[#1E3A5F] z-10 flex items-center justify-center">
                  <span className={`w-2 h-2 rounded-full ${i === milestones.length - 1 ? "bg-[#FF6B35]" : "bg-[#1E3A5F]"}`} />
                </div>
                <span className="font-[var(--font-mono)] text-[14px] text-[#FF6B35] block mb-1">{m.year}</span>
                <p className="text-[11px] text-[#1E3A5F] mb-1 leading-tight">{m.title}</p>
                <p className="text-[9px] text-[#5A6B7D] leading-tight">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-0">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="flex gap-4 relative"
            >
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-white border-2 border-[#1E3A5F] z-10 flex items-center justify-center shrink-0">
                  <span className={`w-1.5 h-1.5 rounded-full ${i === milestones.length - 1 ? "bg-[#FF6B35]" : "bg-[#1E3A5F]"}`} />
                </div>
                {i < milestones.length - 1 && <div className="w-px flex-1 bg-[#E8EAED]" />}
              </div>
              <div className="pb-6">
                <span className="font-[var(--font-mono)] text-[12px] text-[#FF6B35]">{m.year}</span>
                <p className="text-[13px] text-[#1E3A5F] mb-0.5">{m.title}</p>
                <p className="text-[11px] text-[#5A6B7D]">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}