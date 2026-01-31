
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-brand-grey/20 px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-serif text-brand-white hover:text-brand-red transition-colors italic">
        MoltGate
      </Link>
      <div className="flex gap-8 items-center">
        <Link to="/create" className="text-xs uppercase tracking-widest hover:text-brand-red transition-colors">
          Create Gateway
        </Link>
        <div className="px-3 py-1 border border-brand-red text-brand-red text-[10px] font-bold uppercase tracking-tighter rounded">
          x402 Enabled
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
