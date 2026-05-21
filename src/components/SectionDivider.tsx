interface SectionDividerProps {
  variant?: 'default' | 'subtle' | 'accent';
  className?: string;
}
const SectionDivider = ({
  variant = 'default',
  className
}: SectionDividerProps) => {
  if (variant === 'subtle') {
    return <div className={`relative py-4 ${className || ''}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>;
  }
  if (variant === 'accent') {
    return <div className={`relative py-6 overflow-hidden ${className || ''}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-border" />
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-primary/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            <div className="w-1 h-1 rounded-full bg-primary/40" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-border" />
        </div>
      </div>;
  }
  return <div className={`relative py-3 ${className || ''}`}>
      
    </div>;
};
export default SectionDivider;