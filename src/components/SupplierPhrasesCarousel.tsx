import { useState, useEffect } from "react";

const phrases = [
  "Conecte-se à maior rede de autopeças do Brasil",
  "Mais de 1.500 fornecedores homologados",
  "Qualidade e procedência garantidas",
  "Parceria que gera resultados",
  "Cresça conosco"
];

const SupplierPhrasesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setIsVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 md:h-10 flex items-center justify-center overflow-hidden">
      <p 
        className={`text-sm md:text-base font-bold text-center transition-all duration-500 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}
        style={{
          color: 'hsl(142, 76%, 50%)',
          textShadow: `
            0 0 5px hsl(142, 76%, 50%),
            0 0 15px hsl(142, 76%, 45%),
            0 0 30px hsl(142, 76%, 40%),
            0 0 50px hsl(142, 76%, 36%),
            0 0 70px hsl(142, 76%, 30%)
          `,
          letterSpacing: '0.05em'
        }}
      >
        {phrases[currentIndex]}
      </p>
    </div>
  );
};

export default SupplierPhrasesCarousel;
