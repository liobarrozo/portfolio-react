import { Database, Table, BarChart3, Terminal } from "lucide-react";

const dataTech = [
  { name: "SQL (Postgres)", level: "Avanzado", icon: <Database size={16}/> },
  { name: "Python (Pandas/NumPy)", level: "Avanzado", icon: <Terminal size={16}/> },
  { name: "Looker Studio", level: "Intermedio" , icon: <BarChart3 size={16}/> }, // Alternativa a PowerBI
  { name: "Excel", level: "Intermedio", icon: <Table size={16}/> },
];

export default function DataSkills() {
  return (
    <div className="collapse collapse-plus border border-base-300 rounded-none bg-base-100">
      <input type="radio" name="skills-accordion" defaultChecked /> 
      <div className="collapse-title text-xl font-black font-mono flex items-center gap-2">
        <Database className="text-primary" /> DATA_STACK
      </div>
      <div className="collapse-content">
        <div className="grid grid-cols-1 gap-2">
          {dataTech.map((data) => (
            <div key={data.name} className="flex justify-between items-center p-3 border border-base-200 hover:border-primary transition-colors">
              <span className="flex items-center gap-2 font-bold">{data.icon} {data.name}</span>
              <span className="font-mono text-[10px] opacity-50 uppercase">{data.level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}