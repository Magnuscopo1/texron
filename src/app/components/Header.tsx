import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Phone, Menu, X, MessageCircle, ChevronDown, Zap, Shield, Settings, Wrench, Cpu, Gauge, Radio, AlertTriangle, BarChart3, Box } from "lucide-react";

const productCategories = [
  {
    label: "Turbine Control",
    items: [
      { name: "Electronic Governor (DTG-3000)", slug: "electronic-governor", icon: Cpu },
      { name: "Electro-Hydraulic Governor (EHG-2000)", slug: "electro-hydraulic-governor", icon: Settings },
      { name: "Turbine Control Panel (TCP-500)", slug: "turbine-control-panel", icon: BarChart3 },
      { name: "PLC-Based Control Systems", slug: "plc-control-systems", icon: Cpu },
      { name: "Load Sharing Systems", slug: "load-sharing-systems", icon: Gauge },
    ],
  },
  {
    label: "Electrical & Protection",
    items: [
      { name: "Numerical Protection Relay (NPR-21)", slug: "protection-relay", icon: Shield },
      { name: "Annunciator Systems", slug: "annunciator-systems", icon: AlertTriangle },
      { name: "Speed Sensor Module (SSM-100)", slug: "speed-sensor-module", icon: Radio },
      { name: "Emergency Trip Systems", slug: "emergency-trip-systems", icon: Zap },
    ],
  },
  {
    label: "Mechanical & Hydraulic",
    items: [
      { name: "Hydraulic Actuator Retrofit (HA-500)", slug: "hydraulic-actuator", icon: Wrench },
      { name: "Servo Valve Assembly", slug: "servo-valve-assembly", icon: Box },
      { name: "Oil Distribution Block", slug: "oil-distribution-block", icon: Box },
      { name: "Position Feedback Transmitter", slug: "position-feedback-transmitter", icon: Radio },
    ],
  },
];

