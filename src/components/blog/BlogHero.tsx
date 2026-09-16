import React from 'react';
import { Sparkles, Calendar, Clock, User } from 'lucide-react';
import { Article } from '../../types/blog';

interface BlogHeroProps {
  article: Article;
}

export const BlogHero: React.FC<BlogHeroProps> = ({ article }) => {
  return (
    <header
      id="article-hero-banner"
      className="w-full bg-[#f0f7f5] border border-[#2C6E67]/15 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 text-center shadow-xs relative overflow-hidden"
    >
      {/* Subtle Ambient Decorative Glows */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-300/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-amber-300/10 rounded-full blur-3xl pointer-events-none" />

      {/* Category Tag Pill */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#2C6E67]/20 text-[#2C6E67] text-xs font-semibold tracking-wide uppercase mb-3 sm:mb-4 shadow-xs">
        <Sparkles className="w-3.5 h-3.5 text-[#2C6E67]" />
        <span>{article.category}</span>
      </div>

      {/* Primary Semantic H1 Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-stone-900 tracking-tight leading-[1.18] max-w-4xl mx-auto">
        {article.title}
      </h1>

      {/* Subtitle / Excerpt */}
      <p className="text-xs sm:text-sm md:text-base text-stone-600 max-w-2xl mx-auto mt-3 sm:mt-4 font-normal leading-relaxed">
        {article.excerpt}
      </p>

      {/* Metadata Row: Date, Reading Time, Author */}
      <div className="mt-5 pt-4 border-t border-[#2C6E67]/10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-stone-500 font-medium">
        <div className="flex items-center gap-1.5">
          <User className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-stone-700">{article.author.name}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-stone-400" />
          <span>{article.published_at}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-stone-400" />
          <span>{article.reading_time}</span>
        </div>
      </div>
    </header>
  );
};
