import { Link } from "react-router";
import { ArrowRight, Phone, CheckCircle, Award, Cog, Sliders, Zap, ShieldAlert, Activity, Settings, RefreshCw, BarChart, HardDrive, MapPin, Mail } from "lucide-react";
import { SEO } from "../seo/SEO";
import { PhotoPlaceholder } from "../components/PhotoPlaceholder";

export function HomePage() {
  return (
    <div>
      <SEO 
        title="Texron Power — Turbine Manufacturer & Power Plant Services | Bengaluru" 
        description="Texron Power provides world-class steam turbine manufacturing, turbine retrofit, overhauling, and power plant services across India. ISO 9001:2015 certified. Get a quote today." 
      />

      {/* Hero Section */}
      <section className="bg-[#1E3A5F] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">
          {/* Left Column Text */}
          <div>
            <h1 className="text-[32px] md:text-[48px] font-bold leading-tight mb-4 text-white">
              Powering India's Industries — <br className="hidden md:block" /> One Turbine at a Time
            </h1>
            <p className="text-white/80 text-[18px] max-w-2xl mb-6">
              Expert turbine solutions for thermal, hydro, and industrial power plants — built on decades of hands-on experience.
            </p>
            <p className="text-white/60 text-[15px] max-w-3xl mb-8">
              At Texron Power, we don't just manufacture turbines and control systems — we become long-term partners for your plant's reliability. From new installations to complex retrofits, our team of seasoned engineers is here to keep your turbines running at peak performance.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-8 justify-center md:justify-start">
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
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Link to="/contact" className="flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-6 py-3 rounded-lg transition-colors font-semibold">
                <Phone className="w-4 h-4" />
                <span className="text-[14px]">Get a Quote Today</span>
              </Link>
              <Link to="/products" className="flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg transition-colors">
                <span className="text-[14px]">Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          {/* Right Column Image */}
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl h-[400px] w-full mt-8 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1542301046-2d1bcab15b49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwb3dlciUyMHBsYW50fGVufDB8fHx8MTcxMjk4MTIyMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Majestic industrial power plant generating station at dawn"
                className="w-full h-full object-cover"
              />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
              About Texron
            </h2>
            <h3 className="text-[#1E3A5F] text-[28px] md:text-[34px] font-semibold mb-4 leading-tight">
              Solving tough turbine problems with smart, cost-effective solutions
            </h3>
            <p className="text-[#5A6B7D] text-[15px] mb-4 leading-relaxed">
              We're a passionate team of engineers based out of Peenya Industrial Area, Bengaluru — the heart of India's industrial corridor. With a collective experience spanning several decades in turbo machinery, we've built a reputation for solving tough turbine problems.
            </p>
            <p className="text-[#5A6B7D] text-[15px] mb-8 leading-relaxed">
              Whether you're running a 3 MW captive power unit or managing a 150 MW utility plant, we've got the expertise and the track record to back it up.
            </p>
            
            <h4 className="text-[#1E3A5F] font-semibold text-[18px] mb-4">Why Plant Managers Trust Texron</h4>
            <ul className="space-y-3">
              {[
                "Condition-based repair approach — we fix what actually needs fixing, not everything on the shelf",
                "Transparent pricing with no surprises mid-project",
                "End-to-end support: from design engineering to commissioning to long-term maintenance",
                "Custom hydraulic and control system design in-house",
                "Responsive team — we understand that turbine downtime costs you money every hour",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start text-[#5A6B7D] text-[14px]">
                  <CheckCircle className="w-5 h-5 text-[#FF6B35] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl border border-[#E8EAED]">
             <PhotoPlaceholder 
                directive="Engineering team inspecting a large steam turbine rotor in a power plant." 
                fallbackImage="https://images.unsplash.com/photo-1581092334651-4f7eb65cead0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxlbmdpbmVlcmluZ3xlbnwwfHx8fDE3MTI5ODAyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080" 
              />
          </div>
        </div>
      </section>

      {/* Products & Solutions */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4">
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
                desc: "Precision-engineered hydraulic systems for turbine governors — custom-designed for each application.",
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

      {/* Services Overview Section */}
      <section className="py-16 bg-white border-t border-[#E8EAED]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
            Our Services
          </h2>
          <h3 className="text-[#1E3A5F] text-[28px] md:text-[32px] font-semibold mb-8">
            Far Beyond a One-Time Fix
          </h3>
          <p className="max-w-3xl mx-auto text-[#5A6B7D] text-[15px] mb-12">
            We're in this for the long run with you. Explore our end-to-end turbine services.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            {[
              "Turbine overhauling & refurbishment",
              "Erection & commissioning",
              "Vibration analysis & diagnostics",
              "RLA (Remaining Life Assessment) for generators",
              "Long-term service agreements",
              "Gear box re-engineering and retrofit",
              "Turbogenerator (TG Set) relocation",
              "Troubleshooting & emergency support"
            ].map((service, i) => (
               <div key={i} className="flex items-center gap-3 p-4 bg-[#F5F5F5]/50 border border-[#E8EAED] rounded-lg hover:bg-blue-50/50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-[#1E3A5F]/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-3 h-3 text-[#1E3A5F]" />
                  </div>
                  <span className="text-[#1E3A5F] text-[13px] font-medium">{service}</span>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl border border-[#E8EAED] text-center">
            <Award className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
            <h4 className="text-[#1E3A5F] text-[18px] font-semibold mb-3">Real Experience. Real Results.</h4>
            <p className="text-[14px] text-[#5A6B7D] leading-relaxed">
              Our founders — personally worked on installation, commissioning, and maintenance from 3 MW to 150 MW across India. That's hands-on expertise in the field.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-[#E8EAED] text-center">
            <ShieldAlert className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
            <h4 className="text-[#1E3A5F] text-[18px] font-semibold mb-3">Built on Transparency</h4>
            <p className="text-[14px] text-[#5A6B7D] leading-relaxed">
              We tell you what's actually wrong and what it'll actually cost. No inflated estimates, no unnecessary replacements. Just honest engineering.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-[#E8EAED] text-center">
            <RefreshCw className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
            <h4 className="text-[#1E3A5F] text-[18px] font-semibold mb-3">Your Partner, Not Just a Vendor</h4>
            <p className="text-[14px] text-[#5A6B7D] leading-relaxed">
              We offer Long-Term Service Agreements. We want to be there for the entire lifecycle of your equipment — not just for the commissioning photo.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#1E3A5F] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-4">Got a turbine challenge? Let's talk.</h2>
          <p className="text-white/60 text-[16px] mb-8 max-w-2xl mx-auto">
            Whether you're planning a major retrofit, dealing with a recurring fault, or just want a second opinion on your turbine health — our team is ready to help.
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
