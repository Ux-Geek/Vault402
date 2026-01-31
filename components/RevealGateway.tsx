
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
    // Simulate payment logic
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
        <h2 className="text-4xl font-serif text-brand-red mb-4 italic">404 - Gateway Not Found</h2>
        <p className="text-brand-grey mb-8 uppercase tracking-widest">The requested payload does not exist or has expired.</p>
        <Link to="/" className="text-brand-white underline uppercase tracking-widest text-xs">Return to Terminal</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="border border-brand-grey/20 p-8 md:p-12 relative overflow-hidden">
        {/* Background decorative text */}
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none select-none">
          <pre className="text-[8px] font-mono leading-tight">
            HTTP/1.1 402 Payment Required<br/>
            Content-Type: application/x-gated<br/>
            X-Protocol: x402<br/>
            X-Price: {content.price} USDC
          </pre>
        </div>

        {!revealed ? (
          <div className="space-y-8 animate-in fade-in duration-500">
            <header className="space-y-2">
              <div className="text-brand-red text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
                Gated Content Detected
              </div>
              <h2 className="text-5xl font-serif italic text-brand-white">Decrypt Intelligence</h2>
            </header>

            <div className="bg-brand-white/5 p-6 border-l border-brand-grey/50">
              <p className="text-brand-white text-xl leading-relaxed italic font-serif">
                "{content.teaser}"
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-brand-grey/20">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest text-brand-grey">Required Payment</p>
                <p className="text-3xl font-mono text-brand-white">{content.price.toFixed(2)} <span className="text-brand-red">USDC</span></p>
              </div>

              <button 
                onClick={handlePay}
                disabled={status !== PaymentStatus.IDLE}
                className="px-12 py-5 bg-brand-white text-brand-grey font-bold uppercase tracking-widest hover:bg-brand-red hover:text-white transition-all disabled:bg-brand-grey/50 disabled:text-brand-white/50"
              >
                {status === PaymentStatus.IDLE && 'Pay to Reveal'}
                {status === PaymentStatus.WAITING && 'Connecting Wallet...'}
                {status === PaymentStatus.VERIFYING && 'Verifying Tx...'}
                {status === PaymentStatus.SUCCESS && 'Success!'}
              </button>
            </div>

            {status !== PaymentStatus.IDLE && (
              <div className="pt-4 flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-mono text-brand-grey">
                <div className="h-1 flex-grow bg-brand-grey/20 relative">
                  <div className={`h-full bg-brand-red transition-all duration-[4000ms] ${status === PaymentStatus.VERIFYING ? 'w-3/4' : status === PaymentStatus.SUCCESS ? 'w-full' : 'w-1/4'}`}></div>
                </div>
                {status}
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-8 animate-in zoom-in-95 duration-500">
            <header className="flex justify-between items-start">
              <div>
                <div className="text-green-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-2">
                  Payment Verified
                </div>
                <h2 className="text-5xl font-serif italic text-brand-white">Decrypted Payload</h2>
              </div>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(content.payload);
                  alert('Copied to clipboard');
                }}
                className="text-xs uppercase tracking-widest border border-brand-grey/30 px-3 py-1 hover:border-brand-red transition-colors"
              >
                Copy Raw Data
              </button>
            </header>

            <div className="bg-brand-grey/10 border border-brand-red/30 p-6 font-mono text-sm overflow-x-auto whitespace-pre-wrap leading-relaxed text-brand-white/90">
              {content.payload}
            </div>

            <div className="p-4 bg-brand-red/10 border border-brand-red/20 text-center">
              <p className="text-xs uppercase tracking-widest text-brand-red">Transacted via x402 Protocol • Fee: {(content.price * 0.01).toFixed(4)} USDC</p>
            </div>

            <div className="text-center pt-8">
              <Link to="/create" className="text-brand-white hover:text-brand-red text-sm uppercase tracking-widest transition-colors font-bold">
                Deploy Your Own Intelligence →
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="mt-12 text-center text-brand-grey text-[10px] uppercase tracking-[0.3em] font-mono">
        Transaction Hash: 0x{Math.random().toString(16).substring(2, 42)}
      </div>
    </div>
  );
};

export default RevealGateway;
