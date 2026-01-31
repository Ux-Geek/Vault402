import React from 'react';

const LoadingScreen: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <div className="flex items-start gap-4">
                <h1 className="text-6xl md:text-9xl font-serif italic tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-red to-white animate-shimmer bg-[length:200%_auto]">
                    Vault402
                </h1>
                <span className="text-xl md:text-2xl font-sans font-bold uppercase tracking-tighter text-brand-white opacity-50 mt-2 md:mt-4">
                    Beta
                </span>
            </div>
        </div>
    );
};

export default LoadingScreen;
