
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GatedContent, PaymentStatus } from '../types';

const RevealGateway: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState<GatedContent | null>(null);
  const [status, setStatus] = useState<PaymentStatus>(PaymentStatus.IDLE);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`gate_${id}`);
    if (saved) {
      setContent(JSON.parse(saved));
    }
  }, [id]);

  const handlePay = () => {
    setStatus(PaymentStatus.WAITING);
    setTimeout(() => {
      setStatus(PaymentStatus.VERIFYING);
      setTimeout(() => {
        setStatus(PaymentStatus.SUCCESS);
        setRevealed(true);
      }, 2000);
    }, 1500);
  };

  if (!content) {
    return (
      <div className="max-w-2xl mx-auto py-32 px-6 text-center">
        <h2 className="text-4xl font-serif text-brand-red mb-4 italic">Invalid Access Token</h2>
        <p className="text-brand-grey mb-8 uppercase tracking-widest text-xs">No Vault402 gateway found for this ID.</p>
        <Link to="/" className="text-brand-white underline uppercase tracking-[0.3em] text-[10px] font-bold">Return to Terminal</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="border border-brand-grey/20 p-8 md:p-16 relative bg-gradient-to-br from-black to-[#050505] rounded-[3rem] overflow-hidden">
        {/* Background decorative text */}
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none select-none text-right">
          <pre className="text-[9px] font-mono leading-tight">
            Vault402 Middleware v1.0<br/>
            STATUS: 402_PAYMENT_REQUIRED<br/>
            TOKEN_ID: {id?.toUpperCase()}<br/>
            PROTOCOL: x402_STABLE
          </pre>
        </div>

        {!revealed ? (
          <div className="space-y-12 animate-in fade-in duration-500">
            <header className="space-y-3">
              <div className="text-brand-red text-[10px] font-bold uppercase tracking-[0.4em] flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></span>
                Gated M2M Request
              </div>
              <h2 className="text-6xl font-serif italic text-brand-white leading-tight">Authorize Access</h2>
            </header>

            <div className="py-8 border-y border-brand-grey/20">
              <p className="text-brand-white/80 text-2xl leading-relaxed italic font-serif">
                "{content.teaser}"
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-end justify-between gap-8 pt-4">
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.4em] text-brand-grey font-bold ml-1">Required to Unlock</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-mono text-brand-white">{content.price.toFixed(2)}</span>
                  <span className="text-xl font-mono text-brand-red">USDC</span>
                </div>
              </div>

              <button 
                onClick={handlePay}
                disabled={status !== PaymentStatus.IDLE}
                className="w-full md:w-auto px-12 py-5 bg-brand-white text-brand-grey font-bold uppercase tracking-[0.3em] text-xs hover:bg-brand-red hover:text-white transition-all rounded-[99px] disabled:bg-brand-grey/50 disabled:text-brand-white/50"
              >
                {status === PaymentStatus.IDLE && 'Settle Transaction'}
                {status === PaymentStatus.WAITING && 'Vault Handshake...'}
                {status === PaymentStatus.VERIFYING && 'Clearing x402...'}
                {status === PaymentStatus.SUCCESS && 'Authorized'}
              </button>
            </div>

            {status !== PaymentStatus.IDLE && (
              <div className="pt-4 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-mono text-brand-grey">
                <div className="h-0.5 flex-grow bg-brand-grey/20 relative overflow-hidden rounded-full">
                  <div className={`absolute top-0 left-0 h-full bg-brand-red transition-all duration-[4000ms] ${status === PaymentStatus.VERIFYING ? 'w-3/4' : status === PaymentStatus.SUCCESS ? 'w-full' : 'w-1/4'}`}></div>
                </div>
                <span>Network Status: {status}</span>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-10 animate-in zoom-in-95 duration-500">
            <header className="flex flex-col md:flex-row md:justify-between md:items-end border-b border-brand-grey/20 pb-8 gap-6">
              <div>
                <div className="text-green-500 text-[10px] font-bold uppercase tracking-[0.4em] flex items-center gap-2 mb-3">
                  Vault Settled
                </div>
                <h2 className="text-6xl font-serif italic text-brand-white">Payload Decrypted</h2>
              </div>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(content.payload);
                  alert('Copied to clipboard');
                }}
                className="text-[10px] uppercase tracking-[0.3em] border border-brand-grey/30 px-6 py-2.5 hover:border-brand-red transition-colors font-bold rounded-full"
              >
                Copy Content
              </button>
            </header>

            <div className="bg-[#0a0a0a] border border-brand-red/20 p-8 font-mono text-sm overflow-x-auto whitespace-pre-wrap leading-relaxed text-brand-white/90 shadow-2xl rounded-[2rem]">
              {content.payload}
            </div>

            <footer className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-brand-grey/5 border border-brand-grey/20 rounded-[1.5rem]">
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand-grey mb-1 font-bold">Gas Protocol</p>
                <p className="text-xs font-mono text-brand-white">x402-Optimized</p>
              </div>
              <div className="p-6 bg-brand-grey/5 border border-brand-grey/20 text-right rounded-[1.5rem]">
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand-grey mb-1 font-bold">Total Settled</p>
                <p className="text-xs font-mono text-brand-red">{content.price.toFixed(2)} USDC</p>
              </div>
            </footer>

            <div className="text-center pt-8">
              <Link to="/create" className="text-brand-white/50 hover:text-brand-red text-[10px] uppercase tracking-[0.4em] transition-all font-bold">
                Deploy Your Own Vault Gate →
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="mt-12 flex justify-between items-center text-brand-grey text-[9px] uppercase tracking-[0.4em] font-mono border-t border-brand-grey/10 pt-6">
        <span>Trans-UUID: {Math.random().toString(36).substring(2, 12).toUpperCase()}</span>
        <span>Secure Machine-to-Machine Sockets Active</span>
      </div>
    </div>
  );
};

export default RevealGateway;
