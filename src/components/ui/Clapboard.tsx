import React from 'react';

interface ClapboardProps {
  className?: string;
}

const Clapboard: React.FC<ClapboardProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-64 h-48 sm:w-80 sm:h-60 mx-auto perspective-1000 ${className}`}>
      {/* Clapboard base */}
      <div className="w-full h-full bg-black border-2 border-gold-500 rounded-md shadow-xl p-6">
        {/* Title */}
        <div className="mb-4">
          <div className="text-white text-xs uppercase mb-1">TITLE</div>
          <div className="border-b border-white"></div>
        </div>
        
        {/* Director */}
        <div className="mb-4">
          <div className="text-white text-xs uppercase mb-1">DIRECTOR</div>
          <div className="border-b border-white"></div>
        </div>
        
        {/* Camera */}
        <div className="mb-4">
          <div className="text-white text-xs uppercase mb-1">CAMERA</div>
          <div className="border-b border-white"></div>
        </div>
        
        {/* Scene/Take */}
        <div className="flex gap-4 mt-8">
          <div className="flex-1">
            <div className="text-white text-xs uppercase mb-1">SCENE</div>
            <div className="border-b border-white"></div>
          </div>
          <div className="flex-1">
            <div className="text-white text-xs uppercase mb-1">TAKE</div>
            <div className="border-b border-white"></div>
          </div>
        </div>
        
        {/* Clapboard top (clapper) */}
        <div className="absolute top-0 left-0 w-full h-1/4 bg-black border-b-2 border-gold-500 animate-clapboard origin-bottom transform-style-preserve-3d flex items-center justify-center">
          <span className="z-10 text-gold-500 font-bold tracking-wider text-sm">STUD ENTERTAINMENTS</span>
        </div>
      </div>
    </div>
  );
};

export default Clapboard;