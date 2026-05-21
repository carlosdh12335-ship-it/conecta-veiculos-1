interface ScrollingTextProps {
  className?: string;
}

const ScrollingText = ({ className }: ScrollingTextProps) => {
  return (
    <div className={`bg-primary py-2.5 overflow-hidden ${className || ''}`}>
      <div className="flex whitespace-nowrap animate-scroll-left">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="text-primary-foreground text-xs md:text-sm font-semibold tracking-widest mx-8">
            CONECTA DO BRASIL
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingText;