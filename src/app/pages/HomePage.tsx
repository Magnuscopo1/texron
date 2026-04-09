import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowRight, Phone, CheckCircle, Award, Cog, Sliders, Zap, ShieldAlert, Activity, Settings, RefreshCw, BarChart, HardDrive, MapPin, Mail, type LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import { SEO } from "../seo/SEO";
import { Button } from "../components/ui/button";
import { FluidGallery } from "../components/ui/fluid-gallery";
import { CubeCarousel } from "../components/ui/cube-carousel";

// Actual workspace assets
import heroImage from "../../../imageAssets/IMG_20210124_125451.jpg.jpeg";
import aboutImage from "../../../imageAssets/IMG-20211124-WA0018.jpg.jpeg";
import fieldImage1 from "../../../imageAssets/IMG-20211124-WA0037.jpg.jpeg";
import fieldImage2 from "../../../imageAssets/IMG20220916151959.jpg.jpeg";
import fieldImage3 from "../../../imageAssets/IMG20230518121818.jpg.jpeg";
import fieldImage4 from "../../../imageAssets/IMG-20211116-WA0030(1).jpg.jpeg";
import fieldImage5 from "../../../imageAssets/IMG20230614152939.jpg.jpeg";
import fieldImage6 from "../../../imageAssets/Blade carriers dismantling1.jpg.jpeg";
import fieldImage7 from "../../../imageAssets/IMG20241017105406.jpg.jpeg";
import fieldImage8 from "../../../imageAssets/IMG-20191105-WA0041.jpg.jpeg";
import fieldImage9 from "../../../imageAssets/IMG-20191105-WA0055.jpg.jpeg";
import fieldImage10 from "../../../imageAssets/IMG-20191105-WA0059.jpg.jpeg";
import fieldImage11 from "../../../imageAssets/IMG-20211116-WA0032(2).jpg.jpeg";
import fieldImage12 from "../../../imageAssets/IMG-20211116-WA0046(2).jpg.jpeg";
import fieldImage13 from "../../../imageAssets/IMG20230518115721.jpg.jpeg";
import fieldImage14 from "../../../imageAssets/IMG20240902200100.jpg.jpeg";
import fieldImage15 from "../../../imageAssets/IMG20241020161353.jpg.jpeg";
import fieldImage16 from "../../../imageAssets/IMG_20211202_154409.jpg.jpeg";
import fieldImage17 from "../../../imageAssets/IMG20230518182609.jpg.jpeg";
import serviceHubImage from "../../../imageAssets/IMG-20250910-WA0071.jpg.jpeg";

const homeFieldSnapshots = [
  { src: fieldImage1, alt: "Texron team commissioning turbine systems at site", category: "Commissioning", span: "wide" as const },
  { src: fieldImage2, alt: "Generator and auxiliary inspection on active project", category: "Field Inspection", span: "normal" as const },
  { src: fieldImage3, alt: "Control and protection integration at plant floor", category: "Retrofit Work", span: "tall" as const },
  { src: fieldImage4, alt: "Turbine installation and alignment", category: "Installation", span: "wide" as const },
  { src: fieldImage5, alt: "Comprehensive system diagnostics in progress", category: "Diagnostics", span: "normal" as const },
  { src: fieldImage6, alt: "Heavy machinery and blade carrier dismantling", category: "Maintenance", span: "tall" as const },
  { src: fieldImage7, alt: "Turbine rotor engineering adjustments", category: "Engineering", span: "wide" as const },
  { src: fieldImage8, alt: "On-site safety and operational briefing", category: "Safety", span: "normal" as const },
  { src: fieldImage9, alt: "Precision component machining", category: "Machining", span: "wide" as const },
  { src: fieldImage10, alt: "Final stage assembling checks", category: "Assembly", span: "tall" as const },
  { src: fieldImage11, alt: "Heavy equipment handling", category: "Handling", span: "wide" as const },
  { src: fieldImage12, alt: "Site review overhauling", category: "Overhauling", span: "normal" as const },
  { src: fieldImage13, alt: "Turbine structural validation", category: "Validation", span: "tall" as const },
  { src: fieldImage14, alt: "Site final handoff", category: "Operation", span: "wide" as const },
  { src: fieldImage15, alt: "Turbine systems tuning", category: "Tuning", span: "normal" as const },
  { src: fieldImage16, alt: "Core equipment calibration", category: "Calibration", span: "tall" as const },
  { src: fieldImage17, alt: "Synchronized load evaluation", category: "Testing", span: "wide" as const },
];

