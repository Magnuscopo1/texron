import { useParams, Link } from "react-router";
import { Phone, ArrowRight, Check, Minus, X } from "lucide-react";
import { Breadcrumb } from "../components/Breadcrumb";
import { PageTimestamp } from "../components/PageTimestamp";

import governorProductImage from "../../../imageAssets/IMG-20211116-WA0032(2).jpg.jpeg";
import relayProductImage from "../../../imageAssets/IMG-20211123-WA0078(2).jpg.jpeg";
import actuatorProductImage from "../../../imageAssets/IMG20230518115707.jpg.jpeg";
import defaultProductImage from "../../../imageAssets/IMG20240902200100.jpg.jpeg";

type CompatStatus = "full" | "partial" | "none" | "rfq";

interface ProductData {
  name: string;
  code: string;
  tagline: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
  applications: string[];
  compatibility: { oem: string; status: CompatStatus; notes: string }[];
  documents: { name: string; version: string; size: string }[];
}

const products: Record<string, ProductData> = {
  "electronic-governor": {
    name: "Electronic Governor",
    code: "DTG-3000",
    tagline: "Digital Drop-in Replacement for Legacy Governors",
    description: "The DTG-3000 series is a fully digital governor system designed as a drop-in replacement for Woodward 505E, BHEL indigenous, and Alstom Alspa governor systems. It retains existing actuator linkage, minimizing outage windows during retrofits.",
    image: governorProductImage,
    specs: [
      { label: "Response Time", value: "120ms" },
      { label: "Load Stability", value: "+/-0.5%" },
      { label: "Capacity Range", value: "30-500 MW" },
      { label: "Interface", value: "4-20mA / Modbus" },
      { label: "Supply", value: "24V DC / 110V AC" },
      { label: "Operating Temp", value: "-10 to 65°C" },
    ],
    applications: [
      "BHEL steam turbines (KWU/indigenous) - retains existing Woodward actuator linkage",
      "Legacy Woodward 505E replacement - pin-compatible wiring, PID values pre-tuned from 200+ BHEL unit database",
      "Alstom-licensed turbines - DTG-3000C+ variant with adapter interface card",
      "Multi-unit synchronization - built-in load sharing for parallel generator operation",
      "SCADA/DCS integration - Modbus RTU/TCP for remote monitoring and setpoint control",
    ],
    compatibility: [
      { oem: "BHEL (30-210 MW)", status: "full", notes: "Direct drop-in, all variants" },
      { oem: "BHEL (250 MW Alstom)", status: "partial", notes: "Adapter card required" },
      { oem: "BHEL (500 MW+)", status: "rfq", notes: "Custom assessment needed" },
      { oem: "Siemens (Legacy)", status: "full", notes: "Interface mapping provided" },
      { oem: "Alstom Alspa", status: "partial", notes: "DTG-3000C+ variant" },
      { oem: "Woodward 505E", status: "full", notes: "Pin-compatible replacement" },
      { oem: "Crompton Greaves", status: "partial", notes: "CT ratio mapping needed" },
    ],
    documents: [
      { name: "DTG-3000 Series Datasheet", version: "v3.2 | Feb 2026", size: "2.4 MB" },
      { name: "BHEL Compatibility Guide", version: "v1.8 | Jan 2026", size: "1.2 MB" },
      { name: "Installation & Commissioning Manual", version: "v2.0 | Dec 2025", size: "4.1 MB" },
    ],
  },
  "protection-relay": {
    name: "Numerical Protection Relay",
    code: "NPR-21",
    tagline: "Drop-in Replacement for Legacy Electromechanical Relays",
    description: "The NPR-21 numerical protection relay provides generator differential, overcurrent, distance, and directional earth fault protection in a single compact unit. Designed to replace legacy Crompton Greaves, Siemens, and ABB electromechanical relays.",
    image: relayProductImage,
    specs: [
      { label: "Protection", value: "Differential / OC / Distance" },
      { label: "CT Inputs", value: "1A / 5A selectable" },
      { label: "Communication", value: "IEC 61850 / Modbus" },
      { label: "Event Log", value: "1000+ events" },
      { label: "Supply", value: "110/220V DC" },
      { label: "Operating Temp", value: "-5 to 55°C" },
    ],
    applications: [
      "Generator protection - differential, overcurrent, REF, stator earth fault",
      "Legacy relay replacement - Crompton Greaves CDG series, Siemens 7SJ/7UT drop-in",
      "Switchgear retrofit - custom CT ratio mapping for existing HT switchgear panels",
      "Remote monitoring - IEC 61850 and Modbus for SCADA integration",
      "Hot-cutover capability - installation during planned maintenance without extended shutdown",
    ],
    compatibility: [
      { oem: "Crompton Greaves", status: "full", notes: "CDG/CAG series direct replacement" },
      { oem: "Siemens 7SJ/7UT", status: "full", notes: "Mounting adapters available" },
      { oem: "ABB REF/RET", status: "full", notes: "Protocol-compatible" },
      { oem: "GE Multilin", status: "partial", notes: "Interface mapping required" },
      { oem: "Alstom MiCOM", status: "partial", notes: "Adapter panel needed" },
      { oem: "L&T Switchgear", status: "full", notes: "Standard fitment" },
    ],
    documents: [
      { name: "NPR-21 Technical Datasheet", version: "v4.0 | Dec 2025", size: "3.1 MB" },
      { name: "Protection Settings Guide", version: "v2.2 | Nov 2025", size: "1.8 MB" },
    ],
  },
  "hydraulic-actuator": {
    name: "Hydraulic Actuator Retrofit Kit",
    code: "HA-500",
    tagline: "Voith & Woodward Compatible Replacement Actuators",
    description: "The HA-500 is a drop-in hydraulic actuator retrofit kit designed for discontinued Voith and Woodward models. Includes reverse-engineered servo valves, modern sealing technology, and position feedback transmitters.",
    image: actuatorProductImage,
    specs: [
      { label: "Stroke", value: "50-200mm configurable" },
      { label: "Force", value: "5-50 kN" },
      { label: "Response", value: "<200ms" },
      { label: "Pressure", value: "40-160 bar" },
      { label: "Feedback", value: "LVDT / Potentiometric" },
      { label: "Sealing", value: "PTFE/FKM (modern)" },
    ],
    applications: [
      "Voith R16/R25/R32 series - reverse-engineered to OEM specs for discontinued models",
      "Francis turbine guide vane control - precision positioning for hydroelectric applications",
      "Steam turbine valve actuators - governor valve and intercept valve positioning",
      "Hydraulic system modernization - modern seals eliminate recurring oil contamination",
      "HPU integration - compatible with existing hydraulic power units and accumulator systems",
    ],
    compatibility: [
      { oem: "Voith R16", status: "full", notes: "Direct bolt-on replacement" },
      { oem: "Voith R25", status: "full", notes: "Direct bolt-on replacement" },
      { oem: "Voith R32/R40", status: "full", notes: "Mounting adapter kit included" },
      { oem: "Woodward (Legacy)", status: "full", notes: "Linkage-compatible" },
      { oem: "BHEL Actuators", status: "partial", notes: "Custom interface plate" },
      { oem: "Rexroth", status: "rfq", notes: "Assessment required" },
    ],
    documents: [
      { name: "HA-500 Retrofit Kit Datasheet", version: "v2.1 | Jan 2026", size: "1.8 MB" },
      { name: "Voith Spares Catalogue", version: "v2.1 | Jan 2026", size: "1.8 MB" },
    ],
  },
};

