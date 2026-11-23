import { COMPANY_DATA } from "@/data/company";
import { Layers, Store, Truck, Warehouse } from "lucide-react";

export function StatsBar() {
  return (
    <section className='stats-wrap' aria-label='Company highlights'>
      <div className='stats-card'>
        {/* Stat 1: 3 Warehouses */}
        <div className='stat'>
          <Warehouse color='crimson' size='40px' />
          <div className='stat-content'>
            <strong className='stat-metric'>{COMPANY_DATA.stats[0].metric}</strong>
            <span className='stat-desc'>
              <span className='stat-label'>{COMPANY_DATA.stats[0].label}</span>
              <br />
              {COMPANY_DATA.stats[0].subtext}
            </span>
          </div>
        </div>

        {/* Stat 2: 2 Retail Stores */}
        <div className='stat'>
          <Store color='crimson' size='40px' />
          <div className='stat-content'>
            <strong className='stat-metric'>{COMPANY_DATA.stats[1].metric}</strong>
            <span className='stat-desc'>
              <span className='stat-label'>{COMPANY_DATA.stats[1].label}</span>
              <br />
              {COMPANY_DATA.stats[1].subtext}
            </span>
          </div>
        </div>

        {/* Stat 3: 500+ Bulk SKUs */}
        <div className='stat'>
          <Layers color='crimson' size='40px' />
          <div className='stat-content'>
            <strong className='stat-metric'>{COMPANY_DATA.stats[2].metric}</strong>
            <span className='stat-desc'>
              <span className='stat-label'>{COMPANY_DATA.stats[2].label}</span>
              <br />
              {COMPANY_DATA.stats[2].subtext}
            </span>
          </div>
        </div>

        {/* Stat 4: Fast KSA Dispatch */}
        <div className='stat'>
          <Truck color='crimson' size='40px' />
          <div className='stat-content'>
            <strong className='stat-metric'>{COMPANY_DATA.stats[3].metric}</strong>
            <span className='stat-desc'>
              <span className='stat-label'>{COMPANY_DATA.stats[3].label}</span>
              <br />
              {COMPANY_DATA.stats[3].subtext}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
