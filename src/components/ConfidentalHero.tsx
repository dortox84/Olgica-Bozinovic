import React from 'react';
import { ChevronRight, ArrowRight, Star } from 'lucide-react';
import { TelegramIcon, VKIcon, OKIcon, TikTokIcon } from './SocialIcons';

interface ConfidentalHeroProps {
  onExploreProducts: () => void;
  onTickerClick: () => void;
}

export const ConfidentalHero: React.FC<ConfidentalHeroProps> = ({
  onExploreProducts,
  onTickerClick,
}) => {
  const socialLinks = [
    { 
      name: 'Telegram', 
      href: 'https://t.me', 
      icon: TelegramIcon, 
      hoverColor: 'hover:text-[#229ED9] hover:border-[#229ED9]/60 hover:bg-[#229ED9]/20 hover:shadow-[0_0_15px_rgba(34,158,217,0.4)]' 
    },
    { 
      name: 'VKontakte', 
      href: 'https://vk.com', 
      icon: VKIcon, 
      hoverColor: 'hover:text-[#2787F5] hover:border-[#2787F5]/60 hover:bg-[#2787F5]/20 hover:shadow-[0_0_15px_rgba(39,135,245,0.4)]' 
    },
    { 
      name: 'Одноклассники', 
      href: 'https://ok.ru', 
      icon: OKIcon, 
      hoverColor: 'hover:text-[#EE8208] hover:border-[#EE8208]/60 hover:bg-[#EE8208]/20 hover:shadow-[0_0_15px_rgba(238,130,8,0.4)]' 
    },
    { 
      name: 'TikTok', 
      href: 'https://tiktok.com', 
      icon: TikTokIcon, 
      hoverColor: 'hover:text-[#ff0050] hover:border-[#ff0050]/60 hover:bg-[#ff0050]/20 hover:shadow-[0_0_15px_rgba(255,0,80,0.4)]' 
    },
  ];

  return (
    <div className="w-full flex-grow flex flex-col justify-between px-6 sm:px-10 lg:px-16 pt-6 sm:pt-10 pb-4 relative z-20">
      <div className="max-w-[1720px] w-full mx-auto flex-grow flex flex-col justify-between">
        
        {/* Main Content Area: Left Floating Frosted Glass Card & Right Lower Display Headline */}
        <div className="flex-grow flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 my-auto py-6 sm:py-10">
          
          {/* Left Floating Frosted Glass Card - Lighter & crystal translucent */}
          <div className="flex-shrink-0 w-full lg:w-auto flex justify-start">
            <div 
              id="confidental-glass-card"
              className="relative w-full max-w-[370px] sm:max-w-[400px] rounded-[26px] sm:rounded-[28px] border border-white/30 bg-white/[0.14] backdrop-blur-xl p-7 sm:p-8 shadow-2xl shadow-black/30 overflow-hidden transition-all duration-300 hover:border-white/45 hover:bg-white/[0.18]"
            >
              {/* Top edge specular light reflection */}
              <div 
                className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent" 
                aria-hidden="true"
              />

              {/* Small Category / Brand Accent */}
              <div className="mb-5 sm:mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.8)]" />
                <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-white/90">
                  Эстетика & Гармония
                </span>
              </div>

              {/* Card Headline */}
              <h2 className="text-[18px] sm:text-[20px] font-normal leading-[1.32] text-white tracking-[-0.01em] drop-shadow-sm">
                Природа раскрывает<br />
                удивительные секреты,<br />
                скрытые в глубине
              </h2>

              {/* Accent Description with Left Vertical Bar */}
              <div className="mt-6 sm:mt-7 flex items-stretch gap-3">
                <div 
                  className="w-[1.5px] bg-white/50 rounded-full flex-shrink-0 self-stretch my-0.5" 
                  aria-hidden="true"
                />
                <p className="text-[11px] sm:text-[11.5px] text-white/85 leading-[1.65] font-light">
                  Принятие изменений открывает путь к истинной трансформации. Инновационный персональный подход дарит абсолютную уверенность, гармонию и внутреннюю силу.
                </p>
              </div>

              {/* Pill Button: ПОДРОБНЕЕ О ПРОГРАММАХ */}
              <div className="mt-7 sm:mt-8">
                <button
                  id="btn-explore-products"
                  onClick={onExploreProducts}
                  className="group inline-flex items-center gap-3 rounded-full border border-white/40 hover:border-white bg-white/10 hover:bg-white/20 active:scale-95 transition-all duration-200 pl-1.5 pr-4 py-1.5 cursor-pointer shadow-lg shadow-black/20"
                >
                  <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0 shadow-sm">
                    <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-[10px] sm:text-[10.5px] font-medium tracking-[0.08em] uppercase text-white whitespace-nowrap">
                    Узнать больше
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Lower Display Typography, Social Proof & Social Media Links */}
          <div className="w-full lg:w-auto flex flex-col justify-end items-start lg:items-end self-end pb-4 sm:pb-8 text-left lg:text-right">
            <h1 
              id="hero-display-title"
              className="font-display text-[32px] sm:text-[44px] md:text-[50px] lg:text-[54px] xl:text-[62px] 2xl:text-[68px] font-normal leading-[1.08] tracking-[-0.025em] text-white select-none drop-shadow-[0_4px_35px_rgba(0,0,0,0.85)] max-w-[800px]"
            >
              Сияющие улыбки<br />
              покоряют сердца
            </h1>

            {/* Lighter, clearer Google Ratings & Client Avatars Social Proof Pill */}
            <div 
              id="hero-ratings-badge"
              className="mt-4 sm:mt-5 inline-flex items-center gap-2.5 sm:gap-3 bg-white/[0.12] hover:bg-white/[0.18] backdrop-blur-xl border border-white/25 hover:border-white/40 rounded-full py-1.5 px-3 sm:px-3.5 shadow-lg shadow-black/30 transition-all duration-300"
            >
              {/* Stacked Client Photo Avatars */}
              <div className="flex items-center -space-x-1.5">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Клиент"
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-black/60 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Клиент"
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-black/60 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Клиент"
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-black/60 object-cover"
                />
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-black/60 bg-amber-400 text-black text-[9px] font-bold flex items-center justify-center">
                  +180
                </div>
              </div>

              {/* Vertical divider */}
              <div className="w-[1px] h-3.5 bg-white/30" />

              {/* Stars & Google Rating Text */}
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-0.5 text-amber-400">
                  <Star className="w-3 h-3 fill-amber-400 stroke-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400 stroke-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400 stroke-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400 stroke-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400 stroke-amber-400" />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold text-white">
                  5.0
                </span>

                <span className="text-white/40 text-xs">·</span>
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                    />
                  </svg>
                  <span className="text-[10px] sm:text-[11px] text-white/90 font-medium">
                    Google · 180+ отзывов
                  </span>
                </div>
              </div>

            </div>

            {/* Enlarged, lighter glass Social Media Icons: Telegram, VKontakte, OK.ru, TikTok */}
            <div 
              id="hero-social-icons"
              className="mt-4 sm:mt-5 flex items-center gap-2.5 sm:gap-3"
            >
              {socialLinks.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    title={item.name}
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/25 bg-white/[0.12] hover:bg-white/[0.22] backdrop-blur-xl flex items-center justify-center text-white/90 transition-all duration-200 shadow-lg shadow-black/25 hover:scale-110 active:scale-95 cursor-pointer ${item.hoverColor}`}
                  >
                    <IconComponent className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                  </a>
                );
              })}
            </div>

          </div>

        </div>

        {/* Bottom Ticker / Divider Line */}
        <div className="w-full pt-4 sm:pt-6">
          <div className="w-full h-[1px] bg-white/25 mb-3 sm:mb-4" />
          <div className="flex items-center justify-between text-white/85 py-1">
            <button 
              onClick={onTickerClick}
              className="text-xs sm:text-[13px] font-normal tracking-wide text-white/80 hover:text-white transition-colors cursor-pointer text-left"
            >
              Исследования раскрывают секреты преображения
            </button>
            <button 
              onClick={onTickerClick}
              aria-label="Подробнее"
              className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer p-1"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
