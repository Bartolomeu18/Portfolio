const SKILLS = [
  { name: "React ", pct: 90 },
  { name: "JavaScript", pct: 85 },
  { name: "Tailwind CSS", pct: 90 },
  { name: "PHP", pct: 80 },
  { name: "Laravel", pct: 80 },
  { name: "MySQL", pct: 80 },
  { name: "IA", pct: 80 },
   { name: "Github", pct: 90 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-[6%] bg-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-5xl font-extrabold mb-4">
          Skills & Expertise
        </h2>
        <p className="text-muted mb-12 text-lg">Tecnologias que domino e uso em meus projetos</p>

        <div className="grid md:grid-cols-2 gap-12">
          {SKILLS.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between mb-3">
                <span className="font-semibold text-text">{s.name}</span>
                <span className="text-accent font-bold">{s.pct}%</span>
              </div>

              <div className="h-3 bg-card border border-border rounded-full overflow-hidden relative">
                <div
                  className="h-full bg-gradient-to-r from-accent to-blue-500 rounded-full transition-all duration-500"
                  style={{ width: `${s.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}