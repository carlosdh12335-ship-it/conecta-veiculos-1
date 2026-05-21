import conectaHood from "@/assets/conecta-hood.jpeg";
import { Truck, Shield, CheckCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import PremiumGear from "@/components/PremiumGear";

interface TrustBannerProps {
  className?: string;
}

const TrustBanner = ({ className }: TrustBannerProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden ${className || ''}`}
    >
      {/* Premium Gears - Large and visible */}
      <PremiumGear size={200} position="bottom-left" delay={300} reverse teeth={12} />
      
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image - Left side */}
          <div 
            className={`
              relative
              transition-all duration-1000 ease-out
              ${isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-16'
              }
            `}
          >
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <img 
                  src={conectaHood} 
                  alt="Conecta - Soluções Automotivas do Brasil" 
                  className="w-full h-full object-cover"
                />
                {/* Overlay glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
              </div>
              {/* Decorative corner */}
              <div className="absolute -bottom-4 -left-4 w-28 h-28 md:w-32 md:h-32 bg-primary/20 rounded-2xl -z-10 blur-sm" />
              <div className="absolute -top-3 -right-3 w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-xl -z-10" />
            </div>
          </div>

          {/* Content - Right side with staggered animations */}
          <div className="space-y-6 md:space-y-8">
            {/* Title */}
            <h2 
              className={`
                text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight
                transition-all duration-700 ease-out
                ${isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-12'
                }
              `}
              style={{ transitionDelay: '200ms' }}
            >
              Qualidade Garantida em Cada Peça
            </h2>
            
            {/* Description */}
            <p 
              className={`
                text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed
                transition-all duration-700 ease-out
                ${isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-12'
                }
              `}
              style={{ transitionDelay: '400ms' }}
            >
              Presente em todo o Brasil, somos referência em autopeças originais e de primeira linha. 
              Sua garantia de dirigir com tranquilidade e segurança.
            </p>
            
            {/* Features with staggered animation */}
            <div 
              className={`
                flex flex-wrap items-center gap-4 md:gap-6
                transition-all duration-700 ease-out
                ${isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-12'
                }
              `}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="flex items-center gap-2.5 px-4 py-2.5 bg-primary/10 rounded-full border border-primary/20">
                <Truck className="w-5 h-5 text-primary" strokeWidth={1.5} />
                <span className="text-sm md:text-base font-medium text-primary">Entrega Rápida</span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5 bg-primary/10 rounded-full border border-primary/20">
                <Shield className="w-5 h-5 text-primary" strokeWidth={1.5} />
                <span className="text-sm md:text-base font-medium text-primary">Garantia de Qualidade</span>
              </div>
            </div>

            {/* Additional benefits */}
            <div 
              className={`
                space-y-3
                transition-all duration-700 ease-out
                ${isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-12'
                }
              `}
              style={{ transitionDelay: '800ms' }}
            >
              {["Peças originais seminovas", "Procedência verificada", "Atendimento especializado"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm md:text-base lg:text-lg text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;