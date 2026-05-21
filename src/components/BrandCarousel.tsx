import { useEffect, useState } from "react";
import volkswagenLogo from "@/assets/brands/volkswagen.png";
import fiatLogo from "@/assets/brands/fiat.png";
import chevroletLogo from "@/assets/brands/chevrolet.png";
import fordLogo from "@/assets/brands/ford.png";
import toyotaLogo from "@/assets/brands/toyota.png";
import hondaLogo from "@/assets/brands/honda.png";
import renaultLogo from "@/assets/brands/renault.png";
import hyundaiLogo from "@/assets/brands/hyundai.png";
import nissanLogo from "@/assets/brands/nissan.png";
import jeepLogo from "@/assets/brands/jeep.png";
const brands = [{
  name: "Volkswagen",
  logo: volkswagenLogo
}, {
  name: "Fiat",
  logo: fiatLogo
}, {
  name: "Chevrolet",
  logo: chevroletLogo
}, {
  name: "Ford",
  logo: fordLogo
}, {
  name: "Toyota",
  logo: toyotaLogo
}, {
  name: "Honda",
  logo: hondaLogo
}, {
  name: "Renault",
  logo: renaultLogo
}, {
  name: "Hyundai",
  logo: hyundaiLogo
}, {
  name: "Nissan",
  logo: nissanLogo
}, {
  name: "Jeep",
  logo: jeepLogo
}];
const BrandCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % brands.length);
    }, 3000);
    
    return () => clearInterval(intervalId);
  }, []);

  return <section className="py-16 bg-secondary/20 overflow-hidden">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Peças para Todas as Marcas
        </h2>
        
        <div className="relative h-48 flex items-center justify-center">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="relative">
                <div className="w-64 h-32 bg-gradient-to-b from-muted to-muted/50 rounded-lg shadow-xl flex items-center justify-center border-2 border-border">
                  <img 
                    src={brand.logo} 
                    alt={`Peças para ${brand.name}`} 
                    className="max-w-[200px] max-h-[80px] object-contain" 
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-56 h-3 bg-muted/30 rounded-full blur-sm" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-2 mt-8">
          {brands.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30'
              }`}
              aria-label={`Ir para marca ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>;
};
export default BrandCarousel;