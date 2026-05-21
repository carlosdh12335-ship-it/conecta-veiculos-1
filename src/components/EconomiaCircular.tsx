import { ArrowRight, RefreshCw, ExternalLink } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import PremiumGear from "@/components/PremiumGear";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import economiaCircular1 from "@/assets/economia-circular-1.jpeg";
import economiaCircular2 from "@/assets/economia-circular-2.jpeg";

interface EconomiaCircularProps {
  className?: string;
}

const articles = [
  {
    image: economiaCircular1,
    title: "Economia circular pode gerar US$ 4,5 trilhões até 2030",
    description: "Segundo relatório da Ellen MacArthur Foundation, a transição para um modelo econômico circular representa uma das maiores oportunidades de crescimento sustentável do século XXI.",
    source: "Ellen MacArthur Foundation",
    sourceUrl: "https://ellenmacarthurfoundation.org"
  },
  {
    image: economiaCircular2,
    title: "Setor automotivo lidera adoção de práticas circulares",
    description: "A indústria automotiva está na vanguarda da economia circular, com programas de remanufatura que economizam até 85% de energia comparado à produção de peças novas, segundo estudo do CEBDS.",
    source: "CEBDS - Conselho Empresarial Brasileiro para o Desenvolvimento Sustentável",
    sourceUrl: "https://cebds.org"
  }
];

interface Point {
  title: string;
  desc: string;
  content: string;
}

const points: Point[] = [
  { title: "Reutilização", desc: "Peças funcionais voltam ao mercado", content: "Peças em bom estado de funcionamento são testadas, certificadas e disponibilizadas para venda, prolongando sua vida útil e evitando desperdício." },
  { title: "Redução de custos", desc: "Produtos mais acessíveis", content: "Peças reutilizadas custam até 70% menos que peças novas, tornando a manutenção veicular mais acessível para todos os brasileiros." },
  { title: "Menor impacto", desc: "Menos extração de recursos", content: "Cada peça reutilizada significa menos mineração, menos processamento industrial e menos energia consumida na fabricação de novos componentes." },
  { title: "Ciclo contínuo", desc: "Produtos em uso por mais tempo", content: "A economia circular mantém os produtos e materiais em uso pelo maior tempo possível, extraindo o máximo valor antes da reciclagem final." },
  { title: "Economia de energia", desc: "Até 95% menos energia", content: "A reutilização de peças pode economizar até 95% da energia que seria necessária para fabricar uma peça nova do zero." }
];

const EconomiaCircular = ({ className }: EconomiaCircularProps) => {
  const [selectedPoint, setSelectedPoint] = useState<Point | null>(null);

  return (
    <>
      <section id="economia-circular" className={`py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden ${className || ''}`}>
        {/* Premium Gears */}
        <PremiumGear size={110} position="bottom-right" delay={200} teeth={8} />
        <div className="container max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-6 md:mb-8">
              <div className="inline-flex items-center gap-1.5 md:gap-2 bg-primary/10 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full mb-3 md:mb-4">
                <RefreshCw className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" strokeWidth={1.5} />
                <span className="text-xs md:text-sm font-semibold text-primary">ECONOMIA CIRCULAR</span>
              </div>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                Entenda a Economia Circular
              </h2>
            </div>
          </ScrollReveal>

          {/* Articles Section */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
            {articles.map((article, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <article className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all group cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 md:p-5">
                    <h3 className="text-base md:text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
                      {article.description}
                    </p>
                    <a 
                      href={article.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs md:text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
                      <span className="font-medium">Fonte: {article.source}</span>
                    </a>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className="space-y-2 md:space-y-3 max-w-xl mx-auto mb-6 md:mb-8">
            {points.map((point, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                <button 
                  onClick={() => setSelectedPoint(point)}
                  className="w-full flex items-start gap-2 md:gap-3 bg-card p-3 md:p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-all hover:scale-[1.02] text-left"
                >
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <p className="text-sm md:text-base">
                    <strong className="text-foreground">{point.title}:</strong>{" "}
                    <span className="text-muted-foreground">{point.desc}</span>
                  </p>
                </button>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={500}>
            <div className="text-center">
              <div className="inline-block bg-primary/5 border border-primary/20 rounded-lg px-4 md:px-5 py-2.5 md:py-3">
                <p className="text-sm md:text-base text-muted-foreground">
                  Na Conecta Brasil, praticamos economia circular em cada peça
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Dialog open={!!selectedPoint} onOpenChange={() => setSelectedPoint(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-primary" />
              {selectedPoint?.title}
            </DialogTitle>
            <DialogDescription className="text-base">
              {selectedPoint?.desc}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 text-sm text-muted-foreground leading-relaxed">
            {selectedPoint?.content}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EconomiaCircular;