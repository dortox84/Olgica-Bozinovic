import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { TelegramIcon } from '../SocialIcons';

interface ArticleCTAProps {
  onConsultationClick?: () => void;
  category: string;
}

export const ArticleCTA: React.FC<ArticleCTAProps> = ({
  onConsultationClick,
  category,
}) => {
  return (
    <div 
      id="article-final-cta"
      className="my-12 p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-stone-900 via-[#182624] to-stone-900 text-white relative overflow-hidden shadow-xl"
    >
      {/* Soft background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#2C6E67]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-medium backdrop-blur-sm mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Персональный подход</span>
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-snug">
          Хотите составить индивидуальный план оздоровления?
        </h3>

        <p className="mt-3 text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
          Каждый организм уникален. На консультации мы разберем ваши анализы, текущие симптомы, образ жизни и составим пошаговый протокол восстановления энергии и пищеварения.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {onConsultationClick && (
            <button
              onClick={onConsultationClick}
              className="px-6 py-3 rounded-full bg-[#2C6E67] hover:bg-[#34837b] text-white font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg active:scale-98 cursor-pointer flex items-center gap-2"
            >
              <span>Записаться на консультацию</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          <a
            href="https://t.me/OlgaHealthBot"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium transition-all backdrop-blur-sm flex items-center gap-2"
          >
            <TelegramIcon className="w-4 h-4 text-sky-400" />
            <span>Написать в Telegram</span>
          </a>
        </div>
      </div>
    </div>
  );
};
