import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <h1 className="text-6xl md:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-red to-white animate-shimmer bg-[length:200%_auto]">
        Vault402
      </h1>
    </div>
  );
};

export default LoadingScreen;
