import { Truck, Users, DollarSign, LucideIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import PremiumGear from "@/components/PremiumGear";
import InfoModal from "@/components/InfoModal";

interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
  content: string;
}

const advantages: Advantage[] = [
  { 
    icon: Truck, 
    title: "Envio Nacional", 
    description: "Entrega rápida e segura para todo o Brasil",
    content: "Realizamos entregas para todos os estados brasileiros com segurança e agilidade. Trabalhamos com as melhores transportadoras do país para garantir que sua peça chegue em perfeito estado. Rastreamento em tempo real disponível para todos os envios."
  },
  { 
    icon: Users, 
    title: "Atendimento Premium", 
    description: "Equipe especializada pronta para ajudar",
    content: "Nossa equipe é formada por especialistas em autopeças com anos de experiência no mercado. Oferecemos atendimento personalizado via WhatsApp, telefone e e-mail. Estamos disponíveis para tirar todas as suas dúvidas e ajudar na escolha da peça ideal."
  },
  { 
    icon: DollarSign, 
    title: "Preço Justo", 
    description: "Melhor custo-benefício do mercado",
    content: "Trabalhamos diretamente com mais de 1.500 fornecedores homologados, o que nos permite oferecer os melhores preços do mercado. Economize até 70% em comparação com peças novas, sem abrir mão da qualidade e procedência."
  }
];

interface PremiumCardProps {
  advantage: Advantage;
  index: number;
  isVisible: boolean;
  onClick: () => void;
}

const PremiumCard = ({ advantage, index, isVisible, onClick }: PremiumCardProps) => {
  const [showSweep, setShowSweep] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const Icon = advantage.icon;

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShowSweep(true), index * 200 + 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, index]);

  return (
    <button
      onClick={onClick}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      onMouseEnter={() => setIsPressed(true)}
      onMouseLeave={() => setIsPressed(false)}
      className={`
        relative group flex-1 min-w-0 max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px]
        transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
        touch-manipulation
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
        }
      `}
      style={{ 
        transitionDelay: `${index * 180}ms`,
      }}
    >
      {/* Card container - premium glass style */}
      <div
        className={`
          relative h-full min-h-[140px] sm:min-h-[160px] md:min-h-[200px]
          bg-gradient-to-br from-primary/8 via-primary/12 to-primary/6
          backdrop-blur-md
          border border-primary/25
          rounded-2xl sm:rounded-3xl
          overflow-hidden
          transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
          shadow-[0_4px_20px_-4px_hsl(var(--primary)/0.15)]
          ${isPressed ? 'border-primary/50 shadow-[0_8px_32px_-4px_hsl(var(--primary)/0.35)] -translate-y-1 scale-[1.03]' : ''}
        `}
      >
        {/* Ambient glow effect */}
        <div className={`
          absolute -inset-1 rounded-3xl blur-xl
          bg-gradient-to-br from-primary/15 via-transparent to-primary/10
          transition-opacity duration-700
          ${isPressed ? 'opacity-100' : 'opacity-0'}
        `} />
        
        {/* Inner glass layer */}
        <div className="absolute inset-[1px] rounded-2xl sm:rounded-3xl bg-gradient-to-b from-background/60 via-background/40 to-background/20 pointer-events-none" />
        
        {/* Animated top accent line */}
        {showSweep && (
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent animate-[borderSweepHorizontal_1.5s_ease-out_forwards]" />
        )}
        
        {/* Card Content */}
        <div className="relative z-10 p-3 sm:p-4 md:p-6 flex flex-col items-center text-center h-full justify-center">
          {/* Icon Container - elegant circle */}
          <div className="relative mb-2 sm:mb-3 md:mb-4">
            {/* Subtle glow behind icon */}
            <div className={`
              absolute inset-0 blur-lg bg-primary/25 rounded-full scale-[2]
              transition-all duration-500
              ${isPressed ? 'opacity-100 scale-[2.5]' : 'opacity-40'}
            `} />
            <div className={`
              relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
              bg-gradient-to-br from-primary/25 via-primary/15 to-primary/10
              border border-primary/40
              rounded-full
              flex items-center justify-center
              transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
              shadow-[inset_0_1px_0_0_hsl(var(--primary)/0.3),0_2px_8px_-2px_hsl(var(--primary)/0.2)]
              ${isPressed ? 'border-primary/70 bg-primary/30 scale-110 shadow-[inset_0_1px_0_0_hsl(var(--primary)/0.4),0_4px_16px_-2px_hsl(var(--primary)/0.4)]' : ''}
            `}>
              <Icon 
                className={`
                  w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary 
                  transition-all duration-500 
                  ${isPressed ? 'scale-110' : ''}
                `} 
                strokeWidth={1.8} 
              />
            </div>
          </div>
          
          {/* Title */}
          <h3 className={`
            text-[11px] sm:text-sm md:text-base font-semibold text-primary 
            mb-1 sm:mb-1.5 md:mb-2 leading-tight tracking-wide
            transition-all duration-300
            ${isPressed ? 'text-primary' : ''}
          `}>
            {advantage.title}
          </h3>
          
          {/* Description */}
          <p className="text-[9px] sm:text-[11px] md:text-sm text-muted-foreground leading-snug sm:leading-relaxed line-clamp-2">
            {advantage.description}
          </p>
        </div>
        
        {/* Bottom accent line */}
        <div className={`
          absolute bottom-0 left-0 right-0 h-[2px] 
          bg-gradient-to-r from-transparent via-primary/50 to-transparent
          transition-all duration-500
          ${isPressed ? 'opacity-100 via-primary/80' : 'opacity-50'}
        `} />
        
        {/* Shine effect on press */}
        <div className={`
          absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none
          bg-gradient-to-tr from-transparent via-primary/5 to-primary/15
          transition-opacity duration-500
          ${isPressed ? 'opacity-100' : 'opacity-0'}
        `} />
      </div>
    </button>
  );
};

