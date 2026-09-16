export type ContentBlockType =
  | 'paragraph'
  | 'heading'
  | 'subheading'
  | 'quote'
  | 'highlight'
  | 'image'
  | 'unordered_list'
  | 'ordered_list'
  | 'divider'
  | 'callout'
  | 'link';

export interface ParagraphBlock {
  type: 'paragraph';
  text: string;
}

export interface HeadingBlock {
  type: 'heading';
  text: string;
  level?: 2 | 3;
}

export interface SubheadingBlock {
  type: 'subheading';
  text: string;
}

export interface QuoteBlock {
  type: 'quote';
  text: string;
  author?: string;
  citation?: string;
}

export interface HighlightBlock {
  type: 'highlight';
  text: string;
  label?: string;
}

export interface ImageBlock {
  type: 'image';
  url: string;
  caption?: string;
  alt?: string;
}

export interface UnorderedListBlock {
  type: 'unordered_list';
  items: string[];
}

export interface OrderedListBlock {
  type: 'ordered_list';
  items: string[];
}

export interface DividerBlock {
  type: 'divider';
}

export interface CalloutBlock {
  type: 'callout';
  title: string;
  text: string;
  variant?: 'info' | 'tip' | 'success';
}

export interface LinkBlock {
  type: 'link';
  text: string;
  url: string;
  isExternal?: boolean;
}

export type ContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | SubheadingBlock
  | QuoteBlock
  | HighlightBlock
  | ImageBlock
  | UnorderedListBlock
  | OrderedListBlock
  | DividerBlock
  | CalloutBlock
  | LinkBlock;

export interface ArticleAuthor {
  name: string;
  role: string;
  avatar: string;
  bio?: string;
  telegramUrl?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  vkUrl?: string;
}

export interface ArticleMetadata {
  level?: string;
  category: string;
  readTime: string;
  publishedAt: string;
  targetAudience?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  cover_image: string;
  author: ArticleAuthor;
  published_at: string;
  reading_time: string;
  key_takeaways: string[];
  blocks: ContentBlock[];
  status: 'published' | 'draft';
  created_at?: string;
  updated_at?: string;
  related_slugs?: string[];
  meta_description?: string;
}
