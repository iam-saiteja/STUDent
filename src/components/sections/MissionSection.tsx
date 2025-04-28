import React, { useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import SectionTitle from '../ui/SectionTitle';

const MissionSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20"
    >
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Our Mission" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Mission statement */}
          <div 
            className={`order-2 lg:order-1
              ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}
              transition-all duration-700 delay-300`}
          >
            <p className="text-xl leading-relaxed mb-6">
              "At STUDent, we believe creativity thrives in collaboration.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              Our mission is to connect talented students across colleges and cultures,
              help them build powerful film teams, 
              and bring their creative dreams to life while still in college."
            </p>
            <div 
              className={`w-full h-1 bg-gradient-to-r from-gold-500 to-transparent my-8
                ${isVisible ? 'opacity-100 w-full' : 'opacity-0 w-0'}
                transition-all duration-1000 delay-700`}
            ></div>
            <p className="text-gray-300">
              Every great filmmaker started somewhere. We're creating that somewhere.
            </p>
          </div>
          
          {/* Visual - creative team collaboration */}
          <div 
            className={`relative order-1 lg:order-2 h-[400px] bg-navy-800 rounded-lg overflow-hidden
              ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-x-8'}
              transition-all duration-700 delay-500`}
          >
            <img 
              src="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Film students collaborating"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <span className="bg-gold-500 text-black px-3 py-1 rounded-md text-sm font-bold">
                Together We Create
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;