
import React from 'react';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 lg:py-32">
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

        <h1 className="text-3xl md:text-7xl font-serif leading-[1.1] max-w-4xl text-brand-white dark:text-black">
          The first bank account for your Agent to <span className="text-brand-red italic">spend and earn money</span> autonomously.
        </h1>

        <p className="text-sm md:text-[18px] text-brand-white/70 dark:text-black/70 max-w-2xl font-light font-sans leading-relaxed">
          Vault402 is building the first true Machine-to-Machine (M2M) Economy.
        </p>

        <div className="flex items-center gap-6 pt-4">
          <Link
            to="/create"
            className="px-8 py-3.5 bg-brand-white dark:bg-black text-brand-grey dark:text-brand-white font-bold text-center uppercase tracking-wide text-xs hover:bg-brand-red hover:text-white transition-all transform hover:-translate-y-1 rounded-[99px] shadow-xl shadow-white/5 dark:shadow-black/20 border-2 border-transparent dark:border-black"
          >
            Connect Agent
          </Link>
        </div>

        <div className="bg-black dark:bg-white pt-64 transition-colors">
          <div className="max-w-5xl mx-auto px-6">
            <div className="w-full max-w-lg bg-brand-grey/20 border border-brand-grey/30 rounded-2xl overflow-hidden">
              <div className="px-4 md:px-6 py-3 bg-brand-grey/10 dark:bg-brand-grey/5 border-b border-brand-grey/20 dark:border-brand-grey/30 flex justify-start">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <h4 className="text-xl font-serif text-brand-white dark:text-black mb-2">Send Your AI Agent to Vault402</h4>
                <p className="text-sm text-brand-grey/60 dark:text-brand-grey/70 mb-6 font-light">Read instructions and follow the steps below to join Vault402.</p>

                <ul className="space-y-4 font-mono text-xs text-brand-grey/80 dark:text-brand-grey">
                  <li className="flex gap-4">
                    <span className="text-brand-red">01.</span>
                    <span>Send this to your agent</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-brand-red">02.</span>
                    <span>They sign up & send you a claim link</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-brand-red">03.</span>
                    <span>Tweet to verify ownership</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-brand-grey/20 dark:border-brand-grey/70 pt-20">
          <div className="p-8 space-y-6 group bg-brand-grey/5 dark:bg-brand-grey/10 border border-brand-grey/20 dark:border-brand-grey/70 rounded-[2.5rem] hover:border-brand-red/30 transition-all">
            <div className="w-12 h-12 border border-brand-red rounded-full flex items-center justify-center text-brand-red font-mono text-xl group-hover:bg-brand-red group-hover:text-white transition-all">
              01
            </div>
            <h3 className="text-4xl font-serif italic text-brand-white dark:text-black">Automated Spending</h3>
            <p className="text-brand-grey dark:text-brand-grey/80 font-light text-lg">A unified wallet for your agent. It holds USDC and signs transactions automatically when your agent needs to pay for compute, APIs, or data.</p>
          </div>
          <div className="p-8 space-y-6 group bg-brand-grey/5 dark:bg-brand-grey/10 border border-brand-grey/20 dark:border-brand-grey/70 rounded-[2.5rem] hover:border-brand-red/30 transition-all">
            <div className="w-12 h-12 border border-brand-red rounded-full flex items-center justify-center text-brand-red font-mono text-xl group-hover:bg-brand-red group-hover:text-white transition-all">
              02
            </div>
            <h3 className="text-4xl font-serif italic text-brand-white dark:text-black">Autonomous Earning</h3>
            <p className="text-brand-grey dark:text-brand-grey/80 font-light text-lg">Vault402 intercepts incoming traffic to your agent and enforces x402 payment headers. Monetize your proprietary intelligence instantly.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
