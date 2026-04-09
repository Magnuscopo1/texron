import { useState } from "react";
import {
  CheckCircle,
  AlertTriangle,
  Clock,
  FileText,
  BarChart3,
  RefreshCw,
  Calendar,
  Settings,
  Shield,
  Users,
} from "lucide-react";

const auditItems = [
  { id: "1", task: "Verify OEM Compatibility Matrix", section: "Specs Page", status: "due", lastDone: "Dec 2025", dueDate: "Mar 2026" },
  { id: "2", task: "Update project counter (Turbine Systems Serviced)", section: "Homepage", status: "completed", lastDone: "Feb 2026", dueDate: "Mar 2026" },
  { id: "3", task: "Review DTG-3000 datasheet version", section: "Products", status: "completed", lastDone: "Feb 2026", dueDate: "Mar 2026" },
  { id: "4", task: "Check BHEL compatibility chart for new models", section: "BHEL Retrofits", status: "due", lastDone: "Jan 2026", dueDate: "Mar 2026" },
  { id: "5", task: "Update Voith spares availability & lead times", section: "Voith Hydraulic", status: "overdue", lastDone: "Oct 2025", dueDate: "Jan 2026" },
  { id: "6", task: "Verify ISO 9001 certificate current", section: "Certifications", status: "completed", lastDone: "Mar 2026", dueDate: "Mar 2026" },
  { id: "7", task: "Add new case study (Q1 2026 projects)", section: "Case Studies", status: "due", lastDone: "Dec 2025", dueDate: "Mar 2026" },
  { id: "8", task: "Update RLA methodology document version", section: "RLA Page", status: "completed", lastDone: "Dec 2025", dueDate: "Mar 2026" },
];

const pdfAssets = [
  { name: "DTG-3000 Series Datasheet", version: "v3.2", updated: "Feb 2026", downloads: 142, status: "current" },
  { name: "HA-500 Retrofit Kit Datasheet", version: "v2.1", updated: "Jan 2026", downloads: 87, status: "current" },
  { name: "NPR-21 Protection Relay", version: "v4.0", updated: "Dec 2025", downloads: 63, status: "current" },
  { name: "Condition-Based Repair Criteria", version: "v2.4", updated: "Oct 2025", downloads: 234, status: "review" },
  { name: "Voith Spares Catalogue", version: "v2.1", updated: "Jan 2026", downloads: 156, status: "current" },
  { name: "RLA Methodology Document", version: "v1.3", updated: "Dec 2025", downloads: 91, status: "current" },
  { name: "ISO 9001:2015 Certificate", version: "Current", updated: "Mar 2025", downloads: 45, status: "review" },
];

