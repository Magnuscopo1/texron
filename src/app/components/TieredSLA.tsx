import { Phone, FileText, Calendar, AlertTriangle, Clock, ArrowRight, MessageCircle, Upload } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

const tiers = [
  {
    id: "emergency",
    color: "bg-red-600",
    borderColor: "border-red-600",
    dotColor: "bg-red-500",
    badge: "EMERGENCY",
    emoji: "\uD83D\uDD34",
    title: "Plant Trip / Critical Failure",
    response: "Callback within 30 minutes",
    description: "Direct line to Stanley or Jagadish. For active plant trips, turbine failures, or safety-critical situations requiring immediate expert intervention.",
    action: "Call Direct Line",
    actionType: "call" as const,
    icon: AlertTriangle,
    contacts: [
      { name: "Stanley", phone: "+919845012345" },
      { name: "Jagadish", phone: "+919845067890" },
    ],
    indicators: ["Active plant shutdown", "Safety system failure", "Turbine trip event", "Generator protection relay fault"],
    featured: true,
  },
  {
    id: "urgent",
    color: "bg-[#FF6B35]",
    borderColor: "border-[#FF6B35]",
    dotColor: "bg-[#FF6B35]",
    badge: "URGENT",
    emoji: "\uD83D\uDFE0",
    title: "Performance Degradation",
    response: "Diagnostic response within 4 hours",
    description: "Submit a diagnostic form with equipment details and photos. Our engineers will analyze and respond with preliminary assessment.",
    action: "Submit Diagnostic Form",
    actionType: "form" as const,
    icon: Clock,
    contacts: [],
    indicators: ["Abnormal vibration readings", "Governor hunting / instability", "Oil system pressure anomalies", "Efficiency degradation"],
    featured: false,
  },
  {
    id: "planned",
    color: "bg-blue-600",
    borderColor: "border-blue-600",
    dotColor: "bg-blue-500",
    badge: "PLANNED",
    emoji: "\uD83D\uDD35",
    title: "Retrofit / LTSA / RLA Study",
    response: "Consultation within 1 business day",
    description: "For planned upgrades, long-term service agreements, residual life assessments, and legacy equipment modernization projects.",
    action: "Request Consultation",
    actionType: "form" as const,
    icon: Calendar,
    contacts: [],
    indicators: ["Governor retrofit planning", "LTSA negotiation", "RLA/condition assessment", "Spares procurement"],
    featured: false,
  },
];

