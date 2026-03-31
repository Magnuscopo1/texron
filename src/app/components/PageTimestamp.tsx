import { Clock } from "lucide-react";

interface PageTimestampProps {
  lastUpdated: string;
  nextAudit?: string;
}

export function PageTimestamp({ lastUpdated, nextAudit }: PageTimestampProps) {
  return (
    <div className="bg-[#F5F5F5] border-t border-[#E8EAED]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-4">
        <div className="flex items-center gap-1.5">
          <Clock className="w-3 h-3 text-[#5A6B7D]" />
          <span className="font-[var(--font-mono)] text-[10px] text-[#5A6B7D]">
            Page last updated: {lastUpdated}
          </span>
        </div>
        {nextAudit && (
          <>
            <span className="text-[#E8EAED]">|</span>
            <span className="font-[var(--font-mono)] text-[10px] text-[#5A6B7D]">
              Next content audit: {nextAudit}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
