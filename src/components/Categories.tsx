import { Card } from "@/components/ui/card";
import { Settings, Cog, PanelTop, CircleDot, Wrench } from "lucide-react";
import enginesImg from "@/assets/category-engines.jpg";
import transmissionImg from "@/assets/category-transmission.jpg";
import bodyImg from "@/assets/category-body.jpg";
import wheelsImg from "@/assets/category-wheels.jpg";
import mechanicalImg from "@/assets/category-mechanical.jpg";
const categories = [{
  icon: Settings,
  title: "Motores",
  image: enginesImg,
  description: "Motores completos e componentes"
}, {
  icon: Cog,
  title: "Câmbios",
  image: transmissionImg,
  description: "Câmbios manuais e automáticos"
}, {
  icon: PanelTop,
  title: "Latarias",
  image: bodyImg,
  description: "Portas, capôs, para-choques e mais"
}, {
  icon: CircleDot,
  title: "Rodas",
  image: wheelsImg,
  description: "Rodas e aros de diversas medidas"
}, {
  icon: Wrench,
  title: "Peças Mecânicas",
  image: mechanicalImg,
  description: "Freios, suspensão, filtros e mais"
}];
interface CategoriesProps {
  className?: string;
}
const Categories = ({
  className
}: CategoriesProps = {}) => {
  return <section id="categories" className={`py-12 md:py-32 bg-background ${className || ''}`}>
      
    </section>;
};
export default Categories;