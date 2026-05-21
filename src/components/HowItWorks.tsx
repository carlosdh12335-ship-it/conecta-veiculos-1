import { Crown, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import PremiumGear from "@/components/PremiumGear";

interface HowItWorksProps {
  className?: string;
}

const HowItWorks = ({ className }: HowItWorksProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="how-it-works" className={`py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden ${className || ''}`}>
      {/* Premium Gears */}
      <PremiumGear size={100} position="top-right" delay={100} teeth={8} />
      <PremiumGear size={60} position="bottom-left" delay={300} reverse teeth={6} />
      
      <div className="container max-w-2xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Conheça <span className="text-primary">Nossos Serviços</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mt-3">
              Escolha a opção ideal para você
            </p>
          </div>
        </ScrollReveal>
        
        {/* Vertical button stack */}
        <div className="flex flex-col items-center gap-4 md:gap-5">
          {/* Conecta Clube - Premium black/gold */}
          <ScrollReveal delay={100} className="w-full max-w-md">
            <button
              onClick={() => scrollToSection('#conecta-clube')}
              className="w-full flex items-center justify-center gap-3 md:gap-4 px-8 md:px-10 py-5 md:py-6 rounded-2xl font-bold text-base md:text-lg transition-all duration-300 hover:scale-[1.03] relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
                border: '2px solid #d4af37',
                boxShadow: '0 0 20px rgba(212, 175, 55, 0.3), 0 10px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
              }}
            >
              {/* Golden glow effect on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
                }}
              />
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <Crown 
                className="w-6 h-6 md:w-7 md:h-7 relative z-10" 
                strokeWidth={2} 
                style={{ color: '#d4af37' }}
              />
              <span 
                className="relative z-10 tracking-wide"
                style={{ 
                  background: 'linear-gradient(135deg, #d4af37 0%, #f5e1a4 50%, #d4af37 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: 'none',
                }}
              >
                Conecta Clube
              </span>
            </button>
          </ScrollReveal>
          
          {/* Fornecedores Conecta - Green/professional */}
          <ScrollReveal delay={200} className="w-full max-w-md">
            <button
              onClick={() => scrollToSection('#fornecedor')}
              className="w-full flex items-center justify-center gap-3 md:gap-4 px-8 md:px-10 py-5 md:py-6 rounded-2xl font-bold text-base md:text-lg bg-primary/10 border-2 border-primary hover:bg-primary/20 transition-all duration-300 hover:scale-[1.03] relative overflow-hidden group"
              style={{
                boxShadow: '0 0 20px hsl(var(--primary) / 0.2), 0 10px 40px rgba(0,0,0,0.2)',
              }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <Building2 className="w-6 h-6 md:w-7 md:h-7 text-primary relative z-10" strokeWidth={2} />
              <span className="text-primary relative z-10 tracking-wide">Fornecedores Conecta</span>
            </button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;