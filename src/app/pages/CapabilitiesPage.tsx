import { Breadcrumb } from "../components/Breadcrumb";
import { PhotoPlaceholder } from "../components/PhotoPlaceholder";
import { PageTimestamp } from "../components/PageTimestamp";
import { motion } from "motion/react";
import { Monitor, Wrench, Microscope, Box, Cpu, Shield } from "lucide-react";
import { FluidGallery } from "../components/ui/fluid-gallery";
import { CubeCarousel } from "../components/ui/cube-carousel";

// Real facility images from workspace assets
import assembledGovernorImg from "../../../imageAssets/IMG-20211116-WA0046(2).jpg.jpeg";
import cadDesignImg from "../../../imageAssets/IMG-20211123-WA0030(2).jpg.jpeg";
import hydraulicTestImg from "../../../imageAssets/IMG-20211123-WA0033(2).jpg.jpeg";
import panelWiringImg from "../../../imageAssets/IMG-20211123-WA0070(3).jpg.jpeg";
import extraImg1 from "../../../imageAssets/IMG20240905131800.jpg.jpeg";
import extraImg2 from "../../../imageAssets/IMG20220706101815.jpg.jpeg";
import extraImg3 from "../../../imageAssets/IMG-20211124-WA0037.jpg.jpeg";

const capabilityGalleryImages = [
  { src: assembledGovernorImg, alt: "Electronic Governor Control Panel Assembly", category: "Assembly", span: "wide" as const },
  { src: hydraulicTestImg, alt: "Hydraulic Testing Bench in Operation", category: "Testing" },
  { src: panelWiringImg, alt: "Detailed Control Panel Wiring", category: "Fabrication", span: "tall" as const },
  { src: cadDesignImg, alt: "Quality Inspection and Testing Station", category: "Quality Lab" },
  { src: extraImg1, alt: "Turbine Actuator Assembly Process", category: "Machining", span: "wide" as const },
  { src: extraImg2, alt: "Rotor Structural Realignment", category: "Engineering" },
  { src: extraImg3, alt: "Comprehensive Valve Check Loop", category: "Validation", span: "tall" as const },
];

const facilityAreas = [
  {
    title: "In house facility",
    icon: Wrench,
    description: "Our Peenya Phase IV facility is equipped with state-of-the-art infrastructure for complete turbine services and component manufacturing.",
    photos: [
      { directive: "Wide-angle view of the complete Peenya facility showing multiple work zones", fallback: "https://images.unsplash.com/photo-1738918937796-743064feefa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" },
      { directive: "Facility entrance and main operational areas", fallback: "https://images.unsplash.com/photo-1570086625762-7c1396540ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" },
    ],
  },
  {
    title: "Machine floor",
    icon: Box,
    description: "Advanced CNC machining center equipped for precision component manufacturing, from servo valve bodies to custom manifolds and actuators.",
    photos: [
      { directive: "CNC machining center in operation with precision turbine components", fallback: "https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" },
      { directive: "Machined turbine components ready for assembly", fallback: "https://images.unsplash.com/photo-1720670996872-370771b91159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" },
    ],
  },
  {
    title: "Engineering and design",
    icon: Monitor,
    description: "State-of-the-art CAD lab with SolidWorks and AutoCAD workstations for 3D modeling, reverse-engineering, and technical documentation.",
    photos: [
      { directive: "Engineer at dual-monitor workstation with turbine schematic open in SolidWorks", fallback: "https://images.unsplash.com/photo-1738918937796-743064feefa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" },
    ],
  },
  {
    title: "Assembly",
    icon: Wrench,
    description: "Climate-controlled assembly floor for governor assembly, wiring, and panel fabrication with precision workstations and quality controls.",
    photos: [
      { directive: "Wide-angle of governor assembly workstations with DTG-3000 units in various stages of assembly", fallback: "https://images.unsplash.com/photo-1738918937796-743064feefa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" },
      { directive: "Close-up of control panel wiring in progress - neatly bundled cable runs visible", fallback: "https://images.unsplash.com/photo-1570086625762-7c1396540ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" },
    ],
  },
  {
    title: "Testing and QA",
    icon: Microscope,
    description: "Comprehensive testing facility including hydraulic bench (up to 200 bar), NDT equipment, protection relay test sets, and governor simulators.",
    photos: [
      { directive: "Hydraulic test bench with Voith actuator mounted - pressure gauges and control valves visible", fallback: "https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" },
      { directive: "NDT equipment setup - ultrasonic thickness gauge being used on turbine component", fallback: "https://images.unsplash.com/photo-1720670996872-370771b91159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" },
    ],
  },
];

