import React from 'react';
import interiorImg from '../assets/images/can_you_relate_interior_1789292709132.jpg';

interface CanYouRelateSectionProps {
  onRelateClick?: () => void;
}

export const CanYouRelateSection: React.FC<CanYouRelateSectionProps> = ({
  onRelateClick,
}) => {
  const painPoints = [
    {
      id: 1,
      text: 'Хроническая усталость и упадок сил даже после 8 часов сна, когда утренний кофе уже не приносит энергии, а к середине дня накатывает непреодолимая сонливость.',
    },
    {
      id: 2,
      text: 'Бесконечные диеты, подсчет калорий и строгие ограничения, которые дают лишь кратковременный результат, сменяясь новым срывом, чувством вины и возвратом веса.',
    },
    {
      id: 3,
      text: 'Гормональные качели, внезапные вспышки раздражительности, тревожность, отечность и резкая тяга к сладкому или углеводам во второй половине дня.',
    },
    {
      id: 4,
      text: 'Вздутие живота, дискомфорт и тяжесть после каждого приема пищи, непереносимость привычных продуктов и отсутствие легкости в теле.',
    },
  ];

  return (
    <section 
      id="can-you-relate-section"
      className="relative w-full overflow-hidden bg-white text-stone-800"
    >
      {/* Background Split: Left White (approx 18-20% on desktop) & Right Rich Deep Teal (#2C6E67) */}
      <div className="absolute inset-0 flex" aria-hidden="true">
        {/* Left vertical white band */}
        <div className="w-[12%] sm:w-[15%] lg:w-[18%] xl:w-[20%] bg-white h-full flex-shrink-0" />
        {/* Right deep sea-pine teal backdrop matching the reference image */}
        <div className="flex-1 bg-[#2C6E67] h-full" />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Rounded Photo straddling the white and teal background seam */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-start">
            <div 
              id="relate-image-card"
              className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-none rounded-[32px] sm:rounded-[42px] lg:rounded-[48px] overflow-hidden shadow-2xl shadow-black/35 ring-1 ring-black/10 group transition-transform duration-500 hover:scale-[1.01]"
            >
              {/* Warm interior photo matching the clay wall, olive plant & wooden armchair */}
              <img
                src={interiorImg}
                alt="Уютный теплый интерьер с креслом и оливковым деревом"
                className="w-full h-[400px] sm:h-[480px] lg:h-[580px] xl:h-[640px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gentle warm vignette overlay */}
              <div 
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" 
                aria-hidden="true" 
              />
            </div>
          </div>

          {/* Right Column: "Can you relate?" Header & 4 Arrow Points (Inside the Teal Zone) */}
          <div className="lg:col-span-7 xl:col-span-7 text-white lg:pl-4 xl:pl-8">
            
            {/* Display Headline: "Can you relate?" exactly as in the user's reference */}
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <h2 
                id="can-you-relate-title"
                className="font-serif-title text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-normal italic tracking-tight text-[#EEF6F4] leading-[1.15]"
              >
                Can you relate?
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#B4D7D0] font-light tracking-wide uppercase">
                Знакомо ли вам это чувство?
              </p>
            </div>

            {/* 4 Pain Points with Horizontal Arrows pointing right */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-9">
              {painPoints.map((point) => (
                <div 
                  key={point.id} 
                  className="flex items-start gap-4 sm:gap-6 group"
                >
                  {/* Sleek horizontal arrow (identical to reference image) */}
                  <div className="flex-shrink-0 pt-1 sm:pt-1.5 transition-transform duration-300 group-hover:translate-x-1.5">
                    <svg 
                      className="w-8 sm:w-10 h-3.5 sm:h-4 text-[#C1DFD9] group-hover:text-white transition-colors" 
                      viewBox="0 0 40 14" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.35" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="2" y1="7" x2="36" y2="7" />
                      <polyline points="29,2 36,7 29,12" />
                    </svg>
                  </div>

                  {/* Paragraph text in soft pale seafoam */}
                  <p className="text-xs sm:text-[13.5px] lg:text-[14.5px] text-[#DCECE8] group-hover:text-white leading-[1.7] font-light tracking-normal transition-colors max-w-xl">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Optional gentle interactive action */}
            {onRelateClick && (
              <div className="mt-10 sm:mt-12 pt-6 border-t border-white/15 flex items-center justify-between">
                <span className="text-xs sm:text-sm text-[#C4E2DC] font-light">
                  Вам не нужно справляться с этим в одиночку.
                </span>
                <button
                  onClick={onRelateClick}
                  className="rounded-full border border-white/40 hover:border-white bg-white/10 hover:bg-white/20 px-5 sm:px-6 py-2 text-xs sm:text-sm text-white font-medium transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95"
                >
                  Узнать решение
                </button>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