type ServiceHubItem = {
  id: string;
  title: string;
  summary: string;
  hotspot: {
    top: string;
    left: string;
    size: string;
  };
};

const serviceHubItems: ServiceHubItem[] = [
  {
    id: "overhauling",
    title: "Turbine Overhauling & Refurbishment",
    summary: "Rotor, blade-path, and bearing-zone restoration with strict tolerance checks.",
    hotspot: { top: "58%", left: "31%", size: "128px" },
  },
  {
    id: "commissioning",
    title: "Erection & Commissioning",
    summary: "Cold checks to synchronized load trials for reliable startup handover.",
    hotspot: { top: "36%", left: "22%", size: "118px" },
  },
  {
    id: "vibration",
    title: "Vibration Analysis & Diagnostics",
    summary: "Spectrum-led root-cause analysis for imbalance, misalignment, and wear.",
    hotspot: { top: "48%", left: "48%", size: "136px" },
  },
  {
    id: "rla",
    title: "RLA (Remaining Life Assessment) for Generators",
    summary: "Insulation, core, and winding-health evaluation to quantify life extension.",
    hotspot: { top: "42%", left: "64%", size: "146px" },
  },
  {
    id: "ltsa",
    title: "Long-Term Service Agreements",
    summary: "Predictive maintenance cadence with rapid escalation support.",
    hotspot: { top: "70%", left: "68%", size: "122px" },
  },
  {
    id: "gearbox",
    title: "Gear Box Re-Engineering & Retrofit",
    summary: "Re-machining and redesign support for changing process duty.",
    hotspot: { top: "66%", left: "46%", size: "120px" },
  },
  {
    id: "relocation",
    title: "Turbogenerator (TG Set) Relocation",
    summary: "Disassembly-to-recommission workflow for safe, accurate moves.",
    hotspot: { top: "30%", left: "76%", size: "112px" },
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting & Emergency Support",
    summary: "Fast fault isolation for trips, thermal drift, and unstable operation.",
    hotspot: { top: "24%", left: "52%", size: "108px" },
  },
];

type TrustPillar = {
  id: string;
  icon: LucideIcon;
  kicker: string;
  title: string;
  description: string;
};

const trustFacts = [
  "3 MW to 150 MW execution footprint",
  "Commercial clarity before execution",
  "Lifecycle commitment through LTSA",
];

const trustPillars: TrustPillar[] = [
  {
    id: "experience",
    icon: Award,
    kicker: "Field-Proven Delivery",
    title: "Real Experience. Real Results.",
    description:
      "Our founders have personally led installation, commissioning, and maintenance programs from 3 MW captive units to 150 MW utility blocks across India.",
  },
  {
    id: "transparency",
    icon: ShieldAlert,
    kicker: "Engineering Integrity",
    title: "Built on Transparency",
    description:
      "You get a precise fault diagnosis and a clear commercial scope. No inflated replacements. No hidden cost creep midway through execution.",
  },
  {
    id: "partner",
    icon: RefreshCw,
    kicker: "Lifecycle Partnership",
    title: "Your Partner, Not Just a Vendor",
    description:
      "From commissioning to Long-Term Service Agreements, we stay accountable across the operating life of your turbine assets.",
  },
];

