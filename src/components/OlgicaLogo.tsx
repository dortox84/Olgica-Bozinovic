import React from 'react';

interface OlgicaLogoProps {
  className?: string;
}

const NEW_LOGO_URL = 'https://res.cloudinary.com/l4orv4yo/image/upload/v1789259656/Bo%C5%BEinovi%C4%87-Olgica-_-Programi-zdravlja-ishrana-i-suplementacija-09-13-2026_02_33_AM-removebg-preview_nz6oh5.png';

export const OlgicaLogo: React.FC<OlgicaLogoProps> = ({ className = "h-8 sm:h-10 md:h-12 w-auto" }) => {
  return (
    <div className="flex items-center justify-center select-none">
      <img
        src={NEW_LOGO_URL}
        alt="Božinović Olgica — Programi zdravlja, ishrana i suplementacija"
        className={`${className} object-contain transition-transform duration-300 hover:scale-105`}
        style={{
          // Filter inverts the dark typography to clear bright white with an ambient contrast drop-shadow
          filter: 'invert(1) brightness(1.2) drop-shadow(0 2px 10px rgba(0,0,0,0.8))',
        }}
      />
    </div>
  );
};
