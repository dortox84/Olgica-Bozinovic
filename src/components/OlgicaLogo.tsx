import React from 'react';

interface OlgicaLogoProps {
  className?: string;
  theme?: 'light' | 'dark'; // 'light' is for light/white backgrounds (shows original dark logo), 'dark' is for dark backgrounds (inverts to white)
}

const NEW_LOGO_URL = 'https://res.cloudinary.com/l4orv4yo/image/upload/v1789259656/Bo%C5%BEinovi%C4%87-Olgica-_-Programi-zdravlja-ishrana-i-suplementacija-09-13-2026_02_33_AM-removebg-preview_nz6oh5.png';

export const OlgicaLogo: React.FC<OlgicaLogoProps> = ({ className = "h-8 sm:h-10 md:h-12 w-auto", theme = 'dark' }) => {
  return (
    <div className="flex items-center justify-center select-none">
      <img
        src={NEW_LOGO_URL}
        alt="Božinović Olgica — Programi zdravlja, ishrana i suplementacija"
        className={`${className} object-contain transition-transform duration-300 hover:scale-105`}
        style={{
          filter: theme === 'light' 
            ? 'drop-shadow(0 1px 3px rgba(0,0,0,0.15))' 
            : 'invert(1) brightness(1.2) drop-shadow(0 2px 10px rgba(0,0,0,0.8))',
        }}
      />
    </div>
  );
};
