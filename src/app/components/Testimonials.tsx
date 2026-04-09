import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const testimonials = [
  {
    id: 1,
    quote: "When our 210 MW unit tripped at 2 AM, Stanley was on a call within 20 minutes and his team was at the plant by 8 AM. The governor was replaced and the unit was back online in 48 hours. No other vendor could have matched that response time.",
    name: "Senior Plant Manager",
    org: "State Thermal Power Corporation, Karnataka",
    capacity: "210 MW Steam Turbine",
    context: "Emergency governor failure",
  },
  {
    id: 2,
    quote: "We had been struggling with Voith actuator spares for 3 years after Voith discontinued our model. Texron reverse-engineered the servo valve assemblies in 2 weeks. Quality matched OEM specifications. We signed a 5-year LTSA on the spot.",
    name: "Chief Maintenance Engineer",
    org: "Hydroelectric Power Station, Tamil Nadu",
    capacity: "4 x 55 MW Francis Turbines",
    context: "Discontinued spares procurement",
  },
  {
    id: 3,
    quote: "Their RLA report was the most thorough we've seen in 15 years of operation. The component-wise grading system and 5-year maintenance roadmap helped us secure a Rs. 45 crore refurbishment budget from management without pushback.",
    name: "Head of Engineering",
    org: "Private Cogeneration Plant, Andhra Pradesh",
    capacity: "120 MW Combined Cycle",
    context: "Residual Life Assessment",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-16 bg-[#1A2A3A]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
            From the Field
          </h2>
          <h3 className="font-[var(--font-heading)] text-white text-[28px] md:text-[32px]">
            What Plant Engineers Say
          </h3>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 40, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -40, filter: "blur(4px)" }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-10"
            >
              <Quote className="w-8 h-8 text-[#FF6B35]/40 mb-4" />
              <blockquote className="text-white/80 text-[15px] md:text-[16px] leading-relaxed mb-6">
                "{t.quote}"
              </blockquote>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <p className="text-white text-[14px]">{t.name}</p>
                  <p className="text-white/50 text-[12px]">{t.org}</p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1">
                  <span className="font-[var(--font-mono)] text-[11px] text-[#FF6B35]">{t.capacity}</span>
                  <span className="font-[var(--font-mono)] text-[10px] text-white/30">{t.context}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={prev} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-[#FF6B35]" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={next} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}