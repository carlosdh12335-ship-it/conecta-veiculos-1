import { useState, useEffect } from "react";

const phrases = [
  "Encontre Qualquer Peça Automotiva com Garantia e Entrega Rápida",
  "Peças Originais e de Primeira Linha para Todo o Brasil",
  "Seu Veículo Merece o Melhor - Entrega Garantida",
  "Distribuidor especializado em peças automotivas com envio rápido e seguro para todo o Brasil",
  "Motores, câmbios, latarias e peças mecânicas para todas as marcas",
  "Estoque completo e pronta entrega para sua oficina",
  "Parcerias com as melhores marcas do mercado automotivo"
];

const PhrasesCarousel = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-background py-12">
      <div className="container">
        <h2 key={currentPhrase} className="text-3xl md:text-4xl font-bold text-center text-foreground animate-fade-in min-h-[100px] flex items-center justify-center">
          {phrases[currentPhrase]}
        </h2>
      </div>
    </section>
  );
};

export default PhrasesCarousel;
