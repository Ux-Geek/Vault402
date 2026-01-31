
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-brand-grey/20 px-6 py-4 flex justify-between items-center">
      <Link to="/" className="flex items-start gap-1 text-2xl font-serif text-brand-white hover:text-brand-red transition-colors italic tracking-tight">
        Vault402.
        <span className="text-[10px] font-sans font-bold uppercase tracking-tighter opacity-50 mt-1">Beta</span>
      </Link>
      <div className="flex gap-8 items-center">
        <Link to="/create" className="text-[10px] uppercase tracking-widest hover:text-brand-red transition-colors font-bold">
          Setup Gateway
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
