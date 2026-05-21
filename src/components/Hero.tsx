import { useState, useEffect, useCallback } from "react";
import heroNew1 from "@/assets/hero-new-1.jpeg";
import heroNew2 from "@/assets/hero-new-2.jpeg";
import heroNew3 from "@/assets/hero-new-3.jpeg";
import heroNew4 from "@/assets/hero-new-4.jpeg";
import heroNew5 from "@/assets/hero-new-5.jpeg";
import heroNew6 from "@/assets/hero-new-6.jpeg";
import heroNew7 from "@/assets/hero-new-7.jpeg";
import heroNew8 from "@/assets/hero-new-8.jpeg";
import { Button } from "@/components/ui/button";
import { Search, Users, MapPin, Package } from "lucide-react";
import QuoteFormModal from "@/components/QuoteFormModal";

const slides = [
  {
    image: heroNew1,
    headline: "mais completo buscador de peças originais seminovas do Brasil!",
    subtitle: "Nós temos tudo para todos os veículos leves, pick-ups, utilitários, caminhões e máquinas."
  },
  {
    image: heroNew2,
    headline: "Tenha praticidade todo dia.",
    subtitle: "Nossa ferramenta de busca te ajuda a encontrar aquela peça do carro parado na sua oficina."
  },
  {
    image: heroNew3,
    headline: "Nós temos tudo.",
    subtitle: "De pára-choque à pára-choque. Peças para veículos leves, pick-ups, utilitários, caminhões e máquinas."
  },
  {
    image: heroNew4,
    headline: "Peças originais seminovas de qualidade.",
    subtitle: "Cote agora mesmo conosco!"
  },
  {
    image: heroNew5,
    headline: "Praticidade é tudo.",
    subtitle: "Por isso Funilarias, seguradoras, reparadores, e oficinas utilizam diariamente a Conecta."
  },
  {
    image: heroNew6,
    headline: "O segredo de eficiência dos grandes compradores.",
    subtitle: "Encontre peças para todas as marcas e modelos do território nacional."
  },
  {
    image: heroNew7,
    headline: "Tudo isso aqui, num só lugar.",
    subtitle: "O melhor atendimento, maior estoque do país, alta qualidade, agilidade no despacho e os melhores preços."
  },
  {
    image: heroNew8,
    headline: "A maior rede de vendas de peças originais seminovas do Brasil.",
    subtitle: "Conecte-se com a qualidade e economia que você merece."
  }
];

const stats = [
  { icon: Users, value: "1.500+", label: "Parceiros" },
  { icon: Package, value: "500.000+", label: "O maior estoque de peças" },
  { icon: MapPin, value: "100 dias", label: "A maior garantia do mercado" }
];

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const DISPLAY_DURATION = 7000;
  const TRANSITION_DURATION = 1400;

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, TRANSITION_DURATION);
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(nextSlide, DISPLAY_DURATION);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const openQuoteForm = () => {
    setIsFormOpen(true);
  };

  return (
    <>
      <QuoteFormModal isOpen={isFormOpen} onOpenChange={setIsFormOpen} />
    <section 
      id="hero" 
      className={`relative min-h-screen md:min-h-[85vh] flex items-center overflow-hidden py-0 ${className || ''}`}
    >
      {/* Background images - synchronized crossfade */}
      {slides.map((slide, index) => (
        <div 
          key={`bg-${index}`}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: currentSlide === index ? 1 : 0,
            transition: `opacity ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`,
          }} 
        />
      ))}
      
      <div className="relative z-10 py-8 md:py-12 w-full px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6 md:space-y-10">
          
          {/* Main Headline - Full width, maximum impact */}
          <div className="w-full text-center min-h-[180px] sm:min-h-[220px] md:min-h-[280px] flex flex-col items-center justify-center relative px-2">
            {slides.map((slide, index) => (
              <div
                key={`phrase-${index}`}
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{
                  opacity: currentSlide === index ? 1 : 0,
                  transform: currentSlide === index ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                  transition: `opacity ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1), transform ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`,
                  pointerEvents: currentSlide === index ? 'auto' : 'none',
                }}
              >
                {/* Large headline with enhanced glow */}
                <h1 
                  className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-primary leading-[1.05] tracking-tight text-center w-full px-2"
                  style={{
                    textShadow: '0 0 60px hsl(var(--primary) / 0.8), 0 0 120px hsl(var(--primary) / 0.5), 0 0 180px hsl(var(--primary) / 0.3), 0 4px 30px rgba(0,0,0,0.6)',
                    filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.4))',
                    WebkitTextStroke: '1px hsl(var(--primary) / 0.3)',
                  }}
                >
                  {slide.headline}
                </h1>
                
                {/* Subtitle with better visibility */}
                <p 
                  className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-xl lg:text-2xl text-white font-medium leading-relaxed text-center max-w-5xl px-4"
                  style={{
                    textShadow: '0 0 20px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6)',
                  }}
                >
                  {slide.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={`indicator-${index}`}
                onClick={() => {
                  if (!isTransitioning && index !== currentSlide) {
                    setIsTransitioning(true);
                    setCurrentSlide(index);
                    setTimeout(() => {
                      setIsTransitioning(false);
                    }, TRANSITION_DURATION);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-500 ${
                  currentSlide === index 
                    ? 'w-10 bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.6)]' 
                    : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Glassmorphism Stats Cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 w-full max-w-3xl">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center p-3 sm:p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl text-center"
                style={{
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                }}
              >
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary mb-1 sm:mb-2 md:mb-3" strokeWidth={1.5} />
                <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight text-center w-full">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-base md:text-lg text-white mt-1 font-bold text-center w-full leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button - Full width, premium */}
          <div className="w-full max-w-4xl px-2 sm:px-4">
            <Button 
              onClick={openQuoteForm}
              size="lg"
              className="w-full text-base sm:text-lg md:text-xl lg:text-2xl px-8 md:px-12 py-6 md:py-8 font-black shadow-2xl transition-all duration-300 hover:scale-[1.02] rounded-2xl md:rounded-3xl gap-3 md:gap-4 relative overflow-hidden group"
              style={{
                boxShadow: '0 0 40px hsl(var(--primary) / 0.5), 0 0 80px hsl(var(--primary) / 0.3), 0 15px 50px rgba(0,0,0,0.4)',
              }}
            >
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <Search className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" strokeWidth={2.5} />
              <span className="relative z-10 tracking-wide">Solicitar minha peça</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;