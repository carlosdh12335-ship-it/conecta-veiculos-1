import { Leaf, Recycle, Factory, TreePine, ExternalLink } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import PremiumGear from "@/components/PremiumGear";
import InfoModal from "@/components/InfoModal";
import reciclagem1 from "@/assets/reciclagem-1.jpeg";
import reciclagem2 from "@/assets/reciclagem-2.jpeg";

interface ReciclagemAutomotivaProps {
  className?: string;
}

const articles = [
  {
    image: reciclagem1,
    title: "Brasil recicla apenas 1,5% da frota de veículos em fim de vida",
    description: "Segundo dados da ANFAVEA, o país possui cerca de 6 milhões de veículos com mais de 20 anos em circulação. A reciclagem adequada poderia gerar economia de até R$ 3 bilhões anuais e reduzir emissões de CO2.",
    source: "ANFAVEA - Associação Nacional dos Fabricantes de Veículos Automotores",
    sourceUrl: "https://anfavea.com.br"
  },
  {
    image: reciclagem2,
    title: "85% das peças de um veículo podem ser reutilizadas ou recicladas",
    description: "Estudos do IBAMA mostram que a maior parte dos componentes automotivos tem potencial de reaproveitamento, incluindo metais, plásticos, vidros e borrachas. Isso representa uma oportunidade significativa para a economia circular.",
    source: "IBAMA - Instituto Brasileiro do Meio Ambiente",
    sourceUrl: "https://ibama.gov.br"
  }
];

interface Benefit {
  icon: typeof Leaf;
  title: string;
  description: string;
  content: string;
}

const benefits: Benefit[] = [
  { icon: Leaf, title: "Sustentabilidade", description: "Preservação do meio ambiente", content: "A reciclagem automotiva contribui diretamente para a preservação do meio ambiente, reduzindo a necessidade de extração de matérias-primas e diminuindo a quantidade de resíduos em aterros sanitários." },
  { icon: Recycle, title: "Economia Circular", description: "Resíduos transformados em recursos", content: "Cada peça reutilizada representa um ciclo completo de economia circular: menos extração de recursos naturais, menos energia gasta na produção e menos resíduos descartados." },
  { icon: Factory, title: "Menos Emissões", description: "Redução de CO2 na atmosfera", content: "A reutilização de peças automotivas pode reduzir em até 70% as emissões de CO2 comparado à fabricação de peças novas, contribuindo significativamente para a redução do aquecimento global." },
  { icon: TreePine, title: "Preservação", description: "Recursos naturais economizados", content: "Ao reutilizar peças, economizamos toneladas de minério de ferro, alumínio, cobre e outros recursos naturais que seriam necessários para fabricar componentes novos." }
];

const ReciclagemAutomotiva = ({ className }: ReciclagemAutomotivaProps) => {
  const [selectedBenefit, setSelectedBenefit] = useState<Benefit | null>(null);

  return (
    <>
      <section id="reciclagem" className={`py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden ${className || ''}`}>
        {/* Premium Gears */}
        <PremiumGear size={140} position="top-right" delay={150} teeth={12} />
        <PremiumGear size={70} position="bottom-left" delay={350} reverse teeth={6} />
        <div className="container max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-6 md:mb-10">
              <div className="inline-flex items-center gap-1.5 md:gap-2 bg-green-500/10 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full mb-3 md:mb-4">
                <Recycle className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-600" strokeWidth={1.5} />
                <span className="text-xs md:text-sm font-semibold text-green-600">SUSTENTABILIDADE</span>
              </div>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">
                Reciclagem Automotiva no Brasil
              </h2>
              
              <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                A reciclagem automotiva é fundamental para o futuro sustentável do país.
              </p>
            </div>
          </ScrollReveal>

          {/* Articles Section */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            {articles.map((article, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <article className="bg-card rounded-xl overflow-hidden border border-border hover:border-green-500/30 transition-all group cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 md:p-5">
                    <h3 className="text-base md:text-lg font-semibold mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
                      {article.description}
                    </p>
                    <a 
                      href={article.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs md:text-sm text-green-600 hover:text-green-700 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
                      <span className="font-medium">Fonte: {article.source}</span>
                    </a>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-10">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <button 
                    onClick={() => setSelectedBenefit(benefit)}
                    className="group bg-card p-4 md:p-5 rounded-lg md:rounded-xl border border-border hover:border-green-500/30 transition-all hover:scale-105 h-full w-full text-left"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-green-600" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-sm md:text-base font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </button>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={400}>
            <div className="text-center">
              <div className="bg-green-500/5 border border-green-500/20 rounded-lg md:rounded-xl p-4 md:p-6 max-w-2xl mx-auto">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  No Brasil, menos de 2% dos resíduos são reciclados, mas 85% das peças automotivas podem ser reaproveitadas.
                  <br /><br />
                  <span className="text-foreground font-medium">A Conecta transforma esse potencial em realidade</span>, impulsionando a economia circular com peças reutilizadas de qualidade, legais e econômicas.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {selectedBenefit && (
        <InfoModal
          isOpen={!!selectedBenefit}
          onClose={() => setSelectedBenefit(null)}
          title={selectedBenefit.title}
          description={selectedBenefit.description}
          icon={selectedBenefit.icon}
          content={selectedBenefit.content}
        />
      )}
    </>
  );
};

export default ReciclagemAutomotiva;