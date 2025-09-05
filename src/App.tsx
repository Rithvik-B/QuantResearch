import React from 'react';
import HeroSection from './components/HeroSection';
import PainPointsSection from './components/PainPointsSection';
import OutcomesSection from './components/OutcomesSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import SocialProofSection from './components/SocialProofSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <PainPointsSection />
      <OutcomesSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SocialProofSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}

export default App;