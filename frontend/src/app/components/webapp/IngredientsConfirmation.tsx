import React, { useState } from 'react';
import { ArrowLeft, Plus, X, Check, RefreshCw, Edit3 } from 'lucide-react';

interface IngredientsConfirmationProps {
  onNavigate: (screen: any) => void;
}

const mockIngredients = [
  { id: 1, name: 'Помидоры', quantity: '3 шт', selected: true },
  { id: 2, name: 'Огурцы', quantity: '2 шт', selected: true },
  { id: 3, name: 'Сыр', quantity: '200г', selected: true },
  { id: 4, name: 'Яйца', quantity: '6 шт', selected: true },
  { id: 5, name: 'Молоко', quantity: '500 мл', selected: true },
  { id: 6, name: 'Лук репчатый', quantity: '1 шт', selected: true },
  { id: 7, name: 'Морковь', quantity: '2 шт', selected: true },
  { id: 8, name: 'Куриное филе', quantity: '400г', selected: true },
];

const suggestions = ['Масло', 'Соль', 'Чеснок', 'Перец', 'Зелень'];

export function IngredientsConfirmation({ onNavigate }: IngredientsConfirmationProps) {
  const [ingredients, setIngredients] = useState(mockIngredients);
  const [newIngredient, setNewIngredient] = useState('');
  const [showAddInput, setShowAddInput] = useState(false);

  const toggleIngredient = (id: number) => {
    setIngredients(
      ingredients.map((ing) => (ing.id === id ? { ...ing, selected: !ing.selected } : ing))
    );
  };

  const removeIngredient = (id: number) => {
    setIngredients(ingredients.filter((ing) => ing.id !== id));
  };

  const addIngredient = (name: string) => {
    if (name.trim()) {
      setIngredients([
        ...ingredients,
        { id: Date.now(), name: name.trim(), quantity: '', selected: true },
      ]);
      setNewIngredient('');
      setShowAddInput(false);
    }
  };

  const checkedCount = ingredients.filter((ing) => ing.selected).length;
  const accuracy = 92;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} className="text-gray-700" />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Найденные продукты</h1>
            <p className="text-sm text-gray-500">Проверь список</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Stats */}
        <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FFD166]/10 rounded-xl p-4 mb-6 border border-[#FF6B35]/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700 font-semibold">Найдено продуктов:</span>
            <span className="text-2xl font-bold text-[#FF6B35]">{checkedCount}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 font-semibold">Точность распознавания:</span>
            <span className="text-lg font-bold text-green-600">{accuracy}%</span>
          </div>
        </div>

        {/* Instructions */}
        <p className="text-gray-600 mb-4">
          Проверь список — я нашёл в твоём холодильнике:
        </p>

        {/* Ingredients List */}
        <div className="space-y-2 mb-6">
          {ingredients.map((ingredient) => (
            <div
              key={ingredient.id}
              className={`bg-white rounded-xl p-4 flex items-center gap-3 transition-all ${
                ingredient.selected ? 'shadow-sm' : 'opacity-50'
              }`}
            >
              <button
                onClick={() => toggleIngredient(ingredient.id)}
                className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                  ingredient.selected
                    ? 'bg-green-500 border-green-500'
                    : 'border-gray-300'
                }`}
              >
                {ingredient.selected && <Check size={16} className="text-white" />}
              </button>

              <div className="flex-1">
                <div className={`font-semibold ${ingredient.selected ? 'text-gray-900' : 'text-gray-400 line-through'}`}>
                  {ingredient.name}
                </div>
                {ingredient.quantity && (
                  <div className="text-sm text-gray-500">{ingredient.quantity}</div>
                )}
              </div>

              <button
                onClick={() => removeIngredient(ingredient.id)}
                className="p-2 hover:bg-red-50 rounded-lg transition-colors"
              >
                <X size={18} className="text-red-500" />
              </button>
            </div>
          ))}
        </div>

        {/* Add More Section */}
        <div className="bg-white rounded-xl p-4 mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Добавить продукт</h3>
          
          <div className="relative mb-3">
            <input
              type="text"
              value={newIngredient}
              onChange={(e) => setNewIngredient(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') addIngredient(newIngredient);
              }}
              placeholder="Название продукта..."
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
            />
            <button
              onClick={() => addIngredient(newIngredient)}
              disabled={!newIngredient.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#FF6B35] text-white rounded-lg hover:bg-[#E55428] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Plus size={20} />
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => addIngredient(suggestion)}
                className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                + {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 space-y-3">
        <button
          onClick={() => onNavigate('results')}
          disabled={checkedCount === 0}
          className="w-full py-4 bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <Check size={20} />
          Всё верно — сгенерировать рецепты
        </button>

        <div className="flex gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCw size={18} />
            Переснять фото
          </button>
          <button
            className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            <Edit3 size={18} />
            Ввести вручную
          </button>
        </div>
      </div>
    </div>
  );
}