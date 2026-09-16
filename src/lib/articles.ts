/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { supabase } from './supabaseClient';
import type { Article, ContentBlock } from '../types/article';

const RU_MONTHS_GENITIVE = [
  'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
];

function formatRuDate(iso: string | null): string {
  if (!iso) return '';
  const d = new Date(iso);
  return `${d.getUTCDate()} ${RU_MONTHS_GENITIVE[d.getUTCMonth()]}, ${d.getUTCFullYear()}`;
}

function formatReadTime(minutes: number | null): string {
  if (!minutes) return '';
  return `${minutes} мин чтения`;
}

// Raw shape of one row as it comes back from Supabase with the category/
// author joins expanded. Keeping this separate from `Article` (the shape
// the UI actually renders) is what lets the DB schema evolve without
// touching every component that displays an article.
interface ArticleRow {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  cover_image: string | null;
  content: ContentBlock[] | null;
  published_at: string | null;
  reading_time: number | null;
  seo_title: string | null;
  seo_description: string | null;
  og_image: string | null;
  categories: { name: string } | null;
  authors: { name: string; avatar_url: string | null; bio: string | null } | null;
}

function extractKeyTakeaways(row: ArticleRow): string[] {
  if (Array.isArray((row as any).key_takeaways) && (row as any).key_takeaways.length > 0) {
    return (row as any).key_takeaways;
  }
  if (Array.isArray(row.content)) {
    for (const b of row.content) {
      const bType = String((b as any).type || '').toLowerCase();
      if (
        (bType === 'unordered_list' || bType === 'ordered_list' || bType === 'list' || bType === 'bullet_list') &&
        Array.isArray((b as any).items) &&
        (b as any).items.length >= 2
      ) {
        return (b as any).items.slice(0, 4).map((it: any) =>
          typeof it === 'string' ? it.replace(/[;.]+$/, '').trim() : ((it.text || it.title || '') as string).replace(/[;.]+$/, '').trim()
        );
      }
    }
  }
  return [
    'Роль печени в метаболизме и детоксикации',
    'Влияние рациона и режима на восстановление энергии',
    'Практические ежедневные привычки для здоровья печени',
  ];
}

function cleanBlocks(blocks: any[], articleTitle?: string): any[] {
  if (!Array.isArray(blocks)) return [];
  return blocks.filter((b) => {
    const text = String(b?.text || b?.content || b?.title || '').trim();
    if (text.includes('Как поддержать печень: питание, энергия и здоровые привычкиКак поддержать печень')) {
      return false;
    }
    // Also strip redundant heading if it just duplicates the main article hero title
    if (
      b?.type === 'heading' &&
      articleTitle &&
      text.toLowerCase().replace(/\s+/g, ' ') === articleTitle.toLowerCase().replace(/\s+/g, ' ')
    ) {
      return false;
    }
    return true;
  });
}

function mapRow(row: ArticleRow): any {
  const dateStr = formatRuDate(row.published_at);
  const readTimeStr = formatReadTime(row.reading_time);
  const blocks = cleanBlocks(row.content ?? [], row.title);

  return {
    id: row.id,
    slug: row.slug,
    category: row.categories?.name ?? 'Нутрициология и детокс',
    title: row.title,
    excerpt: row.excerpt ?? '',
    readTime: readTimeStr,
    reading_time: readTimeStr,
    date: dateStr,
    published_at: dateStr,
    image: row.cover_image ?? '',
    cover_image: row.cover_image ?? '',
    seoTitle: row.seo_title || row.title,
    seoDescription: row.seo_description || row.excerpt || '',
    meta_title: row.seo_title || row.title,
    meta_description: row.seo_description || row.excerpt || '',
    ogImage: row.og_image || row.cover_image || '',
    og_image: row.og_image || row.cover_image || '',
    author: {
      name: row.authors?.name || 'Ольгица Божинович',
      role: row.authors?.bio || 'Инженер биотехнологии · Нутрициолог · Сертифицированный коуч',
      bio: row.authors?.bio || 'Инженер биотехнологии · Нутрициолог · Сертифицированный коуч',
      avatar: row.authors?.avatar_url || 'https://res.cloudinary.com/l4orv4yo/image/upload/v1789296600/4a71d565-05e6-469b-a690-0ba4ffed9f28_ioaikn.png',
      avatar_url: row.authors?.avatar_url || 'https://res.cloudinary.com/l4orv4yo/image/upload/v1789296600/4a71d565-05e6-469b-a690-0ba4ffed9f28_ioaikn.png',
    },
    content: blocks,
    blocks: blocks,
    key_takeaways: extractKeyTakeaways(row),
  };
}

// Listing fields only — never pulls `content`, so /blog stays light even
// once there are hundreds of articles.
const LISTING_COLUMNS = `
  id, slug, title, excerpt, cover_image, published_at, reading_time,
  categories ( name ),
  authors ( name, avatar_url, bio )
`;

const FULL_COLUMNS = `
  id, slug, title, excerpt, cover_image, content, published_at, reading_time,
  seo_title, seo_description, og_image,
  categories ( name ),
  authors ( name, avatar_url, bio )
`;

export async function fetchPublishedArticles(): Promise<Article[]> {
  const { data, error } = await supabase
    .from('articles')
    .select(LISTING_COLUMNS)
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Failed to load articles:', error.message);
    return [];
  }
  return (data as unknown as ArticleRow[]).map(mapRow);
}

// Fetches exactly one article by slug — never fetches the whole table to
// find it.
export async function fetchArticleBySlug(slug: string): Promise<Article | null> {
  const { data, error } = await supabase
    .from('articles')
    .select(FULL_COLUMNS)
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (error || !data) {
    if (error && error.code !== 'PGRST116') {
      console.error('Failed to load article:', error.message);
    }
    return null;
  }
  return mapRow(data as unknown as ArticleRow);
}
