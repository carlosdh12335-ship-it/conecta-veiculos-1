import teamImage from "@/assets/team.png";
import { History } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PremiumGear from "@/components/PremiumGear";

interface OurStoryProps {
  className?: string;
}

const OurStory = ({ className }: OurStoryProps = {}) => {
  return (
    <section id="our-story" className={`py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden ${className || ''}`}>
      {/* Premium Gears */}
      <PremiumGear size={160} position="top-right" delay={200} teeth={10} />
      <PremiumGear size={100} position="bottom-left" delay={400} reverse teeth={8} />
      <div className="container max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-center">
          <ScrollReveal direction="left" className="space-y-4 md:space-y-5">
            <div className="inline-flex items-center gap-1.5 md:gap-2 bg-primary/10 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full">
              <History className="icon-standard-sm" strokeWidth={1.5} />
              <span className="text-[10px] md:text-xs font-semibold text-primary">QUEM SOMOS</span>
            </div>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">A Conecta do Brasil</h2>
            
            <div className="space-y-3 md:space-y-4 text-muted-foreground text-xs md:text-sm leading-relaxed">
              <p>
                Já aconteceu com você? Abre o orçamento da concessionária e quase cai pra trás. Todo mundo que gosta de carro de verdade já passou por esse perrengue.
              </p>
              <p>
                <span className="text-primary font-semibold">Chega de sofrer.</span> Existe uma solução que está mudando o jogo no Brasil inteiro: a <span className="text-primary font-semibold">Conecta do Brasil</span>.
              </p>
              <p>
                Nós reunimos os melhores desmontes legais do país, de Norte a Sul. Só entra quem é 100% homologado pelo Detran. <span className="text-primary font-medium">Peça original, seminova, testada e pronta para voltar à estrada.</span>
              </p>
              <p>
                Cerca de <span className="text-primary font-semibold">85% das peças de um veículo são reaproveitáveis</span>. A Conecta contribui para uma economia circular sustentável.
              </p>
              <p>
                Criamos o <span className="text-primary font-semibold">maior buscador de peças originais seminovas do Brasil</span>. Uma ferramenta poderosa e simples que qualquer pessoa consegue usar.
              </p>
              <p className="text-primary font-semibold">
                Até 70% mais barato que peça nova, qualidade original e entrega para qualquer canto do Brasil.
              </p>
              <p className="font-medium text-foreground text-xs md:text-sm">
                Conecta do Brasil.<br />
                <span className="text-primary">Porque carro bem cuidado merece peça bem escolhida.</span>
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <img 
                  src={teamImage} 
                  alt="Equipe Conecta Brasil" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-primary/10 rounded-xl -z-10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
