import React from 'react';
import { ContentBlock } from '../../types/blog';
import { ArticleParagraph } from './ArticleParagraph';
import { ArticleHeading, ArticleSubheading } from './ArticleHeading';
import { ArticleQuote } from './ArticleQuote';
import { ArticleImage } from './ArticleImage';
import { ArticleUnorderedList, ArticleOrderedList } from './ArticleList';
import { ArticleCallout, ArticleHighlight, ArticleDivider } from './ArticleCallout';

interface ArticleContentProps {
  blocks: ContentBlock[];
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ blocks }) => {
  return (
    <div className="article-body-content space-y-2">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return <ArticleParagraph key={index} {...block} />;
          case 'heading':
            return <ArticleHeading key={index} {...block} />;
          case 'subheading':
            return <ArticleSubheading key={index} {...block} />;
          case 'quote':
            return <ArticleQuote key={index} {...block} />;
          case 'image':
            return <ArticleImage key={index} {...block} />;
          case 'unordered_list':
            return <ArticleUnorderedList key={index} {...block} />;
          case 'ordered_list':
            return <ArticleOrderedList key={index} {...block} />;
          case 'callout':
            return <ArticleCallout key={index} {...block} />;
          case 'highlight':
            return <ArticleHighlight key={index} {...block} />;
          case 'divider':
            return <ArticleDivider key={index} />;
          case 'link':
            return (
              <p key={index} className="my-4">
                <a
                  href={block.url}
                  target={block.isExternal ? '_blank' : undefined}
                  rel={block.isExternal ? 'noopener noreferrer' : undefined}
                  className="text-[#2C6E67] hover:text-emerald-800 font-semibold underline underline-offset-4 transition-colors"
                >
                  {block.text}
                </a>
              </p>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};
