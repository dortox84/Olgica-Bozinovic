import React from 'react';
import { ImageBlock } from '../../types/blog';

export const ArticleImage: React.FC<ImageBlock> = ({ url, caption, alt }) => {
  return (
    <figure className="my-8 sm:my-10">
      <div className="relative rounded-2xl overflow-hidden shadow-sm border border-stone-200/80 bg-stone-100 aspect-[16/10] sm:aspect-[16/9]">
        <img
          src={url}
          alt={alt || caption || 'Иллюстрация к статье'}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.01]"
        />
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-xs sm:text-[13px] text-stone-500 italic font-light">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
