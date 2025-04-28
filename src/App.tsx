import React from 'react';
import HeroSection from './components/sections/HeroSection';
import ProblemSection from './components/sections/ProblemSection';
import MissionSection from './components/sections/MissionSection';
import HowItWorksSection from './components/sections/HowItWorksSection';
import UniqueSection from './components/sections/UniqueSection';
import DreamSection from './components/sections/DreamSection';
import CommunitySection from './components/sections/CommunitySection';
import CtaSection from './components/sections/CtaSection';

function App() {
  return (
    <div className="bg-navy-950 text-white">
      <HeroSection />
      <ProblemSection />
      <MissionSection />
      <HowItWorksSection />
      <UniqueSection />
      <DreamSection />
      <CommunitySection />
      <CtaSection />
    </div>
  );
}

export default App;