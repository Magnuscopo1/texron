import { Wrench, Settings, Activity, FileSearch, RefreshCw, ShieldCheck, Cog, Truck, AlertTriangle, Zap, CheckCircle } from "lucide-react";
import { SEO } from "../seo/SEO";

export function ServicesPage() {
  const services = [
    {
       id: "overhauling",
       icon: Wrench,
       title: "Turbine Overhauling",
       subtitle: "Thorough. Systematic. Documented.",
       desc: "A proper turbine overhaul goes well beyond cleaning and inspection. Our overhauling process covers every critical component — from rotor and blading to bearings, seals, and governing systems — with detailed documentation at every step.",
       bullets: [
         "Pre-overhaul condition assessment and planning",
         "Disassembly, cleaning, and component-by-component inspection",
         "Dimensional checks, NDT (Non-Destructive Testing), and wear analysis",
         "Replacement of worn components with OEM or equivalent parts",
         "Reassembly to design tolerances and alignment standards",
         "Post-overhaul trials, balancing, and performance testing"
       ]
    },
    {
       id: "commissioning",
       icon: Settings,
       title: "Erection & Commissioning",
       subtitle: "Getting It Right the First Time",
       desc: "The commissioning phase is where careful planning meets real-world execution. Our experienced engineers have commissioned over 60 power plant projects — from small 3 MW captive plants to 130 MW utility installations.",
       bullets: [
         "Civil coordination and equipment positioning",
         "Mechanical alignment, coupling, and piping connections",
         "Electrical terminations and panel wiring",
         "Governor setting, protection relay testing, and control loop tuning",
         "Load trials, grid synchronization, and performance acceptance testing"
       ]
    },
    {
       id: "vibration",
       icon: Activity,
       title: "Vibration Analysis",
       subtitle: "Listen to What Your Turbine Is Telling You",
       desc: "Unusual vibration in a turbine is often the first sign of a developing problem. Our expert vibration analysts use calibrated instruments and proven diagnostic methods to identify the root cause — whether it's a balance issue, misalignment, bearing wear, or something structural.",
       bullets: [
         "Online and offline vibration measurement",
         "Spectrum analysis and phase measurement",
         "Rotor balancing (shop and in-situ)",
         "Detailed diagnostic report with recommended corrective actions"
       ]
    },
    {
       id: "rla",
       icon: FileSearch,
       title: "RLA Study of Generators",
       subtitle: "Know What Your Generator Has Left",
       desc: "A Remaining Life Assessment (RLA) gives you a data-driven view of your generator's health and remaining operational life. This is especially valuable for units that have been in service for 15+ years or have experienced abnormal operating conditions.",
       bullets: [
         "Insulation resistance and polarization index testing",
         "Winding temperature and resistance checks",
         "Core inspection and loss testing",
         "Bearing and shaft condition assessment",
         "Comprehensive report with life extension recommendations"
       ]
    },
    {
       id: "refurbishment",
       icon: RefreshCw,
       title: "Refurbishment",
       subtitle: "Extend the Life of Your Assets",
       desc: "When a turbine or generator has seen better days but replacement isn't in the budget, refurbishment is the smart answer. We rebuild components to near-new specifications — extending equipment life by years at a fraction of new equipment cost.",
       bullets: [
         "Rotor re-blading and tip re-profiling",
         "Bearing housing and seal rebuilding",
         "Stator rewinding and insulation restoration",
         "Governor and control system refurbishment"
       ]
    },
    {
       id: "ltsa",
       icon: ShieldCheck,
       title: "Long-Term Service Agreements (LTSA)",
       subtitle: "Peace of Mind, Year After Year",
       desc: "Our Long-Term Service Agreements take the guesswork out of plant maintenance. With a customized LTSA, you get a structured maintenance plan, priority response, and predictable costs — so you can focus on running your plant, not worrying about it.",
       bullets: [
         "Scheduled preventive maintenance visits",
         "Priority response for breakdowns and emergencies",
         "Annual or biennial major inspections",
         "Spare parts supply and management",
         "Performance monitoring and trend analysis reporting"
       ]
    }
  ];

  const secondaryServices = [
    { title: "Gearbox Re-Engineering", icon: Cog, desc: "We handle everything from gearbox inspection and repair to complete re-engineering for changed operating conditions." },
    { title: "TG Set Relocation", icon: Truck, desc: "Moving a turbogenerator set is a complex undertaking. We manage disassembly, transportation, and re-commissioning." },
    { title: "Troubleshooting", icon: AlertTriangle, desc: "When your turbine is behaving oddly, our troubleshooting team gets to the bottom of it quickly with diagnostic tools." },
    { title: "Generator & AC Motor Services", icon: Zap, desc: "Inspection, testing, rewinding, and refurbishment services for synchronous generators and AC motors." },
  ];

  return (
    <div>
      <SEO 
        title="Turbine Services — Overhauling, Retrofit, Commissioning | Texron Power" 
        description="Texron Power offers expert turbine services including overhauling, erection & commissioning, vibration analysis, RLA studies, refurbishment, and long-term service agreements across India." 
      />

      <section className="bg-[#1E3A5F] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-[32px] md:text-[44px] font-bold leading-tight mb-4 text-white max-w-4xl">
            Turbine lifecycle services.
          </h1>
          <p className="text-white/80 text-[18px] max-w-3xl mb-4 leading-relaxed">
            Keeping your turbines running isn't just about fixing what's broken. It's about understanding your equipment deeply, staying ahead of potential failures, and having a team you can call at any hour.
          </p>
          <p className="text-white/80 text-[18px] max-w-3xl leading-relaxed font-semibold">
            That's what Texron's service team is here for.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="bg-white rounded-xl shadow-sm border border-[#E8EAED] overflow-hidden flex flex-col md:flex-row">
              <div className="bg-[#1A2A3A] p-8 md:w-1/3 flex flex-col justify-center text-white">
                <service.icon className="w-12 h-12 text-[#FF6B35] mb-6" />
                <p className="font-[var(--font-mono)] tracking-[0.1em] text-[12px] text-[#FF6B35] uppercase mb-2">{service.subtitle}</p>
                <h2 className="text-[26px] font-semibold mb-4 leading-tight">{service.title}</h2>
              </div>
              <div className="p-8 md:p-12 md:w-2/3">
                <p className="text-[#5A6B7D] text-[15px] mb-8 leading-relaxed max-w-3xl">
                  {service.desc}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px] text-[#5A6B7D]">
                  {service.bullets.map((bullet, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <CheckCircle className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-[#E8EAED]">
                   <a href="tel:+918904017774" className="text-[#1E3A5F] hover:text-[#FF6B35] font-semibold text-[14px]">Request {service.title} Quote →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-16 bg-white border-t border-[#E8EAED]">
         <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2 text-center">
              Specialized Interventions
            </h2>
            <h3 className="text-[#1E3A5F] text-[28px] md:text-[32px] font-semibold mb-12 text-center">
              Targeted Engineering Solutions
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
               {secondaryServices.map(svc => (
                 <div key={svc.title} className="bg-[#F5F5F5] p-6 rounded-xl border border-[#E8EAED]">
                   <svc.icon className="w-8 h-8 text-[#FF6B35] mb-4" />
                   <h4 className="text-[#1A2A3A] font-semibold text-[16px] mb-3">{svc.title}</h4>
                   <p className="text-[14px] text-[#5A6B7D] leading-relaxed">{svc.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
}
