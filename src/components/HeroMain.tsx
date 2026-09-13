import React from 'react';
import { ArrowRight, Heart, Sparkles, Target, Compass } from 'lucide-react';
import { MiniLeafIcon, LotusIcon, DoodleHeartIcon } from './CustomIcons';

interface HeroMainProps {
  onOpenBooking: () => void;
  onOpenAbout: () => void;
}

export const HeroMain: React.FC<HeroMainProps> = ({ onOpenBooking, onOpenAbout }) => {
  const benefits = [
    {
      id: 'confidence',
      text: 'Больше уверенности в себе',
      icon: <Compass className="w-4 h-4 text-zinc-300" strokeWidth={1.5} />,
    },
    {
      id: 'relationships',
      text: 'Гармоничные отношения',
      icon: <Heart className="w-4 h-4 text-zinc-300" strokeWidth={1.5} />,
    },
    {
      id: 'energy',
      text: 'Энергия и мотивация',
      icon: <Sparkles className="w-4 h-4 text-zinc-300" strokeWidth={1.5} />,
    },
    {
      id: 'goals',
      text: 'Достижение целей',
      icon: <Target className="w-4 h-4 text-zinc-300" strokeWidth={1.5} />,
    },
    {
      id: 'harmony',
      text: 'Внутренняя гармония',
      icon: <LotusIcon className="w-4 h-4 text-zinc-300" />,
    },
  ];

  return (
    <section className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-6 sm:pt-10 pb-4">
      {/* Background ambient light glow */}
      <div 
        className="pointer-events-none absolute top-10 right-1/4 w-[500px] h-[350px] bg-amber-500/[0.025] rounded-full blur-[120px] -z-10"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start justify-between">
        {/* Left Column: Heading, description, and CTAs */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start">
          {/* Top Pill / Badge */}
          <div 
            id="hero-badge"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/45 hover:bg-black/60 backdrop-blur-xl px-4 py-1.5 text-xs text-zinc-100 mb-6 sm:mb-8 shadow-lg shadow-black/25 transition-colors"
          >
            <MiniLeafIcon className="w-3.5 h-3.5 text-amber-200" />
            <span className="tracking-wide font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">Жизнь в которой ты — на первом месте</span>
          </div>

          {/* Display Heading in Cormorant Garamond */}
          <h1 
            id="hero-heading"
            className="font-serif-display text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] font-normal leading-[1.1] text-white tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]"
          >
            Помогу тебе найти<br />
            свой путь и начать<br />
            жить по-настоящему
          </h1>

          {/* Subtitle / Description */}
          <p 
            id="hero-subtitle"
            className="mt-6 sm:mt-8 text-sm sm:text-base text-[#f0f0f3] font-normal leading-relaxed max-w-xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]"
          >
            Индивидуальный коучинг для тех, кто хочет больше уверенности, ясности и гармонии в жизни. Вместе мы разберёмся в твоих целях, страхах и создадим план, который приведёт к реальным переменам.
          </p>

          {/* Actions Row */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-6">
            <button
              id="hero-primary-cta"
              onClick={onOpenBooking}
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/35 hover:border-white/70 bg-black/50 hover:bg-black/70 backdrop-blur-xl px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm text-white font-medium transition-all duration-200 cursor-pointer shadow-xl shadow-black/40"
            >
              <span className="drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">Записаться на первую сессию</span>
              <ArrowRight className="w-4 h-4 text-amber-200/90 group-hover:translate-x-1 transition-transform drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]" />
            </button>

            <button
              id="hero-learn-more-cta"
              onClick={onOpenAbout}
              className="text-xs sm:text-sm text-white hover:text-amber-200/90 underline underline-offset-4 transition-colors cursor-pointer py-2 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
            >
              Узнать больше
            </button>
          </div>
        </div>

        {/* Right Column: Stacked benefits list & handwritten note pushed to the right */}
        <div className="lg:col-span-5 xl:col-span-5 flex flex-col lg:items-end w-full lg:pt-4">
          <div className="w-full max-w-xs sm:max-w-sm flex flex-col space-y-4 sm:space-y-4.5">
            {benefits.map((item) => (
              <div
                key={item.id}
                id={`benefit-item-${item.id}`}
                className="flex items-center gap-3.5 group cursor-default"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/25 bg-black/50 hover:bg-black/65 backdrop-blur-xl flex items-center justify-center flex-shrink-0 group-hover:border-white/45 transition-all shadow-lg shadow-black/30">
                  {item.icon}
                </div>
                <span className="text-xs sm:text-sm text-white group-hover:text-amber-100 transition-colors font-medium tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Handwritten script note: "Ты можешь больше ♡" */}
          <div 
            id="hero-handwritten-note"
            className="mt-8 sm:mt-10 mr-2 sm:mr-6 flex flex-col items-center select-none -rotate-6 transform transition-transform hover:-rotate-3 duration-300 cursor-default drop-shadow-[0_3px_14px_rgba(0,0,0,0.98)]"
          >
            <p className="font-script text-2xl sm:text-[32px] text-[#fff8ea] leading-[1.1] tracking-wide text-center">
              Ты можешь<br />больше
            </p>
            <div className="mt-1 text-[#fff8ea]">
              <DoodleHeartIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
