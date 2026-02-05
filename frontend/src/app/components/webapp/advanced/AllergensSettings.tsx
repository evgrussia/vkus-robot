import React, { useState } from 'react';
import { ArrowLeft, X, Plus, Search } from 'lucide-react';

interface AllergensSettingsProps {
  onNavigate: (screen: any) => void;
}

const commonAllergens = [
  { id: 1, name: 'Арахис', emoji: '🥜', type: 'allergen' },
  { id: 2, name: 'Орехи', emoji: '🌰', type: 'allergen' },
  { id: 3, name: 'Молоко', emoji: '🥛', type: 'allergen' },
  { id: 4, name: 'Яйца', emoji: '🥚', type: 'allergen' },
  { id: 5, name: 'Рыба', emoji: '🐟', type: 'allergen' },
  { id: 6, name: 'Морепродукты', emoji: '🦐', type: 'allergen' },
  { id: 7, name: 'Соя', emoji: '🫘', type: 'allergen' },
  { id: 8, name: 'Пшеница', emoji: '🌾', type: 'allergen' },
  { id: 9, name: 'Глютен', emoji: '🍞', type: 'allergen' },
  { id: 10, name: 'Мёд', emoji: '🍯', type: 'allergen' },
  { id: 11, name: 'Грибы', emoji: '🍄', type: 'dislike' },
  { id: 12, name: 'Кинза', emoji: '🌿', type: 'dislike' },
  { id: 13, name: 'Оливки', emoji: '🫒', type: 'dislike' },
  { id: 14, name: 'Баклажаны', emoji: '🍆', type: 'dislike' },
  { id: 15, name: 'Авокадо', emoji: '🥑', type: 'dislike' },
];

export function AllergensSettings({ onNavigate }: AllergensSettingsProps) {
  const [selectedItems, setSelectedItems] = useState<number[]>([1, 11, 12]);
  const [activeTab, setActiveTab] = useState<'allergens' | 'dislikes'>('allergens');
  const [customInput, setCustomInput] = useState('');
  const [customItems, setCustomItems] = useState<Array<{id: number, name: string, emoji: string, type: string}>>([]);

  const toggleItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(i => i !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const addCustomItem = () => {
    if (customInput.trim()) {
      const newItem = {
        id: Date.now(),
        name: customInput.trim(),
        emoji: activeTab === 'allergens' ? '⚠️' : '🚫',
        type: activeTab,
      };
      setCustomItems([...customItems, newItem]);
      setSelectedItems([...selectedItems, newItem.id]);
      setCustomInput('');
    }
  };

  const removeCustomItem = (id: number) => {
    setCustomItems(customItems.filter(i => i.id !== id));
    setSelectedItems(selectedItems.filter(i => i !== id));
  };

  const allItems = [...commonAllergens, ...customItems];
  const filteredItems = allItems.filter(item => 
    activeTab === 'allergens' ? item.type === 'allergen' : item.type === 'dislike'
  );

  const selectedAllergensCount = selectedItems.filter(id => {
    const item = allItems.find(i => i.id === id);
    return item?.type === 'allergen';
  }).length;

  const selectedDislikesCount = selectedItems.filter(id => {
    const item = allItems.find(i => i.id === id);
    return item?.type === 'dislike';
  }).length;

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
            <h1 className="text-lg font-bold text-gray-900">Аллергены и нелюбимые</h1>
            <p className="text-sm text-gray-500">
              Исключим из рецептов
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('allergens')}
            className={`flex-1 py-3 font-semibold text-sm transition-colors relative ${
              activeTab === 'allergens' ? 'text-[#FF6B35]' : 'text-gray-600'
            }`}
          >
            Аллергены ⚠️
            {selectedAllergensCount > 0 && (
              <span className="ml-1 text-xs">({selectedAllergensCount})</span>
            )}
            {activeTab === 'allergens' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6B35]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('dislikes')}
            className={`flex-1 py-3 font-semibold text-sm transition-colors relative ${
              activeTab === 'dislikes' ? 'text-[#FF6B35]' : 'text-gray-600'
            }`}
          >
            Нелюбимые 🚫
            {selectedDislikesCount > 0 && (
              <span className="ml-1 text-xs">({selectedDislikesCount})</span>
            )}
            {activeTab === 'dislikes' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6B35]" />
            )}
          </button>
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Warning Card */}
        {activeTab === 'allergens' && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <div className="flex gap-3">
              <div className="text-2xl">⚠️</div>
              <div className="text-sm text-red-700">
                <strong>Важно:</strong> Мы исключим указанные аллергены, но всегда проверяй состав перед приготовлением.
              </div>
            </div>
          </div>
        )}

        {/* Add Custom Item */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-3">
            Добавить {activeTab === 'allergens' ? 'аллерген' : 'нелюбимый продукт'}
          </h3>
          <div className="relative">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') addCustomItem();
              }}
              placeholder="Например: лук..."
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
            />
            <button
              onClick={addCustomItem}
              disabled={!customInput.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#FF6B35] text-white rounded-lg hover:bg-[#E55428] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Plus size={20} />
            </button>
          </div>
        </div>

        {/* Selected Items */}
        {selectedItems.length > 0 && (
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">
              Выбранные ({selectedItems.filter(id => {
                const item = allItems.find(i => i.id === id);
                return item?.type === activeTab;
              }).length})
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedItems.map(id => {
                const item = allItems.find(i => i.id === id);
                if (!item || item.type !== activeTab) return null;
                const isCustom = customItems.some(ci => ci.id === id);

                return (
                  <button
                    key={id}
                    onClick={() => toggleItem(id)}
                    className="flex items-center gap-2 px-3 py-2 bg-red-100 text-red-700 rounded-full font-semibold hover:bg-red-200 transition-colors"
                  >
                    <span>{item.emoji}</span>
                    <span>{item.name}</span>
                    <X size={16} />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Items Grid */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">
            {activeTab === 'allergens' ? 'Популярные аллергены' : 'Популярные нелюбимые'}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {filteredItems.map((item) => {
              const isSelected = selectedItems.includes(item.id);
              const isCustom = customItems.some(ci => ci.id === item.id);

              return (
                <div
                  key={item.id}
                  className="relative"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className={`w-full bg-white rounded-xl p-4 flex flex-col items-center gap-2 transition-all ${
                      isSelected
                        ? 'border-2 border-red-500 shadow-md'
                        : 'border border-gray-200 hover:border-red-300'
                    }`}
                  >
                    <div className="text-3xl">{item.emoji}</div>
                    <div className="font-semibold text-gray-900 text-center text-sm">
                      {item.name}
                    </div>
                  </button>
                  
                  {isCustom && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeCustomItem(item.id);
                      }}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-md"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
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
