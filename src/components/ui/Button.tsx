import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary',
  onClick 
}) => {
  const baseClasses = 'px-6 py-3 rounded-md font-semibold transition-all duration-300 inline-block text-center';
  
  const variantClasses = {
    primary: 'bg-gold-500 hover:bg-gold-400 text-black shadow-lg hover:shadow-xl',
    secondary: 'bg-navy-600 hover:bg-navy-500 text-white border border-gold-500',
    outline: 'bg-transparent border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black',
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;