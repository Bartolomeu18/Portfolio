export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 md:px-[6%] relative overflow-hidden pt-20"
    >
    <div
    className="absolute inset-0 bg-cover bg-center opacity-20"
    // style={{ backgroundImage: "url('/')" }}
  ></div>
      {/* Dark overlay para melhor legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/40 -z-10" />

      {/* Background gradient effect */}
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full w-fit">
        <span className="w-2 h-2 bg-accent rounded-full shadow-[0_0_8px_#3B82F6] animate-pulse" />
        <span className="text-accent text-sm font-medium">
          Disponível para novos projetos
        </span>
      </div>

      <h1 className="font-display font-extrabold text-6xl md:text-8xl leading-[1] mt-8 bg-gradient-to-l from-text via-accent to-blue-400 bg-clip-text text-transparent">
        Olá, sou Bartolomeu
      </h1>

      <p className="text-muted mt-6 max-w-2xl leading-relaxed text-lg">
        Desenvolvedor Fullstack com paixão por criar interfaces modernas e responsivas. 
        Especialista em React, TypeScript e Tailwind CSS, transformando ideias em produtos digitais de alta qualidade.
      </p>

      <div className="flex gap-4 mt-12">
        <button
          onClick={() => scrollTo("projetos")}
          className="bg-gradient-to-l from-accent to-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:shadow-glowLg transition-all duration-300 hover:-translate-y-1"
        >
          Ver Projetos →
        </button>

        <button
           onClick={() => scrollTo("contato")}
          className="border border-accent/30 text-text px-8 py-3 rounded-lg hover:border-accent hover:bg-accent/10 hover:text-accent transition-all duration-300"
        >
          Entrar em Contato
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="text-accent text-2xl">↓</div>
      </div>
    </section>
  );
}