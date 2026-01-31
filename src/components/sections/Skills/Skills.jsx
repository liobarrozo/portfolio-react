import DevSkills from "./DevSkills";
import DataSkills from "./DataSkills";

export default function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-16 md:px-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-black font-mono mb-8 tracking-tighter uppercase">
        Herramientas & <span className="text-primary">Especialización</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DevSkills />
        <DataSkills />
      </div>
    </section>
  );
}