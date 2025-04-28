import React, { useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import Button from '../ui/Button';

const CtaSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-navy-900 to-black"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gold-500 rounded-full filter blur-[150px] opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gold-500 rounded-full filter blur-[150px] opacity-10"></div>
      </div>
      
      <div 
        className={`relative z-10 max-w-4xl mx-auto text-center
          ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-12'}
          transition-all duration-700 delay-300`}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Ready to Build Your <span className="text-gold-400">Dream Team</span>?
        </h2>
        
        <p className="text-xl sm:text-2xl mb-10 text-gray-300">
          Join STUDent today — connect, collaborate, create!
        </p>
        
        <div className="mb-10">
          <Button 
            variant="primary"
            className="text-lg px-10 py-4"
          >
            Join the Community
          </Button>
        </div>
        
        <p className="text-gray-400">
          Start building your story with the world.
        </p>
        
        {/* Footer links */}
        <div className="mt-20 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-500">
          <a href="#" className="hover:text-gold-400 transition-colors">About Us</a>
          <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gold-400 transition-colors">Contact</a>
        </div>
        
        <div className="mt-6 text-gray-600 text-sm">
          © 2025 STUD Entertainments. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default CtaSection;