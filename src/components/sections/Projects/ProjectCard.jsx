import { ArrowUpRight, Code2, Database } from "lucide-react";

export default function ProjectCard({ project, onOpenDetails }) {
  return (
    <div className="group border border-base-300 bg-base-100 hover:border-primary transition-all duration-300 flex flex-col h-full">
      <div className="p-4 border-b border-base-300 flex justify-between items-center bg-base-200/50">
        <div className="flex gap-2">
          {(project.type === 'dev' || project.type === 'dual') && (
            <div className="badge badge-outline border-base-300 rounded-none font-mono text-[10px] gap-1 px-2">
              <Code2 size={10} /> DEV
            </div>
          )}
          {(project.type === 'data' || project.type === 'dual') && (
            <div className="badge badge-primary rounded-none font-mono text-[10px] gap-1 px-2">
              <Database size={10} /> DATA
            </div>
          )}
        </div>
      </div>

      <div className="p-6 flex-grow">
        <h3 className="text-2xl font-black uppercase tracking-tighter mb-3">
          {project.title}
        </h3>
        <p className="text-sm opacity-70 mb-6">{project.description}</p>
      </div>

      <div className="p-4 border-t border-base-300 mt-auto">
        {/* Este botón ahora dispara la apertura del Drawer */}
        <button 
          onClick={() => onOpenDetails(project)}
          className="btn btn-ghost btn-sm w-full rounded-none font-mono uppercase tracking-widest text-xs group-hover:bg-primary group-hover:text-primary-content transition-all"
        >
          Ver Detalles <ArrowUpRight size={14} />
        </button>
      </div>
    </div>
  );
}