interface WhyChooseProps {
  className?: string;
}

const WhyChoose = ({ className }: WhyChooseProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedAdvantage, setSelectedAdvantage] = useState<Advantage | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section 
        ref={sectionRef}
        id="why-choose" 
        className={`py-8 sm:py-10 md:py-14 lg:py-20 bg-background relative overflow-hidden ${className || ''}`}
      >
        {/* Premium Gears */}
        <PremiumGear size={180} position="top-left" delay={100} teeth={14} />
        <PremiumGear size={140} position="bottom-right" delay={350} reverse teeth={12} />
        
        <div className="container max-w-5xl mx-auto px-3 sm:px-4">
          {/* Header */}
          <div 
            className={`text-center mb-5 sm:mb-6 md:mb-10 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-3 sm:mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] sm:text-xs font-medium text-primary tracking-wider uppercase">Diferenciais</span>
            </div>
            <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-2 sm:mb-3">
              Por que escolher a Conecta?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
              Excelência em peças automotivas com atendimento diferenciado
            </p>
          </div>
          
          {/* Cards Container - Premium horizontal layout */}
          <div className="flex justify-center items-stretch gap-3 sm:gap-4 md:gap-6 px-1">
            {advantages.map((advantage, index) => (
              <PremiumCard 
                key={index} 
                advantage={advantage} 
                index={index}
                isVisible={isVisible}
                onClick={() => setSelectedAdvantage(advantage)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedAdvantage && (
        <InfoModal
          isOpen={!!selectedAdvantage}
          onClose={() => setSelectedAdvantage(null)}
          title={selectedAdvantage.title}
          description={selectedAdvantage.description}
          icon={selectedAdvantage.icon}
          content={selectedAdvantage.content}
        />
      )}
    </>
  );
};

export default WhyChoose;