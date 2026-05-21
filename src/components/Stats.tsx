import { Users, Package, CheckCircle2, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PremiumGear from "@/components/PremiumGear";

const stats = [
  { icon: Users, value: 1500, prefix: "+", suffix: "", label: "Parceiros" },
  { icon: Package, value: 300, prefix: "+", suffix: "", label: "Fornecedores parceiros" },
  { icon: CheckCircle2, value: 12000, prefix: "+", suffix: "", label: "Peças entregues" },
  { icon: Award, value: 100, prefix: "", suffix: "%", label: "Qualidade garantida" }
];

interface StatsProps {
  className?: string;
}

const Stats = ({ className }: StatsProps = {}) => {
  return (
    <section className={`py-8 md:py-12 lg:py-14 bg-background relative overflow-hidden ${className || ''}`}>
      {/* Premium Gear */}
      <PremiumGear size={90} position="bottom-right" delay={300} teeth={8} />
      <div className="container max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="text-center space-y-2 md:space-y-3 p-4 md:p-6 bg-card/50 rounded-xl border border-border/50">
                  <div className="w-12 h-12 md:w-14 md:h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
                    {stat.prefix}{stat.value.toLocaleString('pt-BR')}{stat.suffix}
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground font-medium leading-tight">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
