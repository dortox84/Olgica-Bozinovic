import React from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { OLGICA_DATA } from '../data/bozinovicData';
import { RevealText } from './RevealText';
import { Reveal } from './Reveal';

interface CtaBannerSectionProps {
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  onSelectPlan?: (planId: string) => void;
}

export const CtaBannerSection: React.FC<CtaBannerSectionProps> = ({
  onPrimaryClick,
  onSecondaryClick,
  onSelectPlan,
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

  /* 
    =============================================================================
    3 PRICING / PACKAGE CARDS MATCHING USER DESIGN (Starter, Growth, Business)
    =============================================================================
  */
  const pricingPlans = [
    {
      id: 'starter',
      tag: 'Starter',
      title: 'Старт: Детокс',
      description: 'Пошаговый целевой протокол очищения печени и быстрого возвращения энергии.',
      price: '10 500 ₽',
      period: '/протокол',
      buttonText: 'Выбрать тариф',
      subtext: 'Быстрый старт',
      highlighted: false,
      included: [
        'Пошаговый распорядок питания по дням',
        'Полный список продуктов и суперфудов',
        'Руководство по целебным травам для печени',
        'Рекомендации по безопасной эко-посуде',
        'Базовые рекомендации по гидратации',
      ],
    },
    {
      id: 'growth',
      tag: 'Growth',
      title: 'Путь Здоровья',
      description: 'Персональное ведение при хронических состояниях, анализы и поддержка 24/7.',
      price: '159 000 ₽',
      period: '/программа',
      buttonText: 'Начать программу',
      subtext: 'Флагманский курс',
      highlighted: true,
      included: [
        'Детальный анализ лабораторных показателей',
        'Индивидуальный протокол питания и добавок',
        'Непрерывное ведение и коучинг 24/7',
        'Оперативная корректировка по динамике',
        'Глубокая ревитализация микробиоты и печени',
        'Личная связь с Ольгицей Божинович',
      ],
    },
    {
      id: 'business',
      tag: 'Business',
      title: 'Семейное меню',
      description: 'Сбалансированный рацион для всей семьи, крепкий детский иммунитет и гармония.',
      price: '24 500 ₽',
      period: '/месяц',
      buttonText: 'Записаться',
      subtext: 'Для всей семьи',
      highlighted: false,
      included: [
        'Сбалансированное меню для родителей и детей',
        'Естественное укрепление детского иммунитета',
        'Вкусные и быстрые полезные рецепты',
        'Обучение выбору чистых эко-продуктов',
        'Советы по суплементации без химии',
        'Ответы на вопросы родителей и поддержка',
      ],
    },
  ];

  return (
    <section 
      id="elevate-health-cta" 
      /* 
        =============================================================================
        SECTION POSITIONING & 100VH PRESENTATION CARD (SECTION 4):
        - `h-full min-h-screen max-h-screen` occupies full 100vh viewport as final slide.
        - `overflow-y-auto` allows comfortable vertical scrolling on small laptop heights.
        =============================================================================
      */
      className="relative w-full h-full min-h-screen max-h-screen bg-[#f8faf9] py-5 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-10 xl:px-14 flex flex-col justify-between overflow-y-auto"
    >
      <div className="w-full max-w-[1440px] mx-auto my-auto">
        
        {/* Main Banner Card: "Готовы восстановить здоровье и вернуть энергию?" */}
        <Reveal delay={100} y={25}>
          <div 
            id="cta-main-banner-card"
            className="relative overflow-hidden rounded-[26px] sm:rounded-[34px] lg:rounded-[38px] bg-gradient-to-br from-[#1F544E] via-[#2C6E67] to-[#1B4B45] text-white p-5 sm:p-7 lg:p-9 xl:p-10 shadow-[0_20px_50px_rgba(44,110,103,0.22)] border border-white/15"
          >
            
            {/* Subtle Texture Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-10 mix-blend-overlay bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" 
              aria-hidden="true" 
            />

            {/* Decorative Ambient Shapes */}
            <div 
              className="absolute -top-16 -left-16 w-52 h-52 sm:w-72 sm:h-72 rounded-full bg-white/10 blur-xl pointer-events-none" 
              aria-hidden="true" 
            />
            <div 
              className="absolute -bottom-20 -right-16 w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-white/10 blur-xl pointer-events-none" 
              aria-hidden="true" 
            />

            {/* Banner Header (Title & Subtitle) */}
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 pb-5 sm:pb-6 border-b border-white/15">
              <div className="max-w-3xl">
                {/* Badge */}
                <div 
                  id="cta-badge-new-collection"
                  className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md rounded-full py-1 px-3 border border-white/30 mb-2.5"
                >
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span className="text-[11px] sm:text-xs font-medium text-white tracking-wide">
                    Индивидуальные программы оздоровления
                  </span>
                </div>

                {/* Main Card Title */}
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-bold text-white tracking-tight leading-[1.15]">
                  Готовы восстановить здоровье и вернуть энергию?
                </h2>

                {/* Subtitle */}
                <p className="mt-2 text-xs sm:text-sm text-emerald-100/90 font-light leading-relaxed max-w-2xl">
                  Выберите подходящий формат заботы о себе: пошаговый детокс, комплексное персональное сопровождение или здоровый рацион для всей семьи.
                </p>
              </div>

              {/* Customer Rating & Social Proof */}
              <div className="flex items-center gap-3 self-start lg:self-end flex-shrink-0 bg-black/20 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/15">
                <div className="flex items-center -space-x-1.5">
                  {customerAvatars.slice(0, 4).map((item, idx) => (
                    <img
                      key={idx}
                      src={item.img}
                      alt={item.name}
                      className="w-6 h-6 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-[11px] sm:text-xs font-semibold text-white">5/5 рейтинг</div>
                  <div className="text-[10px] text-emerald-200">1 200+ подопечных</div>
                </div>
              </div>
            </div>

            {/* 
              =============================================================================
              3 PRICING CARDS IN THE SAME CONTAINER (STARTER / GROWTH / BUSINESS)
              =============================================================================
            */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 xl:gap-6 mt-6">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  id={`pricing-card-${plan.id}`}
                  className={`relative rounded-[22px] sm:rounded-[24px] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-white text-stone-900 shadow-xl shadow-black/20 ring-2 ring-emerald-400'
                      : 'bg-white/95 hover:bg-white text-stone-900 shadow-md shadow-black/10'
                  }`}
                >
                  {/* Highlight pill if featured */}
                  {plan.highlighted && (
                    <div className="absolute -top-3 right-5 bg-emerald-700 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm">
                      Популярный
                    </div>
                  )}

                  {/* Top Part: Title, Subtitle, Price, Button */}
                  <div>
                    {/* Tag / Category */}
                    <div className="flex items-center justify-between">
                      <span className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight">
                        {plan.tag}
                      </span>
                      <span className="text-[11px] font-medium text-stone-500">
                        {plan.title.split(':')[1] || plan.title}
                      </span>
                    </div>

                    {/* Subtitle Description */}
                    <p className="mt-1.5 text-xs sm:text-[12.5px] text-stone-500 font-normal leading-relaxed min-h-[36px]">
                      {plan.description}
                    </p>

                    {/* Price display */}
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-2xl sm:text-[26px] font-bold text-stone-900 tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs text-stone-500 font-normal">
                        {plan.period}
                      </span>
                    </div>

                    {/* Button & Subtext Row */}
                    <div className="mt-4 flex items-center gap-2.5">
                      <button
                        onClick={() => {
                          if (plan.id === 'business') {
                            if (onSelectPlan) {
                              onSelectPlan('business');
                            } else if (onSecondaryClick) {
                              onSecondaryClick();
                            }
                          } else if (onSelectPlan) {
                            onSelectPlan(plan.id);
                          } else if (onPrimaryClick) {
                            onPrimaryClick();
                          }
                        }}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer shadow-sm active:scale-95 flex items-center justify-center gap-1.5 ${
                          plan.highlighted
                            ? 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-emerald-900/20'
                            : 'bg-stone-900 hover:bg-stone-800 text-white'
                        }`}
                      >
                        <span>{plan.buttonText}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          if (plan.id === 'business') {
                            if (onSelectPlan) {
                              onSelectPlan('business');
                            } else if (onSecondaryClick) {
                              onSecondaryClick();
                            }
                          } else if (onSelectPlan) {
                            onSelectPlan(plan.id);
                          }
                        }}
                        className="text-[11px] text-stone-500 hover:text-stone-900 font-medium underline underline-offset-2 transition-colors cursor-pointer"
                      >
                        Подробнее
                      </button>
                    </div>
                  </div>

                  {/* Divider & What's Included */}
                  <div className="mt-5 pt-4 border-t border-stone-100">
                    <p className="text-[11px] sm:text-xs font-semibold text-stone-900 tracking-tight mb-2.5">
                      Что входит:
                    </p>

                    <ul className="space-y-1.5 text-[11.5px] sm:text-xs text-stone-600">
                      {plan.included.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <span className="text-stone-800 font-bold mt-0.5 text-xs leading-none">
                            ✓
                          </span>
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </Reveal>

      </div>

      {/* Bottom Guarantee / Trust Note */}
      <div className="w-full max-w-[1440px] mx-auto pt-3 pb-1 flex flex-col sm:flex-row items-center justify-between text-stone-500 text-[11px] sm:text-xs gap-2 border-t border-stone-200/80 mt-4">
        <p className="text-stone-600 font-medium">Безопасные протоколы на основе натуропатии и доказательной нутрициологии</p>
        <p className="text-stone-500 font-light">Поддержка и ведение на каждом этапе оздоровления</p>
      </div>
    </section>
  );
};
