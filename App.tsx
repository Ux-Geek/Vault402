
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import CreateGateway from './components/CreateGateway';
import RevealGateway from './components/RevealGateway';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-black dark:bg-white transition-colors flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/create" element={<CreateGateway />} />
              <Route path="/reveal/:id" element={<RevealGateway />} />
            </Routes>
          </main>
          <footer className="py-12 px-6 border-t border-brand-grey/30 dark:border-brand-grey/70 text-center">
            <p className="text-brand-grey dark:text-brand-grey/80 text-sm font-sans tracking-widest uppercase">
              Built for the machine-to-machine economy • x402 Protocol
            </p>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
