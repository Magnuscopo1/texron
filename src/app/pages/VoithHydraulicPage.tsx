import { Link } from "react-router";
import { Phone, Download, ArrowRight, FileText, Check, AlertTriangle, Wrench } from "lucide-react";
import { PhotoPlaceholder } from "../components/PhotoPlaceholder";
import { Breadcrumb } from "../components/Breadcrumb";
import { FAQ } from "../components/FAQ";
import { PageTimestamp } from "../components/PageTimestamp";
import { FluidGallery } from "../components/ui/fluid-gallery";

// Temporary imports from raw workspace assets - to be migrated to /public/assets/gallery/ later
import voithImg1 from "../../../imageAssets/IMG20230518115707.jpg.jpeg";
import voithImg2 from "../../../imageAssets/IMG20230518115721.jpg.jpeg";
import voithImg3 from "../../../imageAssets/IMG_20210209_235945.jpg.jpeg";

const galleryImages = [
  { src: voithImg1, alt: "Voith Hydraulic Actuator Inspection", category: "Troubleshooting", span: "wide" as const },
  { src: voithImg2, alt: "Servo Valve Replacement", category: "Spares Delivery" },
  { src: voithImg3, alt: "Hydraulic System Breakdown Analysis", category: "Dismantling", span: "tall" as const },
];

const voithFAQs = [
  { question: "Can you supply spares for discontinued Voith models?", answer: "Yes. We reverse-engineer spares for Voith R16, R25, R32, and R40 series actuators that are no longer supported by Voith. All components are manufactured to OEM specifications with quality inspection certificates." },
  { question: "How quickly can you supply in-stock spares?", answer: "In-stock items like servo valve assemblies, seal kits, and position sensors ship same-day from our Peenya facility. Made-to-order components like cylinder liners take 10-15 days. Exchange-basis rebuilt valves take 7-10 days." },
  { question: "Do you offer on-site troubleshooting?", answer: "Yes. Our hydraulic specialists can be on-site within 24 hours across South India (Karnataka, Tamil Nadu, Andhra Pradesh, Telangana). For emergency actuator lock-ups, we prioritize same-day deployment." },
  { question: "What is your hydraulic oil flushing process?", answer: "We use a multi-stage flushing process: coarse filtration, fine filtration (3 micron), NAS 1638 verification, and final cleanliness certification. The entire HPU system is flushed including accumulators, servo valves, and distribution blocks." },
  { question: "Do rebuilt proportional valves match OEM performance?", answer: "Yes. Our rebuilt proportional valves are tested on a dedicated hydraulic test bench to verify flow characteristics, response time, and hysteresis match OEM specifications within +/-2% tolerance." },
];

const sparesData = [
  { part: "Servo Valve Assembly", models: "Voith R16, R25, R32", availability: "In Stock", leadTime: "Immediate" },
  { part: "Piston Rod Seal Kit", models: "All Voith Models", availability: "In Stock", leadTime: "Immediate" },
  { part: "Hydraulic Cylinder Liner", models: "R25, R32, R40", availability: "Made to Order", leadTime: "10-15 days" },
  { part: "Guide Vane Actuator Assembly", models: "Francis Turbine Applications", availability: "Made to Order", leadTime: "15-20 days" },
  { part: "Oil Distribution Block", models: "Voith R16, R25", availability: "In Stock", leadTime: "Immediate" },
  { part: "Position Feedback Sensor", models: "All Models", availability: "In Stock", leadTime: "Immediate" },
  { part: "Accumulator Bladder Kit", models: "Voith HPU Systems", availability: "In Stock", leadTime: "3-5 days" },
  { part: "Proportional Valve (Rebuilt)", models: "R25, R32", availability: "Exchange", leadTime: "7-10 days" },
];

