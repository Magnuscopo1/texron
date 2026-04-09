import { Link } from "react-router";
import {
  Check,
  Phone,
  ArrowRight,
  Activity,
  Settings,
  Clock,
  Shield,
} from "lucide-react";
import { PhotoPlaceholder } from "../components/PhotoPlaceholder";
import { Breadcrumb } from "../components/Breadcrumb";
import { FAQ } from "../components/FAQ";
import { PageTimestamp } from "../components/PageTimestamp";
import { FluidGallery } from "../components/ui/fluid-gallery";

// Temporary imports from raw workspace assets - to be migrated to /public/assets/gallery/ later
import bhelImg1 from "../../../imageAssets/IMG-20211116-WA0030(1).jpg.jpeg";
import bhelImg2 from "../../../imageAssets/IMG-20211116-WA0032(2).jpg.jpeg";
import bhelImg3 from "../../../imageAssets/IMG_20211016_123409(1).jpg.jpeg";

const galleryImages = [
  { src: bhelImg1, alt: "BHEL Governor Retrofit Initial Phase", category: "Installation", span: "wide" as const },
  { src: bhelImg2, alt: "Woodward 505E Replacement View", category: "System Integration" },
  { src: bhelImg3, alt: "Steam Turbine Setup", category: "Commissioning", span: "tall" as const },
];

const bhelFAQs = [
  { question: "What BHEL turbine models are compatible with the DTG-3000?", answer: "The DTG-3000 series covers BHEL units from 30 MW to 500 MW including KWU design, indigenous, and Alstom-licensed models. Units with Woodward 505E, BHEL indigenous, and Alstom Alspa governor systems are fully supported. For 660 MW supercritical units with Siemens T3000, a custom assessment is required." },
  { question: "How long does a governor retrofit take?", answer: "Emergency deployments are completed in 48 hours including Factory Acceptance Testing (FAT), on-site installation, and load testing. Planned installations during scheduled outages typically take 3-5 days including comprehensive performance verification." },
  { question: "Can you retain the existing actuator linkage?", answer: "Yes. The DTG-3000 is designed as a drop-in replacement. We retain existing actuator linkages and mechanical interfaces to minimize outage duration. Only the electronic governor module and associated wiring are replaced." },
  { question: "What is the typical improvement in load stability?", answer: "Post-retrofit load stability typically improves to +/-0.5% from the common pre-retrofit range of +/-2-5%. Governor response time improves from 500-800ms (Woodward 505E) to 120ms with the DTG-3000." },
  { question: "Do you provide post-retrofit support?", answer: "Yes. Every retrofit includes 12 months of warranty support, remote monitoring capability, and 24/7 emergency callback. We also offer 5-year LTSA packages that include quarterly preventive maintenance visits." },
  { question: "What certifications does Texron hold?", answer: "Texron is ISO 9001:2015 certified, BHEL approved as a retrofit partner, and registered as an NTPC vendor. Our DTG-3000 series has been successfully deployed in NTPC, KPCL, TANGEDCO, and private sector plants." },
];

const compatibilityData = [
  { model: "BHEL 30 MW (KWU Design)", vintage: "1985-1995", governor: "Woodward 505E", status: "Fully Compatible", retrofit: "DTG-3000A" },
  { model: "BHEL 60 MW", vintage: "1990-2000", governor: "Woodward 505/505E", status: "Fully Compatible", retrofit: "DTG-3000A" },
  { model: "BHEL 110 MW", vintage: "1988-2005", governor: "BHEL Indigenous", status: "Fully Compatible", retrofit: "DTG-3000B" },
  { model: "BHEL 120 MW", vintage: "1992-2005", governor: "Woodward 505E", status: "Fully Compatible", retrofit: "DTG-3000B" },
  { model: "BHEL 210 MW", vintage: "1990-2010", governor: "Woodward 505E/EHG", status: "Fully Compatible", retrofit: "DTG-3000C" },
  { model: "BHEL 250 MW (Alstom)", vintage: "2000-2012", governor: "Alstom Alspa", status: "Adapter Required", retrofit: "DTG-3000C+" },
  { model: "BHEL 500 MW", vintage: "1995-2015", governor: "Siemens/Woodward", status: "Contact Engineering", retrofit: "Custom" },
  { model: "BHEL 660 MW (Supercritical)", vintage: "2010-Present", governor: "Siemens T3000", status: "Assessment Required", retrofit: "Custom" },
];

