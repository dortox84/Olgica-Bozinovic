import React, { useEffect } from 'react';
import { X, Clock, Calendar, ArrowRight, Sparkles, CheckCircle2, Bookmark } from 'lucide-react';
import { BlogArticle } from '../data/blogArticles';

interface BlogReaderModalProps {
  article: BlogArticle | null;
  isOpen: boolean;
  onClose: () => void;
  onConsultationClick?: () => void;
  onProgramsClick?: () => void;
}

export const BlogReaderModal: React.FC<BlogReaderModalProps> = ({
  article,
  isOpen,
  onClose,
  onConsultationClick,
  onProgramsClick,
}) => {
  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div 
        id="blog-reader-modal"
        className="relative w-full max-w-3xl bg-white rounded-[24px] sm:rounded-[32px] shadow-2xl shadow-stone-950/40 border border-stone-200 overflow-hidden my-auto z-10 max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
      >
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

          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
            className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-900 flex items-center justify-center transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Article Content */}
        <div className="overflow-y-auto px-5 sm:px-8 md:px-10 py-6 sm:py-8 space-y-6 sm:space-y-8">
          
          {/* Main Title & Date */}
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 tracking-tight leading-tight mb-3">
              {article.title}
            </h1>
            
            <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-stone-100">
              {/* Author Info */}
              <div className="flex items-center gap-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full object-cover object-[center_top] ring-2 ring-emerald-600/20 bg-[#2C6E67]"
                />
                <div>
                  <h4 className="text-sm font-bold text-stone-900 leading-tight">
                    {article.author.name}
                  </h4>
                  <p className="text-[11px] text-stone-600 font-medium">
                    {article.author.role}
                  </p>
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
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Lead Paragraph */}
          <div className="text-base sm:text-lg text-stone-800 font-medium leading-relaxed bg-[#f8faf9] p-4 sm:p-5 rounded-2xl border-l-4 border-[#2C6E67]">
            {article.content.lead}
          </div>

          {/* Article Subsections */}
          <div className="space-y-6 sm:space-y-7">
            {article.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight">
                  {section.heading}
                </h3>
                
                {section.text.map((para, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-stone-600 leading-relaxed">
                    {para}
                  </p>
                ))}

                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <ul className="space-y-2 pt-1">
                    {section.bulletPoints.map((item, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-[#2C6E67] shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.tipBox && (
                  <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/70 text-amber-900 text-xs sm:text-sm font-medium flex items-start gap-2.5 mt-2">
                    <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{section.tipBox}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Highlight Quote */}
          {article.content.quote && (
            <div className="py-5 px-6 rounded-2xl bg-stone-900 text-white relative overflow-hidden shadow-lg">
              <div className="relative z-10">
                <p className="text-base sm:text-lg font-serif italic text-stone-100 leading-relaxed">
                  {article.content.quote}
                </p>
                <p className="text-xs text-emerald-400 font-medium mt-2">
                  — Ольгица Божинович, основатель практики
                </p>
              </div>
            </div>
          )}

          {/* Conclusion */}
          <div className="pt-2">
            <h4 className="text-base font-bold text-stone-900 mb-2">Итог консультанта:</h4>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              {article.content.conclusion}
            </p>
          </div>

          {/* In-Article CTA Banner */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#2C6E67]/10 via-[#2C6E67]/5 to-transparent border border-[#2C6E67]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-stone-900">
                Нужна персональная схема оздоровления?
              </h4>
              <p className="text-xs sm:text-sm text-stone-600">
                Запишитесь на вводную консультацию с Ольгицей Божинович.
              </p>
            </div>
            
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onConsultationClick) onConsultationClick();
                }}
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
          <button
            type="button"
            onClick={onClose}
            className="text-stone-700 hover:text-stone-900 font-medium"
          >
            Закрыть статью
          </button>
        </div>

      </div>
    </div>
  );
};
