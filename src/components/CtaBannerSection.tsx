import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { OLGICA_DATA } from '../data/bozinovicData';
import { RevealText } from './RevealText';
import { Reveal } from './Reveal';

interface CtaBannerSectionProps {
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export const CtaBannerSection: React.FC<CtaBannerSectionProps> = ({
  onPrimaryClick,
  onSecondaryClick,
}) => {
  const customerAvatars = [
    {
      name: 'Елена',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80',
    },
    {
      name: 'Марко',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80',
    },
    {
      name: 'Ана',
      img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&h=80&q=80',
    },
    {
      name: 'Светлана',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&h=80&q=80',
    },
    {
      name: 'Дмитрий',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80',
    },
  ];

  return (
    <section 
      id="elevate-health-cta" 
      /* 
        =============================================================================
        SECTION POSITIONING & 100VH PRESENTATION CARD (SECTION 4):
        - `h-full min-h-screen max-h-screen` occupies full 100vh viewport as final slide.
        - `flex flex-col justify-between` nicely spaces banner and footer.
        =============================================================================
      */
      className="relative w-full h-full min-h-screen max-h-screen bg-[#f8faf9] py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-12 xl:px-16 flex flex-col justify-between overflow-y-auto lg:overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto my-auto">
        
        {/* Main Banner Card */}
        <Reveal delay={100} y={30}>
          <div 
            className="relative overflow-hidden rounded-[26px] sm:rounded-[34px] lg:rounded-[40px] bg-gradient-to-r from-[#215650] via-[#2C6E67] to-[#1E4D48] text-white p-6 sm:p-10 lg:p-12 xl:p-14 shadow-[0_20px_50px_rgba(44,110,103,0.25)] border border-white/15"
          >
            
            {/* Subtle Sketch / Line-Art Overlay in Background */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-10 mix-blend-overlay bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" 
              aria-hidden="true" 
            />

            {/* Decorative Translucent Bokeh Shape Top-Left */}
            <div 
              className="absolute -top-16 -left-16 w-52 h-52 sm:w-72 sm:h-72 rounded-full bg-white/10 blur-xl pointer-events-none" 
              aria-hidden="true" 
            />
            <div 
              className="absolute top-2 left-6 w-24 h-24 rounded-full border border-white/15 pointer-events-none" 
              aria-hidden="true" 
            />

            {/* Decorative Translucent Bokeh Shapes Bottom-Right */}
            <div 
              className="absolute -bottom-20 -right-16 w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-white/10 blur-xl pointer-events-none" 
              aria-hidden="true" 
            />
            <div 
              className="absolute -bottom-10 right-10 w-40 h-40 rounded-full border border-white/15 pointer-events-none" 
              aria-hidden="true" 
            />

            {/* Inner Content Grid: Left side text, Right side CTA & Social Proof */}
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 lg:gap-12">
              
              {/* Left Column */}
              <div className="max-w-[620px]">
                
                {/* Badge */}
                <div 
                  id="cta-badge-new-collection"
                  className="inline-flex items-center gap-2 bg-white rounded-full py-1 px-3 shadow-md shadow-black/10"
                >
                  <span className="w-4 h-4 rounded-[4px] bg-emerald-600 flex items-center justify-center text-white">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-stone-800 tracking-tight">
                    Новая программа
                  </span>
                </div>

                {/* Title */}
                <div className="mt-3 sm:mt-4">
                  <RevealText
                    lines={['Готовы восстановить здоровье', 'и вернуть энергию?']}
                    className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-bold text-white tracking-tight leading-[1.12]"
                  />
                </div>

                {/* Subtitle Paragraph */}
                <p 
                  id="cta-subtitle-text"
                  className="mt-2.5 sm:mt-3 text-xs sm:text-sm lg:text-[15px] text-white/90 font-light leading-relaxed max-w-[540px]"
                >
                  Не откладывайте заботу о себе. Индивидуальный план питания, очищение организма и баланс уже ждут вас.
                </p>

                {/* Bullets */}
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-[13px] text-emerald-100 font-light">
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                    Без изнурительных диет
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                    Анализ анализов и дефицитов
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                    Личное ведение экспертом
                  </span>
                </div>
              </div>

              {/* Right Column: CTA Buttons and Customer Proof */}
              <div className="flex flex-col items-start lg:items-end flex-shrink-0">
                
                {/* Buttons Row */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full sm:w-auto">
                  
                  {/* Primary Button */}
                  <button
                    id="cta-primary-btn"
                    onClick={onPrimaryClick}
                    className="w-full sm:w-auto px-6 py-2.5 sm:py-3 rounded-xl bg-white hover:bg-stone-50 text-[#2C6E67] font-bold text-xs sm:text-sm shadow-lg shadow-black/20 hover:shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Выбрать программу</span>
                    <ArrowRight className="w-4 h-4 text-[#2C6E67] transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  {/* Secondary Button */}
                  <button
                    id="cta-secondary-btn"
                    onClick={onSecondaryClick}
                    className="w-full sm:w-auto px-5 py-2.5 sm:py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/40 hover:border-white/60 text-white font-semibold text-xs sm:text-sm backdrop-blur-sm active:scale-[0.98] transition-all flex items-center justify-center cursor-pointer"
                  >
                    Узнать больше
                  </button>
                </div>

                {/* Social Proof */}
                <div 
                  id="cta-social-proof"
                  className="mt-3 sm:mt-4 flex items-center gap-2.5 sm:gap-3"
                >
                  <div className="flex items-center -space-x-2">
                    {customerAvatars.map((item, idx) => (
                      <img
                        key={idx}
                        src={item.img}
                        alt={item.name}
                        className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover shadow-xs"
                      />
                    ))}
                  </div>

                  <span className="text-[11px] sm:text-xs text-white/95 font-medium tracking-wide">
                    5/5 (1 200+ клиентов)
                  </span>
                </div>

              </div>

            </div>

          </div>
        </Reveal>

      </div>

      {/* Bottom Footer */}
      <div className="w-full max-w-[1440px] mx-auto pt-4 pb-2 flex flex-col sm:flex-row items-center justify-between text-stone-500 text-[11px] sm:text-xs gap-2 border-t border-stone-200/80">
        <p>© {new Date().getFullYear()} {OLGICA_DATA.name}. Все права защищены.</p>
        <p className="text-stone-500 font-light">{OLGICA_DATA.tagline}</p>
      </div>
    </section>
  );
};
