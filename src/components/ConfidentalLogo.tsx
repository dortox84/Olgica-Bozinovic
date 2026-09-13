import React from 'react';

interface ConfidentalLogoProps {
  className?: string;
}

export const ConfidentalLogo: React.FC<ConfidentalLogoProps> = ({ className = "w-5 h-5" }) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className={className} 
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Precision stylized Confidental glyph: solid disk with smooth crescent cutout */}
      <path 
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm2.8 4.2c-3.756 0-6.8 3.044-6.8 6.8 0 3.756 3.044 6.8 6.8 6.8 1.48 0 2.852-.472 3.974-1.274A8.001 8.001 0 0 1 12 20a8 8 0 1 1 8-8c0 1.258-.29 2.448-.807 3.507A6.776 6.776 0 0 0 14.8 6.2Z"
      />
    </svg>
  );
};
