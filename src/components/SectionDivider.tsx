
import React from 'react';

type SectionDividerProps = {
  color?: string;
  className?: string;
  inverted?: boolean;
};

const SectionDivider: React.FC<SectionDividerProps> = ({ 
  color = "text-white", 
  className = "", 
  inverted = false 
}) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg 
        className={`w-full h-12 ${color} ${inverted ? 'transform rotate-180' : ''}`}
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        <path 
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
};

export default SectionDivider;
