import { Mail, Linkedin, Github, Send, Terminal } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="px-6 py-20 md:px-10 max-w-4xl mx-auto border-t border-base-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Columna Izquierda: Información */}
        <div>
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">
            Contacto<span className="text-primary">.py</span>
          </h2>
          <p className="text-sm font-mono opacity-70 mb-8 leading-relaxed">
            ¿Tienes un proyecto que requiere código sólido o una estrategia basada en datos? 
            Estoy disponible para colaboraciones y consultorías.
          </p>
          
          <div className="flex flex-col gap-4 font-mono text-xs uppercase tracking-widest">
            <a href="mailto:tu@email.com" className="flex items-center gap-3 hover:text-primary transition-colors">
              <Mail size={16} /> liobarrozo@solucionesandes.com
            </a>
            <a href="https://www.linkedin.com/in/alejo-leonel-barrozo-56b05527a/" className="flex items-center gap-3 hover:text-primary transition-colors">
              <Linkedin size={16} /> linkedin.com/in/alejo-leonel-barrozo-56b05527a/ 
            </a>
            <a href="https://github.com/liobarrozo" className="flex items-center gap-3 hover:text-primary transition-colors">
              <Github size={16} /> github.com/liobarrozo
            </a>
          </div>
        </div>

        {/* Columna Derecha: Formulario Estilo Consola */}
        <div className="border border-base-300 p-6 bg-base-200/30 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-base-300"></div>
          
          <form className="flex flex-col gap-4">
            <div className="form-control">
              <label className="label py-1">
                <span className="label-text font-mono text-[10px] uppercase opacity-50">User_Name</span>
              </label>
              <input 
                type="text" 
                placeholder="Nombre" 
                className="input input-bordered rounded-none bg-base-100 focus:outline-primary border-base-300 text-sm" 
              />
            </div>

            <div className="form-control">
              <label className="label py-1">
                <span className="label-text font-mono text-[10px] uppercase opacity-50">User_Email</span>
              </label>
              <input 
                type="email" 
                placeholder="Email" 
                className="input input-bordered rounded-none bg-base-100 focus:outline-primary border-base-300 text-sm" 
              />
            </div>

            <div className="form-control">
              <label className="label py-1">
                <span className="label-text font-mono text-[10px] uppercase opacity-50">Query_Message</span>
              </label>
              <textarea 
                className="textarea textarea-bordered rounded-none bg-base-100 focus:outline-primary border-base-300 h-32 text-sm" 
                placeholder="¿En qué puedo ayudarte?"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary rounded-none mt-2 font-mono uppercase tracking-widest gap-2">
              <Send size={14} /> Send_Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}