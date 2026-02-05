import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, Search } from 'lucide-react';

interface FAQScreenProps {
  onNavigate: (screen: any) => void;
}

const faqData = [
  {
    category: 'Общие вопросы',
    emoji: '❓',
    questions: [
      {
        q: 'Как работает Вкус-Робот?',
        a: 'Сделай фото холодильника → YOLOv8 распознаёт продукты → GPT-4o генерирует персональные рецепты с учётом твоих диет и предпочтений. Всё просто!',
      },
      {
        q: 'Насколько точно распознавание продуктов?',
        a: 'В режиме Premium точность распознавания достигает 92-95% благодаря YOLOv8. В Free версии используется базовая модель с точностью 75-80%.',
      },
      {
        q: 'Можно ли использовать без интернета?',
        a: 'Нет, для работы требуется интернет-соединение, так как распознавание и генерация рецептов происходят на серверах с использованием AI.',
      },
    ],
  },
  {
    category: 'Подписка и оплата',
    emoji: '💳',
    questions: [
      {
        q: 'Чем отличаются тарифы?',
        a: 'Free: 5 рецептов/день, базовое распознавание. Premium (149₽/мес): безлимит рецептов, YOLOv8, голосовое управление, интеграция с доставкой. Premium+ (249₽/мес): всё из Premium + аналитика КБЖУ, планирование меню, семейный доступ.',
      },
      {
        q: 'Как отменить подписку?',
        a: 'Зайди в "Профиль" → "Подписка" → "Отменить подписку". Доступ сохранится до конца оплаченного периода.',
      },
      {
        q: 'Можно ли вернуть деньги?',
        a: 'Да, в течение 14 дней с момента оплаты можно запросить возврат. Напиши в поддержку через раздел "Поддержка".',
      },
      {
        q: 'Есть ли пробный период?',
        a: 'Да! Новым пользователям доступен бесплатный пробный период Premium на 7 дней.',
      },
    ],
  },
  {
    category: 'Функционал',
    emoji: '⚙️',
    questions: [
      {
        q: 'Как работает голосовое управление?',
        a: 'Включи голосовое управление в режиме готовки и произноси команды: "Следующий шаг", "Повтори", "Пауза таймера", "Продолжить". Работает на русском языке.',
      },
      {
        q: 'Сколько диет поддерживается?',
        a: 'Мы поддерживаем 20 типов диет: веган, кето, палео, безглютеновая, халяль, кошерная и другие. Можно выбрать несколько одновременно!',
      },
      {
        q: 'Как добавить аллергены?',
        a: 'Зайди в "Профиль" → "Аллергены и нелюбимые" → выбери из списка или добавь свой. Мы исключим их из всех рецептов.',
      },
      {
        q: 'Работает ли интеграция с доставкой?',
        a: 'Да! В Premium доступна интеграция с Яндекс.Лавка, Самокат, Деливери, Утконос и другими. Недостающие продукты можно заказать в 1 клик.',
      },
    ],
  },
  {
    category: 'Рецепты',
    emoji: '🍳',
    questions: [
      {
        q: 'Откуда берутся рецепты?',
        a: 'Рецепты генерируются GPT-4o на основе твоих продуктов, диет и предпочтений. Также есть коллекция проверенных рецептов от шеф-поваров (Premium+).',
      },
      {
        q: 'Можно ли сохранять рецепты?',
        a: 'Да! Добавляй рецепты в избранное или создавай свои коллекции ("Завтраки", "На праздник" и т.д.).',
      },
      {
        q: 'Как рассчитывается КБЖУ?',
        a: 'Мы рассчитываем калории, белки, жиры и углеводы на основе базы данных продуктов. В Premium+ доступна детальная аналитика по каждому ингредиенту.',
      },
    ],
  },
  {
    category: 'Технические вопросы',
    emoji: '🔧',
    questions: [
      {
        q: 'На каких платформах работает?',
        a: 'Вкус-Робот работает как Telegram WebApp на iOS, Android и Desktop. Также доступна полная веб-версия.',
      },
      {
        q: 'Что делать если распознавание неточное?',
        a: 'После распознавания ты можешь отредактировать список продуктов: добавить недостающие или удалить лишние.',
      },
      {
        q: 'Как сообщить об ошибке?',
        a: 'Напиши в поддержку через "Профиль" → "Поддержка" или отправь email на support@vkus-robot.ru',
      },
    ],
  },
];

export function FAQScreen({ onNavigate }: FAQScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  // Filter FAQ based on search
  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-4 py-4 flex items-center gap-3">
          <button
            onClick={() => onNavigate('profile')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} className="text-gray-700" />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Часто задаваемые вопросы</h1>
            <p className="text-sm text-gray-500">FAQ</p>
          </div>
        </div>

        {/* Search */}
        <div className="px-4 pb-4">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск по вопросам..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        {/* FAQ Categories */}
        {filteredFAQ.length > 0 ? (
          <div className="space-y-6">
            {filteredFAQ.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">{category.emoji}</span>
                  {category.category}
                </h2>

                <div className="space-y-2">
                  {category.questions.map((item, qIndex) => {
                    const itemId = `${catIndex}-${qIndex}`;
                    const isExpanded = expandedItems.includes(itemId);

                    return (
                      <div
                        key={qIndex}
                        className="bg-white rounded-xl overflow-hidden shadow-sm"
                      >
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full px-4 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-gray-900 flex-1 pr-3">
                            {item.q}
                          </span>
                          <ChevronDown
                            size={20}
                            className={`text-gray-400 transition-transform flex-shrink-0 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {isExpanded && (
                          <div className="px-4 pb-4 text-gray-700 leading-relaxed border-t border-gray-100 pt-3">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Ничего не найдено
            </h3>
            <p className="text-gray-600 mb-6">
              Попробуй изменить запрос или напиши нам
            </p>
            <button
              onClick={() => onNavigate('support')}
              className="px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Задать вопрос в поддержку
            </button>
          </div>
        )}

        {/* Contact Support */}
        <div className="bg-gradient-to-r from-[#4ECDC4]/10 to-[#3AB8AF]/10 rounded-xl p-4 mt-8 border border-[#4ECDC4]/20">
          <div className="flex items-center gap-3 mb-3">
            <div className="text-2xl">💬</div>
            <h3 className="font-bold text-gray-900">Не нашёл ответ?</h3>
          </div>
          <p className="text-sm text-gray-700 mb-4">
            Наша команда поддержки готова помочь 24/7
          </p>
          <button
            onClick={() => onNavigate('support')}
            className="w-full py-3 bg-[#4ECDC4] text-white rounded-xl font-semibold hover:bg-[#3AB8AF] transition-colors"
          >
            Связаться с поддержкой
          </button>
        </div>
      </div>
    </div>
  );
}
