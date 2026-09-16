import React, { useState } from 'react';
import { ArrowLeft, Share2, Check, ExternalLink } from 'lucide-react';
import { TelegramIcon } from '../SocialIcons';

interface BlogHeaderProps {
  onBack: () => void;
  category: string;
  articleTitle: string;
  onConsultationClick?: () => void;
}

export const BlogHeader: React.FC<BlogHeaderProps> = ({
  onBack,
  category,
  articleTitle,
  onConsultationClick,
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: articleTitle,
          url: window.location.href,
        });
        return;
      } catch (e) {
        // Fallback to clipboard
      }
    }
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 px-4 sm:px-8 py-3.5 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        
        {/* Back and Breadcrumb */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onBack}
            id="blog-back-btn"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium transition-all cursor-pointer flex-shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Все статьи</span>
          </button>

          <div className="h-4 w-px bg-stone-200 hidden sm:block flex-shrink-0" />

          {/* Breadcrumb path */}
          <div className="hidden md:flex items-center gap-1.5 text-xs text-stone-400 truncate">
            <span className="hover:text-stone-700 cursor-pointer" onClick={onBack}>Блог</span>
            <span>/</span>
            <span className="text-stone-600 truncate font-normal">{category}</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <button
            onClick={handleShare}
            id="blog-share-btn"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-50 hover:bg-stone-100 text-stone-600 text-xs font-medium border border-stone-200/80 transition-colors cursor-pointer"
            title="Поделиться статьей"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{copied ? 'Ссылка скопирована' : 'Поделиться'}</span>
          </button>

          <a
            href="https://t.me/OlgaHealthBot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 hover:bg-sky-100 text-xs font-medium border border-sky-200/60 transition-colors"
          >
            <TelegramIcon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Задать вопрос</span>
          </a>

          {onConsultationClick && (
            <button
              onClick={onConsultationClick}
              className="px-4 py-1.5 rounded-full bg-stone-900 hover:bg-[#2C6E67] text-white text-xs font-medium transition-all shadow-xs cursor-pointer"
            >
              Консультация
            </button>
          )}
        </div>

      </div>
    </nav>
  );
};
