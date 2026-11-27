import React from "react";
import { COMPANY_DATA } from "@/data/company";
import { BRAND_COLORS } from "@/lib/tokens";
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

export function StatsBar() {
  return (
    <section
      className="relative z-20 -mt-11 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
      aria-label="Company highlights"
    >
      <SpotlightCard
        maxTilt={1.5}
        hoverScale={1.005}
        className="relative bg-white border border-border-subtle rounded-2xl shadow-stat p-3 sm:p-5 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-0 lg:divide-x divide-border-subtle overflow-hidden"
      >
        <BorderBeam
          duration={4.5}
          size={90}
          borderWidth={1.5}
          colorFrom={BRAND_COLORS.red}
          colorTo={BRAND_COLORS.gold}
        />
        {COMPANY_DATA.stats.map((stat) => (
          <StatMetric
            key={stat.label}
            icon={STAT_ICON_BY_LABEL[stat.label] ?? Warehouse}
            metric={stat.metric}
            label={stat.label}
            subtext={stat.subtext}
          />
        ))}
      </SpotlightCard>
    </section>
  );
}
