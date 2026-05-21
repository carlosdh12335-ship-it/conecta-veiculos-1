import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Building2, Mail, Phone, Lock, MapPin, FileText } from "lucide-react";
import { useEffect } from "react";

const formSchema = z.object({
  companyName: z.string().trim().min(3, {
    message: "Nome da empresa deve ter pelo menos 3 caracteres"
  }).max(100, {
    message: "Nome da empresa deve ter no máximo 100 caracteres"
  }),
  email: z.string().trim().email({
    message: "Email inválido"
  }).max(255, {
    message: "Email deve ter no máximo 255 caracteres"
  }),
  phone: z.string().trim().min(10, {
    message: "Telefone deve ter pelo menos 10 dígitos"
  }).max(15, {
    message: "Telefone deve ter no máximo 15 dígitos"
  }).regex(/^[0-9+\-\s()]+$/, {
    message: "Telefone inválido"
  }),
  password: z.string().min(8, {
    message: "Senha deve ter pelo menos 8 caracteres"
  }).max(100, {
    message: "Senha deve ter no máximo 100 caracteres"
  }),
  cnpj: z.string().trim().min(14, {
    message: "CNPJ inválido"
  }).max(18, {
    message: "CNPJ inválido"
  }).regex(/^[0-9.\-/]+$/, {
    message: "CNPJ inválido"
  }),
  address: z.string().trim().min(10, {
    message: "Endereço deve ter pelo menos 10 caracteres"
  }).max(200, {
    message: "Endereço deve ter no máximo 200 caracteres"
  }),
  description: z.string().trim().min(20, {
    message: "Descrição deve ter pelo menos 20 caracteres"
  }).max(1000, {
    message: "Descrição deve ter no máximo 1000 caracteres"
  })
});

interface SupplierFormProps {
  className?: string;
}

const STORAGE_KEY = "supplier_form_data";

const SupplierForm = ({ className }: SupplierFormProps = {}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      companyName: "",
      email: "",
      phone: "",
      password: "",
      cnpj: "",
      address: "",
      description: ""
    }
  });

  // Load saved data on mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        form.reset(parsed);
      } catch (e) {
        // Invalid data, ignore
      }
    }
  }, [form]);

  // Watch all fields for auto-save
  const watchedValues = useWatch({ control: form.control });

  // Auto-save to localStorage
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(watchedValues));
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [watchedValues]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const message = `Olá! Gostaria de me cadastrar como fornecedor. Aqui estão minhas informações:

• Empresa: ${values.companyName}
• CNPJ: ${values.cnpj}
• Email: ${values.email}
• Telefone: ${values.phone}
• Endereço: ${values.address}
• Descrição: ${values.description}`;

      const whatsappUrl = `https://wa.me/556284744069?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      toast.success("Redirecionando para o WhatsApp!", {
        description: "Complete seu cadastro pelo WhatsApp."
      });
      localStorage.removeItem(STORAGE_KEY);
      form.reset();
    } catch (error) {
      toast.error("Erro ao enviar cadastro", {
        description: "Por favor, tente novamente."
      });
    }
  };

  const isFormValid = form.formState.isValid;

  return (
    <section id="formulario-fornecedor" className={`py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background ${className || ''}`}>
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Building2 className="h-4 w-4" />
            Cadastro de Fornecedor
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Torne-se um Fornecedor Conecta
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato em breve
          </p>
        </div>

        {/* Floating Glass Card Form */}
        <div className="glass-card p-6 md:p-10 shadow-2xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <FormField 
                  control={form.control} 
                  name="companyName" 
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-sm font-medium">
                        <Building2 className="h-4 w-4 text-primary" />
                        Nome da Empresa
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Sua Empresa Ltda" 
                          {...field} 
                          className="h-11 bg-background/50 border-border/50 focus:border-primary transition-colors" 
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )} 
                />

                <FormField 
                  control={form.control} 
                  name="cnpj" 
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-sm font-medium">
                        <FileText className="h-4 w-4 text-primary" />
                        CNPJ
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="00.000.000/0000-00" 
                          {...field} 
                          className="h-11 bg-background/50 border-border/50 focus:border-primary transition-colors" 
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )} 
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <FormField 
                  control={form.control} 
                  name="email" 
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-sm font-medium">
                        <Mail className="h-4 w-4 text-primary" />
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="contato@empresa.com" 
                          {...field} 
                          className="h-11 bg-background/50 border-border/50 focus:border-primary transition-colors" 
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )} 
                />

                <FormField 
                  control={form.control} 
                  name="phone" 
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-sm font-medium">
                        <Phone className="h-4 w-4 text-primary" />
                        Telefone
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="(00) 00000-0000" 
                          {...field} 
                          className="h-11 bg-background/50 border-border/50 focus:border-primary transition-colors" 
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )} 
                />
              </div>

              <FormField 
                control={form.control} 
                name="password" 
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-sm font-medium">
                      <Lock className="h-4 w-4 text-primary" />
                      Senha
                    </FormLabel>
                    <FormControl>
                      <Input 
                        type="password" 
                        placeholder="Mínimo 8 caracteres" 
                        {...field} 
                        className="h-11 bg-background/50 border-border/50 focus:border-primary transition-colors" 
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )} 
              />

              <FormField 
                control={form.control} 
                name="address" 
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-sm font-medium">
                      <MapPin className="h-4 w-4 text-primary" />
                      Endereço Completo
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Rua, Número, Bairro, Cidade - Estado" 
                        {...field} 
                        className="h-11 bg-background/50 border-border/50 focus:border-primary transition-colors" 
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )} 
              />

              <FormField 
                control={form.control} 
                name="description" 
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-sm font-medium">
                      <FileText className="h-4 w-4 text-primary" />
                      Descrição dos Produtos/Serviços
                    </FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Conte-nos sobre os produtos e serviços que sua empresa oferece..." 
                        className="min-h-[120px] bg-background/50 border-border/50 focus:border-primary transition-colors resize-none" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )} 
              />

              <Button 
                type="submit" 
                size="lg" 
                disabled={!isFormValid}
                className={`w-full h-14 text-base font-semibold transition-all ${
                  isFormValid 
                    ? 'bg-primary hover:bg-primary-dark shadow-lg hover:shadow-xl hover:scale-[1.02]' 
                    : 'bg-muted text-muted-foreground cursor-not-allowed'
                }`}
              >
                Enviar pelo WhatsApp
              </Button>
              
              {!isFormValid && (
                <p className="text-center text-xs text-muted-foreground">
                  Preencha todos os campos corretamente para enviar
                </p>
              )}
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default SupplierForm;
