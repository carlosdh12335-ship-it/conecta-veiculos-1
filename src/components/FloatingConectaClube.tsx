import { Crown } from "lucide-react";

const FloatingConectaClube = () => {
  const handleClick = () => {
    window.open("https://conectaclube.site/", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-[0_0_20px_hsl(var(--primary)),0_0_40px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_30px_hsl(var(--primary)),0_0_60px_hsl(var(--primary)/0.6)] transition-all duration-300 hover:scale-110"
      aria-label="Conecta Clube"
    >
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-green-400 rounded-full shadow-[0_0_10px_#4ade80,0_0_20px_#4ade80,0_0_30px_#22c55e]" />
      <Crown className="w-5 h-5" />
      <span className="font-bold text-sm hidden sm:inline">Conecta Clube</span>
    </button>
  );
};

export default FloatingConectaClube;
