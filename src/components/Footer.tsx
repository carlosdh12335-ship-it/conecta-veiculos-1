import { Mail, MapPin, Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
interface FooterLink {
  label: string;
  description: string;
  content: string;
}
const usefulLinks: FooterLink[] = [{
  label: "Nossas Vantagens",
  description: "Conheça nossos diferenciais",
  content: "Oferecemos os melhores preços do mercado, entrega para todo o Brasil, atendimento especializado e garantia em todas as peças. Economize até 70% comparado a peças novas."
}, {
  label: "Seja Fornecedor",
  description: "Faça parte da nossa rede",
  content: "Junte-se a mais de 1.500 fornecedores homologados em todo o Brasil. Oferecemos plataforma de vendas, visibilidade nacional e suporte completo para seu negócio crescer."
}, {
  label: "FAQ",
  description: "Perguntas frequentes",
  content: "Tire suas dúvidas sobre formas de pagamento, prazo de entrega, garantia das peças, processo de compra e muito mais. Nossa equipe está pronta para ajudar."
}];
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [selectedLink, setSelectedLink] = useState<FooterLink | null>(null);
  return <>
      <footer className="bg-foreground text-background">
        {/* Divider line */}
        <div className="border-t border-background/20" />
        
        <div className="container max-w-5xl mx-auto px-4 py-10 md:py-14">
          {/* Social Media Icons */}
          <div className="flex justify-center gap-3 md:gap-4 mb-8 md:mb-10">
            <a href="https://www.instagram.com/conecta_do_brasil?igsh=MWR3NHpwbWJudnh6Mw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-background/30 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all">
              <Instagram className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </a>
            <a href="https://facebook.com/conectadobrasil" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-background/30 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all">
              <Facebook className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </a>
            <a href="https://youtube.com/@conectadobrasil" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-background/30 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all">
              <Youtube className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </a>
            <a href="https://linkedin.com/company/conectadobrasil" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-background/30 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all">
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </a>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-6 md:mb-8">
            <img src={logo} alt="Conecta Brasil Autopeças" className="h-12 md:h-14 brightness-0 invert" />
          </div>

          {/* Tagline */}
          <p className="text-center text-base md:text-lg mb-6 md:mb-8">
            Feito com dedicação para o mercado automotivo Brasileiro 💚
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-10">
            {usefulLinks.map((item, i) => <button key={i} onClick={() => setSelectedLink(item)} className="text-sm md:text-base text-background/70 hover:text-primary transition-colors">
                {item.label}
              </button>)}
          </div>

          {/* Copyright */}
          

          {/* Business Info */}
          <div className="text-center text-xs md:text-sm text-background/60 leading-relaxed max-w-3xl mx-auto mb-6">
            <p className="mb-3">
              Nosso atendimento é realizado de segunda a sexta das 08h às 18h e aos sábados das 08h às 12h.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-background/60">
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] md:text-xs text-primary font-medium">SAC – Atendimento ao Cliente</span>
              <a href="mailto:vendasconecta@yahoo.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" strokeWidth={1.5} />
                vendasconecta@yahoo.com
              </a>
            </div>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" strokeWidth={1.5} />
              Atendimento em todo o Brasil
            </span>
          </div>
        </div>
      </footer>

      <Dialog open={!!selectedLink} onOpenChange={() => setSelectedLink(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">{selectedLink?.label}</DialogTitle>
            <DialogDescription className="text-base">
              {selectedLink?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 text-sm text-muted-foreground leading-relaxed">
            {selectedLink?.content}
          </div>
        </DialogContent>
      </Dialog>
    </>;
};
export default Footer;