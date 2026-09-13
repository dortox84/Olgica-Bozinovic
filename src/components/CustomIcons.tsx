import React from 'react';

// Elegant dual leaf logo matching the exact branding in screenshot
export function BrandLeafIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
    >
      {/* Stem */}
      <path
        d="M6 26C8 21 12 16 19 12"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Left Leaf */}
      <path
        d="M10 21C7 18 6 12 10 7C14 7 17 11 16 17C14 19 12 20.5 10 21Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right Leaf */}
      <path
        d="M16 16C17 11 20 5 26 5C27 10 25 15 20 18C18.5 19 17 18 16 16Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Small badge leaf
export function MiniLeafIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" opacity="0" />
      <path d="M4 20C6 16 9 13 14 10" />
      <path d="M8 16C6 13 6 8 9 5C12 5 14 8 13 13C11 15 9 16 8 16Z" />
      <path d="M13 12C14 8 17 4 21 4C22 8 20 12 16 14C14.5 15 13.5 14 13 12Z" />
    </svg>
  );
}

// Lotus flower icon for "Внутренняя гармония"
export function LotusIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Central petal */}
      <path d="M12 3C10.5 7 10 10.5 12 16C14 10.5 13.5 7 12 3Z" />
      {/* Left petal */}
      <path d="M11 14C8 13.5 4.5 10 5.5 6C8 7.5 10 10.5 11 14Z" />
      {/* Right petal */}
      <path d="M13 14C16 13.5 19.5 10 18.5 6C16 7.5 14 10.5 13 14Z" />
      {/* Outer lower petals base */}
      <path d="M4 15C7 17.5 17 17.5 20 15" />
      <path d="M7 17C9.5 19.5 14.5 19.5 17 17" />
    </svg>
  );
}

// Hand-drawn doodle heart matching the screenshot
export function DoodleHeartIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}
