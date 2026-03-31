import { Download, FileText, Search, Filter } from "lucide-react";
import { useState } from "react";

interface SpecSheet {
  id: string;
  name: string;
  category: string;
  version: string;
  lastUpdated: string;
  fileSize: string;
  compatibility: string[];
  type: "datasheet" | "manual" | "certificate";
}

const specSheets: SpecSheet[] = [
  {
    id: "1",
    name: "Digital Turbine Governor - DTG-3000 Series",
    category: "Governors",
    version: "v3.2",
    lastUpdated: "Feb 2026",
    fileSize: "2.4 MB",
    compatibility: ["BHEL", "Siemens", "Alstom"],
    type: "datasheet",
  },
  {
    id: "2",
    name: "Hydraulic Actuator - HA-500 Retrofit Kit",
    category: "Actuators",
    version: "v2.1",
    lastUpdated: "Jan 2026",
    fileSize: "1.8 MB",
    compatibility: ["Voith", "Woodward", "BHEL"],
    type: "datasheet",
  },
  {
    id: "3",
    name: "Numerical Protection Relay - NPR-21",
    category: "Protection Relays",
    version: "v4.0",
    lastUpdated: "Dec 2025",
    fileSize: "3.1 MB",
    compatibility: ["Siemens", "ABB", "Crompton Greaves"],
    type: "datasheet",
  },
  {
    id: "4",
    name: "Speed Sensor Module - SSM-100",
    category: "Sensors",
    version: "v1.4",
    lastUpdated: "Nov 2025",
    fileSize: "890 KB",
    compatibility: ["BHEL", "Siemens", "Alstom", "Crompton Greaves"],
    type: "datasheet",
  },
  {
    id: "5",
    name: "Electro-Hydraulic Governor - EHG-2000",
    category: "Governors",
    version: "v2.8",
    lastUpdated: "Oct 2025",
    fileSize: "2.9 MB",
    compatibility: ["BHEL", "Voith", "Woodward"],
    type: "datasheet",
  },
  {
    id: "6",
    name: "Turbine Control Panel - TCP-500",
    category: "Control Panels",
    version: "v3.0",
    lastUpdated: "Jan 2026",
    fileSize: "4.2 MB",
    compatibility: ["BHEL", "Siemens", "Alstom"],
    type: "manual",
  },
  {
    id: "7",
    name: "Condition-Based Repair Criteria Manual",
    category: "Methodology",
    version: "v2.4",
    lastUpdated: "Oct 2025",
    fileSize: "1.6 MB",
    compatibility: [],
    type: "manual",
  },
  {
    id: "8",
    name: "ISO 9001:2015 Certification",
    category: "Certifications",
    version: "Current",
    lastUpdated: "Mar 2025",
    fileSize: "540 KB",
    compatibility: [],
    type: "certificate",
  },
];

const categories = ["All", "Governors", "Actuators", "Protection Relays", "Sensors", "Control Panels", "Methodology", "Certifications"];

export function SpecSheetTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = specSheets.filter((sheet) => {
    const matchesSearch = sheet.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || sheet.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const typeColors: Record<string, string> = {
    datasheet: "bg-[#1E3A5F]/10 text-[#1E3A5F]",
    manual: "bg-[#FF6B35]/10 text-[#FF6B35]",
    certificate: "bg-green-100 text-green-700",
  };

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A6B7D]" />
          <input
            type="text"
            placeholder="Search spec sheets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-[#E8EAED] rounded-lg text-[13px] bg-white focus:outline-none focus:border-[#1E3A5F]"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A6B7D]" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="pl-10 pr-8 py-2.5 border border-[#E8EAED] rounded-lg text-[13px] bg-white focus:outline-none focus:border-[#1E3A5F] appearance-none"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-[#E8EAED] overflow-hidden">
        {/* Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-5 py-3 bg-[#1E3A5F] text-white font-[var(--font-mono)] text-[11px] tracking-wider">
          <div className="col-span-4">DOCUMENT</div>
          <div className="col-span-2">TYPE</div>
          <div className="col-span-2">VERSION</div>
          <div className="col-span-2">COMPATIBILITY</div>
          <div className="col-span-2 text-right">DOWNLOAD</div>
        </div>

        {/* Rows */}
        {filtered.map((sheet, index) => (
          <div
            key={sheet.id}
            className={`grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-5 py-4 items-center ${
              index < filtered.length - 1 ? "border-b border-[#E8EAED]" : ""
            } hover:bg-[#F5F5F5]/50 transition-colors`}
          >
            {/* Document */}
            <div className="md:col-span-4">
              <div className="flex items-start gap-2">
                <FileText className="w-4 h-4 text-[#1E3A5F]/50 mt-0.5 shrink-0" />
                <div>
                  <p className="text-[13px] text-[#1E3A5F]">{sheet.name}</p>
                  <p className="font-[var(--font-mono)] text-[10px] text-[#5A6B7D] mt-0.5">
                    {sheet.fileSize}
                  </p>
                </div>
              </div>
            </div>

            {/* Type */}
            <div className="md:col-span-2">
              <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-[var(--font-mono)] uppercase tracking-wider ${typeColors[sheet.type]}`}>
                {sheet.type}
              </span>
            </div>

            {/* Version */}
            <div className="md:col-span-2">
              <span className="font-[var(--font-mono)] text-[12px] text-[#1E3A5F]">
                {sheet.version}
              </span>
              <span className="block font-[var(--font-mono)] text-[10px] text-[#5A6B7D]">
                Updated {sheet.lastUpdated}
              </span>
            </div>

            {/* Compatibility */}
            <div className="md:col-span-2">
              <div className="flex flex-wrap gap-1">
                {sheet.compatibility.length > 0 ? (
                  sheet.compatibility.map((comp) => (
                    <span
                      key={comp}
                      className="px-1.5 py-0.5 bg-[#1E3A5F]/5 rounded text-[10px] font-[var(--font-mono)] text-[#1E3A5F]"
                    >
                      {comp}
                    </span>
                  ))
                ) : (
                  <span className="text-[11px] text-[#5A6B7D]">--</span>
                )}
              </div>
            </div>

            {/* Download */}
            <div className="md:col-span-2 md:text-right">
              <button className="inline-flex items-center gap-1.5 bg-[#1E3A5F] hover:bg-[#162f4d] text-white px-3 py-1.5 rounded text-[12px] font-[var(--font-mono)] transition-colors">
                <Download className="w-3 h-3" />
                PDF
              </button>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="px-5 py-12 text-center">
            <p className="text-[14px] text-[#5A6B7D]">No spec sheets match your search.</p>
          </div>
        )}
      </div>

      <p className="mt-3 font-[var(--font-mono)] text-[10px] text-[#5A6B7D] text-center">
        All documents version-controlled. Last audit: Q1 2026.
      </p>
    </div>
  );
}
