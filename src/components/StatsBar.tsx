import React from "react";
import { COMPANY_DATA } from "@/data/company";
import { BRAND_COLORS, SECTION_SPACING } from "@/lib/tokens";
import { Layers, Store, Truck, Warehouse, type LucideIcon } from "lucide-react";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { BorderBeam } from "@/components/motion/BorderBeam";
import { StatMetric } from "@/components/StatMetric";

const STAT_ICON_BY_LABEL: Record<string, LucideIcon> = {
  Warehouses: Warehouse,
  "Retail Stores": Store,
  "Bulk SKUs": Layers,
  Dispatch: Truck,
};

const CELL_BORDER_CLASSES = [
  "border-r border-b lg:border-b-0 border-border-subtle",
  "border-b lg:border-b-0 lg:border-r border-border-subtle",
  "border-r border-border-subtle",
  "",
] as const;

export function StatsBar() {
  return (
    <section
      className={`relative z-20 -mt-11 ${SECTION_SPACING.container} w-full`}
      aria-label="Company highlights"
    >
      <SpotlightCard
        maxTilt={1.5}
        hoverScale={1.005}
        className="relative bg-white border border-border-subtle rounded-2xl shadow-stat p-2 sm:p-4 lg:p-5 grid grid-cols-2 lg:grid-cols-4 gap-0 overflow-hidden"
      >
        <BorderBeam
          duration={4.5}
          size={90}
          borderWidth={1.5}
          colorFrom={BRAND_COLORS.red}
          colorTo={BRAND_COLORS.gold}
        />
        {COMPANY_DATA.stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex items-center justify-center p-2 sm:p-3 lg:p-1 min-w-0 ${CELL_BORDER_CLASSES[index] ?? ""}`}
          >
            <StatMetric
              icon={STAT_ICON_BY_LABEL[stat.label] ?? Warehouse}
              metric={stat.metric}
              label={stat.label}
              subtext={stat.subtext}
            />
          </div>
        ))}
      </SpotlightCard>
    </section>
  );
}
