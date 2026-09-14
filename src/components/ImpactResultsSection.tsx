import React from 'react';
import { RevealText } from './RevealText';
import { Reveal } from './Reveal';

interface TestimonialCardData {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

interface ImpactResultsSectionProps {
  onStoryClick?: (storyId: string) => void;
}

export const ImpactResultsSection: React.FC<ImpactResultsSectionProps> = ({ onStoryClick }) => {
  const testimonials: TestimonialCardData[] = [
    // Card 1
    {
      id: 'testimonial-1',
      quote:
        'Программа детоксикации и новый протокол питания вернули мне энергию и легкость. Вздутие и хроническая усталость ушли уже через 2 недели.',
      author: 'Елена Маркович',
      role: 'Программа Детокс',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    },
    // Card 2
    {
      id: 'testimonial-2',
      quote:
        'Ольгица полностью изменила мое отношение к пище и телу. Больше никаких жестких диет — гормоны и анализы пришли в идеальный баланс.',
      author: 'Милица Стоянович',
      role: 'Очищение печени BO',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80',
    },
    // Card 3
    {
      id: 'testimonial-3',
      quote:
        'Я в восторге от научно обоснованного и чуткого подхода. Рецепты и рекомендации Ольгицы буквально вернули меня к полноценной активной жизни.',
      author: 'Душан Драгович',
      role: 'Восстановление здоровья',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    },
    // Card 4
    {
      id: 'testimonial-4',
      quote:
        'Минус 9 килограммов без стресса и возвращение бодрости. Глубокий профессионализм и искренняя забота Ольгицы меняют самочувствие навсегда.',
      author: 'Анна Крстич',
      role: 'Программа «Путь Здоровья»',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
    },
    // Card 5
    {
      id: 'testimonial-5',
      quote:
        'Ольгица — надежная опора для всей семьи уже не один год. Грамотный подбор рациона и суплементов позволил навсегда забыть о проблемах ЖКТ.',
      author: 'Светлана Попович',
      role: 'Здоровье ЖКТ и метаболизм',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80',
    },
    // Card 6
    {
      id: 'testimonial-6',
      quote:
        'Целостный подход помог справиться с инсулинорезистентностью и постоянным упадком сил. Рекомендую каждому, кто ценит истинное здоровье!',
      author: 'Мария Йованович',
      role: 'Индивидуальный рацион',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80',
    },
    // Card 7
    {
      id: 'testimonial-7',
      quote:
        'Кожа очистилась, ушли постоянные высыпания и утренняя отечность. Никогда не думала, что состояние кишечника настолько прямо отражается на лице!',
      author: 'Татьяна Васильевич',
      role: 'Программа «Чистая кожа»',
      avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=120&h=120&q=80',
    },
    // Card 8
    {
      id: 'testimonial-8',
      quote:
        'Анализы крови через 3 месяца после программы приятно удивили даже лечащего врача. Холестерин и ферритин впервые за 5 лет в норме.',
      author: 'Александр Петрович',
      role: 'Коррекция дефицитов',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80',
    },
  ];

  // Helper render for single testimonial card matching the uploaded mockup
  const renderCard = (card: TestimonialCardData, extraClasses: string = '') => (
    <div
      key={card.id}
      id={`card-${card.id}`}
      onClick={() => onStoryClick?.(card.id)}
      className={`bg-white rounded-[16px] sm:rounded-[18px] p-5 sm:p-6 shadow-[0_12px_36px_rgba(0,0,0,0.06)] border border-stone-100/90 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(0,0,0,0.10)] cursor-pointer group ${extraClasses}`}
    >
      <div>
        {/* Double quote mark */}
        <div className="mb-3 text-stone-900 select-none">
          <svg className="w-4 h-4 fill-stone-900" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Testimonial body text */}
        <p className="text-[12.5px] sm:text-[13px] text-stone-600 font-normal leading-[1.65]">
          {card.quote}
        </p>
      </div>

      {/* Author Footer */}
      <div className="mt-5 pt-3 flex items-center gap-2.5">
        <img
          src={card.avatar}
          alt={card.author}
          className="w-8 h-8 rounded-full object-cover border border-stone-200 flex-shrink-0"
        />
        <div className="min-w-0">
          <h4 className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider text-stone-900 truncate">
            {card.author}
          </h4>
          <p className="text-[10px] text-stone-400 font-medium truncate">
            {card.role}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="testimonials-section"
      className="relative w-full bg-[#ffffff] text-stone-900 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 xl:px-16 overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto relative">
        
        {/* Main Flex/Grid container */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 xl:gap-12 relative">
          
          {/* Left Column: Heading, Subtitle and Trust Metrics */}
          <div className="w-full lg:w-[280px] xl:w-[320px] flex-shrink-0 flex flex-col justify-between self-stretch">
            <div>
              <RevealText
                lines={['Что говорят', 'о нас']}
                className="text-3xl sm:text-4xl lg:text-[38px] xl:text-[42px] font-bold text-stone-900 tracking-tight leading-[1.15]"
              />

              <Reveal delay={120} y={16}>
                <p className="mt-4 text-xs sm:text-sm text-stone-500 font-normal leading-relaxed">
                  Истории участников, восстановивших здоровье, энергию и гармонию с телом благодаря авторским программам Ольгицы Божинович.
                </p>
              </Reveal>

              {/* Trust & Rating Badges filling left column space */}
              <Reveal delay={200} y={20}>
                <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-400 text-sm">
                      {'★'.repeat(5)}
                    </div>
                    <span className="text-xs font-bold text-stone-800">4.9 / 5.0</span>
                    <span className="text-[11px] text-stone-400 font-normal">(1 200+ отзывов)</span>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-center gap-2 text-[12px] text-stone-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2C6E67]" />
                      <span>98% участников отмечают прилив сил</span>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-stone-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2C6E67]" />
                      <span>Более 10 лет доказательной практики</span>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-stone-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2C6E67]" />
                      <span>100% персонализированный подход</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Section: Multi-column Staggered Grid */}
          <div className="flex-1 w-full relative">

            {/* Desktop / Large Screen Layout: 4 Columns Staggered, All 8 Cards Balanced */}
            <div className="hidden lg:grid grid-cols-4 gap-4 xl:gap-5 items-start">
              
              {/* Column 1: Two cards */}
              <Reveal delay={100} y={24} className="flex flex-col gap-3.5 xl:gap-4 pt-4 xl:pt-6">
                {renderCard(testimonials[0], 'min-h-[195px]')}
                {renderCard(testimonials[6], 'min-h-[195px]')}
              </Reveal>

              {/* Column 2: Two cards */}
              <Reveal delay={180} y={24} className="flex flex-col gap-3.5 xl:gap-4 pt-0">
                {renderCard(testimonials[1], 'min-h-[195px]')}
                {renderCard(testimonials[7], 'min-h-[195px]')}
              </Reveal>

              {/* Column 3: Two cards */}
              <Reveal delay={260} y={24} className="flex flex-col gap-3.5 xl:gap-4 pt-6 xl:pt-8">
                {renderCard(testimonials[2], 'min-h-[195px]')}
                {renderCard(testimonials[3], 'min-h-[195px]')}
              </Reveal>

              {/* Column 4: Two cards */}
              <Reveal delay={340} y={24} className="flex flex-col gap-3.5 xl:gap-4 pt-2 xl:pt-3">
                {renderCard(testimonials[4], 'min-h-[195px]')}
                {renderCard(testimonials[5], 'min-h-[195px]')}
              </Reveal>

            </div>

            {/* Tablet & Mobile Layout: Responsive Clean Staggered Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4 sm:gap-5">
              {testimonials.map((card, idx) => (
                <Reveal key={card.id} delay={idx * 75} y={18}>
                  {renderCard(card)}
                </Reveal>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
