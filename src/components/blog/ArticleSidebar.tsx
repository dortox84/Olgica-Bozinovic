import React from 'react';
import { Article } from '../../types/blog';
import { Layers, Clock, Calendar, Check, ArrowRight, Bookmark, Sparkles } from 'lucide-react';
import { TelegramIcon, InstagramIcon, TikTokIcon, VKIcon } from '../SocialIcons';

interface ArticleSidebarProps {
  article: Article;
  onConsultationClick?: () => void;
  onProgramsClick?: () => void;
}

export const ArticleSidebar: React.FC<ArticleSidebarProps> = ({
  article,
  onConsultationClick,
  onProgramsClick,
}) => {
  return (
    <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
      
      {/* 
        CARD 1: "В статье раскрыто :" Card (Matching "Course Includes :" card in screenshot)
      */}
      <div 
        id="article-highlights-card"
        className="bg-white border border-stone-200/90 rounded-2xl sm:rounded-3xl p-6 shadow-sm"
      >
        <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight mb-4 flex items-center justify-between">
          <span>Ключевые тезисы :</span>
          <span className="p-1 rounded-lg bg-emerald-50 text-[#2C6E67]">
            <Sparkles className="w-3.5 h-3.5" />
          </span>
        </h3>

        {/* Key Takeaways list */}
        <div className="space-y-3 pt-1">
          {(article.key_takeaways || []).map((takeaway, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-stone-700 leading-relaxed">
              <span className="w-4 h-4 rounded-full bg-emerald-100 text-[#2C6E67] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">
                ✓
              </span>
              <span className="font-normal">{takeaway}</span>
            </div>
          ))}
        </div>

        {/* Metadata summary list */}
        <div className="mt-5 pt-4 border-t border-stone-100 space-y-2.5 text-xs text-stone-600">
          <div className="flex items-center justify-between py-0.5">
            <span className="flex items-center gap-2 text-stone-400 font-normal">
              <Clock className="w-3.5 h-3.5" />
              Чтение
            </span>
            <span className="font-semibold text-stone-900">{article.reading_time}</span>
          </div>

          <div className="flex items-center justify-between py-0.5">
            <span className="flex items-center gap-2 text-stone-400 font-normal">
              <Layers className="w-3.5 h-3.5" />
              Категория
            </span>
            <span className="font-semibold text-stone-900">{article.category}</span>
          </div>

          <div className="flex items-center justify-between py-0.5">
            <span className="flex items-center gap-2 text-stone-400 font-normal">
              <Calendar className="w-3.5 h-3.5" />
              Опубликовано
            </span>
            <span className="font-semibold text-stone-900">{article.published_at}</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 pt-4 border-t border-stone-100">
          {onConsultationClick && (
            <button
              onClick={onConsultationClick}
              id="article-sidebar-cta-btn"
              className="w-full py-3 sm:py-3.5 rounded-full bg-stone-900 hover:bg-[#2C6E67] text-white font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg active:scale-98 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Записаться на разбор</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {onProgramsClick && (
            <button
              onClick={onProgramsClick}
              className="w-full mt-2.5 py-2.5 text-center text-xs text-stone-500 hover:text-stone-900 font-medium underline underline-offset-4 transition-colors cursor-pointer"
            >
              Посмотреть лечебные программы
            </button>
          )}
        </div>
      </div>

      {/* 
        CARD 2: Author Profile Card (Matching "Rico Pranata" card in screenshot)
      */}
      <div 
        id="article-author-card"
        className="bg-white border border-stone-200/90 rounded-2xl sm:rounded-3xl p-5 shadow-sm"
      >
        <div className="flex items-center gap-4">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            referrerPolicy="no-referrer"
            className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl object-cover flex-shrink-0 shadow-2xs border border-stone-100"
          />

          <div className="flex-1 min-w-0">
            <h4 className="text-sm sm:text-base font-bold text-stone-900 tracking-tight truncate">
              {article.author.name}
            </h4>
            <p className="text-[10.5px] font-semibold text-stone-400 uppercase tracking-wider mt-0.5">
              ИНЖЕНЕР БИОТЕХНОЛОГИЙ · КОУЧ
            </p>

            {/* Social Icons matching the 4 icons in the reference */}
            <div className="flex items-center gap-3.5 mt-2.5 text-stone-600">
              <a
                href={article.author.telegramUrl || 'https://t.me/OlgaHealthBot'}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2C6E67] hover:scale-110 transition-transform"
                title="Telegram"
              >
                <TelegramIcon className="w-4 h-4 text-sky-600" />
              </a>
              <a
                href={article.author.instagramUrl || 'https://www.instagram.com/bozinovic.olgica'}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 hover:scale-110 transition-transform"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={article.author.tiktokUrl || 'https://www.tiktok.com/@bozinovic.olgica'}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-stone-900 hover:scale-110 transition-transform"
                title="TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href={article.author.vkUrl || 'https://vk.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 hover:scale-110 transition-transform"
                title="VKontakte"
              >
                <VKIcon className="w-4 h-4 text-blue-600" />
              </a>
            </div>
          </div>
        </div>

        {article.author.bio && (
          <p className="mt-4 pt-3.5 border-t border-stone-100 text-xs text-stone-600 leading-relaxed font-light">
            {article.author.bio}
          </p>
        )}
      </div>

    </aside>
  );
};
