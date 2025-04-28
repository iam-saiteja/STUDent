import React, { useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import SectionTitle from '../ui/SectionTitle';

const UniqueSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20"
    >
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="What Makes STUDent Unique?" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side: generic platforms */}
          <div 
            className={`bg-gray-800 p-8 rounded-lg text-center flex flex-col items-center justify-center
              ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-x-12'}
              transition-all duration-700 delay-300`}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-300">Generic Social Networks</h3>
            <div className="space-y-4 text-left w-full max-w-sm">
              <div className="p-3 bg-gray-700 rounded flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-3"></div>
                <p className="text-gray-400">General-purpose connections</p>
              </div>
              <div className="p-3 bg-gray-700 rounded flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-3"></div>
                <p className="text-gray-400">Not tailored for creative projects</p>
              </div>
              <div className="p-3 bg-gray-700 rounded flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-3"></div>
                <p className="text-gray-400">Few industry-specific opportunities</p>
              </div>
              <div className="p-3 bg-gray-700 rounded flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-3"></div>
                <p className="text-gray-400">No mentoring or growth focus</p>
              </div>
            </div>
          </div>
          
          {/* Right side: STUDent */}
          <div 
            className={`bg-navy-800 border border-gold-500 p-8 rounded-lg text-center flex flex-col items-center justify-center
              ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-x-12'} 
              transition-all duration-700 delay-500`}
          >
            <h3 className="text-xl font-semibold mb-6 text-gold-400">STUDent Platform</h3>
            <div className="space-y-4 text-left w-full max-w-sm">
              <div className="p-3 bg-navy-700 rounded flex items-center">
                <div className="w-3 h-3 rounded-full bg-gold-500 mr-3"></div>
                <p className="text-white">Built by students, for students</p>
              </div>
              <div className="p-3 bg-navy-700 rounded flex items-center">
                <div className="w-3 h-3 rounded-full bg-gold-500 mr-3"></div>
                <p className="text-white">Film production focused tools</p>
              </div>
              <div className="p-3 bg-navy-700 rounded flex items-center">
                <div className="w-3 h-3 rounded-full bg-gold-500 mr-3"></div>
                <p className="text-white">Real project collaborations</p>
              </div>
              <div className="p-3 bg-navy-700 rounded flex items-center">
                <div className="w-3 h-3 rounded-full bg-gold-500 mr-3"></div>
                <p className="text-white">Industry mentorship and guidance</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Unique selling proposition */}
        <div 
          className={`mt-12 text-center max-w-2xl mx-auto
            ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}
            transition-all duration-700 delay-700`}
        >
          <p className="text-xl">
            "Unlike generic social networks, STUDent is built by students, for students. 
            It's not just about networking — it's about building real crews, real projects, and real futures."
          </p>
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;