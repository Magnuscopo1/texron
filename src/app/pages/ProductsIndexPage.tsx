import { Cog, Settings, Shield, Zap, Power, HardDrive, Activity, Radio, Cpu, Archive, CheckCircle } from "lucide-react";
import { SEO } from "../seo/SEO";
import { Link } from "react-router";
import { FluidGallery } from "../components/ui/fluid-gallery";

import productsImage1 from "../../../imageAssets/IMG_20211016_123430(1).jpg.jpeg";
import productsImage2 from "../../../imageAssets/IMG20220916174645.jpg.jpeg";
import productsImage3 from "../../../imageAssets/IMG20240905115307.jpg.jpeg";

const productsSnapshots = [
  { src: productsImage1, alt: "Steam turbine mechanical assembly and alignment stage", category: "Turbine Build", span: "wide" as const },
  { src: productsImage2, alt: "Control and protection equipment integration", category: "Controls" },
  { src: productsImage3, alt: "Hydraulic and electrical product validation setup", category: "Testing", span: "tall" as const },
];

export function ProductsIndexPage() {
  return (
    <div>
      <SEO 
        title="Turbine Products & Power Plant Equipment | Texron Power, Bengaluru" 
        description="Texron Power supplies steam turbines, electronic governors, turbine protection systems, excitation systems, hydraulic power packs, vibration monitoring, and more. Explore our full product range." 
      />

      {/* Hero Section */}
      <section className="bg-[#1E3A5F] text-white py-16">
        <div className="site-shell">
          <h1 className="text-[32px] md:text-[44px] font-bold leading-tight mb-4 text-white max-w-4xl">
            Reliable turbine products and power plant equipment.
          </h1>
          <p className="text-white/80 text-[18px] max-w-3xl mb-4 leading-relaxed">
            From steam turbines to smart control systems, we manufacture and supply the complete range of equipment your power plant needs - designed for reliability, engineered for performance.
          </p>
          <p className="text-white/80 text-[18px] max-w-3xl leading-relaxed">
            All our products are designed and built with the flexibility to integrate with your existing plant setup, whether you're running legacy equipment from the 1990s or a modern DCS-controlled facility.
          </p>
        </div>
      </section>

      {/* Product Snapshot Gallery */}
      <section className="py-16 bg-white border-b border-[#E8EAED]">
        <div className="site-shell">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
              Product Program
            </h2>
            <h3 className="text-[#1E3A5F] text-[28px] md:text-[32px] font-semibold mb-4">
              Built for Legacy Fitment and Modern Control
            </h3>
            <p className="text-[#5A6B7D] text-[15px]">
              Visual context of the equipment ecosystem we deliver across turbine, control, and protection domains.
            </p>
          </div>
          <FluidGallery images={productsSnapshots} />
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="site-shell space-y-16">
          
          {/* Steam Turbines */}
          <div className="bg-white rounded-xl shadow-sm border border-[#E8EAED] overflow-hidden">
            <div className="p-8 lg:p-12 border-b border-[#E8EAED]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Cog className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <h2 className="text-[28px] text-[#1E3A5F] font-semibold">Steam Turbines</h2>
              </div>
              <p className="text-[#FF6B35] font-[var(--font-mono)] text-[12px] uppercase mb-4 tracking-[0.1em]">Custom-Engineered for Your Process</p>
              <p className="text-[#5A6B7D] text-[15px] mb-6 leading-relaxed max-w-4xl">
                We design and supply steam turbines for a wide range of industrial applications - from sugar mills and paper plants to utility power stations. Our turbines are engineered to match your specific steam parameters, load requirements, and site conditions.
              </p>
              <h4 className="font-semibold text-[#1A2A3A] text-[14px] mb-3">Key Features</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[14px] text-[#5A6B7D]">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF6B35] shrink-0" /> Custom capacity range from small industrial to utility-scale</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF6B35] shrink-0" /> Back-pressure, condensing, and extraction configurations</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF6B35] shrink-0" /> Integration-ready with electronic governor systems</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF6B35] shrink-0" /> Designed for ease of maintenance and long service</li>
              </ul>
            </div>
          </div>

          {/* Retrofit & Control */}
          <div>
            <h3 className="text-[#1E3A5F] text-[24px] font-semibold mb-6">Retrofit & Modernization Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-white p-8 rounded-xl border border-[#E8EAED] shadow-sm">
                <Settings className="w-8 h-8 text-[#FF6B35] mb-4" />
                <h4 className="text-[#1A2A3A] font-semibold text-[20px] mb-3">Electronic Governor for Steam Turbines</h4>
                <p className="text-[14px] text-[#5A6B7D] mb-4">Replace your old mechanical or analog governor with our state-of-the-art electronic governor system. Better speed control, improved efficiency, and reduced maintenance.</p>
                <ul className="space-y-2 text-[13px] text-[#5A6B7D]">
                  <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-[#1E3A5F]" /> Microprocessor-based speed control with precise regulation</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-[#1E3A5F]" /> Compatible with most makes and models of steam turbines</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-[#1E3A5F]" /> Includes actuator, speed sensors, and control panel</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-[#1E3A5F]" /> Fully commissioned and tested by our team</li>
                </ul>
                <div className="mt-6">
                  <Link to="/bhel-steam-turbine-governor-retrofits" className="text-[#FF6B35] hover:text-[#e55a2a] text-[13px] font-semibold flex items-center gap-1">View BHEL Retrofits</Link>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl border border-[#E8EAED] shadow-sm">
                <Shield className="w-8 h-8 text-[#FF6B35] mb-4" />
                <h4 className="text-[#1A2A3A] font-semibold text-[20px] mb-3">Turbine Protection Systems</h4>
                <p className="text-[14px] text-[#5A6B7D] mb-4">Guard your equipment against overspeed, low lube oil pressure, high vibration, and other critical faults that cause massive damage.</p>
                <ul className="space-y-2 text-[13px] text-[#5A6B7D]">
                  <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-[#1E3A5F]" /> Overspeed trip, axial shift, and differential expansion</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-[#1E3A5F]" /> Configurable trip logic for your specific turbine model</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-[#1E3A5F]" /> Seamless integration with existing DCS/PLC systems</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Generators and Electrical */}
          <div>
            <h3 className="text-[#1E3A5F] text-[24px] font-semibold mb-6">Electrical & Generation Control</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-[#E8EAED]">
                <Zap className="w-6 h-6 text-[#FF6B35] mb-3" />
                <h4 className="text-[#1A2A3A] font-semibold text-[16px] mb-2">Excitation Systems</h4>
                <p className="text-[13px] text-[#5A6B7D] mb-3">Static and brushless excitation systems designed to improve voltage regulation and overall generator stability.</p>
                <ul className="space-y-1 text-[12px] text-[#5A6B7D]">
                  <li>• AVR (Automatic Voltage Regulator)</li>
                  <li>• Suitable for industrial & utility scale</li>
                  <li>• Designed for easy retrofit</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-[#E8EAED]">
                <Shield className="w-6 h-6 text-[#FF6B35] mb-3" />
                <h4 className="text-[#1A2A3A] font-semibold text-[16px] mb-2">Generator Protection Relays</h4>
                <p className="text-[13px] text-[#5A6B7D]">Protect your investment with numerical generator protection relay panels covering differential, overcurrent, earth fault, loss of excitation, and reverse power.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-[#E8EAED]">
                <HardDrive className="w-6 h-6 text-[#FF6B35] mb-3" />
                <h4 className="text-[#1A2A3A] font-semibold text-[16px] mb-2">Power Management Systems</h4>
                <p className="text-[13px] text-[#5A6B7D]">Centralized monitoring, control, and optimization of your entire power island for plants with multiple generating units or complex load-sharing needs.</p>
              </div>
            </div>
          </div>

          {/* Additional Systems */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
             {[
               { icon: Power, title: "Hydraulic Power Packs", desc: "Custom-engineered hydraulic systems acting as the heart of your turbine governor system with built-in sensors and filters." },
               { icon: Settings, title: "Hydro Governor Retrofit", desc: "Digital governor retrofits for Kaplan, Francis, and Pelton hydro turbines." },
               { icon: Cpu, title: "Power & Control Panels", desc: "HT/LT switchgear, MCCs, and PLC automation panels manufactured in-house." },
               { icon: Activity, title: "Vibration Monitoring", desc: "Continuous online vibration surveillance of rotating machinery to catch imbalances." },
               { icon: Radio, title: "Field Instruments", desc: "Temperature sensors, pressure transmitters, flow meters, speed sensors calibrated for your plant." },
               { icon: Archive, title: "Servomotor & Converters", desc: "High-performance servomotors and IH converters for valve positioning." },
               { icon: Settings, title: "Spare Parts Management", desc: "Curated inventory of critical OEM spares so you're never caught waiting in an emergency." },
             ].map(item => (
                <div key={item.title} className="bg-white p-5 rounded-lg shadow-sm border border-[#E8EAED]">
                  <item.icon className="w-5 h-5 text-[#1E3A5F] mb-3" />
                  <h4 className="text-[#1A2A3A] font-semibold text-[14px] mb-2">{item.title}</h4>
                  <p className="text-[#5A6B7D] text-[12px] leading-relaxed">{item.desc}</p>
                </div>
             ))}
          </div>

        </div>
      </section>

    </div>
  );
}
