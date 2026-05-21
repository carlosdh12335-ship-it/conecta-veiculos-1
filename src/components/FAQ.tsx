import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PremiumGear from "@/components/PremiumGear";

const faqs = [
  { question: "Com quais peças trabalhamos?", answer: "Trabalhamos com todas as peças de veículos, de pára-choque a pára-choque, incluindo motores e correlatos, sistema combustível, câmbios e transmissões, eixos, direção e suspensões, rodas e freios, carroceria e acabamentos, equipamentos elétricos, etc." },
  { question: "Vocês fazem envio para todo o Brasil?", answer: "Sim! Realizamos entregas para todos os estados brasileiros com segurança e rapidez." },
  { question: "As peças têm garantia?", answer: "Sim, todas as peças são testadas e possuem garantia de procedência." },
  { question: "Quais as formas de pagamento?", answer: "Aceitamos PIX, transferência bancária, cartão de crédito e boleto." },
  { question: "Qual o prazo de entrega?", answer: "Geralmente de 3 a 10 dias úteis, dependendo da localização e disponibilidade." },
  { question: "Como solicito um orçamento?", answer: "Pelo e-mail vendasconecta@yahoo.com ou WhatsApp +55 62 8474-4069." },
  { question: "Vocês vendem no atacado e varejo?", answer: "Sim! Atendemos clientes finais, oficinas e revendedores com condições especiais." },
  { question: "Como posso me tornar um fornecedor?", answer: "Entre em contato pelo e-mail com o assunto 'Quero ser fornecedor'." },
  { question: "Qual a política de trocas?", answer: "Aceitamos trocas em até 7 dias após o recebimento, com a peça sem uso e na embalagem original." }
];

interface FAQProps {
  className?: string;
}

const FAQ = ({ className }: FAQProps = {}) => {
  return (
    <section id="faq" className={`py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden ${className || ''}`}>
      {/* Premium Gears */}
      <PremiumGear size={130} position="top-left" delay={100} teeth={10} />
      <PremiumGear size={80} position="bottom-right" delay={500} reverse teeth={6} />
      <div className="container max-w-2xl lg:max-w-3xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-6 md:mb-10">
            <div className="inline-flex items-center gap-1.5 md:gap-2 bg-primary/10 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full mb-3 md:mb-4">
              <HelpCircle className="icon-standard-sm" strokeWidth={1.5} />
              <span className="text-[10px] md:text-xs font-semibold text-primary">DÚVIDAS</span>
            </div>
            <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-foreground mb-2">
              Perguntas Frequentes
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>
        </ScrollReveal>
        
        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <AccordionItem 
                value={`item-${index}`}
                className="border border-border rounded-lg px-3 md:px-4 data-[state=open]:border-primary/50 bg-card transition-colors"
              >
                <AccordionTrigger className="text-left text-xs md:text-sm font-medium hover:no-underline hover:text-primary py-3 md:py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-[11px] md:text-xs lg:text-sm leading-relaxed pb-3 md:pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </ScrollReveal>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
