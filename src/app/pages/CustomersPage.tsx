import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Breadcrumb } from "../components/Breadcrumb";
import { PageTimestamp } from "../components/PageTimestamp";
import { X } from "lucide-react";

interface Client {
  name: string;
  abbr: string;
  sector: string;
  supplied: string;
  capacity?: string;
}

const clients: Client[] = [
  { name: "NTPC Limited", abbr: "NTPC", sector: "Thermal", supplied: "DTG-3000 Governor Retrofits, Protection Relay Upgrades for 210 MW and 500 MW units", capacity: "Multiple units" },
  { name: "BHEL", abbr: "BHEL", sector: "OEM", supplied: "Governor spare parts, control panel retrofits, reverse-engineered actuator components", capacity: "Vendor partnership" },
  { name: "KPCL", abbr: "KPCL", sector: "Thermal", supplied: "Complete turbine governor modernization for Raichur TPS and Bellary TPS units", capacity: "4 x 210 MW" },
  { name: "TANGEDCO", abbr: "TGC", sector: "Thermal", supplied: "RLA studies, governor retrofits, and protection relay upgrades across Tamil Nadu plants", capacity: "Multiple units" },
  { name: "NLC India", abbr: "NLC", sector: "Thermal", supplied: "Steam turbine governor retrofits and LTSA for lignite-fired units", capacity: "6 x 210 MW" },
  { name: "APGENCO", abbr: "APG", sector: "Thermal", supplied: "DTG-3000 governor systems, NPR-21 protection relays for Kothagudem and Vijayawada plants", capacity: "210-500 MW" },
  { name: "TSGENCO", abbr: "TSG", sector: "Thermal", supplied: "Governor retrofits and RLA studies for Telangana state power plants", capacity: "210 MW units" },
  { name: "JSW Energy", abbr: "JSW", sector: "Private", supplied: "Turbine control panel upgrades, hydraulic actuator refurbishment, annual maintenance", capacity: "300 MW" },
  { name: "Tata Power", abbr: "TATA", sector: "Private", supplied: "Protection system engineering and governor system commissioning support", capacity: "250 MW" },
  { name: "CESC Limited", abbr: "CESC", sector: "Private", supplied: "Electro-hydraulic governor modernization for Budge Budge and Titagarh plants", capacity: "120 MW" },
  { name: "XYZ Sugar Mills", abbr: "XYZ", sector: "Cogen", supplied: "Steam turbine retrofit and 5-year LTSA for extraction turbine cogeneration plant", capacity: "32 MW" },
  { name: "Karnataka Power Corp.", abbr: "KPC", sector: "Hydro", supplied: "Voith hydraulic actuator refurbishment and guide vane control for Francis turbines", capacity: "4 x 55 MW" },
  { name: "Kerala State Electricity", abbr: "KSEB", sector: "Hydro", supplied: "Governor system upgrades for Idukki and Sabarigiri hydroelectric stations", capacity: "Multiple" },
  { name: "Nagarjuna Fertilizers", abbr: "NFL", sector: "Cogen", supplied: "Captive power plant governor retrofit and protection relay upgrade", capacity: "30 MW" },
];

const sectors = ["All", "Thermal", "Hydro", "Private", "Cogen", "OEM"];

export function CustomersPage() {
  const [filter, setFilter] = useState("All");
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const filtered = filter === "All" ? clients : clients.filter((c) => c.sector === filter);

  return (
    <div>
      <section className="bg-[#1A2A3A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ label: "Customers" }]} />
          <h1 className="font-[var(--font-heading)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">Customers</h1>
          <h2 className="font-[var(--font-heading)] text-[32px] md:text-[40px] leading-tight mb-3 text-white">
            150+ Power Plants Served
          </h2>
          <p className="text-white/60 text-[15px] max-w-2xl">
            From NTPC's 500 MW units to 30 MW cogeneration plants. Click any client to see exactly what Texron provided.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b border-[#E5E7EB] sticky top-[88px] z-30">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-wrap gap-2">
            {sectors.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-4 py-1.5 rounded-full text-[12px] font-[var(--font-heading)] tracking-wider transition-colors ${
                  filter === s ? "bg-[#1A2A3A] text-white" : "bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]"
                }`}
              >
                {s} {s !== "All" && <span className="text-[10px] opacity-60">({clients.filter((c) => c.sector === s).length})</span>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Client Grid */}
      <section className="py-14 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filtered.map((client, i) => (
              <motion.button
                key={client.abbr}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.2 }}
                onClick={() => setSelectedClient(client)}
                className="bg-white border border-[#E5E7EB] rounded-xl p-5 text-center hover:shadow-lg hover:border-[#FF6B35]/30 transition-all group cursor-pointer"
              >
                <div className="font-[var(--font-heading)] text-[22px] text-[#1A2A3A]/50 group-hover:text-[#1A2A3A] transition-colors mb-1">
                  {client.abbr}
                </div>
                <p className="text-[10px] text-[#6B7280]">{client.name}</p>
                <div className="mt-2 px-2 py-0.5 bg-[#F3F4F6] rounded text-[9px] font-[var(--font-mono)] text-[#6B7280] inline-block">
                  {client.sector}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Client Detail Modal */}
      <AnimatePresence>
        {selectedClient && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            onClick={() => setSelectedClient(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
            >
              <div className="bg-[#1A2A3A] px-6 py-4 flex items-center justify-between">
                <div>
                  <span className="font-[var(--font-heading)] text-[#FF6B35] text-[20px]">{selectedClient.abbr}</span>
                  <p className="text-white/60 text-[12px]">{selectedClient.name}</p>
                </div>
                <button onClick={() => setSelectedClient(null)} className="text-white/40 hover:text-white p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="px-6 py-5">
                <div className="space-y-4">
                  <div>
                    <p className="font-[var(--font-heading)] text-[10px] text-[#FF6B35] tracking-[0.2em] mb-1">SECTOR</p>
                    <p className="text-[14px] text-[#1A2A3A]">{selectedClient.sector} Power</p>
                  </div>
                  {selectedClient.capacity && (
                    <div>
                      <p className="font-[var(--font-heading)] text-[10px] text-[#FF6B35] tracking-[0.2em] mb-1">CAPACITY</p>
                      <p className="text-[14px] text-[#1A2A3A]">{selectedClient.capacity}</p>
                    </div>
                  )}
                  <div>
                    <p className="font-[var(--font-heading)] text-[10px] text-[#FF6B35] tracking-[0.2em] mb-1">TEXRON SUPPLIED</p>
                    <p className="text-[13px] text-[#6B7280] leading-relaxed">{selectedClient.supplied}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <PageTimestamp lastUpdated="March 2026" nextAudit="Q2 2026" />
    </div>
  );
}
