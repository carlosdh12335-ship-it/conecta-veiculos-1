import { Button } from "@/components/ui/button";
import { Building2, Truck, Car, CheckCircle2, Shield } from "lucide-react";
import supplierBgImage from "@/assets/supplier-bg.jpeg";
import AnimatedGear from "./AnimatedGear";
import SupplierPhrasesCarousel from "./SupplierPhrasesCarousel";

interface SupplierProps {
  className?: string;
}

const Supplier = ({ className }: SupplierProps = {}) => {
  const handleClick = () => {
    window.open("https://fornecedoresconecta.com.br", "_blank");
  };

  return (
    <section 
      id="fornecedor" 
      className={`relative py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8 ${className || ''}`}
    >
      {/* Main container with rounded corners */}
      <div className="relative max-w-6xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={supplierBgImage} 
            alt="Parceria Empresarial"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        
        {/* Animated Gears - Inside container */}
        <div className="absolute top-6 right-6 hidden lg:block z-10">
          <AnimatedGear size={48} className="opacity-50" />
        </div>
        <div className="absolute bottom-8 right-16 hidden lg:block z-10">
          <AnimatedGear size={36} reverse className="opacity-40" />
        </div>
        <div className="absolute top-1/2 right-8 hidden lg:block z-10">
          <AnimatedGear size={40} className="opacity-45" />
        </div>
        
        {/* Content inside rounded container */}
        <div className="relative z-10 px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-14 lg:px-12 lg:py-16">
        {/* Phrases Carousel */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <SupplierPhrasesCarousel />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-10 items-center">
          {/* Content */}
          <div className="space-y-3 sm:space-y-4 md:space-y-5 animate-fade-in-up">
            <div className="inline-block px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
              <span className="text-primary font-semibold text-[10px] sm:text-xs md:text-sm">Seja Nosso Parceiro</span>
            </div>
            
            <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
              Faça parte da <span className="text-primary">maior rede</span> de fornecimento de peças originais seminovas do Brasil.
            </h2>
            
            <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed max-w-lg">
              Com mais de <span className="text-primary font-bold">1.500 fornecedores</span> em todo o país, 
              conectamos você a milhares de clientes em busca de qualidade.
            </p>

            {/* Vehicle Types */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              {[
                { icon: Car, label: "Automóveis" },
                { icon: Truck, label: "Caminhões" },
                { icon: Building2, label: "Todos os Tipos" }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex flex-col items-center gap-1 sm:gap-1.5 md:gap-2 p-2 sm:p-3 md:p-4 bg-secondary/80 backdrop-blur-sm rounded-lg md:rounded-xl border border-border/50 hover-lift"
                >
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                  <span className="text-[8px] sm:text-[10px] md:text-xs font-medium text-center text-white">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
              {[
                "Fornecedores homologados pelos Detrans",
                "Qualidade, procedência e rastreabilidade",
                "Conecte-se com milhares de clientes"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-2.5 md:gap-3 group">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <p className="text-[10px] sm:text-xs md:text-sm text-white/90">{benefit}</p>
                </div>
              ))}
            </div>

            {/* CTA with Golden Trust Seal */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 md:gap-4 pt-2">
              <Button 
                onClick={handleClick} 
                size="default"
                className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2" />
                Quero Ser Fornecedor
              </Button>
              
              {/* Golden Trust Seal */}
              <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full golden-glow bg-amber-500/10 border border-amber-400/30">
                <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-amber-400" />
                <span className="text-[10px] sm:text-xs md:text-sm font-medium text-amber-400">Parceiro Certificado</span>
              </div>
            </div>
          </div>

          {/* Empty space for background visibility on larger screens */}
          <div className="hidden lg:block" />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Supplier;
