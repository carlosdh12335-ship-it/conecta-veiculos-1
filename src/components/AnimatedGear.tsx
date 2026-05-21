import { Settings } from "lucide-react";

interface AnimatedGearProps {
  size?: number;
  className?: string;
  reverse?: boolean;
}

const AnimatedGear = ({ size = 24, className = "", reverse = false }: AnimatedGearProps) => {
  return (
    <Settings 
      size={size} 
      className={`text-primary ${reverse ? 'animate-spin-slow-reverse' : 'animate-spin-slow'} ${className}`}
    />
  );
};

export default AnimatedGear;