import React, { useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface SectionTitleProps {
  title: string;
  className?: string;
  delay?: number;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  className = '',
  delay = 0 
}) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(titleRef);

  return (
    <div 
      ref={titleRef}
      className={`relative mb-8 ${className}`}
    >
      <h2 
        className={`text-3xl md:text-4xl font-bold relative z-10 inline-block
          ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}
          transition-all duration-700 ease-out`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {title}
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-gold-500"></span>
      </h2>
    </div>
  );
};

export default SectionTitle;