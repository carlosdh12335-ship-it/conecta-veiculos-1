const NeonTopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-primary animate-neon-pulse">
      <div className="absolute inset-0 bg-primary blur-sm opacity-80" />
      <div className="absolute inset-0 bg-primary blur-md opacity-60" />
    </div>
  );
};

export default NeonTopBar;
