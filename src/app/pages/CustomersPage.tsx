import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Breadcrumb } from "../components/Breadcrumb";
import { PageTimestamp } from "../components/PageTimestamp";
import { X } from "lucide-react";

import abbLogo from "../../../imageAssets/abb-1.svg";
import adityaBirlaLogo from "../../../imageAssets/Aditya_Birla_Group_Logo.svg.png";
import cccLogo from "../../../imageAssets/ccc.jpg";
import bidcoAfricaLogo from "../../../imageAssets/bidco africa.png";
import hckLogo from "../../../imageAssets/hck.jpg";
import kabrasLogo from "../../../imageAssets/kabras.png";
import nhpcLogo from "../../../imageAssets/nhpc-limited6715.jpg";
import rashmiLogo from "../../../imageAssets/rashmi.png";
import sicagenIndiaLogo from "../../../imageAssets/sicagen_india_logo.jpg";
import siemensLogo from "../../../imageAssets/Siemens_logo_16-9.png";
import sukariLogo from "../../../imageAssets/sukari.jpg";
import tataSteelLogo from "../../../imageAssets/tatasteel.png";
import triSenLogo from "../../../imageAssets/Tri-Sen-Logo.webp";

interface Client {
  name: string;
  abbr: string;
  sector: string;
  supplied: string;
  capacity?: string;
  logo?: string;
}

const clients: Client[] = [
  // OEM
  { name: "ABB", abbr: "ABB", sector: "OEM", supplied: "Client reference", logo: abbLogo },
  { name: "Siemens", abbr: "SIE", sector: "OEM", supplied: "Client reference", logo: siemensLogo },
  { name: "CCC", abbr: "CCC", sector: "OEM", supplied: "Client reference", logo: cccLogo },
  { name: "Tri-sen", abbr: "TRI", sector: "OEM", supplied: "Client reference", logo: triSenLogo },
  { name: "DEIF", abbr: "DEIF", sector: "OEM", supplied: "Governor and protection system partnership" },
  { name: "Voith Turbo machineries", abbr: "VOITH", sector: "OEM", supplied: "Hydraulic system components and support" },
  
  // Public Sector
  { name: "Mahagenco", abbr: "MGEN", sector: "Public sector", supplied: "Governor retrofits and LTSA for Maharashtra thermal power plants", capacity: "Multiple units" },
  { name: "NHPC Limited", abbr: "NHPC", sector: "Public sector", supplied: "Hydroelectric station upgrades and maintenance", logo: nhpcLogo },
  { name: "KSEB", abbr: "KSEB", sector: "Public sector", supplied: "Governor system upgrades for Kerala hydroelectric stations", capacity: "Multiple" },
  
  // End User (India)
  { name: "HCK", abbr: "HCK", sector: "End User(India)", supplied: "Client reference", logo: hckLogo },
  { name: "Aditya Birla Group", abbr: "ABG", sector: "End User(India)", supplied: "Client reference", logo: adityaBirlaLogo },
  { name: "Haldia Petrochemicals", abbr: "HALD", sector: "End User(India)", supplied: "Captive power plant turbine retrofit and maintenance" },
  { name: "Rashmi Group", abbr: "RASH", sector: "End User(India)", supplied: "Client reference", logo: rashmiLogo },
  { name: "Tata Steel", abbr: "TS", sector: "End User(India)", supplied: "Client reference", logo: tataSteelLogo },
  { name: "Sanvijay Alloys & Power Pvt Ltd", abbr: "SANV", sector: "End User(India)", supplied: "Turbine governor retrofit and protection systems" },
  { name: "Jaypee Nigrie STPP ltd", abbr: "JAYPEE", sector: "End User(India)", supplied: "Steam turbine retrofit and annual maintenance" },
  
  // End User (Abroad)
  { name: "Mansa sugars Ltd", abbr: "MANSA", sector: "End User(Abroad)", supplied: "Turbine overhauling and LTSA services" },
  { name: "Mumias sugars ltd", abbr: "MUMIAS", sector: "End User(Abroad)", supplied: "Governor retrofit and performance optimization" },
  { name: "Hoima Sugar Ltd", abbr: "HOIMA", sector: "End User(Abroad)", supplied: "Cogeneration plant turbine services" },
  { name: "Kabras sugar ltd", abbr: "KAB", sector: "End User(Abroad)", supplied: "Client reference", logo: kabrasLogo },
  { name: "Sukari Industries Ltd", abbr: "SUK", sector: "End User(Abroad)", supplied: "Client reference", logo: sukariLogo },
  { name: "Bidco Africa", abbr: "BIDCO", sector: "End User(Abroad)", supplied: "Client reference", logo: bidcoAfricaLogo },
  { name: "Indorama (ICS, Senegal)", abbr: "INDOR", sector: "End User(Abroad)", supplied: "Turbine control and protection systems" },
  
  // System Houses
  { name: "Sicagen India", abbr: "SICA", sector: "System House", supplied: "Client reference", logo: sicagenIndiaLogo },
];

const sectors = ["All", "OEM", "Public sector", "End User(India)", "End User(Abroad)", "System House"];

const logoClientsCount = clients.filter((c) => c.logo).length;

export function CustomersPage() {
  const [filter, setFilter] = useState("All");
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const filtered = (filter === "All" ? clients : clients.filter((c) => c.sector === filter)).filter((c) => !!c.logo);

  return (
    <div>
      <section className="bg-[#1A2A3A] text-white py-12">
        <div className="site-shell">
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
        <div className="site-shell py-3">
          <div className="flex flex-wrap gap-2">
            {sectors.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-4 py-1.5 rounded-full text-[12px] font-[var(--font-heading)] tracking-wider transition-colors ${
                  filter === s ? "bg-[#1A2A3A] text-white" : "bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]"
                }`}
              >
                {s}{" "}
                {s !== "All" && (
                  <span className="text-[10px] opacity-60">({clients.filter((c) => c.sector === s && c.logo).length})</span>
                )}
                {s === "All" && <span className="text-[10px] opacity-60">({logoClientsCount})</span>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Client Grid */}
      <section className="py-14 bg-[#F3F4F6]">
        <div className="site-shell">
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
                  {client.logo ? (
                    <img src={client.logo} alt={`${client.name} logo`} className="h-10 w-full object-contain mx-auto" />
                  ) : (
                    client.abbr
                  )}
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