const troubleshootingGuide = [
  {
    symptom: "Erratic guide vane movement",
    cause: "Contaminated servo valve or worn spool",
    action: "Flush hydraulic system. Replace servo valve assembly if contamination persists.",
    severity: "urgent",
  },
  {
    symptom: "Slow actuator response (>500ms)",
    cause: "Low hydraulic pressure or internal leakage",
    action: "Check HPU pressure. Inspect piston rod seals. Verify accumulator pre-charge.",
    severity: "urgent",
  },
  {
    symptom: "Oil leakage at cylinder gland",
    cause: "Worn gland packing or scored rod surface",
    action: "Replace seal kit. If rod scored, send for re-chroming or replace rod assembly.",
    severity: "planned",
  },
  {
    symptom: "Hunting / oscillation around setpoint",
    cause: "Feedback sensor drift or PID mismatch",
    action: "Recalibrate LVDT. Verify PID parameters against commissioning values.",
    severity: "urgent",
  },
  {
    symptom: "Complete actuator lock-up",
    cause: "Servo valve stuck or HPU failure",
    action: "EMERGENCY: Engage manual override. Call Texron emergency line for on-site support.",
    severity: "emergency",
  },
];

export function VoithHydraulicPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1E3A5F] text-white py-12">
        <div className="site-shell">
          <Breadcrumb items={[
            { label: "Expertise", path: "/expertise" },
            { label: "Voith Hydraulic Troubleshooting & Spares" },
          ]} />
          <h1 className="text-[28px] md:text-[38px] leading-tight mb-3 text-white">
            Voith Hydraulic System Troubleshooting & Spares
          </h1>
          <p className="text-white/60 text-[15px] max-w-3xl mb-6">
            Reverse-engineered spares for discontinued Voith hydraulic actuators.
            Immediate availability for critical components. On-site troubleshooting within 24 hours across South India.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+918904017774" className="flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-5 py-2.5 rounded-lg transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-[13px]">Actuator Emergency</span>
            </a>
            <button className="flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white px-5 py-2.5 rounded-lg transition-colors">
              <Download className="w-4 h-4" />
              <span className="text-[13px]">Voith Spares Catalogue</span>
              <span className="font-[var(--font-mono)] text-[10px] opacity-60">v2.1</span>
            </button>
          </div>
        </div>
      </section>

      {/* Troubleshooting Guide */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="site-shell">
          <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
            Field Documentation
          </h2>
          <h3 className="text-[#1E3A5F] text-[24px] mb-1">
            Actuator Breakdown & Assembly
          </h3>
          <p className="text-[13px] text-[#5A6B7D] mb-6">
            Reverse-engineered hydraulic systems and live-site emergency interventions.
          </p>
          <FluidGallery images={galleryImages} className="mb-16" />

          <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
            Quick Reference
          </h2>
          <h3 className="text-[#1E3A5F] text-[24px] mb-1">
            Voith Hydraulic Troubleshooting Guide
          </h3>
          <p className="text-[13px] text-[#5A6B7D] mb-6">
            Common failure modes and immediate corrective actions for Voith hydraulic actuator systems.
          </p>

          <div className="space-y-3">
            {troubleshootingGuide.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-[#E8EAED] overflow-hidden">
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      item.severity === "emergency" ? "bg-red-100" : item.severity === "urgent" ? "bg-[#FF6B35]/10" : "bg-blue-100"
                    }`}>
                      {item.severity === "emergency" ? (
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                      ) : (
                        <Wrench className="w-4 h-4 text-[#FF6B35]" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-[#1E3A5F] text-[14px]">{item.symptom}</h4>
                        <span className={`px-2 py-0.5 rounded text-[9px] font-[var(--font-mono)] uppercase tracking-wider ${
                          item.severity === "emergency" ? "bg-red-100 text-red-700" :
                          item.severity === "urgent" ? "bg-[#FF6B35]/10 text-[#FF6B35]" :
                          "bg-blue-100 text-blue-700"
                        }`}>
                          {item.severity}
                        </span>
                      </div>
                      <p className="text-[12px] text-[#5A6B7D] mb-1">
                        <span className="font-[var(--font-mono)] text-[10px] text-[#1E3A5F]/40 tracking-wider">PROBABLE CAUSE: </span>
                        {item.cause}
                      </p>
                      <p className="text-[12px] text-[#1E3A5F]">
                        <span className="font-[var(--font-mono)] text-[10px] text-[#FF6B35] tracking-wider">ACTION: </span>
                        {item.action}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spares Availability */}
      <section className="py-16 bg-white">
        <div className="site-shell">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
                Spares Inventory
              </h2>
              <h3 className="text-[#1E3A5F] text-[24px] mb-1">
                Voith Compatible Spares & Components
              </h3>
              <p className="text-[13px] text-[#5A6B7D] mb-6">
                Reverse-engineered to OEM specifications. Available for discontinued models where Voith no longer supplies.
              </p>

              <div className="bg-white rounded-xl border border-[#E8EAED] overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#1E3A5F] text-white">
                      <th className="text-left px-4 py-3 font-[var(--font-mono)] text-[11px] tracking-wider">COMPONENT</th>
                      <th className="text-left px-4 py-3 font-[var(--font-mono)] text-[11px] tracking-wider">COMPATIBLE MODELS</th>
                      <th className="text-left px-4 py-3 font-[var(--font-mono)] text-[11px] tracking-wider">AVAILABILITY</th>
                      <th className="text-left px-4 py-3 font-[var(--font-mono)] text-[11px] tracking-wider">LEAD TIME</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sparesData.map((row, i) => (
                      <tr key={row.part} className={`${i % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]/50"} hover:bg-blue-50/30`}>
                        <td className="px-4 py-3 text-[13px] text-[#1E3A5F]">{row.part}</td>
                        <td className="px-4 py-3 font-[var(--font-mono)] text-[11px] text-[#5A6B7D]">{row.models}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-[var(--font-mono)] ${
                            row.availability === "In Stock" ? "bg-green-100 text-green-700" :
                            row.availability === "Exchange" ? "bg-blue-100 text-blue-700" :
                            "bg-[#FF6B35]/10 text-[#FF6B35]"
                          }`}>
                            {row.availability === "In Stock" && <Check className="w-3 h-3" />}
                            {row.availability}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-[var(--font-mono)] text-[12px] text-[#5A6B7D]">{row.leadTime}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-6">
              <PhotoPlaceholder
                directive="High-res close-up of a refurbished Voith hydraulic actuator on workbench with new seals visible"
                fallbackImage="https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeWRyYXVsaWMlMjBhY3R1YXRvciUyMGluZHVzdHJpYWwlMjBtYWNoaW5lcnklMjBjbG9zZXVwfGVufDF8fHx8MTc3MzExNjk5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
              />
              <div className="bg-[#F5F5F5] rounded-xl p-5">
                <h4 className="font-[var(--font-mono)] text-[11px] tracking-wider text-[#1E3A5F]/50 mb-3">RELATED DOCUMENTS</h4>
                <div className="space-y-2">
                  {[
                    { name: "Voith Spares Catalogue", ver: "v2.1 | Jan 2026", size: "1.8 MB" },
                    { name: "Hydraulic System Maintenance Guide", ver: "v1.5 | Nov 2025", size: "2.2 MB" },
                    { name: "HA-500 Retrofit Kit Datasheet", ver: "v2.1 | Jan 2026", size: "1.8 MB" },
                  ].map((doc) => (
                    <button key={doc.name} className="flex items-center justify-between w-full p-3 bg-white rounded-lg border border-[#E8EAED] hover:border-[#FF6B35]/30 transition-colors group">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#1E3A5F]/50" />
                        <div className="text-left">
                          <p className="text-[12px] text-[#1E3A5F]">{doc.name}</p>
                          <p className="font-[var(--font-mono)] text-[10px] text-[#5A6B7D]">{doc.ver} | {doc.size}</p>
                        </div>
                      </div>
                      <Download className="w-4 h-4 text-[#5A6B7D] group-hover:text-[#FF6B35]" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-[#1E3A5F] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-[24px] mb-3">Voith Actuator Issue?</h2>
          <p className="text-white/60 text-[14px] mb-6">
            Describe the symptoms. We'll identify the parts and quote same-day for in-stock items.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="tel:+918904017774" className="flex items-center justify-center gap-2 bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> Call for Spares
            </a>
            <Link to="/contact" className="flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg transition-colors">
              Request Spares Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        title="Voith Hydraulic System FAQ"
        subtitle="Common questions about Voith actuator spares and troubleshooting"
        items={voithFAQs}
      />

      {/* Timestamp */}
      <PageTimestamp lastUpdated="January 2026" nextAudit="Q2 2026" />
    </div>
  );
}
