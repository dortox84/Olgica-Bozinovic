import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { RevealText } from './RevealText';
import { Reveal } from './Reveal';

interface CanYouRelateSectionProps {
  onRelateClick?: () => void;
}

export const CanYouRelateSection: React.FC<CanYouRelateSectionProps> = ({
  onRelateClick,
}) => {
  const painPoints = [
    {
      id: 1,
      text: 'Хроническая усталость и упадок сил даже после 8 часов сна, когда утренний кофе больше не бодрит, а к середине дня накатывает непреодолимая вялость и туман в голове.',
    },
    {
      id: 2,
      text: 'Бесконечные диеты, жесткие ограничения и подсчет калорий, дающие лишь краткий эффект и неизменно ведущие к новому срыву и возврату веса.',
    },
    {
      id: 3,
      text: 'Постоянное вздутие живота — ощущение тяжести словно на раннем сроке беременности сразу после еды, гормональный дисбаланс, раздражительность и тяга к сладкому.',
    },
    {
      id: 4,
      text: 'Растерянность перед списком лекарств и добавок, которые лишь маскируют симптомы, пока истинные причины — здоровье печени и микробиоты — остаются без внимания.',
    },
  ];

  return (
    <section 
      id="can-you-relate-section"
      /* 
        =============================================================================
        SECTION POSITIONING & 100VH FULL-VIEWPORT LAYOUT:
        - `h-full min-h-screen max-h-screen` ensures exact 100vh full-viewport occupancy.
        - Flexbox centering aligns all content vertically and horizontally within 100vh.
        - `overflow-hidden` maintains clean card edges as it stacks.
        =============================================================================
      */
      className="relative w-full h-full min-h-screen max-h-screen bg-[#2C6E67] lg:bg-white text-stone-800 flex items-center justify-center overflow-hidden"
    >
      {/* Background Split: On mobile/tablet, full-bleed #2C6E67. On desktop (lg+), Split Left White & Right #2C6E67 */}
      <div className="absolute inset-0 flex" aria-hidden="true">
        {/* Left vertical white band - desktop only */}
        <div className="hidden lg:block w-[18%] xl:w-[20%] bg-white h-full flex-shrink-0" />
        {/* Deep sea-pine teal backdrop */}
        <div className="w-full lg:flex-1 bg-[#2C6E67] h-full" />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-16 py-6 sm:py-8 lg:py-10 h-full flex items-center justify-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 md:gap-7 lg:gap-10 xl:gap-14 items-center">
          
          {/* 
            =============================================================================
            RESPONSIVE IMAGE DISPLAY:
            - Desktop (lg+): Fully visible as part of the composition (taking 5 cols).
            - Tablet (md to lg): VISIBLE side-by-side with text (taking 4 cols).
            - Mobile / Phone (< md): Hidden (`hidden md:flex`) so text reflows
              seamlessly and fits 100vh comfortably without vertical crowding.
            =============================================================================
          */}
          <div className="hidden md:flex md:col-span-4 lg:col-span-5 xl:col-span-5 justify-center md:justify-start">
            <Reveal delay={100} y={30} className="w-full flex justify-center md:justify-start">
              <div 
                id="relate-image-card"
                className="relative w-full max-w-[280px] md:max-w-[320px] lg:max-w-[420px] xl:max-w-[480px] aspect-square rounded-[24px] md:rounded-[32px] lg:rounded-[40px] overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-black/10 group transition-transform duration-500 hover:scale-[1.01] bg-[#1E4D48]"
              >
                {/* Portrait photo (Visible on Tablet & Desktop) */}
                <img
                  src="https://res.cloudinary.com/l4orv4yo/image/upload/v1789296600/4a71d565-05e6-469b-a690-0ba4ffed9f28_ioaikn.png"
                  alt="Ольгица Божинович"
                  className="w-full h-full aspect-square object-contain transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle border ring */}
                <div 
                  className="pointer-events-none absolute inset-0 rounded-[24px] md:rounded-[32px] lg:rounded-[40px] ring-1 ring-inset ring-white/15" 
                  aria-hidden="true" 
                />
              </div>
            </Reveal>
          </div>

          {/* 
            =============================================================================
            RESPONSIVE CONTENT COLUMN:
            - On Mobile (< md): Takes 100% width, reflowing freely across the screen.
            - On Tablet (md): Takes 8 cols next to the 4-col tablet image.
            - On Desktop (lg): Takes 7 cols next to the 5-col desktop image.
            =============================================================================
          */}
          <div className="col-span-1 md:col-span-8 lg:col-span-7 xl:col-span-7 w-full text-white md:pl-2 lg:pl-4 xl:pl-8 flex flex-col justify-center">
            
            {/* Header with pill tag */}
            <div className="mb-3 sm:mb-4 lg:mb-5">
              <Reveal delay={50} y={15}>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[#D8EFEB] text-[10.5px] sm:text-[11.5px] font-medium uppercase tracking-wider mb-2">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>Обо мне &middot; Подход и понимание</span>
                </div>
              </Reveal>

              <RevealText
                lines={['Знакомо ли вам это?']}
                className="font-serif-title text-2xl sm:text-3xl md:text-3xl lg:text-[42px] xl:text-[48px] font-normal italic tracking-tight text-white leading-[1.12]"
              />

              <Reveal delay={150} y={15}>
                <p className="mt-1 text-xs sm:text-sm text-[#C1DFD9] font-light tracking-wide">
                  Узнаете ли вы себя в этих трудностях и сигналах тела?
                </p>
              </Reveal>
            </div>

            {/* 4 Pain Points with Horizontal Arrows */}
            <div className="space-y-2.5 sm:space-y-3 lg:space-y-3.5 xl:space-y-4">
              {painPoints.map((point, i) => (
                <Reveal key={point.id} delay={180 + i * 75} y={14}>
                  <div 
                    className="flex items-start gap-2.5 sm:gap-3.5 group bg-white/5 sm:bg-transparent p-2 sm:p-0 rounded-xl sm:rounded-none"
                  >
                    {/* Sleek horizontal arrow */}
                    <div className="flex-shrink-0 pt-0.5 sm:pt-1 transition-transform duration-300 group-hover:translate-x-1.5">
                      <svg 
                        className="w-5 sm:w-6 lg:w-7 h-3 sm:h-3.5 text-[#E0F2EE] group-hover:text-white transition-colors" 
                        viewBox="0 0 40 14" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="1.6" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <line x1="2" y1="7" x2="36" y2="7" />
                        <polyline points="29,2 36,7 29,12" />
                      </svg>
                    </div>

                    {/* Paragraph text */}
                    <p className="text-[12px] sm:text-[13px] md:text-[12.5px] lg:text-[13px] xl:text-[13.5px] text-[#F0F7F5] group-hover:text-white leading-[1.5] sm:leading-[1.55] font-normal tracking-normal transition-colors max-w-2xl">
                      {point.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Action Bar */}
            {onRelateClick && (
              <Reveal delay={500} y={16}>
                <div className="mt-4 sm:mt-5 lg:mt-5 pt-3 sm:pt-4 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-[11px] sm:text-xs text-[#D4ECE6] font-normal leading-relaxed max-w-md">
                    Вам не нужно оставаться с этим один на один. Есть естественный путь к стойкому выздоровлению.
                  </span>
                  <button
                    onClick={onRelateClick}
                    className="self-start sm:self-auto rounded-full border border-white/50 hover:border-white bg-white/15 hover:bg-white/25 active:scale-95 px-4 sm:px-6 py-2 text-xs sm:text-sm text-white font-medium transition-all duration-200 cursor-pointer shadow-lg hover:scale-105 inline-flex items-center gap-2 flex-shrink-0"
                  >
                    <span>Найти решение</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </Reveal>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
