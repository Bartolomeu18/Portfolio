import bartolomeu from "../../assets/profissional.png";
//icons
import { IoIosSpeedometer } from "react-icons/io";
import { FaPaintBrush } from "react-icons/fa";
export default function About() {
  return (
    <section
      id="sobre"
      className="py-32 px-6 md:px-[6%] bg-gradient-to-b from-bg to-[#0F172A] relative overflow-hidden"
    >
      {/* Decorative element */}
      <div className="absolute top-20 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative">
        <div>
          <h2 className="font-display text-5xl font-extrabold mb-6 text-text">
            Dev apaixonado <span className="text-accent">por código</span>
          </h2>

          <p className="text-muted mb-6 leading-relaxed text-lg">
            Com mais de 3 anos de experiência em desenvolvimento web, tenho criado soluções
            modernas focadas em performance e UX excepcional.
          </p>

          <p className="text-muted mb-8 leading-relaxed text-lg">
            Meu foco é transformar ideias criativas em produtos digitais funcionais, combinando
            design moderno com código limpo e otimizado.
          </p>

          <div className="flex gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center text-accent text-xl">
               <IoIosSpeedometer />
              </div>

              <div>
                <p className="font-bold text-text">Performance</p>
                <p className="text-muted text-sm">Sites rápidos e otimizados</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center text-accent text-xl">
                <FaPaintBrush />
              </div>

              <div>
                <p className="font-bold text-text">Design</p>
                <p className="text-muted text-sm">Interfaces modernas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
         <div className="absolute inset-0" />
          <div className="bg-gradient-to-br from-card rounded-2xl p-12 text-center relative">
            <img
              src={bartolomeu}
              alt="Bartolomeu"
              className="w-full max-w-sm mx-auto  object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
}