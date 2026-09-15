import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { BrandLeafIcon } from './CustomIcons';

interface NavbarProps {
  onOpenBooking: () => void;
  onNavigateSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onNavigateSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Симптомы', id: 'symptoms' },
    { name: 'Программы', id: 'programs' },
    { name: 'Отзывы', id: 'reviews' },
    { name: 'Блог', id: 'blog' },
    { name: 'Контакты', id: 'contacts' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigateSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-6 pb-4 select-none z-30">
      <div className="flex items-center justify-between">
        {/* Brand Logo & Title */}
        <div 
          id="brand-logo"
          onClick={() => handleLinkClick('hero')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="text-amber-200 group-hover:scale-105 transition-transform drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
            <BrandLeafIcon className="w-8 h-8" />
          </div>
          <div className="flex flex-col">
            <span className="text-[17px] font-medium tracking-tight text-white group-hover:text-amber-100 transition-colors drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
              Путь к себе
            </span>
            <span className="text-[11px] tracking-wide text-amber-200/90 font-light -mt-0.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
              Life Coach
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <button
              key={link.id}
              id={`nav-link-${link.id}`}
              onClick={() => handleLinkClick(link.id)}
              className="text-xs lg:text-[13px] text-zinc-100 hover:text-white transition-colors tracking-wide font-medium cursor-pointer drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center">
          <button
            id="header-booking-btn"
            onClick={onOpenBooking}
            className="group inline-flex items-center gap-2 rounded-full border border-white/30 hover:border-white/60 bg-black/45 hover:bg-black/65 backdrop-blur-xl px-5 py-2 text-xs lg:text-sm text-white font-medium transition-all duration-200 cursor-pointer shadow-lg shadow-black/30"
          >
            <span className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">Записаться на сессию</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-200/90 group-hover:translate-x-0.5 transition-transform drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]" />
          </button>
        </div>

        {/* Mobile menu trigger button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-white hover:text-white bg-black/50 hover:bg-black/70 border border-white/25 backdrop-blur-xl transition-colors shadow-sm"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 p-5 rounded-2xl bg-black/45 border border-white/20 backdrop-blur-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 shadow-2xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-left text-sm text-zinc-200 hover:text-white py-1.5 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
          <button
            id="mobile-drawer-booking-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="mt-2 w-full inline-flex justify-center items-center gap-2 rounded-full border border-white/30 bg-white/15 hover:bg-white/25 backdrop-blur-xl px-5 py-2.5 text-sm text-white transition-all shadow-lg"
          >
            <span>Записаться на сессию</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </header>
  );
};
