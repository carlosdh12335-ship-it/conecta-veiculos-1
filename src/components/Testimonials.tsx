import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";
import ScrollReveal from "@/components/ScrollReveal";
import PremiumGear from "@/components/PremiumGear";

interface Testimonial {
  name: string;
  role: string;
  initials: string;
  comment: string;
  fullComment: string;
}

const testimonials: Testimonial[] = [
  { name: "Carlos Silva", role: "Mecânico", initials: "CS", comment: "Excelente qualidade e entrega rápida!", fullComment: "Trabalho com a Conecta há mais de um ano e sempre encontro as peças que preciso. A qualidade é excelente e a entrega sempre chega no prazo. Recomendo para todos os colegas mecânicos!" },
  { name: "Marina Souza", role: "Proprietária de Oficina", initials: "MS", comment: "Parceria de confiança há mais de um ano!", fullComment: "Como dona de oficina, preciso de fornecedores confiáveis. A Conecta nunca me decepcionou - peças originais, preços justos e atendimento excepcional. Minha oficina só cresce com essa parceria." },
  { name: "Roberto Lima", role: "Revendedor", initials: "RL", comment: "Fornecedor sério e comprometido!", fullComment: "Como revendedor, preciso de estoque diversificado e entregas pontuais. A Conecta entrega isso e muito mais. O sistema de cotação é rápido e eficiente." },
  { name: "Ana Costa", role: "Mecânica", initials: "AC", comment: "Peças originais com preço justo!", fullComment: "Encontrei na Conecta o equilíbrio perfeito entre qualidade e preço. As peças são originais, testadas e com garantia. Meus clientes ficam satisfeitos e eu também!" },
  { name: "Paulo Santos", role: "Oficina", initials: "PS", comment: "Atendimento impecável e rápido!", fullComment: "O atendimento via WhatsApp é sensacional. Sempre recebo resposta rápida e os consultores conhecem muito bem os produtos. Isso faz toda diferença no dia a dia." },
  { name: "Juliana Rocha", role: "Revendedora", initials: "JR", comment: "Melhor fornecedor da região!", fullComment: "Depois que conheci a Conecta, não preciso mais de outros fornecedores. Eles têm tudo que preciso, com qualidade garantida e condições de pagamento flexíveis." },
  { name: "Fernando Alves", role: "Mecânico", initials: "FA", comment: "Sempre encontro o que preciso!", fullComment: "Não importa o modelo ou a peça, a Conecta sempre tem ou consegue rapidamente. Isso me dá segurança para prometer prazos aos meus clientes." },
  { name: "Camila Dias", role: "Proprietária", initials: "CD", comment: "Entrega pontual e peças de qualidade!", fullComment: "A pontualidade na entrega é fundamental para minha oficina. Com a Conecta, nunca tive problemas de atraso. E as peças sempre chegam bem embaladas e em perfeito estado." },
  { name: "Ricardo Melo", role: "Revendedor", initials: "RM", comment: "Preços competitivos e bom estoque!", fullComment: "Os preços da Conecta são imbatíveis no mercado. Consigo oferecer boas margens aos meus clientes e ainda ter lucro saudável. O estoque é sempre abastecido." },
  { name: "Beatriz Lima", role: "Mecânica", initials: "BL", comment: "Suporte técnico excepcional!", fullComment: "Quando tenho dúvidas sobre compatibilidade de peças, a equipe técnica da Conecta sempre me ajuda. Esse suporte faz toda diferença e evita erros." }
];

interface TestimonialsProps {
  className?: string;
}

const Testimonials = ({ className }: TestimonialsProps = {}) => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  return (
    <>
      <section id="testimonials" className={`py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden ${className || ''}`}>
        {/* Premium Gears */}
        <PremiumGear size={120} position="top-left" delay={100} teeth={10} />
        <PremiumGear size={90} position="bottom-right" delay={350} reverse teeth={8} />
        <div className="container max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-6 md:mb-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2">
                O que nossos clientes dizem
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto">
                Confiança construída através da qualidade e bom atendimento
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <Carousel 
              opts={{ align: "start", loop: true }} 
              plugins={[Autoplay({ delay: 4000 })]} 
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-3">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-3 basis-[85%] sm:basis-1/2 md:basis-1/3">
                    <Card 
                      className="border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] h-full cursor-pointer"
                      onClick={() => setSelectedTestimonial(testimonial)}
                    >
                      <CardContent className="pt-4 pb-4 md:pt-5 md:pb-5 px-3 md:px-4 space-y-2 md:space-y-3">
                        <Quote className="w-5 h-5 md:w-6 md:h-6 text-primary opacity-30" strokeWidth={1.5} />
                        
                        <p className="text-muted-foreground text-sm md:text-base italic leading-relaxed">
                          "{testimonial.comment}"
                        </p>
                        
                        <div className="flex items-center gap-2 md:gap-3 pt-2 border-t border-border/50">
                          <Avatar className="h-8 w-8 md:h-10 md:w-10 bg-primary text-primary-foreground">
                            <AvatarFallback className="text-xs md:text-sm font-medium">{testimonial.initials}</AvatarFallback>
                          </Avatar>
                          <div className="min-w-0">
                            <p className="font-medium text-foreground text-sm md:text-base truncate">{testimonial.name}</p>
                            <p className="text-xs md:text-sm text-muted-foreground truncate">{testimonial.role}</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="h-3.5 w-3.5 md:h-4 md:w-4 fill-primary text-primary" strokeWidth={1.5} />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-3 lg:-left-4 h-8 w-8" />
              <CarouselNext className="hidden md:flex -right-3 lg:-right-4 h-8 w-8" />
            </Carousel>
          </ScrollReveal>
        </div>
      </section>

      <Dialog open={!!selectedTestimonial} onOpenChange={() => setSelectedTestimonial(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <Avatar className="h-12 w-12 bg-primary text-primary-foreground">
                <AvatarFallback className="text-sm font-medium">{selectedTestimonial?.initials}</AvatarFallback>
              </Avatar>
              <div>
                <DialogTitle className="text-lg">{selectedTestimonial?.name}</DialogTitle>
                <DialogDescription>{selectedTestimonial?.role}</DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <div className="mt-2">
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" strokeWidth={1.5} />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              "{selectedTestimonial?.fullComment}"
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Testimonials;
