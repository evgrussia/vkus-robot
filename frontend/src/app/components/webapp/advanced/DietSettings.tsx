import React, { useState } from 'react';
import { ArrowLeft, Check, Search } from 'lucide-react';

interface DietSettingsProps {
  onNavigate: (screen: any) => void;
}

const dietsList = [
  { id: 1, name: 'Веган', emoji: '🥗', description: 'Без продуктов животного происхождения' },
  { id: 2, name: 'Вегетарианство', emoji: '🥕', description: 'Без мяса и рыбы' },
  { id: 3, name: 'Низкоуглеводная', emoji: '📉', description: 'Минимум углеводов' },
  { id: 4, name: 'Кето', emoji: '🥑', description: 'Высокожировая диета' },
  { id: 5, name: 'Палео', emoji: '🦴', description: 'Как в каменном веке' },
  { id: 6, name: 'Средиземноморская', emoji: '🫒', description: 'Оливковое масло, рыба, овощи' },
  { id: 7, name: 'Безглютеновая', emoji: '🌾', description: 'Без пшеницы и глютена' },
  { id: 8, name: 'Безлактозная', emoji: '🥛', description: 'Без молочных продуктов' },
  { id: 9, name: 'Пескетарианство', emoji: '🐟', description: 'Рыба, но без мяса' },
  { id: 10, name: 'Флекситарианство', emoji: '🌱', description: 'Преимущественно растительная' },
  { id: 11, name: 'Интервальное голодание', emoji: '⏰', description: 'Ограничение времени приёма пищи' },
  { id: 12, name: 'Dash-диета', emoji: '💙', description: 'Для здоровья сердца' },
  { id: 13, name: 'Whole30', emoji: '📅', description: '30 дней чистого питания' },
  { id: 14, name: 'Низкокалорийная', emoji: '⚖️', description: 'Контроль калорий' },
  { id: 15, name: 'Высокобелковая', emoji: '💪', description: 'Для набора мышечной массы' },
  { id: 16, name: 'Сыроедение', emoji: '🥒', description: 'Только сырые продукты' },
  { id: 17, name: 'Халяль', emoji: '☪️', description: 'По исламским канонам' },
  { id: 18, name: 'Кошерная', emoji: '✡️', description: 'По иудейским канонам' },
  { id: 19, name: 'Аюрведа', emoji: '🧘', description: 'Индийская система питания' },
  { id: 20, name: 'Детокс', emoji: '🍵', description: 'Очищение организма' },
];

export function DietSettings({ onNavigate }: DietSettingsProps) {
  const [selectedDiets, setSelectedDiets] = useState<number[]>([1, 3]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDiet = (id: number) => {
    if (selectedDiets.includes(id)) {
      setSelectedDiets(selectedDiets.filter(d => d !== id));
    } else {
      setSelectedDiets([...selectedDiets, id]);
    }
  };

  const filteredDiets = dietsList.filter(diet =>
    diet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    diet.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <h1 className="text-lg font-bold text-gray-900">Мои диеты</h1>
            <p className="text-sm text-gray-500">
              Выбрано: {selectedDiets.length}
            </p>
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
              placeholder="Поиск диет..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Info Card */}
        <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FFD166]/10 rounded-xl p-4 mb-6 border border-[#FF6B35]/20">
          <div className="flex gap-3">
            <div className="text-2xl">ℹ️</div>
            <div className="text-sm text-gray-700">
              <strong>Совет:</strong> Выбери диеты, которые ты предпочитаешь. Мы будем генерировать рецепты с учётом этих ограничений.
            </div>
          </div>
        </div>

        {/* Diets List */}
        <div className="space-y-2">
          {filteredDiets.map((diet) => {
            const isSelected = selectedDiets.includes(diet.id);
            
            return (
              <button
                key={diet.id}
                onClick={() => toggleDiet(diet.id)}
                className={`w-full bg-white rounded-xl p-4 flex items-center gap-3 transition-all ${
                  isSelected
                    ? 'border-2 border-[#FF6B35] shadow-md'
                    : 'border border-gray-200 hover:border-[#FF6B35]/50'
                }`}
              >
                <div className="text-3xl">{diet.emoji}</div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-gray-900">{diet.name}</h3>
                  <p className="text-sm text-gray-600">{diet.description}</p>
                </div>
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'bg-[#FF6B35] border-[#FF6B35]'
                      : 'border-gray-300'
                  }`}
                >
                  {isSelected && <Check size={16} className="text-white" />}
                </div>
              </button>
            );
          })}
        </div>

        {filteredDiets.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Ничего не найдено
            </h3>
            <p className="text-gray-600">
              Попробуй изменить запрос
            </p>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <button
          onClick={() => onNavigate('profile')}
          className="w-full py-4 bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
        >
          Сохранить изменения
        </button>
      </div>
    </div>
  );
}
