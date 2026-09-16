import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Reveal } from './Reveal';
import { Sparkles, ArrowRight, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { OLGICA_DATA } from '../data/bozinovicData';
import type { Article } from '../types/blog';
import { getAllArticles } from '../data/blogArticlesData';
import { fetchPublishedArticles } from '../lib/articles';

interface BlogCardsSectionProps {
  onCardClick?: (slug: string) => void;
  onExploreAllClick?: () => void;
  onConsultationClick?: () => void;
  basePath?: string;
}

export const BlogCardsSection: React.FC<BlogCardsSectionProps> = ({
  onCardClick,
  onExploreAllClick,
  onConsultationClick,
  basePath = '/',
}) => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<Article[]>(() => getAllArticles());
  const [showAllArticles, setShowAllArticles] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');

  useEffect(() => {
    let isMounted = true;
    fetchPublishedArticles()
      .then((liveArticles) => {
        if (isMounted && liveArticles && liveArticles.length > 0) {
          const liveSlugs = new Set(liveArticles.map((a: any) => a.slug));
          const fallbacks = getAllArticles().filter((a: any) => !liveSlugs.has(a.slug));
          setArticles([...(liveArticles as unknown as Article[]), ...fallbacks]);
        }
      })
      .catch((err) => {
        console.warn('Could not fetch published articles:', err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const featuredPost = articles[0];
  const allOtherPosts = articles.slice(1);

  const categories = ['Все', 'Нутрициология и детокс', 'Протоколы', 'Фитотерапия', 'Метаболизм', 'Лимфодренаж', 'Эндокринология'];

  const filteredPosts = allOtherPosts.filter((post) => {
    if (selectedCategory === 'Все') return true;
    return post.category === selectedCategory;
  });

  // Display either first 3 cards or all cards based on toggle
  const visibleCards = showAllArticles ? filteredPosts : filteredPosts.slice(0, 3);

  const handleOpenArticle = (article: Article) => {
    if (onCardClick) {
      onCardClick(article.slug);
    } else {
      navigate(`/blog/${article.slug}`);
    }
  };

  const handleToggleShowAll = () => {
    setShowAllArticles((prev) => !prev);
    if (onExploreAllClick) onExploreAllClick();
  };

  return (
    <section
      id="blog-section"
      /*
        =============================================================================
        SECTION: ПОЛЕЗНЫЕ СТАТЬИ И БЛОГ (VISUAL INSIGHTS TO RESTORE HEALTH)
        - flex-col ensures header, articles grid, and footer stack cleanly!
        - overflow-y-auto ensures effortless scrolling across mobile & desktop.
        =============================================================================
      */
      className="relative w-full h-full min-h-screen max-h-screen bg-white text-stone-900 py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-12 xl:px-16 flex flex-col justify-between overflow-y-auto"
    >
      <div className="w-full max-w-[1240px] mx-auto my-auto flex-1 flex flex-col justify-center py-2 sm:py-4">

        {/* Header Title: matching "Visual insights to sell homes faster" with italic accent */}
        <div className="mb-4 sm:mb-6 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <Reveal delay={60} y={15}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-stone-900 tracking-tight leading-[1.14]">
              Полезные статьи и знания<br />
              <span className="font-normal font-serif italic text-stone-800">
                для вашего здоровья
              </span>
            </h2>
          </Reveal>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.slice(0, 4).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {articles.length === 0 && (
          <p className="text-sm text-stone-600 py-8 text-center">Скоро здесь появятся новые статьи.</p>
        )}

        {/* Featured Main Card (Horizontal Split Layout as in reference image) */}
        {featuredPost && (selectedCategory === 'Все' || featuredPost.category === selectedCategory) && (
          <Reveal delay={120} y={20}>
            <div
              id="featured-blog-card"
              onClick={() => handleOpenArticle(featuredPost)}
              className="group relative bg-white rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-3.5 sm:p-5 lg:p-6 border border-stone-200/90 shadow-lg shadow-stone-900/5 hover:border-stone-300 hover:shadow-xl transition-all duration-300 cursor-pointer mb-4 sm:mb-5"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">

                {/* Featured Card Image (Left Column) */}
                <div className="lg:col-span-6 overflow-hidden rounded-[18px] sm:rounded-[22px] aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] bg-stone-100 shadow-md shadow-stone-900/10">
                  <img
                    src={featuredPost.cover_image}
                    alt={featuredPost.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Featured Card Content (Right Column) */}
                <div className="lg:col-span-6 flex flex-col justify-between self-stretch py-1 sm:py-2">
                  <div>
                    {/* Category Pill Tag & Read Time */}
                    <div className="flex items-center gap-2 mb-2.5 sm:mb-3.5">
                      <span className="inline-block text-[10.5px] sm:text-[11.5px] font-medium px-3 py-1 rounded-full bg-emerald-50 text-[#2C6E67] border border-emerald-200/60">
                        {featuredPost.category}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-stone-600 font-medium">
                        <Clock className="w-3 h-3" />
                        {featuredPost.reading_time}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl lg:text-[23px] font-bold text-stone-900 leading-snug tracking-tight group-hover:text-[#2C6E67] transition-colors duration-200 mb-2 sm:mb-3">
                      {featuredPost.title}
                    </h3>

                    {/* Description Excerpt */}
                    <p className="text-xs sm:text-[13px] lg:text-[13.5px] text-stone-600 font-normal leading-relaxed mb-4 lg:mb-6">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  {/* Footer: Author & Date & Read Button */}
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-stone-100 mt-auto">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        referrerPolicy="no-referrer"
                        className="w-7 h-7 rounded-full object-cover object-[center_top] ring-1 ring-stone-200 bg-[#2C6E67]"
                      />
                      <span className="text-[12px] sm:text-[12.5px] font-semibold text-stone-800">
                        {featuredPost.author.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[11px] sm:text-xs text-stone-600 font-medium hidden sm:inline">
                        {featuredPost.published_at}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#2C6E67] group-hover:underline">
                        <span>Читать статью</span>
                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </Reveal>
        )}

        {/* Bottom Row of Cards (Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5 mb-4 sm:mb-6">
          {visibleCards.map((card, idx) => (
            <Reveal key={card.id} delay={180 + idx * 60} y={20}>
              <div
                id={`blog-card-${idx + 1}`}
                onClick={() => handleOpenArticle(card)}
                className="group relative bg-white rounded-[20px] sm:rounded-[24px] p-3 sm:p-3.5 lg:p-4 border border-stone-200/90 shadow-md shadow-stone-900/5 hover:border-stone-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full"
              >
                <div>
                  {/* Top Image */}
                  <div className="w-full aspect-[16/10] overflow-hidden rounded-[14px] sm:rounded-[16px] bg-stone-100 shadow-sm mb-3">
                    <img
                      src={card.cover_image}
                      alt={card.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Category Tag & Read Time */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block text-[10px] sm:text-[10.5px] font-medium px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200/50">
                      {card.category}
                    </span>
                    <span className="text-[10.5px] text-stone-600 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {card.reading_time}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-[13px] sm:text-sm lg:text-[15px] font-bold text-stone-900 leading-snug tracking-tight group-hover:text-[#2C6E67] transition-colors duration-200 line-clamp-2">
                    {card.title}
                  </h4>

                  {/* Excerpt */}
                  <p className="text-[11.5px] sm:text-xs text-stone-600 line-clamp-2 mt-1.5 leading-relaxed font-normal">
                    {card.excerpt}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px] sm:text-xs text-stone-600 group-hover:text-[#2C6E67] transition-colors font-medium">
                  <span>Читать статью</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Centered Pill Button: Matching "Load More" from reference */}
        {filteredPosts.length > 3 && (
          <Reveal delay={360} y={15} className="flex justify-center mb-2">
            <button
              id="load-more-articles-btn"
              type="button"
              onClick={handleToggleShowAll}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-stone-900 hover:bg-[#2C6E67] text-white text-xs sm:text-[13px] font-medium shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95 cursor-pointer"
            >
              <span>{showAllArticles ? 'Свернуть публикации' : 'Все публикации'}</span>
              {showAllArticles ? (
                <ChevronUp className="w-3.5 h-3.5 text-amber-300" />
              ) : (
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              )}
            </button>
          </Reveal>
        )}

      </div>

      {/* Bottom Footer (Cleanly placed at the bottom without horizontal skew) */}
      <div className="w-full max-w-[1240px] mx-auto pt-4 pb-2 flex flex-col sm:flex-row items-center justify-between text-stone-600 text-[11px] sm:text-xs gap-2 border-t border-stone-200/80 mt-6 shrink-0">
        <p>© {new Date().getFullYear()} {OLGICA_DATA.name}. Все права защищены.</p>
        <p className="text-stone-600 font-light">{OLGICA_DATA.tagline}</p>
      </div>
    </section>
  );
};
