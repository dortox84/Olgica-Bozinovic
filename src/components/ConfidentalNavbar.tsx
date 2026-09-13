import React, { useState } from 'react';
import { OlgicaLogo } from './OlgicaLogo';
import { Menu, X, Sparkles, BookOpen, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

interface ConfidentalNavbarProps {
  onContactClick: () => void;
  onNavClick: (item: string) => void;
}

export const ConfidentalNavbar: React.FC<ConfidentalNavbarProps> = ({
  onContactClick,
  onNavClick,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Главная', icon: Sparkles, desc: 'Начало и приветствие' },
    { id: 'methods', label: 'Методика', icon: BookOpen, desc: 'Научный подход и баланс' },
    { id: 'products', label: 'Программы', icon: ShieldCheck, desc: 'Индивидуальное сопровождение' },
    { id: 'contact', label: 'Контакты', icon: Mail, desc: 'Запись на консультацию' },
  ];

  const handleItemClick = (id: string) => {
    setMenuOpen(false);
    if (id === 'contact') {
      onContactClick();
    } else {
      onNavClick(id);
    }
  };

  return (
    <>
      <header className="w-full relative z-30 pt-6 sm:pt-8 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1720px] mx-auto grid grid-cols-3 items-center">
          
          {/* Left Side: Hamburger Menu Button with brightened translucent glass */}
          <div className="flex items-center justify-start">
            <button
              id="hamburger-menu-btn"
              onClick={() => setMenuOpen(true)}
              className="group flex items-center gap-2.5 rounded-full border border-white/35 hover:border-white bg-white/[0.12] hover:bg-white/[0.22] active:scale-95 transition-all duration-200 px-3.5 sm:px-4 py-2 text-white cursor-pointer backdrop-blur-xl shadow-lg shadow-black/25"
              aria-label="Открыть меню"
            >
              <Menu className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
              <span className="hidden sm:inline text-xs tracking-wider uppercase font-medium text-white/95">
                Меню
              </span>
            </button>
          </div>

          {/* Center: Olgica Logo */}
          <div className="flex items-center justify-center">
            <button
              onClick={() => onNavClick('home')}
              className="cursor-pointer group focus:outline-none p-1"
              aria-label="Логотип Ольгица"
            >
              <OlgicaLogo className="h-8 sm:h-10 lg:h-12 w-auto" />
            </button>
          </div>

          {/* Right Side: Contact pill button in Russian */}
          <div className="flex items-center justify-end">
            <button
              id="nav-contact-btn"
              onClick={onContactClick}
              className="rounded-full border border-white/40 hover:border-white bg-white/[0.12] hover:bg-white/[0.22] active:scale-95 transition-all duration-200 px-5 sm:px-7 py-1.5 sm:py-2 text-xs sm:text-[13px] lg:text-[14px] text-white font-normal cursor-pointer backdrop-blur-xl shadow-lg shadow-black/25"
            >
              Контакты
            </button>
          </div>
        </div>
      </header>

      {/* Slide-over Drawer Menu */}
      {menuOpen && (
        <div 
          className="fixed inset-0 z-50 flex"
          aria-modal="true"
          role="dialog"
        >
          {/* Dark Backdrop */}
          <div 
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
          />

          {/* Side Drawer Panel */}
          <div 
            id="side-drawer-menu"
            className="relative w-full max-w-sm sm:max-w-md bg-[#161412]/95 backdrop-blur-2xl border-r border-white/20 h-full p-6 sm:p-8 flex flex-col justify-between text-white shadow-2xl shadow-black z-10 animate-in slide-in-from-left duration-300"
          >
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/15">
                <div className="flex items-center gap-3">
                  <OlgicaLogo className="h-7 w-auto" />
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Закрыть меню"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="mt-8 space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className="w-full flex items-center gap-4 p-3.5 rounded-2xl border border-transparent hover:border-white/25 hover:bg-white/10 transition-all text-left group cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white/95 group-hover:bg-amber-400 group-hover:text-black transition-colors flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white group-hover:text-white">
                          {item.label}
                        </div>
                        <div className="text-xs text-white/60 group-hover:text-white/80">
                          {item.desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer Contact Info */}
            <div className="pt-6 border-t border-white/15 space-y-3 text-xs text-white/70">
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-amber-300" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-amber-300" />
                <span>Москва · Онлайн по всему миру</span>
              </div>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onContactClick();
                }}
                className="w-full mt-4 rounded-full border border-white/35 bg-white/15 hover:bg-white/25 py-2.5 text-xs text-white font-medium transition-all shadow-md cursor-pointer"
              >
                Записаться на сессию
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
