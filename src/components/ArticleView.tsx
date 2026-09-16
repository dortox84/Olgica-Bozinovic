/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// The actual article reading experience — header, hero image, block
// content, CTA, footer. Both the homepage popup (BlogReaderModal) and the
// standalone /blog/:slug page (BlogArticlePage) render THIS component, so
// there is exactly one design for reading an article, not two.

import React from 'react';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import type { Article } from '../types/article';
import { ArticleContent } from './ArticleBlocks';

interface ArticleViewProps {
  article: Article;
  topRightAction: React.ReactNode;
  onConsultationClick?: () => void;
  footerAction: React.ReactNode;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  topRightAction,
  onConsultationClick,
  footerAction,
}) => {
  return (
    <>
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-stone-100 bg-white/95 backdrop-blur-sm sticky top-0 z-20">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-[#2C6E67] border border-emerald-200/60">
            {article.category}
          </span>
          <div className="flex items-center gap-1 text-stone-600 text-xs font-medium">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
          </div>
        </div>
        {topRightAction}
      </div>

      {/* Scrollable Article Content */}
      <div className="overflow-y-auto px-5 sm:px-8 md:px-10 py-6 sm:py-8 space-y-6 sm:space-y-8">

        {/* Main Title & Date */}
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 tracking-tight leading-tight mb-3">
            {article.title}
          </h1>

          <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-stone-100">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-10 h-10 rounded-full object-cover object-[center_top] ring-2 ring-emerald-600/20 bg-[#2C6E67]"
              />
              <div>
                <h4 className="text-sm font-bold text-stone-900 leading-tight">{article.author.name}</h4>
                <p className="text-[11px] text-stone-600 font-medium">{article.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-stone-600 text-xs font-medium">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </div>
          </div>
        </div>

        {/* Hero Banner Image */}
        <div className="overflow-hidden rounded-[20px] aspect-[16/9] sm:aspect-[21/10] bg-stone-100 shadow-md">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>

        {/* Ordered content blocks — the CMS/renderer bridge */}
        <ArticleContent blocks={article.content} />

        {/* In-Article CTA Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#2C6E67]/10 via-[#2C6E67]/5 to-transparent border border-[#2C6E67]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-stone-900">Нужна персональная схема оздоровления?</h4>
            <p className="text-xs sm:text-sm text-stone-600">Запишитесь на вводную консультацию с Ольгицей Божинович.</p>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={onConsultationClick}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#2C6E67] hover:bg-[#235852] text-white text-xs sm:text-sm font-medium shadow transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Записаться</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer Actions */}
      <div className="px-5 sm:px-8 py-3.5 border-t border-stone-100 bg-stone-50 flex items-center justify-between text-xs text-stone-500">
        <span>{article.author.name} © Все статьи защищены</span>
        {footerAction}
      </div>
    </>
  );
};
