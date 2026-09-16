import React from 'react';
import { HeadingBlock, SubheadingBlock } from '../../types/blog';

export const ArticleHeading: React.FC<HeadingBlock> = ({ text, level = 2 }) => {
  if (level === 3) {
    return (
      <h3 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight mt-7 mb-3 leading-snug">
        {text}
      </h3>
    );
  }

  return (
    <h2 className="text-xl sm:text-2xl md:text-[26px] font-bold text-stone-900 tracking-tight mt-10 mb-4 leading-tight">
      {text}
    </h2>
  );
};

export const ArticleSubheading: React.FC<SubheadingBlock> = ({ text }) => {
  return (
    <h3 className="text-lg sm:text-xl font-semibold text-stone-800 tracking-tight mt-6 mb-3 leading-snug">
      {text}
    </h3>
  );
};
