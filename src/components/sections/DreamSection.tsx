import React, { useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import SectionTitle from '../ui/SectionTitle';

const DreamSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-navy-900"
    >
      {/* Spotlight effect */}
      <div className="absolute top-1/2 left-1/2 w-[200%] aspect-square bg-spotlight-gradient animate-spotlight opacity-30"></div>
      
      <div className="max-w-5xl mx-auto z-10">
        <SectionTitle title="Keep the Dream Alive" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main message */}
          <div 
            className={`lg:col-span-5 flex flex-col justify-center
              ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}
              transition-all duration-700 delay-300`}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gold-400">Your Cinema Journey Begins Here</h3>
            <p className="text-xl leading-relaxed mb-6">
              "Your first film, your first team, your first big dream — starts here.
              At STUDent, we don't just find opportunities — we create them together."
            </p>
            <div className="mt-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-1 bg-gold-500"></div>
                <span className="text-gray-400 text-sm">DREAMS</span>
                <div className="flex-1 h-px bg-gray-700"></div>
              </div>
              <div className="flex items-center space-x-2 my-2">
                <div className="w-16 h-1 bg-gold-500"></div>
                <span className="text-gray-400 text-sm">TEAMS</span>
                <div className="flex-1 h-px bg-gray-700"></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-1 bg-gold-500"></div>
                <span className="text-gray-400 text-sm">SUCCESS</span>
                <div className="flex-1 h-px bg-gray-700"></div>
              </div>
            </div>
          </div>
          
          {/* Success visuals */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {[
              {
                img: "https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "Award-Winning",
                delay: 400
              },
              {
                img: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "Festival Screenings",
                delay: 600
              },
              {
                img: "https://images.pexels.com/photos/3379944/pexels-photo-3379944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "Team Growth",
                delay: 800
              },
              {
                img: "https://images.pexels.com/photos/7991158/pexels-photo-7991158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "Creative Freedom",
                delay: 1000
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`relative h-48 rounded-lg overflow-hidden
                  ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 scale-95'}
                  transition-all duration-700`}
                style={{ transitionDelay: `${item.delay}ms` }}
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-3">
                  <span className="text-sm font-medium">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamSection;