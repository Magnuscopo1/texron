import { Check, X, Minus } from "lucide-react";
import { useState } from "react";

type CompatStatus = "full" | "partial" | "none" | "contact";

interface MatrixRow {
  product: string;
  productCode: string;
  oems: Record<string, CompatStatus>;
}

const oemHeaders = ["BHEL", "Siemens", "Alstom", "Crompton Greaves", "Voith", "Woodward", "ABB"];

const matrixData: MatrixRow[] = [
  {
    product: "Digital Governor DTG-3000",
    productCode: "DTG-3000",
    oems: { BHEL: "full", Siemens: "full", Alstom: "full", "Crompton Greaves": "partial", Voith: "none", Woodward: "partial", ABB: "contact" },
  },
  {
    product: "Electro-Hydraulic Governor EHG-2000",
    productCode: "EHG-2000",
    oems: { BHEL: "full", Siemens: "partial", Alstom: "partial", "Crompton Greaves": "none", Voith: "full", Woodward: "full", ABB: "none" },
  },
  {
    product: "Hydraulic Actuator HA-500",
    productCode: "HA-500",
    oems: { BHEL: "full", Siemens: "none", Alstom: "none", "Crompton Greaves": "none", Voith: "full", Woodward: "full", ABB: "none" },
  },
  {
    product: "Protection Relay NPR-21",
    productCode: "NPR-21",
    oems: { BHEL: "full", Siemens: "full", Alstom: "full", "Crompton Greaves": "full", Voith: "none", Woodward: "none", ABB: "full" },
  },
  {
    product: "Speed Sensor SSM-100",
    productCode: "SSM-100",
    oems: { BHEL: "full", Siemens: "full", Alstom: "full", "Crompton Greaves": "full", Voith: "partial", Woodward: "partial", ABB: "full" },
  },
  {
    product: "Turbine Control Panel TCP-500",
    productCode: "TCP-500",
    oems: { BHEL: "full", Siemens: "full", Alstom: "full", "Crompton Greaves": "partial", Voith: "none", Woodward: "none", ABB: "partial" },
  },
];

const statusIcon = (status: CompatStatus) => {
  switch (status) {
    case "full":
      return <Check className="w-4 h-4 text-green-600" />;
    case "partial":
      return <Minus className="w-4 h-4 text-[#FF6B35]" />;
    case "none":
      return <X className="w-4 h-4 text-red-400/60" />;
    case "contact":
      return <span className="text-[10px] font-[var(--font-mono)] text-blue-600">RFQ</span>;
  }
};

const statusLabel: Record<CompatStatus, string> = {
  full: "Fully Compatible",
  partial: "Adapter Required",
  none: "Not Compatible",
  contact: "Contact for Assessment",
};

export function CompatibilityMatrix() {
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);

  return (
    <div>
      <div className="bg-white rounded-xl border border-[#E8EAED] overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="bg-[#1E3A5F] text-white">
              <th className="text-left px-4 py-3 font-[var(--font-mono)] text-[11px] tracking-wider min-w-[200px]">
                TEXRON PRODUCT
              </th>
              {oemHeaders.map((oem) => (
                <th
                  key={oem}
                  className="text-center px-2 py-3 font-[var(--font-mono)] text-[10px] tracking-wider"
                >
                  {oem}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matrixData.map((row, index) => (
              <tr
                key={row.productCode}
                className={`${index % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]/50"} hover:bg-blue-50/30 transition-colors`}
              >
                <td className="px-4 py-3">
                  <p className="text-[13px] text-[#1E3A5F]">{row.product}</p>
                  <p className="font-[var(--font-mono)] text-[10px] text-[#5A6B7D]">{row.productCode}</p>
                </td>
                {oemHeaders.map((oem) => {
                  const status = row.oems[oem];
                  const cellKey = `${row.productCode}-${oem}`;
                  return (
                    <td
                      key={oem}
                      className="text-center px-2 py-3 relative"
                      onMouseEnter={() => setHoveredCell(cellKey)}
                      onMouseLeave={() => setHoveredCell(null)}
                    >
                      <div className="flex justify-center">{statusIcon(status)}</div>
                      {hoveredCell === cellKey && (
                        <div className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#1E3A5F] text-white rounded text-[10px] font-[var(--font-mono)] whitespace-nowrap">
                          {statusLabel[status]}
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4 justify-center">
        {(["full", "partial", "none", "contact"] as CompatStatus[]).map((status) => (
          <div key={status} className="flex items-center gap-1.5">
            {statusIcon(status)}
            <span className="font-[var(--font-mono)] text-[10px] text-[#5A6B7D]">
              {statusLabel[status]}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-3 font-[var(--font-mono)] text-[10px] text-[#5A6B7D] text-center">
        Matrix verified Q1 2026. Contact engineering for specific model/vintage compatibility.
      </p>
    </div>
  );
}
