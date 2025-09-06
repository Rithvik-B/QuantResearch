import React from 'react';
import Navbar from './components/Navbar';
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
      <Navbar />
  <div id="join" className="scroll-mt-20">
        <HeroSection />
      </div>
  <div id="painpoints" className="scroll-mt-20">
        <PainPointsSection />
      </div>
  <div id="outcomes" className="scroll-mt-20">
        <OutcomesSection />
      </div>
  <div id="features" className="scroll-mt-20">
        <FeaturesSection />
      </div>
  <div id="howitworks" className="scroll-mt-20">
        <HowItWorksSection />
      </div>
  <div id="proof" className="scroll-mt-20">
        <SocialProofSection />
      </div>
  <div id="cta">
        <FinalCTASection />
      </div>
      <Footer />
    </div>
  );
}

export default App;