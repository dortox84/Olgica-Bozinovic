import React, { useState } from 'react';
import { OlgicaLogo } from './OlgicaLogo';
import { X, CheckCircle, ArrowRight, Sparkles, Shield, HeartHandshake, Award } from 'lucide-react';

interface ConfidentalModalProps {
  isOpen: boolean;
  type: 'contact' | 'products' | 'section';
  sectionName?: string;
  onClose: () => void;
}

export const ConfidentalModal: React.FC<ConfidentalModalProps> = ({
  isOpen,
  type,
  sectionName = 'about',
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        id="confidental-modal-card"
        className="relative w-full max-w-lg rounded-[28px] border border-white/25 bg-[#141210]/95 backdrop-blur-2xl p-7 sm:p-9 text-white shadow-2xl shadow-black/80 overflow-hidden"
      >
        {/* Top hairline specular highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-white/70 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors cursor-pointer"
          aria-label="Закрыть"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content Type: Contact */}
        {type === 'contact' && (
          <div>
            {submitted ? (
              <div className="text-center py-6 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 mb-4 shadow-lg shadow-emerald-950/40">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-normal text-white font-display">
                  Спасибо, {name || 'дорогой гость'}!
                </h3>
                <p className="text-sm text-zinc-300 font-light mt-3 max-w-xs leading-relaxed">
                  Ваше сообщение успешно отправлено. Мы свяжемся с вами в течение 24 часов для согласования удобного времени.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-6 rounded-full border border-white/30 bg-white/15 hover:bg-white/25 px-6 py-2.5 text-sm text-white font-medium transition-all cursor-pointer shadow-lg"
                >
                  Закрыть
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <OlgicaLogo className="h-6 w-auto" />
                  <span className="text-xs uppercase tracking-wider text-white/70 font-medium">
                    Связаться с нами
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-normal text-white">
                  Оставить заявку
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-light mt-1.5 leading-relaxed">
                  Запишитесь на первичную ознакомительную консультацию или задайте любой вопрос.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs text-white/80 mb-1 font-medium">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Например, Анна"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-white/20 bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/60 focus:bg-black/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-white/80 mb-1 font-medium">
                      Телефон или Telegram / Email
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="+7 (999) 000-00-00 или @username"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-white/20 bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/60 focus:bg-black/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-white/80 mb-1 font-medium">
                      Ваш запрос или пожелание
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Опишите, к каким изменениям вы стремитесь..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full rounded-xl border border-white/20 bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/60 focus:bg-black/60 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 rounded-full border border-white/40 hover:border-white/80 bg-white/20 hover:bg-white/30 py-3 text-sm text-white font-medium flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xl shadow-black/40"
                  >
                    <span>Отправить сообщение</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </div>
        )}

        {/* Content Type: Products / Programs */}
        {type === 'products' && (
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <OlgicaLogo className="h-6 w-auto" />
              <span className="text-xs uppercase tracking-wider text-white/70 font-medium">
                Программы и методики
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-normal text-white">
              Наши программы
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-light mt-1.5 leading-relaxed">
              Индивидуальное сопровождение, направленное на раскрытие потенциала, преодоление внутренних барьеров и обретение гармонии.
            </p>

            <div className="mt-6 space-y-3">
              {[
                {
                  title: 'Индивидуальное менторство',
                  desc: 'Глубинная работа с внутренними блоками, формулирование ясных целей и персональный пошаговый маршрут.',
                  tag: 'Флагман',
                },
                {
                  title: 'Практика баланса и энергии',
                  desc: 'Мягкое выравнивание режима, эмоциональная стабильность, освобождение от хронической усталости.',
                  tag: 'Популярно',
                },
                {
                  title: 'Экспресс-сессия перезагрузки',
                  desc: 'Интенсивная 90-минутная сессия для поиска выхода из сложной жизненной ситуации и принятия важного решения.',
                  tag: 'Быстрый старт',
                },
              ].map((prod, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-2xl border border-white/15 bg-black/40 hover:bg-black/60 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-medium text-white">{prod.title}</h4>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border border-white/20 bg-white/10 text-white/90">
                      {prod.tag}
                    </span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">{prod.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between">
              <button
                onClick={onClose}
                className="text-xs text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                Закрыть
              </button>
              <button
                onClick={onClose}
                className="rounded-full border border-white/40 bg-white/15 hover:bg-white/25 px-5 py-2 text-xs text-white font-medium transition-all shadow-lg cursor-pointer"
              >
                Записаться
              </button>
            </div>
          </div>
        )}

        {/* Content Type: General Section */}
        {type === 'section' && (
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <OlgicaLogo className="h-6 w-auto" />
              <span className="text-xs uppercase tracking-wider text-white/70 font-medium capitalize">
                О методике
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-normal text-white">
              Исследования & Секреты гармонии
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-light mt-1.5 leading-relaxed">
              Научные подходы нейропсихологии и коучинга в сочетании с бережным вниманием к личности.
            </p>

            <div className="mt-6 space-y-3">
              <div className="p-4 rounded-2xl border border-white/15 bg-black/40">
                <div className="flex items-center gap-2 mb-1.5 text-white">
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span className="text-sm font-medium">Осознанность и нейропластичность</span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  Формирование устойчивых позитивных нейронных связей через регулярные микропрактики и глубокую рефлексию.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-white/15 bg-black/40">
                <div className="flex items-center gap-2 mb-1.5 text-white">
                  <HeartHandshake className="w-4 h-4 text-amber-200" />
                  <span className="text-sm font-medium">Безопасное пространство доверия</span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  Полная конфиденциальность и бережная поддержка на каждом этапе личностной трансформации.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between">
              <button
                onClick={onClose}
                className="text-xs text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                Закрыть
              </button>
              <button
                onClick={onClose}
                className="rounded-full border border-white/40 bg-white/15 hover:bg-white/25 px-5 py-2 text-xs text-white font-medium transition-all shadow-lg cursor-pointer"
              >
                Понятно
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
