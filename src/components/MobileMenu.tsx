import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { title: "Quem somos", href: "#our-story" },
    { title: "Solicitar minha peça", href: "#quote-form" },
    { title: "Quero assinar Conecta Clube", href: "#conecta-clube" },
    { title: "Quero ser fornecedor Conecta", href: "#fornecedor" },
    { title: "Reciclagem Automotiva no Brasil", href: "#reciclagem" },
    { title: "Entender mais sobre a Economia Circular", href: "#economia-circular" },
    { title: "FAQ", href: "#faq" },
  ];

  const handleClick = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
          <Menu className="h-6 w-6 text-white" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
        </SheetHeader>
        <nav className="mt-8">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleClick(item.href)}
                  className="text-lg font-medium hover:text-primary transition-colors w-full text-left py-2"
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
