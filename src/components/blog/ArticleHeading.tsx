import React from 'react';

export const ArticleHeading: React.FC<{ [key: string]: any }> = (props) => {
  const text = props.text || props.content || props.title || props.value || '';
  const level = Number(props.level) || 2;
  if (!text) return null;

  if (level === 3) {
    return (
      <h3 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight mt-7 mb-3 leading-snug">
        {text}
      </h3>
    );
  }

  if (level === 4) {
    return (
      <h4 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight mt-6 mb-2 leading-snug">
        {text}
      </h4>
    );
  }

  return (
    <h2 className="text-xl sm:text-2xl md:text-[26px] font-bold text-stone-900 tracking-tight mt-10 mb-4 leading-tight">
      {text}
    </h2>
  );
};

export const ArticleSubheading: React.FC<{ [key: string]: any }> = (props) => {
  const text = props.text || props.content || props.title || props.value || '';
  if (!text) return null;

  return (
    <h3 className="text-lg sm:text-xl font-semibold text-stone-800 tracking-tight mt-6 mb-3 leading-snug">
      {text}
    </h3>
  );
};
