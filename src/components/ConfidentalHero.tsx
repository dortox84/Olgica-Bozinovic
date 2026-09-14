import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { InstagramIcon, TikTokIcon, OKIcon, TelegramIcon } from './SocialIcons';
import { OLGICA_DATA } from '../data/bozinovicData';
import { RevealText } from './RevealText';
import { Reveal } from './Reveal';

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
      name: 'Instagram', 
      href: OLGICA_DATA.socials.instagram, 
      icon: InstagramIcon, 
      hoverColor: 'hover:text-[#E4405F] hover:border-[#E4405F]/60 hover:bg-[#E4405F]/20 hover:shadow-[0_0_15px_rgba(228,64,95,0.4)]' 
    },
    { 
      name: 'TikTok', 
      href: OLGICA_DATA.socials.tiktok, 
      icon: TikTokIcon, 
      hoverColor: 'hover:text-[#00f2fe] hover:border-[#00f2fe]/60 hover:bg-[#00f2fe]/20 hover:shadow-[0_0_15px_rgba(0,242,254,0.4)]' 
    },
    { 
      name: 'Одноклассники', 
      href: OLGICA_DATA.socials.odnoklassniki, 
      icon: OKIcon, 
      hoverColor: 'hover:text-[#EE8208] hover:border-[#EE8208]/60 hover:bg-[#EE8208]/20 hover:shadow-[0_0_15px_rgba(238,130,8,0.4)]' 
    },
    { 
      name: 'Telegram', 
      href: OLGICA_DATA.socials.telegram, 
      icon: TelegramIcon, 
      hoverColor: 'hover:text-[#2AABEE] hover:border-[#2AABEE]/60 hover:bg-[#2AABEE]/20 hover:shadow-[0_0_15px_rgba(42,171,238,0.4)]' 
    },
  ];

  return (
    <div className="w-full flex-grow flex flex-col justify-between px-4 sm:px-8 lg:px-16 pt-2 sm:pt-4 lg:pt-10 pb-4 relative z-20">
      <div className="max-w-[1720px] w-full mx-auto flex-grow flex flex-col justify-between">
        
        {/* Main Content Area: Responsive Reordering */}
        <div className="flex-grow flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 sm:gap-4 lg:gap-8 my-auto py-1 sm:py-2 lg:py-10">
          
          {/* Mobile & Tablet Combined Bottom Stack / Desktop Left Column */}
          <div className="order-2 lg:order-1 flex-shrink-0 w-full lg:w-auto flex flex-col justify-start mt-auto lg:mt-0 pt-2 lg:pt-0">
            
            {/* Mobile & Tablet ONLY: Compact H1 and Subtitle paragraph placed right above "Здоровье & Питание" */}
            <div className="flex lg:hidden flex-col items-start mb-3 sm:mb-4">
              <RevealText 
                className="font-display text-[22px] sm:text-[26px] font-normal leading-tight tracking-[-0.02em] text-white select-none drop-shadow-[0_2px_15px_rgba(0,0,0,0.85)]"
                lines={["Встань на путь", "здоровья"]}
              />

              {/* Subtitle Paragraph on mobile/tablet */}
              <Reveal delay={150} y={15}>
                <p 
                  id="hero-subtitle-mobile"
                  className="mt-1.5 text-xs sm:text-sm text-white/90 font-light leading-relaxed max-w-[340px] drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]"
                >
                  Авторские программы оздоровления, комплексное очищение организма и гармония с собственным телом.
                </p>
              </Reveal>
            </div>

            {/* Frosted Glass Card: "Здоровье & Питание" */}
            <Reveal delay={120} y={24}>
              <div 
                id="confidental-glass-card"
                className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] border border-white/30 bg-white/[0.14] backdrop-blur-xl p-4 sm:p-5 lg:p-8 shadow-2xl shadow-black/30 overflow-hidden transition-all duration-300 hover:border-white/45 hover:bg-white/[0.18]"
              >
                {/* Top edge specular light reflection */}
                <div 
                  className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent" 
                  aria-hidden="true"
                />

                {/* Small Category / Brand Accent */}
                <div className="mb-2.5 sm:mb-3 lg:mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.8)]" />
                  <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.14em] uppercase text-white/90">
                    Здоровье & Питание
                  </span>
                </div>

                {/* Card Headline */}
                <h2 className="text-[15px] sm:text-[17px] lg:text-[21px] font-normal leading-[1.3] text-white tracking-[-0.01em] drop-shadow-sm font-display">
                  Мой дар — бережно вести тебя по пути исцеления
                </h2>

                {/* Accent Description with Left Vertical Bar */}
                <div className="mt-3 sm:mt-4 lg:mt-7 flex items-stretch gap-2.5 sm:gap-3">
                  <div 
                    className="w-[1.5px] bg-white/50 rounded-full flex-shrink-0 self-stretch my-0.5" 
                    aria-hidden="true"
                  />
                  <p className="text-[10px] sm:text-[11px] lg:text-[12px] text-white/85 leading-[1.6] font-light">
                    Для женщин, выбирающих себя. Через индивидуальные протоколы питания, очищение печени и постоянную заботу мы вместе восстанавливаем стойкое здоровье и энергию.
                  </p>
                </div>

                {/* Pill Button: ISTRAŽI PROGRAME */}
                <div className="mt-4 sm:mt-5 lg:mt-8">
                  <button
                    id="btn-explore-products"
                    onClick={onExploreProducts}
                    className="group inline-flex items-center gap-2.5 sm:gap-3 rounded-full border border-white/40 hover:border-white bg-white/10 hover:bg-white/20 active:scale-95 transition-all duration-200 pl-1.5 pr-3.5 sm:pr-4 py-1.5 cursor-pointer shadow-lg shadow-black/20"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0 shadow-sm">
                      <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-[9.5px] sm:text-[10.5px] font-medium tracking-[0.08em] uppercase text-white whitespace-nowrap">
                      Изучить программы
                    </span>
                  </button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Desktop ONLY: Right Lower Display Typography, Social Proof & Social Media Links */}
          <div className="hidden lg:flex order-1 lg:order-2 w-full lg:w-auto flex-col justify-end items-end self-end pb-8 text-right">
            <RevealText
              lines={['Встань на путь', 'здоровья']}
              className="font-display text-[56px] xl:text-[64px] 2xl:text-[70px] font-normal leading-[1.08] tracking-[-0.025em] text-white select-none drop-shadow-[0_4px_35px_rgba(0,0,0,0.85)] max-w-[800px]"
            />

            {/* Inspiring Subtitle Paragraph replacing badge */}
            <Reveal delay={150} y={15}>
              <p 
                id="hero-subtitle-desktop"
                className="mt-4 text-base xl:text-lg text-white/90 font-light leading-relaxed max-w-[520px] drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)]"
              >
                Авторские программы оздоровления, комплексное очищение организма и гармония с собственным телом.
              </p>
            </Reveal>

            {/* Enlarged, lighter glass Social Media Icons */}
            <Reveal delay={250} y={15}>
              <div 
                id="hero-social-icons"
                className="mt-5 flex items-center gap-3"
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
                      className={`w-11 h-11 rounded-full border border-white/25 bg-white/[0.12] hover:bg-white/[0.22] backdrop-blur-xl flex items-center justify-center text-white/90 transition-all duration-200 shadow-lg shadow-black/25 hover:scale-110 active:scale-95 cursor-pointer ${item.hoverColor}`}
                    >
                      <IconComponent className="w-5.5 h-5.5" />
                    </a>
                  );
                })}
              </div>
            </Reveal>
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
              Найдите подходящую программу и начните путь к преображению
            </button>
            <button 
              onClick={onTickerClick}
              aria-label="Узнать больше"
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
