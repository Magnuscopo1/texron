import { PhotoPlaceholder } from "../components/PhotoPlaceholder";
import {
  Settings,
  Shield,
  Wrench,
  Activity,
  Cpu,
  Cog,
  ArrowRight,
  Download,
  FileText,
} from "lucide-react";
import { Link } from "react-router";
import { Breadcrumb } from "../components/Breadcrumb";
import { PageTimestamp } from "../components/PageTimestamp";

const services = [
  {
    icon: Settings,
    title: "Turbine Governor Systems",
    subtitle: "Digital, Electro-Hydraulic & Mechanical",
    items: [
      "BHEL steam turbine governor retrofits (DTG-3000 Series)",
      "Electro-hydraulic governor modernization (EHG-2000)",
      "Woodward governor replacement & recalibration",
      "PID controller tuning & load response optimization",
      "Governor valve actuator refurbishment",
    ],
    seoLink: "/bhel-steam-turbine-governor-retrofits",
    seoLabel: "BHEL Retrofit Details",
  },
  {
    icon: Wrench,
    title: "Hydraulic Actuator Systems",
    subtitle: "Voith, Woodward & OEM Replacements",
    items: [
      "Voith hydraulic actuator troubleshooting & repair",
      "Servo valve replacement for discontinued models",
      "Hydraulic oil system flushing & contamination control",
      "Guide vane actuator retrofit for Francis turbines",
      "Reverse-engineered spares for legacy actuators",
    ],
    seoLink: "/voith-hydraulic-troubleshooting-spares",
    seoLabel: "Voith Hydraulic Details",
  },
  {
    icon: Shield,
    title: "Protection Relay Systems",
    subtitle: "Numerical Relay Upgrades & Commissioning",
    items: [
      "NPR-21 numerical protection relay installation",
      "Legacy electromechanical relay replacement",
      "Generator differential, overcurrent & distance protection",
      "CT/PT ratio mapping for existing switchgear",
      "Remote monitoring & relay health diagnostics",
    ],
    seoLink: "/expertise",
    seoLabel: "Protection Relay Specs",
  },
  {
    icon: Activity,
    title: "RLA & Condition Assessment",
    subtitle: "Residual Life Assessment for Power Plants",
    items: [
      "Metallurgical examination & remaining life estimation",
      "Non-destructive testing (NDT) of critical components",
      "Vibration analysis & rotor dynamics assessment",
      "Thermal performance testing & heat rate optimization",
      "Comprehensive RLA reports per CEA guidelines",
    ],
    seoLink: "/rla-studies-thermal-power-plants-bangalore",
    seoLabel: "RLA Study Details",
  },
  {
    icon: Cpu,
    title: "Control Panel Engineering",
    subtitle: "Custom Turbine & Generator Control Panels",
    items: [
      "TCP-500 turbine control panel design & fabrication",
      "SCADA integration & DCS interface development",
      "Annunciation system upgrades",
      "PLC programming for turbine sequencing",
      "Panel retrofits for legacy BHEL/Siemens systems",
    ],
    seoLink: "/specs",
    seoLabel: "Control Panel Specs",
  },
  {
    icon: Cog,
    title: "LTSA & AMC Services",
    subtitle: "Long-Term Service Agreements",
    items: [
      "Annual maintenance contracts for governor systems",
      "5-year LTSA for complete turbine auxiliary systems",
      "Spares inventory management & warehousing",
      "Quarterly preventive maintenance schedules",
      "24/7 emergency support guarantee",
    ],
    seoLink: "/contact",
    seoLabel: "Request LTSA Quote",
  },
];

export function ExpertisePage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#1E3A5F] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ label: "Expertise" }]} />
          <h1 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
            Expertise
          </h1>
          <h2 className="text-[32px] md:text-[40px] leading-tight mb-3 text-white">
            Services & Methodology
          </h2>
          <p className="text-white/60 text-[15px] max-w-2xl">
            Our engineering methodology prioritizes transparency and measurable outcomes.
            Every intervention follows our Condition-Based Repair Criteria — download it below.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-5 py-2.5 rounded-lg transition-colors">
              <Download className="w-4 h-4" />
              <span className="text-[13px]">Condition-Based Repair Criteria</span>
              <span className="font-[var(--font-mono)] text-[10px] opacity-70">v2.4 | Oct 2025</span>
            </button>
            <Link to="/specs" className="flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white px-5 py-2.5 rounded-lg transition-colors">
              <FileText className="w-4 h-4" />
              <span className="text-[13px]">All Spec Sheets</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="bg-white rounded-xl border border-[#E8EAED] overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#1E3A5F]/5 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#1E3A5F]" />
                      </div>
                      <div>
                        <h3 className="text-[#1E3A5F] text-[16px]">{service.title}</h3>
                        <p className="font-[var(--font-mono)] text-[11px] text-[#FF6B35]">{service.subtitle}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] mt-1.5 shrink-0" />
                          <span className="text-[13px] text-[#5A6B7D]">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={service.seoLink}
                      className="inline-flex items-center gap-1.5 text-[#FF6B35] hover:text-[#e55a2a] text-[13px] transition-colors"
                    >
                      {service.seoLabel}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
                Our Methodology
              </h2>
              <h3 className="text-[#1E3A5F] text-[28px] mb-4">
                Condition-Based Repair Criteria
              </h3>
              <p className="text-[14px] text-[#5A6B7D] leading-relaxed mb-6">
                B2B engineers buy into methodologies, not just outcomes. Our publicly available
                Condition-Based Repair Criteria document outlines our standardized approach to
                equipment assessment, failure classification, and repair/replace decision matrices.
              </p>
              <div className="space-y-4">
                {[
                  "Failure mode classification (5 categories)",
                  "Remaining life estimation methodology",
                  "Repair vs. Replace decision matrix",
                  "OEM compatibility verification protocol",
                  "Post-intervention performance benchmarks",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#FF6B35]/10 flex items-center justify-center shrink-0">
                      <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                    </div>
                    <span className="text-[13px] text-[#1E3A5F]">{item}</span>
                  </div>
                ))}
              </div>
              <button className="mt-6 flex items-center gap-2 bg-[#1E3A5F] hover:bg-[#162f4d] text-white px-5 py-3 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                <span className="text-[13px]">Download Full Methodology PDF</span>
                <span className="font-[var(--font-mono)] text-[10px] opacity-60">v2.4 | 1.6 MB</span>
              </button>
            </div>
            <PhotoPlaceholder
              directive="Stanley reviewing technical drawings at engineer's workstation, with equipment schematics visible on monitors"
              fallbackImage="https://images.unsplash.com/photo-1738918937796-743064feefa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZW5naW5lZXIlMjBjb250cm9sJTIwcm9vbSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzMxMTY5OTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              aspectRatio="aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      <PageTimestamp lastUpdated="March 2026" nextAudit="Q2 2026" />
    </div>
  );
}