export function BhelRetrofitsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1E3A5F] text-white py-12">
        <div className="site-shell">
          <Breadcrumb items={[
            { label: "Expertise", path: "/expertise" },
            { label: "BHEL Steam Turbine Governor Retrofits" },
          ]} />
          <h1 className="text-[28px] md:text-[38px] leading-tight mb-3 text-white">
            BHEL Steam Turbine Governor Retrofits
          </h1>
          <p className="text-white/60 text-[15px] max-w-3xl mb-6">
            Drop-in digital governor replacements for BHEL steam turbines from 30 MW to 500 MW.
            Compatible with Woodward 505E, BHEL indigenous, and Alstom Alspa systems.
            On-site commissioning within 48 hours for emergency deployments.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+918904017774" className="flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-5 py-2.5 rounded-lg transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-[13px]">Discuss Your BHEL Unit</span>
            </a>
            <Link to="/contact" className="flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white px-5 py-2.5 rounded-lg transition-colors">
              <span className="text-[13px]">Request Retrofit Assessment</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Specs */}
      <section className="bg-white border-b border-[#E8EAED]">
        <div className="site-shell py-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              { value: "120ms", label: "Response Time" },
              { value: "+/-0.5%", label: "Load Stability" },
              { value: "48hr", label: "Emergency Install" },
              { value: "200+", label: "Units Retrofitted" },
              { value: "18 mo", label: "Avg. Zero-Trip Record" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-[var(--font-mono)] text-[22px] text-[#1E3A5F]">{stat.value}</p>
                <p className="text-[11px] text-[#5A6B7D]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility Chart */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="site-shell">
          <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
            Field Implementation
          </h2>
          <h3 className="text-[#1E3A5F] text-[24px] mb-1">
            BHEL Retrofit Project Gallery
          </h3>
          <p className="text-[13px] text-[#5A6B7D] mb-6">
            On-site photographic documentation of our recent digital governor upgrades.
          </p>
          <FluidGallery images={galleryImages} className="mb-16" />

          <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
            Compatibility
          </h2>
          <h3 className="text-[#1E3A5F] text-[24px] mb-1">
            BHEL Turbine Model Cross-Reference
          </h3>
          <p className="text-[13px] text-[#5A6B7D] mb-6">
            Immediate compatibility verification for your specific BHEL unit model and vintage.
          </p>

          <div className="bg-white rounded-xl border border-[#E8EAED] overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="bg-[#1E3A5F] text-white">
                  <th className="text-left px-4 py-3 font-[var(--font-mono)] text-[11px] tracking-wider">BHEL MODEL</th>
                  <th className="text-left px-4 py-3 font-[var(--font-mono)] text-[11px] tracking-wider">VINTAGE</th>
                  <th className="text-left px-4 py-3 font-[var(--font-mono)] text-[11px] tracking-wider">EXISTING GOVERNOR</th>
                  <th className="text-left px-4 py-3 font-[var(--font-mono)] text-[11px] tracking-wider">STATUS</th>
                  <th className="text-left px-4 py-3 font-[var(--font-mono)] text-[11px] tracking-wider">TEXRON RETROFIT</th>
                </tr>
              </thead>
              <tbody>
                {compatibilityData.map((row, i) => (
                  <tr key={row.model} className={`${i % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]/50"} hover:bg-blue-50/30`}>
                    <td className="px-4 py-3 text-[13px] text-[#1E3A5F]">{row.model}</td>
                    <td className="px-4 py-3 font-[var(--font-mono)] text-[12px] text-[#5A6B7D]">{row.vintage}</td>
                    <td className="px-4 py-3 text-[12px] text-[#5A6B7D]">{row.governor}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-[var(--font-mono)] ${
                        row.status === "Fully Compatible"
                          ? "bg-green-100 text-green-700"
                          : row.status === "Adapter Required"
                          ? "bg-[#FF6B35]/10 text-[#FF6B35]"
                          : "bg-blue-100 text-blue-700"
                      }`}>
                        {row.status === "Fully Compatible" && <Check className="w-3 h-3" />}
                        {row.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-[var(--font-mono)] text-[12px] text-[#1E3A5F]">{row.retrofit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="site-shell">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
                Retrofit Process
              </h2>
              <h3 className="text-[#1E3A5F] text-[24px] mb-6">
                From Assessment to Commissioning
              </h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Site Survey & Compatibility Assessment", desc: "Our engineers verify existing governor model, actuator linkage, and control panel interface. Usually completed in 1 day." },
                  { step: "02", title: "DTG-3000 Configuration & FAT", desc: "Pre-configured and factory-tested to match your turbine's operating parameters. PID values pre-tuned from our database of 200+ BHEL units." },
                  { step: "03", title: "On-Site Installation & Commissioning", desc: "Hot-cutover during planned maintenance window. Emergency installations completed in 48 hours including load testing." },
                  { step: "04", title: "Performance Verification & Handover", desc: "Load ramp testing, step response verification, and protection coordination check. Complete documentation package delivered." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#1E3A5F] flex items-center justify-center shrink-0">
                      <span className="font-[var(--font-mono)] text-white text-[12px]">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="text-[#1E3A5F] text-[14px] mb-1">{item.title}</h4>
                      <p className="text-[12px] text-[#5A6B7D] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <PhotoPlaceholder
                directive="Split-screen Before/After of a legacy governor retrofit - corroded Woodward 505E vs. new DTG-3000 installed"
                fallbackImage="https://images.unsplash.com/photo-1720670996872-370771b91159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVybWFsJTIwcG93ZXIlMjBwbGFudCUyMHN0ZWFtJTIwdHVyYmluZSUyMGVuZ2luZWVyaW5nfGVufDF8fHx8MTc3MzExNjk5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
              />

              <div className="bg-[#F5F5F5] rounded-xl p-5">
                <h4 className="font-[var(--font-mono)] text-[11px] tracking-wider text-[#1E3A5F]/50 mb-3">ENGAGEMENT MODEL</h4>
                <div className="space-y-3">
                  <div className="rounded-lg border border-[#E8EAED] bg-white p-3">
                    <p className="text-[12px] text-[#1E3A5F]">Rapid compatibility review within 24 hours</p>
                  </div>
                  <div className="rounded-lg border border-[#E8EAED] bg-white p-3">
                    <p className="text-[12px] text-[#1E3A5F]">Outage-window aligned execution planning</p>
                  </div>
                  <div className="rounded-lg border border-[#E8EAED] bg-white p-3">
                    <p className="text-[12px] text-[#1E3A5F]">Post-commissioning stabilization support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-[#1E3A5F] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-[24px] mb-3">Need a Governor Retrofit for Your BHEL Unit?</h2>
          <p className="text-white/60 text-[14px] mb-6">
            Tell us your turbine model and vintage. We'll confirm compatibility and quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="tel:+918904017774" className="flex items-center justify-center gap-2 bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <Link to="/contact" className="flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg transition-colors">
              Request Retrofit Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        title="BHEL Governor Retrofit FAQ"
        subtitle="Common questions from plant managers and procurement officers"
        items={bhelFAQs}
      />

      {/* Timestamp */}
      <PageTimestamp lastUpdated="February 2026" nextAudit="Q2 2026" />
    </div>
  );
}
