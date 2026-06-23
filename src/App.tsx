import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ProfileSection from './components/ProfileSection';
import ModulesSection from './components/ModulesSection';
import ResultsSection from './components/ResultsSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PaymentView from './components/PaymentView';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'payment'>('home');

  if (currentView === 'payment') {
    return (
      <div className="min-h-screen selection:bg-brand-500/30 selection:text-brand-200">
        <PaymentView onBack={() => setCurrentView('home')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-brand-500/30 selection:text-brand-200">
      <Header onJoin={() => setCurrentView('payment')} />
      
      <main>
        <HeroSection onJoin={() => setCurrentView('payment')} />
        <StatsSection />
        <div id="marcus" className="scroll-mt-16">
          <ProfileSection />
        </div>
        <div id="programme" className="scroll-mt-16">
          <ModulesSection />
        </div>
        <div id="resultats" className="scroll-mt-16">
          <ResultsSection />
        </div>
        <TestimonialsSection />
        <PricingSection onJoin={() => setCurrentView('payment')} />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

