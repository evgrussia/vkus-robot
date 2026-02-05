import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Анна К.',
    role: 'Работающая мама',
    rating: 5,
    text: 'Раньше тратила 30 минут на выбор рецепта. Теперь — 1 минута. Таймеры — это вообще магия, ничего не пригорает!',
    date: 'Январь 2026',
    avatar: '👩‍💼',
  },
  {
    name: 'Дмитрий П.',
    role: 'Начинающий кулинар',
    rating: 5,
    text: 'Боялся готовить — теперь готовлю каждый день. Пошаговые инструкции и голосовое управление сделали меня поваром!',
    date: 'Декабрь 2025',
    avatar: '👨‍💻',
  },
  {
    name: 'Елена В.',
    role: 'Веган, фитнес',
    rating: 4,
    text: 'Наконец-то рецепты под мою диету без лишних телодвижений. КБЖУ считается автоматически — мечта!',
    date: 'Февраль 2026',
    avatar: '👩‍🏫',
  },
  {
    name: 'Ольга Н.',
    role: 'Многодетная мама',
    rating: 5,
    text: 'Экономлю 3-4 тысячи в месяц — продукты больше не портятся. Дети довольны разнообразием!',
    date: 'Январь 2026',
    avatar: '👩‍👧‍👦',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Что говорят наши пользователи
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Более 50,000 домашних поваров уже используют Вкус-Робот
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % testimonials.length;
              const testimonial = testimonials[index];
              const isCenter = offset === 1;

              return (
                <div
                  key={index}
                  className={`transition-all duration-300 ${
                    isCenter ? 'md:scale-105 md:z-10' : 'md:scale-95 md:opacity-60'
                  }`}
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full">
                    {/* Avatar & Info */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FFD166] flex items-center justify-center text-2xl">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < testimonial.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 leading-relaxed mb-4">"{testimonial.text}"</p>

                    {/* Date */}
                    <div className="text-sm text-gray-500">{testimonial.date}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#FF6B35] w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Media Mentions */}
        <div className="mt-16 text-center">
          <div className="text-sm text-gray-500 mb-6">О нас пишут</div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['vc.ru', 'Habr', 'TJournal', 'Telegram News'].map((media, index) => (
              <div key={index} className="text-2xl font-bold text-gray-300">
                {media}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}