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

function mapRow(row: ArticleRow): Article {
  return {
    id: row.id,
    slug: row.slug,
    category: row.categories?.name ?? '',
    title: row.title,
    excerpt: row.excerpt ?? '',
    readTime: formatReadTime(row.reading_time),
    date: formatRuDate(row.published_at),
    image: row.cover_image ?? '',
    seoTitle: row.seo_title || row.title,
    seoDescription: row.seo_description || row.excerpt || '',
    ogImage: row.og_image || row.cover_image || '',
    author: {
      name: row.authors?.name ?? '',
      role: row.authors?.bio ?? '',
      avatar: row.authors?.avatar_url ?? '',
    },
    content: row.content ?? [],
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
