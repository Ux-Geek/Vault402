import React from 'react';

const LoadingScreen: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-black dark:bg-white z-50 flex items-center justify-center transition-colors">
            <div className="flex items-baseline gap-4">
                <h1 className="text-4xl md:text-7xl font-serif italic tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-red to-white dark:from-black dark:via-brand-red dark:to-black animate-shimmer bg-[length:200%_auto]">
                    Vault402.
                </h1>
                <span className="text-base md:text-lg font-sans font-bold italic uppercase tracking-tighter text-brand-white dark:text-black opacity-50">
                    BETA
                </span>
            </div>
        </div>
    );
};

export default LoadingScreen;
