import TextType from "../animation/TextType";
import { Database, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-10 border-b border-base-300">
      <div className="max-w-4xl">
        {/* Subtítulo Técnico */}
        <div className="flex gap-4 mb-4 font-mono text-sm uppercase tracking-tighter opacity-60">
          <span className="flex items-center gap-1"><Code2 size={14}/> Full Stack Dev</span>
          <span className="opacity-30">/</span>
          <span className="flex items-center gap-1"><Database size={14}/> Data Analyst</span>
        </div>

        {/* Nombre con DecryptedText */}
        <h1 className="text-6xl md:text-8xl font-black uppercase mb-6 leading-none tracking-tighter">
          <TextType 
            text={"LIO BARROZO"}
            initialDelay={1500}
            typingSpeed={75}
            pauseDuration={5500}
            showCursor
            className="text-primary"
            cursorCharacter="▎"
            deletingSpeed={75}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
          />
        </h1>

        

       

        {/* Descripción Estratégica */}
        <p className="text-xl md:text-2xl max-w-2xl mb-10 leading-relaxed font-medium">
          Especialista en desarrollar aplicaciones de alto rendimiento y transformar 
          volúmenes de datos en <span className="underline decoration-primary decoration-2 underline-offset-4">ventajas competitivas</span>.
        </p>

        {/* CTAs estilo Lofi */}
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-neutral rounded-none btn-lg px-8 font-bold"
          >
            Explorar Proyectos
          </button>
          <a 
            href="/CV_Alejo-Barrozo.pdf" // Nombre exacto del archivo en la carpeta public
            target="_blank" 
            rel="noopener noreferrer"
            download="CV_Lio_Barrozo_Dev_Analyst.pdf" // Nombre con el que se descargará
            className="btn btn-outline rounded-none btn-lg px-8 font-bold"
          >
            Descargar CV (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}