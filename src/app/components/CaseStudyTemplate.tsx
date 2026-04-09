import { Factory, Zap, Wrench, Clock, TrendingUp } from "lucide-react";

interface CaseStudy {
  id: string;
  clientIndustry: string;
  megawattCapacity: string;
  originalEquipment: string;
  theFailure: string;
  texronSolution: string;
  outcome: string;
  timeline: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    clientIndustry: "Thermal Power Generation",
    megawattCapacity: "210 MW",
    originalEquipment: "BHEL Steam Turbine with Woodward Governor",
    theFailure: "Governor hunting causing 15% load fluctuations and triggering protection relays. Plant derated to 60% capacity. OEM quoted 14-week lead time for replacement.",
    texronSolution: "Deployed DTG-3000 digital governor retrofit with custom PID tuning. On-site commissioning in 48 hours including FAT. Retained existing actuator linkage to minimize outage window.",
    outcome: "Full 210 MW restored. Load stability within +/-0.5%. Governor response time improved from 800ms to 120ms. Zero unplanned trips in 18 months post-retrofit.",
    timeline: "48 hours (emergency deployment)",
  },
  {
    id: "2",
    clientIndustry: "Hydroelectric Power",
    megawattCapacity: "4 x 55 MW Francis Turbine",
    originalEquipment: "Voith Hydraulic Governor System (1992 vintage)",
    theFailure: "Oil contamination in servo system causing erratic guide vane control. Unit 3 forced shutdown. Voith spares discontinued for this vintage.",
    texronSolution: "Reverse-engineered servo valve assemblies. Supplied compatible replacement actuators with modern sealing technology. Full hydraulic system flush and recommissioning.",
    outcome: "All 4 units operational. Servo response improved by 40%. Eliminated recurring oil contamination issue. LTSA signed for 5-year maintenance support.",
    timeline: "5 days (including spares fabrication)",
  },
  {
    id: "3",
    clientIndustry: "Industrial Cogeneration",
    megawattCapacity: "32 MW Extraction Turbine",
    originalEquipment: "Siemens Steam Turbine with Crompton Greaves Protection Relays",
    theFailure: "Spurious generator differential relay trips during load changes above 80%. Plant limited to 25 MW output. Relay manufacturer discontinued model.",
    texronSolution: "Installed NPR-21 numerical protection relay with configurable trip characteristics. Custom CT ratio mapping for existing switchgear. Hot-cutover performed during planned maintenance window.",
    outcome: "Full 32 MW capacity restored. Zero spurious trips. Remote monitoring enabled for protection system health. Payback achieved in 3 months from recovered output.",
    timeline: "3 days (planned installation)",
  },
];

export function CaseStudySection() {
  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="site-shell">
        <div className="text-center mb-10">
          <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
            Field Proven
          </h2>
          <h3 className="text-[#1E3A5F] text-[28px] md:text-[32px] mb-2">
            Case Studies
          </h3>
          <p className="text-[#5A6B7D] text-[14px] max-w-xl mx-auto">
            Standardized documentation of real field interventions. Every case follows our diagnostic methodology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="bg-white rounded-xl border border-[#E8EAED] overflow-hidden hover:shadow-md transition-shadow">
              {/* Header */}
              <div className="bg-[#1E3A5F] px-5 py-3">
                <div className="flex items-center gap-2">
                  <Factory className="w-4 h-4 text-[#FF6B35]" />
                  <span className="text-white text-[13px]">{cs.clientIndustry}</span>
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <span className="font-[var(--font-mono)] text-[#FF6B35] text-[14px]">
                    {cs.megawattCapacity}
                  </span>
                  <span className="text-white/40 text-[11px]">|</span>
                  <span className="text-white/60 text-[11px]">{cs.originalEquipment}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Zap className="w-3.5 h-3.5 text-red-500" />
                    <span className="font-[var(--font-mono)] text-[10px] tracking-wider text-red-500">THE FAILURE</span>
                  </div>
                  <p className="text-[12px] text-[#5A6B7D] leading-relaxed">{cs.theFailure}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Wrench className="w-3.5 h-3.5 text-[#FF6B35]" />
                    <span className="font-[var(--font-mono)] text-[10px] tracking-wider text-[#FF6B35]">TEXRON'S SOLUTION</span>
                  </div>
                  <p className="text-[12px] text-[#5A6B7D] leading-relaxed">{cs.texronSolution}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-green-600" />
                    <span className="font-[var(--font-mono)] text-[10px] tracking-wider text-green-600">OUTCOME</span>
                  </div>
                  <p className="text-[12px] text-[#5A6B7D] leading-relaxed">{cs.outcome}</p>
                </div>

                <div className="pt-3 border-t border-[#E8EAED] flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#1E3A5F]/50" />
                  <span className="font-[var(--font-mono)] text-[11px] text-[#1E3A5F]">
                    {cs.timeline}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
