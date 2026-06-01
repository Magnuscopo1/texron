import { useState, useEffect } from "react";
import { Box, Wrench, Settings, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type BusinessPillar = {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
};

const pillars: BusinessPillar[] = [
  {
    id: "products",
    icon: Box,
    title: "Engineered Products",
    description:
      "13 product lines — governors, protection relays, actuators, and control panels. Drop-in replacements for legacy OEM systems.",
    ctaText: "View Product Catalog",
    ctaLink: "/products",
  },
  {
    id: "services",
    icon: Wrench,
    title: "Field Services",
    description:
      "Governor retrofits, RLA studies, overhauling, and commissioning. Methodology-driven with documented processes.",
    ctaText: "View Services",
    ctaLink: "/services",
  },
  {
    id: "capabilities",
    icon: Settings,
    title: "In-House Capabilities",
    description:
      "Assembly, testing, re-engineering, and CNC machining at our Peenya facility. Complete vertical integration.",
    ctaText: "View Capabilities",
    ctaLink: "/capabilities",
  },
  {
    id: "turbines",
    icon: Zap,
    title: "Steam Turbines",
    description:
      "Custom-engineered steam turbines for industrial and utility applications. New units and refurbished turbines with guaranteed performance.",
    ctaText: "Explore Turbines",
    ctaLink: "/products",
  },
];

export function BusinessPillars() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, pillars.length - cardsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const visiblePillars = pillars.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="site-shell">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-3">
            What We Do
          </h2>
          <h3 className="text-[#1E3A5F] text-[36px] md:text-[42px] font-bold leading-tight">
            Four Pillars of Our Business
          </h3>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 md:gap-8"
              animate={{ x: -currentIndex * (100 / cardsPerView) + "%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ width: `${(pillars.length / cardsPerView) * 100}%` }}
            >
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.id}
                    className="flex-shrink-0"
                    style={{ width: `${100 / pillars.length}%` }}
                  >
                    <motion.div
                      className="h-full bg-white border border-[#E8EAED] rounded-2xl p-8 hover:shadow-xl transition-shadow flex flex-col"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Icon */}
                      <div className="mb-6 inline-flex">
                        <div className="p-3 bg-[#F5F5F5] rounded-lg">
                          <Icon className="w-6 h-6 text-[#1E3A5F]" strokeWidth={1.5} />
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="text-[#1E3A5F] text-[20px] md:text-[22px] font-semibold mb-3">
                        {pillar.title}
                      </h4>

                      {/* Description */}
                      <p className="text-[#5A6B7D] text-[14px] md:text-[15px] leading-relaxed mb-6 flex-grow">
                        {pillar.description}
                      </p>

                      {/* CTA Link */}
                      <a
                        href={pillar.ctaLink}
                        className="text-[#FF6B35] font-semibold text-[14px] md:text-[15px] hover:text-[#FF8555] transition-colors inline-flex items-center gap-2 group"
                      >
                        {pillar.ctaText}
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          {pillars.length > cardsPerView && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-14 z-10 bg-white border border-[#E8EAED] hover:bg-[#F5F5F5] rounded-full p-3 md:p-4 transition-colors group"
                aria-label="Previous pillar"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#1E3A5F] group-hover:text-[#FF6B35] transition-colors" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-14 z-10 bg-white border border-[#E8EAED] hover:bg-[#F5F5F5] rounded-full p-3 md:p-4 transition-colors group"
                aria-label="Next pillar"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#1E3A5F] group-hover:text-[#FF6B35] transition-colors" />
              </button>
            </>
          )}

          {/* Scroll Indicator */}
          <div className="flex items-center gap-2 mt-8 md:mt-10">
            {pillars.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const newIndex = Math.max(0, Math.min(index, maxIndex));
                  setCurrentIndex(newIndex);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index >= currentIndex && index < currentIndex + cardsPerView
                    ? "bg-[#FF6B35] w-8"
                    : "bg-[#E8EAED] w-2 hover:bg-[#D0D0D0]"
                }`}
                aria-label={`Go to pillar ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
