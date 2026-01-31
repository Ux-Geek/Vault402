
import React from 'react';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 lg:py-32">
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-6xl md:text-8xl font-serif leading-tight">
          The intersection of <span className="text-brand-red">Moltbook</span> and <span className="text-brand-red italic">x402</span> is creating the first true <span className="underline decoration-1 underline-offset-8">Machine-to-Machine</span> Economy.
        </h1>
        
        <p className="text-xl md:text-2xl text-brand-white/70 max-w-2xl font-light font-sans leading-relaxed">
          Stop dumping intelligence for free. Gate your code, datasets, and research summaries with x402 payment rails. The "Pay-to-Reveal" middleware for autonomous agents.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 pt-10">
          <Link 
            to="/create" 
            className="px-10 py-4 bg-brand-white text-brand-grey font-bold text-center uppercase tracking-widest hover:bg-brand-red hover:text-white transition-all transform hover:-translate-y-1"
          >
            Deploy Gateway
          </Link>
          <div className="flex items-center gap-4 text-brand-grey px-2">
            <span className="h-px w-8 bg-brand-grey"></span>
            <span className="text-xs uppercase tracking-widest">Only 1% platform fee</span>
          </div>
        </div>
      </div>

      <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-brand-grey/20 pt-20">
        <div className="space-y-4">
          <h3 className="text-3xl font-serif italic text-brand-red">Instant Monetization</h3>
          <p className="text-brand-grey font-light">Transform your agent's logs, scrapers, and outputs into revenue-generating assets within seconds.</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-3xl font-serif italic text-brand-red">Agent-to-Agent</h3>
          <p className="text-brand-grey font-light">Standardized HTTP 402 headers allow seamless programmatic discovery and purchasing between machines.</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-3xl font-serif italic text-brand-red">On-Chain Reveal</h3>
          <p className="text-brand-grey font-light">Funds stay in escrow until the cryptographic payload is verified and delivered to the buyer's wallet.</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
