import thewinners from "../../assets/Thewinners.png";
import pedropitagoras from "../../assets/pedropitagoras.png";
import DDkmotos from "../../assets/DDK-motos.png";
//icons
import { FaGithub } from "react-icons/fa";

const PROJECTS = [
  {
    title: "Consultorio Winners",
    desc: "Site Institucional para consultório contablistico da Empresa The Winners Consultorio",
    icon: { src: thewinners, alt: "The Winners Consultorio" },
    color: "from-blue-500 to-cyan-400",
    github: "https://github.com/Bartolomeu18/thewinners-consultorio",
    tech: ["PHP", "Tailwind css"],
  },
  {
    title: "Colegio Pedro Pitagoras",
    desc: "Site Institucional para o Colégio Pedro Pitagoras",
    icon: { src: pedropitagoras, alt: "Colegio Pedro Pitagoras" },
    color: "from-purple-500 to-pink-400",
    github: "https://github.com/Bartolomeu18/SitePedroPitagoras-",
    tech: ["Html", "css", "JavaScript", "Bootstrap"],
  },
  {
    title: "DDk-Motos",
    desc: "Desenvolvi um sistema de gestão de motorizadas que ajuda a manter o controle das motorizadas e dos motoqueiros. f",
    icon: { src: DDkmotos, alt: "DDk'motos" },
    color: "from-orange-500 to-red-400",
    github: "https://github.com/Bartolomeu18/DDK-Motos",
    tech: ["Laravel", "Tailwind css", "MySQL"],
  },
];

export default function Projects() {
  return (
    <section
      id="projetos"
      className="py-32 px-6 md:px-[6%] bg-gradient-to-b from-[#0F172A] to-bg relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-40 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <div className="mb-12">
          <h2 className="font-display text-5xl font-extrabold mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-muted text-lg">
            Trabalhos que mostram minha expertise em desenvolvimento web moderno
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p, idx) => (
            <div key={p.title} className="group relative">
              <div
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                }}
              />

              <div className="bg-gradient-to-br from-card to-[#1E293B] border border-accent/20 rounded-xl p-8 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-glowLg relative h-full group-hover:shadow-2xl group-hover:shadow-accent/20">
                <div
                  className={`text-4xl mb-4 w-fit bg-gradient-to-r ${p.color} bg-clip-text text-transparent`}
                >
                  <img src={p.icon.src} alt={p.icon.alt} />
                </div>
                <h3 className="font-bold text-xl mb-2 text-text">{p.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {p.desc}
                </p>
                <div className="items-center text-accent text-sm  group-hover:gap-2 transition-all duration-300 mb-2">
                  <p className="font-bold mb-2">Tecnologias usadas</p>
                  <ul className="flex gap-3 text-blue-400">
                    {p.tech.map((tech) => (
                      <li key={tech} className="px-2 py-1 bg-blue-500/20 rounded">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="items-center text-accent text-sm font-semibold group-hover:gap-2 transition-all duration-300">
                <p className="font-bold mb-2">Repositório</p>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
