import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
}

export function FAQ({ title = "Frequently Asked Questions", subtitle, items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
            FAQ
          </h2>
          <h3 className="text-[#1E3A5F] text-[24px] leading-tight mb-1">{title}</h3>
          {subtitle && <p className="text-[13px] text-[#5A6B7D] leading-relaxed max-w-2xl mx-auto">{subtitle}</p>}
        </div>

        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="bg-white rounded-xl border border-[#E8EAED] overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-3 px-5 py-4 text-left"
                >
                  <span className="text-[14px] text-[#1E3A5F] leading-relaxed font-medium pr-2">{item.question}</span>
                  <ChevronDown className={`w-4 h-4 text-[#5A6B7D] shrink-0 mt-0.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 border-t border-[#E8EAED] pt-3">
                        <p className="text-[13px] text-[#5A6B7D] leading-relaxed">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