const serviceItems = [
  { name: "Governor Retrofits & Upgrades", slug: "/services#retrofits" },
  { name: "RLA & Condition Assessment", slug: "/rla-studies-thermal-power-plants-bangalore" },
  { name: "Overhauling & Refurbishment", slug: "/services#overhauling" },
  { name: "LTSA & AMC Services", slug: "/services#ltsa" },
  { name: "Commissioning & Testing", slug: "/services#commissioning" },
];

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products", hasDropdown: "products" },
  { label: "Services", path: "/services", hasDropdown: "services" },
  { label: "Capabilities", path: "/capabilities" },
  { label: "Customers", path: "/customers" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="bg-[#1A2A3A] text-white sticky top-0 z-50">
      {/* Emergency Strip */}
      <div className="bg-[#FF6B35] text-white py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse hidden sm:block" />
            <span className="font-[var(--font-mono)] text-[10px] sm:text-[11px] tracking-wide">
              24/7 EMERGENCY LINE:
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+918904017774" className="flex items-center gap-1 font-[var(--font-mono)] text-[11px] hover:underline">
              <Phone className="w-3 h-3" /> +91 89040 17774
            </a>
            <span className="text-white/40 hidden sm:inline">|</span>
            <a href="tel:+918904017775" className="hidden sm:flex items-center gap-1 font-[var(--font-mono)] text-[11px] hover:underline">
              +91 89040 17775
            </a>
            <a href="https://wa.me/918904017774" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-1 text-[11px] hover:underline">
              <MessageCircle className="w-3 h-3" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4" ref={dropdownRef}>
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-[#FF6B35] rounded flex items-center justify-center">
              <span className="font-[var(--font-mono)] text-white text-[14px]">TX</span>
            </div>
            <div>
              <div className="font-[var(--font-heading)] text-[17px] tracking-wider">TEXRON</div>
              <div className="text-[9px] text-white/50 tracking-[0.2em] uppercase">Power Plant Systems</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path));
              return (
                <div key={item.label} className="relative">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.hasDropdown ? null : item.hasDropdown!)}
                      className={`flex items-center gap-1 px-3 py-2 rounded text-[13px] transition-colors ${
                        isActive ? "bg-white/15 text-white" : "text-white/70 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === item.hasDropdown ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-3 py-2 rounded text-[13px] transition-colors block ${
                        isActive ? "bg-white/15 text-white" : "text-white/70 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          <a href="tel:+918904017774" className="hidden lg:flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-4 py-2 rounded transition-colors shrink-0">
            <Phone className="w-4 h-4" />
            <span className="text-[12px]">Emergency</span>
          </a>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white p-2">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Products Mega-Dropdown */}
        {openDropdown === "products" && (
          <div className="hidden lg:block absolute left-0 right-0 bg-white text-[#1A2A3A] shadow-2xl border-t-2 border-[#FF6B35] z-50">
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="grid grid-cols-3 gap-8">
                {productCategories.map((cat) => (
                  <div key={cat.label}>
                    <h4 className="font-[var(--font-heading)] text-[14px] text-[#FF6B35] tracking-wider uppercase mb-3">{cat.label}</h4>
                    <div className="space-y-1">
                      {cat.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.slug}
                            to={`/products/${item.slug}`}
                            className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[#F3F4F6] transition-colors group"
                          >
                            <Icon className="w-4 h-4 text-[#6B7280] group-hover:text-[#FF6B35] transition-colors shrink-0" />
                            <span className="text-[13px] text-[#1A2A3A] group-hover:text-[#FF6B35] transition-colors">{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                <Link to="/products" className="text-[13px] text-[#FF6B35] hover:text-[#e55a2a] font-[var(--font-heading)] tracking-wider">
                  VIEW ALL 13 PRODUCTS â†’
                </Link>
                <Link to="/specs" className="text-[12px] text-[#6B7280] hover:text-[#1A2A3A]">
                  Spec Sheets & Compatibility Matrix
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Services Dropdown */}
        {openDropdown === "services" && (
          <div className="hidden lg:block absolute left-0 right-0 bg-white text-[#1A2A3A] shadow-2xl border-t-2 border-[#FF6B35] z-50">
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-[var(--font-heading)] text-[14px] text-[#FF6B35] tracking-wider uppercase mb-3">Field Services</h4>
                  <div className="space-y-1">
                    {serviceItems.map((item) => (
                      <Link key={item.name} to={item.slug} className="block p-2.5 rounded-lg hover:bg-[#F3F4F6] text-[13px] text-[#1A2A3A] hover:text-[#FF6B35] transition-colors">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="bg-[#F3F4F6] rounded-xl p-5">
                  <h4 className="font-[var(--font-heading)] text-[14px] text-[#1A2A3A] mb-2">Methodology</h4>
                  <p className="text-[12px] text-[#6B7280] mb-3">Download our Condition-Based Repair Criteria â€” the framework behind every intervention.</p>
                  <Link to="/services" className="text-[12px] text-[#FF6B35] hover:text-[#e55a2a] font-[var(--font-heading)] tracking-wider">
                    VIEW SERVICES & METHODOLOGY â†’
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#162534] border-t border-white/10 pb-4 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.hasDropdown ? (
                <>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.hasDropdown ? null : item.hasDropdown!)}
                    className="w-full flex items-center justify-between px-6 py-3 text-[14px] text-white/70"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.hasDropdown ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === item.hasDropdown && item.hasDropdown === "products" && (
                    <div className="bg-[#0f1c28] px-6 py-3">
                      {productCategories.map((cat) => (
                        <div key={cat.label} className="mb-3">
                          <p className="text-[10px] text-[#FF6B35] font-[var(--font-mono)] tracking-wider mb-1">{cat.label.toUpperCase()}</p>
                          {cat.items.map((p) => (
                            <Link key={p.slug} to={`/products/${p.slug}`} onClick={() => setMobileOpen(false)} className="block py-1.5 text-[12px] text-white/50 hover:text-white">
                              {p.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                      <Link to="/products" onClick={() => setMobileOpen(false)} className="block pt-2 text-[12px] text-[#FF6B35]">All Products â†’</Link>
                    </div>
                  )}
                  {openDropdown === item.hasDropdown && item.hasDropdown === "services" && (
                    <div className="bg-[#0f1c28] px-6 py-3">
                      {serviceItems.map((s) => (
                        <Link key={s.name} to={s.slug} onClick={() => setMobileOpen(false)} className="block py-1.5 text-[12px] text-white/50 hover:text-white">
                          {s.name}
                        </Link>
                      ))}
                      <Link to="/services" onClick={() => setMobileOpen(false)} className="block pt-2 text-[12px] text-[#FF6B35]">All Services â†’</Link>
                    </div>
                  )}
                </>
              ) : (
                <Link to={item.path} onClick={() => setMobileOpen(false)} className={`block px-6 py-3 text-[14px] ${location.pathname === item.path ? "bg-white/10 text-white" : "text-white/70"}`}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="mx-4 mt-3 grid grid-cols-2 gap-2">
            <a href="tel:+918904017774" className="flex items-center justify-center gap-2 bg-[#FF6B35] text-white px-3 py-3 rounded text-[12px]">
              <Phone className="w-4 h-4" /> Call
            </a>
            <a href="https://wa.me/918904017774" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-3 py-3 rounded text-[12px]">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

