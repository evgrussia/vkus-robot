import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FFD166] flex items-center justify-center">
                <span className="text-2xl">🍳</span>
              </div>
              <span className="text-xl font-bold">Вкус-Робот</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI-кулинарный ассистент в Telegram. Распознаем продукты, генерируем рецепты, помогаем
              готовить.
            </p>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="font-bold mb-4">Продукт</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Возможности
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Тарифы
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  Как это работает
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Отзывы
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-bold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">
                  Блог
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-white transition-colors">
                  Карьера
                </a>
              </li>
              <li>
                <a href="#press" className="hover:text-white transition-colors">
                  Пресса
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#support" className="hover:text-white transition-colors">
                  Поддержка
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@vkusrobot.ru"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail size={14} />
                  support@vkusrobot.ru
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div>© 2026 Вкус-Робот. Все права защищены. Сделано с ❤️ в России</div>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
