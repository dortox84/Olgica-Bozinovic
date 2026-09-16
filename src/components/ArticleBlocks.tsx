/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// The bridge between Supabase and the existing visual design. Every visual
// rule here (colors, radii, spacing, icons) is lifted verbatim from the
// original BlogReaderModal JSX — nothing new was designed. This file is the
// ONLY place that decides how a block type looks; the CMS only ever sends
// data (type + text), never styling.

import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import type { ContentBlock } from '../types/article';

// Spacing wrapper: keeps rhythm between blocks without fighting Tailwind's
// space-y specificity rules when a heading needs a bigger gap above it than
// a plain paragraph does.
const Block: React.FC<{ heading?: boolean; children: React.ReactNode }> = ({ heading, children }) => (
  <div className={heading ? 'mt-7 sm:mt-8 first:mt-0 mb-3' : 'mb-3 sm:mb-3.5 last:mb-0'}>{children}</div>
);

const ArticleParagraph: React.FC<{ text: string }> = ({ text }) => (
  <p className="text-sm sm:text-base text-stone-600 leading-relaxed">{text}</p>
);

const ArticleHeading: React.FC<{ level: 2 | 3 | 4; text: string }> = ({ level, text }) => {
  if (level === 2) {
    return <h3 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight">{text}</h3>;
  }
  if (level === 3) {
    return <h4 className="text-base font-bold text-stone-900">{text}</h4>;
  }
  return <h5 className="text-sm font-bold text-stone-900">{text}</h5>;
};

const ArticleQuote: React.FC<{ text: string }> = ({ text }) => (
  <div className="py-5 px-6 rounded-2xl bg-stone-900 text-white relative overflow-hidden shadow-lg">
    <div className="relative z-10">
      <p className="text-base sm:text-lg font-serif italic text-stone-100 leading-relaxed">{text}</p>
      <p className="text-xs text-emerald-400 font-medium mt-2">— Ольгица Божинович, основатель практики</p>
    </div>
  </div>
);

const ArticleImage: React.FC<{ url: string; alt: string; caption?: string }> = ({ url, alt, caption }) => (
  <figure>
    <div className="overflow-hidden rounded-[20px] aspect-[16/10] bg-stone-100 shadow-md">
      <img src={url} alt={alt} className="w-full h-full object-cover" />
    </div>
    {caption && <figcaption className="text-xs sm:text-sm text-stone-600 mt-2 text-center">{caption}</figcaption>}
  </figure>
);

const ArticleUnorderedList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-2 pt-1">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-stone-700">
        <CheckCircle2 className="w-4 h-4 text-[#2C6E67] shrink-0 mt-1" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const ArticleOrderedList: React.FC<{ items: string[] }> = ({ items }) => (
  <ol className="space-y-2 pt-1">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-stone-700">
        <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#2C6E67]/10 text-[#2C6E67] text-[11px] font-bold flex items-center justify-center">
          {idx + 1}
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ol>
);

const ArticleDivider: React.FC = () => <hr className="border-t border-stone-200" />;

const ArticleCallout: React.FC<{ variant?: 'lead' | 'tip'; text: string }> = ({ variant = 'tip', text }) => {
  if (variant === 'lead') {
    return (
      <div className="text-base sm:text-lg text-stone-800 font-medium leading-relaxed bg-[#f8faf9] p-4 sm:p-5 rounded-2xl border-l-4 border-[#2C6E67]">
        {text}
      </div>
    );
  }
  return (
    <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/70 text-amber-900 text-xs sm:text-sm font-medium flex items-start gap-2.5">
      <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
      <span>{text}</span>
    </div>
  );
};

// One switch, one component per block type. An unrecognized type renders
// nothing rather than throwing — so a future block type never breaks an
// older article that a not-yet-updated build doesn't know about.
export const ArticleContent: React.FC<{ blocks: ContentBlock[] }> = ({ blocks }) => (
  <div>
    {blocks.map((block, idx) => {
      switch (block.type) {
        case 'paragraph':
          return <Block key={idx}><ArticleParagraph text={block.text} /></Block>;
        case 'heading':
          return <Block key={idx} heading><ArticleHeading level={block.level} text={block.text} /></Block>;
        case 'quote':
          return <Block key={idx}><ArticleQuote text={block.text} /></Block>;
        case 'image':
          return <Block key={idx}><ArticleImage url={block.url} alt={block.alt} caption={block.caption} /></Block>;
        case 'unordered_list':
          return <Block key={idx}><ArticleUnorderedList items={block.items} /></Block>;
        case 'ordered_list':
          return <Block key={idx}><ArticleOrderedList items={block.items} /></Block>;
        case 'divider':
          return <Block key={idx}><ArticleDivider /></Block>;
        case 'callout':
          return <Block key={idx}><ArticleCallout variant={block.variant} text={block.text} /></Block>;
        default:
          return null;
      }
    })}
  </div>
);
