import { BookmarkIcon, Zap, Users, Settings } from "lucide-react";
import { motion } from "motion/react";

type Stat = {
  icon: React.ElementType;
  value: string;
  label: string;
};

const stats: Stat[] = [
  {
    icon: BookmarkIcon,
    value: "30+",
    label: "Years Experience",
  },
  {
    icon: Settings,
    value: "500+",
    label: "Turbine Systems Serviced",
  },
  {
    icon: Users,
    value: "100+",
    label: "Clients",
  },
  {
    icon: Zap,
    value: "150MW",
    label: "Largest Unit Retrofitted",
  },
];

export function StatsHighlights() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white via-white to-[#F9F9F9]">
      <div className="site-shell">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="text-center flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/5 border border-[#FF6B35]/20">
                    <Icon className="w-8 h-8 text-[#FF6B35]" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#5A6B7D] text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
