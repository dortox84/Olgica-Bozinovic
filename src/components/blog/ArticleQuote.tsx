import React from 'react';
import { QuoteBlock } from '../../types/blog';
import { Quote } from 'lucide-react';

export const ArticleQuote: React.FC<QuoteBlock> = ({ text, author, citation }) => {
  return (
    <figure className="my-8 sm:my-10 p-5 sm:p-7 rounded-2xl bg-emerald-50/50 border-l-4 border-[#2C6E67] relative overflow-hidden">
      <Quote className="w-8 h-8 text-[#2C6E67]/20 absolute top-4 right-4 pointer-events-none" />
      <blockquote className="text-base sm:text-lg md:text-xl font-serif-title italic text-stone-800 leading-relaxed font-normal">
        {text}
      </blockquote>
      {(author || citation) && (
        <figcaption className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-stone-600 font-sans font-medium not-italic">
          {author && <span className="font-semibold text-stone-900">— {author}</span>}
          {author && citation && <span className="text-stone-400">·</span>}
          {citation && <span className="text-stone-500 font-normal">{citation}</span>}
        </figcaption>
      )}
    </figure>
  );
};
