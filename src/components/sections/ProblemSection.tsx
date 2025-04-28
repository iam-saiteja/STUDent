import React, { useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import SectionTitle from '../ui/SectionTitle';
import { Camera, Film, UserX, Users2, Lightbulb, Target } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-navy-900"
    >
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="The Challenge" />
        
        {/* Problem statement */}
        <div 
          className={`bg-navy-800 p-8 rounded-lg mb-16 border-l-4 border-gold-500
            ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}
            transition-all duration-700 delay-300`}
        >
          <p className="text-xl leading-relaxed mb-6">
            Despite having a strong passion for filmmaking, many aspiring filmmakers and
            content creators struggle to achieve their goals due to a lack of exposure,
            opportunities, and collaborative networks.
          </p>
          <p className="text-xl leading-relaxed">
            One of the major challenges is the difficulty in finding like-minded individuals,
            as filmmaking is inherently a team effort and not a solo endeavor. This issue
            is prevalent among students from diverse academic backgrounds, who often lack
            an organized platform or structure to connect, collaborate, and grow within
            the creative field.
          </p>
        </div>
      
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="The Solution" />

        {/* Solution statement */}
        <div 
          className={`bg-navy-800 p-8 rounded-lg mb-16 border-r-4 border-gold-500
            ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}
            transition-all duration-700 delay-500`}
        >
          <p className="text-xl leading-relaxed mb-6">
            STUD Entertainments is a student-led media production house created to bridge
            the gap between creative passion and professional opportunities. It provides a
            structured ecosystem where aspiring filmmakers and content creators from various
            academic backgrounds can connect, collaborate, and grow.
          </p>
          <p className="text-xl leading-relaxed">
            By offering hands-on experience, access to equipment, industry mentorship, and
            opportunities to showcase their work, STUD Entertainments empowers students to
            form custom production teams and build professional portfolios. More than just
            a production house, it acts as a creative community and launchpad, turning
            passionate learners into future media professionals.
          </p>
        </div>
        
        {/* Visual challenges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {[
            {
              icon: <UserX size={48} className="text-accent-500" />,
              title: "Isolation",
              description: "Talented students struggle to find like-minded collaborators",
              delay: 400
            },
            {
              icon: <Camera size={48} className="text-gray-600" />,
              title: "Unused Potential",
              description: "Equipment and skills remain dormant without proper teams",
              delay: 600
            },
            {
              icon: <Film size={48} className="text-gray-600" />,
              title: "Lost Opportunities",
              description: "Beautiful stories remain untold due to lack of resources",
              delay: 800
            },
            {
              icon: <Users2 size={48} className="text-gray-600" />,
              title: "Team Building",
              description: "Difficulty in forming reliable production crews",
              delay: 1000
            },
            {
              icon: <Lightbulb size={48} className="text-gray-600" />,
              title: "Creative Growth",
              description: "Limited exposure to industry practices and standards",
              delay: 1200
            },
            {
              icon: <Target size={48} className="text-gray-600" />,
              title: "Career Path",
              description: "Unclear roadmap from student to professional",
              delay: 1400
            }
          ].map((item, index) => (
            <div 
              key={index}
              className={`bg-navy-800 p-8 rounded-lg border border-navy-700 flex flex-col items-center text-center
                ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-12'}
                transition-all duration-700 hover:border-gold-500 hover:scale-105`}
              style={{ transitionDelay: `${item.delay}ms` }}
            >
              <div className="mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;