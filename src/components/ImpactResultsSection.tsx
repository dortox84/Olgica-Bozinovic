import React, { useState } from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { OLGICA_DATA } from '../data/bozinovicData';

interface ImpactResultsSectionProps {
  onStoryClick?: (storyId: string) => void;
}

export const ImpactResultsSection: React.FC<ImpactResultsSectionProps> = ({ onStoryClick }) => {
  // Testimonials matching the card format in the user's mockup, in Russian
  const stories = [
    {
      id: 'story-1',
      quote:
        '«Программа очищения печени и новый протокол питания подарили мне невероятную энергию и легкость. Вздутие и постоянная усталость ушли уже через 2 недели».',
      author: 'Елена Маркович',
      role: 'Программа «Путь Здоровья»',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    },
    {
      id: 'story-2',
      quote:
        '«Ольгица полностью изменила мое отношение к пище и телу. Больше никаких изнурительных диет, а гормоны и анализы пришли в идеальный баланс».',
      author: 'Милица Стоянович',
      role: 'Очищение печени BO',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80',
    },
    {
      id: 'story-3',
      quote:
        '«Минус 9 килограммов и возвращение жизненной силы. Чуткость, глубокий профессионализм и ежедневная забота, которые меняют жизнь навсегда».',
      author: 'Анна Крстич',
      role: 'Индивидуальный протокол питания',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
    },
    {
      id: 'story-4',
      quote:
        '«После долгих лет хождений по врачам целостный подход Ольгицы помог справиться с инсулинорезистентностью и хронической усталостью. Искренняя рекомендация!»',
      author: 'Мария Йованович',
      role: 'Здоровье ЖКТ и метаболизм',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80',
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % stories.length);
  };

  // Visible stories (3 at a time)
  const visibleStories = [
    stories[startIndex],
    stories[(startIndex + 1) % stories.length],
    stories[(startIndex + 2) % stories.length],
  ];

  return (
    <section 
      id="impact-results-section"
      className="relative w-full bg-[#f4f5f3] text-stone-900 py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 xl:px-16 overflow-hidden select-none"
    >
      {/* Subtle organic wavy line illustration at bottom-left */}
      <div 
        className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 opacity-30 z-0" 
        aria-hidden="true"
      >
        <svg viewBox="0 0 400 400" fill="none" className="w-full h-full text-[#c8d4cc]">
          <path d="M-50 400 C 50 300, 150 380, 250 310 C 350 240, 380 320, 420 260" stroke="currentColor" strokeWidth="2.5" />
          <path d="M-50 430 C 70 340, 180 400, 270 340 C 360 280, 390 350, 440 300" stroke="currentColor" strokeWidth="1.5" />
          <path d="M-50 460 C 90 380, 200 430, 290 370 C 380 310, 410 370, 460 330" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1560px] mx-auto">
        
        {/* Top Header Section */}
        <div className="mb-10 sm:mb-14">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-stone-500 mb-2 sm:mb-3">
            НАШИ РЕЗУЛЬТАТЫ
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[50px] xl:text-[56px] font-normal tracking-tight text-stone-900 leading-[1.12] max-w-3xl">
            Мы бережно восстанавливаем<br />
            здоровье женщин
          </h2>
          <p className="mt-3.5 sm:mt-4 text-stone-600 text-xs sm:text-sm lg:text-base max-w-xl font-normal leading-relaxed">
            Клиенты доверяют нам свой путь к гармонии и жизненной энергии. Вот реальные истории преображения и результаты нашей работы.
          </p>
        </div>

        {/* Testimonials & Rating Row */}
        <div className="relative flex items-center gap-4 sm:gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full">
            
            {/* 1. Rating Card (4.8 / 500+ reviews) */}
            <div 
              id="impact-rating-card"
              className="bg-[#ebece9] rounded-[22px] sm:rounded-[26px] p-6 sm:p-7 flex flex-col items-center justify-center text-center border border-stone-300/60 shadow-xs min-h-[260px]"
            >
              <div className="text-[48px] sm:text-[54px] lg:text-[58px] font-semibold text-stone-900 leading-none tracking-tight">
                4.8
              </div>

              {/* 5 Filled Gold Stars */}
              <div className="flex items-center gap-1 my-3 text-amber-500">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 stroke-amber-500" />
                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 stroke-amber-500" />
                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 stroke-amber-500" />
                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 stroke-amber-500" />
                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 stroke-amber-500" />
              </div>

              <div className="text-xs sm:text-sm font-semibold text-stone-900">
                500+ отзывов
              </div>
              <p className="text-[10px] sm:text-[11px] text-stone-500 font-normal mt-0.5">
                В Google, Instagram и клиентских анкетах
              </p>
            </div>

            {/* 2. Three Testimonial Cards */}
            {visibleStories.map((story, idx) => (
              <div
                key={`${story.id}-${idx}`}
                className="bg-white rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 flex flex-col justify-between border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-300 min-h-[260px] group"
              >
                <div>
                  <p className="text-xs sm:text-[13px] text-stone-700 leading-relaxed font-normal">
                    {story.quote}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-100 flex flex-col gap-3">
                  <div className="flex items-center gap-2.5">
                    <img 
                      src={story.avatar} 
                      alt={story.author} 
                      className="w-9 h-9 rounded-full object-cover border border-stone-200 shadow-2xs"
                    />
                    <div className="min-w-0">
                      <h4 className="text-xs font-semibold text-stone-900 truncate">
                        {story.author}
                      </h4>
                      <p className="text-[10.5px] text-stone-500 truncate">
                        {story.role}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => onStoryClick?.(story.id)}
                    className="inline-flex items-center gap-1.5 text-[11px] font-medium text-stone-800 hover:text-stone-950 bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded-lg w-fit transition-colors cursor-pointer"
                  >
                    <span>Читать историю</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}

          </div>

          {/* Next arrow carousel button */}
          <button
            onClick={handleNext}
            aria-label="Следующие отзывы"
            className="hidden xl:flex w-10 h-10 rounded-full bg-stone-200/80 hover:bg-stone-300 text-stone-800 items-center justify-center flex-shrink-0 transition-all shadow-xs hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Big Bottom Card: 20.500+ Подписчиков & Прогресс-бары */}
        <div 
          id="impact-instagram-card"
          className="mt-6 sm:mt-8 bg-[#ebece9] rounded-[24px] sm:rounded-[28px] border border-stone-300/70 p-6 sm:p-8 lg:p-10 shadow-xs"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: 20.500+ Подписчиков в Instagram */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <span className="text-4xl sm:text-5xl lg:text-[60px] xl:text-[68px] font-bold tracking-tight text-stone-900 leading-none">
                20.500+
              </span>
              <span className="text-sm sm:text-base text-stone-600 font-normal mt-2 sm:mt-3">
                Подписчиков в Instagram
              </span>
            </div>

            {/* Middle Divider (desktop only) */}
            <div className="hidden lg:block lg:col-span-1 h-20 w-[1px] bg-stone-300/70 mx-auto" />

            {/* Right Column: 3 Progress Bars */}
            <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
              
              {/* Bar 1: Профилактика 99% */}
              <div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-stone-800 mb-1.5">
                  <span>Профилактика и превентивный подход</span>
                  <span>99%</span>
                </div>
                <div className="w-full h-2.5 sm:h-3 rounded-full bg-stone-300/60 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-[#244b3b] transition-all duration-1000"
                    style={{ width: '99%' }}
                  />
                </div>
              </div>

              {/* Bar 2: Хронические состояния 90% */}
              <div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-stone-800 mb-1.5">
                  <span>Хронические состояния и восстановление</span>
                  <span>90%</span>
                </div>
                <div className="w-full h-2.5 sm:h-3 rounded-full bg-stone-300/60 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-[#3c6b54] transition-all duration-1000"
                    style={{ width: '90%' }}
                  />
                </div>
              </div>

              {/* Bar 3: Индивидуальные программы питания 60% */}
              <div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-stone-800 mb-1.5">
                  <span>Индивидуальные программы питания</span>
                  <span>60%</span>
                </div>
                <div className="w-full h-2.5 sm:h-3 rounded-full bg-stone-300/60 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-[#e85d47] transition-all duration-1000"
                    style={{ width: '60%' }}
                  />
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
