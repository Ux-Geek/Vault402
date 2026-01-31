
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-black/80 dark:bg-white/80 backdrop-blur-md border-b border-brand-grey/20 dark:border-brand-grey/70 px-6 py-4 flex justify-between items-center transition-colors">
      <Link to="/" className="flex items-start gap-1 text-2xl font-serif text-brand-white dark:text-black hover:text-brand-red transition-colors italic tracking-tight">
        Vault402.
        <span className="text-[10px] font-sans font-bold uppercase tracking-tighter opacity-50 mt-1">Beta</span>
      </Link>
      <div className="flex gap-8 items-center">
        <Link to="/create" className="text-[10px] uppercase tracking-widest text-brand-white dark:text-black hover:text-brand-red transition-colors font-bold">
          Setup Gateway
        </Link>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-brand-grey/20 dark:hover:bg-brand-grey/10 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
