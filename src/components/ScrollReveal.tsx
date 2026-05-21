import React from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

const ScrollReveal = ({ 
  children, 
  className,
  delay = 0,
  direction = 'up'
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const getAnimationClass = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-8 opacity-0';
      case 'down':
        return '-translate-y-8 opacity-0';
      case 'left':
        return 'translate-x-8 opacity-0';
      case 'right':
        return '-translate-x-8 opacity-0';
      case 'fade':
        return 'opacity-0';
      default:
        return 'translate-y-8 opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? 'translate-x-0 translate-y-0 opacity-100' : getAnimationClass(),
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
