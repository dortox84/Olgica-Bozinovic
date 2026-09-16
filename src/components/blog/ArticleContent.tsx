import React from 'react';
import { ContentBlock } from '../../types/blog';
import { ArticleParagraph } from './ArticleParagraph';
import { ArticleHeading, ArticleSubheading } from './ArticleHeading';
import { ArticleQuote } from './ArticleQuote';
import { ArticleImage } from './ArticleImage';
import { ArticleUnorderedList, ArticleOrderedList } from './ArticleList';
import { ArticleCallout, ArticleHighlight, ArticleDivider } from './ArticleCallout';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ArticleContentProps {
  blocks?: ContentBlock[];
  content?: ContentBlock[];
  onConsultationClick?: () => void;
}

const ArticleCTABlock: React.FC<{
  title?: string;
  text?: string;
  button_text?: string;
  url?: string;
  onConsultationClick?: () => void;
}> = ({ title, text, button_text, url, onConsultationClick }) => {
  return (
    <div className="my-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#2C6E67]/10 via-[#2C6E67]/5 to-emerald-50/20 border border-[#2C6E67]/25 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xs">
      <div className="flex-1 min-w-0">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#2C6E67] text-[11px] font-semibold mb-2">
          <Sparkles className="w-3 h-3 text-[#2C6E67]" />
          <span>Персональный протокол</span>
        </div>
        <h4 className="text-base sm:text-lg font-bold text-stone-900 mb-1">
          {title || 'Нужна индивидуальная консультация?'}
        </h4>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          {text || 'Запишитесь на консультацию с Ольгицей Божинович для составления персональной схемы оздоровления.'}
        </p>
      </div>
      <div className="shrink-0 w-full sm:w-auto">
        {url ? (
          <a
            href={url}
            target={url.startsWith('http') ? '_blank' : undefined}
            rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#2C6E67] hover:bg-[#235852] text-white text-xs sm:text-sm font-semibold shadow transition-colors flex items-center justify-center gap-2"
          >
            <span>{button_text || 'Подробнее'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        ) : (
          <button
            type="button"
            onClick={onConsultationClick}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#2C6E67] hover:bg-[#235852] text-white text-xs sm:text-sm font-semibold shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{button_text || 'Записаться'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};

export const ArticleContent: React.FC<ArticleContentProps> = ({
  blocks,
  content,
  onConsultationClick,
}) => {
  const rawBlocks = blocks || content || [];
  const activeBlocks = Array.isArray(rawBlocks)
    ? rawBlocks.filter((b) => {
        const text = String(b?.text || b?.content || b?.title || '').trim();
        return !text.includes('Как поддержать печень: питание, энергия и здоровые привычкиКак поддержать печень');
      })
    : [];

  if (activeBlocks.length === 0) {
    return null;
  }

  return (
    <div className="article-body-content space-y-2">
      {activeBlocks.map((block, index) => {
        const type = (block.type || '').toLowerCase();

        switch (type) {
          case 'paragraph':
          case 'p':
          case 'text':
            return <ArticleParagraph key={index} {...block} />;

          case 'heading':
          case 'h1':
          case 'h2':
          case 'h3':
          case 'h4':
          case 'header':
            return <ArticleHeading key={index} {...block} />;

          case 'subheading':
            return <ArticleSubheading key={index} {...block} />;

          case 'quote':
          case 'blockquote':
            return <ArticleQuote key={index} {...block} />;

          case 'image':
          case 'img':
          case 'photo':
            return <ArticleImage key={index} {...block} />;

          case 'unordered_list':
          case 'bullet_list':
          case 'list':
            return <ArticleUnorderedList key={index} {...block} />;

          case 'ordered_list':
          case 'numbered_list':
            return <ArticleOrderedList key={index} {...block} />;

          case 'callout':
          case 'inset':
          case 'box':
            return <ArticleCallout key={index} {...block} />;

          case 'highlight':
          case 'tip':
            return <ArticleHighlight key={index} {...block} />;

          case 'divider':
          case 'separator':
          case 'hr':
            return <ArticleDivider key={index} />;

          case 'cta':
          case 'call_to_action':
            return (
              <ArticleCTABlock
                key={index}
                {...block}
                onConsultationClick={onConsultationClick}
              />
            );

          case 'link':
            return (
              <p key={index} className="my-4">
                <a
                  href={block.url}
                  target={block.isExternal ? '_blank' : undefined}
                  rel={block.isExternal ? 'noopener noreferrer' : undefined}
                  className="text-[#2C6E67] hover:text-emerald-800 font-semibold underline underline-offset-4 transition-colors"
                >
                  {block.text || block.url}
                </a>
              </p>
            );

          default:
            // Gracefully render paragraph if block has text/content
            if (block.text || block.content) {
              return <ArticleParagraph key={index} {...block} />;
            }
            return null;
        }
      })}
    </div>
  );
};
