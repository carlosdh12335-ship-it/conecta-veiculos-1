import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Search, User, MapPin, Mail, Car, Calendar, Settings, FileText, Sparkles, Send, ShieldCheck, MessageCircle } from "lucide-react";

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

interface QuoteFormModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const STORAGE_KEY = "quote-form-data";

const personalFields = [
  { name: "name", label: "Nome completo", placeholder: "Seu nome", icon: User },
  { name: "city", label: "Cidade", placeholder: "Ex: São Paulo - SP", icon: MapPin },
  { name: "email", label: "E-mail", placeholder: "seu@email.com", type: "email", icon: Mail },
];

const vehicleFields = [
  { name: "brand", label: "Marca", placeholder: "Ex: Chevrolet", icon: Car },
  { name: "model", label: "Modelo", placeholder: "Ex: Onix", icon: Car },
  { name: "year", label: "Ano", placeholder: "Ex: 2020", icon: Calendar },
  { name: "version", label: "Versão", placeholder: "Ex: LT", icon: Settings },
];

const QuoteFormModal = ({ isOpen, onOpenChange }: QuoteFormModalProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      name: "", city: "", email: "", brand: "", model: "", year: "", version: "", partDescription: ""
    }
  });

  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        form.reset(parsed);
      } catch (e) {
        console.error("Error loading saved form data:", e);
      }
    }
  }, [form]);

  useEffect(() => {
    const subscription = form.watch((data) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    });
    return () => subscription.unsubscribe();
  }, [form]);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const message = `Olá! Gostaria de solicitar uma peça:%0A%0A` +
      `📋 *DADOS PESSOAIS*%0A` +
      `• Nome: ${encodeURIComponent(values.name)}%0A` +
      `• Cidade: ${encodeURIComponent(values.city)}%0A` +
      `• E-mail: ${encodeURIComponent(values.email)}%0A%0A` +
      `🚗 *DADOS DO VEÍCULO*%0A` +
      `• Marca: ${encodeURIComponent(values.brand)}%0A` +
      `• Modelo: ${encodeURIComponent(values.model)}%0A` +
      `• Ano: ${encodeURIComponent(values.year)}%0A` +
      `• Versão: ${encodeURIComponent(values.version)}%0A%0A` +
      `🔧 *PEÇA DESEJADA*%0A` +
      `${encodeURIComponent(values.partDescription)}`;
    
    localStorage.removeItem(STORAGE_KEY);
    onOpenChange(false);
    form.reset();
    window.open(`https://wa.me/556284744069?text=${message}`, "_blank");
  };

  const isFormValid = form.formState.isValid;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-lg max-h-[90vh] overflow-y-auto p-0 gap-0 rounded-2xl border-primary/20 bg-background shadow-2xl">
        {/* Header */}
        <div className="relative bg-gradient-to-b from-primary/15 to-transparent px-5 pt-6 pb-4">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_80%)]" />
          
          <DialogHeader className="relative">
            <div className="flex items-center justify-center gap-2.5 mb-1.5">
              <div className="p-2 rounded-xl bg-primary/15 border border-primary/20">
                <Search className="w-4 h-4 text-primary" strokeWidth={2} />
              </div>
              <DialogTitle className="text-lg font-bold text-foreground">
                Solicitar Minha Peça
              </DialogTitle>
            </div>
            <p className="text-center text-xs text-muted-foreground">
              Preencha os dados e receba sua cotação via WhatsApp
            </p>
          </DialogHeader>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="px-5 pb-5 pt-1 space-y-4">
            {/* Personal Data */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-1.5 pb-1.5 border-b border-border/40">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">Seus Dados</span>
              </div>
              
              <div className="space-y-2.5">
                {personalFields.map((field) => (
                  <FormField
                    key={field.name}
                    control={form.control}
                    name={field.name as keyof z.infer<typeof formSchema>}
                    render={({ field: formField }) => (
                      <FormItem>
                        <FormLabel className="text-[11px] font-medium text-foreground/80 flex items-center gap-1.5">
                          <field.icon className="w-3 h-3 text-primary/60" />
                          {field.label}
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type={field.type || "text"} 
                            placeholder={field.placeholder} 
                            {...formField} 
                            className="h-9 text-sm bg-secondary/30 border-border/40 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 rounded-lg transition-all"
                            required 
                          />
                        </FormControl>
                        <FormMessage className="text-[10px]" />
                      </FormItem>
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Vehicle Data */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-1.5 pb-1.5 border-b border-border/40">
                <Car className="w-3.5 h-3.5 text-primary" />
                <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">Dados do Veículo</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2.5">
                {vehicleFields.map((field) => (
                  <FormField
                    key={field.name}
                    control={form.control}
                    name={field.name as keyof z.infer<typeof formSchema>}
                    render={({ field: formField }) => (
                      <FormItem>
                        <FormLabel className="text-[11px] font-medium text-foreground/80 flex items-center gap-1.5">
                          <field.icon className="w-3 h-3 text-primary/60" />
                          {field.label}
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder={field.placeholder} 
                            {...formField} 
                            className="h-9 text-sm bg-secondary/30 border-border/40 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 rounded-lg transition-all"
                            required 
                          />
                        </FormControl>
                        <FormMessage className="text-[10px]" />
                      </FormItem>
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Part Description */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-1.5 pb-1.5 border-b border-border/40">
                <FileText className="w-3.5 h-3.5 text-primary" />
                <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">Peça Desejada</span>
              </div>
              
              <FormField
                control={form.control}
                name="partDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea 
                        placeholder="Descreva a peça que você precisa... Ex: Motor completo, Farol dianteiro direito, Parachoque traseiro" 
                        {...field} 
                        className="min-h-[70px] text-sm bg-secondary/30 border-border/40 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 rounded-lg transition-all resize-none"
                        required 
                      />
                    </FormControl>
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
            </div>

            {/* Submit */}
            <div className="pt-1">
              <Button 
                type="submit" 
                size="lg" 
                disabled={!isFormValid}
                className="w-full text-sm py-5 gap-2 font-bold rounded-xl shadow-lg transition-all duration-300 disabled:opacity-40"
                style={{
                  boxShadow: isFormValid ? '0 0 25px hsl(var(--primary) / 0.35), 0 8px 25px rgba(0,0,0,0.15)' : 'none',
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Enviar para WhatsApp
              </Button>
              
              {!isFormValid && (
                <p className="text-center text-[10px] text-muted-foreground mt-1.5">
                  Preencha todos os campos para continuar
                </p>
              )}
            </div>

            {/* Trust */}
            <div className="flex items-center justify-center gap-3 pt-1 text-[10px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-primary/60" />
                Dados seguros
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-primary/60" />
                Cotação gratuita
              </span>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteFormModal;