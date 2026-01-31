import { TrendingUp, MousePointer2, Target, DollarSign } from "lucide-react";
import data from "../../../data/marketing_data.json";

export default function MarketingDashboard() {
  return (
    <div className="bg-base-200 p-4 border border-base-300 font-mono">
      <div className="mb-4 flex justify-between items-center">
        <span className="text-[10px] bg-primary text-primary-content px-2 py-1 uppercase font-bold">Meta Ads API & GA4</span>
      </div>

      {/* Grid de Métricas Principales */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
        <div className="bg-base-100 border border-base-300 p-4">
          <div className="text-[10px] opacity-50 uppercase">Inversión</div>
          <div className="text-xl font-black">${data.summary.total_spend}</div>
        </div>
        <div className="bg-base-100 border border-base-300 p-4">
          <div className="text-[10px] opacity-50 uppercase">ROAS</div>
          <div className="text-xl font-black text-primary">{data.summary.roas}x</div>
        </div>
        <div className="bg-base-100 border border-base-300 p-4">
          <div className="text-[10px] opacity-50 uppercase">CPA</div>
          <div className="text-xl font-black">${data.summary.avg_cpa}</div>
        </div>
        <div className="bg-base-100 border border-base-300 p-4">
          <div className="text-[10px] opacity-50 uppercase">Ventas</div>
          <div className="text-xl font-black">${data.summary.total_sales}</div>
        </div>
      </div>

      {/* Tabla de Campañas */}
      <div className="overflow-x-auto border border-base-300 bg-base-100">
        <table className="table table-xs uppercase text-[9px]">
          <thead>
            <tr className="bg-base-200">
              <th>Nombre_camapaña</th>
              <th>Inversión</th>
              <th>CTR%</th>
              <th>Conv.</th>
            </tr>
          </thead>
          <tbody>
            {data.campaigns.map((camp, i) => (
              <tr key={i} className="hover:bg-primary/5 transition-colors">
                <td className="font-bold">{camp.name}</td>
                <td>${camp.spend}</td>
                <td className={camp.ctr > 3 ? "text-primary" : ""}>{camp.ctr}%</td>
                <td>{camp.conversions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}