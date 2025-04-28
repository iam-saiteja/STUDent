import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  className?: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ className = '' }) => {
  const handleClick = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`flex flex-col items-center cursor-pointer ${className}`}
      onClick={handleClick}
    >
      <p className="text-sm text-gray-400 mb-2">Scroll to explore</p>
      <div className="animate-bounce-slow">
        <ChevronDown size={24} className="text-gold-500" />
      </div>
    </div>
  );
};

export default ScrollIndicator;