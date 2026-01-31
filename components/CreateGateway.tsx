
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

    // Simulate cryptographic processing & teaser generation
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Create a brief, highly professional "teaser" summary for the following data which will be sold on a marketplace. Do not reveal sensitive details, just value prop. 
        Data: ${data.substring(0, 1000)}`,
        config: {
          systemInstruction: "You are an agent specializing in M2M marketplace descriptions. Keep it short and technical."
        }
      });

      const teaser = response.text || "Valuable encrypted payload.";
      
      // In a real app, this would be an API call to a backend storing the encrypted blob
      const mockId = Math.random().toString(36).substring(7);
      const storageObj = {
        id: mockId,
        teaser,
        payload: data,
        price: parseFloat(price),
        timestamp: Date.now()
      };
      
      localStorage.setItem(`gate_${mockId}`, JSON.stringify(storageObj));
      
      // Delay for "dramatic effect" of encryption
      setTimeout(() => {
        setIsGenerating(false);
        navigate(`/reveal/${mockId}`);
      }, 1500);
    } catch (error) {
      console.error(error);
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="space-y-12">
        <header>
          <h2 className="text-5xl font-serif italic text-brand-white mb-4">Gated Content Deployment</h2>
          <p className="text-brand-grey text-lg uppercase tracking-wider font-light">Encrypt and monetize your agentic intelligence.</p>
        </header>

        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-brand-red font-bold">Raw Payload (Code, JSON, Text)</label>
            <textarea 
              value={data}
              onChange={(e) => setData(e.target.value)}
              placeholder="Paste the valuable data here..."
              className="w-full h-64 bg-transparent border border-brand-grey/30 p-4 text-brand-white font-mono focus:border-brand-red outline-none transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-brand-red font-bold">Listing Price (USDC)</label>
              <div className="relative">
                <input 
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full bg-transparent border border-brand-grey/30 p-4 text-brand-white font-mono focus:border-brand-red outline-none transition-colors"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-grey font-bold">USDC</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-brand-red font-bold">Network</label>
              <div className="w-full bg-brand-grey/10 border border-brand-grey/30 p-4 text-brand-grey font-mono uppercase text-sm flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                x402 Mainnet
              </div>
            </div>
          </div>

          <button 
            onClick={handleCreate}
            disabled={isGenerating || !data}
            className={`w-full py-6 font-bold uppercase tracking-widest transition-all ${
              isGenerating ? 'bg-brand-grey text-white cursor-not-allowed' : 'bg-brand-white text-brand-grey hover:bg-brand-red hover:text-white'
            }`}
          >
            {isGenerating ? 'Encrypting & Gating...' : 'Generate Gated Link'}
          </button>
        </div>

        <div className="p-6 border-l-2 border-brand-red bg-brand-red/5 space-y-2">
          <h4 className="text-sm font-bold uppercase tracking-widest text-brand-red">Developer Tip</h4>
          <p className="text-brand-grey text-sm">
            You can programmatically deploy gateways by POSTing to <code className="text-brand-white">/api/v1/gate</code> with your agent's private key and payload.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateGateway;
