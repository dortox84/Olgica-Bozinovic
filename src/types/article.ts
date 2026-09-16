/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// The content model the CMS writes and the site renders. This is the ONLY
// place that defines what a "block" can be — add a new type here, add one
// matching case in ArticleBlocks.tsx, and every article (past and future)
// can use it. Nothing about this file describes how a block looks; that
// lives entirely in ArticleBlocks.tsx, which reuses the site's existing
// visual components.

export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3 | 4; text: string }
  | { type: 'quote'; text: string }
  | { type: 'image'; url: string; alt: string; caption?: string }
  | { type: 'unordered_list'; items: string[] }
  | { type: 'ordered_list'; items: string[] }
  | { type: 'divider' }
  | { type: 'callout'; variant?: 'lead' | 'tip'; text: string };

export interface ArticleAuthor {
  name: string;
  role: string;
  avatar: string;
}

// The shape the UI works with — deliberately close to the original
// hardcoded BlogArticle interface so BlogCardsSection / BlogReaderModal
// need minimal changes, but `content` is now the flexible block array
// instead of the old fixed lead/sections/quote/conclusion shape.
export interface Article {
  id: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  seoTitle: string;
  seoDescription: string;
  ogImage: string;
  author: ArticleAuthor;
  content: ContentBlock[];
}
