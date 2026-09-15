import React from 'react';
import { RevealText } from './RevealText';
import { Reveal } from './Reveal';
import { Sparkles, ArrowRight } from 'lucide-react';
import { OLGICA_DATA } from '../data/bozinovicData';

interface BlogCardItem {
  id: string;
  category: string;
  title: string;
  image: string;
}

interface BlogCardsSectionProps {
  onCardClick?: (blogId: string) => void;
  onExploreAllClick?: () => void;
}

export const BlogCardsSection: React.FC<BlogCardsSectionProps> = ({
  onCardClick,
  onExploreAllClick,
}) => {
  const featuredPost = {
    id: 'featured-detox-liver',
    category: 'Нутрициология и детокс',
    title: 'Как комплексное очищение печени возвращает энергию и гормональный баланс',
    excerpt:
      'Короткие практические протоколы, детоксикация и растительные нутрицевтики — это не просто диета, а ключ к перезапуску обмена веществ и избавлению от хронической усталости.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    author: 'Ольгица Божинович',
    authorAvatar: 'https://res.cloudinary.com/l4orv4yo/image/upload/v1789296600/4a71d565-05e6-469b-a690-0ba4ffed9f28_ioaikn.png',
    date: '15 сентября, 2026',
  };

  const blogCards: BlogCardItem[] = [
    {
      id: 'blog-microbiota',
      category: 'Протоколы',
      title: 'Почему растительные протоколы восстанавливают микробиоту быстрее',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'blog-adaptogens',
      category: 'Фитотерапия',
      title: 'Сила лекарственных трав и адаптогенов в борьбе с усталостью',
      image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'blog-sugar-metabolism',
      category: 'Метаболизм',
      title: 'Как преодолеть скрытую тягу к сахару без срывов и строгих диет',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section
      id="blog-section"
      /* 
        =============================================================================
        SECTION 4 OF 5: BLOG CARDS (MATCHING ATTACHED VISUAL DESIGN)
        - Full viewport presentation card matching 100vh design language.
        - Overflow-y-auto ensures comfortable scrolling on mobile/tablet.
        =============================================================================
      */
      className="relative w-full h-full min-h-screen max-h-screen bg-[#ffffff] text-stone-900 py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-12 xl:px-16 flex items-center justify-center overflow-y-auto"
    >
      <div className="w-full max-w-[1240px] mx-auto relative my-auto">
        
        {/* Header Title: matching "Visual insights to sell homes faster" with italic accent */}
        <div className="mb-5 sm:mb-7">
          <Reveal delay={60} y={15}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-stone-900 tracking-tight leading-[1.12]">
              Полезные статьи и знания<br />
              <span className="font-normal font-serif-title italic text-stone-800">
                для вашего здоровья
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Featured Main Card (Horizontal Split Layout as in reference image) */}
        <Reveal delay={120} y={20}>
          <div
            id="featured-blog-card"
            onClick={() => onCardClick && onCardClick(featuredPost.id)}
            className="group relative bg-white rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-3.5 sm:p-5 lg:p-6 border border-stone-200/90 shadow-lg shadow-stone-900/5 hover:border-stone-300 transition-all duration-300 cursor-pointer mb-4 sm:mb-5"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">
              
              {/* Featured Card Image (Left Column) */}
              <div className="lg:col-span-6 overflow-hidden rounded-[18px] sm:rounded-[22px] aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] bg-stone-100 shadow-md shadow-stone-900/10">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Featured Card Content (Right Column) */}
              <div className="lg:col-span-6 flex flex-col justify-between self-stretch py-1 sm:py-2">
                <div>
                  {/* Category Pill Tag */}
                  <span className="inline-block text-[10.5px] sm:text-[11.5px] font-medium px-3 py-1 rounded-full bg-stone-100 text-stone-600 border border-stone-200/60 mb-2.5 sm:mb-3.5">
                    {featuredPost.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl lg:text-[23px] font-bold text-stone-900 leading-snug tracking-tight group-hover:text-[#2C6E67] transition-colors duration-200 mb-2 sm:mb-3">
                    {featuredPost.title}
                  </h3>

                  {/* Description Excerpt */}
                  <p className="text-xs sm:text-[13px] lg:text-[13.5px] text-stone-500 font-normal leading-relaxed mb-4 lg:mb-6">
                    {featuredPost.excerpt}
                  </p>
                </div>

                {/* Footer: Author & Date */}
                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-stone-100 mt-auto">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={featuredPost.authorAvatar}
                      alt={featuredPost.author}
                      className="w-7 h-7 rounded-full object-cover object-[center_top] ring-1 ring-stone-200 bg-[#2C6E67]"
                    />
                    <span className="text-[12px] sm:text-[12.5px] font-semibold text-stone-800">
                      {featuredPost.author}
                    </span>
                  </div>

                  <span className="text-[11px] sm:text-xs text-stone-400 font-normal">
                    {featuredPost.date}
                  </span>
                </div>

              </div>

            </div>
          </div>
        </Reveal>

        {/* Bottom Row of 3 Cards (Matching reference grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5 mb-5 sm:mb-6">
          {blogCards.map((card, idx) => (
            <Reveal key={card.id} delay={180 + idx * 70} y={20}>
              <div
                id={`blog-card-${idx + 1}`}
                onClick={() => onCardClick && onCardClick(card.id)}
                className="group relative bg-white rounded-[20px] sm:rounded-[24px] p-3 sm:p-3.5 lg:p-4 border border-stone-200/90 shadow-md shadow-stone-900/5 hover:border-stone-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full"
              >
                <div>
                  {/* Top Image */}
                  <div className="w-full aspect-[16/10] overflow-hidden rounded-[14px] sm:rounded-[16px] bg-stone-100 shadow-sm mb-3">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Category Tag */}
                  <span className="inline-block text-[10px] sm:text-[10.5px] font-medium px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200/50 mb-2">
                    {card.category}
                  </span>

                  {/* Title */}
                  <h4 className="text-[13px] sm:text-sm lg:text-[15px] font-bold text-stone-900 leading-snug tracking-tight group-hover:text-[#2C6E67] transition-colors duration-200">
                    {card.title}
                  </h4>
                </div>

                <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400 group-hover:text-[#2C6E67] transition-colors">
                  <span>Читать статью</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Centered Pill Button: Matching "Load More" */}
        <Reveal delay={380} y={15} className="flex justify-center">
          <button
            id="load-more-articles-btn"
            type="button"
            onClick={() => onExploreAllClick && onExploreAllClick()}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-stone-900 hover:bg-[#2C6E67] text-white text-xs sm:text-[13px] font-medium shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95"
          >
            <span>Все публикации</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          </button>
        </Reveal>

      </div>

      {/* Bottom Footer */}
      <div className="w-full max-w-[1360px] mx-auto pt-3 pb-2 flex flex-col sm:flex-row items-center justify-between text-stone-500 text-[11px] sm:text-xs gap-2 border-t border-stone-200/80 mt-4">
        <p>© {new Date().getFullYear()} {OLGICA_DATA.name}. Все права защищены.</p>
        <p className="text-stone-500 font-light">{OLGICA_DATA.tagline}</p>
      </div>
    </section>
  );
};
