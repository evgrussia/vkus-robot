import React, { useState } from 'react';
import { Send, Lock, Smartphone, CreditCard, Check } from 'lucide-react';

interface CTAFooterProps {
  onNavigate: (screen: string) => void;
}

export function CTAFooter({ onNavigate }: CTAFooterProps) {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && agreed) {
      alert('Спасибо за подписку!');
      setEmail('');
      setAgreed(false);
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] via-[#FFD166] to-[#FF8A5C]">
        {/* Mesh Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Готов попробовать?
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Присоединяйся к 50,000 домашних поваров. Первые 3 рецепта — бесплатно.
        </p>

        {/* Main CTA */}
        <div className="flex flex-col items-center gap-8 mb-12">
          <button 
            onClick={() => onNavigate('home')}
            className="group px-12 py-5 bg-white text-[#FF6B35] rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all flex items-center gap-3"
          >
            Открыть в Telegram
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
            </svg>
          </button>

          {/* QR Code */}
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <div className="w-32 h-32 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
              <div className="text-4xl">📱</div>
            </div>
            <div className="text-sm text-gray-600">Или отсканируй QR-код</div>
          </div>
        </div>

        {/* Secondary Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-white">
          <a href="#demo" className="hover:underline flex items-center gap-2">
            Посмотреть демо-видео
          </a>
          <span className="text-white/50">•</span>
          <a href="#faq" className="hover:underline flex items-center gap-2">
            Часто задаваемые вопросы
          </a>
          <span className="text-white/50">•</span>
          <a href="#contact" className="hover:underline flex items-center gap-2">
            Связаться с нами
          </a>
        </div>

        {/* Newsletter */}
        <div className="max-w-md mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Получай рецепты недели на почту</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Введите ваш email"
                  className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <Send className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              </div>

              <label className="flex items-start gap-3 cursor-pointer text-left">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded accent-[#FF6B35]"
                  required
                />
                <span className="text-sm text-white/90">
                  Согласен на обработку персональных данных
                </span>
              </label>

              <button
                type="submit"
                disabled={!agreed || !email}
                className="w-full py-3 bg-white text-[#FF6B35] rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 text-white/90">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <Lock size={16} />
            <span className="text-sm">Данные защищены</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <Smartphone size={16} />
            <span className="text-sm">Работает в Telegram</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <CreditCard size={16} />
            <span className="text-sm">Безопасная оплата YooKassa</span>
          </div>
        </div>
      </div>
    </section>
  );
}