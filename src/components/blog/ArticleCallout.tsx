import React from 'react';
import { CalloutBlock, HighlightBlock } from '../../types/blog';
import { Info, Lightbulb, CheckCircle2, AlertCircle } from 'lucide-react';

export const ArticleCallout: React.FC<CalloutBlock> = ({ title, text, variant = 'tip' }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'info':
        return {
          container: 'bg-sky-50/70 border-sky-200/80 text-sky-950',
          badge: 'bg-sky-100 text-sky-800',
          icon: <Info className="w-4 h-4 text-sky-700" />,
        };
      case 'success':
        return {
          container: 'bg-emerald-50/70 border-emerald-200/80 text-emerald-950',
          badge: 'bg-emerald-100 text-[#2C6E67]',
          icon: <CheckCircle2 className="w-4 h-4 text-[#2C6E67]" />,
        };
      case 'tip':
      default:
        return {
          container: 'bg-[#f0f7f5] border-[#2C6E67]/20 text-stone-900',
          badge: 'bg-emerald-100/90 text-[#2C6E67]',
          icon: <Lightbulb className="w-4 h-4 text-[#2C6E67]" />,
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className={`my-7 p-5 sm:p-6 rounded-2xl border shadow-2xs ${styles.container}`}>
      <div className="flex items-center gap-2.5 mb-2.5">
        <span className={`p-1.5 rounded-lg ${styles.badge} flex-shrink-0`}>
          {styles.icon}
        </span>
        <h4 className="text-sm sm:text-base font-bold tracking-tight">
          {title}
        </h4>
      </div>
      <p className="text-xs sm:text-sm leading-relaxed text-stone-700 font-normal">
        {text}
      </p>
    </div>
  );
};

export const ArticleHighlight: React.FC<HighlightBlock> = ({ text, label }) => {
  return (
    <div className="my-6 p-4 sm:p-5 rounded-xl bg-amber-50/60 border border-amber-200/60 text-stone-900">
      {label && (
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1.5">
          {label}
        </span>
      )}
      <p className="text-xs sm:text-sm font-medium leading-relaxed text-stone-800">
        {text}
      </p>
    </div>
  );
};

export const ArticleDivider: React.FC = () => {
  return (
    <div className="my-10 flex items-center justify-center gap-3">
      <span className="h-px w-16 bg-stone-200" />
      <span className="w-1.5 h-1.5 rounded-full bg-[#2C6E67]/40" />
      <span className="h-px w-16 bg-stone-200" />
    </div>
  );
};