const equipmentList = [
  { icon: Cpu, name: "Governor Test Simulator", desc: "Full-scale turbine governor testing with simulated load conditions" },
  { icon: Box, name: "Hydraulic Test Bench (200 bar)", desc: "Actuator stroke, pressure, and leak testing at full operating pressure" },
  { icon: Shield, name: "Protection Relay Test Set", desc: "Secondary injection testing for all numerical and electromechanical relays" },
  { icon: Monitor, name: "SolidWorks/AutoCAD Station", desc: "3D modeling for reverse-engineering discontinued OEM components" },
  { icon: Microscope, name: "Ultrasonic & Hardness Tester", desc: "Non-destructive thickness measurement and material hardness verification" },
  { icon: Wrench, name: "CNC Machining Center", desc: "Precision machining for custom servo valve bodies and manifolds" },
];

export function CapabilitiesPage() {
  return (
    <div>
      <section className="bg-[#1A2A3A] text-white py-12">
        <div className="site-shell">
          <Breadcrumb items={[{ label: "Infrastructure" }]} />
          <h1 className="font-[var(--font-heading)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">Infrastructure</h1>
          <h2 className="font-[var(--font-heading)] text-[32px] md:text-[40px] leading-tight mb-3 text-white">
            In-House Infrastructure
          </h2>
          <p className="text-white/60 text-[15px] max-w-2xl">
            Our Peenya Phase IV facility houses dedicated assembly, testing, and re-engineering capabilities.
            Everything from governor calibration to hydraulic actuator testing happens under one roof.
          </p>
        </div>
      </section>

      {/* Custom Infrastructure Gallery using Real Images */}
      <section className="py-14 bg-[#F5F5F5] border-y border-[#E8EAED]">
        <div className="site-shell">
          <h3 className="font-[var(--font-heading)] text-[11px] tracking-[0.2em] text-[#FF6B35] uppercase mb-1">Live from the Floor</h3>
          <h4 className="font-[var(--font-heading)] text-[#1A2A3A] text-[24px] mb-8">Inside Our Peenya Facility</h4>
          <CubeCarousel images={capabilityGalleryImages} />
        </div>
      </section>

      {/* Facility Gallery Sections */}
      {facilityAreas.map((area, ai) => {
        const Icon = area.icon;
        return (
          <section key={area.title} className={`py-14 ${ai % 2 === 0 ? "bg-white" : "bg-[#F3F4F6]"}`}>
            <div className="site-shell">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[#1A2A3A]/5 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#1A2A3A]" />
                </div>
                <div>
                  <h3 className="font-[var(--font-heading)] text-[#1A2A3A] text-[20px]">{area.title}</h3>
                </div>
              </div>
              <p className="text-[14px] text-[#6B7280] mb-6 max-w-2xl">{area.description}</p>
              <div className={`grid grid-cols-1 ${area.photos.length > 1 ? "md:grid-cols-2" : ""} gap-5`}>
                {area.photos.map((photo, pi) => (
                  <motion.div
                    key={pi}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: pi * 0.1, duration: 0.3 }}
                  >
                    <PhotoPlaceholder
                      directive={photo.directive}
                      fallbackImage={photo.fallback}
                      aspectRatio="aspect-[16/10]"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Equipment List */}
      <section className="py-14 bg-[#1A2A3A]">
        <div className="site-shell">
          <h3 className="font-[var(--font-heading)] text-[11px] tracking-[0.2em] text-[#FF6B35] uppercase mb-1">Key Equipment</h3>
          <h4 className="font-[var(--font-heading)] text-white text-[24px] mb-6">Testing & Manufacturing Equipment</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {equipmentList.map((eq, i) => {
              const Icon = eq.icon;
              return (
                <motion.div
                  key={eq.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-5"
                >
                  <Icon className="w-5 h-5 text-[#FF6B35] mb-2" />
                  <h5 className="font-[var(--font-heading)] text-white text-[14px] mb-1">{eq.name}</h5>
                  <p className="text-[11px] text-white/40">{eq.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <PageTimestamp lastUpdated="March 2026" nextAudit="Q2 2026" />
    </div>
  );
}
