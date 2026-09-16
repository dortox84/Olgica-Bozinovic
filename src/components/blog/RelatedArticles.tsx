import React from 'react';
import { Article } from '../../types/blog';
import { ArrowRight, Clock } from 'lucide-react';

interface RelatedArticlesProps {
  articles: Article[];
  onSelectArticle: (slug: string) => void;
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  articles,
  onSelectArticle,
}) => {
  if (!articles || articles.length === 0) return null;

  return (
    <section id="related-articles-section" className="mt-16 pt-12 border-t border-stone-200">
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="text-xs uppercase tracking-wider text-[#2C6E67] font-semibold">
            Материалы по теме
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight mt-1">
            Вам также может быть полезно
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((item) => (
          <article
            key={item.id}
            onClick={() => onSelectArticle(item.slug)}
            className="group bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:border-stone-300 hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
              <img
                src={item.cover_image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-medium text-stone-800 shadow-2xs">
                {item.category}
              </span>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-stone-400 text-xs mb-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{item.reading_time}</span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-stone-900 leading-snug group-hover:text-[#2C6E67] transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs text-stone-600 line-clamp-2 leading-relaxed font-light">
                  {item.excerpt}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#2C6E67]">
                <span>Читать далее</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
