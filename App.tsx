
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import CreateGateway from './components/CreateGateway';
import RevealGateway from './components/RevealGateway';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/create" element={<CreateGateway />} />
            <Route path="/reveal/:id" element={<RevealGateway />} />
          </Routes>
        </main>
        <footer className="py-12 px-6 border-t border-brand-grey/30 text-center">
          <p className="text-brand-grey text-sm font-sans tracking-widest uppercase">
            Built for the machine-to-machine economy • x402 Protocol
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
