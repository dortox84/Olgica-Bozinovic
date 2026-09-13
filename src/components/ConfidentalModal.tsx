import React, { useState } from 'react';
import { X, CheckCircle, Send, Sparkles } from 'lucide-react';
import { OlgicaLogo } from './OlgicaLogo';
import { OLGICA_DATA } from '../data/bozinovicData';

interface ConfidentalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'contact' | 'method' | 'products';
}

export const ConfidentalModal: React.FC<ConfidentalModalProps> = ({
  isOpen,
  onClose,
  type,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="confidental-modal-card"
        className="relative w-full max-w-lg rounded-[28px] border border-stone-200 bg-white/98 backdrop-blur-2xl p-7 sm:p-9 text-stone-900 shadow-2xl shadow-stone-900/20 overflow-hidden"
      >
        {/* Top subtle highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-stone-500 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-200 transition-colors cursor-pointer"
          aria-label="Закрыть"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content Type: Contact */}
        {type === 'contact' && (
          <div>
            {submitted ? (
              <div className="text-center py-6 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600 mb-4 shadow-md">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-normal text-stone-900 font-display">
                  Спасибо, {name || 'дорогой гость'}!
                </h3>
                <p className="text-sm text-stone-600 font-light mt-3 max-w-xs leading-relaxed">
                  Ваше сообщение успешно отправлено. Мы свяжемся с вами в течение 24 часов для согласования удобного времени.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-6 rounded-full border border-stone-900 bg-stone-900 hover:bg-stone-800 px-6 py-2.5 text-sm text-white font-medium transition-all cursor-pointer shadow-lg"
                >
                  Закрыть
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <OlgicaLogo className="h-6 w-auto" theme="light" />
                  <span className="text-xs uppercase tracking-wider text-amber-700 font-semibold">
                    Связаться с нами
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-normal text-stone-900">
                  Оставить заявку
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-light mt-1.5 leading-relaxed">
                  Запишитесь на первичную ознакомительную консультацию или задайте любой вопрос.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs text-stone-700 mb-1 font-medium">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Например, Анна"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-stone-300 bg-stone-50/80 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-800 focus:ring-1 focus:ring-stone-800 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-stone-700 mb-1 font-medium">
                      Email или Telegram
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="anna@example.com или @username"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-stone-300 bg-stone-50/80 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-800 focus:ring-1 focus:ring-stone-800 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-stone-700 mb-1 font-medium">
                      Сообщение или пожелание (необязательно)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Расскажите о ваших целях или задайте вопрос..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full rounded-xl border border-stone-300 bg-stone-50/80 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-800 focus:ring-1 focus:ring-stone-800 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 rounded-full border border-stone-900 bg-stone-900 hover:bg-stone-800 py-3 text-sm text-white font-medium flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-4 h-4" />
                    <span>Отправить запрос</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        )}

        {/* Content Type: Method */}
        {type === 'method' && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span className="text-xs uppercase tracking-wider text-amber-700 font-semibold">
                Методология
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-normal text-stone-900">
              Гармония, наука и природа
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-light mt-2 leading-relaxed">
              Наш интегральный подход объединяет передовые научные знания в нутрициологии, клиническую практику и деликатное уважение к уникальности каждого человека.
            </p>

            <div className="mt-6 space-y-3.5">
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80">
                <h4 className="text-sm font-semibold text-stone-900 mb-1">
                  1. Комплексный скрининг
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  Глубокий анализ микронутриентного статуса, привычек питания, гормонального баланса и уровня стресса.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <h4 className="text-sm font-semibold text-stone-900 mb-1">
                  2. Персонализированный протокол
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  Пошаговая программа питания и безопасной таргетной суплементации, созданная индивидуально для вас.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <h4 className="text-sm font-semibold text-stone-900 mb-1">
                  3. Сопровождение и адаптация
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  Постоянный контроль динамики, бережная корректировка и закрепление устойчивых привычек для долгосрочного результата.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full mt-6 rounded-full border border-stone-900 bg-stone-900 hover:bg-stone-800 py-3 text-sm text-white font-medium transition-all cursor-pointer shadow-md hover:shadow-lg"
            >
              Понятно
            </button>
          </div>
        )}

        {/* Content Type: Products */}
        {type === 'products' && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span className="text-xs uppercase tracking-wider text-amber-700 font-semibold">
                Программы здоровья
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-normal text-stone-900">
              Персональные решения
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-light mt-1.5 leading-relaxed">
              Выберите подходящий формат сопровождения для восстановления энергии, иммунитета и природного сияния.
            </p>

            <div className="mt-6 space-y-3 max-h-[50vh] overflow-y-auto pr-1">
              {OLGICA_DATA.programs.map((program) => (
                <div key={program.id} className="p-4 rounded-2xl bg-stone-50 hover:bg-amber-50/60 border border-stone-200 transition-colors flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-semibold text-amber-800 uppercase tracking-wider block">
                      {program.category}
                    </span>
                    <h4 className="text-sm font-semibold text-stone-900 mt-0.5">
                      {program.title}
                    </h4>
                    <p className="text-xs text-stone-600 font-light mt-0.5">
                      {program.duration} &middot; {program.features[0]}
                    </p>
                  </div>
                  {program.price && (
                    <span className="text-xs font-semibold text-stone-900 bg-white border border-stone-200 px-3 py-1 rounded-full shadow-xs whitespace-nowrap">
                      {program.price}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={onClose}
              className="w-full mt-6 rounded-full border border-stone-900 bg-stone-900 hover:bg-stone-800 py-3 text-sm text-white font-medium transition-all cursor-pointer shadow-md hover:shadow-lg"
            >
              Закрыть
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
