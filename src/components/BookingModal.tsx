import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  serviceTitle = 'Первичная консультация',
}) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setContact('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="booking-modal-card"
        className="relative w-full max-w-lg rounded-2xl border border-stone-200 bg-white/98 backdrop-blur-2xl p-6 sm:p-8 text-stone-900 shadow-2xl shadow-stone-900/20 overflow-hidden"
      >
        {/* Top gold accent line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200" />

        {/* Close Button */}
        <button
          id="close-booking-modal"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-500 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-200 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="flex flex-col items-center text-center py-6">
            <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600 mb-4 shadow-md">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="font-serif-display text-2xl text-stone-900">
              Сессия успешно запланирована!
            </h3>
            <p className="text-sm text-stone-600 font-normal mt-3 max-w-xs leading-relaxed">
              Спасибо, {name}! Мы свяжемся с вами в течение часа для подтверждения деталей встречи.
            </p>
            <div className="mt-4 p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700">
              <p className="font-medium text-stone-950">{serviceTitle}</p>
              <p className="mt-1">
                {date || 'В ближайшее время'} · {time || '10:00 - 19:00'}
              </p>
            </div>
            <button
              onClick={handleReset}
              className="mt-6 rounded-full border border-stone-900 bg-stone-900 hover:bg-stone-800 px-6 py-2 text-sm text-white font-medium transition-all shadow-md cursor-pointer"
            >
              Отлично
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span className="text-xs uppercase tracking-wider text-amber-700 font-semibold">
                Запись на прием
              </span>
            </div>
            <h3 className="font-serif-display text-2xl sm:text-3xl font-normal text-stone-900">
              {serviceTitle}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-normal mt-1 mb-6">
              Выберите удобный день и время для консультации
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Ваше имя
                </label>
                <input
                  type="text"
                  required
                  placeholder="Имя и Фамилия"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-stone-50 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-800 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Телефон или Telegram
                </label>
                <input
                  type="text"
                  required
                  placeholder="+7 (999) 000-00-00 или @username"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-stone-50 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-800 transition-colors text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-600" />
                    Дата
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-stone-50 text-stone-900 focus:outline-none focus:border-stone-800 transition-colors text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    Время
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-stone-50 text-stone-900 focus:outline-none focus:border-stone-800 transition-colors text-xs"
                  >
                    <option value="11:00">11:00</option>
                    <option value="13:00">13:00</option>
                    <option value="15:00">15:00</option>
                    <option value="17:00">17:00</option>
                    <option value="19:00">19:00</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full border border-stone-900 bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  Подтвердить запись
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
