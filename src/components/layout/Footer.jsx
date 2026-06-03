export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-[6%] border-t border-border/50 bg-gradient-to-t from-[#0F172A] to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-display text-lg font-extrabold text-accent mb-2">Bartolomeu.Dev</p>
            <p className="text-muted text-sm">Desenvolvedor Fullstack criando experiências web modernas</p>
          </div>
          
          <div>
            <p className="text-accent font-semibold mb-3">Links Rápidos</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-muted hover:text-accent transition">Início</a></li>
              <li><a href="#sobre" className="text-muted hover:text-accent transition">Sobre</a></li>
              <li><a href="#projetos" className="text-muted hover:text-accent transition">Projetos</a></li>
            </ul>
          </div>

          <div>
            <p className="text-accent font-semibold mb-3">Redes Sociais</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted hover:text-accent transition">GitHub</a></li>
              <li><a href="#" className="text-muted hover:text-accent transition">LinkedIn</a></li>
              <li><a href="#" className="text-muted hover:text-accent transition">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center text-muted text-sm">
          <span>© {currentYear} Bartolomeu.Dev. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}