const heroSignalNodes = [
  { top: "14%", left: "10%", size: 7, delay: 0.2 },
  { top: "24%", left: "26%", size: 6, delay: 0.9 },
  { top: "17%", left: "72%", size: 7, delay: 0.5 },
  { top: "34%", left: "84%", size: 6, delay: 1.3 },
  { top: "68%", left: "14%", size: 8, delay: 0.4 },
  { top: "76%", left: "62%", size: 7, delay: 1.1 },
  { top: "58%", left: "88%", size: 6, delay: 0.7 },
];

export function HomePage() {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState<string>("rla");
  const activeHubService = serviceHubItems.find((item) => item.id === activeService) ?? serviceHubItems[3];

  return (
    <div>
      <SEO 
        title="Texron Power - Turbine Manufacturer & Power Plant Services | Bengaluru" 
        description="Texron Power provides world-class steam turbine manufacturing, turbine retrofit, overhauling, and power plant services across India. ISO 9001:2015 certified. Get a quote today." 
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-12 md:py-16 lg:py-20 bg-[radial-gradient(150%_120%_at_0%_0%,#31577F_0%,#1E3A5F_34%,#13273E_70%,#0B1827_100%)]">
        <div className="pointer-events-none absolute inset-0 opacity-24 [background-image:linear-gradient(rgba(150,178,205,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(150,178,205,0.2)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="pointer-events-none absolute inset-0 opacity-28 [background-image:repeating-linear-gradient(158deg,rgba(2,132,199,0.18)_0px,rgba(2,132,199,0.18)_1px,transparent_1px,transparent_20px)]" />

        <motion.div
          className="pointer-events-none absolute -right-[210px] -top-[220px] h-[640px] w-[640px] rounded-full border border-[#0284C7]/24"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 75, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="pointer-events-none absolute -right-[170px] -top-[180px] h-[560px] w-[560px] rounded-full border border-dashed border-[#FF6B35]/26"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 68, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="pointer-events-none absolute -left-[180px] bottom-[-240px] h-[520px] w-[520px] rounded-full border border-[#0284C7]/18"
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 70, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,107,53,0.18),rgba(2,132,199,0.18),transparent)] blur-2xl"
          animate={{ x: ["-20%", "220%"] }}
          transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="pointer-events-none absolute inset-x-[-20%] bottom-[18%] h-px bg-gradient-to-r from-transparent via-[#0284C7]/65 to-transparent"
          animate={{ x: ["-10%", "8%", "-10%"] }}
          transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {heroSignalNodes.map((node, index) => (
          <motion.span
            key={`${node.top}-${node.left}`}
            className="pointer-events-none absolute rounded-full bg-[#FF6B35]/85"
            style={{
              top: node.top,
              left: node.left,
              width: node.size,
              height: node.size,
              boxShadow: "0 0 20px rgba(255,107,53,0.45)",
            }}
            animate={{ scale: [1, 1.9, 1], opacity: [0.35, 0.95, 0.35] }}
            transition={{
              duration: 3.8,
              delay: node.delay + index * 0.08,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="site-shell relative z-10 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center text-center md:text-left">
          {/* Left Column Text */}
          <div className="max-w-2xl mx-auto md:mx-0">
            <h1 className="text-[34px] sm:text-[40px] md:text-[52px] font-bold leading-[1.04] tracking-[-0.01em] mb-3 md:mb-4 text-white mt-0">
              <span className="inline-grid gap-y-0 [grid-auto-rows:min-content] align-top">
                <span className="block">Powering India's Industries <span className="text-white/75">-</span></span>
                <span className="block">One <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-accent">Turbine</span> at a Time</span>
              </span>
            </h1>
            <p className="text-white/85 text-[18px] leading-8 md:leading-8 max-w-[58ch] mb-3 md:mb-4">
              <span className="font-medium text-salience-trust">Expert turbine solutions</span> for thermal, hydro, and industrial power plants - built on decades of hands-on experience.
            </p>
            <p className="text-white/75 text-[15px] md:text-[16px] leading-7 md:leading-8 max-w-[62ch] mb-6 md:mb-7">
              At Texron Power, we don't just manufacture turbines and control systems - we become long-term partners for your plant's <span className="text-warning font-medium text-salience-alert">reliability</span>. From new installations to complex retrofits, our team of seasoned engineers is here to keep your turbines running at <span className="font-medium text-salience-success">peak performance</span>.       
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8 md:mb-10 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-sm text-[13px] text-white/90">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" /> ISO 9001:2015 Certified
              </div>
              <div className="flex items-center gap-2 text-sm text-[13px] text-white/90">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" /> 30+ Years Combined Experience
              </div>
              <div className="flex items-center gap-2 text-sm text-[13px] text-white/90">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" /> 60+ Commissioned Projects
              </div>
            </div>
            <div className="flex flex-wrap gap-3.5 justify-center md:justify-start">
              <Button
                onClick={() => navigate("/contact")}
                className="h-11 px-5"
              >
                <Phone className="h-4 w-4" />
                <span className="text-[14px]">Get a Quote Today</span>
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/products")}
                className="h-11 border-white/50 bg-transparent px-5 text-white shadow-[4px_4px_0_0_rgba(7,14,28,0.45)] hover:-translate-y-0.5 hover:bg-white/10 hover:text-white hover:shadow-[6px_6px_0_0_rgba(7,14,28,0.55)] active:translate-y-0 active:shadow-[2px_2px_0_0_rgba(7,14,28,0.55)]"
              >
                <span className="text-[14px]">Explore Our Solutions</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Right Column Image */}
          <div className="rounded-2xl overflow-hidden border border-white/15 shadow-[0_30px_70px_rgba(3,10,24,0.58)] h-[340px] sm:h-[380px] md:h-[440px] w-full mt-6 md:mt-0 relative group">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,24,38,0.56)_0%,rgba(10,24,38,0.14)_55%,rgba(255,107,53,0.24)_100%)] z-10" />
              <motion.div
                className="absolute inset-y-0 -left-1/3 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] z-20"
                animate={{ x: ["-20%", "230%"] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <img 
                src={heroImage}
                alt="Texron turbine systems workshop operations"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 z-20 bg-[#11253A]/80 border border-[#3D5872] backdrop-blur-sm text-[#D9E7F3] text-[10px] font-[var(--font-mono)] uppercase tracking-[0.14em] px-3 py-1.5 rounded-md">
                Live Engineering Floor
              </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="site-shell grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
              About Texron
            </h2>
            <h3 className="text-[#1E3A5F] text-[28px] md:text-[34px] font-semibold mb-4 leading-tight">
              Solving tough turbine problems with smart, cost-effective solutions
            </h3>
            <p className="text-[#5A6B7D] text-[15px] mb-4 leading-relaxed">
              We're a passionate team of engineers based out of Peenya Industrial Area, Bengaluru - the heart of India's industrial corridor. With a collective experience spanning several decades in turbo machinery, we've built a reputation for solving tough turbine problems.
            </p>
            <p className="text-[#5A6B7D] text-[15px] mb-8 leading-relaxed">
              Whether you're running a 3 MW captive power unit or managing a 150 MW utility plant, we've got the expertise and the track record to back it up.
            </p>
            
            <h4 className="text-[#1E3A5F] font-semibold text-[18px] mb-4">Why Plant Managers Trust Texron</h4>
            <ul className="space-y-3">
              {[
                "Condition-based repair approach - we fix what actually needs fixing, not everything on the shelf",
                "Transparent pricing with no surprises mid-project",
                "End-to-end support: from design engineering to commissioning to long-term maintenance",
                "Custom hydraulic and control system design in-house",
                "Responsive team - we understand that turbine downtime costs you money every hour",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start text-[#5A6B7D] text-[14px]">
                  <CheckCircle className="w-5 h-5 text-[#FF6B35] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl border border-[#E8EAED] relative group">
             <div className="aspect-[4/3] bg-muted relative">
                <img 
                  src={aboutImage}
                  alt="Texron Engineering team inspecting a large steam turbine rotor in a power plant"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur font-[var(--font-mono)] text-[10px] uppercase text-[#1E3A5F] px-3 py-1.5 rounded shadow-sm">
                  Field Operations
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Products & Solutions */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="site-shell">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
              Our Products
            </h2>
            <h3 className="text-[#1E3A5F] text-[28px] md:text-[32px] font-semibold mb-4">
              Comprehensive Range of Turbine Equipment
            </h3>
            <p className="text-[#5A6B7D] text-[15px]">
              We manufacture, supply, and retrofit top-tier equipment customized to your process requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Steam Turbines",
                desc: "Custom-engineered steam turbines for industrial and utility applications. New units and refurbished turbines.",
                icon: Cog,
              },
              {
                title: "Retrofit & Modernization",
                desc: "Electronic governors, turbine protection systems, and control upgrades. Improve reliability without full replacement costs.",
                icon: Settings,
              },
              {
                title: "Excitation & Generator Protection",
                desc: "Advanced excitation systems and generator protection relays designed for seamless integration.",
                icon: Zap,
              },
              {
                title: "Hydraulic Power Packs",
                desc: "Precision-engineered hydraulic systems for turbine governors - custom-designed for each application.",
                icon: Sliders,
              },
              {
                title: "Power Management & Control",
                desc: "Intelligent power management systems and HT/LT control panels designed and built in-house.",
                icon: HardDrive,
              },
              {
                title: "Vibration Monitoring Systems",
                desc: "Real-time vibration monitoring to catch problems before they become critical shutdowns.",
                icon: Activity,
              },
            ].map((prod) => (
              <div key={prod.title} className="bg-white p-6 rounded-xl border border-[#E8EAED] hover:shadow-lg transition-shadow">
                <prod.icon className="w-8 h-8 text-[#FF6B35] mb-4" />
                <h4 className="text-[#1E3A5F] font-semibold text-[18px] mb-2">{prod.title}</h4>
                <p className="text-[#5A6B7D] text-[14px]">{prod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Hub Section */}
      <section className="service-hub relative overflow-hidden border-y border-[#24374A] bg-[#0C1A2A] py-16 md:py-20">
        <div className="service-hub-stream service-hub-stream-a" aria-hidden="true" />
        <div className="service-hub-stream service-hub-stream-b" aria-hidden="true" />
        <div className="service-hub-stream service-hub-stream-c" aria-hidden="true" />
        <div className="service-hub-wave service-hub-wave-a" aria-hidden="true" />
        <div className="service-hub-wave service-hub-wave-b" aria-hidden="true" />

        <div className="site-shell relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
              Our Services
            </h2>
            <h3 className="text-white text-[28px] md:text-[34px] font-semibold mb-4">
              Service Hub with Technical Interactivity
            </h3>
            <p className="text-[#B7C6D5] text-[15px] md:text-[16px] mx-auto">
              Hover a service node to inspect the matching turbine zone. RLA highlights the generator core region to mirror our machine-level diagnostic depth.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-stretch">
            <div className="xl:col-span-5">
              <div className="rounded-2xl border border-[#2F475E] bg-[#102338]/90 p-3 md:p-4 xl:h-[560px]">
                <div className="service-hub-list-scroll max-h-[430px] md:max-h-[520px] xl:h-full xl:max-h-none space-y-2 overflow-y-auto pr-1">
                  {serviceHubItems.map((service, index) => {
                    const isActive = activeHubService.id === service.id;

                    return (
                      <button
                        key={service.id}
                        type="button"
                        onMouseEnter={() => setActiveService(service.id)}
                        onFocus={() => setActiveService(service.id)}
                        className={`w-full text-left rounded-xl border px-3.5 py-3 transition-all duration-300 ${isActive
                          ? "border-[#FF6B35]/60 bg-[#1B3046] shadow-[0_0_0_1px_rgba(255,107,53,0.24),0_8px_22px_rgba(255,107,53,0.16)]"
                          : "border-[#2F475E] bg-[#12273B]/80 hover:bg-[#16324C] hover:border-[#3E5D79]"
                          }`}
                        aria-pressed={isActive}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`mt-0.5 h-7 w-7 shrink-0 rounded-md flex items-center justify-center font-[var(--font-mono)] text-[10px] tracking-wider ${isActive
                            ? "bg-[#FF6B35]/20 text-[#FFB79E]"
                            : "bg-[#1F3850] text-[#8FA6BB]"
                            }`}>
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <div>
                            <p className={`text-[13px] md:text-[14px] font-semibold leading-snug ${isActive ? "text-white" : "text-[#D4DFEA]"}`}>
                              {service.title}
                            </p>
                            {isActive && (
                              <p className="mt-1.5 text-[12px] leading-relaxed text-[#CFE2F2]">
                                {service.summary}
                              </p>
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="xl:col-span-7">
              <div className="relative min-h-[420px] md:min-h-[560px] xl:h-[560px] overflow-hidden rounded-2xl border border-[#2F475E] bg-[#102338] shadow-[0_22px_70px_rgba(3,8,18,0.65)]">
                <img
                  src={serviceHubImage}
                  alt="Interactive turbine service hub visualization"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(8,18,30,0.78)_0%,rgba(10,24,38,0.36)_48%,rgba(255,107,53,0.18)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(2,132,199,0.3),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,107,53,0.24),transparent_44%)]" />

                <div
                  className="service-hub-glow"
                  style={{
                    top: activeHubService.hotspot.top,
                    left: activeHubService.hotspot.left,
                    width: activeHubService.hotspot.size,
                    height: activeHubService.hotspot.size,
                  }}
                  aria-hidden="true"
                />

                {serviceHubItems.map((service) => {
                  const isActive = activeHubService.id === service.id;

                  return (
                    <span
                      key={service.id}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300 ${isActive
                        ? "h-4 w-4 border-[#FFD3C2] bg-[#FF6B35] shadow-[0_0_0_8px_rgba(255,107,53,0.25),0_0_30px_rgba(255,107,53,0.55)]"
                        : "h-3 w-3 border-white/50 bg-white/35"
                        }`}
                      style={{ top: service.hotspot.top, left: service.hotspot.left }}
                      aria-hidden="true"
                    />
                  );
                })}

                <div className="absolute inset-x-4 bottom-4 rounded-xl border border-[#3E5D79] bg-[#10243A]/85 p-4 backdrop-blur-sm md:inset-x-6 md:bottom-6 md:p-5">
                  <p className="font-[var(--font-mono)] text-[10px] tracking-[0.18em] text-[#FFAA8A] uppercase">Live Focus Node</p>
                  <p className="mt-1 text-[14px] md:text-[16px] font-semibold text-white">{activeHubService.title}</p>
                  <p className="mt-1 text-[12px] md:text-[13px] text-[#C8D9E8]">{activeHubService.summary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Field Snapshot Section */}
      <section className="py-14 bg-[#F5F5F5] border-y border-[#E8EAED]">
        <div className="site-shell">
          <div className="mb-10 text-center">
            <h3 className="font-[var(--font-heading)] text-[11px] tracking-[0.2em] text-[#FF6B35] uppercase mb-1">Live from the Floor</h3>
            <h4 className="font-[var(--font-heading)] text-[#1A2A3A] text-[24px]">Inside Our Real Projects</h4>
          </div>
          <CubeCarousel
            images={homeFieldSnapshots}
            className="mb-8"
          />
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="relative overflow-hidden border-y border-[#2B4258] bg-[radial-gradient(150%_130%_at_0%_0%,#1A3550_0%,#12273D_36%,#0D1B2C_72%,#0A1624_100%)] py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:repeating-linear-gradient(145deg,rgba(2,132,199,0.16)_0px,rgba(2,132,199,0.16)_1px,transparent_1px,transparent_24px)]" />
        <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_16%_26%,rgba(255,255,255,0.24)_1px,transparent_1px),radial-gradient(circle_at_80%_74%,rgba(255,255,255,0.17)_1px,transparent_1px)] [background-size:16px_16px,22px_22px]" />
        <motion.div
          className="pointer-events-none absolute -left-[220px] -top-[170px] h-[560px] w-[560px] rounded-full border border-[#0284C7]/28"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 55, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="pointer-events-none absolute -left-[180px] -top-[130px] h-[480px] w-[480px] rounded-full border border-dashed border-[#FF6B35]/28"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 65, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="pointer-events-none absolute -right-[210px] -bottom-[190px] h-[600px] w-[600px] rounded-full border border-[#0284C7]/24"
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 58, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,107,53,0.16),transparent)] blur-2xl"
          animate={{ x: ["-25%", "140%"] }}
          transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        <div className="site-shell relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
            <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
              Why Teams Trust Texron
            </h2>
            <h3 className="text-white text-[28px] md:text-[34px] font-semibold mb-4">
              Operational Credibility, Not Marketing Claims
            </h3>
            <p className="text-[#BFD0E0] text-[15px] md:text-[16px] mx-auto">
              Three principles define how we execute in the field, communicate risk, and stay accountable after commissioning.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 md:gap-3 mb-8 md:mb-10">
            {trustFacts.map((fact) => (
              <span
                key={fact}
                className="rounded-full border border-[#3B5770] bg-[#132A40]/85 px-3 py-1.5 text-[11px] md:text-[12px] text-[#D1DEEA]"
              >
                {fact}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {trustPillars.map((pillar, index) => (
              <motion.article
                key={pillar.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-[#334E68] bg-[linear-gradient(160deg,#142B42_0%,#102339_100%)] p-6 md:p-7"
              >
                <div className="pointer-events-none absolute -right-12 -top-16 h-36 w-36 rounded-full bg-[#FF6B35]/12 blur-2xl transition-colors duration-300 group-hover:bg-[#FF6B35]/20" />

                <div className="relative z-10">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#FF6B35]/35 bg-[#FF6B35]/14 mb-4">
                    <pillar.icon className="h-5 w-5 text-[#FF6B35]" />
                  </div>
                  <p className="font-[var(--font-mono)] text-[10px] tracking-[0.16em] text-[#FFAA8A] uppercase mb-2">
                    {pillar.kicker}
                  </p>
                  <h4 className="text-white text-[19px] md:text-[21px] font-semibold mb-3 leading-tight">
                    {pillar.title}
                  </h4>
                  <p className="text-[14px] text-[#C5D4E3] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#1E3A5F] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-4">Got a turbine challenge? Let's talk.</h2>
          <p className="text-white/60 text-[16px] mb-8 max-w-2xl mx-auto">
            Whether you're planning a major retrofit, dealing with a recurring fault, or just want a second opinion on your turbine health - our team is ready to help.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mb-8 text-[14px]">
             <a href="tel:+918904017774" className="flex items-center justify-center gap-2 hover:text-[#FF6B35] transition-colors"><Phone className="w-5 h-5 text-[#FF6B35]" /> +91 89040 17774 / +91 89040 17775</a>
             <a href="mailto:info@texronpower.com" className="flex items-center justify-center gap-2 hover:text-[#FF6B35] transition-colors"><Mail className="w-5 h-5 text-[#FF6B35]" /> info@texronpower.com</a>
             <span className="flex items-center justify-center gap-2"><MapPin className="w-5 h-5 text-[#FF6B35]" /> Peenya Industrial Area, Bengaluru, Karnataka</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+918904017774" className="flex items-center justify-center gap-2 bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-8 py-4 rounded-lg transition-colors font-bold text-[15px]">
              Call Emergency Support
            </a>
            <Link to="/contact" className="flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-[#1E3A5F] px-8 py-4 rounded-lg transition-colors font-bold text-[15px]">
              Contact Us Online <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
