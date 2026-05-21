import { Button } from "@/components/ui/button";
import { Star, Zap, Crown } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import conectaClubeBg from "@/assets/conecta-clube-bg.jpeg";
import logoImg from "@/assets/logo.png";

interface ConectaClubeProps {
  className?: string;
}

const ConectaClube = ({ className }: ConectaClubeProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles] = useState(() => 
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 6,
      size: 2 + Math.random() * 3,
    }))
  );
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    window.open("https://conectaclube.site/", "_blank");
  };

  const benefits = [
    { icon: Star, title: "Atendimento VIP", desc: "Prioridade e suporte dedicado" },
    { icon: Zap, title: "Descontos Exclusivos", desc: "Preços diferenciados" },
    { icon: Crown, title: "Acesso Prioritário", desc: "Primeiro acesso às novidades" }
  ];

  return (
    <section 
      ref={sectionRef}
      id="conecta-clube" 
      className={`py-16 md:py-20 lg:py-24 relative overflow-hidden ${className || ''}`}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${conectaClubeBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-0 bg-black/20" />
      <style>{`
        @keyframes particleRise {
          0% { 
            transform: translateY(100%) translateX(0);
            opacity: 0;
          }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { 
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
        
        @keyframes shadowPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        
        @keyframes shinePass {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        
        @keyframes topShine {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes ledTravel {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -2000;
          }
        }
        
        @keyframes reflectionPulse {
          0%, 100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.25;
            transform: scale(1.02);
          }
        }
      `}</style>

      {/* Green reflection background - stays behind everything */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] rounded-[100px] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{
            background: 'radial-gradient(ellipse at center, hsl(var(--primary) / 0.12) 0%, hsl(var(--primary) / 0.05) 40%, transparent 70%)',
            filter: 'blur(60px)',
            animation: isVisible ? 'reflectionPulse 6s ease-in-out infinite' : 'none',
          }}
        />
        <div 
          className={`absolute top-1/3 left-1/4 w-[40%] h-[30%] rounded-full transition-opacity duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{
            background: 'radial-gradient(ellipse at center, hsl(var(--primary) / 0.08) 0%, transparent 60%)',
            filter: 'blur(80px)',
            animation: isVisible ? 'reflectionPulse 8s ease-in-out infinite reverse' : 'none',
          }}
        />
        <div 
          className={`absolute bottom-1/4 right-1/4 w-[35%] h-[25%] rounded-full transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{
            background: 'radial-gradient(ellipse at center, hsl(var(--primary) / 0.06) 0%, transparent 60%)',
            filter: 'blur(70px)',
            animation: isVisible ? 'reflectionPulse 7s ease-in-out infinite' : 'none',
            animationDelay: '2s',
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-primary/60"
            style={{
              left: `${particle.left}%`,
              bottom: '-10px',
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: isVisible 
                ? `particleRise ${particle.duration}s linear infinite`
                : 'none',
              animationDelay: `${particle.delay}s`,
              boxShadow: '0 0 6px hsl(var(--primary) / 0.8)',
            }}
          />
        ))}
      </div>

      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        {/* Main VIP container with traveling LED border */}
        <div 
          className={`relative bg-black/50 backdrop-blur-sm rounded-2xl p-6 md:p-10 lg:p-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {/* Static border base */}
          <div 
            className="absolute inset-0 rounded-2xl border border-primary/20 pointer-events-none"
            style={{
              boxShadow: 'inset 0 0 30px hsl(var(--primary) / 0.03)',
            }}
          />
          
          {/* Traveling LED border */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            preserveAspectRatio="none"
            style={{ overflow: 'visible' }}
          >
            <defs>
              <linearGradient id="ledGradient" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="45%" stopColor="transparent" />
                <stop offset="50%" stopColor="hsl(var(--primary))" />
                <stop offset="55%" stopColor="transparent" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <filter id="ledGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <rect 
              x="1" 
              y="1" 
              width="calc(100% - 2px)" 
              height="calc(100% - 2px)" 
              rx="16" 
              ry="16"
              fill="none" 
              stroke="url(#ledGradient)" 
              strokeWidth="2"
              strokeLinecap="round"
              filter="url(#ledGlow)"
              style={{
                strokeDasharray: '100 1900',
                animation: isVisible ? 'ledTravel 4s linear infinite' : 'none',
              }}
            />
          </svg>

          {/* Top shine effect */}
          <div className="absolute top-0 left-0 right-0 h-px overflow-hidden rounded-t-2xl">
            <div 
              className="h-full w-1/3 bg-gradient-to-r from-transparent via-primary/80 to-transparent"
              style={{
                animation: isVisible ? 'topShine 1.5s ease-out forwards' : 'none',
                animationDelay: '0.5s',
              }}
            />
          </div>

          {/* Golden light effect from top-left */}
          <div 
            className="absolute -top-20 -left-20 w-80 h-80 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255, 215, 0, 0.15) 0%, rgba(255, 193, 7, 0.08) 40%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
          <div 
            className="absolute top-0 left-0 w-full h-1/2 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, transparent 50%)',
            }}
          />

          {/* Content */}
          <div className="text-center relative z-10">
            {/* Badge - EXCLUSIVO first */}
            <div 
              className={`inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-400/30 px-4 py-2 rounded-full mb-6 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ 
                transitionDelay: '400ms',
                boxShadow: '0 0 20px rgba(255, 215, 0, 0.2)',
              }}
            >
              <span className="text-xs md:text-sm font-bold text-amber-400 tracking-widest">EXCLUSIVO</span>
            </div>
            
            {/* Logo - Second */}
            <div 
              className={`flex justify-center mb-4 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: '500ms' }}
            >
              <img 
                src={logoImg} 
                alt="Conecta Clube Logo" 
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
                style={{
                  filter: 'drop-shadow(0 0 30px rgba(255, 215, 0, 0.5))',
                }}
              />
            </div>
            
            {/* Layered Title Animation - Third */}
            <div className="relative mb-4 overflow-visible">
              {/* Layer 1: Golden Shadow */}
              <h2 
                className={`text-2xl md:text-3xl lg:text-4xl font-bold absolute inset-0 flex items-center justify-center transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ 
                  color: 'transparent',
                  textShadow: '0 0 30px rgba(255, 215, 0, 0.4), 0 0 60px rgba(255, 215, 0, 0.2)',
                  WebkitTextStroke: '1px rgba(255, 215, 0, 0.15)',
                  animation: isVisible ? 'shadowPulse 4s ease-in-out infinite' : 'none',
                  transitionDelay: '200ms',
                }}
                aria-hidden="true"
              >
                Conecta Clube
              </h2>
              
              {/* Layer 2: Solid text with golden accent */}
              <h2 
                className={`text-2xl md:text-3xl lg:text-4xl font-bold relative transition-all duration-700 text-white ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: '600ms', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
              >
                Conecta{' '}
                <span className="text-amber-400 relative inline-block overflow-hidden">
                  Clube
                  {/* Layer 3: Golden Shine pass */}
                  <span 
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.5), transparent)',
                      animation: isVisible ? 'shinePass 1s ease-out forwards' : 'none',
                      animationDelay: '1s',
                    }}
                  />
                </span>
              </h2>
            </div>
            
            {/* Description */}
            <p 
              className={`text-sm md:text-base text-white/90 mb-8 max-w-lg mx-auto leading-relaxed transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '700ms', textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}
            >
              Faça parte do clube exclusivo com acesso prioritário às melhores peças e condições especiais.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-3 gap-3 md:gap-5 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index}
                    className={`relative bg-black/60 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-primary/30 hover:border-primary/50 transition-all duration-500 text-center h-full overflow-hidden group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                    style={{ transitionDelay: `${800 + index * 100}ms` }}
                  >
                    {/* Card inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                    
                    {/* Icon */}
                    <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="font-semibold text-xs md:text-sm mb-1 leading-tight text-white">{benefit.title}</h3>
                    <p className="text-[10px] md:text-xs text-white/80 leading-snug">{benefit.desc}</p>
                    
                    {/* Bottom accent */}
                    <div 
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-all duration-700 ${isVisible ? 'w-2/3 opacity-100' : 'w-0 opacity-0'}`}
                      style={{ transitionDelay: `${1100 + index * 100}ms` }}
                    />
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div 
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '1200ms' }}
            >
              <Button 
                onClick={handleClick}
                size="lg"
                className="text-sm md:text-base px-8 py-5 md:py-6 font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all hover:scale-105 rounded-xl relative overflow-hidden group"
              >
                <span className="relative z-10">Quero Ser Conecta Clube</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConectaClube;
