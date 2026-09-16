import React from 'react';
import { CalloutBlock, HighlightBlock } from '../../types/blog';
import { Info, Lightbulb, CheckCircle2, AlertCircle, Sparkles, HelpCircle } from 'lucide-react';

interface FlexibleCalloutProps extends Partial<CalloutBlock> {
  [key: string]: any;
}

export const ArticleCallout: React.FC<FlexibleCalloutProps> = (props) => {
  const variant = props.variant || 'tip';
  const mainText = props.text || props.content || props.body || '';
  const title = props.title || '';

  // Special handling for editorial "lead" callouts / insets (e.g. "Почему печень так важна?")
  if (variant === 'lead') {
    return (
      <div className="my-7 p-5 sm:p-6 rounded-2xl bg-[#f4f9f7] border-l-4 border-l-[#2C6E67] border-y border-r border-[#2C6E67]/20 shadow-2xs">
        {title && (
          <h4 className="text-base sm:text-lg font-bold text-[#2C6E67] tracking-tight mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#2C6E67] shrink-0" />
            <span>{title}</span>
          </h4>
        )}
        <div className="text-base sm:text-lg font-medium text-stone-900 leading-relaxed">
          {mainText || title}
        </div>
      </div>
    );
  }

  const getVariantStyles = () => {
    switch (variant) {
      case 'info':
        return {
          container: 'bg-sky-50/70 border-sky-200/80 text-sky-950',
          badge: 'bg-sky-100 text-sky-800',
          icon: <Info className="w-4 h-4 text-sky-700" />,
          defaultTitle: 'Полезная информация',
        };
      case 'success':
        return {
          container: 'bg-emerald-50/70 border-emerald-200/80 text-emerald-950',
          badge: 'bg-emerald-100 text-[#2C6E67]',
          icon: <CheckCircle2 className="w-4 h-4 text-[#2C6E67]" />,
          defaultTitle: 'Практический вывод',
        };
      case 'warning':
      case 'alert':
        return {
          container: 'bg-amber-50/80 border-amber-200 text-amber-950',
          badge: 'bg-amber-100 text-amber-800',
          icon: <AlertCircle className="w-4 h-4 text-amber-700" />,
          defaultTitle: 'Важное предостережение',
        };
      case 'tip':
      default:
        return {
          container: 'bg-[#f0f7f5] border-[#2C6E67]/20 text-stone-900',
          badge: 'bg-emerald-100/90 text-[#2C6E67]',
          icon: <Lightbulb className="w-4 h-4 text-[#2C6E67]" />,
          defaultTitle: 'Совет эксперта',
        };
    }
  };

  const styles = getVariantStyles();
  const displayHeading = title;

  return (
    <div className={`my-7 p-5 sm:p-6 rounded-2xl border shadow-2xs ${styles.container}`}>
      {displayHeading && (
        <div className="flex items-center gap-2.5 mb-2.5">
          <span className={`p-1.5 rounded-lg ${styles.badge} flex-shrink-0`}>
            {styles.icon}
          </span>
          <h4 className="text-sm sm:text-base font-bold tracking-tight">
            {displayHeading}
          </h4>
        </div>
      )}
      {!displayHeading && (
        <div className="flex items-start gap-3">
          <span className={`p-1.5 rounded-lg ${styles.badge} flex-shrink-0 mt-0.5`}>
            {styles.icon}
          </span>
          <p className="text-sm sm:text-[15px] leading-relaxed text-stone-800 font-normal">
            {mainText}
          </p>
        </div>
      )}
      {displayHeading && (
        <p className="text-xs sm:text-sm leading-relaxed text-stone-700 font-normal">
          {mainText}
        </p>
      )}
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
