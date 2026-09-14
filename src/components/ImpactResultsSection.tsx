import React from 'react';

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
    // Column 1 (lower offset)
    {
      id: 'testimonial-1',
      quote:
        'Программа детоксикации и новый протокол питания вернули мне энергию и легкость. Вздутие и хроническая усталость ушли уже через 2 недели.',
      author: 'Елена Маркович',
      role: 'Программа Детокс',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    },
    // Column 2 (mid offset)
    {
      id: 'testimonial-2',
      quote:
        'Ольгица полностью изменила мое отношение к пище и телу. Больше никаких жестких диет — гормоны и анализы пришли в идеальный баланс.',
      author: 'Милица Стоянович',
      role: 'Очищение печени BO',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80',
    },
    // Column 3 - Top
    {
      id: 'testimonial-3',
      quote:
        'Я в восторге от научно обоснованного и чуткого подхода. Рецепты и рекомендации Ольгицы буквально вернули меня к полноценной активной жизни.',
      author: 'Душан Драгович',
      role: 'Восстановление здоровья',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    },
    // Column 3 - Bottom
    {
      id: 'testimonial-4',
      quote:
        'Минус 9 килограммов без стресса и возвращение бодрости. Глубокий профессионализм и искренняя забота Ольгицы меняют самочувствие навсегда.',
      author: 'Анна Крстич',
      role: 'Программа «Путь Здоровья»',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
    },
    // Column 4 - Top
    {
      id: 'testimonial-5',
      quote:
        'Ольгица — надежная опора для всей семьи уже не один год. Грамотный подбор рациона и суплементов позволил навсегда забыть о проблемах ЖКТ.',
      author: 'Светлана Попович',
      role: 'Здоровье ЖКТ и метаболизм',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80',
    },
    // Column 4 - Bottom
    {
      id: 'testimonial-6',
      quote:
        'Целостный подход помог справиться с инсулинорезистентностью и постоянным упадком сил. Рекомендую каждому, кто ценит истинное здоровье!',
      author: 'Мария Йованович',
      role: 'Индивидуальный рацион',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80',
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
      className="relative w-full bg-[#ffffff] text-stone-900 py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 xl:px-16 overflow-hidden select-none"
    >
      <div className="max-w-[1440px] mx-auto relative">
        
        {/* Main Flex/Grid container */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 xl:gap-12 relative">
          
          {/* Left Column: Heading and Subtitle */}
          <div className="w-full lg:w-[260px] xl:w-[300px] flex-shrink-0 flex flex-col justify-between self-stretch">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-bold text-stone-900 tracking-tight leading-[1.15]">
                What People Say<br />
                <span className="text-stone-900 font-bold">About Us</span>
              </h2>

              <p className="mt-4 text-xs sm:text-sm text-stone-500 font-normal leading-relaxed max-w-[280px]">
                Истории участников, восстановивших здоровье, энергию и гармонию с телом благодаря авторским программам Ольгицы Божинович.
              </p>
            </div>

            {/* Bottom-left graphic accent: Teal quarter circle matching the mockup */}
            <div className="hidden lg:block mt-16 xl:mt-24">
              <div 
                className="w-14 h-14 xl:w-16 xl:h-16 bg-[#14b8a6] rounded-tr-[100%] select-none pointer-events-none"
                aria-hidden="true" 
              />
            </div>
          </div>

          {/* Right Section: Multi-column Staggered Grid matching the image */}
          <div className="flex-1 w-full relative">

            {/* Floating Graphic Accents matching the image */}
            {/* 1. Yellow dot near column 1/2 */}
            <div 
              className="hidden lg:block absolute -top-4 left-[23%] w-3.5 h-3.5 rounded-full bg-[#facc15] select-none pointer-events-none z-10" 
              aria-hidden="true"
            />

            {/* 2. Small indigo angular shape between column 2 & 3 */}
            <div 
              className="hidden lg:block absolute bottom-4 left-[46%] w-3.5 h-3.5 bg-[#3b82f6] rounded-br-md select-none pointer-events-none z-10" 
              aria-hidden="true"
            />

            {/* 3. Small hot pink accent above top of column 3/4 */}
            <div 
              className="hidden lg:block absolute -top-3 right-[28%] w-3.5 h-3.5 bg-[#f43f5e] rounded-tl-md select-none pointer-events-none z-10" 
              aria-hidden="true"
            />

            {/* 4. Far Right Lilac & Coral organic pill shapes */}
            <div 
              className="hidden 2xl:flex flex-col absolute -right-16 top-1/3 -translate-y-1/2 select-none pointer-events-none z-0" 
              aria-hidden="true"
            >
              {/* Lilac shape with rounded-tr and rounded-br */}
              <div className="w-12 h-14 bg-[#c084fc] rounded-r-[36px] rounded-tl-[36px]" />
              {/* Coral/peach shape */}
              <div className="w-12 h-14 bg-[#fca5a5] rounded-r-[36px] rounded-bl-[36px] -mt-1" />
            </div>

            {/* Desktop / Large Screen Layout: 4 Columns Staggered (Matches Screenshot) */}
            <div className="hidden lg:grid grid-cols-4 gap-4 xl:gap-5 items-start">
              
              {/* Column 1: Single card shifted down */}
              <div className="flex flex-col pt-24 xl:pt-32">
                {renderCard(testimonials[0], 'min-h-[220px]')}
              </div>

              {/* Column 2: Single card shifted medium */}
              <div className="flex flex-col pt-10 xl:pt-14">
                {renderCard(testimonials[1], 'min-h-[220px]')}
              </div>

              {/* Column 3: Two cards stacked vertically */}
              <div className="flex flex-col gap-4 xl:gap-5 pt-0">
                {renderCard(testimonials[2], 'min-h-[210px]')}
                {renderCard(testimonials[3], 'min-h-[210px]')}
              </div>

              {/* Column 4: Two cards stacked vertically with slight offset */}
              <div className="flex flex-col gap-4 xl:gap-5 pt-6 xl:pt-8">
                {renderCard(testimonials[4], 'min-h-[210px]')}
                {renderCard(testimonials[5], 'min-h-[210px]')}
              </div>

            </div>

            {/* Tablet & Mobile Layout: Responsive Clean Staggered Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4 sm:gap-5">
              {testimonials.map((card) => renderCard(card))}
            </div>

            {/* Mobile Teal Accent */}
            <div className="block lg:hidden mt-8">
              <div 
                className="w-10 h-10 bg-[#14b8a6] rounded-tr-[100%] select-none pointer-events-none"
                aria-hidden="true" 
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
