import React from 'react';

interface LotusIconProps {
  className?: string;
}

export const LotusIcon: React.FC<LotusIconProps> = ({ className = 'w-10 h-10' }) => {
  return (
    <svg
      viewBox="0 0 54 44"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Central petal */}
      <path
        d="M27 4 C25 15, 23 21, 27 28 C31 21, 29 15, 27 4 Z"
      />
      {/* Left upper petal */}
      <path
        d="M24 25 C15 22, 10 16, 12.5 10 C18 11.5, 22.5 17, 24 25 Z"
      />
      {/* Right upper petal */}
      <path
        d="M30 25 C39 22, 44 16, 41.5 10 C36 11.5, 31.5 17, 30 25 Z"
      />
      {/* Left lower leaf */}
      <path
        d="M24 30 C12 30, 4 25.5, 4 22 C11 23, 19.5 25.5, 24 30 Z"
      />
      {/* Right lower leaf */}
      <path
        d="M30 30 C42 30, 50 25.5, 50 22 C43 23, 34.5 25.5, 30 30 Z"
      />
    </svg>
  );
};
