import { useState, useEffect } from "react";
import { SEO } from "../seo/SEO";
import { ArrowLeft, ArrowRight, Clock, Tag } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  metaDesc: string;
  readTime: string;
  category: string;
  content: React.ReactNode;
}

const blogPosts: BlogPost[] = [
  {
    id: "steam-turbine-overhaul-signs",
    title: "5 Signs Your Steam Turbine Needs an Overhaul (And What to Do About It)",
    metaDesc: "Worried your steam turbine isn't performing at its best? Here are 5 clear warning signs it's time for a professional overhaul - and how Texron Power can help.",
    readTime: "4 minutes",
    category: "Maintenance Tips",
    content: (
      <>
        <p className="mb-4">Steam turbines are workhorses - they run for years with minimal fuss. But like any complex machinery, they do send signals when something isn't right. The question is: are you listening?</p>
        <p className="mb-8">Catching problems early can mean the difference between a planned, controlled overhaul and an emergency shutdown that costs you far more in lost production and repairs. Here are five warning signs you shouldn't ignore.</p>

        <h3 className="text-[20px] font-semibold text-[#1E3A5F] mt-8 mb-2">1. Increasing Vibration Levels</h3>
        <p className="mb-4">A gradual rise in bearing vibration is often the earliest indicator of a developing mechanical problem - rotor imbalance, misalignment, bearing wear, or even blade damage. If your vibration readings have been trending upward over the past few months, it's time to investigate.</p>
        <div className="bg-[#F5F5F5] p-4 rounded-md mb-6 border-l-4 border-[#FF6B35]">
          <strong>What to do:</strong> Commission a professional vibration analysis to identify the root cause before it escalates.
        </div>

        <h3 className="text-[20px] font-semibold text-[#1E3A5F] mt-8 mb-2">2. Unexplained Reduction in Efficiency</h3>
        <p className="mb-6">Is your turbine generating less power from the same steam input? A drop in isentropic efficiency - even a few percentage points - can indicate blade erosion, increased internal leakage, or fouling. Over time, this translates directly into higher fuel or steam costs.</p>

        <h3 className="text-[20px] font-semibold text-[#1E3A5F] mt-8 mb-2">3. Frequent Unplanned Trips</h3>
        <p className="mb-6">If your turbine is tripping on protection systems more often than usual - whether for high vibration, low lube oil pressure, or overspeed - something underlying is causing instability. Repeated trips are your turbine's way of asking for attention.</p>

        <h3 className="text-[20px] font-semibold text-[#1E3A5F] mt-8 mb-2">4. Unusual Noises</h3>
        <p className="mb-6">Grinding, clicking, or unusual rumbling from the turbine casing or gearbox are red flags. These sounds often point to bearing damage, rubbing between rotating and stationary components, or loose internals - all of which need immediate professional assessment.</p>

        <h3 className="text-[20px] font-semibold text-[#1E3A5F] mt-8 mb-2">5. Steam or Oil Leaks</h3>
        <p className="mb-6">Leaks from gland seals, flanges, or lube oil systems are both a safety concern and a symptom of wear. Left unaddressed, they can escalate into more serious damage.</p>

        <h3 className="text-[22px] font-semibold text-[#1E3A5F] pt-6 border-t border-[#E8EAED] mt-8 mb-4">What Happens During a Texron Overhaul?</h3>
        <p className="mb-4">Our overhaul process is thorough and fully documented. We start with a condition assessment, move through a structured disassembly and inspection, replace what needs replacing, and reassemble to OEM tolerances. You get a detailed report at the end - so you know exactly what was done and why.</p>
        <p className="font-semibold text-[#1E3A5F]">If your turbine is showing any of these signs, don't wait for an emergency. Get in touch with our team at <a href="mailto:info@texronpower.com" className="text-[#FF6B35] hover:underline">info@texronpower.com</a> or call +91 89040 17774 for a consultation.</p>
      </>
    )
  },
  {
    id: "electronic-governor-retrofit",
    title: "Electronic Governor Retrofit for Steam Turbines: What It Is and Why It's Worth It",
    metaDesc: "Thinking about upgrading your steam turbine's governor system? Learn how an electronic governor retrofit improves speed control, reliability, and efficiency - and what the process involves.",
    readTime: "5 minutes",
    category: "Technology & Upgrades",
    content: (
      <>
        <p className="mb-4">If your steam turbine is still running on a mechanical or older analog governor, you're not alone - and you're not stuck. Hundreds of industrial turbines across India are operating with outdated governing systems that were installed decades ago.</p>
        <p className="mb-8 font-semibold">The good news: retrofitting a modern electronic governor is one of the most cost-effective upgrades you can make.</p>

        <h3 className="text-[22px] font-semibold text-[#1E3A5F] mt-8 mb-4">What Does a Turbine Governor Actually Do?</h3>
        <p className="mb-4">The governor is the brain of your turbine's speed control system. It senses the turbine's rotational speed and adjusts the steam admission valves to maintain the desired speed - whether you're running at fixed speed for grid-connected generation or variable speed for a mechanical drive application.</p>
        <p className="mb-8">An old mechanical governor does this with springs and flyweights. A modern electronic governor does it with microprocessors, speed sensors, and precision actuators.</p>

        <h3 className="text-[22px] font-semibold text-[#1E3A5F] mt-8 mb-4">Why Consider an Upgrade?</h3>
        
        <h4 className="text-[18px] font-semibold text-[#1E3A5F] mb-2">Better Speed Regulation</h4>
        <p className="mb-4">Electronic governors offer speed regulation accuracy of ±0.25% or better - significantly tighter than most mechanical systems. This means more stable frequency for your generators and smoother process control.</p>

        <h4 className="text-[18px] font-semibold text-[#1E3A5F] mb-2">Improved Reliability</h4>
        <p className="mb-4">Mechanical governors have many moving parts - springs, levers, oil dashpots - all of which wear over time. Electronic systems have far fewer mechanical components, which means fewer failure modes.</p>

        <h4 className="text-[18px] font-semibold text-[#1E3A5F] mb-2">Easier Integration</h4>
        <p className="mb-8">Modern electronic governors can interface with your DCS or SCADA system, giving you remote monitoring, speed setpoint adjustment, and diagnostic data - all from your control room.</p>

        <h3 className="text-[22px] font-semibold text-[#1E3A5F] mt-8 mb-4 border-t border-[#E8EAED] pt-6">What Does the Retrofit Process Involve?</h3>
        <p className="mb-4">Our retrofit process starts with a site visit and assessment of your existing governor and control system. We then design a tailored solution, including the electronic control unit, speed sensors, electro-hydraulic actuator, and control panel.</p>
        <p className="mb-6">The actual installation is typically carried out during a scheduled maintenance shutdown, and our team handles the entire commissioning and tuning process before handing over to you.</p>
        
        <p className="font-semibold text-[#1E3A5F] bg-[#F5F5F5] p-4 rounded border-l-4 border-[#FF6B35]">Interested in learning whether your turbine is a good candidate for a governor retrofit? Reach out to us at <a href="mailto:jagadish@texronpower.com" className="text-[#FF6B35] hover:underline">jagadish@texronpower.com</a> or +91 89040 17774.</p>
      </>
    )
  },
  {
    id: "rla-study-generator",
    title: "What Is an RLA Study for a Generator - And Does Your Plant Need One?",
    metaDesc: "An RLA (Remaining Life Assessment) study tells you exactly how much service life is left in your generator. Find out what's involved, when to commission one, and what the results mean for your plant.",
    readTime: "4 minutes",
    category: "Plant Management",
    content: (
      <>
        <p className="mb-4">Your generator has been running reliably for 20 years. But how much longer can you count on it? And are there hidden problems developing that could cause an unexpected failure?</p>
        <p className="mb-8 font-semibold">These are exactly the questions that a Remaining Life Assessment (RLA) study is designed to answer.</p>

        <h3 className="text-[22px] font-semibold text-[#1E3A5F] mt-8 mb-4 border-b border-[#E8EAED] pb-2">What Is an RLA Study?</h3>
        <p className="mb-8">An RLA (Remaining Life Assessment) is a structured technical evaluation that assesses the current health of your generator and estimates how much useful service life remains. It uses a combination of electrical testing, physical inspection, and engineering analysis to give you an accurate, evidence-based picture of your equipment's condition.</p>

        <h3 className="text-[22px] font-semibold text-[#1E3A5F] mt-8 mb-4 border-b border-[#E8EAED] pb-2">When Should You Commission an RLA?</h3>
        <ul className="list-disc pl-5 mb-8 space-y-2">
           <li>Your generator has been in service for 15 years or more</li>
           <li>The machine has experienced abnormal operating conditions (overloading, fault events, flooding, fire)</li>
           <li>You're planning a capital expenditure decision - whether to refurbish or replace</li>
           <li>Your insurer or lender requires evidence of equipment condition</li>
           <li>You want to move from time-based to condition-based maintenance</li>
        </ul>

        <h3 className="text-[22px] font-semibold text-[#1E3A5F] mt-8 mb-4 border-b border-[#E8EAED] pb-2">What Does an RLA Involve?</h3>
        <p className="mb-4">Texron's RLA process covers:</p>
        <ul className="list-disc pl-5 mb-8 space-y-2">
           <li>Insulation resistance (IR) and polarization index (PI) testing</li>
           <li>Winding resistance and impedance measurements</li>
           <li>High potential (Hi-Pot) testing where applicable</li>
           <li>Partial discharge (PD) analysis on higher voltage machines</li>
           <li>Core inspection and iron loss assessment</li>
           <li>Physical inspection of bearings, cooling systems, and mechanical components</li>
        </ul>

        <h3 className="text-[22px] font-semibold text-[#1E3A5F] mt-8 mb-4 border-b border-[#E8EAED] pb-2">What Do You Get at the End?</h3>
        <p className="mb-4">You receive a comprehensive written report that includes the findings from every test, a clear assessment of remaining life, and specific recommendations - whether that's continued operation with monitoring, targeted refurbishment, or planning for eventual replacement.</p>
        <p className="mb-6 text-[#5A6B7D]">For plant managers and owners, this report is invaluable for capital planning, insurance purposes, and simply sleeping better at night.</p>

        <p className="font-semibold text-[#1E3A5F]  p-4 rounded border border-[#FF6B35] bg-orange-50/50">Ready to know the true health of your generator? Contact our team at <a href="mailto:info@texronpower.com" className="text-[#FF6B35] hover:underline">info@texronpower.com</a> to discuss commissioning an RLA study for your plant.</p>
      </>
    )
  }
];

