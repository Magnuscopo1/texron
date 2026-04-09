import { Wrench, Settings, Activity, FileSearch, RefreshCw, ShieldCheck, Cog, Truck, AlertTriangle, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router";
import { SEO } from "../seo/SEO";

export function ServicesPage() {
  const services = [
    {
       id: "overhauling",
       icon: Wrench,
       title: "Turbine Overhauling",
       subtitle: "Thorough. Systematic. Documented.",
      detailPath: "/services/turbine-overhauling",
       desc: "A proper turbine overhaul goes well beyond cleaning and inspection. Our overhauling process covers every critical component - from rotor and blading to bearings, seals, and governing systems - with detailed documentation at every step.",
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
      detailPath: "/services/erection-commissioning-testing",
       desc: "The commissioning phase is where careful planning meets real-world execution. Our experienced engineers have commissioned over 60 power plant projects - from small 3 MW captive plants to 130 MW utility installations.",
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
      detailPath: "/services/vibration-analysis-diagnostics",
       desc: "Unusual vibration in a turbine is often the first sign of a developing problem. Our expert vibration analysts use calibrated instruments and proven diagnostic methods to identify the root cause - whether it's a balance issue, misalignment, bearing wear, or something structural.",
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
      detailPath: "/rla-studies-thermal-power-plants-bangalore",
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
      detailPath: "/services/turbine-refurbishment-life-extension",
       desc: "When a turbine or generator has seen better days but replacement isn't in the budget, refurbishment is the smart answer. We rebuild components to near-new specifications - extending equipment life by years at a fraction of new equipment cost.",
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
      detailPath: "/services/ltsa-amc-services",
       desc: "Our Long-Term Service Agreements take the guesswork out of plant maintenance. With a customized LTSA, you get a structured maintenance plan, priority response, and predictable costs - so you can focus on running your plant, not worrying about it.",
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
    {
      id: "gearbox",
      title: "Gearbox Re-Engineering",
      icon: Cog,
      lane: "Mechanical Recovery",
      desc: "We handle everything from gearbox inspection and repair to complete re-engineering for changed operating conditions.",
      layout: "lg:col-span-4 lg:col-start-1 lg:row-start-1",
      tone: "light" as const,
    },
    {
      id: "relocation",
      title: "TG Set Relocation",
      icon: Truck,
      lane: "Heavy Relocation",
      desc: "Moving a turbogenerator set is a complex undertaking. We manage disassembly, transportation, and re-commissioning.",
      layout: "lg:col-span-4 lg:col-start-9 lg:row-start-1",
      tone: "dark" as const,
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting",
      icon: AlertTriangle,
      lane: "Fault Diagnostics",
      desc: "When your turbine is behaving oddly, our troubleshooting team gets to the bottom of it quickly with diagnostic tools.",
      layout: "lg:col-span-4 lg:col-start-1 lg:row-start-2",
      tone: "light" as const,
    },
    {
      id: "generator",
      title: "Generator & AC Motor Services",
      icon: Zap,
      lane: "Electrical Renewal",
      desc: "Inspection, testing, rewinding, and refurbishment services for synchronous generators and AC motors.",
      layout: "lg:col-span-4 lg:col-start-9 lg:row-start-2",
      tone: "dark" as const,
    },
  ];

  return (
    <div>
      <SEO 
        title="Turbine Services - Overhauling, Retrofit, Commissioning | Texron Power" 
        description="Texron Power offers expert turbine services including overhauling, erection & commissioning, vibration analysis, RLA studies, refurbishment, and long-term service agreements across India." 
      />

      <section className="bg-[#1E3A5F] text-white py-16">
        <div className="site-shell">
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
        <div className="site-shell space-y-16">
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
                   <div className="flex flex-wrap items-center gap-4">
                     <Link to={service.detailPath} className="text-[#1E3A5F] hover:text-[#FF6B35] font-semibold text-[14px]">
                       View {service.title} Details →
                     </Link>
                     <a href="tel:+918904017774" className="text-[#6B7280] hover:text-[#1E3A5F] font-semibold text-[14px]">
                       Request {service.title} Quote
                     </a>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specialty Services */}
      <section className="border-t border-[#E8EAED] bg-[linear-gradient(180deg,#F5F7FA_0%,#EEF2F6_100%)] py-20">
        <div className="site-shell">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-3 font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase">
              Specialized Interventions
            </h2>
            <h3 className="text-[30px] font-semibold text-[#1E3A5F] md:text-[36px]">
              Targeted Engineering Solutions
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#5A6B7D]">
              Complex site challenges rarely fit one bucket. This intervention map shows how Texron deploys focused teams as standalone experts or as a synchronized execution unit.
            </p>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
              <svg className="h-full w-full" viewBox="0 0 1200 620" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="interventionLine" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.08" />
                    <stop offset="50%" stopColor="#FF6B35" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#0284C7" stopOpacity="0.14" />
                  </linearGradient>
                </defs>
                <line x1="600" y1="310" x2="210" y2="145" stroke="url(#interventionLine)" strokeWidth="2" />
                <line x1="600" y1="310" x2="990" y2="145" stroke="url(#interventionLine)" strokeWidth="2" />
                <line x1="600" y1="310" x2="210" y2="475" stroke="url(#interventionLine)" strokeWidth="2" />
                <line x1="600" y1="310" x2="990" y2="475" stroke="url(#interventionLine)" strokeWidth="2" />
                <circle cx="600" cy="310" r="7" fill="#FF6B35" fillOpacity="0.85" />
              </svg>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2 lg:gap-6">
              <article className="relative overflow-hidden rounded-3xl border border-[#C9D3DD] bg-[#0F2438] p-7 md:col-span-2 md:p-8 lg:col-span-4 lg:col-start-5 lg:row-span-2 lg:p-9">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(255,107,53,0.18),transparent_54%)]" />
                <p className="relative z-10 font-[var(--font-mono)] text-[10px] tracking-[0.18em] text-[#FFBEA6] uppercase">
                  Intervention Core
                </p>
                <h4 className="relative z-10 mt-3 text-[24px] font-semibold leading-tight text-white">
                  One Mission, Four Specialist Tracks
                </h4>
                <p className="relative z-10 mt-4 text-[14px] leading-relaxed text-[#CAD8E7]">
                  Each intervention stream can run independently or combine with others depending on outage window, risk profile, and scope overlap.
                </p>
                <div className="relative z-10 mt-6 grid grid-cols-2 gap-2 text-[11px]">
                  <span className="rounded-md border border-[#3A536A] bg-[#15324D] px-2.5 py-2 text-[#D7E4F0]">Inspection & Repair</span>
                  <span className="rounded-md border border-[#3A536A] bg-[#15324D] px-2.5 py-2 text-[#D7E4F0]">Transport & Resetup</span>
                  <span className="rounded-md border border-[#3A536A] bg-[#15324D] px-2.5 py-2 text-[#D7E4F0]">Root-Cause Diagnostics</span>
                  <span className="rounded-md border border-[#3A536A] bg-[#15324D] px-2.5 py-2 text-[#D7E4F0]">Electrical Rehabilitation</span>
                </div>
                <div className="relative z-10 mt-6 rounded-xl border border-[#355169] bg-[#112B43] p-4">
                  <p className="font-[var(--font-mono)] text-[10px] tracking-[0.18em] text-[#9AB6D1] uppercase">Execution Logic</p>
                  <p className="mt-1 text-[13px] text-[#D7E4F0]">Assess / Stabilize / Execute / Re-Commission</p>
                </div>
              </article>

              {secondaryServices.map((svc) => {
                const Icon = svc.icon;
                const dark = svc.tone === "dark";

                return (
                  <article
                    key={svc.id}
                    className={`relative overflow-hidden rounded-2xl border p-6 md:p-7 lg:p-8 ${svc.layout} ${
                      dark ? "border-[#2B4258] bg-[#15324D]" : "border-[#D7DEE6] bg-white"
                    }`}
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-80">
                      <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl ${dark ? "bg-[#FF6B35]/18" : "bg-[#FF6B35]/12"}`} />
                    </div>
                    <div className={`relative mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border ${
                      dark ? "border-[#3B5770] bg-[#1B3A57]" : "border-[#FFD9CB] bg-[#FFF2EC]"
                    }`}>
                      <Icon className="h-5 w-5 text-[#FF6B35]" />
                    </div>
                    <p className={`font-[var(--font-mono)] text-[10px] tracking-[0.18em] uppercase ${dark ? "text-[#FFBEA6]" : "text-[#7B8B9D]"}`}>
                      {svc.lane}
                    </p>
                    <h5 className={`mt-2 text-[20px] font-semibold leading-tight ${dark ? "text-white" : "text-[#1A2A3A]"}`}>
                      {svc.title}
                    </h5>
                    <p className={`mt-3 text-[14px] leading-relaxed ${dark ? "text-[#C4D5E5]" : "text-[#5A6B7D]"}`}>
                      {svc.desc}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
