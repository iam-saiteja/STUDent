import React, { useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import SectionTitle from '../ui/SectionTitle';

const CommunitySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20"
    >
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Built with Guidance and Blessings" />
        
        <div className="flex flex-col items-center">
          {/* Quote */}
          <blockquote 
            className={`relative bg-navy-800 border-l-4 border-gold-500 p-8 rounded-lg max-w-3xl mb-12
              ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 scale-95'}
              transition-all duration-700 delay-300`}
          >
            <div className="absolute -top-6 -left-6 text-gold-500 text-7xl opacity-20">❝</div>
            <p className="text-2xl sm:text-3xl font-medium italic text-gray-200 mb-4">
              "Keep the Dream Alive"
            </p>
            <footer className="text-right">
              <cite className="text-gold-400 font-semibold">— Nag Ashwin Garu</cite>
            </footer>
          </blockquote>
          
          {/* Description */}
          <div 
            className={`text-center max-w-2xl
              ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}
              transition-all duration-700 delay-500`}
          >
            <p className="text-xl leading-relaxed mb-8">
              "STUDent was launched with the heartfelt encouragement of acclaimed filmmaker 
              Nag Ashwin Garu and many visionary filmmakers who believe in the student creative revolution."
            </p>
          </div>
          
          {/* Community visuals */}
          <div 
            className={`grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mt-8
              ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-12'}
              transition-all duration-700 delay-700`}
          >
            {[
              {
                label: "Guidance",
                count: "25+",
                description: "Industry Mentors"
              },
              {
                label: "Community",
                count: "500+",
                description: "Student Filmmakers"
              },
              {
                label: "Collaboration",
                count: "100+",
                description: "Projects Completed"
              }
            ].map((stat, index) => (
              <div key={index} className="bg-navy-800 p-6 rounded-lg text-center">
                <span className="text-sm uppercase text-gray-400">{stat.label}</span>
                <div className="text-4xl font-bold text-gold-500 my-2">{stat.count}</div>
                <p className="text-gray-300">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;