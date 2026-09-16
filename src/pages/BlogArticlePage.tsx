/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BlogPostPage } from '../components/blog/BlogPostPage';
import { BookingModal } from '../components/BookingModal';
import { getArticleBySlug, getAllArticles } from '../data/blogArticlesData';

export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingServiceTitle, setBookingServiceTitle] = useState('Консультация');

  const article = slug ? getArticleBySlug(slug) : null;

  useEffect(() => {
    if (!article) return;
    document.title = `${article.title} — Ольгица Божинович`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && article.meta_description) {
      meta.setAttribute('content', article.meta_description);
    }
    return () => {
      document.title = 'Olgica Božinović — Put Zdravlja';
    };
  }, [article]);

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
