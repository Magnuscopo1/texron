import { SpecSheetTable } from "../components/SpecSheetTable";
import { CompatibilityMatrix } from "../components/CompatibilityMatrix";
import { Breadcrumb } from "../components/Breadcrumb";
import { PageTimestamp } from "../components/PageTimestamp";

export function SpecsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#1E3A5F] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ label: "Spec Sheets & Compatibility" }]} />
          <h1 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
            Technical Documentation
          </h1>
          <h2 className="text-[32px] md:text-[40px] leading-tight mb-3 text-white">
            Spec Sheets & Compatibility
          </h2>
          <p className="text-white/60 text-[15px] max-w-2xl">
            The 2-Click Rule: Every technical datasheet is accessible within 2 clicks from the homepage.
            All documents are version-controlled and audited quarterly.
          </p>
        </div>
      </section>

      {/* Spec Sheet Downloads */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h3 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
              Downloads
            </h3>
            <h4 className="text-[#1E3A5F] text-[24px] mb-1">
              Product Datasheets & Manuals
            </h4>
            <p className="text-[13px] text-[#5A6B7D]">
              Version-controlled documents. Check version numbers before procurement submissions.
            </p>
          </div>
          <SpecSheetTable />
        </div>
      </section>

      {/* Compatibility Matrix */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h3 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
              OEM Compatibility
            </h3>
            <h4 className="text-[#1E3A5F] text-[24px] mb-1">
              Legacy Equipment Cross-Reference Matrix
            </h4>
            <p className="text-[13px] text-[#5A6B7D]">
              Verify Texron product compatibility with your existing OEM systems before procurement.
            </p>
          </div>
          <CompatibilityMatrix />
        </div>
      </section>

      <PageTimestamp lastUpdated="February 2026" nextAudit="Q2 2026" />
    </div>
  );
}