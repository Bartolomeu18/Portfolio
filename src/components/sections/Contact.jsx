import { useState } from "react";
//icons
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    console.log("Formulário enviado:", formData);
    alert("Obrigado pela mensagem! Responderei em breve.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contato" className="py-32 px-6 md:px-[6%] bg-gradient-to-b from-bg to-[#0F172A] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="max-w-2xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl font-extrabold mb-4">
            Vamos <span className="text-accent">conversar</span>?
          </h2>
          <p className="text-muted text-lg">
            Tem um projeto em mente? Entre em contato e vamos dar vida à sua ideia.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome"
              className="w-full bg-card border border-border/50 hover:border-accent/50 focus:border-accent focus:outline-none p-4 rounded-lg text-text placeholder-muted/50 transition-colors duration-300"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu.email@exemplo.com"
              className="w-full bg-card border border-border/50 hover:border-accent/50 focus:border-accent focus:outline-none p-4 rounded-lg text-text placeholder-muted/50 transition-colors duration-300"
              required
            />
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Sua mensagem..."
              rows="6"
              className="w-full bg-card border border-border/50 hover:border-accent/50 focus:border-accent focus:outline-none p-4 rounded-lg text-text placeholder-muted/50 transition-colors duration-300 resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-accent to-blue-500 text-white font-bold py-3 rounded-lg hover:shadow-glowLg transition-all duration-300 hover:-translate-y-1 uppercase tracking-wider text-sm"
          >
            Enviar Mensagem
          </button>
        </form>

<div className="mt-12 grid md:grid-cols-3 gap-6 pt-8 ">
  
  <div className="flex justify-center">
    <a
      href="mailto:bartolomeunhongo@gmail.com"
      className="text-accent text-3xl hover:text-accent transition-colors duration-300"
    >
      <SiGmail />
    </a>
  </div>

  <div className="flex justify-center">
    <a
      href="https://www.linkedin.com/in/bartolomeu-sebastião-33a91b2b2"
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent text-3xl hover:text-accent transition-colors duration-300"
    >
      <FaLinkedinIn />
    </a>
  </div>

  <div className="flex justify-center">
    <a
      href="https://github.com/bartolomeu18"
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent text-3xl hover:text-accent transition-colors duration-300"
    >
      <FaGithub />
    </a>
  </div>

</div>
      </div>
    </section>
  );
}