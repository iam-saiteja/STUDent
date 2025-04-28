import React, { useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import SectionTitle from '../ui/SectionTitle';
import { Users, Camera, Handshake, Rocket, Target, Video } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-navy-900"
    >
      <div className="max-w-5xl mx-auto">
        {/* Core Idea Section */}
        <div 
          className={`mb-32 text-center
            ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}
            transition-all duration-700 delay-300`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Core idea <span className="text-gold-400">"Film making"</span>
          </h2>
          
          <div className="relative">
            {/* Connecting lines */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gold-500 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
              {/* Writer */}
              <div className="relative">
                <div className="w-40 h-40 mx-auto mb-6 bg-navy-800 rounded-full flex items-center justify-center border-2 border-gold-500 relative z-10">
                  <Users size={64} className="text-gold-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">A Writer</h3>
                <p className="text-gold-300">from College-A</p>
              </div>
              
              {/* Cinematographer */}
              <div className="relative">
                <div className="w-40 h-40 mx-auto mb-6 bg-navy-800 rounded-full flex items-center justify-center border-2 border-gold-500 relative z-10">
                  <Camera size={64} className="text-gold-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">A Cinematographer</h3>
                <p className="text-gold-300">from College-B</p>
                
                {/* STUDent logo */}
                <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2">
                  <h4 className="text-3xl font-bold text-gold-400">STUDent.</h4>
                </div>
              </div>
              
              {/* Director */}
              <div className="relative">
                <div className="w-40 h-40 mx-auto mb-6 bg-navy-800 rounded-full flex items-center justify-center border-2 border-gold-500 relative z-10">
                  <Video size={64} className="text-gold-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">A Director</h3>
                <p className="text-gold-300">from College-C</p>
              </div>
            </div>
          </div>
        </div>

        <SectionTitle title="How STUDent Empowers You" />
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Users size={32} className="text-gold-500" />,
              title: "Find Your Crew",
              description: "Writers, Directors, Cinematographers, Editors, Actors",
              delay: 200
            },
            {
              icon: <Camera size={32} className="text-gold-500" />,
              title: "Build Portfolios",
              description: "Showcase your work and talent to the world",
              delay: 400
            },
            {
              icon: <Handshake size={32} className="text-gold-500" />,
              title: "Collaborate Easily",
              description: "Create and manage projects together",
              delay: 600
            },
            {
              icon: <Target size={32} className="text-gold-500" />,
              title: "Get Mentorship",
              description: "Learn from real industry experts",
              delay: 800
            },
            {
              icon: <Rocket size={32} className="text-gold-500" />,
              title: "Launch Your Career",
              description: "Turn college projects into professional work",
              delay: 1000
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className={`bg-navy-800 p-6 rounded-lg border-l-4 border-gold-500
                ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-12'}
                transition-all duration-700`}
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;