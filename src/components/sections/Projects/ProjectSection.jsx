import { useState } from "react";
import ProjectCard from "./ProjectCard";
import MarketingDashboard from "./MarketingDashboard"; // El componente de datos que creamos
import projectsData from "../../../data/projects.json";
import { X } from "lucide-react";

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="drawer drawer-end">
      <input id="project-drawer" type="checkbox" className="drawer-toggle" checked={!!selectedProject} onChange={() => setSelectedProject(null)} />
      
      <div className="drawer-content">
        {/* Contenido principal de la sección */}
        <section id="proyectos" className="px-6 py-20 md:px-10 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12">
            <span className="text-primary">Projectos</span> seleccionados_
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-base-300">
            {projectsData.map((project) => (
              <div key={project.id} className="border-r border-b border-base-300">
                <ProjectCard 
                  project={project} 
                  onOpenDetails={(p) => setSelectedProject(p)} 
                />
              </div>
            ))}
          </div>
        </section>
      </div> 

      {/* Lado del Canvas (Drawer Side) */}
      <div className="drawer-side z-[100]">
        <label htmlFor="project-drawer" className="drawer-overlay"></label>
        <div className="menu p-0 w-full md:w-[600px] min-h-full bg-base-100 text-base-content border-l border-base-300 shadow-2xl">
          {selectedProject && (
            <div className="flex flex-col h-full">
              {/* Header del Canvas */}
              <div className="p-6 border-b border-base-300 flex justify-between items-center bg-base-200">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">Detalles del proyecto // {selectedProject.id}</span>
                <button onClick={() => setSelectedProject(null)} className="btn btn-ghost btn-sm btn-square">
                  <X size={20} />
                </button>
              </div>

              {/* Contenido del Canvas */}
              <div className="p-8 overflow-y-auto flex-grow font-mono">
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 leading-none">
                  {selectedProject.title}
                </h2>
                
                <div className="flex gap-2 mb-8">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="badge badge-outline rounded-none text-[10px]">{tag}</span>
                  ))}
                </div>

                <div className="prose prose-sm mb-10">
                  <p className="text-lg leading-relaxed">{selectedProject.description}</p>
                </div>

                {/* Si es el proyecto 1, mostramos el dashboard real */}
                {selectedProject.id === 1 && (
                  <div className="mt-6 border-t border-base-300 pt-8">
                    <h4 className="text-sm font-bold uppercase mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary animate-pulse"></div> 
                      Análisis de Performance
                    </h4>
                    <MarketingDashboard />
                  </div>
                )}
                
                <div className={`grid gap-4 mt-12 ${selectedProject.repoUrl && selectedProject.liveUrl ? 'grid-cols-2' : 'grid-cols-1'}`}>
                
                {selectedProject.repoUrl && (
                    <a 
                    href={selectedProject.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-neutral rounded-none uppercase font-bold tracking-widest text-xs"
                    >
                    Ver Código
                    </a>
                )}

                {selectedProject.liveUrl && (
                    <a 
                    href={selectedProject.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary rounded-none uppercase font-bold tracking-widest text-xs"
                    >
                    Demo en Vivo
                    </a>
                )}

                {!selectedProject.repoUrl && !selectedProject.liveUrl && (
                    <div className="p-4 border border-dashed border-base-300 text-center opacity-50">
                    <span className="font-mono text-[10px] uppercase">
                        No disponible por acuerdos de confidencialidad 
                    </span>
                    </div>
                )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}