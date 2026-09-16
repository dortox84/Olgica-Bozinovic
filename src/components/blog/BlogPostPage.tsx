import React, { useEffect } from 'react';
import { Article } from '../../types/blog';
import { getRelatedArticles } from '../../data/blogArticlesData';
import { BlogHeader } from './BlogHeader';
import { BlogHero } from './BlogHero';
import { ArticleContent } from './ArticleContent';
import { ArticleSidebar } from './ArticleSidebar';
import { ArticleCTA } from './ArticleCTA';
import { RelatedArticles } from './RelatedArticles';

interface BlogPostPageProps {
  article: Article;
  onBack: () => void;
  onSelectArticle: (slug: string) => void;
  onConsultationClick?: () => void;
  onProgramsClick?: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
  article,
  onBack,
  onSelectArticle,
  onConsultationClick,
  onProgramsClick,
}) => {
  // Scroll to top smoothly when article changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update document title for SEO
    const originalTitle = document.title;
    document.title = `${article.title} — Ольгица Божинович`;
    
    return () => {
      document.title = originalTitle;
    };
  }, [article.slug, article.title]);

  const relatedArticles = getRelatedArticles(article.slug, 3);

  return (
    <div id="blog-post-page" className="min-h-screen bg-[#fafaf9] text-stone-900 flex flex-col antialiased">
      {/* 1. Header Navigation with Breadcrumbs, Share, and Contact */}
      <BlogHeader
        onBack={onBack}
        category={article.category}
        articleTitle={article.title}
        onConsultationClick={onConsultationClick}
      />

      {/* 2. Main Article Container */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <article className="space-y-8 sm:space-y-10">
          
          {/* Top Hero Banner (Reflecting Reference Banner Block) */}
          <BlogHero article={article} />

          {/* Two-Column Editorial Grid: Left Content (67%) + Right Sidebar (33%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* LEFT COLUMN: Main Editorial Content */}
            <div className="lg:col-span-8 min-w-0">
              
              {/* Primary Featured Cover Image */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-stone-200/90 bg-stone-100 aspect-[16/10] mb-8">
                <img
                  src={article.cover_image}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dynamic Semantic Content Blocks */}
              <ArticleContent blocks={article.blocks} />

              {/* Article Final Call To Action */}
              <ArticleCTA
                category={article.category}
                onConsultationClick={onConsultationClick}
              />
            </div>

            {/* RIGHT COLUMN: Sticky Sidebar Cards */}
            <ArticleSidebar
              article={article}
              onConsultationClick={onConsultationClick}
              onProgramsClick={onProgramsClick}
            />

          </div>

          {/* Bottom: Related Articles */}
          <RelatedArticles
            articles={relatedArticles}
            onSelectArticle={onSelectArticle}
          />

        </article>
      </main>

      {/* Subtle Footer Note */}
      <footer className="w-full bg-white border-t border-stone-200 py-8 px-4 text-center text-xs text-stone-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Ольгица Божинович. Все права защищены.</p>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Материалы носят образовательный характер</span>
            <span>·</span>
            <button onClick={onBack} className="hover:text-stone-700 underline underline-offset-2">
              Вернуться на главную
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
