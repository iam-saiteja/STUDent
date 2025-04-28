import React, { useEffect, useState } from 'react';
import Clapboard from '../ui/Clapboard';
import ScrollIndicator from '../ui/ScrollIndicator';

const HeroSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Spotlight effect */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-spotlight-gradient animate-spotlight opacity-30 transform -translate-x-1/4 -translate-y-1/4"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Clapboard animation */}
        <Clapboard className={`mb-8 md:mb-12 ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`} />
        
        {/* Main headline */}
        <h1 
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 
            ${loaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'} 
            transition-all duration-1000 delay-700`}
        >
          Keep the Dream <span className="text-gold-400">Alive</span>
        </h1>
        
        {/* Tagline */}
        <p 
          className={`text-sm text-gold-300 mb-8 italic
            ${loaded ? 'opacity-100' : 'opacity-0'} 
            transition-opacity duration-1000 delay-900`}
        >
          by Nag Ashwin to us
        </p>
        
        {/* Organization name with transform effect */}
        <div className="group relative inline-block">
          <h2 
            className={`text-xl sm:text-2xl md:text-3xl font-bold mb-2 transition-transform duration-500 group-hover:scale-75
              ${loaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'} 
              transition-all duration-1000 delay-1100`}
          >
            <span className="text-gold-400">STUD</span>ent
          </h2>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none whitespace-nowrap">
            <p className="text-xl text-gold-300">Students United for Development Entertainments</p>
          </div>
        </div>
        
        {/* Short description */}
        <p 
          className={`text-gray-300 max-w-2xl mx-auto mb-16
            ${loaded ? 'opacity-100' : 'opacity-0'} 
            transition-opacity duration-1000 delay-1300`}
        >
          A global student-led creative community and media house
        </p>
        
        {/* Scroll indicator */}
        <ScrollIndicator 
          className={`${loaded ? 'opacity-100' : 'opacity-0'} 
            transition-opacity duration-1000 delay-1800`} 
        />
      </div>
    </section>
  );
};

export default HeroSection;