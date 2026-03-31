import { Camera } from "lucide-react";

interface PhotoPlaceholderProps {
  directive: string;
  aspectRatio?: string;
  className?: string;
  fallbackImage?: string;
}

export function PhotoPlaceholder({
  directive,
  aspectRatio = "aspect-video",
  className = "",
  fallbackImage,
}: PhotoPlaceholderProps) {
  if (fallbackImage) {
    return (
      <div className={`relative ${aspectRatio} ${className} overflow-hidden rounded-lg`}>
        <img
          src={fallbackImage}
          alt={directive}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-[#1E3A5F]/90 px-3 py-2">
          <div className="flex items-center gap-2 text-white">
            <Camera className="w-3 h-3 shrink-0" />
            <span className="font-[var(--font-mono)] text-[11px] leading-tight">
              PHOTO SHOOT: {directive}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative ${aspectRatio} ${className} overflow-hidden rounded-lg bg-[#1E3A5F]/5 border-2 border-dashed border-[#1E3A5F]/30 flex flex-col items-center justify-center p-6`}
    >
      <Camera className="w-10 h-10 text-[#1E3A5F]/40 mb-3" />
      <p className="font-[var(--font-mono)] text-[12px] text-[#1E3A5F]/60 text-center max-w-xs leading-relaxed">
        PHOTO SHOOT DIRECTIVE:
      </p>
      <p className="font-[var(--font-mono)] text-[12px] text-[#FF6B35] text-center max-w-xs mt-1 leading-relaxed">
        "{directive}"
      </p>
      <p className="font-[var(--font-mono)] text-[10px] text-[#1E3A5F]/40 text-center mt-2">
        Half-day shoot at Peenya facility
      </p>
    </div>
  );
}
