import { Code2, Database, Menu } from "lucide-react";

export default function Navbar() {

  const closeDropdown = () => {
    const elem = document.activeElement;
    if (elem) {
      elem.blur();
    }
  };
  return (
    <div className="navbar bg-base-100 border-b border-base-300 px-4 md:px-8 sticky top-0 z-50">
      <div className="flex-1">
        <a className="text-xl font-black tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-primary text-primary-content flex items-center justify-center font-mono text-xs">
            LB
          </div>
          LIOBARROZO
        </a>
      </div>
      <div className="flex-none gap-2">
        {/* Menú Desktop */}
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal px-1 font-mono text-xs uppercase tracking-widest font-bold">
            <li><a href="#skills">Skills</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        {/* Menú Mobile (Dropdown) */}
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <Menu size={20} />
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 border border-base-300 w-52 font-mono uppercase text-xs">
            <li><a href="#skills" onClick={closeDropdown}>Skills</a></li>
            <li><a href="#proyectos" onClick={closeDropdown}>Proyectos</a></li>
            <li><a href="#contacto" onClick={closeDropdown}>Contacto</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}