export function BlogPage() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  // Scroll to top when post changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePost]);

  if (activePost) {
    return (
      <article className="min-h-screen bg-white">
        <SEO title={activePost.title + " | Texron Blog"} description={activePost.metaDesc} />
        
        <div className="bg-[#1E3A5F] text-white pt-12 pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <button 
              onClick={() => setActivePost(null)}
              className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors text-[13px] font-[var(--font-mono)] uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Articles
            </button>
            <div className="flex gap-4 items-center mb-4">
               <span className="bg-[#FF6B35] text-white text-[11px] font-[var(--font-mono)] px-2 py-1 rounded tracking-wider uppercase">{activePost.category}</span>
               <span className="flex items-center gap-1 text-white/60 text-[12px]"><Clock className="w-3 h-3"/> {activePost.readTime}</span>
            </div>
            <h1 className="text-[32px] md:text-[42px] font-bold leading-tight">{activePost.title}</h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose max-w-none text-[#5A6B7D] text-[16px] leading-[1.8]">
            {activePost.content}
          </div>
        </div>
      </article>
    );
  }

  return (
    <div>
      <SEO 
        title="Texron Blog - Power Plant Insights & Turbine Maintenance" 
        description="Read the latest insights from Texron's engineering team on turbine upgrades, generator RLAs, mechanical overhauls, and power plant optimization." 
      />

      {/* Hero Section */}
      <section className="bg-[#1E3A5F] text-white py-16">
        <div className="site-shell">
          <h1 className="text-[32px] md:text-[44px] font-bold leading-tight mb-4 text-white">
            Engineering Insights & Articles
          </h1>
          <p className="text-white/80 text-[18px] max-w-3xl leading-relaxed">
            Technical guides, case studies, and maintenance tips compiled directly by our field engineers.
          </p>
        </div>
      </section>

      {/* Blog List Grid */}
      <section className="py-16 bg-[#F5F5F5] min-h-screen">
        <div className="site-shell">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-sm border border-[#E8EAED] overflow-hidden flex flex-col hover:border-[#FF6B35]/50 hover:shadow-lg transition-all">
                 <div className="p-6 flex-1">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-1 text-[#FF6B35] font-[var(--font-mono)] tracking-wider uppercase text-[10px] bg-[#FF6B35]/10 px-2 py-1 rounded">
                        <Tag className="w-3 h-3" /> {post.category}
                      </div>
                      <div className="flex items-center gap-1 text-[#5A6B7D] text-[11px]">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </div>
                    </div>
                    <h2 className="text-[#1E3A5F] text-[20px] font-semibold mb-3 leading-snug hover:text-[#FF6B35] transition-colors cursor-pointer" onClick={() => setActivePost(post)}>
                      {post.title}
                    </h2>
                    <p className="text-[#5A6B7D] text-[14px] leading-relaxed line-clamp-3 mb-6">
                      {post.metaDesc}
                    </p>
                 </div>
                 <div className="p-6 border-t border-[#E8EAED] bg-[#F9FAFB]">
                   <button 
                     onClick={() => setActivePost(post)}
                     className="flex items-center gap-2 text-[#1E3A5F] hover:text-[#FF6B35] font-semibold text-[13px] transition-colors w-full group"
                   >
                     Read Full Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </button>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