export function AdminPage() {
  const [completedItems, setCompletedItems] = useState<string[]>(
    auditItems.filter((i) => i.status === "completed").map((i) => i.id)
  );

  const toggleItem = (id: string) => {
    setCompletedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const totalItems = auditItems.length;
  const completedCount = completedItems.length;
  const progress = Math.round((completedCount / totalItems) * 100);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <div className="bg-[#1E3A5F] text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <Settings className="w-5 h-5 text-[#FF6B35]" />
            <span className="font-[var(--font-mono)] text-[11px] tracking-[0.2em] text-white/50">
              CMS DASHBOARD
            </span>
          </div>
          <h1 className="text-[24px] text-white">Content Management</h1>
          <p className="text-white/60 text-[13px] mt-1">
            Quarterly Content Audit - Q1 2026
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: FileText, value: pdfAssets.length.toString(), label: "PDF Assets", color: "text-[#1E3A5F]" },
            { icon: BarChart3, value: `${progress}%`, label: "Audit Complete", color: "text-[#FF6B35]" },
            { icon: AlertTriangle, value: auditItems.filter((i) => i.status === "overdue").length.toString(), label: "Overdue Items", color: "text-red-600" },
            { icon: Users, value: "150+", label: "Plants Served", color: "text-green-600" },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-xl border border-[#E8EAED] p-4">
                <Icon className={`w-4 h-4 ${stat.color} mb-2`} />
                <p className={`font-[var(--font-mono)] text-[22px] ${stat.color}`}>{stat.value}</p>
                <p className="text-[11px] text-[#5A6B7D]">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quarterly Audit Checklist */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-[#E8EAED] overflow-hidden">
              <div className="px-5 py-4 border-b border-[#E8EAED] flex items-center justify-between">
                <div>
                  <h2 className="text-[#1E3A5F] text-[16px]">Quarterly Content Audit</h2>
                  <p className="font-[var(--font-mono)] text-[10px] text-[#5A6B7D]">
                    {completedCount}/{totalItems} tasks completed ({progress}%)
                  </p>
                </div>
                <div className="w-32 h-2 bg-[#E8EAED] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#FF6B35] rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="divide-y divide-[#E8EAED]">
                {auditItems.map((item) => {
                  const isComplete = completedItems.includes(item.id);
                  return (
                    <div key={item.id} className="px-5 py-3 flex items-center gap-3 hover:bg-[#F5F5F5]/50 transition-colors">
                      <button
                        onClick={() => toggleItem(item.id)}
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                          isComplete ? "bg-green-600 border-green-600" : "border-[#E8EAED] hover:border-[#FF6B35]"
                        }`}
                      >
                        {isComplete && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                      <div className="flex-1">
                        <p className={`text-[13px] ${isComplete ? "text-[#5A6B7D] line-through" : "text-[#1E3A5F]"}`}>
                          {item.task}
                        </p>
                        <div className="flex items-center gap-3 mt-0.5">
                          <span className="font-[var(--font-mono)] text-[9px] text-[#5A6B7D]">{item.section}</span>
                          <span className="text-[#E8EAED]">|</span>
                          <span className="font-[var(--font-mono)] text-[9px] text-[#5A6B7D]">Last: {item.lastDone}</span>
                        </div>
                      </div>
                      {item.status === "overdue" && !isComplete && (
                        <span className="px-2 py-0.5 rounded bg-red-100 text-red-700 text-[9px] font-[var(--font-mono)] uppercase">Overdue</span>
                      )}
                      {item.status === "due" && !isComplete && (
                        <span className="px-2 py-0.5 rounded bg-[#FF6B35]/10 text-[#FF6B35] text-[9px] font-[var(--font-mono)] uppercase">Due</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* PDF Assets Panel */}
          <div>
            <div className="bg-white rounded-xl border border-[#E8EAED] overflow-hidden">
              <div className="px-5 py-4 border-b border-[#E8EAED]">
                <h2 className="text-[#1E3A5F] text-[16px]">PDF Assets</h2>
                <p className="font-[var(--font-mono)] text-[10px] text-[#5A6B7D]">Version control & downloads</p>
              </div>

              <div className="divide-y divide-[#E8EAED]">
                {pdfAssets.map((asset) => (
                  <div key={asset.name} className="px-5 py-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[12px] text-[#1E3A5F]">{asset.name}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="font-[var(--font-mono)] text-[10px] text-[#FF6B35]">{asset.version}</span>
                          <span className="text-[#E8EAED]">|</span>
                          <span className="font-[var(--font-mono)] text-[10px] text-[#5A6B7D]">{asset.updated}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-[var(--font-mono)] text-[11px] text-[#1E3A5F]">{asset.downloads}</span>
                        <p className="text-[8px] text-[#5A6B7D]">downloads</p>
                      </div>
                    </div>
                    {asset.status === "review" && (
                      <div className="mt-1.5 flex items-center gap-1">
                        <RefreshCw className="w-3 h-3 text-[#FF6B35]" />
                        <span className="text-[9px] text-[#FF6B35] font-[var(--font-mono)]">Review for update</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Next Audit Reminder */}
            <div className="bg-[#1E3A5F] rounded-xl p-5 mt-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-[#FF6B35]" />
                <span className="font-[var(--font-mono)] text-[11px] tracking-wider text-white/60">NEXT AUDIT</span>
              </div>
              <p className="text-[14px]">Q2 2026 - June 2026</p>
              <p className="text-white/50 text-[11px] mt-1">
                Review all OEM matrices, update project counters, verify PDF versions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