export function TieredSLA() {
  const [expandedTier, setExpandedTier] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <section className="py-16 bg-white" id="response-protocol">
      <div className="site-shell">
        <div className="text-center mb-10">
          <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
            Response Protocol
          </h2>
          <h3 className="text-[#1E3A5F] text-[28px] md:text-[32px] mb-2">
            Select Your Priority Level
          </h3>
          <p className="text-[#5A6B7D] text-[14px] max-w-xl mx-auto">
            Our tiered SLA ensures the right response speed for your situation.
            No gatekeepers. Direct access to principals.
          </p>
        </div>

        {/* Emergency Card - DOMINANT (Full Width on Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="border-2 border-red-600 rounded-2xl overflow-hidden mb-6 ring-2 ring-red-200 shadow-lg shadow-red-100"
        >
          <div className="bg-red-600 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              <span className="font-[var(--font-mono)] text-white text-[13px] tracking-wider">
                {tiers[0].emoji} EMERGENCY - Plant Trip / Critical Failure
              </span>
            </div>
            <AlertTriangle className="w-5 h-5 text-white/80" />
          </div>
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left: Description */}
              <div className="md:col-span-1">
                <p className="font-[var(--font-mono)] text-[14px] text-red-600 mb-2">
                  Callback within 30 minutes
                </p>
                <p className="text-[13px] text-[#5A6B7D] leading-relaxed mb-4">
                  {tiers[0].description}
                </p>
                <div>
                  <p className="font-[var(--font-mono)] text-[10px] text-[#1E3A5F]/40 tracking-wider mb-2">APPLICABLE SITUATIONS</p>
                  {tiers[0].indicators.map((ind) => (
                    <div key={ind} className="flex items-center gap-2 mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <span className="text-[12px] text-[#5A6B7D]">{ind}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right: Contact Cards */}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tiers[0].contacts.map((contact) => (
                  <div key={contact.name} className="bg-red-50 rounded-xl p-5 border border-red-200">
                    <p className="font-[var(--font-mono)] text-[11px] text-red-600 tracking-wider mb-3">{contact.name.toUpperCase()}</p>
                    <a
                      href={`tel:${contact.phone}`}
                      className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg mb-2 transition-colors justify-center"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="text-[14px]">Call {contact.name}</span>
                    </a>
                    <a
                      href={`https://wa.me/${contact.phone.replace("+", "")}?text=PLANT%20EMERGENCY%20-%20Need%20immediate%20turbine%20support.%20Plant:%20____%20Equipment:%20____`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2.5 px-4 rounded-lg transition-colors justify-center"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-[13px]">WhatsApp {contact.name}</span>
                    </a>
                    <p className="font-[var(--font-mono)] text-[10px] text-[#5A6B7D] text-center mt-2">
                      Send equipment photos via WhatsApp
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Urgent + Planned - Side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {tiers.slice(1).map((tier, idx) => {
            const Icon = tier.icon;
            const isExpanded = expandedTier === tier.id;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.2, duration: 0.4 }}
                className={`border-2 ${tier.borderColor} rounded-xl overflow-hidden`}
              >
                <div className={`${tier.color} px-5 py-3 flex items-center justify-between`}>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="font-[var(--font-mono)] text-white text-[12px] tracking-wider">
                      {tier.emoji} {tier.badge}
                    </span>
                  </div>
                  <Icon className="w-4 h-4 text-white/80" />
                </div>

                <div className="p-5">
                  <h4 className="text-[#1E3A5F] text-[17px] mb-1">{tier.title}</h4>
                  <p className="font-[var(--font-mono)] text-[12px] text-[#FF6B35] mb-3">{tier.response}</p>
                  <p className="text-[13px] text-[#5A6B7D] leading-relaxed mb-4">{tier.description}</p>

                  <div className="mb-5">
                    <p className="font-[var(--font-mono)] text-[10px] text-[#1E3A5F]/40 tracking-wider mb-2">APPLICABLE SITUATIONS</p>
                    <div className="grid grid-cols-1 gap-1.5">
                      {tier.indicators.map((indicator) => (
                        <div key={indicator} className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${tier.dotColor}`} />
                          <span className="text-[12px] text-[#5A6B7D]">{indicator}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      if (isExpanded) {
                        setExpandedTier(null);
                      } else {
                        setExpandedTier(tier.id);
                        setFormSubmitted(false);
                      }
                    }}
                    className={`flex items-center justify-center gap-2 w-full ${tier.color} hover:opacity-90 text-white py-3 rounded-lg transition-colors`}
                  >
                    <FileText className="w-4 h-4" />
                    <span className="text-[14px]">{tier.action}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                  </button>
                </div>

                {isExpanded && (
                  <div className="px-5 pb-5 border-t border-[#E8EAED]">
                    {formSubmitted ? (
                      <div className="py-6 text-center">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-[14px] text-[#1E3A5F]">Request submitted successfully</p>
                        <p className="text-[12px] text-[#5A6B7D] mt-1">{tier.response}</p>
                      </div>
                    ) : (
                      <form className="pt-4 space-y-3" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input type="text" placeholder="Your Name" required className="w-full px-3 py-2 border border-[#E8EAED] rounded text-[13px] bg-white focus:outline-none focus:border-[#1E3A5F]" />
                          <input type="text" placeholder="Plant / Organization" required className="w-full px-3 py-2 border border-[#E8EAED] rounded text-[13px] bg-white focus:outline-none focus:border-[#1E3A5F]" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input type="tel" placeholder="Phone Number" required className="w-full px-3 py-2 border border-[#E8EAED] rounded text-[13px] bg-white focus:outline-none focus:border-[#1E3A5F]" />
                          <select className="w-full px-3 py-2 border border-[#E8EAED] rounded text-[13px] bg-white text-[#5A6B7D] focus:outline-none focus:border-[#1E3A5F]">
                            <option value="">Equipment Type</option>
                            <option>Steam Turbine Governor</option>
                            <option>Hydraulic Actuator</option>
                            <option>Protection Relay</option>
                            <option>Control Panel</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <textarea
                          placeholder={
                            tier.id === "urgent"
                              ? "Describe symptoms: vibration levels, error codes, timeline..."
                              : "Describe your requirements: equipment model, capacity, scope..."
                          }
                          rows={3}
                          className="w-full px-3 py-2 border border-[#E8EAED] rounded text-[13px] bg-white focus:outline-none focus:border-[#1E3A5F] resize-none"
                        />
                        {tier.id === "urgent" && (
                          <div className="border-2 border-dashed border-[#E8EAED] rounded-lg p-4 text-center hover:border-[#FF6B35]/30 transition-colors cursor-pointer">
                            <Upload className="w-5 h-5 text-[#5A6B7D] mx-auto mb-1" />
                            <p className="text-[12px] text-[#5A6B7D]">Attach photos / vibration data / error screenshots</p>
                            <p className="text-[10px] text-[#5A6B7D]/60 mt-0.5">PDF, JPG, PNG, CSV up to 10MB</p>
                            <input type="file" className="hidden" multiple accept=".pdf,.jpg,.jpeg,.png,.csv" />
                          </div>
                        )}
                        <button type="submit" className={`w-full ${tier.color} text-white py-2.5 rounded text-[13px] hover:opacity-90 transition-opacity`}>
                          Submit Request
                        </button>
                      </form>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
