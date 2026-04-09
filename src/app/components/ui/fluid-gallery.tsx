import { AspectRatio } from "@/app/components/ui/aspect-ratio";
import { cn } from "@/app/components/ui/utils";

export interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
  span?: "normal" | "wide" | "tall";
}

export function FluidGallery({ images, className }: { images: GalleryImage[], className?: string }) {
  if (!images || images.length === 0) return null;

  return (
    <div className={cn("grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[240px]", className)}>
      {images.map((img, idx) => (
        <div 
          key={idx} 
          className={cn(
            "group relative overflow-hidden rounded-lg bg-[#E8EAED] border border-[#E8EAED] transition-all hover:shadow-lg flex items-center justify-center",
            img.span === 'wide' ? "md:col-span-2" : "col-span-1",
            img.span === 'tall' ? "row-span-2" : "row-span-1"
          )}
        >
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="w-full h-full object-cover sm:object-contain bg-[#111] transition-transform duration-500 group-hover:scale-105"
          />
          {img.category && (
            <div className="absolute top-3 left-3 bg-[#1E3A5F]/90 backdrop-blur-sm text-white text-[10px] font-[var(--font-mono)] px-2.5 py-1 rounded shadow-sm uppercase tracking-wider">
              {img.category}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
