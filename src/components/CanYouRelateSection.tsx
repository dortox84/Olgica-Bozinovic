import React from 'react';
import interiorImg from '../assets/images/can_you_relate_interior_1789292709132.jpg';
import { Sparkles, ArrowRight } from 'lucide-react';
import { OLGICA_DATA } from '../data/bozinovicData';
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
      className="relative w-full min-h-screen bg-[#2C6E67] lg:bg-white text-stone-800 flex items-center justify-center overflow-hidden"
    >
      {/* Background Split: On mobile/tablet, full-bleed #2C6E67 edge-to-edge. On desktop (lg+), Split Left White & Right #2C6E67 */}
      <div className="absolute inset-0 flex" aria-hidden="true">
        {/* Left vertical white band - hidden on mobile/tablet so green goes edge-to-edge */}
        <div className="hidden lg:block w-[18%] xl:w-[20%] bg-white h-full flex-shrink-0" />
        {/* Deep sea-pine teal backdrop */}
        <div className="w-full lg:flex-1 bg-[#2C6E67] h-full" />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-8 sm:py-12 lg:py-6 h-full flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* Column 1: Rounded Photo - Fully displayed without cropping on all mobile and desktop devices */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-start">
            <Reveal delay={100} y={30} className="w-full flex justify-center lg:justify-start">
              <div 
                id="relate-image-card"
                className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] lg:max-w-[460px] xl:max-w-[500px] aspect-square rounded-[22px] sm:rounded-[32px] lg:rounded-[40px] overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-white/25 lg:ring-black/10 group transition-transform duration-500 hover:scale-[1.01] bg-[#1E4D48]"
              >
                {/* Portrait photo - aspect-square with object-contain ensures 100% of the 1:1 original image is fully displayed */}
                <img
                  src="https://res.cloudinary.com/l4orv4yo/image/upload/v1789296600/4a71d565-05e6-469b-a690-0ba4ffed9f28_ioaikn.png"
                  alt="Ольгица Божинович"
                  className="w-full h-full aspect-square object-contain transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gentle subtle border ring */}
                <div 
                  className="pointer-events-none absolute inset-0 rounded-[22px] sm:rounded-[32px] lg:rounded-[40px] ring-1 ring-inset ring-white/15" 
                  aria-hidden="true" 
                />
              </div>
            </Reveal>
          </div>

          {/* Column 2: "Can you relate?" Header & 4 Arrow Points */}
          <div className="lg:col-span-7 xl:col-span-7 text-white lg:pl-2 xl:pl-6 flex flex-col justify-center">
            
            {/* Header with pill tag */}
            <div className="mb-4 sm:mb-5 lg:mb-5">
              <Reveal delay={50} y={15}>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[#D8EFEB] text-[10.5px] sm:text-[11.5px] font-medium uppercase tracking-wider mb-2 sm:mb-2.5">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>Обо мне &middot; Подход и понимание</span>
                </div>
              </Reveal>

              <RevealText
                lines={['Знакомо ли вам это?']}
                className="font-serif-title text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-normal italic tracking-tight text-white leading-[1.15]"
              />

              <Reveal delay={150} y={15}>
                <p className="mt-1.5 text-sm sm:text-[14.5px] text-[#C1DFD9] font-light tracking-wide">
                  Узнаете ли вы себя в этих трудностях и сигналах тела?
                </p>
              </Reveal>
            </div>

            {/* 4 Pain Points with Horizontal Arrows pointing right */}
            <div className="space-y-3 sm:space-y-3.5 lg:space-y-3.5 xl:space-y-4">
              {painPoints.map((point, i) => (
                <Reveal key={point.id} delay={180 + i * 85} y={16}>
                  <div 
                    className="flex items-start gap-3 sm:gap-3.5 group bg-black/10 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none"
                  >
                    {/* Sleek horizontal arrow */}
                    <div className="flex-shrink-0 pt-1 transition-transform duration-300 group-hover:translate-x-1.5">
                      <svg 
                        className="w-6 sm:w-7 lg:w-8 h-3.5 sm:h-3.5 text-[#E0F2EE] group-hover:text-white transition-colors" 
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

                    {/* Paragraph text with clear contrast and comfortable line-height */}
                    <p className="text-[13px] sm:text-[14px] lg:text-[13px] xl:text-[13.5px] text-[#F0F7F5] group-hover:text-white leading-[1.55] sm:leading-[1.6] font-normal tracking-normal transition-colors max-w-xl">
                      {point.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Action Bar */}
            {onRelateClick && (
              <Reveal delay={550} y={20}>
                <div className="mt-5 sm:mt-6 lg:mt-5 pt-4 sm:pt-4 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
                  <span className="text-xs sm:text-[13px] text-[#D4ECE6] font-normal leading-relaxed">
                    Вам не нужно оставаться с этим один на один. Есть естественный путь к стойкому выздоровлению.
                  </span>
                  <button
                    onClick={onRelateClick}
                    className="self-start sm:self-auto rounded-full border border-white/50 hover:border-white bg-white/15 hover:bg-white/25 active:scale-95 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white font-medium transition-all duration-200 cursor-pointer shadow-lg hover:scale-105 inline-flex items-center gap-2 flex-shrink-0"
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
