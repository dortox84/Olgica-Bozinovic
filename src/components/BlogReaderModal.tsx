/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import type { Article } from '../types/article';
import { ArticleView } from './ArticleView';

interface BlogReaderModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
  onConsultationClick?: () => void;
  onProgramsClick?: () => void;
}

export const BlogReaderModal: React.FC<BlogReaderModalProps> = ({
  article,
  isOpen,
  onClose,
  onConsultationClick,
}) => {
  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div
        id="blog-reader-modal"
        className="relative w-full max-w-3xl bg-white rounded-[24px] sm:rounded-[32px] shadow-2xl shadow-stone-950/40 border border-stone-200 overflow-hidden my-auto z-10 max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
      >
        <ArticleView
          article={article}
          onConsultationClick={() => {
            onClose();
            onConsultationClick?.();
          }}
          topRightAction={
            <button
              type="button"
              onClick={onClose}
              aria-label="Закрыть"
              className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-900 flex items-center justify-center transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          }
          footerAction={
            <button type="button" onClick={onClose} className="text-stone-700 hover:text-stone-900 font-medium">
              Закрыть статью
            </button>
          }
        />
      </div>
    </div>
  );
};
