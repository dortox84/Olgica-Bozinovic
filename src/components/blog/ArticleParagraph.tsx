import React from 'react';
import { ParagraphBlock } from '../../types/blog';

export const ArticleParagraph: React.FC<ParagraphBlock> = ({ text }) => {
  return (
    <p className="text-base sm:text-[17px] text-stone-700 leading-[1.75] font-normal my-4 sm:my-5 antialiased selection:bg-emerald-100 selection:text-emerald-900">
      {text}
    </p>
  );
};