// Fallback for products without full detail
const defaultProduct: ProductData = {
  name: "Product",
  code: "TX-XXX",
  tagline: "Engineered for Legacy System Compatibility",
  description: "This product page is being populated with detailed technical specifications. Contact our engineering team for immediate specifications and compatibility assessment.",
  image: defaultProductImage,
  specs: [],
  applications: ["Contact engineering team for application-specific details"],
  compatibility: [],
  documents: [],
};

const statusIcon = (s: CompatStatus) => {
  switch (s) {
    case "full": return <Check className="w-4 h-4 text-green-600" />;
    case "partial": return <Minus className="w-4 h-4 text-[#FF6B35]" />;
    case "none": return <X className="w-4 h-4 text-red-400" />;
    case "rfq": return <span className="text-[10px] font-[var(--font-mono)] text-blue-600">RFQ</span>;
  }
};

const statusLabel: Record<CompatStatus, string> = {
  full: "Fully Compatible",
  partial: "Adapter Required",
  none: "Not Compatible",
  rfq: "Contact for Assessment",
};

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug && products[slug] ? products[slug] : defaultProduct;
  const displayName = slug && products[slug] ? product.name : slug?.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") || "Product";

  return (
    <div>
      <section className="bg-[#1A2A3A] text-white py-12">
        <div className="site-shell">
          <Breadcrumb items={[{ label: "Products", path: "/products" }, { label: displayName }]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="font-[var(--font-mono)] text-[11px] text-[#FF6B35] tracking-wider mb-2">{product.code}</div>
              <h1 className="font-[var(--font-heading)] text-[28px] md:text-[38px] leading-tight text-white mb-2">{displayName}</h1>
              <p className="font-[var(--font-heading)] text-[16px] text-white/70 mb-4">{product.tagline}</p>
              <p className="text-white/50 text-[14px] leading-relaxed mb-6">{product.description}</p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:+918904017774" className="flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-5 py-2.5 rounded-lg transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-[13px]">Discuss Application</span>
                </a>
                <Link to="/contact" className="flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white px-5 py-2.5 rounded-lg transition-colors">
                  <span className="text-[13px]">Request Technical Consultation</span>
                </Link>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/15 shadow-xl bg-[#0F1A28] relative group">
              <div className="aspect-[4/3]">
                <img
                  src={product.image}
                  alt={`${displayName} equipment at Texron workshop`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-4 left-4 bg-[#1E3A5F]/85 backdrop-blur-sm text-white text-[10px] font-[var(--font-mono)] uppercase tracking-wider px-3 py-1.5 rounded">
                Product View
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Grid */}
      {product.specs.length > 0 && (
        <section className="bg-white border-b border-[#E5E7EB]">
          <div className="site-shell py-8">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
              {product.specs.map((s) => (
                <div key={s.label}>
                  <p className="font-[var(--font-heading)] text-[20px] text-[#1A2A3A]">{s.value}</p>
                  <p className="text-[10px] text-[#6B7280] font-[var(--font-mono)]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Application & Customization */}
      <section className="py-14 bg-[#F3F4F6]">
        <div className="site-shell">
          <h3 className="font-[var(--font-heading)] text-[11px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">Application & Customization</h3>
          <h4 className="font-[var(--font-heading)] text-[#1A2A3A] text-[24px] mb-6">How Texron Integrates This Product</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.applications.map((app, i) => (
              <div key={i} className="bg-white rounded-xl border border-[#E5E7EB] p-5 flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#FF6B35]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-[var(--font-mono)] text-[10px] text-[#FF6B35]">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p className="text-[13px] text-[#6B7280] leading-relaxed">{app}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM Compatibility Matrix */}
      {product.compatibility.length > 0 && (
        <section className="py-14 bg-white">
          <div className="site-shell">
            <h3 className="font-[var(--font-heading)] text-[11px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">OEM Compatibility</h3>
            <h4 className="font-[var(--font-heading)] text-[#1A2A3A] text-[24px] mb-6">Legacy System Cross-Reference</h4>
            <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 px-5 py-3 bg-[#1A2A3A] text-white font-[var(--font-mono)] text-[11px] tracking-wider">
                <div className="col-span-4">LEGACY OEM SYSTEM</div>
                <div className="col-span-2">STATUS</div>
                <div className="col-span-6">INTEGRATION NOTES</div>
              </div>
              {product.compatibility.map((row, i) => (
                <div key={row.oem} className={`grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-5 py-4 items-center ${i < product.compatibility.length - 1 ? "border-b border-[#E5E7EB]" : ""} hover:bg-[#F3F4F6]/50 transition-colors`}>
                  <div className="md:col-span-4 font-[var(--font-heading)] text-[14px] text-[#1A2A3A]">{row.oem}</div>
                  <div className="md:col-span-2">
                    <span className="inline-flex items-center gap-1.5">
                      {statusIcon(row.status)}
                      <span className="font-[var(--font-mono)] text-[10px] text-[#6B7280]">{statusLabel[row.status]}</span>
                    </span>
                  </div>
                  <div className="md:col-span-6 text-[12px] text-[#6B7280]">{row.notes}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 bg-[#1A2A3A] text-white">
        <div className="site-shell">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-[var(--font-heading)] text-[24px] leading-tight mb-3">Need This Product for Your Plant?</h2>
            <p className="text-white/70 text-[14px] leading-relaxed max-w-xl mx-auto mb-6">Share your OEM model and vintage - we'll confirm compatibility within 24 hours.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a href="tel:+918904017774" className="flex items-center justify-center gap-2 bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-6 py-3 rounded-lg transition-colors">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <Link to="/contact" className="flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg transition-colors">
                Request Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <PageTimestamp lastUpdated="March 2026" nextAudit="Q2 2026" />
    </div>
  );
}