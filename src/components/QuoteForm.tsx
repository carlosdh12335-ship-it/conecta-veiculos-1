import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Search, Shield, Clock, Truck, CheckCircle2, Star, Award, Zap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PremiumGear from "@/components/PremiumGear";

const formSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório").min(3, "Nome deve ter pelo menos 3 caracteres"),
  city: z.string().min(1, "Cidade é obrigatória").min(2, "Informe sua cidade"),
  email: z.string().min(1, "E-mail é obrigatório").email("E-mail inválido"),
  brand: z.string().min(1, "Marca do veículo é obrigatória"),
  model: z.string().min(1, "Modelo do veículo é obrigatório"),
  year: z.string().min(1, "Ano do veículo é obrigatório"),
  version: z.string().min(1, "Versão é obrigatória"),
  partDescription: z.string().min(1, "Descrição da peça é obrigatória")
});

interface QuoteFormProps {
  className?: string;
}

const QuoteForm = ({ className }: QuoteFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "", city: "", email: "", brand: "", model: "", year: "", version: "", partDescription: ""
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const message = `Olá!%20Aqui%20estão%20minhas%20informações:%0A•%20Nome:%20${encodeURIComponent(values.name)}%0A•%20Cidade:%20${encodeURIComponent(values.city)}%0A•%20E-mail:%20${encodeURIComponent(values.email)}%0A•%20Marca:%20${encodeURIComponent(values.brand)}%0A•%20Modelo:%20${encodeURIComponent(values.model)}%0A•%20Ano:%20${encodeURIComponent(values.year)}%0A•%20Versão:%20${encodeURIComponent(values.version)}%0A•%20Descrição%20da%20Peça:%20${encodeURIComponent(values.partDescription)}`;
    setIsOpen(false);
    form.reset();
    window.open(`https://wa.me/556284744069?text=${message}`, "_blank");
  };

  const features = [
    { icon: Shield, title: "Procedência Garantida", desc: "Peças originais verificadas" },
    { icon: Clock, title: "Resposta Rápida", desc: "Cotação em até 30 minutos" },
    { icon: Truck, title: "Entrega Nacional", desc: "Enviamos para todo Brasil" },
    { icon: Award, title: "Qualidade Premium", desc: "Peças certificadas" }
  ];

  const stats = [
    { value: "500.000+", label: "Peças" },
    { value: "15.000+", label: "Clientes" },
    { value: "1.500+", label: "Parceiros" },
    { value: "98%", label: "Sucesso" }
  ];

  return (
    <section id="quote-form" className={`py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden ${className || ''}`}>
      {/* Premium Gears - Large and prominent */}
      <PremiumGear size={240} position="top-left" delay={100} teeth={14} />
      <PremiumGear size={200} position="bottom-right" delay={350} reverse teeth={12} />
      <div className="container max-w-5xl mx-auto px-4">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 border border-primary/20 rounded-full mb-4 md:mb-5">
              <Zap className="icon-standard-sm" strokeWidth={1.5} />
              <span className="text-primary font-medium text-[10px] md:text-xs">A maior rede de peças do Brasil</span>
            </div>
            
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-foreground">
              Encontre a <span className="text-primary">Peça Perfeita</span>
            </h2>
            
            <p className="text-muted-foreground text-xs md:text-sm lg:text-base max-w-xl mx-auto leading-relaxed">
              De parachoque a parachoque, todas as peças originais seminovas que você precisa.
            </p>
          </div>
        </ScrollReveal>

        {/* CTA Button */}
        <ScrollReveal delay={100}>
          <div className="flex justify-center mb-8 md:mb-12">
            <Button 
              onClick={() => setIsOpen(true)} 
              size="lg" 
              className="text-sm md:text-base lg:text-lg px-6 md:px-10 lg:px-12 py-4 md:py-5 lg:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-lg md:rounded-xl gap-2"
            >
              <Search className="icon-standard-sm" strokeWidth={1.5} />
              Solicitar peça
            </Button>
          </div>
        </ScrollReveal>

        {/* Info Card */}
        <ScrollReveal delay={200}>
          <div className="bg-card rounded-xl md:rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left - Features */}
              <div className="p-4 md:p-6 lg:p-8 bg-gradient-to-br from-primary/5 to-transparent">
                <h3 className="text-sm md:text-base lg:text-lg font-semibold text-foreground mb-4 md:mb-5">Por que escolher a Conecta?</h3>
                
                <div className="space-y-3 md:space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2 md:gap-3 group">
                      <div className="icon-container flex-shrink-0 w-7 h-7 md:w-9 md:h-9 group-hover:bg-primary/20">
                        <feature.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-medium text-xs md:text-sm text-foreground">{feature.title}</h4>
                        <p className="text-[10px] md:text-xs text-muted-foreground">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trust badges */}
                <div className="mt-4 md:mt-6 pt-4 md:pt-5 border-t border-border/50">
                  <div className="flex items-center gap-0.5 md:gap-1 text-[10px] md:text-xs text-muted-foreground">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 text-yellow-500 fill-yellow-500" strokeWidth={1.5} />
                    ))}
                    <span className="ml-1.5 md:ml-2">4.9/5 em 2.000+ avaliações</span>
                  </div>
                </div>
              </div>

              {/* Right - Stats */}
              <div className="p-4 md:p-6 lg:p-8 flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-2 md:p-3 rounded-lg md:rounded-xl bg-secondary/50 border border-border/50">
                      <div className="text-base md:text-xl lg:text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-[9px] md:text-[10px] lg:text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-1.5 md:space-y-2">
                  {["Cotação gratuita", "Sem compromisso", "Entrega nacional"].map((item, i) => (
                    <span key={i} className="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" strokeWidth={1.5} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto mx-4">
          <DialogHeader>
            <DialogTitle className="text-lg md:text-xl font-bold text-center">
              Encontre a Peça Perfeita
            </DialogTitle>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 md:space-y-3 mt-3 md:mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                {[
                  { name: "name", label: "1. Seu nome", placeholder: "Digite seu nome" },
                  { name: "city", label: "2. Sua cidade", placeholder: "Ex: São Paulo" },
                  { name: "email", label: "3. Seu e-mail", placeholder: "seu@email.com", type: "email" },
                  { name: "brand", label: "4. Marca do veículo", placeholder: "Ex: Chevrolet" },
                  { name: "model", label: "5. Modelo", placeholder: "Ex: Onix" },
                  { name: "year", label: "6. Ano", placeholder: "Ex: 2020" },
                  { name: "version", label: "7. Versão", placeholder: "Ex: LT" },
                  { name: "partDescription", label: "8. Descrição da peça", placeholder: "Ex: Motor" }
                ].map((field) => (
                  <FormField
                    key={field.name}
                    control={form.control}
                    name={field.name as keyof z.infer<typeof formSchema>}
                    render={({ field: formField }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] md:text-xs font-medium">{field.label}</FormLabel>
                        <FormControl>
                          <Input 
                            type={field.type || "text"} 
                            placeholder={field.placeholder} 
                            {...formField} 
                            className="h-8 md:h-9 text-xs md:text-sm"
                            required 
                          />
                        </FormControl>
                        <FormMessage className="text-[9px] md:text-[10px]" />
                      </FormItem>
                    )}
                  />
                ))}
              </div>

              <Button type="submit" size="lg" className="w-full text-xs md:text-sm py-4 md:py-5 mt-3 md:mt-4">
                Buscar Peça Agora
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default QuoteForm;
