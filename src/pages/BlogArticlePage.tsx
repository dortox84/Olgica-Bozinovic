/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BlogPostPage } from '../components/blog/BlogPostPage';
import { BookingModal } from '../components/BookingModal';
import { getArticleBySlug, getAllArticles } from '../data/blogArticlesData';
import { fetchArticleBySlug } from '../lib/articles';

export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingServiceTitle, setBookingServiceTitle] = useState('Консультация');
  const [article, setArticle] = useState<any>(() => (slug ? getArticleBySlug(slug) : null));
  const [isLoading, setIsLoading] = useState(!article);

  useEffect(() => {
    if (!slug) return;
    let isMounted = true;

    const local = getArticleBySlug(slug);
    if (local && isMounted) {
      setArticle(local);
    }

    fetchArticleBySlug(slug)
      .then((live) => {
        if (isMounted) {
          if (live) {
            setArticle(live);
          }
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  useEffect(() => {
    if (!article) return;
    document.title = `${article.title} — Ольгица Божинович`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && (article.meta_description || article.seoDescription || article.excerpt)) {
      meta.setAttribute('content', article.meta_description || article.seoDescription || article.excerpt);
    }
    return () => {
      document.title = 'Olgica Božinović — Put Zdravlja';
    };
  }, [article]);

  if (isLoading && !article) {
    return (
      <div className="min-h-screen bg-[#fafaf9] flex items-center justify-center p-6">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-[#2C6E67] border-t-transparent animate-spin" />
          <span className="text-xs text-stone-500 font-medium">Загрузка статьи...</span>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen w-full bg-[#fafaf9] flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-stone-200 max-w-lg w-full">
          <h1 className="text-2xl font-bold text-stone-900 mb-2">Статья не найдена</h1>
          <p className="text-sm text-stone-600 mb-6">
            Запрошенная статья не существует или адрес был изменен.
          </p>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-6 py-3 rounded-full bg-stone-900 hover:bg-[#2C6E67] text-white text-sm font-semibold transition-all cursor-pointer"
          >
            Вернуться на главную
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <BlogPostPage
        article={article}
        onBack={() => navigate('/')}
        onSelectArticle={(newSlug) => navigate(`/blog/${newSlug}`)}
        onConsultationClick={() => {
          setBookingServiceTitle(`Консультация по теме: ${article.title}`);
          setBookingOpen(true);
        }}
        onProgramsClick={() => navigate('/')}
      />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        serviceTitle={bookingServiceTitle}
      />
    </>
  );
}
