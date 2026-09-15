import React, { useState } from 'react';
import { OlgicaLogo } from './OlgicaLogo';
import { Menu, X, ArrowRight } from 'lucide-react';

interface ConfidentalNavbarProps {
  onContactClick: () => void;
  onNavClick: (item: string) => void;
}

export const ConfidentalNavbar: React.FC<ConfidentalNavbarProps> = ({
  onContactClick,
  onNavClick,
}) => {
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'services' | 'reviews' | 'contact'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: Array<{ id: 'home' | 'about' | 'services' | 'reviews' | 'contact'; label: string }> = [
    { id: 'home', label: 'Главная' },
    { id: 'about', label: 'Обо мне' },
    { id: 'services', label: 'Программы' },
    { id: 'reviews', label: 'Отзывы' },
    { id: 'contact', label: 'Контакты' },
  ];

  const handleTabClick = (tab: 'home' | 'about' | 'services' | 'reviews' | 'contact') => {
    setActiveTab(tab);
    setMobileMenuOpen(false);

    if (tab === 'home') {
      onNavClick('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'about') {
      onNavClick('methods');
      const el = document.getElementById('can-you-relate-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'services') {
      onNavClick('products');
    } else if (tab === 'reviews') {
      const el = document.getElementById('testimonials-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'contact') {
      onContactClick();
    }
  };

  return (
    <>
      <header className="w-full relative z-30 pt-5 sm:pt-7 lg:pt-8 px-5 sm:px-8 lg:px-14 xl:px-16">
        <div className="max-w-[1720px] mx-auto flex items-center justify-between">
          
          {/* 1. Left: Brand Logo (Left untouched as instructed) */}
          <div className="flex items-center">
            <button
              onClick={() => handleTabClick('home')}
              className="cursor-pointer focus:outline-none transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Božinović Olgica"
            >
              <OlgicaLogo className="h-8 sm:h-9 lg:h-11 w-auto" theme="dark" />
            </button>
          </div>

          {/* 2. Center: Floating Frosted Pill Menu in Russian */}
          <nav 
            className="hidden md:flex items-center bg-white/[0.14] hover:bg-white/[0.18] backdrop-blur-xl border border-white/20 rounded-full p-1.5 shadow-lg shadow-black/15 transition-all duration-300"
            aria-label="Основная навигация"
          >
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleTabClick(link.id)}
                  className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white text-stone-900 shadow-sm font-semibold'
                      : 'text-white/85 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* 3. Right: "Начать путь" Frosted Pill Button with Circular White Arrow */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={onContactClick}
              className="group flex items-center gap-2.5 sm:gap-3 pl-5 sm:pl-6 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full bg-white/[0.14] hover:bg-white/[0.22] active:scale-95 backdrop-blur-xl border border-white/25 text-white font-medium text-xs sm:text-[13.5px] transition-all duration-200 cursor-pointer shadow-lg shadow-black/15"
            >
              <span>Начать путь</span>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-stone-900 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:translate-x-0.5 shadow-sm">
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.4]" />
              </div>
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onContactClick}
              className="sm:hidden px-3.5 py-1.5 rounded-full bg-white text-stone-900 font-semibold text-[11px] shadow-sm"
            >
              Начать
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md cursor-pointer"
              aria-label="Открыть меню"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 flex md:hidden"
          aria-modal="true"
          role="dialog"
        >
          <div 
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          />

          <div className="relative w-4/5 max-w-xs bg-stone-900/95 backdrop-blur-2xl border-r border-white/15 h-full p-6 flex flex-col justify-between text-white z-10">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-white/15">
                <OlgicaLogo className="h-7 w-auto" theme="dark" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full border border-white/20 text-white/80 hover:text-white"
                  aria-label="Закрыть меню"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleTabClick(link.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      activeTab === link.id
                        ? 'bg-white text-stone-900 font-semibold'
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/15">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full py-3 rounded-xl bg-white text-stone-900 font-semibold text-sm flex items-center justify-center gap-2"
              >
                <span>Начать свой путь</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
