const NAV = [
  { label: "Início", id: "home" },
  { label: "Sobre", id: "sobre" },
  { label: "Skills", id: "skills" },
  { label: "Projetos", id: "projetos" },
  { label: "Contato", id: "contato" },
];

export default function Navbar() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center justify-between px-6 md:px-[6%] bg-bg/90 backdrop-blur-xl border-b border-border">

      <span onClick={() => scrollTo("home")} className="font-display font-extrabold text-xl bg-gradient-to-l from-accent to-blue-400 bg-clip-text text-transparent cursor-pointer">
        Bartolomeu.Dev.
      </span>

      <div className="hidden md:flex gap-8 text-sm">
        {NAV.map((item) => (
          <span
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="text-muted hover:text-accent cursor-pointer transition"
          >
            {item.label}
          </span>
        ))}
      </div>

      <button
        onClick={() => scrollTo("contato")}
        className="bg-gradient-to-l from-accent to-blue-500 text-white font-bold px-5 py-2 rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
      >
       Contactar
      </button>
    </nav>
  );
}