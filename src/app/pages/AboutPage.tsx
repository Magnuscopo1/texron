import { CheckCircle, Shield, Award, Users, Anchor, FileCheck, MapPin } from "lucide-react";
import { SEO } from "../seo/SEO";

// Actual workspace assets for founders / engineering background
import aboutStoryImg from "../../../imageAssets/IMG_20210217_162327.jpg.jpeg";

const journey = [
  {
    year: "1988",
    title: "Foundation",
    desc: "Texron Power established with a vision to deliver engineering excellence in power generation.",
  },
  {
    year: "2005",
    title: "Expansion",
    desc: "Expanded services to include thermal power solutions and established partnerships with leading OEMs.",
  },
  {
    year: "2012",
    title: "Hydro Power Entry",
    desc: "Ventured into hydro power sector with successful commissioning of first major hydro project.",
  },
  {
    year: "2018",
    title: "International Recognition",
    desc: "Achieved ISO certifications and began serving international clients across Asia.",
  },
  {
    year: "2024",
    title: "Industry Leader",
    desc: "Completed 100+ projects with 10 MW gearbox capability and established as industry leader.",
  },
] as const;

export function AboutPage() {
  return (
    <div>
      <SEO 
        title="About Texron Power - Turbine Engineering Experts Since Bengaluru" 
        description="Learn about Texron Power's team of turbine engineers with 30+ years of experience in steam and hydro power plant services. ISO certified. Trusted by plants across India." 
      />

      {/* Hero Section */}
      <section className="bg-[#1E3A5F] text-white py-16 md:py-24">
        <div className="site-shell">
          <h1 className="text-[32px] md:text-[48px] font-bold leading-tight mb-6 text-white max-w-4xl">
            We're a team of turbine engineers who love solving problems that others call impossible.
          </h1>
          <p className="text-white/80 text-[18px] max-w-3xl mb-4 leading-relaxed">
            Texron Power Plant Systems was founded by engineers, for engineers. Our roots are in the field - in turbine halls, generator bays, and control rooms across India. We understand that downtime isn't just an inconvenience; it's lost production, revenue, and credibility for your operation.
          </p>
          <p className="text-white/80 text-[18px] max-w-3xl mb-8 leading-relaxed">
            That's why we approach every project with the same urgency and attention to detail that we'd want if it were our own plant.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white border-b border-[#E8EAED]">
        <div className="site-shell grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
              Our Story
            </h2>
            <h3 className="text-[#1E3A5F] text-[28px] font-semibold mb-6">
              A turbine engineering company Bengaluru trusts.
            </h3>
            <p className="text-[#5A6B7D] text-[15px] mb-4 leading-relaxed">
              Texron was born from a simple observation: too many power plants were struggling with aging turbine systems, and the available solutions were either too expensive, too slow, or just not reliable enough.
            </p>
            <p className="text-[#5A6B7D] text-[15px] mb-4 leading-relaxed">
              So our founders - with decades of combined experience across thermal and hydro plants - decided to build something better: a nimble, technically strong company that could deliver world-class turbine solutions with the speed and flexibility that large OEMs simply can't match.
            </p>
            <p className="text-[#5A6B7D] text-[15px] leading-relaxed">
              Today, we proudly hold ISO 9001:2015 certification - a reflection of our commitment to quality at every stage of every project.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl border border-[#E8EAED] relative group">
             <div className="aspect-[4/3] bg-muted relative">
                <img 
                  src={aboutStoryImg}
                  alt="Texron Engineering Foundation and field assessment"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur text-[#1E3A5F] text-[13px] px-4 py-2.5 rounded shadow-sm border border-[#E8EAED] font-medium text-center">
                  Rooted in actual industrial and field-site expertise.
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-white border-b border-[#E8EAED]">
        <div className="site-shell">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-[#1E3A5F] text-[26px] md:text-[30px] font-semibold mb-2">Our Journey</h2>
            <p className="text-[#5A6B7D] text-[13px] md:text-[14px]">
              Milestones that shaped our technical depth and execution maturity.
            </p>
          </div>

          <div className="relative">
            {/* Center line (desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#E8EAED] -translate-x-1/2" />

            <div className="space-y-10">
              {journey.map((m, idx) => {
                const isRight = idx % 2 === 1;
                return (
                  <div key={m.year} className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6 md:gap-10">
                    {/* Left card */}
                    <div className={`${isRight ? "md:col-start-1 md:col-span-1 md:opacity-0 md:pointer-events-none" : ""}`}>
                      {!isRight && (
                        <div className="bg-white border border-[#E8EAED] rounded-xl px-6 py-5 shadow-sm">
                          <h3 className="text-[#1A2A3A] font-semibold text-[14px] mb-1">{m.title}</h3>
                          <p className="text-[#5A6B7D] text-[12px] leading-relaxed">{m.desc}</p>
                        </div>
                      )}
                    </div>

                    {/* Year marker */}
                    <div className="flex items-center justify-start md:justify-center md:col-start-2">
                      <div className="relative flex items-center">
                        {/* mobile line */}
                        <div className="md:hidden absolute left-[14px] -top-8 -bottom-8 w-px bg-[#E8EAED]" />
                        <div className="w-11 h-11 rounded-full bg-[#1A2A3A] text-white flex items-center justify-center text-[11px] font-semibold shadow-sm ring-4 ring-white">
                          {m.year}
                        </div>
                      </div>
                    </div>

                    {/* Right card */}
                    <div className={`${!isRight ? "md:col-start-3 md:col-span-1 md:opacity-0 md:pointer-events-none" : ""}`}>
                      {isRight && (
                        <div className="bg-white border border-[#E8EAED] rounded-xl px-6 py-5 shadow-sm">
                          <h3 className="text-[#1A2A3A] font-semibold text-[14px] mb-1">{m.title}</h3>
                          <p className="text-[#5A6B7D] text-[12px] leading-relaxed">{m.desc}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Leadership */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="site-shell">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
              Leadership
            </h2>
            <h3 className="text-[#1E3A5F] text-[28px] font-semibold mb-4">
              Steam turbine experts in India
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Leadership 1 */}
            <div className="bg-white p-8 rounded-xl border border-[#E8EAED] shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#1A2A3A] rounded-full flex items-center justify-center text-white text-[20px] font-bold">JB</div>
                <div>
                  <h4 className="text-[#1A2A3A] text-[20px] font-bold">Jagadish B.G.</h4>
                  <p className="text-[#FF6B35] font-[var(--font-mono)] text-[12px] uppercase">Co-Founder & Director</p>
                </div>
              </div>
              <p className="text-[#5A6B7D] text-[14px] leading-relaxed mb-6">
                A Mechanical Engineer from Bangalore University (1991), Jagadish brings over 30 years of hands-on power plant experience to the table. He has personally led installation, erection, and commissioning projects up to 150 MW, and is deeply experienced in turbine diagnostics and performance optimization.
              </p>
              <h5 className="font-semibold text-[#1A2A3A] text-[14px] mb-3">Highlights from his career:</h5>
              <ul className="space-y-2">
                {[
                  "Commissioning of Vertical Drive Turbines for the Indian Navy (INS Viraat)",
                  "Major maintenance and R&M leadership across 60+ projects",
                  "Expertise in generator testing and auxiliary equipment commissioning",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 items-start text-[#5A6B7D] text-[13px]">
                    <CheckCircle className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Leadership 2 */}
            <div className="bg-white p-8 rounded-xl border border-[#E8EAED] shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#1A2A3A] rounded-full flex items-center justify-center text-white text-[20px] font-bold">RS</div>
                <div>
                  <h4 className="text-[#1A2A3A] text-[20px] font-bold">R. Stanley Jayakumar</h4>
                  <p className="text-[#FF6B35] font-[var(--font-mono)] text-[12px] uppercase">Co-Founder & Director</p>
                </div>
              </div>
              <p className="text-[#5A6B7D] text-[14px] leading-relaxed mb-6">
                An Electrical & Electronics Engineer with over 24 years of experience in power plant automation and protection systems, Stanley is the brain behind Texron's control engineering capabilities.
              </p>
              <h5 className="font-semibold text-[#1A2A3A] text-[14px] mb-3">Highlights from his career:</h5>
              <ul className="space-y-2">
                {[
                  "Installation & commissioning of turbine and generator systems across 60+ projects (3 MW to 130 MW)",
                  "Design of custom hydraulic governor systems for turbine applications",
                  "Engineering of DCS/PLC-based turbine control and protection systems",
                  "Design and fabrication of HT, LT, and control panels",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 items-start text-[#5A6B7D] text-[13px]">
                    <CheckCircle className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values & Certs */}
      <section className="py-16 bg-white">
        <div className="site-shell grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2">
            <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
              Our Principles
            </h2>
            <h3 className="text-[#1E3A5F] text-[28px] font-semibold mb-8">
              Our Values
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-[#FF6B35]" />
                  <h4 className="text-[#1A2A3A] font-semibold text-[18px]">Quality First</h4>
                </div>
                <p className="text-[14px] text-[#5A6B7D] leading-relaxed">
                  Every repair and retrofit we carry out follows documented, condition-based procedures. We don't guess - we diagnose, plan, and execute with precision.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <FileCheck className="w-6 h-6 text-[#FF6B35]" />
                  <h4 className="text-[#1A2A3A] font-semibold text-[18px]">Transparency Always</h4>
                </div>
                <p className="text-[14px] text-[#5A6B7D] leading-relaxed">
                  You'll always know what we're doing, why we're doing it, and what it costs. We don't believe in surprises - especially when your turbine is offline.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-[#FF6B35]" />
                  <h4 className="text-[#1A2A3A] font-semibold text-[18px]">People Matter</h4>
                </div>
                <p className="text-[14px] text-[#5A6B7D] leading-relaxed">
                  Our team is our greatest asset. We invest in our engineers, respect every team member's input, and foster a culture where great ideas can come from anywhere.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Anchor className="w-6 h-6 text-[#FF6B35]" />
                  <h4 className="text-[#1A2A3A] font-semibold text-[18px]">Long-Term Thinking</h4>
                </div>
                <p className="text-[14px] text-[#5A6B7D] leading-relaxed">
                  We're not here for a quick transaction. We want to be your power plant's trusted engineering partner for the long haul.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#1E3A5F] rounded-xl p-8 text-white w-full h-full flex flex-col justify-center">
             <h3 className="text-[22px] font-semibold mb-6 flex items-center gap-3"><Award className="text-[#FF6B35] w-8 h-8"/> Certifications & Compliance</h3>
             <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[15px]">
                  <CheckCircle className="w-5 h-5 text-[#FF6B35]" />
                  ISO 9001:2015 Certified
                </li>
                <li className="flex items-center gap-3 text-[15px]">
                  <CheckCircle className="w-5 h-5 text-[#FF6B35]" />
                  GST Registered: 29AANFT6999A1ZG
                </li>
                <li className="flex gap-3 text-[15px] items-start">
                  <MapPin className="w-5 h-5 text-[#FF6B35] shrink-0 mt-0.5" />
                  <span>Operations based in Peenya Industrial Area - one of Asia's largest industrial clusters</span>
                </li>
             </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
