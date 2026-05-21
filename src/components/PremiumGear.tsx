import { useEffect, useState } from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface PremiumGearProps {
  size?: number;
  mobileSize?: number;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  delay?: number;
  reverse?: boolean;
  teeth?: number;
}

const PremiumGear = ({ 
  size = 120, 
  mobileSize,
  position = 'top-left',
  className = '',
  delay = 0,
  reverse = false,
  teeth = 12
}: PremiumGearProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [isDrawn, setIsDrawn] = useState(false);
  
  // Use mobileSize if provided, otherwise scale down proportionally (60% of desktop size)
  const actualMobileSize = mobileSize ?? Math.round(size * 0.6);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsDrawn(true);
      }, delay + 600);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  const positionClasses = {
    'top-left': '-top-12 -left-12',
    'top-right': '-top-12 -right-12',
    'bottom-left': '-bottom-12 -left-12',
    'bottom-right': '-bottom-12 -right-12',
  };

  // Generate gear path with teeth
  const generateGearPath = (cx: number, cy: number, outerRadius: number, innerRadius: number, toothCount: number) => {
    const toothDepth = (outerRadius - innerRadius) * 0.4;
    const angleStep = (2 * Math.PI) / toothCount;
    const toothWidth = angleStep * 0.35;
    
    let path = '';
    
    for (let i = 0; i < toothCount; i++) {
      const angle = i * angleStep - Math.PI / 2;
      
      // Outer tooth point
      const x1 = cx + Math.cos(angle - toothWidth / 2) * (outerRadius - toothDepth);
      const y1 = cy + Math.sin(angle - toothWidth / 2) * (outerRadius - toothDepth);
      
      const x2 = cx + Math.cos(angle - toothWidth / 3) * outerRadius;
      const y2 = cy + Math.sin(angle - toothWidth / 3) * outerRadius;
      
      const x3 = cx + Math.cos(angle + toothWidth / 3) * outerRadius;
      const y3 = cy + Math.sin(angle + toothWidth / 3) * outerRadius;
      
      const x4 = cx + Math.cos(angle + toothWidth / 2) * (outerRadius - toothDepth);
      const y4 = cy + Math.sin(angle + toothWidth / 2) * (outerRadius - toothDepth);
      
      // Valley between teeth
      const nextAngle = (i + 1) * angleStep - Math.PI / 2;
      const x5 = cx + Math.cos(nextAngle - toothWidth / 2) * (outerRadius - toothDepth);
      const y5 = cy + Math.sin(nextAngle - toothWidth / 2) * (outerRadius - toothDepth);
      
      if (i === 0) {
        path = `M ${x1} ${y1}`;
      }
      
      path += ` L ${x2} ${y2} L ${x3} ${y3} L ${x4} ${y4}`;
      
      // Curved valley
      const valleyMidAngle = angle + angleStep / 2;
      const valleyRadius = outerRadius - toothDepth * 1.2;
      const valleyMidX = cx + Math.cos(valleyMidAngle) * valleyRadius;
      const valleyMidY = cy + Math.sin(valleyMidAngle) * valleyRadius;
      
      path += ` Q ${valleyMidX} ${valleyMidY} ${x5} ${y5}`;
    }
    
    path += ' Z';
    return path;
  };

  const viewBoxSize = size;
  const center = viewBoxSize / 2;
  const outerRadius = viewBoxSize * 0.45;
  const innerRadius = viewBoxSize * 0.28;
  const holeRadius = viewBoxSize * 0.12;

  const gearPath = generateGearPath(center, center, outerRadius, innerRadius, teeth);
  const pathLength = 1000;

  // Reusable gear SVG content
  const renderGearSVG = (blurAmount: string, shadowSize: string) => (
    <>
      {/* Neon glow background */}
      <div 
        className={cn(
          'absolute inset-0 rounded-full transition-all duration-1000',
          isVisible ? 'opacity-60' : 'opacity-0'
        )}
        style={{
          background: 'radial-gradient(circle, hsl(142, 76%, 45%, 0.25) 0%, transparent 70%)',
          filter: `blur(${blurAmount})`,
          transform: 'scale(1.5)',
          transitionDelay: `${delay}ms`,
        }}
      />
      
      {/* SVG Gear */}
      <svg
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        className={cn(
          'w-full h-full transition-all duration-700 ease-out',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8',
          isDrawn && (reverse ? 'animate-spin-slow-reverse' : 'animate-spin-slow')
        )}
        style={{
          transitionDelay: `${delay}ms`,
          filter: `drop-shadow(0 0 ${shadowSize} hsl(142, 76%, 45%, 0.5)) drop-shadow(0 4px 12px rgba(0,0,0,0.2))`,
        }}
      >
        {/* Gear outline with stroke animation */}
        <path
          d={gearPath}
          fill="none"
          stroke="hsl(142, 76%, 45%)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: pathLength,
            strokeDashoffset: isVisible ? 0 : pathLength,
            transition: `stroke-dashoffset 1.2s ease-out ${delay}ms`,
          }}
        />
        
        {/* Inner gear fill - subtle */}
        <path
          d={gearPath}
          fill="hsl(142, 76%, 45%, 0.08)"
          className={cn(
            'transition-opacity duration-500',
            isDrawn ? 'opacity-100' : 'opacity-0'
          )}
          style={{ transitionDelay: `${delay + 800}ms` }}
        />
        
        {/* Center circle outline */}
        <circle
          cx={center}
          cy={center}
          r={innerRadius * 0.7}
          fill="none"
          stroke="hsl(142, 76%, 45%)"
          strokeWidth="1"
          style={{
            strokeDasharray: 2 * Math.PI * innerRadius * 0.7,
            strokeDashoffset: isVisible ? 0 : 2 * Math.PI * innerRadius * 0.7,
            transition: `stroke-dashoffset 0.8s ease-out ${delay + 400}ms`,
          }}
        />
        
        {/* Center hole */}
        <circle
          cx={center}
          cy={center}
          r={holeRadius}
          fill="none"
          stroke="hsl(142, 76%, 45%)"
          strokeWidth="1.5"
          style={{
            strokeDasharray: 2 * Math.PI * holeRadius,
            strokeDashoffset: isVisible ? 0 : 2 * Math.PI * holeRadius,
            transition: `stroke-dashoffset 0.6s ease-out ${delay + 600}ms`,
          }}
        />
        
        {/* Decorative inner lines */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = center + Math.cos(rad) * (holeRadius + 4);
          const y1 = center + Math.sin(rad) * (holeRadius + 4);
          const x2 = center + Math.cos(rad) * (innerRadius * 0.6);
          const y2 = center + Math.sin(rad) * (innerRadius * 0.6);
          const lineLength = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
          
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="hsl(142, 76%, 45%, 0.6)"
              strokeWidth="0.8"
              style={{
                strokeDasharray: lineLength,
                strokeDashoffset: isVisible ? 0 : lineLength,
                transition: `stroke-dashoffset 0.5s ease-out ${delay + 800 + i * 50}ms`,
              }}
            />
          );
        })}
      </svg>
    </>
  );

  return (
    <div
      ref={ref}
      className={cn(
        'absolute pointer-events-none z-0',
        positionClasses[position],
        className
      )}
    >
      {/* Desktop size */}
      <div 
        className="hidden md:block relative"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        {renderGearSVG('20px', '8px')}
      </div>
      
      {/* Mobile size - identical appearance, just smaller */}
      <div 
        className="block md:hidden relative"
        style={{
          width: `${actualMobileSize}px`,
          height: `${actualMobileSize}px`,
        }}
      >
        {renderGearSVG('15px', '6px')}
      </div>
    </div>
  );
};

export default PremiumGear;
