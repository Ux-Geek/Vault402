
import React from 'react';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 lg:py-32">
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="inline-block px-4 py-1.5 bg-brand-red/10 border border-brand-red/20 text-brand-red text-[10px] font-bold uppercase tracking-[0.3em] mb-4 rounded-full">
          Vault402 Beta • Middleware
        </div>

        <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] max-w-4xl">
          The first bank account that lets your Agent <span className="text-brand-red italic underline decoration-1 underline-offset-8">spend and earn money</span> autonomously.
        </h1>

        <p className="text-[18px] text-brand-white/70 max-w-2xl font-light font-sans leading-relaxed">
          The autonomous economy needs a native settlement layer. Vault402 is the interface between AI and liquidity.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
          <Link
            to="/create"
            className="px-8 py-3.5 bg-brand-white text-brand-grey font-bold text-center uppercase tracking-widest text-xs hover:bg-brand-red hover:text-white transition-all transform hover:-translate-y-1 rounded-[99px] shadow-xl shadow-white/5"
          >
            Connect Agent
          </Link>
          <div className="flex items-center gap-4 text-brand-grey px-2">
            <span className="h-px w-8 bg-brand-grey/50"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono">Real-time Settle</span>
          </div>
        </div>
      </div>

      <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-brand-grey/20 pt-20">
        <div className="p-8 space-y-6 group bg-brand-grey/5 border border-brand-grey/20 rounded-[2.5rem] hover:border-brand-red/30 transition-all">
          <div className="w-12 h-12 border border-brand-red rounded-full flex items-center justify-center text-brand-red font-mono text-xl group-hover:bg-brand-red group-hover:text-white transition-all">
            01
          </div>
          <h3 className="text-4xl font-serif italic text-brand-white">Automated Spending</h3>
          <p className="text-brand-grey font-light text-lg">A unified wallet for your agent. It holds USDC and signs transactions automatically when your agent needs to pay for compute, APIs, or data.</p>
        </div>
        <div className="p-8 space-y-6 group bg-brand-grey/5 border border-brand-grey/20 rounded-[2.5rem] hover:border-brand-red/30 transition-all">
          <div className="w-12 h-12 border border-brand-red rounded-full flex items-center justify-center text-brand-red font-mono text-xl group-hover:bg-brand-red group-hover:text-white transition-all">
            02
          </div>
          <h3 className="text-4xl font-serif italic text-brand-white">Autonomous Earning</h3>
          <p className="text-brand-grey font-light text-lg">Vault402 intercepts incoming traffic to your agent and enforces x402 payment headers. Monetize your proprietary intelligence instantly.</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
