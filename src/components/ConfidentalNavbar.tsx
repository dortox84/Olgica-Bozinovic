import React, { useState } from 'react';
import { OlgicaLogo } from './OlgicaLogo';
import { Menu, X, ArrowRight } from 'lucide-react';
import { VKIcon, TelegramIcon, TikTokIcon, InstagramIcon } from './SocialIcons';

interface ConfidentalNavbarProps {
  onContactClick: () => void;
  onNavClick: (item: string) => void;
}

export const ConfidentalNavbar: React.FC<ConfidentalNavbarProps> = ({
  onContactClick,
  onNavClick,
}) => {
  const [activeTab, setActiveTab] = useState<'home' | 'symptoms' | 'services' | 'reviews' | 'blog' | 'contact'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: Array<{ id: 'home' | 'symptoms' | 'reviews' | 'services' | 'blog' | 'contact'; label: string }> = [
    { id: 'home', label: 'Главная' },
    { id: 'symptoms', label: 'Симптомы' },
    { id: 'reviews', label: 'Отзывы' },
    { id: 'services', label: 'Программы' },
    { id: 'blog', label: 'Блог' },
    { id: 'contact', label: 'Контакты' },
  ];

  const socialLinks = [
    {
      name: 'VKontakte',
      href: 'https://vk.com',
      icon: <VKIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
    },
    {
      name: 'Telegram',
      href: 'https://t.me/OlgaHealthBot',
      icon: <TelegramIcon className="w-[18px] h-[18px] sm:w-[21px] sm:h-[21px]" />,
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@bozinovic.olgica',
      icon: <TikTokIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/bozinovic.olgica?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==',
      icon: <InstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
    },
  ];

  const handleTabClick = (tab: 'home' | 'symptoms' | 'reviews' | 'services' | 'blog' | 'contact') => {
    setActiveTab(tab);
    setMobileMenuOpen(false);

    if (tab === 'home') {
      onNavClick('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'symptoms') {
      onNavClick('symptoms');
      const el = document.getElementById('can-you-relate-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (tab === 'reviews') {
      onNavClick('reviews');
      const el = document.getElementById('testimonials-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'services') {
      onNavClick('products');
      const el = document.getElementById('section-4-cta') || document.getElementById('elevate-health-cta');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'blog') {
      onNavClick('blog');
      const el = document.getElementById('blog-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'contact') {
      onContactClick();
    }
  };

  return (
    <>
      <header className="w-full relative z-30 pt-5 sm:pt-7 lg:pt-8 px-5 sm:px-8 lg:px-14 xl:px-16">
        <div className="max-w-[1720px] mx-auto flex items-center justify-between gap-4">
          
          {/* 1. Left: Brand Logo (Left untouched) */}
          <div className="flex items-center">
            <button
              onClick={() => handleTabClick('home')}
              className="cursor-pointer focus:outline-none transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Božinović Olgica"
            >
              <OlgicaLogo className="h-8 sm:h-9 lg:h-11 w-auto" theme="dark" />
            </button>
          </div>

          {/* 2. Center: Floating Frosted Pill Menu with Links + Separator + Moved CTA Button */}
          <nav 
            className="hidden md:flex items-center bg-white/[0.14] hover:bg-white/[0.18] backdrop-blur-xl border border-white/20 rounded-full p-1.5 shadow-lg shadow-black/15 transition-all duration-300"
            aria-label="Основная навигация"
          >
            {/* Navigation links */}
            <div className="flex items-center">
              {navLinks.map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleTabClick(link.id)}
                    className={`px-3 lg:px-4 py-1.5 sm:py-2 rounded-full text-xs lg:text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-white text-stone-900 shadow-sm font-semibold'
                        : 'text-white/85 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Subtle Divider separating Links from CTA */}
            <div className="w-px h-5 bg-white/25 mx-1 lg:mx-1.5 flex-shrink-0" aria-hidden="true" />

            {/* Moved CTA Button inside Menu */}
            <button
              onClick={onContactClick}
              className="group flex items-center gap-2 pl-3.5 sm:pl-4 pr-1.5 sm:pr-2 py-1.5 rounded-full bg-white text-stone-900 hover:bg-stone-100 active:scale-95 text-xs lg:text-[13px] font-semibold transition-all duration-200 cursor-pointer shadow-md shadow-black/10 flex-shrink-0"
            >
              <span>Начать путь</span>
              <div className="w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:translate-x-0.5 shadow-sm">
                <ArrowRight className="w-3 h-3 stroke-[2.5]" />
              </div>
            </button>
          </nav>

          {/* 3. Right: Social Media Icons (VKontakte, Telegram, TikTok, Instagram) replacing CTA */}
          <div className="hidden sm:flex items-center">
            <div 
              id="navbar-social-links"
              className="flex items-center gap-1 sm:gap-1.5 bg-white/[0.14] hover:bg-white/[0.18] backdrop-blur-xl border border-white/20 rounded-full px-2.5 py-1.5 shadow-lg shadow-black/15 transition-all duration-300"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 active:scale-90 transition-all duration-200 cursor-pointer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
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

            {/* Mobile Drawer Bottom: CTA Button & Social Icons */}
            <div className="pt-6 border-t border-white/15 flex flex-col gap-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full py-3 rounded-xl bg-white text-stone-900 font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:bg-stone-100 transition-colors"
              >
                <span>Начать свой путь</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Mobile Social Links Row */}
              <div className="flex items-center justify-center gap-2.5 pt-1">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/90 hover:text-white hover:bg-white/20 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
