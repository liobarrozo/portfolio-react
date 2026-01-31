import { Code2, Globe, Cpu, Layout } from "lucide-react";

const devTech = [
  { name: "React / Vite", level: "Intermedio", icon: <Layout size={16}/> },
  { name: "TailwindCSS", level: "Avanzado", icon: <Globe size={16}/> },
  { name: "Node.js", level: "Intermedio", icon: <Cpu size={16}/> },
];

export default function DevSkills() {
  return (
    <div className="collapse collapse-plus border border-base-300 rounded-none bg-base-100">
      <input type="radio" name="skills-accordion" defaultChecked /> 
      <div className="collapse-title text-xl font-black font-mono flex items-center gap-2">
        <Code2 className="text-primary" /> DEV_STACK
      </div>
      <div className="collapse-content">
        <div className="grid grid-cols-1 gap-2">
          {devTech.map((tech) => (
            <div key={tech.name} className="flex justify-between items-center p-3 border border-base-200 hover:border-primary transition-colors">
              <span className="flex items-center gap-2 font-bold">{tech.icon} {tech.name}</span>
              <span className="font-mono text-[10px] opacity-50 uppercase">{tech.level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}