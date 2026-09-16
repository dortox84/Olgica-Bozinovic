import React from 'react';

export const ArticleUnorderedList: React.FC<{ [key: string]: any }> = (props) => {
  const rawItems = props.items || props.values || props.content || [];
  const items = Array.isArray(rawItems) ? rawItems : [rawItems];
  if (items.length === 0) return null;

  return (
    <ul className="my-5 sm:my-6 space-y-3">
      {items.map((item, idx) => {
        const itemText = typeof item === 'string' ? item : item?.text || item?.title || String(item);
        return (
          <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-emerald-100 text-[#2C6E67] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold shadow-2xs">
              ✓
            </span>
            <span className="flex-1">{itemText}</span>
          </li>
        );
      })}
    </ul>
  );
};

export const ArticleOrderedList: React.FC<{ [key: string]: any }> = (props) => {
  const rawItems = props.items || props.values || props.content || [];
  const items = Array.isArray(rawItems) ? rawItems : [rawItems];
  if (items.length === 0) return null;

  return (
    <ol className="my-5 sm:my-6 space-y-3.5">
      {items.map((item, idx) => {
        const itemText = typeof item === 'string' ? item : item?.text || item?.title || String(item);
        return (
          <li key={idx} className="flex items-start gap-3.5 text-sm sm:text-base text-stone-700 leading-relaxed">
            <span className="w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-semibold shadow-2xs">
              {idx + 1}
            </span>
            <span className="flex-1">{itemText}</span>
          </li>
        );
      })}
    </ol>
  );
};
