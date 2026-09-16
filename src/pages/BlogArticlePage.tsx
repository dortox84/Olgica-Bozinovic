/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// The real, shareable, indexable /blog/:slug page. Renders through the
// exact same ArticleView used by the homepage popup — same design, just
// reachable on its own URL. This is also what "Предпросмотр" in the admin
// app will eventually point at for drafts (Phase 6).

import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { OlgicaLogo } from '../components/OlgicaLogo';
import { ArticleView } from '../components/ArticleView';
import { BookingModal } from '../components/BookingModal';
import { fetchArticleBySlug } from '../lib/articles';
import type { Article } from '../types/article';

type LoadState = 'loading' | 'found' | 'not-found';

export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [state, setState] = useState<LoadState>('loading');
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    if (!slug) return;
    let isMounted = true;
    setState('loading');
    fetchArticleBySlug(slug).then((data) => {
      if (!isMounted) return;
      if (data) {
        setArticle(data);
        setState('found');
      } else {
        setState('not-found');
      }
    });
    return () => {
      isMounted = false;
    };
  }, [slug]);

  // Basic per-article SEO: real title tag + meta description, so the tab,
  // bookmarks, and any crawler that executes JS (Google does) see this
  // article's own text instead of the site's generic homepage copy. Social
  // link-preview cards (Telegram/VK/OK.ru, which don't execute JS) need a
  // separate bot-facing fix — deferred on purpose, tracked as a fast-follow.
  useEffect(() => {
    if (state !== 'found' || !article) return;
    document.title = `${article.seoTitle} — Ольгица Божинович`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', article.seoDescription);
    return () => {
      document.title = 'Olgica Božinović — Put Zdravlja';
      if (meta) {
        meta.setAttribute(
          'content',
          'Официальный сайт Ольгицы Божинович: консультант по питанию и суплементации, Health Coach. Программа «Путь Здоровья» и очищение печени.',
        );
      }
    };
  }, [state, article]);

  return (
    <div className="min-h-screen w-full bg-[#121212]">
      <header className="w-full px-5 sm:px-8 lg:px-14 xl:px-16 py-5 sm:py-6">
        <div className="max-w-[900px] mx-auto flex items-center justify-between">
          <Link to="/" aria-label="На главную">
            <OlgicaLogo className="h-8 sm:h-9 w-auto" theme="dark" />
          </Link>
          <Link to="/blog" className="text-sm font-medium text-white/80 hover:text-white">
            Все статьи
          </Link>
        </div>
      </header>

      <div className="px-3 sm:px-4 md:px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          {state === 'loading' && (
            <div className="bg-white rounded-[24px] sm:rounded-[32px] p-10 text-center text-stone-600 text-sm">
              Загружаем статью…
            </div>
          )}

          {state === 'not-found' && (
            <div className="bg-white rounded-[24px] sm:rounded-[32px] p-10 text-center">
              <h1 className="text-xl font-bold text-stone-900 mb-2">Статья не найдена</h1>
              <p className="text-sm text-stone-600 mb-5">
                Возможно, она была снята с публикации или адрес указан неверно.
              </p>
              <button
                type="button"
                onClick={() => navigate('/blog')}
                className="px-5 py-2.5 rounded-full bg-[#2C6E67] hover:bg-[#235852] text-white text-sm font-medium transition-colors"
              >
                Ко всем статьям
              </button>
            </div>
          )}

          {state === 'found' && article && (
            <div className="relative bg-white rounded-[24px] sm:rounded-[32px] shadow-2xl shadow-stone-950/40 border border-stone-200 overflow-hidden flex flex-col">
              <ArticleView
                article={article}
                onConsultationClick={() => setBookingOpen(true)}
                topRightAction={
                  <Link
                    to="/blog"
                    className="text-xs sm:text-sm font-medium text-stone-600 hover:text-stone-900 flex items-center gap-1"
                  >
                    ← Все статьи
                  </Link>
                }
                footerAction={
                  <Link to="/blog" className="text-stone-700 hover:text-stone-900 font-medium">
                    Ко всем статьям
                  </Link>
                }
              />
            </div>
          )}
        </div>
      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
