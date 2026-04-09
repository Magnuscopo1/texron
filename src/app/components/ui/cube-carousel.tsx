import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/app/components/ui/utils";
import { GalleryImage } from "./fluid-gallery";

export function CubeCarousel({ images, className }: { images: GalleryImage[], className?: string }) {
  if (!images || images.length === 0) return null;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  // Cube faces indices:
  // Using 4 faces of a cube (front, right, back, left) sliding horizontally
  
  return (
    <div className={cn("relative w-full max-w-4xl mx-auto h-[400px] md:h-[500px] perspective-[1000px] flex items-center justify-center group", className)}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          initial={{ 
            rotateY: direction > 0 ? 90 : -90, 
            opacity: 0,
            z: -250
          }}
          animate={{ 
            rotateY: 0, 
            opacity: 1,
            z: 0 
          }}
          exit={{ 
            rotateY: direction > 0 ? -90 : 90, 
            opacity: 0,
            z: -250
          }}
          transition={{ 
            duration: 0.8,
            ease: "easeInOut"
          }}
          style={{ transformOrigin: "center center -250px" }}
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-[#111] rounded-2xl overflow-hidden border border-[#E8EAED] shadow-2xl shadow-black/20"
        >
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-contain absolute z-10"
          />
          <div 
            className="absolute inset-0 bg-cover bg-center blur-2xl opacity-40 scale-125 z-0"
            style={{ backgroundImage: `url('${images[currentIndex].src}')` }}
          />

          <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#10243A]/90 to-transparent p-6 pt-12 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            {images[currentIndex].category && (
              <span className="font-[var(--font-mono)] text-[10px] tracking-[0.15em] text-[#FF6B35] uppercase bg-[#1A2A3A]/80 px-2 py-1 rounded inline-block mb-3">
                {images[currentIndex].category}
              </span>
            )}
            <p className="font-medium text-white text-base md:text-lg drop-shadow-md">
              {images[currentIndex].alt}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-4 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2 z-30">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              currentIndex === idx ? "bg-[#FF6B35] w-6" : "bg-[#D1DEEA] hover:bg-[#A3B8CC]"
            )}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
