
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleGenAI } from '@google/genai';

const CreateGateway: React.FC = () => {
  const [data, setData] = useState('');
  const [price, setPrice] = useState('1.00');
  const [isGenerating, setIsGenerating] = useState(false);
  const navigate = useNavigate();

  const handleCreate = async () => {
    if (!data.trim()) return;
    setIsGenerating(true);

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Generate a high-level technical teaser for this agent payload. Use professional, clinical language. 
        Payload: ${data.substring(0, 500)}`,
        config: {
          systemInstruction: "You are the Vault402 Metadata Agent. Your job is to describe gated data without leaking its contents."
        }
      });

      const teaser = response.text || "Proprietary Agent Output (Encrypted).";
      const mockId = Math.random().toString(36).substring(7);
      const storageObj = {
        id: mockId,
        teaser,
        payload: data,
        price: parseFloat(price),
        timestamp: Date.now()
      };
      
      localStorage.setItem(`gate_${mockId}`, JSON.stringify(storageObj));
      
      setTimeout(() => {
        setIsGenerating(false);
        navigate(`/reveal/${mockId}`);
      }, 1200);
    } catch (error) {
      console.error(error);
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="space-y-12">
        <header>
          <h2 className="text-5xl font-serif italic text-brand-white mb-4">Setup Earning Gate</h2>
          <p className="text-brand-grey text-lg uppercase tracking-widest font-light">Set your agent's price for the world to pay.</p>
        </header>

        <div className="space-y-8">
          <div className="flex flex-col gap-3">
            <label className="text-[10px] uppercase tracking-[0.4em] text-brand-red font-bold ml-4">Agent Response Payload</label>
            <textarea 
              value={data}
              onChange={(e) => setData(e.target.value)}
              placeholder="Enter the data your agent wants to sell..."
              className="w-full h-48 bg-brand-grey/5 border border-brand-grey/20 p-6 text-brand-white font-mono focus:border-brand-red outline-none transition-all placeholder:text-brand-grey/50 rounded-[2rem]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <label className="text-[10px] uppercase tracking-[0.4em] text-brand-red font-bold ml-4">Access Fee (USDC)</label>
              <div className="relative">
                <input 
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full bg-brand-grey/5 border border-brand-grey/20 p-6 text-brand-white font-mono focus:border-brand-red outline-none transition-all rounded-full"
                />
                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-brand-grey text-xs font-mono">USDC</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[10px] uppercase tracking-[0.4em] text-brand-red font-bold ml-4">Settlement Logic</label>
              <div className="w-full bg-brand-grey/10 border border-brand-grey/20 p-6 text-brand-grey font-mono uppercase text-[10px] flex items-center justify-between rounded-full">
                <span>Direct-to-Vault</span>
                <span className="text-brand-red font-bold">Active</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button 
              onClick={handleCreate}
              disabled={isGenerating || !data}
              className={`px-12 py-5 font-bold uppercase tracking-[0.3em] text-xs transition-all rounded-[99px] ${
                isGenerating ? 'bg-brand-grey text-white cursor-not-allowed' : 'bg-brand-white text-brand-grey hover:bg-brand-red hover:text-white'
              }`}
            >
              {isGenerating ? 'Configuring Middleware...' : 'Deploy Gateway'}
            </button>
          </div>
        </div>

        <div className="p-8 border border-brand-grey/20 bg-brand-grey/5 flex gap-6 items-start rounded-[2rem]">
          <div className="w-10 h-10 flex-shrink-0 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red font-mono text-lg italic">i</div>
          <p className="text-brand-grey text-sm leading-relaxed">
            Once deployed, your agent can expose this endpoint. Any requesting agent without a valid <code className="text-brand-white">X-Payment-Token</code> will be served a 402 Payment Required response.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateGateway;
