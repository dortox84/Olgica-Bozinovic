import React, { useState } from 'react';
import { OlgicaLogo } from './OlgicaLogo';
import { Menu, X, Sparkles, BookOpen, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { InstagramIcon, TikTokIcon, OKIcon, TelegramIcon } from './SocialIcons';
import { OLGICA_DATA } from '../data/bozinovicData';

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
    { id: 'home', label: 'Главная', icon: Sparkles, desc: 'Встань на путь здоровья' },
    { id: 'methods', label: 'Обо мне & Подход', icon: BookOpen, desc: 'Биотехнологии, фармация и коучинг' },
    { id: 'products', label: 'Программы Здоровья', icon: ShieldCheck, desc: 'Очищение печени и Путь Здоровья BO' },
    { id: 'contact', label: 'Контакты & Консультации', icon: Mail, desc: 'Записаться на встречу или задать вопрос' },
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
              aria-label="Ольгица Божинович"
            >
              <OlgicaLogo className="h-8 sm:h-10 lg:h-12 w-auto" />
            </button>
          </div>

          {/* Right Side: Contact pill button */}
          <div className="flex items-center justify-end">
            <button
              id="nav-contact-btn"
              onClick={onContactClick}
              className="rounded-full border border-white/40 hover:border-white bg-white/[0.12] hover:bg-white/[0.22] active:scale-95 transition-all duration-200 px-5 sm:px-7 py-1.5 sm:py-2 text-xs sm:text-[13px] lg:text-[14px] text-white font-normal cursor-pointer backdrop-blur-xl shadow-lg shadow-black/25"
            >
              Консультация
            </button>
          </div>
        </div>
      </header>

      {/* Slide-over Drawer Menu - Elegant Light / White Porcelain Theme */}
      {menuOpen && (
        <div 
          className="fixed inset-0 z-50 flex"
          aria-modal="true"
          role="dialog"
        >
          {/* Subtle Ambient Backdrop */}
          <div 
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
          />

          {/* Side Drawer Panel - Pure White / Warm Ivory Theme */}
          <div 
            id="side-drawer-menu"
            className="relative w-full max-w-sm sm:max-w-md bg-white/95 backdrop-blur-2xl border-r border-stone-200/80 h-full p-6 sm:p-8 flex flex-col justify-between text-stone-900 shadow-2xl shadow-stone-900/15 z-10 animate-in slide-in-from-left duration-300"
          >
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-stone-200">
                <div className="flex items-center gap-3">
                  <OlgicaLogo className="h-7 w-auto" theme="light" />
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-full border border-stone-200 bg-stone-100/80 hover:bg-stone-200/80 text-stone-700 hover:text-stone-900 transition-colors cursor-pointer"
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
                      className="w-full flex items-center gap-4 p-3.5 rounded-2xl border border-transparent hover:border-stone-200 hover:bg-stone-50 transition-all text-left group cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 group-hover:bg-amber-500 group-hover:text-white transition-colors flex-shrink-0 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-stone-900 group-hover:text-amber-900">
                          {item.label}
                        </div>
                        <div className="text-xs text-stone-500 group-hover:text-stone-700">
                          {item.desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer Contact Info & Socials */}
            <div className="pt-6 border-t border-stone-200 space-y-4 text-xs text-stone-600">
              {/* Social Media Links (moved into menu on mobile/tablet) */}
              <div>
                <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block mb-2.5">
                  Социальные сети
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href={OLGICA_DATA.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    title="Instagram"
                    className="w-9 h-9 rounded-full border border-stone-200 bg-stone-100 hover:bg-[#E4405F] hover:border-[#E4405F] text-stone-700 hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={OLGICA_DATA.socials.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    title="TikTok"
                    className="w-9 h-9 rounded-full border border-stone-200 bg-stone-100 hover:bg-black hover:border-black text-stone-700 hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer"
                  >
                    <TikTokIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={OLGICA_DATA.socials.odnoklassniki}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Одноклассники"
                    title="Одноклассники"
                    className="w-9 h-9 rounded-full border border-stone-200 bg-stone-100 hover:bg-[#EE8208] hover:border-[#EE8208] text-stone-700 hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer"
                  >
                    <OKIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={OLGICA_DATA.socials.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                    title="Telegram"
                    className="w-9 h-9 rounded-full border border-stone-200 bg-stone-100 hover:bg-[#2AABEE] hover:border-[#2AABEE] text-stone-700 hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer"
                  >
                    <TelegramIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-stone-150">
                <a 
                  href={`tel:${OLGICA_DATA.phone}`}
                  className="flex items-center gap-2.5 text-stone-800 hover:text-amber-800 transition-colors font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>{OLGICA_DATA.displayPhone}</span>
                </a>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span className="text-stone-700">Белград, Сербия · Онлайн-консультации</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setMenuOpen(false);
                  onContactClick();
                }}
                className="w-full mt-3 rounded-full border border-stone-900 bg-stone-900 hover:bg-stone-800 py-3 text-xs text-white font-medium transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                Записаться на консультацию
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
