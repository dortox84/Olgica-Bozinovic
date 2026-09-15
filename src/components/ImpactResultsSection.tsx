import React from 'react';
import { RevealText } from './RevealText';
import { Reveal } from './Reveal';

interface TestimonialCardData {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  tag?: string;
  highlight?: boolean;
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
      tag: 'Энергия 10/10',
    },
    // Card 2
    {
      id: 'testimonial-2',
      quote:
        'Ольгица полностью изменила мое отношение к пище и телу. Больше никаких жестких диет — гормоны и анализы пришли в идеальный баланс.',
      author: 'Милица Стоянович',
      role: 'Очищение печени BO',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80',
      tag: 'Без диет',
      highlight: true,
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
      tag: '−9 кг',
    },
    // Card 5
    {
      id: 'testimonial-5',
      quote:
        'Ольгица — надежная опора для всей семьи уже не один год. Грамотный подбор рациона и суплементов позволил навсегда забыть о проблемах ЖКТ.',
      author: 'Светлана Попович',
      role: 'Здоровье ЖКТ и метаболизм',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80',
      tag: 'Вся семья',
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
        'Благодаря очищению печени и правильному режиму ушли постоянные мигрени, очистилась кожа и нормализовался сон. Огромная благодарность!',
      author: 'Теодора Николич',
      role: 'Очищение печени',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&h=120&q=80',
      tag: 'Чистая кожа',
    },
    // Card 8
    {
      id: 'testimonial-8',
      quote:
        'Профессионализм высшего класса. Без навязывания лишнего — только точечные рекомендации, изменившие качество жизни меня и моих близких.',
      author: 'Александар Лазич',
      role: 'Семейное здоровье',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    },
    // Card 9 (New)
    {
      id: 'testimonial-9',
      quote:
        'Прошли постоянная сонливость после еды и вздутия. Сбалансированный рацион подарил невероятную легкость и ясность ума на весь день.',
      author: 'Екатерина Васильева',
      role: 'Баланс микробиоты',
      avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=120&h=120&q=80',
      tag: 'Легкость',
    },
    // Card 10 (New)
    {
      id: 'testimonial-10',
      quote:
        'За 2 месяца показатели печени и липидный профиль пришли в норму без статинов. Врач был приятно удивлен результатами анализов!',
      author: 'Никола Томич',
      role: 'Метаболическое здоровье',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80',
      tag: 'Анализы в норме',
      highlight: true,
    },
    // Card 11 (New)
    {
      id: 'testimonial-11',
      quote:
        'Ушла нездоровая тяга к сладкому, восстановился крепкий сон. Ольгица научила слышать тело и выбирать чистые питательные продукты.',
      author: 'Ольга Смирнова',
      role: 'Гормональный баланс',
      avatar: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=120&h=120&q=80',
    },
    // Card 12 (New)
    {
      id: 'testimonial-12',
      quote:
        'Впервые за долгие годы сезон прошел без простуд и упадка сил. Иммунитет окреп, а энергии теперь хватает и на спорт, и на семью!',
      author: 'Кристина Неделькович',
      role: 'Иммунитет и бодрость',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&h=120&q=80',
      tag: 'Иммунитет 100%',
    },
  ];

  const renderCard = (card: TestimonialCardData, extraClasses: string = '') => (
    <div
      onClick={() => onStoryClick && onStoryClick(card.id)}
      className={`group relative rounded-[18px] sm:rounded-[20px] p-3 sm:p-3.5 xl:p-4 transition-all duration-300 cursor-pointer flex flex-col justify-between border hover:-translate-y-1 ${
        card.highlight
          ? 'border-emerald-300/80 bg-emerald-50/60 hover:bg-white hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-950/10'
          : 'border-stone-200/90 bg-stone-50/80 hover:bg-white hover:border-stone-300 hover:shadow-xl hover:shadow-stone-900/10'
      } ${extraClasses}`}
    >
      <div>
        {/* Top badge or rating row */}
        <div className="flex items-center justify-between gap-1 mb-2">
          <div className="flex text-amber-400 text-[10px] tracking-tight">
            {'★'.repeat(5)}
          </div>
          {card.tag && (
            <span className="text-[9.5px] font-medium px-2 py-0.5 rounded-full bg-emerald-100/90 text-emerald-800 border border-emerald-200/60">
              {card.tag}
            </span>
          )}
        </div>

        <p className="text-[11px] xl:text-[11.5px] text-stone-700 leading-[1.48] font-light">
          «{card.quote}»
        </p>
      </div>

      <div className="flex items-center gap-2.5 mt-2.5 pt-2 border-t border-stone-200/60">
        <img
          src={card.avatar}
          alt={card.author}
          className="w-7 h-7 rounded-full object-cover ring-1 ring-stone-300 shrink-0"
        />
        <div className="min-w-0 flex-1">
          <h4 className="text-[11.5px] font-semibold text-stone-900 truncate">
            {card.author}
          </h4>
          <span className="text-[9.5px] text-stone-500 font-normal truncate block">
            {card.role}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="testimonials-section"
      /* 
        =============================================================================
        SECTION POSITIONING & 100VH PRESENTATION CARD (SECTION 3):
        - `h-full min-h-screen max-h-screen` maintains 100vh presentation slide.
        - `overflow-y-auto` ensures smooth scrolling on small laptops or tablets.
        =============================================================================
      */
      className="relative w-full h-full min-h-screen max-h-screen bg-[#ffffff] text-stone-900 py-5 sm:py-7 lg:py-8 px-4 sm:px-6 lg:px-10 xl:px-14 flex items-center justify-center overflow-y-auto"
    >
      <div className="w-full max-w-[1500px] mx-auto relative my-auto">
        
        {/* Main Flex/Grid container */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8 xl:gap-10 relative">
          
          {/* Left Column: Heading, Subtitle and Trust Metrics */}
          <div className="w-full lg:w-[250px] xl:w-[280px] flex-shrink-0 flex flex-col justify-between self-stretch">
            <div>
              <RevealText
                lines={['Что говорят', 'о нас']}
                className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-bold text-stone-900 tracking-tight leading-[1.12]"
              />

              <Reveal delay={120} y={16}>
                <p className="mt-3 text-xs sm:text-[12.5px] text-stone-500 font-normal leading-relaxed">
                  Истории участников, восстановивших здоровье, энергию и гармонию с телом благодаря авторским программам Ольгицы Божинович.
                </p>
              </Reveal>

              {/* Trust & Rating Badges */}
              <Reveal delay={200} y={20}>
                <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-stone-100 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-400 text-xs sm:text-sm">
                      {'★'.repeat(5)}
                    </div>
                    <span className="text-xs font-bold text-stone-800">4.9 / 5.0</span>
                    <span className="text-[10.5px] text-stone-400 font-normal">(1 200+ отзывов)</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-[11px] sm:text-[11.5px] text-stone-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2C6E67]" />
                      <span>98% участников отмечают прилив сил</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] sm:text-[11.5px] text-stone-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2C6E67]" />
                      <span>Более 10 лет доказательной практики</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] sm:text-[11.5px] text-stone-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2C6E67]" />
                      <span>100% персонализированный подход</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Section: Staggered Multi-column Floating Grid (Neka gore, neka dole) */}
          <div className="flex-1 w-full relative">

            {/* 
              Desktop: 4 Columns with organic vertical offsets ("neka gore, neka dole"):
              - Column 1: Shifted up (lg:-translate-y-3)
              - Column 2: Shifted down (lg:translate-y-7)
              - Column 3: Shifted slightly up (lg:-translate-y-1)
              - Column 4: Shifted down (lg:translate-y-9)
              Fills all empty top and bottom areas dynamically!
            */}
            <div className="hidden lg:grid grid-cols-4 gap-3 xl:gap-3.5 items-start">
              
              {/* Column 1: Starts higher up */}
              <Reveal delay={100} y={20} className="flex flex-col gap-3 lg:-translate-y-3">
                {renderCard(testimonials[0])}
                {renderCard(testimonials[4])}
                {renderCard(testimonials[8])}
              </Reveal>

              {/* Column 2: Shifted down */}
              <Reveal delay={180} y={20} className="flex flex-col gap-3 lg:translate-y-7">
                {renderCard(testimonials[1])}
                {renderCard(testimonials[5])}
                {renderCard(testimonials[9])}
              </Reveal>

              {/* Column 3: Starts slightly up */}
              <Reveal delay={260} y={20} className="flex flex-col gap-3 lg:-translate-y-1">
                {renderCard(testimonials[2])}
                {renderCard(testimonials[6])}
                {renderCard(testimonials[10])}
              </Reveal>

              {/* Column 4: Shifted down to create undulating wave */}
              <Reveal delay={340} y={20} className="flex flex-col gap-3 lg:translate-y-9">
                {renderCard(testimonials[3])}
                {renderCard(testimonials[7])}
                {renderCard(testimonials[11])}
              </Reveal>

            </div>

            {/* Tablet & Mobile Layout: Clean Responsive Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-3 sm:gap-4">
              {testimonials.map((card, idx) => (
                <Reveal key={card.id} delay={idx * 40} y={15}>
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
