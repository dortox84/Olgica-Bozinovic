import React from 'react';
import { ArrowRight } from 'lucide-react';
import { LotusIcon } from './LotusIcon';
import { InstagramIcon, TikTokIcon } from './SocialIcons';
import { Reveal } from './Reveal';

interface ConfidentalHeroProps {
  onExploreProducts: () => void;
  onTickerClick?: () => void;
}

export const ConfidentalHero: React.FC<ConfidentalHeroProps> = ({
  onExploreProducts,
}) => {
  const clientAvatars = [
    {
      name: 'Michael',
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80',
    },
    {
      name: 'Elena',
      src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80',
    },
    {
      name: 'Sarah',
      src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=160&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="w-full flex-grow flex flex-col justify-between px-5 sm:px-8 lg:px-14 xl:px-16 pt-8 sm:pt-12 lg:pt-14 pb-8 sm:pb-12 lg:pb-16 relative z-20">
      <div className="max-w-[1720px] w-full mx-auto flex-grow flex flex-col justify-between">
        
        {/* Main Split Grid / Content Area */}
        <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-4 sm:py-6 lg:py-10">
          
          {/* Left Column: Badge, Grand Headline with Inline Lotus Icon */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start justify-center">
            
            {/* Pill Badge: "• Здоровье & Нутрициология" */}
            <Reveal delay={60} y={16}>
              <div 
                id="hero-therapy-badge"
                className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/[0.16] hover:bg-white/[0.22] backdrop-blur-xl border border-white/25 text-white text-xs sm:text-[13px] font-medium tracking-wide mb-5 sm:mb-7 shadow-lg shadow-black/10 transition-all duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-white/90 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <span>Здоровье & Нутрициология</span>
              </div>
            </Reveal>

            {/* Main Headline: Путь Здоровья / [Lotus] с экспертной / заботой */}
            <h1 
              id="hero-main-headline"
              className="font-display text-[40px] sm:text-[54px] md:text-[64px] lg:text-[68px] xl:text-[80px] 2xl:text-[88px] font-normal leading-[1.06] tracking-[-0.03em] text-white select-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
            >
              <Reveal delay={120} y={20}>
                <span className="block">Путь к здоровью</span>
              </Reveal>

              <Reveal delay={180} y={20}>
                <span className="flex items-center gap-3 sm:gap-4 lg:gap-5 mt-1 sm:mt-2">
                  <LotusIcon className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 xl:w-18 xl:h-18 text-white inline-block flex-shrink-0 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]" />
                  <span>с экспертной</span>
                </span>
              </Reveal>

              <Reveal delay={240} y={20}>
                <span className="block mt-1 sm:mt-2">заботой</span>
              </Reveal>
            </h1>
          </div>

          {/* Right Column: Paragraph and "Записаться на сессию" Button - moved further down */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-start justify-end lg:self-end lg:pl-6 xl:pl-10 mt-8 sm:mt-12 lg:mt-0 lg:pb-2 xl:pb-4 lg:translate-y-6 xl:translate-y-8">
            <Reveal delay={300} y={20}>
              <p 
                id="hero-right-description"
                className="text-white/90 text-sm sm:text-base lg:text-[16.5px] leading-relaxed max-w-[430px] font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]"
              >
                Индивидуальные протоколы питания, бережное очищение организма и поддержка эксперта, помогающие обрести легкость, гармонию и уверенность.
              </p>
            </Reveal>

            {/* High-Contrast Pill Button: "Записаться на сессию" with Black Circular Arrow Button */}
            <Reveal delay={360} y={20}>
              <div className="mt-6 sm:mt-8">
                <button
                  id="btn-book-session"
                  onClick={onExploreProducts}
                  className="group inline-flex items-center gap-3.5 sm:gap-4 pl-6 sm:pl-7 pr-2 sm:pr-2.5 py-2.5 sm:py-3 rounded-full bg-white text-stone-900 hover:bg-stone-50 active:scale-95 transition-all duration-300 shadow-2xl shadow-black/35 cursor-pointer font-medium text-xs sm:text-[14px]"
                >
                  <span className="tracking-tight font-semibold text-stone-900">Записаться на сессию</span>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#18181b] text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:translate-x-0.5 shadow-sm">
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                  </div>
                </button>
              </div>
            </Reveal>
          </div>

        </div>

        {/* Bottom Bar: Social Proof (Avatars + "1 200+ Довольных клиентов" and frameless Instagram Stat) */}
        <div className="w-full pt-4 sm:pt-6">
          <Reveal delay={420} y={16}>
            <div 
              id="hero-client-proof"
              className="flex flex-wrap items-center gap-5 sm:gap-7 lg:gap-8"
            >
              {/* 1. Overlapping Avatar Stack & Happy Clients */}
              <div className="inline-flex items-center gap-3 sm:gap-3.5">
                <div className="flex items-center -space-x-2.5 sm:-space-x-3">
                  {clientAvatars.map((avatar, idx) => (
                    <img
                      key={avatar.name}
                      src={avatar.src}
                      alt={avatar.name}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white shadow-md shadow-black/25"
                      style={{ zIndex: 10 - idx }}
                    />
                  ))}
                </div>

                <div className="flex flex-col text-left">
                  <span className="text-white font-bold text-sm sm:text-base tracking-tight leading-none drop-shadow-sm">
                    1 200+
                  </span>
                  <span className="text-white/80 text-[11px] sm:text-xs font-light mt-1 leading-none drop-shadow-sm">
                    Довольных клиентов
                  </span>
                </div>
              </div>

              {/* Subtle visual separator between avatar proof and Instagram proof */}
              <div className="w-px h-7 bg-white/20 hidden sm:block" aria-hidden="true" />

              {/* 2. Instagram Stat - 100% borderless, no background, frameless */}
              <a
                href="https://www.instagram.com/bozinovic.olgica?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                id="hero-instagram-stat"
                className="inline-flex items-center gap-2.5 sm:gap-3 group cursor-pointer transition-transform hover:scale-[1.03] active:scale-95"
                title="Instagram: 29 000+ подписчиков"
              >
                <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-amber-200 transition-colors flex-shrink-0 drop-shadow-md" />
                <div className="flex flex-col text-left">
                  <span className="text-white font-bold text-sm sm:text-base tracking-tight leading-none drop-shadow-sm">
                    29 000+
                  </span>
                  <span className="text-white/80 text-[11px] sm:text-xs font-light mt-1 leading-none drop-shadow-sm group-hover:text-white transition-colors">
                    Подписчиков
                  </span>
                </div>
              </a>

              {/* Subtle visual separator between Instagram and TikTok */}
              <div className="w-px h-7 bg-white/20 hidden sm:block" aria-hidden="true" />

              {/* 3. TikTok Stat - 100% borderless, no background, frameless */}
              <a
                href="https://www.tiktok.com/@bozinovic.olgica"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-tiktok-stat"
                className="inline-flex items-center gap-2.5 sm:gap-3 group cursor-pointer transition-transform hover:scale-[1.03] active:scale-95"
                title="TikTok: 18 000+ подписчиков"
              >
                <TikTokIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-amber-200 transition-colors flex-shrink-0 drop-shadow-md" />
                <div className="flex flex-col text-left">
                  <span className="text-white font-bold text-sm sm:text-base tracking-tight leading-none drop-shadow-sm">
                    18 000+
                  </span>
                  <span className="text-white/80 text-[11px] sm:text-xs font-light mt-1 leading-none drop-shadow-sm group-hover:text-white transition-colors">
                    Подписчиков
                  </span>
                </div>
              </a>
            </div>
          </Reveal>
        </div>

      </div>
    </div>
  );
};
