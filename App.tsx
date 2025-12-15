import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden selection:bg-primary-500 selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Stats />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;