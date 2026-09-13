import React, { useState } from 'react';
import { X, Calendar, Clock, Video, CheckCircle, ArrowRight } from 'lucide-react';
import { BrandLeafIcon } from './CustomIcons';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [selectedTopic, setSelectedTopic] = useState('Больше уверенности в себе');
  const [selectedTime, setSelectedTime] = useState('14:00');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const topics = [
    'Больше уверенности в себе',
    'Гармоничные отношения',
    'Энергия и мотивация',
    'Достижение целей',
    'Внутренняя гармония',
  ];

  const timeSlots = ['11:00', '14:00', '16:30', '19:00'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setContact('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        id="booking-modal-card"
        className="relative w-full max-w-lg rounded-2xl border border-white/25 bg-black/80 backdrop-blur-2xl p-6 sm:p-8 text-white shadow-2xl shadow-black/80 overflow-hidden"
      >
        {/* Subtle glass specular highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        {/* Close Button */}
        <button
          id="close-booking-modal"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-300 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="flex flex-col items-center text-center py-6">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 mb-4 shadow-lg shadow-emerald-950/40">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="font-serif-display text-2xl text-white">
              Сессия успешно запланирована!
            </h3>
            <p className="text-sm text-zinc-200 font-normal mt-3 max-w-xs leading-relaxed">
              Спасибо, {name}! Мы свяжемся с вами в течение часа для подтверждения деталей встречи.
            </p>
            <div className="mt-4 p-3.5 rounded-xl border border-white/20 bg-black/50 backdrop-blur-md text-left w-full text-xs text-zinc-100 shadow-inner">
              <div className="flex items-center gap-2 mb-1.5 text-zinc-200">
                <Calendar className="w-3.5 h-3.5 text-amber-200" />
                <span>Ближайший рабочий день, {selectedTime}</span>
              </div>
              <div className="flex items-center gap-2 text-amber-100 font-medium">
                <Video className="w-3.5 h-3.5 text-amber-200" />
                <span>Бесплатный 15-минутный видеозвонок: {selectedTopic}</span>
              </div>
            </div>
            <button
              id="confirm-booking-done"
              onClick={handleReset}
              className="mt-6 rounded-full border border-white/30 bg-white/15 hover:bg-white/25 backdrop-blur-xl px-6 py-2.5 text-sm text-white font-medium transition-all shadow-lg cursor-pointer"
            >
              Отлично
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-2">
              <BrandLeafIcon className="w-5 h-5 text-amber-200" />
              <span className="text-xs uppercase tracking-wider text-amber-200 font-semibold">
                Персональная консультация
              </span>
            </div>
            <h3 className="font-serif-display text-2xl sm:text-3xl font-normal text-white">
              Запись на первую сессию
            </h3>
            <p className="text-xs sm:text-sm text-zinc-200 font-normal mt-1.5 leading-relaxed">
              15-минутный ознакомительный разговор для определения вашего текущего запроса и точек роста.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Topic selector */}
              <div>
                <label className="block text-xs text-zinc-100 mb-2 font-medium">
                  Главный фокус встречи:
                </label>
                <div className="flex flex-wrap gap-2">
                  {topics.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setSelectedTopic(topic)}
                      className={`px-3 py-1.5 rounded-full text-xs transition-all border backdrop-blur-md cursor-pointer ${
                        selectedTopic === topic
                          ? 'border-amber-200 bg-amber-200/25 text-white font-medium shadow-sm'
                          : 'border-white/20 bg-black/40 text-zinc-200 hover:border-white/35 hover:bg-black/60 hover:text-white'
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time slots */}
              <div>
                <label className="block text-xs text-zinc-100 mb-2 font-medium flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-200" />
                  Удобное время для звонка:
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 text-center rounded-lg text-xs font-mono transition-all border backdrop-blur-md cursor-pointer ${
                        selectedTime === time
                          ? 'border-amber-200 bg-amber-200/25 text-white font-semibold shadow-sm'
                          : 'border-white/20 bg-black/40 text-zinc-200 hover:border-white/35 hover:bg-black/60 hover:text-white'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs */}
              <div>
                <label htmlFor="user-name" className="block text-xs text-zinc-100 mb-1 font-medium">
                  Ваше имя:
                </label>
                <input
                  id="user-name"
                  type="text"
                  required
                  placeholder="Как к вам обращаться?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-white/25 bg-black/50 backdrop-blur-md px-3.5 py-2.5 text-sm text-white placeholder-zinc-400 focus:outline-none focus:border-amber-200 focus:bg-black/75 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="user-contact" className="block text-xs text-zinc-100 mb-1 font-medium">
                  Telegram или WhatsApp / Телефон:
                </label>
                <input
                  id="user-contact"
                  type="text"
                  required
                  placeholder="@username или +7 (999) 000-00-00"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full rounded-xl border border-white/25 bg-black/50 backdrop-blur-md px-3.5 py-2.5 text-sm text-white placeholder-zinc-400 focus:outline-none focus:border-amber-200 focus:bg-black/75 transition-colors"
                />
              </div>

              {/* Submit */}
              <button
                id="submit-booking-btn"
                type="submit"
                className="w-full mt-2 rounded-full border border-white/35 hover:border-white/70 bg-white/20 hover:bg-white/30 backdrop-blur-xl py-3 text-sm text-white font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xl shadow-black/40"
              >
                <span>Подтвердить запись на сессию</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
