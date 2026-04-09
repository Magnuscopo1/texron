import { Link } from "react-router";
import { CheckCircle, Shield, Phone, ArrowRight, FileSearch, ArrowDown } from "lucide-react";
import { SEO } from "../seo/SEO";
import { Breadcrumb } from "../components/Breadcrumb";
import { PageTimestamp } from "../components/PageTimestamp";
import { FluidGallery } from "../components/ui/fluid-gallery";

// Temporary imports from raw workspace assets - to be migrated to /public/assets/gallery/ later
import rlaImg1 from "../../../imageAssets/IMG-20191105-WA0059.jpg.jpeg";
import rlaImg2 from "../../../imageAssets/IMG-20191105-WA0064.jpg.jpeg";
import rlaImg3 from "../../../imageAssets/IMG-20191105-WA0041.jpg.jpeg";

const galleryImages = [
  { src: rlaImg1, alt: "Turbine Core Inspection", category: "Condition Assessment", span: "wide" as const },
  { src: rlaImg2, alt: "Insulation Resistance Testing", category: "Diagnostics" },
  { src: rlaImg3, alt: "Partial Discharge Analysis Setup", category: "RLA Study", span: "tall" as const },
];

export function RlaStudiesPage() {
  return (
    <div>
      <SEO 
        title="RLA Studies for Thermal Power Plants | Texron Power Bengaluru" 
        description="Comprehensive Remaining Life Assessment (RLA) studies and condition assessment for generators and turbines across India. Data-driven diagnostics by Texron." 
      />

      <section className="bg-[#1E3A5F] text-white py-12 md:py-16">
        <div className="site-shell">
          <Breadcrumb items={[
            { label: "Services", path: "/services" },
            { label: "RLA Studies & Condition Assessment" },
          ]} />
          <h1 className="text-[28px] md:text-[40px] font-bold leading-tight mb-4 text-white max-w-4xl mt-4">
            Remaining Life Assessment (RLA)
          </h1>
          <p className="text-white/80 text-[18px] max-w-3xl mb-8 leading-relaxed">
            Data-driven evaluation of your generator's health and remaining operational life. Specially tailored for units in service for 15+ years or exposed to abnormal operating conditions.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+918904017774" className="flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-5 py-3 rounded-lg transition-colors font-semibold">
              <Phone className="w-4 h-4" />
              <span className="text-[14px]">Consult an Expert</span>
            </a>
            <Link to="/contact" className="flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white px-5 py-3 rounded-lg transition-colors">
              <span className="text-[14px]">Request Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-[#E8EAED]">
        <div className="site-shell grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
              Why Commission an RLA?
            </h2>
            <h3 className="text-[#1E3A5F] text-[28px] font-semibold mb-6">
              Know What Your Generator Has Left
            </h3>
            <p className="text-[#5A6B7D] text-[15px] mb-6 leading-relaxed">
              Your generator has been running reliably for decades. But how much longer can you count on it? Are there hidden problems developing that could cause an unexpected failure? An RLA provides a structured technical evaluation to give you an accurate, evidence-based picture of your equipment's condition.
            </p>
            <h4 className="font-semibold text-[#1A2A3A] text-[16px] mb-4">When to Schedule:</h4>
            <ul className="space-y-3 text-[14px] text-[#5A6B7D]">
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] shrink-0" /> In service for 15 years or more</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] shrink-0" /> Experienced abnormal conditions (overloading, fault events, flooding)</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] shrink-0" /> Facing capital expenditure decisions (refurbish vs replace)</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] shrink-0" /> Insurer or lender requirements</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF6B35] shrink-0" /> Moving from time-based to condition-based maintenance</li>
            </ul>
          </div>
          
          <div className="bg-[#F5F5F5] rounded-xl p-8 border border-[#E8EAED]">
            <FileSearch className="w-10 h-10 text-[#FF6B35] mb-6" />
            <h3 className="text-[#1E3A5F] text-[20px] font-semibold mb-4">What Does it Involve?</h3>
            <div className="space-y-4">
              {[
                "Insulation resistance (IR) and polarization index (PI)",
                "Winding resistance and impedance measurements",
                "High potential (Hi-Pot) testing",
                "Partial discharge (PD) analysis on higher voltage machines",
                "Core inspection and iron loss assessment",
                "Physical inspection of bearings and cooling systems"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 text-[#5A6B7D] text-[13px] bg-white p-3 rounded shadow-sm border border-[#E8EAED]">
                  <ArrowDown className="w-4 h-4 text-[#1E3A5F] shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F5F5]">
        <div className="site-shell">
          <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
            Field Diagnostics
          </h2>
          <h3 className="text-[#1E3A5F] text-[24px] mb-1">
            RLA Testing in Action
          </h3>
          <p className="text-[13px] text-[#5A6B7D] mb-6">
            Visual breakdown of our on-site condition assessment and high-voltage testing procedures.
          </p>
          <FluidGallery images={galleryImages} />
        </div>
      </section>

      <section className="bg-[#1E3A5F] text-white py-12 text-center">
         <div className="max-w-2xl mx-auto px-4">
            <h3 className="text-[24px] font-semibold mb-4">Receive a Comprehensive Report</h3>
            <p className="text-white/70 text-[15px] mb-8">
               You receive a detailed written report with the findings from every test, an assessment of remaining life, and specific recommendations - paving the way for continued operation, targeted refurbishment, or replacement.
            </p>
            <Link to="/contact" className="inline-block bg-[#FF6B35] hover:bg-[#e55a2a] px-8 py-3 rounded text-white font-semibold transition-colors">
               Schedule an RLA Study
            </Link>
         </div>
      </section>

      <PageTimestamp lastUpdated="March 2026" nextAudit="Q3 2026" />
    </div>
  );
}
